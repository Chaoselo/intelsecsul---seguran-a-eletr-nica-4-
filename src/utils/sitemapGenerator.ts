import fs from 'fs';
import path from 'path';
import { PRERENDER_ROUTES, getAbsoluteUrl } from '../routesList';
import { BLOG_ARTICLES } from '../data/blogArticles';
import { DEFAULT_PAGE_LASTMOD, PAGE_LASTMOD_OVERRIDES } from '../data/pageLastmod';

const DEPRECATED_ROUTES_BLOCKLIST = new Set([
  '/depoimentos',
  '/depoimentos/',
  '/faq',
  '/faq/',
  '/servicos/portao-eletronico',
  '/servicos/portao-eletronico/',
  '/servicos/alarme-monitorado',
  '/servicos/alarme-monitorado/',
  '/servicos/alarme-monitorado/residencial',
  '/servicos/alarme-monitorado/residencial/',
  '/servicos/alarme-monitorado/empresarial',
  '/servicos/alarme-monitorado/empresarial/',
  '/servicos/locacao-de-cameras-de-seguranca',
  '/servicos/locacao-de-cameras-de-seguranca/',
  '/servicos/locacao-de-equipamentos-de-seguranca',
  '/servicos/locacao-de-equipamentos-de-seguranca/',
  '/servicos/locacao-de-equipamentos',
  '/servicos/locacao-de-equipamentos/',
  '/servicos/fechaduras-eletromagneticas',
  '/servicos/fechaduras-eletromagneticas/',
  '/servicos/interfones',
  '/servicos/interfones/',
  '/servicos/manutencao-de-sistemas-de-seguranca',
  '/servicos/manutencao-de-sistemas-de-seguranca/',
  '/comparativos/compra-x-locacao-de-equipamentos',
  '/comparativos/compra-x-locacao-de-equipamentos/',
]);

export function generateSitemapXml(): string {
  const seenUrls = new Set<string>();
  const urlEntries: string[] = [];

  for (const route of PRERENDER_ROUTES) {
    if (DEPRECATED_ROUTES_BLOCKLIST.has(route)) {
      throw new Error(`Deprecated or redirected route found in sitemap routes: ${route}`);
    }

    const url = getAbsoluteUrl(route);

    if (seenUrls.has(url)) {
      throw new Error(`Duplicate URL found in sitemap generation: ${url}`);
    }
    seenUrls.add(url);

    let lastmod = DEFAULT_PAGE_LASTMOD;

    if (route.startsWith('/blog/') && route !== '/blog') {
      const slug = route.replace('/blog/', '').replace(/\/$/, '');
      const article = BLOG_ARTICLES.find((a) => a.slug === slug);
      if (article) {
        lastmod = article.updatedDate || article.publishedDate || DEFAULT_PAGE_LASTMOD;
      }
    } else {
      const cleanRoute = route.endsWith('/') && route.length > 1 ? route.slice(0, -1) : route;
      lastmod = PAGE_LASTMOD_OVERRIDES[route] || PAGE_LASTMOD_OVERRIDES[cleanRoute] || DEFAULT_PAGE_LASTMOD;
    }

    urlEntries.push(`  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`);
  }

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
