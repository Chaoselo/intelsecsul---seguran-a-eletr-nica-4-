import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { execFileSync } from 'child_process';
import { defineConfig } from 'vite';
import prerender from '@prerenderer/rollup-plugin';
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer';
import { PRERENDER_ROUTES } from './src/routesList';
import { writeSitemapFiles } from './src/utils/sitemapGenerator';

function sitemapPlugin() {
  return {
    name: 'generate-sitemap-plugin',
    buildStart() {
      writeSitemapFiles(process.cwd());
    },
    closeBundle() {
      writeSitemapFiles(process.cwd());
    },
  };
}

/**
 * Garante que o Chrome exigido pela versão instalada do Puppeteer exista ANTES do prerender.
 * Se não existir (cache do Netlify vazio, postinstall pulado etc.), baixa automaticamente
 * a versão exata. Assim o build não depende de cache nem de plugins externos.
 */
function ensureChromePlugin() {
  return {
    name: 'ensure-chrome-for-prerender',
    apply: 'build' as const,
    async buildStart() {
      const { default: puppeteer } = await import('puppeteer');

      // No Puppeteer 25, executablePath() é assíncrono e devolve o caminho ESPERADO,
      // mesmo que o arquivo não exista. Por isso a checagem com existsSync.
      const findChrome = async (): Promise<string | null> => {
        try {
          const chromePath = await puppeteer.executablePath();
          return chromePath && fs.existsSync(chromePath) ? chromePath : null;
        } catch {
          return null;
        }
      };

      const found = await findChrome();
      if (found) {
        console.log(`[chrome] OK: ${found}`);
        return;
      }

      console.warn('[chrome] Chrome não encontrado. Instalando a versão exata exigida pelo Puppeteer...');
      try {
        execFileSync('npx', ['puppeteer', 'browsers', 'install', 'chrome'], { stdio: 'inherit' });
      } catch {
        throw new Error(
          '[chrome] Falha ao baixar o Chrome para o prerender (detalhes logo acima). ' +
            'Verifique se o build tem acesso à internet e o valor de PUPPETEER_CACHE_DIR.'
        );
      }

      const installed = await findChrome();
      if (!installed) {
        throw new Error('[chrome] O download terminou, mas o executável do Chrome não foi encontrado.');
      }
      console.log(`[chrome] Instalado: ${installed}`);
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      sitemapPlugin(),
      ensureChromePlugin(),
      prerender({
        routes: PRERENDER_ROUTES,
        renderer: new PuppeteerRenderer({
          headless: true,
          renderAfterTime: 500,
          // Limita as páginas abertas ao mesmo tempo (padrão = ilimitado, cresce a cada artigo novo)
          maxConcurrentRoutes: 4,
          timeout: 60000,
          args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        }),
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
