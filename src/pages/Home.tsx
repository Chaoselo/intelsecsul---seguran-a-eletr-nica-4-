import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Phone,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Star,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Wrench,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import {
  COMPANY_INFO,
  CONFIDENCE_BADGES,
  SERVICES_LIST,
  HOW_WE_WORK_STEPS,
  CITIES_LIST,
  FAQ_LIST,
  TESTIMONIALS_LIST,
  GOOGLE_REVIEWS_URL,
} from '../constants';
import { ServiceIcon } from '../components/ServiceIcon';
import { useDocumentMeta, LOCAL_BUSINESS_SCHEMA } from '../hooks/useDocumentMeta';
import { GoogleReviewsSection } from '../components/GoogleReviewsSection';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const whatsappUrl = getWhatsAppUrl('/');

  useDocumentMeta({
    title: 'Empresa de Segurança Eletrônica em Curitiba e Região | Intelsecsul',
    description: 'Câmeras, alarme monitorado, cerca elétrica e controle de acesso em Curitiba, Pinhais, São José dos Pinhais e região. Equipe própria, orçamento sem custo. Fale no WhatsApp.',
    jsonLdSchema: LOCAL_BUSINESS_SCHEMA,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="bg-[#0A0D14] text-slate-200 font-sans selection:bg-[#0091FF] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-[#0B1528] text-white overflow-hidden py-16 sm:py-24 border-b border-slate-800">
        {/* Subtle grid and ambient glow accents */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00C5FF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0091FF]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00C5FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            
            {/* Top Tagline Badge - mantido no código para SEO */}
            <div className="sr-only">
              <span>Curitiba e Região Metropolitana</span>
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Segurança eletrônica para sua casa, empresa ou condomínio em Curitiba e Região Metropolitana
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl">
              Câmeras, alarme monitorado, cerca elétrica, controle de acesso e portão eletrônico — projeto, instalação e manutenção com equipe própria. Atendimento em Curitiba, Pinhais, São José dos Pinhais, Araucária, Almirante Tamandaré e toda a região.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] transition-all shadow-lg hover:shadow-[#25D366]/20 text-base"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0" />
                <span>Solicitar orçamento pelo WhatsApp</span>
              </a>

              <a
                href={COMPANY_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-slate-200 bg-[#121824] hover:bg-slate-800 hover:text-white transition-all border border-slate-700 text-base"
              >
                <Phone className="w-5 h-5 text-[#0091FF]" />
                <span>Ligar agora ({COMPANY_INFO.phoneDisplay})</span>
              </a>
            </div>

          </div>
        </div>
      </section>


      {/* ================= BLOCO DE CONFIANÇA (4 badges) ================= */}
      <section className="bg-[#05070A] py-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONFIDENCE_BADGES.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#121824] border border-slate-800 text-slate-200 text-sm font-medium shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#00C5FF] shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= NOSSOS SERVIÇOS (grid 10 cards) ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#00C5FF] text-xs font-bold uppercase tracking-wider block mb-2">
            Soluções Completas
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            Nossos Serviços de Segurança Eletrônica
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Projetos sob medida para residências, comércios, indústrias e condomínios com equipamentos de alta tecnologia e garantia de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => (
            <Link
              key={service.slug}
              to={`/servicos/${service.slug}`}
              className="bg-[#121824] rounded-xl overflow-hidden border border-slate-800/90 shadow-lg hover:border-[#0091FF] hover:shadow-[#0091FF]/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Optimized Photorealistic Image Header */}
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
                  
                  {/* Floating Icon Badge over Image */}
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
                <span>Ver detalhes e orçamento</span>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>


      {/* ================= COMO TRABALHAMOS (5 passos) ================= */}
      <section className="bg-[#05070A] text-white py-16 sm:py-20 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#00C5FF] text-xs font-bold uppercase tracking-wider block mb-2">
              Processo Transparente
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
              Como Trabalhamos
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Do primeiro diagnóstico à manutenção contínua, garantimos um padrão técnico rigoroso em cada etapa do seu projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {HOW_WE_WORK_STEPS.map((step) => (
              <div
                key={step.number}
                className="bg-[#121824] rounded-xl p-6 border border-slate-800 flex flex-col justify-between relative group hover:border-[#0091FF]/60 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#0A0D14] text-white border border-[#0091FF]/50 flex items-center justify-center font-bold text-sm mb-4 text-[#00C5FF]">
                    {step.number}
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= ATENDEMOS TODA A REGIÃO METROPOLITANA ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#121824] rounded-2xl p-8 sm:p-12 border border-slate-800 shadow-xl">
          
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-3 border border-[#0091FF]/30">
              <MapPin className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Cobertura Regional</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Atendemos Toda a Região Metropolitana
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Com sede em Curitiba, nossa equipe atende rapidamente residências, empresas e condomínios nas seguintes cidades da região:
            </p>
          </div>

          {/* Grid of 11 Cities tags / cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
            {CITIES_LIST.map((city) => (
              <Link
                key={city.slug}
                to={`/cidades/${city.slug}`}
                className="flex items-center gap-2.5 p-3.5 rounded-lg bg-[#0A0D14] border border-slate-800 hover:bg-[#0091FF]/15 hover:border-[#00C5FF] hover:text-[#00C5FF] text-slate-200 text-xs sm:text-sm font-semibold transition-all group"
              >
                <MapPin className="w-4 h-4 text-[#0091FF] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="truncate">{city.name}</span>
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Precisa de atendimento imediato em qualquer uma dessas cidades?
            </span>
            <Link
              to="/cidades"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00C5FF] hover:text-white uppercase tracking-wider transition-colors"
            >
              <span>Ver detalhes de atendimento por cidade</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* ================= PERGUNTAS FREQUENTES (accordion) ================= */}
      <section className="bg-[#05070A] py-16 sm:py-20 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-[#00C5FF] text-xs font-bold uppercase tracking-wider block mb-2">
              Dúvidas Comuns
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_LIST.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#121824] rounded-xl border border-slate-800 shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base hover:text-[#00C5FF] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#00C5FF]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/perguntas-frequentes"
              className="text-xs font-bold text-[#00C5FF] hover:underline"
            >
              Tem outras perguntas? Acesse nossa página completa de FAQ →
            </Link>
          </div>

        </div>
      </section>


      {/* ================= CIDADES ATENDIDAS (Badges Clicáveis) ================= */}
      <section className="bg-[#05070A] py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[#00C5FF] text-xs font-bold uppercase tracking-wider block mb-2">
            Cobertura Regional
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Atendimento em Curitiba e Região Metropolitana
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto mb-8">
            Atendemos residências, comércios, condomínios e indústrias nas principais cidades da Região Metropolitana com agilidade e visita técnica sem custo.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto mb-6">
            {CITIES_LIST.map((city) => (
              <Link
                key={city.slug}
                to={`/cidades/${city.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#121824] border border-slate-800 hover:border-[#0091FF] hover:bg-[#0091FF]/10 text-slate-200 hover:text-white text-xs font-semibold transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-[#00C5FF]" />
                <span>{city.name}</span>
              </Link>
            ))}
          </div>

          <p className="text-xs text-slate-400">
            Clique na sua cidade para ver serviços específicos e solicitar orçamento para a sua região.
          </p>
        </div>
      </section>

      {/* ================= DEPOIMENTOS (GOOGLE MEU NEGÓCIO) ================= */}
      <GoogleReviewsSection />


      {/* ================= CTA FINAL ================= */}
      <section className="bg-[#0A0D14] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="w-12 h-12 rounded-2xl bg-[#0091FF]/20 border border-[#0091FF]/30 flex items-center justify-center text-[#00C5FF] mx-auto mb-6">
            <Shield className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
            Solicite uma avaliação gratuita para o seu imóvel
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
            Nossa equipe analisa o local e envia um orçamento sob medida, sem compromisso.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] transition-all shadow-lg hover:shadow-[#25D366]/30 text-base"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span>Falar no WhatsApp agora</span>
          </a>

          <p className="text-xs text-slate-400 mt-4">
            Ou ligue para <a href={COMPANY_INFO.phoneTel} className="text-[#00C5FF] font-semibold hover:underline">{COMPANY_INFO.phoneDisplay}</a>
          </p>

        </div>
      </section>

    </div>
  );
};
