import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  DollarSign,
  Scale,
  Check,
  X
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { useDocumentMeta, buildBreadcrumbSchema } from '../hooks/useDocumentMeta';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ComparativoCompraLocacaoPage: React.FC = () => {
  const location = useLocation();
  const rawPath = location.pathname;
  const currentPath = rawPath.endsWith('/') ? rawPath : `${rawPath}/`;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Início', url: '/' },
    { name: 'Comparativos', url: '/comparativos/' },
    { name: 'Compra x Locação', url: '/comparativos/compra-x-locacao-de-equipamentos/' }
  ]);

  useDocumentMeta({
    title: 'Compra ou Locação de Equipamentos de Segurança: Qual Escolher? | Intelsecsul',
    description: 'Entenda as diferenças entre comprar e alugar equipamentos de segurança eletrônica, e veja qual opção faz mais sentido para o seu caso.',
    canonicalUrl: `https://intelsecsul.com.br${currentPath}`,
    jsonLdSchema: breadcrumbSchema,
  });

  const whatsappUrl = getWhatsAppUrl(currentPath);

  const tableData = [
    {
      aspecto: 'Investimento inicial',
      compra: 'Necessário pagar pelo equipamento à vista',
      locacao: 'Não há investimento inicial',
    },
    {
      aspecto: 'Taxa de instalação',
      compra: 'Cobrada separadamente na maioria dos casos',
      locacao: 'Inclusa na mensalidade',
    },
    {
      aspecto: 'Manutenção',
      compra: 'Geralmente cobrada à parte após a garantia',
      locacao: 'Inclusa durante o contrato',
    },
    {
      aspecto: 'Substituição por defeito',
      compra: 'Depende da garantia do fabricante',
      locacao: 'Inclusa, sem custo extra',
    },
    {
      aspecto: 'Propriedade do equipamento',
      compra: 'Seu desde o início',
      locacao: 'Da Intelsecsul durante o contrato',
    },
    {
      aspecto: 'Indicado para',
      compra: 'Quem prefere investir uma vez só',
      locacao: 'Quem quer começar sem custo inicial e com orçamento previsível',
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
            <Link to="/comparativos/" className="hover:text-[#00C5FF] transition-colors">Comparativos</Link>
            <span>/</span>
            <span className="text-slate-200 font-medium">Compra x Locação</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-6 border border-[#0091FF]/30">
              <Scale className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Modelos de Contratação</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Compra ou locação de equipamentos de segurança: qual escolher?
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
              Na hora de reforçar a segurança de um imóvel, é comum surgir a dúvida entre comprar os equipamentos à vista ou optar pela locação, com uma mensalidade fixa. As duas opções têm vantagens diferentes, e a melhor escolha depende do momento e da prioridade de cada cliente.
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
                to="/servicos/locacao-de-cameras-de-seguranca/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#121824] hover:bg-[#1A2234] border border-slate-700 transition-all text-sm"
              >
                <span>Veja todos os detalhes da locação</span>
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
              Tabela Comparativa Direta
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Veja lado a lado as características principais de cada formato de aquisição:
            </p>
          </div>

          {/* Desktop & Mobile Responsive Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800 shadow-xl bg-[#121824] mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-[#161E2E]">
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-white uppercase tracking-wider w-1/4">
                    Aspecto
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider w-3/8 border-l border-slate-800">
                    Compra do equipamento
                  </th>
                  <th className="p-4 sm:p-5 text-xs sm:text-sm font-bold text-[#00C5FF] uppercase tracking-wider w-3/8 border-l border-slate-800 bg-[#0091FF]/10">
                    Locação Intelsecsul
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 text-xs sm:text-sm text-slate-300">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#182030] transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white bg-[#141A29]/60">
                      {row.aspecto}
                    </td>
                    <td className="p-4 sm:p-5 border-l border-slate-800 text-slate-300">
                      {row.compra}
                    </td>
                    <td className="p-4 sm:p-5 border-l border-slate-800 bg-[#0091FF]/5 text-white font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00C5FF] shrink-0 mt-0.5" />
                        <span>{row.locacao}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ================= BLOCO QUAL OPÇÃO ESCOLHER ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Escolha a compra */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#141A29] border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center font-bold text-base mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Escolha a compra se:
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Você prefere investir uma vez, já tem o valor disponível e não se importa em arcar com eventuais custos de manutenção após a garantia.
                </p>
              </div>
            </div>

            {/* Escolha a locação */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121A2B] border border-[#0091FF]/40 shadow-lg flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 rounded-bl-xl bg-[#0091FF] text-white text-[11px] font-bold">
                Mais Solicitado
              </div>
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0091FF]/20 text-[#00C5FF] border border-[#0091FF]/40 flex items-center justify-center font-bold text-base mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Escolha a locação Intelsecsul se:
                </h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  Você quer começar a usar o sistema sem desembolsar o valor total do equipamento, prefere previsibilidade no orçamento mensal e não quer se preocupar com manutenção ou substituição de peças.
                </p>
              </div>
            </div>

          </div>

          {/* Callout Link to service */}
          <div className="mt-10 text-center">
            <Link
              to="/servicos/locacao-de-cameras-de-seguranca/"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#00C5FF] hover:text-white transition-colors border-b border-[#00C5FF] pb-1"
            >
              <span>Veja todos os detalhes da locação de equipamentos</span>
              <ArrowRight className="w-4 h-4" />
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
              <span>Orientação Personalizada</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              Ainda com dúvidas sobre qual opção é melhor para você?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Fale com a Intelsecsul e receba uma orientação sem compromisso.
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
