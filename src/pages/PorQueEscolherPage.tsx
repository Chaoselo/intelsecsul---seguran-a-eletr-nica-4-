import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  Users, 
  MapPin, 
  DollarSign, 
  Key, 
  Headphones, 
  Layers,
  ArrowRight,
  Scale
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { useDocumentMeta, buildBreadcrumbSchema } from '../hooks/useDocumentMeta';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const PorQueEscolherPage: React.FC = () => {
  const location = useLocation();
  const rawPath = location.pathname;
  const currentPath = rawPath.endsWith('/') ? rawPath : `${rawPath}/`;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Início', url: '/' },
    { name: 'Por Que Escolher a Intelsecsul', url: '/por-que-escolher-a-intelsecsul/' }
  ]);

  useDocumentMeta({
    title: 'Por Que Escolher a Intelsecsul | Diferenciais',
    description: 'Equipe técnica própria, atendimento em toda a Região Metropolitana de Curitiba e locação de equipamentos sem investimento inicial. Conheça os diferenciais da Intelsecsul.',
    canonicalUrl: `https://intelsecsul.com.br${currentPath}`,
    jsonLdSchema: breadcrumbSchema,
  });

  const whatsappUrl = getWhatsAppUrl(currentPath);

  const diferenciais = [
    {
      icon: Users,
      title: 'Equipe técnica própria',
      description: 'Instalação e manutenção realizadas por profissionais da própria empresa, sem terceirização.',
    },
    {
      icon: MapPin,
      title: 'Atendimento em toda a Região Metropolitana',
      description: 'Cobrimos Curitiba e mais 10 cidades da região, com o mesmo padrão de atendimento.',
    },
    {
      icon: DollarSign,
      title: 'Orçamento sem custo',
      description: 'Avaliamos o imóvel e apresentamos o projeto sem cobrar pela visita técnica.',
    },
    {
      icon: Key,
      title: 'Locação de equipamentos sem investimento inicial',
      description: 'Você paga apenas uma mensalidade, sem taxa de instalação nem custo de manutenção.',
    },
    {
      icon: Headphones,
      title: 'Suporte após a instalação',
      description: 'Acompanhamento contínuo, não só durante a instalação.',
    },
    {
      icon: Layers,
      title: 'Projetos sob medida',
      description: 'Cada sistema é dimensionado para o imóvel e a necessidade real do cliente, sem soluções genéricas.',
    },
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
            <span className="text-slate-200 font-medium">Por Que Escolher a Intelsecsul</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-6 border border-[#0091FF]/30">
              <Shield className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Nossos Diferenciais</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Por que escolher a Intelsecsul
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
              Entenda por que centenas de residências, empresas e condomínios em Curitiba e Região Metropolitana confiam na Intelsecsul para projetar, instalar e manter seus sistemas de segurança eletrônica.
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

              <Link
                to="/contato/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#0091FF] hover:bg-[#0081E6] active:bg-[#0070CC] transition-all shadow-lg hover:shadow-[#0091FF]/30 text-sm"
              >
                <span>Solicitar orçamento sem custo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GRID DE 6 DIFERENCIAIS ================= */}
      <section className="py-14 sm:py-20 bg-[#0E131F] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
              Compromisso, Transparência e Qualidade
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Conheça os pilares que tornam nossa atuação referência em Curitiba e Região Metropolitana:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {diferenciais.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-[#141A29] border border-slate-800 hover:border-[#0091FF]/50 transition-all flex flex-col justify-between group shadow-md"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0091FF]/15 border border-[#0091FF]/30 flex items-center justify-center text-[#00C5FF] mb-5 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00C5FF] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Comparativos Callout */}
          <div className="mt-14 p-8 rounded-2xl bg-[#121824] border border-slate-800 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00C5FF]">
                Quer comparar antes de contratar?
              </span>
              <h3 className="text-xl font-bold text-white">
                Veja nossos comparativos detalhados
              </h3>
              <p className="text-xs text-slate-400">
                Compare Compra x Locação e entenda as diferenças entre a Intelsecsul e outras opções do mercado.
              </p>
            </div>

            <Link
              to="/comparativos/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#0091FF] hover:bg-[#0081E6] transition-all text-sm shrink-0 shadow-md"
            >
              <Scale className="w-4 h-4" />
              <span>Ver Comparativos</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="py-16 sm:py-20 bg-[#0A0D14] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#121826] to-[#0E131F] border border-slate-800 shadow-2xl relative">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-6 border border-[#0091FF]/30">
              <Shield className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Orçamento Gratuito</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              Peça seu orçamento gratuito
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Fale com nossa equipe e receba uma proposta sob medida para o seu imóvel ou empresa.
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
