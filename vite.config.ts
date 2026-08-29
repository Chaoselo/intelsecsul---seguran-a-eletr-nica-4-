import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
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

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      sitemapPlugin(),
      prerender({
        routes: PRERENDER_ROUTES,
        renderer: new PuppeteerRenderer({
          headless: true,
          renderAfterTime: 500,
          args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
          // Usa o Chrome instalado pela integração "netlify-plugin-chromium".
          // Em ambiente local (onde CHROME_PATH não existe), cai no comportamento
          // padrão do Puppeteer, que já sabe localizar o Chrome baixado localmente.
          executablePath: process.env.CHROME_PATH || undefined,
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
