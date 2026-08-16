import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Scale, 
  Shield, 
  ArrowRight, 
  DollarSign, 
  CheckCircle2,
  Building2
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { useDocumentMeta, buildBreadcrumbSchema } from '../hooks/useDocumentMeta';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ComparativosHubPage: React.FC = () => {
  const location = useLocation();
  const rawPath = location.pathname;
  const currentPath = rawPath.endsWith('/') ? rawPath : `${rawPath}/`;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Início', url: '/' },
    { name: 'Comparativos', url: '/comparativos/' }
  ]);

  useDocumentMeta({
    title: 'Comparativos de Segurança Eletrônica | Intelsecsul',
    description: 'Compare modelos de contratação e entenda as diferenças entre a Intelsecsul e outras opções do mercado de segurança eletrônica.',
    canonicalUrl: `https://intelsecsul.com.br${currentPath}`,
    jsonLdSchema: breadcrumbSchema,
  });

  const whatsappUrl = getWhatsAppUrl(currentPath);

  return (
    <div className="bg-[#0A0D14] text-slate-200 font-sans selection:bg-[#0091FF] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#0A0D14] text-white py-12 sm:py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-[#00C5FF] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-slate-200 font-medium">Comparativos</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-6 border border-[#0091FF]/30">
              <Scale className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Análise & Tomada de Decisão</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Comparativos
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
              Reunimos aqui comparativos para ajudar você a decidir com mais clareza. Selecione um tema abaixo.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CARDS DE COMPARATIVOS ================= */}
      <section className="py-14 sm:py-20 bg-[#0E131F] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Comparativo 1 */}
            <Link
              to="/comparativos/compra-x-locacao-de-equipamentos/"
              className="p-8 rounded-3xl bg-[#141A29] border border-slate-800 hover:border-[#0091FF] transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0091FF]/15 text-[#00C5FF] border border-[#0091FF]/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <DollarSign className="w-6 h-6" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#00C5FF] mb-2 block">
                  Modelos de Aquisição
                </span>

                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-[#00C5FF] transition-colors leading-snug">
                  Compra ou locação de equipamentos de segurança: qual escolher?
                </h2>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Entenda as diferenças entre comprar os equipamentos à vista ou optar pela locação com mensalidade fixa, taxa zero de instalação e manutenção inclusa.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-sm font-semibold text-[#00C5FF]">
                <span>Ler comparativo completo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Comparativo 2 */}
            <Link
              to="/comparativos/intelsecsul-x-verisure/"
              className="p-8 rounded-3xl bg-[#141A29] border border-slate-800 hover:border-[#0091FF] transition-all flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0091FF]/15 text-[#00C5FF] border border-[#0091FF]/30 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <Building2 className="w-6 h-6" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#00C5FF] mb-2 block">
                  Modelos de Empresa
                </span>

                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-[#00C5FF] transition-colors leading-snug">
                  Intelsecsul ou Verisure: qual modelo faz mais sentido para você?
                </h2>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Compare a abrangência de serviços, fidelidade contratual, suporte técnico local e soluções sob medida da Intelsecsul em relação ao modelo multinacional.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-sm font-semibold text-[#00C5FF]">
                <span>Ler comparativo completo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>

          {/* Destaque institucional */}
          <div className="mt-16 p-8 rounded-2xl bg-[#121824] border border-slate-800 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">Precisa de um projeto personalizado?</h3>
              <p className="text-slate-400 text-sm max-w-2xl">
                Nossos especialistas analisam seu imóvel presencialmente em Curitiba e RMC e indicam exatamente o melhor investimento.
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-100 bg-[#25D366] hover:bg-[#20bd5a] transition-all text-sm shrink-0"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Solicitar análise técnica</span>
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
              <span>Transparência em Primeiro Lugar</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              Ainda com dúvidas sobre qual opção é melhor para você?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Fale com a Intelsecsul e receba uma orientação técnica transparente e sem compromisso.
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
                to="/contato/"
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
