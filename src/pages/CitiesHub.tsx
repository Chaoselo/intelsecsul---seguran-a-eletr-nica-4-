import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Phone, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { CITIES_LIST, COMPANY_INFO } from '../constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const CitiesHub: React.FC = () => {
  useEffect(() => {
    document.title = 'Atendemos toda a Região Metropolitana de Curitiba | Intelsecsul';
    window.scrollTo(0, 0);
  }, []);

  // Completed cities (all 11 cities in RMC)
  const completedCitiesSlugs = [
    'curitiba',
    'pinhais',
    'sao-jose-dos-pinhais',
    'araucaria',
    'almirante-tamandare',
    'colombo',
    'campo-largo',
    'fazenda-rio-grande',
    'campo-magro',
    'quatro-barras',
    'campina-grande-do-sul',
  ];

  return (
    <div className="bg-[#0A0D14] min-h-screen py-12 px-4 sm:px-6 lg:px-8 text-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-4 border border-[#0091FF]/30">
            <MapPin className="w-3.5 h-3.5 text-[#00C5FF]" />
            <span>Região Metropolitana de Curitiba</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Atendemos toda a Região Metropolitana de Curitiba
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A Intelsecsul atende Curitiba e mais 10 cidades da Região Metropolitana, com equipe própria e projetos sob medida para cada região.
          </p>
        </div>

        {/* Embedded Google Map */}
        <div className="bg-[#121824] rounded-2xl p-3 border border-slate-800 shadow-xl mb-12 overflow-hidden">
          <div className="rounded-xl overflow-hidden border border-slate-800 relative">
            <iframe
              src="https://www.google.com/maps?q=Regi%C3%A3o+Metropolitana+de+Curitiba&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              title="Mapa da Região Metropolitana de Curitiba - Atendimento Intelsecsul"
              className="w-full h-[320px] sm:h-[400px] grayscale opacity-90 hover:grayscale-0 transition-all duration-300"
            ></iframe>
          </div>
        </div>

        {/* Section title for cities grid */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Cidades Atendidas na RMC
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Clique em uma cidade para ver os detalhes do atendimento local.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-[#00C5FF] font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00C5FF]"></span>
              Página Completa
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
              Em Expansão
            </span>
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CITIES_LIST.map((city) => {
            const isCompleted = completedCitiesSlugs.includes(city.slug);
            return (
              <Link
                key={city.slug}
                to={`/cidades/${city.slug}`}
                className={`bg-[#121824] rounded-xl p-6 border shadow-lg transition-all duration-200 group flex flex-col justify-between relative ${
                  isCompleted 
                    ? 'border-slate-800 hover:border-[#0091FF] hover:shadow-[#0091FF]/15' 
                    : 'border-slate-800/80 hover:border-slate-700 opacity-90'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                      isCompleted 
                        ? 'bg-[#0091FF]/20 text-[#00C5FF] group-hover:bg-[#0091FF] group-hover:text-white' 
                        : 'bg-[#0A0D14] text-slate-400'
                    }`}>
                      <MapPin className="w-5 h-5" />
                    </span>

                    {isCompleted ? (
                      <span className="text-[11px] font-bold text-[#00C5FF] bg-[#0091FF]/10 border border-[#0091FF]/30 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#00C5FF]" />
                        Atendimento Completo
                      </span>
                    ) : (
                      <span className="text-[11px] font-medium text-slate-400 bg-[#0A0D14] border border-slate-800 px-2.5 py-1 rounded-full">
                        Página em construção
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#00C5FF] transition-colors mb-2">
                    {city.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {isCompleted
                      ? `Projeto técnico completo, câmeras de segurança, alarme e controle de acesso com equipe própria em ${city.name}.`
                      : `Atendemos a cidade de ${city.name} com visita técnica e instalação de sistemas de segurança.`}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-[#00C5FF] group-hover:text-[#0091FF]">
                  <span>{isCompleted ? `Ver serviços em ${city.name}` : `Solicitar orçamento em ${city.name}`}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Trust block */}
        <div className="bg-[#121824] text-white rounded-2xl p-8 sm:p-10 shadow-lg mb-12 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#0091FF]/20 border border-[#0091FF]/30 flex items-center justify-center text-[#00C5FF] mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white">
                Sua cidade está na nossa área de cobertura?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Realizamos visitas técnicas para avaliação de imóveis residenciais, condomínios e estabelecimentos comerciais sem taxa de deslocamento em toda a RMC.
              </p>
              <div className="space-y-2 text-xs text-slate-300 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C5FF]" />
                  <span>Equipe técnica própria uniformizada e equipada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C5FF]" />
                  <span>Agendamento de visita rápido e personalizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C5FF]" />
                  <span>Suporte e manutenção pós-instalação garantidos</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:w-80 md:ml-auto">
              <a
                href={COMPANY_INFO.whatsappUrlDefault}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors shadow-sm text-sm"
              >
                <WhatsAppIcon className="w-5 h-5 shrink-0 fill-current" />
                <span>Solicitar visita no WhatsApp</span>
              </a>

              <a
                href={COMPANY_INFO.phoneTel}
                className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-slate-200 bg-[#0A0D14] hover:bg-slate-800 transition-colors text-sm border border-slate-700"
              >
                <Phone className="w-4 h-4 text-[#0091FF]" />
                <span>Ligar {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
