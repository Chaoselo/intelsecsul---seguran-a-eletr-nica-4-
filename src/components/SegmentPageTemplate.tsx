import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  FileText,
  ArrowLeft
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useDocumentMeta, buildBreadcrumbSchema } from '../hooks/useDocumentMeta';
import { getWhatsAppUrl } from '../utils/whatsapp';

export interface SegmentPageTemplateProps {
  title: string;
  metaDescription: string;
  h1: string;
  introText: string;
  destaques: string[];
  pillarLink: {
    url: string;
    label: string;
  };
  ctaFinal: {
    title: string;
    text: string;
    buttonText: string;
  };
  segmentBadge?: string;
  ogImage?: string;
}

export const SegmentPageTemplate: React.FC<SegmentPageTemplateProps> = ({
  title,
  metaDescription,
  h1,
  introText,
  destaques,
  pillarLink,
  ctaFinal,
  segmentBadge = 'Atendimento por Segmento',
  ogImage,
}) => {
  const location = useLocation();

  const matchingService = SERVICES_LIST.find(s => pillarLink?.url?.includes(s.slug));
  const pageOgImage = ogImage || matchingService?.imageUrl || SERVICES_LIST[0]?.imageUrl;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Início', url: '/' },
    { name: 'Serviços', url: pillarLink?.url || '/servicos/cameras-de-seguranca' },
    { name: h1, url: location.pathname }
  ]);

  useDocumentMeta({
    title,
    description: metaDescription,
    ogImage: pageOgImage,
    jsonLdSchema: breadcrumbSchema,
  });

  const whatsappUrl = getWhatsAppUrl(location.pathname);

  return (
    <div className="bg-[#0A0D14] text-slate-200 font-sans selection:bg-[#0091FF] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#0A0D14] text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-[#00C5FF] transition-colors">Início</Link>
            <span>/</span>
            <Link to="/servicos/cameras-de-seguranca" className="hover:text-[#00C5FF] transition-colors">Serviços</Link>
            <span>/</span>
            <span className="text-slate-200 font-medium truncate">{h1}</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-4 border border-[#0091FF]/30">
              <Shield className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>{segmentBadge}</span>
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-100 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] transition-all text-sm shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Falar no WhatsApp agora</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DESTAQUES DO SEGMENTO ================= */}
      <section className="py-12 sm:py-16 bg-[#0E131F] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
              Destaques da Solução
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Principais recursos e diferenciais projetados para atender as necessidades específicas deste segmento em Curitiba e Região Metropolitana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            {destaques.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#141A29] border border-slate-800/80 hover:border-[#0091FF]/40 transition-colors group"
              >
                <div className="p-2 rounded-xl bg-[#0091FF]/10 text-[#00C5FF] shrink-0 mt-0.5 group-hover:bg-[#0091FF]/20 transition-colors">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Link de Volta para a Página Pilar */}
          <div className="mt-12 pt-8 border-t border-slate-800/80">
            <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-2xl bg-[#141A29] border border-[#0091FF]/20 w-full sm:w-auto">
              <div>
                <p className="text-xs text-[#00C5FF] font-semibold uppercase tracking-wider mb-1">
                  Página Completa do Serviço
                </p>
                <p className="text-slate-300 text-sm">
                  Quer saber mais sobre especificações técnicas, garantias e perguntas frequentes?
                </p>
              </div>
              <Link
                to={pillarLink.url}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-[#0091FF]/20 hover:bg-[#0091FF]/30 border border-[#0091FF]/40 text-sm transition-all whitespace-nowrap shrink-0"
              >
                <span>{pillarLink.label}</span>
                <ArrowRight className="w-4 h-4 text-[#00C5FF]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="py-16 sm:py-20 bg-[#0A0D14] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#121826] to-[#0E131F] border border-slate-800 shadow-2xl relative">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-6 border border-[#0091FF]/30">
              <Shield className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Orçamento Sem Compromisso</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              {ctaFinal.title}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
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
                <span>{ctaFinal.buttonText}</span>
              </a>

              <Link
                to="/contato"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-[#1E2638] hover:bg-[#28334A] transition-all text-base border border-slate-700"
              >
                <span>Enviar mensagem</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
