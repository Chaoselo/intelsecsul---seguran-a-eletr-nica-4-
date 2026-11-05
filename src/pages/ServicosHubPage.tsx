import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Sparkles, 
  Wrench, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  FileText, 
  ChevronRight,
  Home as HomeIcon,
  Building2,
  Briefcase,
  HelpCircle,
  Scale,
  BookOpen,
  MapPin
} from 'lucide-react';
import { SERVICES_LIST, COMPANY_INFO } from '../constants';
import { ServiceIcon } from '../components/ServiceIcon';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { useDocumentMeta, buildBreadcrumbSchema } from '../hooks/useDocumentMeta';
import { getWhatsAppUrl } from '../utils/whatsapp';

const SERVICOS_HUB_BREADCRUMB = buildBreadcrumbSchema([
  { name: 'Início', url: '/' },
  { name: 'Serviços', url: '/servicos/' },
]);

const COLLECTION_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Serviços de Segurança Eletrônica em Curitiba",
  "description": "Instalação, manutenção e aluguel de câmeras de segurança, cerca elétrica, portões e portas automáticas, controle de acesso e interfonia em Curitiba e região.",
  "url": "https://intelsecsul.com.br/servicos/",
  "hasPart": SERVICES_LIST.map((service) => ({
    "@type": "Service",
    "name": service.title,
    "url": `https://intelsecsul.com.br/servicos/${service.slug}/`,
    "description": service.description,
  })),
};

const MAINTENANCE_SOLUTIONS = [
  {
    title: 'Manutenção e conserto de portão automático',
    url: '/servicos/portao-automatico/manutencao/',
    description: 'Diagnóstico rápido pelo WhatsApp, atendimento de emergência em até 12 horas mediante taxa e disponibilidade técnica, e garantia de 3 meses em todas as marcas de motores.',
    badge: 'Portões e Motores',
  },
  {
    title: 'Manutenção e conserto de câmeras e CFTV',
    url: '/servicos/cameras-de-seguranca/manutencao/',
    description: 'Assistência para câmeras IP, Wi-Fi e analógicas, DVR ou NVR apitando, sem imagem ou sem gravação. Atendimento emergencial em até 12 horas e garantia de 3 meses.',
    badge: 'CFTV e Gravação',
  },
  {
    title: 'Manutenção de sistemas de segurança',
    url: '/servicos/manutencao/',
    description: 'Manutenção preventiva e corretiva avulsa para todos os equipamentos e sistemas de segurança eletrônica, inclusive instalados originalmente por outra empresa.',
    badge: 'Assistência Geral',
  },
  {
    title: 'Contrato de manutenção preventiva e corretiva',
    url: '/servicos/contrato-de-manutencao/',
    description: 'Visitas periódicas trimestrais, atendimento de chamados em até 48 horas úteis e emergência em até 12 horas para condomínios, empresas e comércios.',
    badge: 'Planos Contratuais',
  },
];

const SEGMENT_SOLUTIONS = [
  {
    title: 'Residencial (Casas e Sobrados)',
    icon: HomeIcon,
    description: 'Proteção perimetral e monitoramento visual sob medida para a tranquilidade da sua família.',
    links: [
      { label: 'Câmeras de segurança residencial', url: '/servicos/cameras-de-seguranca/residencial/' },
      { label: 'Instalação de alarmes residencial', url: '/servicos/instalacao-de-alarmes/residencial/' },
      { label: 'Cerca elétrica residencial', url: '/servicos/cerca-eletrica/residencial/' },
    ],
  },
  {
    title: 'Condomínios (Residenciais e Comerciais)',
    icon: Building2,
    description: 'Gestão de acessos com portaria remota, interfonia integrada, CFTV perimetral e contratos dedicados.',
    links: [
      { label: 'Câmeras de segurança para condomínio', url: '/servicos/cameras-de-seguranca/condominio/' },
      { label: 'Cerca elétrica para condomínio', url: '/servicos/cerca-eletrica/condominio/' },
      { label: 'Interfonia para condomínio', url: '/servicos/interfonia/condominio/' },
      { label: 'Contrato de manutenção para condomínio', url: '/servicos/contrato-de-manutencao/' },
    ],
  },
  {
    title: 'Comercial e Empresarial',
    icon: Briefcase,
    description: 'Controle rigoroso de entradas e saídas, biometria facial, alarmes e cobertura por CFTV em alta definição.',
    links: [
      { label: 'Câmeras de segurança comercial', url: '/servicos/cameras-de-seguranca/comercial/' },
      { label: 'Alarmes para empresas e lojas', url: '/servicos/instalacao-de-alarmes/empresarial/' },
      { label: 'Controle de acesso por biometria', url: '/servicos/controle-de-acesso/biometria/' },
      { label: 'Controle de acesso por reconhecimento facial', url: '/servicos/controle-de-acesso/reconhecimento-facial/' },
    ],
  },
];

export const ServicosHubPage: React.FC = () => {
  useDocumentMeta({
    title: 'Serviços de Segurança Eletrônica em Curitiba | Intelsecsul',
    description: 'Instalação, manutenção e aluguel de câmeras de segurança, cerca elétrica, portões e portas automáticas, controle de acesso e interfonia em Curitiba e região.',
    canonicalUrl: '/servicos/',
    jsonLdSchema: [SERVICOS_HUB_BREADCRUMB, COLLECTION_PAGE_SCHEMA],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappUrl = getWhatsAppUrl('/servicos');

  return (
    <div className="bg-[#0A0D14] min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-slate-200 font-sans selection:bg-[#0091FF] selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= BREADCRUMB ================= */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-8 flex-wrap">
          <Link to="/" className="hover:text-[#00C5FF] transition-colors">Início</Link>
          <span>/</span>
          <span className="text-slate-200 font-medium">Serviços</span>
        </nav>

        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-4 border border-[#0091FF]/30">
            <Shield className="w-3.5 h-3.5 text-[#00C5FF]" />
            <span>Soluções Especializadas em Segurança Eletrônica</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
            Serviços de Segurança Eletrônica em Curitiba e Região Metropolitana
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Projetos, instalação, manutenção preventiva e corretiva e aluguel de sistemas de segurança eletrônica com equipe própria da Intelsecsul. Atendemos imóveis residenciais, comerciais, condomínios e indústrias em Curitiba e mais 10 cidades metropolitanas.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-[#25D366]/20 text-sm"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>Diagnóstico gratuito no WhatsApp</span>
            </a>

            <Link
              to="/contato/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#0091FF] hover:bg-[#0081E6] active:bg-[#0070CC] transition-all shadow-lg hover:shadow-[#0091FF]/25 text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Solicitar orçamento</span>
            </Link>
          </div>
        </div>

        {/* ================= GRADE PRINCIPAL DE SERVIÇOS ================= */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Nossas Linhas de Serviços
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Conheça todas as soluções integradas de proteção e automação patrimonial.
              </p>
            </div>
            <span className="text-xs font-semibold text-[#00C5FF] bg-[#0091FF]/10 px-3 py-1 rounded-full border border-[#0091FF]/30 w-fit">
              10 Serviços Especializados
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.map((service) => (
              <Link
                key={service.slug}
                to={`/servicos/${service.slug}/`}
                className="bg-[#121824] rounded-xl overflow-hidden border border-slate-800/90 shadow-lg hover:border-[#0091FF] hover:shadow-[#0091FF]/10 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.imageAlt}
                      loading="lazy"
                      width={800}
                      height={480}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-black/30 to-transparent" />
                    
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-lg bg-[#0A0D14]/90 backdrop-blur-xs border border-slate-700/80 flex items-center justify-center text-[#00C5FF] shadow-md">
                      <ServiceIcon name={service.iconName} className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#00C5FF] transition-colors mb-2">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-[#00C5FF] group-hover:text-[#0091FF]">
                  <span>Ver detalhes e solicitar orçamento</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ================= MANUTENÇÃO E CONSERTO ESPECIALIZADOS ================= */}
        <section className="mb-16 bg-[#0E131F] rounded-2xl p-6 sm:p-10 border border-slate-800">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-3 border border-[#0091FF]/30">
              <Wrench className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Assistência Técnica e Reparos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
              Manutenção e Conserto Especializados
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Equipe técnica própria e preparada para resolver defeitos com agilidade em Curitiba e Região Metropolitana. Atendimento emergencial em até 12 horas mediante disponibilidade e taxa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MAINTENANCE_SOLUTIONS.map((item, idx) => (
              <Link
                key={idx}
                to={item.url}
                className="bg-[#141A29] rounded-xl p-6 border border-slate-800 hover:border-[#0091FF] transition-all group flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-[#00C5FF] bg-[#0091FF]/10 border border-[#0091FF]/30 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#00C5FF] group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#00C5FF] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 text-xs font-semibold text-[#00C5FF] flex items-center gap-1">
                  <span>Conhecer assistência técnica</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ================= ATENDIMENTO POR SEGMENTO ================= */}
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#00C5FF] text-xs font-bold uppercase tracking-wider block mb-2">
              Projetos Sob Medida
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Atendimento por Segmento
            </h2>
            <p className="text-slate-400 text-sm">
              Cada perfil de imóvel possui vulnerabilidades e demandas específicas. Descubra a configuração ideal para sua estrutura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SEGMENT_SOLUTIONS.map((seg, idx) => {
              const IconComponent = seg.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#121824] rounded-xl p-6 border border-slate-800 shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0A0D14] border border-slate-800 flex items-center justify-center text-[#00C5FF] mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">
                      {seg.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {seg.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-slate-800/80">
                      {seg.links.map((link, lIdx) => (
                        <Link
                          key={lIdx}
                          to={link.url}
                          className="flex items-center justify-between text-xs font-medium text-slate-300 hover:text-[#00C5FF] transition-colors py-1 group/link"
                        >
                          <span className="truncate">{link.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-[#00C5FF] group-hover/link:translate-x-0.5 transition-all shrink-0 ml-2" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= NAVEGAÇÃO COMPLEMENTAR ================= */}
        <section className="mb-16 bg-[#0E131F] rounded-2xl p-6 sm:p-8 border border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              Explore Mais Sobre a Intelsecsul
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Guias técnicos, comparativos práticos, área de cobertura e perguntas frequentes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/cidades/"
              className="bg-[#121824] p-5 rounded-xl border border-slate-800 hover:border-[#0091FF] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#0091FF]/10 text-[#00C5FF] flex items-center justify-center mb-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#00C5FF] transition-colors mb-1">
                  Cidades Atendidas
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Curitiba e 10 cidades metropolitanas atendidas com equipe técnica própria.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#00C5FF] mt-4 inline-flex items-center gap-1">
                Ver cobertura <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/comparativos/"
              className="bg-[#121824] p-5 rounded-xl border border-slate-800 hover:border-[#0091FF] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#0091FF]/10 text-[#00C5FF] flex items-center justify-center mb-3">
                  <Scale className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#00C5FF] transition-colors mb-1">
                  Comparativos
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Compra x Aluguel de Câmeras e Intelsecsul x Verisure comparados tecnicamente.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#00C5FF] mt-4 inline-flex items-center gap-1">
                Ver comparativos <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/blog/"
              className="bg-[#121824] p-5 rounded-xl border border-slate-800 hover:border-[#0091FF] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#0091FF]/10 text-[#00C5FF] flex items-center justify-center mb-3">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#00C5FF] transition-colors mb-1">
                  Blog e Dicas
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Artigos explicativos, diagnósticos de defeitos e orientações técnicas de segurança.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#00C5FF] mt-4 inline-flex items-center gap-1">
                Ler artigos <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              to="/perguntas-frequentes/"
              className="bg-[#121824] p-5 rounded-xl border border-slate-800 hover:border-[#0091FF] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#0091FF]/10 text-[#00C5FF] flex items-center justify-center mb-3">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#00C5FF] transition-colors mb-1">
                  Dúvidas Frequentes
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Respostas sobre prazos, diagnósticos, visitas técnicas e modalidades de contratação.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#00C5FF] mt-4 inline-flex items-center gap-1">
                Ver FAQ <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </section>

        {/* ================= CTA FINAL ================= */}
        <section className="bg-[#121824] text-white rounded-2xl p-8 sm:p-12 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0091FF]/20 border border-[#0091FF]/30 flex items-center justify-center text-[#00C5FF] mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
                Solicite um orçamento para o seu imóvel
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Fale com nossos técnicos para entender qual é a melhor solução para sua residência, condomínio ou empresa em Curitiba e Região Metropolitana.
              </p>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C5FF]" />
                  <span>Equipe própria uniformizada e ferramentas adequadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C5FF]" />
                  <span>Diagnóstico inicial rápido e descomplicado pelo WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C5FF]" />
                  <span>Projetos técnicos sob medida e garantia nos serviços prestados</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:w-80 md:ml-auto">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-md text-sm"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0 fill-current" />
                <span>Conversar no WhatsApp</span>
              </a>

              <Link
                to="/contato/"
                className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-white bg-[#0091FF] hover:bg-[#0081E6] transition-all text-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Solicitar orçamento</span>
              </Link>

              <a
                href={COMPANY_INFO.phoneTel}
                className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-medium text-slate-300 bg-[#0A0D14] hover:bg-slate-800 transition-colors text-xs border border-slate-700"
              >
                <Phone className="w-4 h-4 text-[#0091FF]" />
                <span>Ligar: {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
