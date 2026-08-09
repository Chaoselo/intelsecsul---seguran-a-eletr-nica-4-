export interface BlogArticleMeta {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  category: string;
  readTime: string;
  publishedDate: string;
  summary: string;
}

export const BLOG_ARTICLES: BlogArticleMeta[] = [
  {
    id: 'como-escolher-sistema-de-seguranca',
    slug: '/blog/como-escolher-sistema-de-seguranca',
    title: 'Como Escolher o Sistema de Segurança Ideal | Blog Intelsecsul',
    metaTitle: 'Como Escolher o Sistema de Segurança Ideal | Blog Intelsecsul',
    metaDescription: 'Guia para escolher entre câmeras, alarme, cerca elétrica e controle de acesso, considerando o perfil do seu imóvel e o orçamento disponível.',
    h1: 'Como escolher o sistema de segurança ideal para sua casa ou empresa',
    category: 'Guia Prático',
    readTime: '4 min de leitura',
    publishedDate: '[DATA DE PUBLICAÇÃO]',
    summary: 'Com tantas opções disponíveis — câmeras, alarme monitorado, cerca elétrica, controle de acesso — é comum sentir dificuldade para saber por onde começar. Este guia ajuda a organizar a decisão em passos simples.',
  },
  {
    id: 'seguranca-eletronica-para-condominios',
    slug: '/blog/seguranca-eletronica-para-condominios',
    title: 'Segurança Eletrônica para Condomínios | Blog Intelsecsul',
    metaTitle: 'Segurança Eletrônica para Condomínios | Blog Intelsecsul',
    metaDescription: 'O que considerar antes de instalar câmeras, controle de acesso e portaria remota em condomínios residenciais e comerciais.',
    h1: 'Segurança eletrônica para condomínios: o que considerar antes de instalar',
    category: 'Condomínios',
    readTime: '5 min de leitura',
    publishedDate: '[DATA DE PUBLICAÇÃO]',
    summary: 'Condomínios têm necessidades diferentes de uma residência isolada — várias unidades, áreas comuns, portaria e um fluxo maior de pessoas e veículos circulando todos os dias.',
  },
  {
    id: 'seguranca-para-empresas-e-industrias',
    slug: '/blog/seguranca-para-empresas-e-industrias',
    title: 'Segurança para Empresas e Indústrias | Blog Intelsecsul',
    metaTitle: 'Segurança para Empresas e Indústrias | Blog Intelsecsul',
    metaDescription: 'Cuidados na hora de projetar CFTV e controle de acesso para empresas, galpões e indústrias.',
    h1: 'Segurança para empresas e indústrias: cuidados no projeto de CFTV e controle de acesso',
    category: 'Empresas & Indústrias',
    readTime: '4 min de leitura',
    publishedDate: '[DATA DE PUBLICAÇÃO]',
    summary: 'Empresas e indústrias lidam com perímetros maiores, fluxo de funcionários e visitantes, e muitas vezes ativos de alto valor, o que exige um projeto de segurança mais robusto do que o residencial.',
  },
  {
    id: 'checklist-seguranca-antes-de-viajar',
    slug: '/blog/checklist-seguranca-antes-de-viajar',
    title: 'Checklist de Segurança Antes de Viajar | Blog Intelsecsul',
    metaTitle: 'Checklist de Segurança Antes de Viajar | Blog Intelsecsul',
    metaDescription: 'Cuidados simples para deixar a casa mais protegida antes de viajar, com ou sem sistema de segurança instalado.',
    h1: 'Checklist de segurança para deixar a casa protegida antes de viajar',
    category: 'Dicas de Segurança',
    readTime: '3 min de leitura',
    publishedDate: '[DATA DE PUBLICAÇÃO]',
    summary: 'Períodos de viagem costumam ser momentos de maior vulnerabilidade para residências, já que o imóvel fica sem ninguém por dias ou semanas. Alguns cuidados simples ajudam a reduzir os riscos.',
  },
];
