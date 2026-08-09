import { ServiceItem, CityItem, FAQItem, StepItem, TestimonialItem } from './types';
import { siteConfig } from './config/siteConfig';
import camerasSegurancaImg from './assets/images/cameras_seguranca.webp';
import locacaoEquipamentosImg from './assets/images/locacao_equipamentos.webp';
import alarmeMonitoradoImg from './assets/images/alarme_monitorado.webp';
import cercaEletricaImg from './assets/images/cerca_eletrica.webp';
import controleAcessoImg from './assets/images/controle_acesso.webp';
import portaoEletronicoImg from './assets/images/portao_eletronico.webp';
import interfoniaImg from './assets/images/interfonia.webp';
import cancelasCatracasImg from './assets/images/cancelas_catracas.webp';
import fechadurasEletromagneticasImg from './assets/images/fechaduras_eletromagneticas.webp';

export const COMPANY_INFO = {
  name: siteConfig.shortName,
  fullName: siteConfig.name,
  tagline: siteConfig.tagline,
  cityBase: siteConfig.cityBase,
  phoneDisplay: siteConfig.phoneDisplay,
  phoneRaw: siteConfig.phoneRaw,
  phoneSchema: siteConfig.phoneSchema,
  phoneTel: siteConfig.phoneTel,
  whatsappUrlDefault: `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent('Olá! Gostaria de um orçamento para segurança eletrônica.')}`,
  email: siteConfig.email,
  hours: siteConfig.hours,
  address: `${siteConfig.cityBase} e Região Metropolitana`,
};

export const CONFIDENCE_BADGES = [
  'Equipe técnica própria',
  'Atendimento em toda a Região Metropolitana',
  'Orçamento sem custo',
  'Suporte após a instalação',
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    slug: 'cameras-de-seguranca',
    title: 'Câmeras de Segurança',
    description: 'Monitoramento por imagem com câmeras HD, CFTV e acesso pelo celular, para residências, comércios e empresas.',
    iconName: 'Camera',
    imageUrl: camerasSegurancaImg,
    imageAlt: 'Câmera de segurança CFTV instalada em fachada residencial e comercial',
  },
  {
    slug: 'locacao-de-cameras-de-seguranca',
    title: 'Locação de Câmeras e Equipamentos de Segurança',
    description: 'Aluguel de câmeras de segurança, CFTV, alarmes e controle de acesso sem investimento inicial, sem taxa de instalação e com manutenção inclusa.',
    iconName: 'KeyRound',
    imageUrl: locacaoEquipamentosImg,
    imageAlt: 'Kit e equipamentos de segurança eletrônica para locação sem investimento inicial',
  },
  {
    slug: 'instalacao-de-alarmes',
    title: 'Instalação e Manutenção de Alarmes',
    description: 'Sistemas de alarme residencial e empresarial com sensores de presença, alerta no celular e bateria reserva.',
    iconName: 'ShieldAlert',
    imageUrl: alarmeMonitoradoImg,
    imageAlt: 'Instalação e manutenção de sistema de alarme residencial e empresarial',
  },
  {
    slug: 'cerca-eletrica',
    title: 'Cerca Elétrica',
    description: 'Reforço de perímetro com instalação técnica certificada e sinalização conforme as normas de segurança.',
    iconName: 'Zap',
    imageUrl: cercaEletricaImg,
    imageAlt: 'Cerca elétrica de proteção perimetral para muros residenciais e comerciais',
  },
  {
    slug: 'controle-de-acesso',
    title: 'Controle de Acesso',
    description: 'Biometria, cartões, reconhecimento facial e catracas para gerenciar quem entra e sai do seu imóvel.',
    iconName: 'Fingerprint',
    imageUrl: controleAcessoImg,
    imageAlt: 'Leitor de controle de acesso biométrico e cartão RFID em porta de entrada',
  },
  {
    slug: 'portao-eletronico',
    title: 'Portão Eletrônico',
    description: 'Instalação, automação e manutenção de portões residenciais e comerciais, com motores de alta durabilidade.',
    iconName: 'DoorClosed',
    imageUrl: portaoEletronicoImg,
    imageAlt: 'Portão eletrônico residencial automatizado com motor de alta performance',
  },
  {
    slug: 'interfonia',
    title: 'Interfonia',
    description: 'Sistemas de interfone e vídeo-porteiro para residências, condomínios e empresas, com integração à portaria.',
    iconName: 'PhoneCall',
    imageUrl: interfoniaImg,
    imageAlt: 'Vídeo porteiro e interfone eletrônico instalado para acesso residencial',
  },
  {
    slug: 'cancelas-e-catracas',
    title: 'Cancelas e Catracas',
    description: 'Controle de fluxo de veículos e pessoas em condomínios, empresas e estacionamentos.',
    iconName: 'Barrier',
    imageUrl: cancelasCatracasImg,
    imageAlt: 'Cancela automática e catraca para controle de tráfego de veículos',
  },
  {
    slug: 'fechaduras-eletromagneticas',
    title: 'Fechaduras Eletromagnéticas',
    description: 'Travamento eletrônico de portas para áreas restritas, integrado ao controle de acesso.',
    iconName: 'Lock',
    imageUrl: fechadurasEletromagneticasImg,
    imageAlt: 'Fechadura eletromagnética de alta resistência em porta de acesso',
  },
  {
    slug: 'manutencao',
    title: 'Manutenção de Sistemas de Segurança',
    description: 'Manutenção preventiva e corretiva de câmeras, alarmes, cercas e demais equipamentos já instalados.',
    iconName: 'Wrench',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Técnico especializado realizando manutenção em equipamento de segurança',
  },
];

export const HOW_WE_WORK_STEPS: StepItem[] = [
  {
    number: 1,
    title: 'Análise técnica',
    description: 'Avaliamos o imóvel, os pontos vulneráveis e a rotina do local antes de qualquer proposta.',
  },
  {
    number: 2,
    title: 'Projeto personalizado',
    description: 'Definimos os equipamentos, pontos de instalação e nível de proteção adequados ao seu caso.',
  },
  {
    number: 3,
    title: 'Instalação',
    description: 'Equipe técnica própria realiza a instalação com organização de cabos e acabamento profissional.',
  },
  {
    number: 4,
    title: 'Configuração e testes',
    description: 'Central, câmeras, alarme e aplicativo são configurados e testados antes da entrega.',
  },
  {
    number: 5,
    title: 'Suporte contínuo',
    description: 'Acompanhamento e manutenção para manter o sistema funcionando corretamente ao longo do tempo.',
  },
];

export const CITIES_LIST: CityItem[] = [
  { slug: 'curitiba', name: 'Curitiba', region: 'Capital' },
  { slug: 'pinhais', name: 'Pinhais', region: 'Região Metropolitana' },
  { slug: 'sao-jose-dos-pinhais', name: 'São José dos Pinhais', region: 'Região Metropolitana' },
  { slug: 'araucaria', name: 'Araucária', region: 'Região Metropolitana' },
  { slug: 'almirante-tamandare', name: 'Almirante Tamandaré', region: 'Região Metropolitana' },
  { slug: 'colombo', name: 'Colombo', region: 'Região Metropolitana' },
  { slug: 'campo-largo', name: 'Campo Largo', region: 'Região Metropolitana' },
  { slug: 'fazenda-rio-grande', name: 'Fazenda Rio Grande', region: 'Região Metropolitana' },
  { slug: 'campo-magro', name: 'Campo Magro', region: 'Região Metropolitana' },
  { slug: 'quatro-barras', name: 'Quatro Barras', region: 'Região Metropolitana' },
  { slug: 'campina-grande-do-sul', name: 'Campina Grande do Sul', region: 'Região Metropolitana' },
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Quanto custa instalar um sistema de segurança em Curitiba?',
    answer: 'O valor depende do tamanho do imóvel, da quantidade de pontos e do nível de proteção desejado. Fazemos uma análise gratuita do local antes de enviar o orçamento.',
  },
  {
    id: 'faq-2',
    question: 'A Intelsecsul atende toda a Região Metropolitana de Curitiba?',
    answer: 'Sim. Atendemos Curitiba, Pinhais, São José dos Pinhais, Araucária, Almirante Tamandaré, Colombo, Campo Largo, Fazenda Rio Grande, Campo Magro, Quatro Barras e Campina Grande do Sul.',
  },
  {
    id: 'faq-3',
    question: 'É possível acompanhar as câmeras pelo celular?',
    answer: 'Sim, em projetos com essa funcionalidade é possível acompanhar câmeras e receber alertas diretamente pelo aplicativo, de qualquer lugar.',
  },
  {
    id: 'faq-4',
    question: 'Vocês fazem manutenção em sistemas já instalados por outra empresa?',
    answer: 'Sim, nossa equipe técnica realiza manutenção preventiva e corretiva independentemente de quem fez a instalação original.',
  },
  {
    id: 'faq-5',
    question: 'Quanto tempo leva para receber um orçamento?',
    answer: 'Após o contato, nossa equipe agenda uma visita técnica e envia o orçamento personalizado o mais rápido possível.',
  },
];

export const GOOGLE_REVIEWS_URL = 'https://share.google/dNAmcesFz6QV1vroW';

export const TESTIMONIALS_LIST: TestimonialItem[] = [
  {
    id: 't-1',
    author: 'Ricardo Silveira',
    content: 'Excelentes profissionais! Fizemos a locação e instalação das câmeras de segurança e alarme para nossa empresa. Instalação rápida, suporte técnico atencioso e equipamento de altíssima qualidade da Intelbras.',
    rating: 5,
    date: 'Há 2 semanas',
    service: 'Câmeras de Segurança e Alarme',
  },
  {
    id: 't-2',
    author: 'Fernanda M. Oliveira',
    content: 'Contratei o plano de locação de equipamentos de segurança para o condomínio. Sem taxa de instalação e manutenção inclusa! Ótimo custo-benefício e atendimento nota 10 em Curitiba.',
    rating: 5,
    date: 'Há 1 mês',
    service: 'Locação de Equipamentos',
  },
  {
    id: 't-3',
    author: 'Carlos Eduardo Santos',
    content: 'Instalaram portão eletrônico e vídeo porteiro na minha residência em São José dos Pinhais. Equipe pontual, serviço limpo e explicaram todo o funcionamento pelo aplicativo. Recomendo muito!',
    rating: 5,
    date: 'Há 2 meses',
    service: 'Automação e Interfonia',
  },
  {
    id: 't-4',
    author: 'Juliana Castro',
    content: 'Controle de acesso biométrico e alarme monitorado instalado na nossa clínica. A paz de espírito que a Intelsecsul nos trouxe não tem preço. Empresa séria e de total confiança.',
    rating: 5,
    date: 'Há 3 meses',
    service: 'Controle de Acesso e Alarme',
  },
];
