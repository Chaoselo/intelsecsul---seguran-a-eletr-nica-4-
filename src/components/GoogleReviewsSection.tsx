import React from 'react';
import { Star, ExternalLink, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_LIST } from '../constants';
import { siteConfig } from '../config/siteConfig';

// Official Google G Logo SVG Component
export const GoogleGIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

const avatarColors = [
  'bg-blue-600 text-white',
  'bg-emerald-600 text-white',
  'bg-purple-600 text-white',
  'bg-amber-600 text-white',
];

export const GoogleReviewsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Badge e Título Centralizado */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        {/* Badge Destaque no Topo */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121824] border border-slate-700/80 shadow-md mb-4 text-xs font-medium text-slate-200">
          <GoogleGIcon className="w-4 h-4 shrink-0" />
          <div className="flex items-center gap-1 text-amber-400 font-bold">
            <span>{siteConfig.googleRating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
          </div>
          <span className="text-slate-400">|</span>
          <span className="text-slate-200 font-semibold">
            Avaliação {siteConfig.googleRating} estrelas no Google Meu Negócio
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
          O que nossos clientes dizem no Google
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
          Confira o depoimento real de moradores, condomínios e empresas de Curitiba e Região Metropolitana que confiam na Intelsecsul.
        </p>
      </div>

      {/* Grid de Cards de Avaliação estilo Google Maps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {TESTIMONIALS_LIST.map((item, idx) => {
          const initial = item.author.charAt(0).toUpperCase();
          const avatarBg = avatarColors[idx % avatarColors.length];

          return (
            <div
              key={item.id}
              className="bg-[#121824] rounded-xl p-6 border border-slate-800 hover:border-slate-700 transition-all shadow-md flex flex-col justify-between relative group"
            >
              <div>
                {/* Header do Card com Avatar, Nome e Badge Verificado */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${avatarBg} font-bold text-base flex items-center justify-center shrink-0 shadow-inner`}>
                      {initial}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white leading-snug flex items-center gap-1">
                        {item.author}
                      </h3>
                      <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>Verificada no Google</span>
                      </div>
                    </div>
                  </div>

                  <GoogleGIcon className="w-4 h-4 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Estrelas e Data */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  {item.date && (
                    <span className="text-[11px] text-slate-400">{item.date}</span>
                  )}
                </div>

                {/* Conteúdo do Depoimento */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  "{item.content}"
                </p>
              </div>

              {/* Tag do Serviço */}
              {item.service && (
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#00C5FF] bg-[#0091FF]/10 px-2.5 py-1 rounded-md border border-[#0091FF]/20">
                    {item.service}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Botão Principal no final da Seção */}
      <div className="text-center">
        <a
          href={siteConfig.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#121824] hover:bg-[#1a2334] border border-slate-700 hover:border-[#0091FF] transition-all shadow-lg group hover:shadow-[#0091FF]/10"
        >
          <GoogleGIcon className="w-5 h-5 shrink-0" />
          <span>Ver mais avaliações ou deixar sua opinião no Google</span>
          <ExternalLink className="w-4 h-4 text-[#00C5FF] group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
};
