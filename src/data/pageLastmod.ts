/**
 * Data padrão de última modificação para páginas institucionais, hubs, cidades e serviços.
 * Formato ISO YYYY-MM-DD exigido pelo protocolo do Sitemap (sitemaps.org).
 */
export const DEFAULT_PAGE_LASTMOD = '2026-11-04';

/**
 * Sobrescritas pontuais de lastmod por rota (sempre normalizadas, ex.: '/servicos/cameras-de-seguranca').
 * Serve para registrar quando uma página específica (institucional, cidade, serviço ou hub)
 * sofrer atualização substancial de conteúdo em data posterior à data padrão.
 */
export const PAGE_LASTMOD_OVERRIDES: Record<string, string> = {};
