import { ServiceItem, CityItem, FAQItem, StepItem, TestimonialItem } from './types';
import { siteConfig } from './config/siteConfig';
import camerasSegurancaImg from './assets/images/cameras_seguranca.webp';
import locacaoEquipamentosImg from './assets/images/locacao_equipamentos.webp';
import alarmeMonitoradoImg from './assets/images/alarme_monitorado.webp';
import cercaEletricaImg from './assets/images/cerca_eletrica.webp';
import controleAcessoImg from './assets/images/controle_acesso.webp';
import portaoEletronicoImg from './assets/images/portao_eletronico.webp';
import portasAutomaticasImg from './assets/images/portas_automaticas.webp';
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
    slug: 'aluguel-de-cameras-de-seguranca',
    title: 'Aluguel de Câmeras de Segurança',
    description: 'Aluguel de câmeras de segurança IP a partir de R$ 249 por mês por ponto, sem investimento inicial, com todos os equipamentos inclusos, instalação e manutenção incluídas.',
    iconName: 'KeyRound',
    imageUrl: locacaoEquipamentosImg,
    imageAlt: 'Câmeras de segurança IP para aluguel sem investimento inicial',
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
    slug: 'portao-automatico',
    title: 'Portão Automático',
    description: 'Instalação, automação e manutenção de portões residenciais e comerciais, com motores de alta durabilidade.',
    iconName: 'DoorClosed',
    imageUrl: portaoEletronicoImg,
    imageAlt: 'Portão automático residencial automatizado com motor de alta performance',
  },
  {
    slug: 'portas-automaticas',
    title: 'Portas Automáticas',
    description: 'Instalação e manutenção de portas automáticas de vidro, seccionais e de enrolar para comércios, indústrias e condomínios.',
    iconName: 'DoorOpen',
    imageUrl: portasAutomaticasImg,
    imageAlt: 'Instalação e manutenção de portas automáticas comerciais e industriais',
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
    slug: 'fechaduras-eletronicas',
    title: 'Fechaduras Eletrônicas',
    description: 'Travamento eletrônico de portas para áreas restritas, integrado ao controle de acesso.',
    iconName: 'Lock',
    imageUrl: fechadurasEletromagneticasImg,
    imageAlt: 'Fechadura eletrônica de alta resistência em porta de acesso',
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
  { id: 'g-1', author: 'Suelen Barbosa', rating: 5, content: 'Empresa excelente, profissional especializado e sério! Trabalha com produtos de extrema qualidade. Podem contratar sem medo. Boa Indole e super honesto.' },
  { id: 'g-2', author: 'Alessandra Napomucena', rating: 5, service: 'Preço razoável', content: 'Excelente, tem comprometimento trabalho perfeito honesto !' },
  { id: 'g-3', author: 'Julio Carlos Domingues', rating: 5, content: 'Indico, tem preço justo, trabalha muito bem é ágil e confiável. Super indico.' },
  { id: 'g-4', author: 'Felipe Cardoso', rating: 5, service: 'Ótimo preço', content: 'Ótima empresa, instalação de qualidade, preço acessível, pontual e pronto atendimento.' },
  { id: 'g-5', author: 'Ariane Fontes', rating: 5, content: 'Empresa ótima, profissional excelente.' },
  { id: 'g-6', author: 'connectcell cell', rating: 5, service: 'Ótimo preço', content: 'Serviço com excelência ! Muito bom mesmo !!!' },
];
