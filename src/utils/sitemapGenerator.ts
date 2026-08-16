import fs from 'fs';
import path from 'path';
import { PRERENDER_ROUTES, getAbsoluteUrl } from '../routesList';

export function generateSitemapXml(): string {
  const lastmod = new Date().toISOString().split('T')[0];
  const urlEntries = PRERENDER_ROUTES.map((route) => {
    const url = getAbsoluteUrl(route);
    return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
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

