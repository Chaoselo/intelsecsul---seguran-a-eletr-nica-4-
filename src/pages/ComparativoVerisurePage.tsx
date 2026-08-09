import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Scale,
  Building2,
  Users,
  Wrench,
  Check
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

export const ComparativoVerisurePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Intelsecsul ou Verisure: Diferenças entre os Modelos de Segurança | Intelsecsul';

    let metaTag = document.querySelector('meta[name="description"]');
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'description');
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute(
      'content',
      'Compare o modelo de segurança eletrônica da Intelsecsul com o da Verisure — abrangência de serviços, contrato e atendimento em Curitiba e região.'
    );

    return () => {
      document.title = 'Intelsecsul - Segurança Eletrônica e Tecnologia';
    };
  }, []);

  const whatsappUrl = COMPANY_INFO.whatsappUrlDefault;

  const tableData = [
    {
      aspecto: 'Abrangência dos serviços',
      intelsecsul: 'Câmeras, alarme, cerca elétrica, controle de acesso, portão eletrônico, interfonia e locação de equipamentos',
      verisure: 'Foco principal em alarme monitorado, com câmeras como parte do pacote',
    },
    {
      aspecto: 'Fidelidade contratual na locação',
      intelsecsul: 'Contrato com fidelidade de 24 meses com cláusulas transparentes e habituais do mercado',
      verisure: 'Contrato costuma exigir fidelidade, geralmente entre 12 e 36 meses, conforme informações públicas da própria empresa',
    },
    {
      aspecto: 'Propriedade do equipamento na locação',
      intelsecsul: 'Da Intelsecsul durante o contrato, sem taxa de instalação',
      verisure: 'Em regime de comodato, também de propriedade da empresa durante o contrato',
    },
    {
      aspecto: 'Atendimento',
      intelsecsul: 'Equipe técnica local, sediada em Curitiba, com atendimento ágil na região metropolitana',
      verisure: 'Empresa multinacional, com atendimento padronizado em nível nacional',
    },
    {
      aspecto: 'Tipo de projeto',
      intelsecsul: 'Projetos sob medida, combinando sistemas conforme o imóvel',
      verisure: 'Pacotes de alarme padronizados, com opções dentro do plano contratado',
    },
  ];

  const motivosIntelsecsul = [
    {
      icon: Users,
      title: 'Atendimento local, com equipe própria em Curitiba e região',
      description: 'Nossa equipe técnica é própria e reside na própria região, proporcionando agilidade e contato próximo.',
    },
    {
      icon: Shield,
      title: 'Portfólio mais amplo de serviços, não apenas alarme',
      description: 'Integrando câmeras, cerca elétrica, controle de acesso, interfonia e portões em um único projeto.',
    },
    {
      icon: Wrench,
      title: 'Locação sem taxa de instalação e sem custo de manutenção',
      description: 'Mensalidade previsível que já cobre a instalação, suporte contínuo e substituição de peças defeituosas.',
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
            <Link to="/comparativos" className="hover:text-[#00C5FF] transition-colors">Comparativos</Link>
            <span>/</span>
            <span className="text-slate-200 font-medium">Intelsecsul x Verisure</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-6 border border-[#0091FF]/30">
              <Building2 className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Comparativo de Mercado</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Intelsecsul ou Verisure: qual modelo faz mais sentido para você?
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
              A Verisure é uma das maiores empresas de alarme monitorado do Brasil e do mundo, com atuação nacional. A Intelsecsul é uma empresa de segurança eletrônica local, sediada em Curitiba, com equipe técnica própria atendendo toda a Região Metropolitana. Reunimos aqui as principais diferenças entre os dois modelos para ajudar você a decidir com mais clareza.
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
                to="/por-que-escolher-a-intelsecsul"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#121824] hover:bg-[#1A2234] border border-slate-700 transition-all text-sm"
              >
                <span>Conheça nossos diferenciais</span>
                <ArrowRight className="w-4 h-4 text-[#00C5FF]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TABELA COMPARATIVA ================= */}
      <section className="py-12 sm:py-16 bg-[#0E131F] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Comparativo de Atuação e Serviços
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Entenda os principais pontos de diferenciação entre a proposta da Intelsecsul e a da Verisure:
            </p>
          </div>

          {/* Desktop & Mobile Responsive Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800 shadow-xl bg-[#121824] mb-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-[#161E2E]">
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-white uppercase tracking-wider w-1/4">
                    Aspecto
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-[#00C5FF] uppercase tracking-wider w-3/8 border-l border-slate-800 bg-[#0091FF]/10">
                    Intelsecsul
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider w-3/8 border-l border-slate-800">
                    Verisure
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 text-xs sm:text-sm text-slate-300">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#182030] transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white bg-[#141A29]/60">
                      {row.aspecto}
                    </td>
                    <td className="p-4 sm:p-5 border-l border-slate-800 bg-[#0091FF]/5 text-white font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00C5FF] shrink-0 mt-0.5" />
                        <span>{row.intelsecsul}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 border-l border-slate-800 text-slate-300">
                      {row.verisure}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Nota de rodapé da tabela */}
          <p className="text-slate-500 text-xs leading-relaxed mb-12 max-w-4xl italic">
            Nota: As informações sobre a Verisure são baseadas em conteúdo público disponível no site oficial da empresa e podem mudar conforme o plano contratado. Recomendamos sempre confirmar as condições atuais diretamente com cada empresa antes de decidir.
          </p>

          {/* ================= BLOCO POR QUE CONSIDERAR INTELSECSUL ================= */}
          <div className="bg-[#141A29] p-8 sm:p-10 rounded-3xl border border-slate-800 mb-8">
            <div className="max-w-3xl mb-8">
              <span className="text-[#00C5FF] text-xs font-bold uppercase tracking-wider block mb-2">
                Diferenciais Regionais
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Por que considerar a Intelsecsul
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {motivosIntelsecsul.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-[#0E131F] border border-slate-800 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#0091FF]/15 text-[#00C5FF] border border-[#0091FF]/30 flex items-center justify-center mb-4">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="text-white font-bold text-sm mb-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
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
              <span>Atendimento Consultivo</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              Quer comparar sua situação com um especialista?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Fale com a Intelsecsul e tire suas dúvidas sem compromisso.
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
