import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  MapPin, 
  Shield, 
  ArrowRight,
  FileText,
  HelpCircle,
  Building2,
  CheckCircle2
} from 'lucide-react';
import { COMPANY_INFO, CITIES_LIST, SERVICES_LIST } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useDocumentMeta, LOCAL_BUSINESS_SCHEMA, buildBreadcrumbSchema } from '../hooks/useDocumentMeta';
import { getWhatsAppUrl } from '../utils/whatsapp';

import { BairrosCuritibaCard } from './BairrosCuritibaCard';

export interface FeaturedServiceItem {
  name: string;
  slug: string;
  description?: string;
}

export interface CityPageTemplateProps {
  title: string;
  metaDescription: string;
  h1: string;
  introText: string;
  servicosDestaque: FeaturedServiceItem[];
  bairrosCuritiba?: boolean;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  cityName: string; // Used to filter out from "Também atendemos"
  citySlug?: string;
  ctaFinal: {
    title: string;
    text: string;
    buttonText: string;
  };
  ogImage?: string;
}

export const CityPageTemplate: React.FC<CityPageTemplateProps> = ({
  title,
  metaDescription,
  h1,
  introText,
  servicosDestaque,
  bairrosCuritiba,
  faq,
  cityName,
  citySlug,
  ctaFinal,
  ogImage,
}) => {
  const location = useLocation();
  const currentPath = citySlug ? `/cidades/${citySlug}` : location.pathname;

  const featuredService = servicosDestaque?.[0]?.slug ? SERVICES_LIST.find(s => s.slug === servicosDestaque[0].slug) : null;
  const pageOgImage = ogImage || featuredService?.imageUrl || SERVICES_LIST[0]?.imageUrl;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Início', url: '/' },
    { name: 'Cidades Atendidas', url: '/cidades' },
    { name: cityName, url: currentPath }
  ]);

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

  const schemas: Array<Record<string, any>> = [LOCAL_BUSINESS_SCHEMA, breadcrumbSchema];
  if (faqSchema) {
    schemas.push(faqSchema);
  }

  useDocumentMeta({
    title,
    description: metaDescription,
    ogImage: pageOgImage,
    jsonLdSchema: schemas,
  });

  // Accordion state for FAQ
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const whatsappUrl = getWhatsAppUrl(currentPath);

  // Filter other 10 cities
  const otherCities = CITIES_LIST.filter(c => {
    if (citySlug) return c.slug !== citySlug;
    return c.name.toLowerCase() !== cityName.toLowerCase();
  });

  // Function to enrich featured service with fallback description if needed
  const getServiceData = (item: FeaturedServiceItem) => {
    const found = SERVICES_LIST.find(s => s.slug === item.slug);
    return {
      title: item.name,
      slug: item.slug,
      description: item.description || found?.description || 'Projeto técnico personalizado e instalação profissional para o seu imóvel.',
    };
  };

  return (
    <div className="bg-[#0A0D14] text-slate-200 font-sans selection:bg-[#0091FF] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#0A0D14] text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-[#00C5FF] transition-colors">Início</Link>
            <span>/</span>
            <Link to="/cidades" className="hover:text-[#00C5FF] transition-colors">Cidades Atendidas</Link>
            <span>/</span>
            <span className="text-slate-200 font-medium truncate">{cityName}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-4 border border-[#0091FF]/30">
              <MapPin className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Atendimento Local em {cityName} e Região</span>
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
                to="/contato"
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

        </div>
      </section>


      {/* ================= SERVIÇOS MAIS BUSCADOS EM [CIDADE] ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#00C5FF] text-xs font-bold uppercase tracking-wider block mb-2">
            Soluções Locais
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
            Serviços mais buscados em {cityName}
          </h2>
          <p className="text-slate-400 text-sm">
            Projetos sob medida para atender as necessidades de segurança de {cityName}.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicosDestaque.map((item, idx) => {
            const serviceData = getServiceData(item);
            return (
              <Link
                key={idx}
                to={`/servicos/${serviceData.slug}`}
                className="bg-[#121824] rounded-xl p-6 border border-slate-800 shadow-md hover:border-[#0091FF]/60 hover:shadow-[#0091FF]/10 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0A0D14] border border-slate-800 flex items-center justify-center font-bold text-sm text-[#00C5FF] mb-4 group-hover:border-[#0091FF]/40">
                    <Building2 className="w-5 h-5 text-[#00C5FF]" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#00C5FF] transition-colors mb-2">
                    {serviceData.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {serviceData.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-[#00C5FF] group-hover:text-[#0091FF]">
                  <span>Saiba mais</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {bairrosCuritiba && <BairrosCuritibaCard />}
      </section>


      {/* ================= FAQ LOCAL ================= */}
      <section className="bg-[#05070A] py-12 sm:py-16 border-y border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-3 border border-[#0091FF]/30">
              <HelpCircle className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Dúvidas Frequentes</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Perguntas frequentes sobre atendimento em {cityName}
            </h2>
          </div>

          <div className="space-y-4">
            {faq.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#121824] rounded-xl border border-slate-800 shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base hover:text-[#00C5FF] transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#00C5FF]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800 pt-3">
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
      <section className="bg-[#0A0D14] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
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


      {/* ================= TAMBÉM ATENDEMOS ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#121824] rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-xl">
          <div className="flex items-center gap-3 mb-3">
            <MapPin className="w-5 h-5 text-[#00C5FF]" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Também atendemos na Região Metropolitana
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mb-6">
            Além de {cityName}, oferecemos atendimento completo e equipe técnica especializada nas seguintes cidades:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherCities.map((otherCity) => (
              <Link
                key={otherCity.slug}
                to={`/cidades/${otherCity.slug}`}
                className="flex items-center gap-2 p-3 rounded-xl bg-[#0A0D14] border border-slate-800 hover:border-[#0091FF] hover:text-[#00C5FF] text-slate-200 text-xs font-semibold transition-all group"
              >
                <MapPin className="w-3.5 h-3.5 text-[#0091FF] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="truncate">{otherCity.name}</span>
              </Link>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
            <span className="text-slate-400">Atendimento presencial e suporte em toda a RMC</span>
            <Link to="/cidades" className="text-[#00C5FF] font-bold hover:underline inline-flex items-center gap-1">
              <span>Ver mapa e todas as cidades</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
