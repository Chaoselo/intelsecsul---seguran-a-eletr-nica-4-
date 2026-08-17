import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  ChevronDown, 
  Shield, 
  ArrowRight,
  Search,
  BookOpen,
  Scale
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { useDocumentMeta, buildBreadcrumbSchema } from '../hooks/useDocumentMeta';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  categoryTitle: string;
  items: FaqItem[];
}

export const FaqPage: React.FC = () => {
  const categories: FaqCategory[] = [
    {
      categoryTitle: 'Sobre a Intelsecsul',
      items: [
        {
          question: 'A Intelsecsul atende toda a Região Metropolitana de Curitiba?',
          answer: 'Sim, atendemos Curitiba, Pinhais, São José dos Pinhais, Araucária, Almirante Tamandaré, Colombo, Campo Largo, Fazenda Rio Grande, Campo Magro, Quatro Barras e Campina Grande do Sul.',
        },
        {
          question: 'A instalação é feita por equipe própria ou terceirizada?',
          answer: 'Toda a instalação e manutenção é feita por equipe técnica própria da Intelsecsul, sem terceirização.',
        },
        {
          question: 'A visita técnica e o orçamento têm algum custo?',
          answer: 'Não, a visita técnica e o orçamento são gratuitos e sem compromisso.',
        },
      ],
    },
    {
      categoryTitle: 'Câmeras e CFTV',
      items: [
        {
          question: 'Posso ver as câmeras pelo celular?',
          answer: 'Sim, em sistemas com acesso remoto é possível acompanhar as câmeras de qualquer lugar pelo aplicativo.',
        },
        {
          question: 'Qual a diferença entre câmera com fio e câmera Wi-Fi?',
          answer: 'Câmeras com fio costumam ter conexão mais estável, indicadas para instalações permanentes; câmeras Wi-Fi facilitam a instalação onde passar cabos é mais difícil.',
        },
      ],
    },
    {
      categoryTitle: 'Alarme monitorado',
      items: [
        {
          question: 'Como funciona o monitoramento do alarme?',
          answer: 'Ao ser disparado, o sistema envia um sinal para a central de monitoramento, que verifica a ocorrência e aciona os procedimentos necessários.',
        },
        {
          question: 'O alarme funciona sem energia elétrica?',
          answer: 'Sim, os sistemas contam com bateria reserva que mantém o funcionamento durante quedas de energia.',
        },
      ],
    },
    {
      categoryTitle: 'Cerca elétrica e controle de acesso',
      items: [
        {
          question: 'A cerca elétrica é perigosa para quem mora na casa?',
          answer: 'Não, quando instalada conforme as normas de segurança, a cerca é dimensionada para causar um choque de alerta, sem risco à saúde.',
        },
        {
          question: 'É possível integrar câmeras, alarme e controle de acesso em um sistema só?',
          answer: 'Sim, projetamos sistemas integrados, com tudo funcionando de forma conectada e gerenciável em um único ponto.',
        },
      ],
    },
    {
      categoryTitle: 'Locação de equipamentos',
      items: [
        {
          question: 'Como funciona a locação de equipamentos?',
          answer: 'Você paga uma mensalidade fixa, sem taxa de instalação, com manutenção e substituição de equipamentos com defeito inclusas.',
        },
        {
          question: 'Existe fidelidade no contrato de locação?',
          answer: 'Os contratos de locação da Intelsecsul possuem um prazo de fidelidade de 24 meses. Após esse prazo o contrato pode ser cancelado sem a incidência de encargos.',
        },
      ],
    },
    {
      categoryTitle: 'Preços, pagamento e prazos',
      items: [
        {
          question: 'Quais formas de pagamento vocês aceitam?',
          answer: 'Aceitamos múltiplas formas de pagamento como pix, cartão de crédito e dinheiro.',
        },
        {
          question: 'Quanto tempo leva entre o orçamento e a instalação?',
          answer: 'O tempo entre o orçamento e a instalação é variável e depende do serviço contratado e da disponibilidade dos nossos fornecedores.',
        },
        {
          question: 'Vocês emitem nota fiscal?',
          answer: 'Nossos serviços possuem nota fiscal e todos os consectários fiscais e legais.',
        },
      ],
    },
    {
      categoryTitle: 'Manutenção e suporte',
      items: [
        {
          question: 'Vocês fazem manutenção em sistemas de outras empresas?',
          answer: 'Sim, atendemos sistemas de qualquer marca ou instalador, independente de quem fez a instalação original.',
        },
        {
          question: 'Vocês atendem em finais de semana ou emergências?',
          answer: 'Os clientes que possuem contrato de locação ativo com a intelsecsul possuem prioridade nos atendimentos emergenciais, para os demais atendimentos emergenciais faz-se necessário a verificação da disponibilidade dos nossos técnicos.',
        },
      ],
    },
  ];

  // Schema de breadcrumb, seguindo o mesmo padrão usado em BlogHubPage.tsx
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Início', url: '/' },
    { name: 'Perguntas Frequentes', url: '/perguntas-frequentes/' },
  ]);

  // Schema FAQPage, gerado a partir das mesmas perguntas e respostas
  // visíveis nesta página (sem inventar ou omitir nenhuma)
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": categories.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      }))
    ),
  };

  useDocumentMeta({
    title: 'Perguntas Frequentes | Intelsecsul',
    description:
      'Tire suas dúvidas sobre câmeras, alarme monitorado, cerca elétrica, controle de acesso e locação de equipamentos de segurança em Curitiba e região.',
    canonicalUrl: 'https://intelsecsul.com.br/perguntas-frequentes/',
    jsonLdSchema: [breadcrumbSchema, faqPageSchema],
  });

  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const whatsappUrl = COMPANY_INFO.whatsappUrlDefault;

  // Filter based on search query
  const filteredCategories = categories.map((cat) => {
    const matchingItems = cat.items.filter(
      (item) =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...cat,
      items: matchingItems,
    };
  }).filter((cat) => cat.items.length > 0);

  return (
    <div className="bg-[#0A0D14] text-slate-200 font-sans selection:bg-[#0091FF] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#0A0D14] text-white py-12 sm:py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-[#00C5FF] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-slate-200 font-medium">Perguntas Frequentes</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-6 border border-[#0091FF]/30">
              <HelpCircle className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Central de Dúvidas</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Perguntas frequentes
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl">
              Tire suas dúvidas sobre instalação de câmeras, alarme monitorado, cerca elétrica, controle de acesso, formas de pagamento e locação de equipamentos em Curitiba e Região Metropolitana.
            </p>

            {/* Search Input */}
            <div className="relative max-w-xl">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar dúvida ou palavra-chave (ex: aplicativo, locação, PIX)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#121824] border border-slate-800 rounded-xl pl-12 pr-4 py-3.5 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#0091FF] text-sm transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIAS E ACCORDIONS ================= */}
      <section className="py-12 sm:py-16 bg-[#0E131F] border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 bg-[#121824] rounded-2xl border border-slate-800 p-8">
              <HelpCircle className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Nenhuma pergunta encontrada</h3>
              <p className="text-slate-400 text-sm mb-6">
                Não encontramos resultados para "{searchQuery}". Tente outros termos ou fale diretamente com a nossa equipe.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-5 py-2.5 rounded-xl bg-[#0091FF] text-white font-semibold text-sm hover:bg-[#0081E6] transition-colors"
              >
                Limpar busca
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredCategories.map((cat, catIdx) => (
                <div key={catIdx} className="space-y-4">
                  {/* Category Title */}
                  <div className="flex items-center gap-3 border-b border-slate-800/80 pb-3">
                    <Shield className="w-4 h-4 text-[#00C5FF]" />
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {cat.categoryTitle}
                    </h2>
                  </div>

                  {/* Accordion list */}
                  <div className="space-y-3">
                    {cat.items.map((item, itemIdx) => {
                      const itemKey = `${catIdx}-${itemIdx}`;
                      const isOpen = !!openItems[itemKey];
                      const buttonId = `faq-question-${catIdx}-${itemIdx}`;
                      const panelId = `faq-answer-${catIdx}-${itemIdx}`;

                      return (
                        <div
                          key={itemIdx}
                          className="bg-[#121824] rounded-xl border border-slate-800 shadow-xs overflow-hidden transition-all duration-200 hover:border-slate-700"
                        >
                          <button
                            id={buttonId}
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => toggleItem(catIdx, itemIdx)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base hover:text-[#00C5FF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00C5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121824]"
                          >
                            <span>{item.question}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                                isOpen ? 'rotate-180 text-[#00C5FF]' : ''
                              }`}
                              aria-hidden="true"
                            />
                          </button>

                          <div
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            hidden={!isOpen}
                            className="px-6 pb-5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/80 pt-3"
                          >
                            {item.answer}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Useful links block */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-slate-800">
            <Link
              to="/glossario"
              className="p-5 rounded-2xl bg-[#121824] border border-slate-800 hover:border-[#0091FF] transition-all group flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-[#0091FF]/10 text-[#00C5FF] group-hover:bg-[#0091FF]/20 transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white group-hover:text-[#00C5FF] transition-colors">
                  Glossário Técnico
                </h4>
                <p className="text-xs text-slate-400">
                  Entenda siglas como CFTV, DVR, NVR e Biometria.
                </p>
              </div>
            </Link>

            <Link
              to="/comparativos"
              className="p-5 rounded-2xl bg-[#121824] border border-slate-800 hover:border-[#0091FF] transition-all group flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-[#0091FF]/10 text-[#00C5FF] group-hover:bg-[#0091FF]/20 transition-colors">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white group-hover:text-[#00C5FF] transition-colors">
                  Comparativos de Segurança
                </h4>
                <p className="text-xs text-slate-400">
                  Compra x Locação e Intelsecsul x Verisure.
                </p>
              </div>
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
              <span>Dúvida Não Respondida?</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              Ainda tem alguma dúvida técnica ou comercial?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Fale com a equipe da Intelsecsul pelo WhatsApp. Respondemos rapidamente e ajudamos você a escolher o melhor projeto.
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
