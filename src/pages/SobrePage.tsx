import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  Users, 
  MapPin, 
  Wrench, 
  Award, 
  CheckCircle2, 
  FileText,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO, CITIES_LIST } from '../constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { useDocumentMeta, buildBreadcrumbSchema } from '../hooks/useDocumentMeta';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const SobrePage: React.FC = () => {
  const location = useLocation();
  const rawPath = location.pathname;
  const currentPath = rawPath.endsWith('/') ? rawPath : `${rawPath}/`;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Início', url: '/' },
    { name: 'Sobre Nós', url: '/sobre/' }
  ]);

  useDocumentMeta({
    title: 'Sobre a Intelsecsul | Empresa de Segurança Eletrônica em Curitiba',
    description: 'Conheça a Intelsecsul, empresa de segurança eletrônica sediada em Curitiba, com equipe técnica própria e atendimento em toda a Região Metropolitana.',
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
            <span className="text-slate-200 font-medium">Sobre a Intelsecsul</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-6 border border-[#0091FF]/30">
              <Shield className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Institucional</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Sobre a Intelsecsul
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
              Somos uma empresa de segurança eletrônica sediada em Curitiba (PR), especializada no projeto, instalação e manutenção de sistemas tecnológicos para residências, comércios e condomínios em toda a Região Metropolitana.
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
                to="/por-que-escolher-a-intelsecsul/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#121824] hover:bg-[#1A2234] border border-slate-700 transition-all text-sm"
              >
                <span>Conheça nossos diferenciais</span>
                <ArrowRight className="w-4 h-4 text-[#00C5FF]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= QUEM SOMOS & HISTÓRIA ================= */}
      <section className="py-12 sm:py-16 bg-[#0E131F] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00C5FF]">
                <Users className="w-4 h-4" />
                <span>Equipe Técnica Própria & Qualificada</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Compromisso com a proteção e tranquilidade de cada cliente
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                A <strong>Intelsecsul</strong> nasceu com o propósito claro de elevar o padrão do atendimento em segurança eletrônica na Região Metropolitana de Curitiba. Atuamos de forma transparente, priorizando a qualidade dos equipamentos, o acabamento rigoroso nas instalações e a eficiência no pós-venda.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Diferente de modelos que terceirizam o serviço técnico, contamos com <strong>equipe técnica própria</strong> devidamente treinada e uniformizada. Isso garante padrão de qualidade homogêneo, cumprimento rigoroso de prazos e suporte contínuo para cada projeto executado.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#141A29] border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C5FF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">Sem terceirização</h3>
                    <p className="text-xs text-slate-400">Instalações e manutenções feitas por nossos próprios técnicos.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#141A29] border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00C5FF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">Projetos sob medida</h3>
                    <p className="text-xs text-slate-400">Dimensionamos a solução exata para a necessidade do imóvel.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#121824] p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Nossos Pilares de Atuação
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0091FF]/15 border border-[#0091FF]/30 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 text-[#00C5FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Qualidade de Equipamentos</h4>
                    <p className="text-xs text-slate-400 mt-1">Utilizamos marcas e tecnologias homologadas com garantia e suporte de fábrica.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0091FF]/15 border border-[#0091FF]/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#00C5FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Cobertura Regional</h4>
                    <p className="text-xs text-slate-400 mt-1">Atendemos Curitiba e mais 10 municípios vizinhos com agilidade de deslocamento.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0091FF]/15 border border-[#0091FF]/30 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 text-[#00C5FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Suporte e Manutenção</h4>
                    <p className="text-xs text-slate-400 mt-1">Atendimento preventivo e corretivo pós-instalação para manter seu sistema 100% ativo.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <p className="text-xs text-slate-400">
                  <strong className="text-slate-200">Endereço da Sede:</strong> {COMPANY_INFO.address}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ÁREA DE COBERTURA ================= */}
      <section className="py-12 sm:py-16 bg-[#0A0D14] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Atendimento em Curitiba e Região Metropolitana
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Atendemos clientes residenciais, comerciais e condomínios nas seguintes cidades com equipe local dedicada:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {CITIES_LIST.map((city) => (
              <Link
                key={city.slug}
                to={`/cidades/${city.slug}`}
                className="p-3.5 rounded-xl bg-[#121824] border border-slate-800 hover:border-[#0091FF] hover:text-[#00C5FF] transition-all text-xs font-semibold text-slate-200 flex items-center gap-2 group"
              >
                <MapPin className="w-3.5 h-3.5 text-[#0091FF] group-hover:text-[#00C5FF] shrink-0" />
                <span className="truncate">{city.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA SECTION ================= */}
      <section className="py-16 sm:py-20 bg-[#0A0D14] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#121826] to-[#0E131F] border border-slate-800 shadow-2xl relative">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-6 border border-[#0091FF]/30">
              <Shield className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Fale Conosco</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              Quer conhecer melhor o nosso trabalho?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Fale com nossa equipe e tire suas dúvidas antes de fechar o orçamento.
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
