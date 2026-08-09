import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Star, 
  ExternalLink,
  Quote,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const DepoimentosPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Depoimentos de Clientes | Intelsecsul';

    let metaTag = document.querySelector('meta[name="description"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'description');
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute(
      'content',
      'Veja o que os clientes da Intelsecsul dizem sobre a instalação de câmeras, alarme e demais sistemas de segurança em Curitiba e região.'
    );

    return () => {
      document.title = 'Intelsecsul - Segurança Eletrônica e Tecnologia';
    };
  }, []);

  const whatsappUrl = COMPANY_INFO.whatsappUrlDefault;

  // 6 testimonial cards as requested
  const depoimentos = [
    { id: 1, text: '[Depoimento de exemplo — substituir por avaliação real do Google]', author: 'Cliente Intelsecsul', rating: 5, location: 'Curitiba - PR' },
    { id: 2, text: '[Depoimento de exemplo — substituir por avaliação real do Google]', author: 'Cliente Intelsecsul', rating: 5, location: 'Pinhais - PR' },
    { id: 3, text: '[Depoimento de exemplo — substituir por avaliação real do Google]', author: 'Cliente Intelsecsul', rating: 5, location: 'São José dos Pinhais - PR' },
    { id: 4, text: '[Depoimento de exemplo — substituir por avaliação real do Google]', author: 'Cliente Intelsecsul', rating: 5, location: 'Araucária - PR' },
    { id: 5, text: '[Depoimento de exemplo — substituir por avaliação real do Google]', author: 'Cliente Intelsecsul', rating: 5, location: 'Colombo - PR' },
    { id: 6, text: '[Depoimento de exemplo — substituir por avaliação real do Google]', author: 'Cliente Intelsecsul', rating: 5, location: 'Curitiba - PR' },
  ];

  return (
    <div className="bg-[#0A0D14] text-slate-200 font-sans selection:bg-[#0091FF] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#0A0D14] text-white py-12 sm:py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-[#00C5FF] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-slate-200 font-medium">Depoimentos</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-6 border border-[#0091FF]/30">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Avaliações & Satisfação</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              O que nossos clientes dizem
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
              A satisfação de quem confia na Intelsecsul para proteger sua residência, comércio ou condomínio em Curitiba e Região Metropolitana.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-100 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] transition-all text-sm shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Falar no WhatsApp agora</span>
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-200 bg-[#121824] hover:bg-[#1A2234] border border-slate-700 transition-all text-sm"
              >
                <span>Veja mais avaliações no Google</span>
                <ExternalLink className="w-4 h-4 text-[#00C5FF]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GRID DE 6 DEPOIMENTOS ================= */}
      <section className="py-14 sm:py-20 bg-[#0E131F] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Avaliações de Clientes
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Opiniões de moradores, comerciantes e síndicos atendidos pela Intelsecsul em Curitiba e RMC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {depoimentos.map((item) => (
              <div
                key={item.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#141A29] border border-slate-800/90 hover:border-[#0091FF]/40 transition-all flex flex-col justify-between relative shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    {/* 5-star rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-slate-700 group-hover:text-[#0091FF]/40 transition-colors" />
                  </div>

                  {/* Testimonial text */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                    "{item.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">
                      {item.author}
                    </span>
                    <span className="text-slate-500 block text-[11px]">
                      {item.location}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-[#0091FF]/10 text-[#00C5FF] font-semibold text-[11px] border border-[#0091FF]/20">
                    Google Review
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bloco final "Veja mais avaliações no Google" */}
          <div className="mt-14 text-center p-8 sm:p-10 rounded-2xl bg-[#121824] border border-slate-800 max-w-3xl mx-auto shadow-lg">
            <h3 className="text-xl font-bold text-white mb-2">
              Veja mais avaliações no Google
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Acompanhe a reputação da Intelsecsul diretamente no perfil da empresa no Google.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#0091FF] hover:bg-[#0081E6] transition-all text-sm shadow-md"
            >
              <span>Acessar perfil no Google Business</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="py-16 sm:py-20 bg-[#0A0D14] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#121826] to-[#0E131F] border border-slate-800 shadow-2xl relative">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-6 border border-[#0091FF]/30">
              <Shield className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Atendimento Rápido</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              Quer ser o próximo cliente satisfeito?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Peça seu orçamento e veja como é fácil reforçar a segurança do seu imóvel.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-100 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] transition-all text-base shadow-lg hover:shadow-[#25D366]/20"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>Falar no WhatsApp agora</span>
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
