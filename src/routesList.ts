import { BLOG_ARTICLES } from './data/blogArticles';

export const BASE_URL = 'https://intelsecsul.com.br';

export const PRERENDER_ROUTES: string[] = [
  "/",
  "/cidades",
  "/cidades/curitiba",
  "/cidades/pinhais",
  "/cidades/sao-jose-dos-pinhais",
  "/cidades/araucaria",
  "/cidades/almirante-tamandare",
  "/cidades/colombo",
  "/cidades/campo-largo",
  "/cidades/fazenda-rio-grande",
  "/cidades/campo-magro",
  "/cidades/quatro-barras",
  "/cidades/campina-grande-do-sul",
  "/servicos/cameras-de-seguranca",
  "/servicos/cameras-de-seguranca/residencial",
  "/servicos/cameras-de-seguranca/comercial",
  "/servicos/cameras-de-seguranca/condominio",
  "/servicos/instalacao-de-alarmes",
  "/servicos/instalacao-de-alarmes/residencial",
  "/servicos/instalacao-de-alarmes/empresarial",
  "/servicos/cerca-eletrica",
  "/servicos/cerca-eletrica/residencial",
  "/servicos/cerca-eletrica/condominio",
  "/servicos/controle-de-acesso",
  "/servicos/controle-de-acesso/biometria",
  "/servicos/controle-de-acesso/reconhecimento-facial",
  "/servicos/portao-eletronico",
  "/servicos/portas-automaticas",
  "/servicos/interfonia",
  "/servicos/interfonia/condominio",
  "/servicos/cancelas-e-catracas",
  "/servicos/fechaduras-eletromagneticas",
  "/servicos/manutencao",
  "/servicos/locacao-de-cameras-de-seguranca",
  "/sobre",
  "/por-que-escolher-a-intelsecsul",
  "/depoimentos",
  "/perguntas-frequentes",
  "/glossario",
  "/comparativos",
  "/comparativos/compra-x-locacao-de-equipamentos",
  "/comparativos/intelsecsul-x-verisure",
  "/blog",
  ...BLOG_ARTICLES.map(article => `/blog/${article.slug}`),
  "/contato"
];

/**
 * Retorna a URL absoluta padronizada para sitemap, canonical e og:url,
 * garantindo sempre barra final ("/") em todas as páginas e na home ("https://intelsecsul.com.br/").
 */
export function getAbsoluteUrl(path: string): string {
  if (!path || path === '/' || path === BASE_URL || path === `${BASE_URL}/`) {
    return `${BASE_URL}/`;
  }
  let cleanPath = path;
  if (cleanPath.startsWith(BASE_URL)) {
    cleanPath = cleanPath.slice(BASE_URL.length);
  }
  if (!cleanPath.startsWith('/')) {
    cleanPath = `/${cleanPath}`;
  }
  if (!cleanPath.endsWith('/')) {
    cleanPath = `${cleanPath}/`;
  }
  return `${BASE_URL}${cleanPath}`;
}

