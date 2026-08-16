import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Shield, 
  CheckCircle2, 
  Phone, 
  ArrowRight,
  Sparkles,
  HelpCircle,
  FileText,
  AlertTriangle
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useDocumentMeta, buildBreadcrumbSchema } from '../hooks/useDocumentMeta';
import { getWhatsAppUrl } from '../utils/whatsapp';

import { BairrosCuritibaCard } from './BairrosCuritibaCard';

export interface ServicePageTemplateProps {
  title: string;
  metaDescription: string;
  h1: string;
  introText: string;
  whenToHireTitle?: string;
  whenToHireText: string;
  sintomasFrequentes?: Array<{
    titulo: string;
    descricao: string;
  }>;
  bairrosCuritiba?: boolean;
  tiposAplicacaoTitle?: string;
  tiposAplicacao: Array<{
    title: string;
    description: string;
  }>;
  segmentLinks?: Array<{
    title: string;
    description: string;
    url: string;
  }>;
  diferenciais: Array<{
    title: string;
    description: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  ctaFinal: {
    title: string;
    text: string;
    buttonText: string;
  };
  serviceSlug?: string;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  title,
  metaDescription,
  h1,
  introText,
  whenToHireTitle,
  whenToHireText,
  sintomasFrequentes,
  bairrosCuritiba,
  tiposAplicacaoTitle = 'Tipos e Aplicações',
  tiposAplicacao,
  segmentLinks,
  diferenciais,
  faq,
  ctaFinal,
  serviceSlug,
}) => {
  const location = useLocation();
  const rawPath = serviceSlug ? `/servicos/${serviceSlug}` : location.pathname;
  const currentPath = rawPath.endsWith('/') ? rawPath : `${rawPath}/`;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Início', url: '/' },
    { name: 'Serviços', url: '/' },
    { name: h1, url: currentPath }
  ]);

  // JSON-LD Schemas for Service & FAQPage
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": h1,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Intelsecsul - Segurança Eletrônica",
      "telephone": "+5541998448409",
      "email": "contato@intelsecsul.com.br"
    },
    "areaServed": "Curitiba e Região Metropolitana",
    "description": metaDescription
  };

  const faqSchema = faq && faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  const jsonLdSchema = faqSchema 
    ? [serviceSchema, breadcrumbSchema, faqSchema] 
    : [serviceSchema, breadcrumbSchema];

  const currentService = serviceSlug ? SERVICES_LIST.find(s => s.slug === serviceSlug) : null;

  useDocumentMeta({
    title,
    description: metaDescription,
    ogImage: currentService?.imageUrl,
    canonicalUrl: `https://intelsecsul.com.br${currentPath}`,
    jsonLdSchema,
  });

  // Accordion state for FAQ
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsappUrl = getWhatsAppUrl(currentPath);

  return (
    <div className="bg-[#0A0D14] text-slate-200 font-sans selection:bg-[#0091FF] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#0A0D14] text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-[#00C5FF] transition-colors">Início</Link>
            <span>/</span>
            <Link to="/" className="hover:text-[#00C5FF] transition-colors">Serviços</Link>
            <span>/</span>
            <span className="text-slate-200 font-medium truncate">{h1}</span>
          </nav>

          <div className={currentService ? "grid grid-cols-1 lg:grid-cols-12 gap-8 items-center" : "max-w-4xl"}>
            <div className={currentService ? "lg:col-span-7" : ""}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-4 border border-[#0091FF]/30">
                <Shield className="w-3.5 h-3.5 text-[#00C5FF]" />
                <span>Serviço Especializado Intelsecsul</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                {h1}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                {introText}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contato/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#0091FF] hover:bg-[#0081E6] active:bg-[#0070CC] transition-all shadow-lg hover:shadow-[#0091FF]/30 text-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Solicitar orçamento</span>
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-[#25D366]/20 text-sm"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  <span>Falar no WhatsApp</span>
                </a>
              </div>
            </div>

            {currentService && (
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-slate-800/90 shadow-2xl bg-[#121824] group">
                  <img
                    src={currentService.imageUrl}
                    alt={currentService.imageAlt || h1}
                    width={800}
                    height={450}
                    loading="eager"
                    fetchPriority="high"
                    referrerPolicy="no-referrer"
                    className="w-full h-64 sm:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14]/80 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            )}
          </div>

        </div>
      </section>


      {/* ================= QUANDO CONTRATAR ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#121824] rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-8 rounded-lg bg-[#0091FF]/20 flex items-center justify-center text-[#00C5FF]">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#00C5FF]">
              Orientação Técnica
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
            {whenToHireTitle || `Quando contratar este serviço`}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
            {whenToHireText}
          </p>
        </div>

        {bairrosCuritiba && <BairrosCuritibaCard />}
      </section>


      {/* ================= PROBLEMAS E SINTOMAS FREQUENTES ================= */}
      {sintomasFrequentes && sintomasFrequentes.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-3 border border-[#0091FF]/30">
              <AlertTriangle className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Diagnóstico Técnico Rápido</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Problemas e Sintomas Frequentes que Resolvemos
            </h2>
            <p className="text-slate-400 text-sm">
              Identifique o defeito do seu sistema e entenda como nossa equipe técnica resolve de forma definitiva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sintomasFrequentes.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#121824] rounded-xl p-6 border border-slate-800 hover:border-[#0091FF] transition-all flex flex-col justify-between group shadow-md"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-lg bg-[#0091FF]/15 text-[#00C5FF] flex items-center justify-center shrink-0 border border-[#0091FF]/30 group-hover:bg-[#0091FF] group-hover:text-white transition-colors">
                      <AlertTriangle className="w-4 h-4" />
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-[#00C5FF] transition-colors leading-snug">
                      {item.titulo}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1 border-t border-slate-800/80">
                    <span className="text-[#00C5FF] font-semibold">Solução IntelSec: </span>
                    {item.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}


      {/* ================= TIPOS E APLICAÇÕES ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/60">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#00C5FF] text-xs font-bold uppercase tracking-wider block mb-2">
            Modelos e Opções
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            {tiposAplicacaoTitle}
          </h2>
          <p className="text-slate-400 text-sm">
            Conheça as principais soluções disponíveis para atender a necessidade do seu imóvel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiposAplicacao.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#121824] rounded-xl p-6 border border-slate-800 shadow-md hover:border-[#0091FF]/60 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#0A0D14] border border-slate-800 flex items-center justify-center font-bold text-sm text-[#00C5FF] mb-4 group-hover:border-[#0091FF]/40">
                  0{idx + 1}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#00C5FF] transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= VER POR SEGMENTO ================= */}
        {segmentLinks && segmentLinks.length > 0 && (
          <div className="mt-12 pt-10 border-t border-slate-800/80">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-[#00C5FF] text-xs font-bold uppercase tracking-wider block mb-2">
                Atendimento Especializado
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Ver por segmento
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Explore soluções e projetos específicos desenvolvidos para o seu tipo de imóvel.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {segmentLinks.map((seg, idx) => (
                <Link
                  key={idx}
                  to={seg.url}
                  className="p-5 rounded-2xl bg-[#121824] border border-slate-800 hover:border-[#0091FF] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#00C5FF] transition-colors mb-1.5 flex items-center justify-between">
                      <span>{seg.title}</span>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#00C5FF] group-hover:translate-x-1 transition-all" />
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {seg.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>


      {/* ================= DIFERENCIAIS INTELSECSUL ================= */}
      <section className="bg-[#05070A] py-12 sm:py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#00C5FF] text-xs font-bold uppercase tracking-wider block mb-2">
              Por que nos escolher
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Diferenciais Intelsecsul
            </h2>
            <p className="text-slate-400 text-sm">
              Padrão de qualidade e compromisso com a segurança da sua família e do seu patrimônio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {diferenciais.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#121824] rounded-xl p-6 border border-slate-800 shadow-lg flex flex-col justify-between relative group hover:border-[#0091FF]/50 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0A0D14] text-[#00C5FF] border border-slate-800 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-6 h-6 text-[#00C5FF]" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= FAQ ACCORDION ================= */}
      <section className="py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-3 border border-[#0091FF]/30">
              <HelpCircle className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Dúvidas Frequentes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Perguntas Frequentes sobre {h1.split(' em ')[0] || h1}
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              const buttonId = `service-faq-btn-${idx}`;
              const panelId = `service-faq-panel-${idx}`;

              return (
                <div
                  key={idx}
                  className="bg-[#121824] rounded-xl border border-slate-800 shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base hover:text-[#00C5FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0091FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121824] transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#00C5FF]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-6 pb-5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800 pt-3"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* ================= CTA FINAL ================= */}
      <section className="bg-[#0A0D14] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="w-12 h-12 rounded-2xl bg-[#0091FF]/20 border border-[#0091FF]/30 flex items-center justify-center text-[#00C5FF] mx-auto mb-6">
            <Shield className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
            {ctaFinal.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            {ctaFinal.text}
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-xl hover:shadow-[#25D366]/20 text-base"
          >
            <WhatsAppIcon className="w-6 h-6 fill-current" />
            <span>{ctaFinal.buttonText}</span>
          </a>

          <p className="text-xs text-slate-400 mt-4">
            Ou ligue para <a href={COMPANY_INFO.phoneTel} className="text-[#00C5FF] font-semibold hover:underline">{COMPANY_INFO.phoneDisplay}</a>
          </p>

        </div>
      </section>

    </div>
  );
};

