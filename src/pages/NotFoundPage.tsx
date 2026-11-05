import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, AlertTriangle, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const prevTitle = document.title;
    document.title = 'Página não encontrada | Intelsecsul';

    // Meta robots: trocar para 'noindex, follow'
    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    let createdRobots = false;
    let prevRobotsContent = '';
    if (robotsMeta) {
      prevRobotsContent = robotsMeta.content;
      robotsMeta.content = 'noindex, follow';
    } else {
      createdRobots = true;
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'noindex, follow';
      document.head.appendChild(robotsMeta);
    }

    // Canonical: remover o atributo href
    const canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const prevCanonicalHref = canonicalLink ? canonicalLink.getAttribute('href') : null;
    if (canonicalLink) {
      canonicalLink.removeAttribute('href');
    }

    // og:url: remover o atributo content
    const ogUrlMeta = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    const prevOgUrlContent = ogUrlMeta ? ogUrlMeta.getAttribute('content') : null;
    if (ogUrlMeta) {
      ogUrlMeta.removeAttribute('content');
    }

    return () => {
      document.title = prevTitle;
      if (createdRobots && robotsMeta) {
        robotsMeta.remove();
      } else if (robotsMeta) {
        robotsMeta.content = prevRobotsContent;
      }
      if (canonicalLink && prevCanonicalHref !== null) {
        canonicalLink.setAttribute('href', prevCanonicalHref);
      }
      if (ogUrlMeta && prevOgUrlContent !== null) {
        ogUrlMeta.setAttribute('content', prevOgUrlContent);
      }
    };
  }, []);

  const whatsappUrl = getWhatsAppUrl('/404', 'Olá! Acessei um link inexistente no site da Intelsecsul e gostaria de ajuda com informações sobre os serviços.');

  return (
    <div className="bg-[#0A0D14] min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 text-slate-200 font-sans selection:bg-[#0091FF] selection:text-white">
      <div className="max-w-2xl w-full text-center">
        
        {/* Badge de status 404 */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-6 border border-[#0091FF]/30">
          <AlertTriangle className="w-4 h-4 text-[#00C5FF]" />
          <span>Erro 404</span>
        </div>

        {/* Indicador numérico visual */}
        <div className="text-7xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600 mb-4 tracking-tight">
          404
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
          Página não encontrada
        </h1>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          O endereço que você acessou não existe ou foi alterado.
        </p>

        {/* Grupo de botões de navegação e contato */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#0091FF] hover:bg-[#0081E6] active:bg-[#0070CC] transition-all shadow-lg hover:shadow-[#0091FF]/30 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar à página inicial</span>
          </Link>

          <Link
            to="/servicos/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-200 bg-[#121824] hover:bg-slate-800 border border-slate-700 hover:border-[#0091FF] transition-all text-sm"
          >
            <span>Ver todos os serviços</span>
            <ArrowRight className="w-4 h-4 text-[#00C5FF]" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-md text-sm"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
            <span>Falar pelo WhatsApp</span>
          </a>
        </div>

        {/* Suporte telefônico alternativo */}
        <div className="pt-8 border-t border-slate-800/80 text-xs text-slate-400">
          <span>Dúvidas ou atendimento imediato? Ligue para </span>
          <a
            href={COMPANY_INFO.phoneTel}
            className="text-[#00C5FF] font-semibold hover:underline inline-flex items-center gap-1 ml-1"
          >
            <Phone className="w-3 h-3" />
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
