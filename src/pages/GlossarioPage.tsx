import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  Shield, 
  ArrowRight,
  HelpCircle,
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface TermItem {
  term: string;
  definition: string;
  category?: string;
}

export const GlossarioPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Glossário de Segurança Eletrônica | Intelsecsul';

    let metaTag = document.querySelector('meta[name="description"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'description');
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute(
      'content',
      'Entenda os principais termos técnicos de segurança eletrônica — CFTV, DVR, NVR, biometria, comodato e outros — explicados de forma simples pela Intelsecsul.'
    );

    return () => {
      document.title = 'Intelsecsul - Segurança Eletrônica e Tecnologia';
    };
  }, []);

  const [searchQuery, setSearchQuery] = useState('');

  const terms: TermItem[] = [
    {
      term: 'Biometria',
      definition: 'Identificação por características físicas, como impressão digital, usada em sistemas de controle de acesso.',
    },
    {
      term: 'Central de alarme',
      definition: 'Equipamento que recebe o sinal dos sensores e aciona o alarme e, quando monitorado, a central de monitoramento.',
    },
    {
      term: 'CFTV',
      definition: 'Sigla de Circuito Fechado de Televisão, o nome técnico dado a sistemas de câmeras de segurança conectadas a um gravador local ou à nuvem.',
    },
    {
      term: 'Cerca elétrica',
      definition: 'Sistema de choque de alerta instalado sobre muros para reforçar o perímetro de um imóvel.',
    },
    {
      term: 'Comodato',
      definition: 'Modelo em que o equipamento pertence à empresa fornecedora durante o contrato, sendo devolvido ao final dele; usado por algumas empresas do setor de alarme monitorado.',
    },
    {
      term: 'Câmera IP',
      definition: 'Câmera que transmite imagem pela rede, geralmente com resolução mais alta e mais recursos de acesso remoto.',
    },
    {
      term: 'DVR',
      definition: 'Gravador digital de vídeo, usado com câmeras analógicas ou HD tradicionais.',
    },
    {
      term: 'Fechadura eletromagnética',
      definition: 'Trava eletrônica de portas, liberada por sistemas de controle de acesso.',
    },
    {
      term: 'Monitoramento 24 horas',
      definition: 'Serviço em que uma central acompanha o sistema continuamente, pronta para agir em caso de disparo.',
    },
    {
      term: 'NVR',
      definition: 'Gravador de vídeo em rede, usado com câmeras IP conectadas à internet.',
    },
    {
      term: 'Reconhecimento facial',
      definition: 'Tecnologia que identifica pessoas pela análise da imagem do rosto, usada em portarias e controle de acesso.',
    },
    {
      term: 'Sensor de presença/movimento',
      definition: 'Dispositivo que detecta movimento em um ambiente e aciona o alarme.',
    },
  ];

  // Sort terms alphabetically
  const sortedTerms = [...terms].sort((a, b) => a.term.localeCompare(b.term, 'pt-BR'));

  // Filter based on search query
  const filteredTerms = sortedTerms.filter(
    (item) =>
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const whatsappUrl = COMPANY_INFO.whatsappUrlDefault;

  return (
    <div className="bg-[#0A0D14] text-slate-200 font-sans selection:bg-[#0091FF] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#0A0D14] text-white py-12 sm:py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-[#00C5FF] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-slate-200 font-medium">Glossário</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-6 border border-[#0091FF]/30">
              <BookOpen className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Dicionário de Termos</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Glossário de segurança eletrônica
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
              Entenda de forma simples as siglas e conceitos técnicos do setor de segurança eletrônica — como CFTV, DVR, NVR, biometria e comodato.
            </p>

            {/* Search Input */}
            <div className="relative max-w-xl">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filtrar termo (ex: NVR, Biometria, Comodato)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#121824] border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#0091FF] text-sm transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= LISTA DO GLOSSÁRIO ================= */}
      <section className="py-12 sm:py-16 bg-[#0E131F] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12 bg-[#121824] rounded-2xl border border-slate-800 p-8 max-w-xl mx-auto">
              <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Termo não encontrado</h3>
              <p className="text-slate-400 text-sm mb-6">
                Não encontramos termos correspondentes a "{searchQuery}".
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-5 py-2.5 rounded-xl bg-[#0091FF] text-white font-semibold text-sm hover:bg-[#0081E6] transition-colors"
              >
                Limpar busca
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTerms.map((item, idx) => {
                const initialLetter = item.term.charAt(0).toUpperCase();

                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#141A29] border border-slate-800/90 hover:border-[#0091FF]/50 transition-all flex flex-col justify-between group shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="w-9 h-9 rounded-lg bg-[#0091FF]/15 text-[#00C5FF] font-bold text-sm flex items-center justify-center border border-[#0091FF]/30">
                          {initialLetter}
                        </span>
                        <Shield className="w-4 h-4 text-slate-600 group-hover:text-[#00C5FF] transition-colors" />
                      </div>

                      <h2 className="text-lg font-bold text-white mb-2 group-hover:text-[#00C5FF] transition-colors">
                        {item.term}
                      </h2>

                      <p className="text-slate-300 text-sm leading-relaxed">
                        {item.definition}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Quick links footer inside glossary */}
          <div className="mt-16 text-center pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/perguntas-frequentes/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#121824] border border-slate-800 hover:border-[#0091FF] text-white text-sm font-semibold transition-all"
            >
              <HelpCircle className="w-4 h-4 text-[#00C5FF]" />
              <span>Ver Perguntas Frequentes (FAQ)</span>
            </Link>

            <Link
              to="/comparativos/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#121824] border border-slate-800 hover:border-[#0091FF] text-white text-sm font-semibold transition-all"
            >
              <FileText className="w-4 h-4 text-[#00C5FF]" />
              <span>Ver Comparativos de Serviços</span>
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
              <span>Precisa de Recomendação Técnica?</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              Quer saber a melhor solução tecnológica para o seu imóvel?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Fale com nossa equipe técnica. Explicamos tudo em detalhes e montamos o projeto sob medida.
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
