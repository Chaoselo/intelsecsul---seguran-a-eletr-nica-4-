import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Shield, ArrowLeft, Phone, Construction, CheckCircle2, MapPin } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST, CITIES_LIST } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';

interface Props {
  type: 'service' | 'city' | 'institutional';
  title?: string;
  description?: string;
}

export const PlaceholderPage: React.FC<Props> = ({ type, title: customTitle, description: customDescription }) => {
  const location = useLocation();
  const { slug } = useParams<{ slug?: string }>();

  // Determine current context based on slug or path
  let pageTitle = customTitle || 'Página em Construção';
  let pageSubtitle = customDescription || 'Estamos preparando este conteúdo com detalhes completos.';
  let whatsappMsg = `Olá, gostaria de informações sobre ${pageTitle}`;
  let currentServiceImage = '';
  let currentServiceImageAlt = '';

  if (type === 'service') {
    const service = SERVICES_LIST.find((s) => s.slug === slug);
    if (service) {
      pageTitle = service.title;
      pageSubtitle = service.description;
      whatsappMsg = `Olá, gostaria de um orçamento para ${service.title}`;
      currentServiceImage = service.imageUrl;
      currentServiceImageAlt = service.imageAlt;
    } else if (slug) {
      pageTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
      whatsappMsg = `Olá, gostaria de um orçamento para ${pageTitle}`;
    }
  } else if (type === 'city') {
    const city = CITIES_LIST.find((c) => c.slug === slug);
    if (city) {
      pageTitle = `Segurança Eletrônica em ${city.name}`;
      pageSubtitle = `Atendimento técnico especializado, projetos, instalação e manutenção de sistemas de segurança em ${city.name} - PR.`;
      whatsappMsg = `Olá, preciso de um orçamento de segurança eletrônica para meu imóvel em ${city.name}`;
    }
  } else if (type === 'institutional') {
    if (location.pathname === '/sobre') {
      pageTitle = 'Sobre a Intelsecsul';
      pageSubtitle = 'Sediada em Curitiba (PR), atuando com excelência no projeto, instalação e manutenção de sistemas de segurança eletrônica.';
    } else if (location.pathname === '/depoimentos') {
      pageTitle = 'Depoimentos de Clientes';
      pageSubtitle = 'Confira o que nossos clientes em Curitiba e Região Metropolitana dizem sobre os serviços da Intelsecsul.';
    } else if (location.pathname === '/contato') {
      pageTitle = 'Fale Conosco';
      pageSubtitle = 'Solicite uma visita técnica sem custo para avaliar o seu imóvel ou tire suas dúvidas com nossa equipe.';
    } else if (location.pathname === '/blog') {
      pageTitle = 'Blog de Segurança Eletrônica';
      pageSubtitle = 'Artigos, recomendações técnicas e notícias sobre câmeras, alarmes e automação de segurança.';
    } else if (location.pathname === '/perguntas-frequentes') {
      pageTitle = 'Perguntas Frequentes (FAQ)';
      pageSubtitle = 'Tire todas as suas dúvidas sobre prazos, custos, equipamentos e atendimento em Curitiba e Região.';
    }
  }

  useEffect(() => {
    document.title = `${pageTitle} | Intelsecsul - Curitiba e Região`;
    window.scrollTo(0, 0);
  }, [pageTitle]);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="bg-[#0A0D14] min-h-[75vh] py-12 px-4 sm:px-6 lg:px-8 text-slate-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-8 flex-wrap">
          <Link to="/" className="hover:text-[#00C5FF] transition-colors">Início</Link>
          <span>/</span>
          {type === 'service' && (
            <>
              <span className="text-slate-400">Serviços</span>
              <span>/</span>
            </>
          )}
          {type === 'city' && (
            <>
              <Link to="/cidades/" className="hover:text-[#00C5FF] transition-colors">Cidades</Link>
              <span>/</span>
            </>
          )}
          <span className="text-white font-medium">{pageTitle}</span>
        </nav>

        {/* Hero Card */}
        <div className="bg-[#121824] rounded-2xl overflow-hidden border border-slate-800 shadow-xl mb-8">
          {currentServiceImage && (
            <div className="relative h-64 sm:h-80 w-full bg-slate-900 overflow-hidden">
              <img
                src={currentServiceImage}
                alt={currentServiceImageAlt || pageTitle}
                width={800}
                height={450}
                loading="eager"
                fetchPriority="high"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-slate-950/40 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-[#0091FF] text-white text-xs font-bold uppercase tracking-wider mb-2">
                  Serviço Especializado
                </span>
                <h1 className="text-2xl sm:text-3xl font-bold text-white shadow-xs">
                  {pageTitle}
                </h1>
              </div>
            </div>
          )}

          <div className="p-8 sm:p-10">
            {!currentServiceImage && (
              <>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0D14] text-[#00C5FF] text-xs font-semibold mb-4 border border-slate-800">
                  <Shield className="w-3.5 h-3.5 text-[#0091FF]" />
                  <span>Intelsecsul - Curitiba e Região</span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  {pageTitle}
                </h1>
              </>
            )}

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              {pageSubtitle}
            </p>

            {/* Construction Badge Notice */}
            <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 text-amber-200 text-sm flex items-start gap-3 mb-8">
              <Construction className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block mb-0.5 text-amber-300">Página em expansão</span>
                <p className="text-xs text-amber-200/90 leading-relaxed">
                  Esta seção específica está em fase de estruturação de conteúdo detalhado, mas a equipe da <strong>Intelsecsul</strong> já presta atendimento completo para este serviço e região.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors shadow-sm"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>

              <a
                href={COMPANY_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-[#0A0D14] hover:bg-slate-800 transition-colors border border-slate-700"
              >
                <Phone className="w-4 h-4 text-[#00C5FF]" />
                <span>Ligar {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Benefits list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-5 bg-[#121824] rounded-xl border border-slate-800">
            <CheckCircle2 className="w-6 h-6 text-[#00C5FF] mb-2" />
            <h3 className="font-semibold text-white text-sm mb-1">Equipe Própria</h3>
            <p className="text-xs text-slate-300 leading-relaxed">Instalações técnicas padronizadas e profissionais treinados.</p>
          </div>
          <div className="p-5 bg-[#121824] rounded-xl border border-slate-800">
            <CheckCircle2 className="w-6 h-6 text-[#00C5FF] mb-2" />
            <h3 className="font-semibold text-white text-sm mb-1">Análise Técnica Sem Custo</h3>
            <p className="text-xs text-slate-300 leading-relaxed">Avaliamos o imóvel e enviamos proposta personalizada.</p>
          </div>
          <div className="p-5 bg-[#121824] rounded-xl border border-slate-800">
            <CheckCircle2 className="w-6 h-6 text-[#00C5FF] mb-2" />
            <h3 className="font-semibold text-white text-sm mb-1">Atendimento Regional</h3>
            <p className="text-xs text-slate-300 leading-relaxed">Atendemos Curitiba e 10 cidades metropolitanas com rapidez.</p>
          </div>
        </div>

        {/* Quick Links Navigation */}
        <div className="bg-[#121824] rounded-xl p-6 border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-slate-300 text-sm">
            <MapPin className="w-4 h-4 text-[#00C5FF]" />
            <span>Sediada em Curitiba (PR) • Região Metropolitana</span>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#00C5FF] hover:text-white font-semibold text-sm group transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Voltar para a Página Inicial</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
