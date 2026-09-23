import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, ArrowRight, Calendar, Clock, BookOpen, ChevronRight, ChevronDown, HelpCircle } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { useDocumentMeta, buildBreadcrumbSchema } from '../hooks/useDocumentMeta';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { formatPublishedDate, isValidPublishedDate } from '../utils/formatDate';

export interface BlogSection {
  h2: string;
  content: React.ReactNode;
}

export interface BlogPostTemplateProps {
  title: string;
  metaDescription: string;
  h1: string;
  publishedDate?: string;
  category?: string;
  readTime?: string;
  intro: string;
  sections: BlogSection[];
  ctaFinal: {
    title: string;
    text: string;
    buttonText?: string;
  };
  ogImage?: string;
  whatsappMessage?: string;
  internalLink?: {
    text: string;
    url: string;
    linkText: string;
  };
  relatedQuestions?: Array<{
    question: string;
    answer: string;
  }>;
}

export const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
  title,
  metaDescription,
  h1,
  publishedDate,
  category = 'Segurança Eletrônica',
  readTime = '4 min de leitura',
  intro,
  sections,
  ctaFinal,
  ogImage,
  whatsappMessage,
  internalLink,
  relatedQuestions,
}) => {
  const location = useLocation();
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0]);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const resolvedOgImage = ogImage || SERVICES_LIST[0]?.imageUrl;
  const normalizedPath = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
  const canonicalPageUrl = `https://intelsecsul.com.br${normalizedPath}`;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Início', url: '/' },
    { name: 'Blog', url: '/blog/' },
    { name: h1, url: normalizedPath }
  ]);

  const articleSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": h1,
    "description": metaDescription,
    "image": resolvedOgImage,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalPageUrl
    },
    "author": {
      "@type": "Organization",
      "@id": "https://intelsecsul.com.br/#organization",
      "name": "IntelSec Sul - Segurança Eletrônica"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://intelsecsul.com.br/#organization",
      "name": "IntelSec Sul - Segurança Eletrônica",
      "logo": {
        "@type": "ImageObject",
        "url": "https://intelsecsul.com.br/logo.png"
      }
    }
  };

  if (isValidPublishedDate(publishedDate)) {
    articleSchema["datePublished"] = publishedDate;
  }

  const schemas: any[] = [breadcrumbSchema, articleSchema];

  if (relatedQuestions && relatedQuestions.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": relatedQuestions.map((q) => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }))
    });
  }

  useDocumentMeta({
    title,
    description: metaDescription,
    ogType: 'article',
    ogImage: resolvedOgImage,
    canonicalUrl: canonicalPageUrl,
    jsonLdSchema: schemas,
  });

  const whatsappUrl = getWhatsAppUrl(location.pathname, whatsappMessage);

  return (
    <div className="bg-[#0A0D14] text-slate-200 font-sans selection:bg-[#0091FF] selection:text-white">
      
      {/* ================= HEADER & BREADCRUMB ================= */}
      <section className="relative bg-[#0A0D14] text-white pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-[#00C5FF] transition-colors">Início</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link to="/blog/" className="hover:text-[#00C5FF] transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-slate-300 font-medium truncate max-w-[200px] sm:max-w-xs">{h1}</span>
          </nav>

          {/* Meta Badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs mb-6">
            <span className="px-3 py-1 rounded-full bg-[#0091FF]/10 text-[#00C5FF] font-semibold border border-[#0091FF]/30">
              {category}
            </span>
            {formatPublishedDate(publishedDate) && (
              <>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{formatPublishedDate(publishedDate)}</span>
                </div>
                <span className="text-slate-700">•</span>
              </>
            )}
            <div className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{readTime}</span>
            </div>
          </div>

          {/* Article Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {h1}
          </h1>

          {/* Article Intro Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#121824] border border-slate-800 text-slate-300 text-base sm:text-lg leading-relaxed shadow-lg">
            <p className="font-normal text-slate-200">{intro}</p>
          </div>

        </div>
      </section>

      {/* ================= ARTICLE BODY ================= */}
      <section className="py-12 sm:py-16 bg-[#0E131F] border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
          
          {sections.map((section, idx) => (
            <article key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3 border-b border-slate-800 pb-3">
                <span className="w-2 h-6 rounded-full bg-[#0091FF] shrink-0" />
                <span>{section.h2}</span>
              </h2>
              <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3">
                {typeof section.content === 'string' ? (
                  <p>{section.content}</p>
                ) : (
                  section.content
                )}
              </div>
            </article>
          ))}

          {/* ================= RELATED QUESTIONS (FAQ) ================= */}
          {relatedQuestions && relatedQuestions.length > 0 && (
            <section className="pt-8 border-t border-slate-800/80">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-[#0091FF]/10 text-[#00C5FF]">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    Perguntas Relacionadas
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Dúvidas frequentes sobre este tema
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {relatedQuestions.map((item, qIdx) => {
                  const isOpen = openFaqIndices.includes(qIdx);
                  const buttonId = `faq-btn-${qIdx}`;
                  const panelId = `faq-panel-${qIdx}`;

                  return (
                    <div
                      key={qIdx}
                      className="rounded-xl bg-[#121824] border border-slate-800 overflow-hidden transition-all duration-200 hover:border-slate-700"
                    >
                      <button
                        type="button"
                        id={buttonId}
                        onClick={() => toggleFaq(qIdx)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base hover:text-[#00C5FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0091FF] transition-colors"
                      >
                        <span>{item.question}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#00C5FF]' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          className="px-5 pb-4 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 pt-3"
                        >
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* ================= INTERNAL LINK CALLOUT ================= */}
          {internalLink && (
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#121824] to-[#151D2C] border border-[#0091FF]/30 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg hover:border-[#0091FF]/60 transition-colors">
              <div className="text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00C5FF] block mb-1">
                  Serviço Especializado Intelsecsul
                </span>
                <p className="text-sm sm:text-base text-slate-200 font-medium">
                  {internalLink.text}
                </p>
              </div>
              <Link
                to={internalLink.url}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white bg-[#0091FF] hover:bg-[#0081E6] active:bg-[#0070CC] transition-all text-xs sm:text-sm shrink-0 shadow-md"
              >
                <span>{internalLink.linkText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="py-14 sm:py-20 bg-[#0A0D14] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#121826] to-[#0E131F] border border-slate-800 shadow-2xl relative">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-6 border border-[#0091FF]/30">
              <Shield className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Atendimento Intelsecsul</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
              {ctaFinal.title}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              {ctaFinal.text}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-100 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] transition-all text-base shadow-lg hover:shadow-[#25D366]/20"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>{ctaFinal.buttonText || 'Falar no WhatsApp agora'}</span>
              </a>

              <Link
                to="/contato/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-[#1E2638] hover:bg-[#28334A] transition-all text-base border border-slate-700"
              >
                <span>Enviar mensagem</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Navigation link back to blog */}
          <div className="mt-10 text-center">
            <Link
              to="/blog/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00C5FF] hover:text-white transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Voltar para o Hub de Artigos do Blog</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

