import fs from 'fs';
import path from 'path';
import { PRERENDER_ROUTES } from '../routesList';

const DOMAIN = 'https://intelsecsul.com.br';

function getRouteMetadata(route: string): { priority: string; changefreq: string } {
  if (route === '/') {
    return { priority: '1.0', changefreq: 'weekly' };
  }
  if (route === '/servicos/locacao-de-cameras-de-seguranca') {
    return { priority: '1.0', changefreq: 'monthly' };
  }
  if (route === '/contato' || route === '/cidades/curitiba') {
    return { priority: '0.9', changefreq: 'monthly' };
  }
  if (
    route === '/servicos/cameras-de-seguranca' ||
    route === '/servicos/instalacao-de-alarmes' ||
    route === '/servicos/cerca-eletrica' ||
    route === '/servicos/portao-eletronico'
  ) {
    return { priority: '0.9', changefreq: 'monthly' };
  }
  if (
    route === '/cidades' ||
    route === '/comparativos' ||
    route === '/comparativos/compra-x-locacao-de-equipamentos' ||
    route === '/comparativos/intelsecsul-x-verisure' ||
    route === '/blog' ||
    route === '/servicos/controle-de-acesso' ||
    route === '/servicos/interfonia' ||
    route === '/servicos/cancelas-e-catracas' ||
    route === '/servicos/fechaduras-eletromagneticas' ||
    route === '/servicos/manutencao'
  ) {
    return { priority: '0.8', changefreq: route === '/blog' ? 'weekly' : 'monthly' };
  }
  if (
    route === '/sobre' ||
    route === '/por-que-escolher-a-intelsecsul' ||
    route === '/depoimentos' ||
    route === '/perguntas-frequentes' ||
    route === '/glossario'
  ) {
    return { priority: '0.5', changefreq: 'monthly' };
  }
  // Sub-serviços, cidades da região metropolitana, posts do blog
  return { priority: '0.7', changefreq: 'monthly' };
}

export function generateSitemapXml(): string {
  const urlEntries = PRERENDER_ROUTES.map((route) => {
    const { priority, changefreq } = getRouteMetadata(route);
    const url = route === '/' ? `${DOMAIN}/` : `${DOMAIN}${route}`;
    return `  <url>\n    <loc>${url}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries.join(
    '\n'
  )}\n</urlset>\n`;
}

export function writeSitemapFiles(rootDir: string) {
  const xmlContent = generateSitemapXml();
  const publicPath = path.join(rootDir, 'public', 'sitemap.xml');
  fs.writeFileSync(publicPath, xmlContent, 'utf-8');

  const distDir = path.join(rootDir, 'dist');
  if (fs.existsSync(distDir)) {
    const distPath = path.join(distDir, 'sitemap.xml');
    fs.writeFileSync(distPath, xmlContent, 'utf-8');
  }
}
