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
    slug: '/blog/como-escolher-sistema-de-seguranca/',
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
    slug: '/blog/seguranca-eletronica-para-condominios/',
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
    slug: '/blog/seguranca-para-empresas-e-industrias/',
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
    slug: '/blog/checklist-seguranca-antes-de-viajar/',
    title: 'Checklist de Segurança Antes de Viajar | Blog Intelsecsul',
    metaTitle: 'Checklist de Segurança Antes de Viajar | Blog Intelsecsul',
    metaDescription: 'Cuidados simples para deixar a casa mais protegida antes de viajar, com ou sem sistema de segurança instalado.',
    h1: 'Checklist de segurança para deixar a casa protegida antes de viajar',
    category: 'Dicas de Segurança',
    readTime: '3 min de leitura',
    publishedDate: '[DATA DE PUBLICAÇÃO]',
    summary: 'Períodos de viagem costumam ser momentos de maior vulnerabilidade para residências, já que o imóvel fica sem ninguém por dias ou semanas. Alguns cuidados simples ajudam a reduzir os riscos.',
  },
  {
    id: 'portao-eletronico-nao-abre-ou-nao-fecha',
    slug: '/blog/portao-eletronico-nao-abre-ou-nao-fecha/',
    title: 'Portão Eletrônico Não Abre ou Não Fecha Completamente? Veja as Causas | Intelsecsul',
    metaTitle: 'Portão Eletrônico Não Abre ou Não Fecha Completamente? Veja as Causas | Intelsecsul',
    metaDescription: 'Portão eletrônico não abre ou não fecha totalmente? Veja as causas mais comuns (fotocélula, fim de curso, placa, corrente) e quando chamar assistência técnica.',
    h1: 'Por que meu portão eletrônico não abre ou não fecha completamente?',
    category: 'Portão Eletrônico',
    readTime: '4 min de leitura',
    publishedDate: '2026-08-29',
    summary: 'Na maioria dos casos, um portão eletrônico que não abre ou não fecha totalmente tem um destes três problemas: a fotocélula (sensor de segurança) está desalinhada ou suja, o fim de curso perdeu a referência de onde o portão deve parar, ou há um obstáculo físico no trilho ou na cremalheira.',
  },
  {
    id: 'cerca-eletrica-x-concertina-diferenca',
    slug: '/blog/cerca-eletrica-x-concertina-diferenca/',
    title: 'Cerca Elétrica x Concertina: Qual a Diferença e Qual Protege Mais? | Intelsecsul',
    metaTitle: 'Cerca Elétrica x Concertina: Qual a Diferença e Qual Protege Mais? | Intelsecsul',
    metaDescription: 'Entenda a diferença entre cerca elétrica e concertina, qual oferece mais proteção, o que diz a legislação e qual escolher para residência, comércio ou indústria.',
    h1: 'Cerca elétrica x concertina: qual a diferença?',
    category: 'Cerca Elétrica',
    readTime: '4 min de leitura',
    publishedDate: '2026-08-29',
    summary: 'A diferença central é o princípio de funcionamento: a cerca elétrica usa fios energizados por uma central que aplica pulsos de choque, enquanto a concertina é uma barreira física cortante em espiral. Nenhuma das duas é melhor de forma absoluta — a escolha certa depende do imóvel.',
  },
  {
    id: 'camera-com-fio-ou-wifi-qual-escolher',
    slug: '/blog/camera-com-fio-ou-wifi-qual-escolher/',
    title: 'Câmera com Fio ou Wi-Fi: Qual Escolher para Cada Ambiente? | Intelsecsul',
    metaTitle: 'Câmera com Fio ou Wi-Fi: Qual Escolher para Cada Ambiente? | Intelsecsul',
    metaDescription: 'Câmera de segurança com fio ou Wi-Fi: veja as vantagens de cada uma, quando usar cada tipo e qual opção é mais indicada para residência, comércio ou área externa.',
    h1: 'Câmera com fio ou Wi-Fi: qual escolher?',
    category: 'Câmeras de Segurança',
    readTime: '4 min de leitura',
    publishedDate: '2026-08-29',
    summary: 'Em geral, a câmera com fio é a mais indicada para instalações permanentes (residência, comércio, fachada externa), porque oferece conexão mais estável. Já a câmera Wi-Fi é ideal para pontos onde passar cabo é inviável, priorizando praticidade.',
  },
];
