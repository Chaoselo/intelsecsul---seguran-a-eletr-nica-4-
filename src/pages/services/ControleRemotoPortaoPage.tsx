import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  HelpCircle,
  Radio,
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../../constants';
import { WhatsAppIcon } from '../../components/WhatsAppIcon';
import { useDocumentMeta, buildBreadcrumbSchema } from '../../hooks/useDocumentMeta';
import { getWhatsAppUrl } from '../../utils/whatsapp';

import controleRemotoImg from '../../assets/images/controle_remoto_portao.webp';
const HERO_IMAGE = controleRemotoImg;

const FAQ_ITEMS = [
  {
    question: 'Dá para copiar qualquer controle de portão?',
    answer: 'Depende do tipo de código. Controles de código fixo (aprendizado) podem ser copiados. Controles rolling code, que mudam o código a cada acionamento, em geral não funcionam com copiadores universais. Nesses casos, o indicado é um controle compatível com o motor.',
  },
  {
    question: 'Qual a diferença entre rolling code e código fixo?',
    answer: 'No código fixo, o controle envia sempre o mesmo sinal. No rolling code, o sinal muda a cada acionamento, o que dificulta a clonagem.',
  },
  {
    question: 'Controle copiado é seguro?',
    answer: 'O controle de código fixo pode ser interceptado e copiado por terceiros, por isso é menos seguro. Quando o motor aceita, recomendamos rolling code.',
  },
  {
    question: 'Perdi o controle do portão. O que fazer?',
    answer: 'Recomendamos apagar os controles antigos da memória da central, quando o motor permite, e cadastrar só os que você usa. Assim, quem encontrou o controle perdido não consegue abrir o portão.',
  },
  {
    question: 'Meu controle só funciona de perto. O que pode ser?',
    answer: 'Pode ser a pilha, a antena receptora ou a placa do motor. Fazemos o diagnóstico e corrigimos a causa.',
  },
  {
    question: 'Um controle de qualquer marca serve no meu motor?',
    answer: 'Nem todo controle serve em todo motor, porque cada sistema trabalha com um tipo de código e de frequência. Entregamos e programamos controles de todas as marcas e indicamos o compatível com o seu motor.',
  },
  {
    question: 'Quanto custa um controle de portão?',
    answer: 'O valor depende do tipo de controle e do motor do seu portão. Informe a marca do motor pelo WhatsApp e passamos o valor no orçamento.',
  },
  {
    question: 'Vocês atendem condomínios e empresas?',
    answer: 'Sim. Atendemos residências, condomínios e empresas em Curitiba e Região Metropolitana. Informe a quantidade de controles que você precisa.',
  },
];

export const ControleRemotoPortaoPage: React.FC = () => {
  const location = useLocation();
  const rawPath = location.pathname;
  const currentPath = rawPath.endsWith('/') ? rawPath : `${rawPath}/`;
  const whatsappUrl = getWhatsAppUrl('/servicos/controle-remoto-para-portao');

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Início', url: '/' },
    { name: 'Serviços', url: '/servicos/portao-automatico/' },
    { name: 'Portão automático', url: '/servicos/portao-automatico/' },
    { name: 'Controle remoto para portão', url: '/servicos/controle-remoto-para-portao/' },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Controle remoto para portão automático",
    "serviceType": "Cópia, programação e fornecimento de controle remoto para portão automático",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Intelsecsul",
      "url": "https://intelsecsul.com.br"
    },
    "areaServed": "Curitiba e Região Metropolitana",
    "url": "https://intelsecsul.com.br/servicos/controle-remoto-para-portao/"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  useDocumentMeta({
    title: 'Controle de Portão Automático em Curitiba | Intelsecsul',
    description: 'Controle remoto para portão automático em Curitiba: cópia, programação e controle novo de todas as marcas. Peça orçamento no WhatsApp.',
    canonicalUrl: '/servicos/controle-remoto-para-portao/',
    ogImage: HERO_IMAGE,
    jsonLdSchema: [breadcrumbSchema, serviceSchema, faqSchema],
  });

  return (
    <div className="bg-[#0A0D14] text-slate-200 font-sans selection:bg-[#0091FF] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#0A0D14] text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb visual com 4 níveis */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-[#00C5FF] transition-colors">Início</Link>
            <span>/</span>
            <Link to="/servicos/portao-automatico/" className="hover:text-[#00C5FF] transition-colors">Serviços</Link>
            <span>/</span>
            <Link to="/servicos/portao-automatico/" className="hover:text-[#00C5FF] transition-colors">Portão automático</Link>
            <span>/</span>
            <span className="text-slate-200 font-medium truncate">Controle remoto para portão</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Texto à esquerda */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-4 border border-[#0091FF]/30">
                <Shield className="w-3.5 h-3.5 text-[#00C5FF]" />
                <span>Portão automático</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                Controle de portão automático em Curitiba e Região Metropolitana
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                Fazemos cópia, programação e fornecimento de controle remoto para portão automático de casas, condomínios e empresas. Você nos diz a marca do motor, indicamos o controle certo e deixamos tudo funcionando. Entregamos e programamos controles de todas as marcas, como PPA, Garen, Rossi, Peccinin, Intelbras e outras.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contato/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#0091FF] hover:bg-[#0081E6] active:bg-[#0070CC] transition-all shadow-lg hover:shadow-[#0091FF]/20 text-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Solicitar orçamento</span>
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] transition-all shadow-lg hover:shadow-[#25D366]/20 text-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Falar no WhatsApp agora</span>
                </a>
              </div>
            </div>

            {/* Imagem à direita */}
            <div className="w-full">
              <img
                src={HERO_IMAGE}
                alt="Mão segurando controle remoto para abrir portão automático"
                width={1200}
                height={600}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="rounded-2xl border border-slate-800 shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= O QUE FAZEMOS COM O CONTROLE DO SEU PORTÃO ================= */}
      <section className="py-14 sm:py-20 bg-[#0E131F] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#00C5FF] text-xs font-bold uppercase tracking-wider block mb-2">
              Soluções Especializadas
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              O que fazemos com o controle do seu portão
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-[#121824] rounded-xl p-6 border border-slate-800 shadow-md hover:border-[#0091FF]/50 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">
                Controle novo para o seu motor
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Fornecemos controle compatível com o motor e o tipo de código do seu portão.
              </p>
            </div>

            <div className="bg-[#121824] rounded-xl p-6 border border-slate-800 shadow-md hover:border-[#0091FF]/50 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">
                Cópia de controle
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Quando o sistema permite, copiamos o seu controle atual para você ter um reserva.
              </p>
            </div>

            <div className="bg-[#121824] rounded-xl p-6 border border-slate-800 shadow-md hover:border-[#0091FF]/50 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">
                Programação na central
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Cadastramos o controle na central do motor e testamos o alcance.
              </p>
            </div>

            <div className="bg-[#121824] rounded-xl p-6 border border-slate-800 shadow-md hover:border-[#0091FF]/50 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">
                Controle perdido ou roubado
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Quando a central permite, apagamos os controles antigos da memória e cadastramos só os que você usa.
              </p>
            </div>

            <div className="bg-[#121824] rounded-xl p-6 border border-slate-800 shadow-md hover:border-[#0091FF]/50 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">
                Controle que só funciona de perto
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Verificamos pilha, antena receptora e placa do motor e corrigimos a causa.
              </p>
            </div>

            <div className="bg-[#121824] rounded-xl p-6 border border-slate-800 shadow-md hover:border-[#0091FF]/50 transition-colors">
              <h3 className="text-lg font-bold text-white mb-2">
                Transmissor no farol do carro (TX Car)
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Instalamos e cadastramos o transmissor instalado no veículo.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CÓDIGO FIXO OU ROLLING CODE ================= */}
      <section className="py-14 sm:py-20 bg-[#0A0D14] border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-[#00C5FF] text-xs font-bold uppercase tracking-wider block mb-2">
              Tecnologia e Segurança
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
              Código fixo ou rolling code: qual é o do seu portão?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              O tipo de código utilizado pelo motor define como o sinal é transmitido e determina a facilidade de cópia e o nível de segurança do seu portão automático.
            </p>
          </div>

          <div className="bg-[#121824] rounded-2xl border border-slate-800 overflow-hidden shadow-xl mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#1E2638] text-white border-b border-slate-800">
                  <tr>
                    <th scope="col" className="p-4 sm:p-5 font-bold">Critério</th>
                    <th scope="col" className="p-4 sm:p-5 font-bold">Código fixo (aprendizado)</th>
                    <th scope="col" className="p-4 sm:p-5 font-bold">Rolling code (código rolante)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-white">Como funciona</td>
                    <td className="p-4 sm:p-5">Envia sempre o mesmo código</td>
                    <td className="p-4 sm:p-5">O código muda a cada acionamento</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-white">Cópia com copiador universal</td>
                    <td className="p-4 sm:p-5">Normalmente funciona</td>
                    <td className="p-4 sm:p-5">Normalmente não funciona</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-white">Segurança</td>
                    <td className="p-4 sm:p-5">Menor: o sinal pode ser interceptado e copiado</td>
                    <td className="p-4 sm:p-5">Maior: resistente à clonagem</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-white">O que usar</td>
                    <td className="p-4 sm:p-5">Controle compatível ou cópia</td>
                    <td className="p-4 sm:p-5">Controle compatível com o motor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 text-center leading-relaxed max-w-3xl mx-auto">
            Se você não sabe qual é o tipo do seu portão, mande uma foto da etiqueta do motor ou da placa de comando pelo WhatsApp. Nós identificamos para você. Para quem prioriza segurança, recomendamos rolling code sempre que o motor aceitar.
          </p>

        </div>
      </section>

      {/* ================= O QUE PRECISAMOS SABER ================= */}
      <section className="py-14 sm:py-20 bg-[#0E131F] border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-[#00C5FF] text-xs font-bold uppercase tracking-wider block mb-2">
              Identificação Rápida
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              O que precisamos saber para indicar o controle certo
            </h2>
          </div>

          <div className="bg-[#121824] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-lg">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00C5FF] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-200">
                  Marca e modelo do motor (por exemplo PPA, Garen, Rossi, Peccinin ou Intelbras)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00C5FF] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-200">
                  Se o controle atual é de código fixo ou rolling code
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00C5FF] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-200">
                  Frequência do sistema (a maioria dos controles trabalha em 433,92 MHz)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00C5FF] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-200">
                  Quantidade de botões e de controles que você precisa
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00C5FF] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-200">
                  Se é para carro, moto ou pedestre
                </span>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-slate-800 text-xs sm:text-sm text-slate-400 italic">
              Se você não souber alguma dessas informações, sem problema: nós identificamos no atendimento.
            </div>
          </div>

        </div>
      </section>

      {/* ================= COMO FUNCIONA O ATENDIMENTO ================= */}
      <section className="py-14 sm:py-20 bg-[#0A0D14] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#00C5FF] text-xs font-bold uppercase tracking-wider block mb-2">
              Passo a Passo
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Como funciona o atendimento
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#121824] rounded-xl p-6 border border-slate-800 shadow-md flex flex-col justify-between hover:border-[#0091FF]/50 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#0A0D14] text-[#00C5FF] border border-[#0091FF]/40 flex items-center justify-center font-bold text-sm mb-4">
                  1
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Você nos chama no WhatsApp
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Envie a marca do motor ou uma foto da etiqueta ou do controle atual.
                </p>
              </div>
            </div>

            <div className="bg-[#121824] rounded-xl p-6 border border-slate-800 shadow-md flex flex-col justify-between hover:border-[#0091FF]/50 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#0A0D14] text-[#00C5FF] border border-[#0091FF]/40 flex items-center justify-center font-bold text-sm mb-4">
                  2
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Confirmamos a compatibilidade
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Indicamos o controle certo e passamos o valor no orçamento.
                </p>
              </div>
            </div>

            <div className="bg-[#121824] rounded-xl p-6 border border-slate-800 shadow-md flex flex-col justify-between hover:border-[#0091FF]/50 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#0A0D14] text-[#00C5FF] border border-[#0091FF]/40 flex items-center justify-center font-bold text-sm mb-4">
                  3
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Programamos e testamos
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Cadastramos o controle na central e testamos o alcance.
                </p>
              </div>
            </div>

            <div className="bg-[#121824] rounded-xl p-6 border border-slate-800 shadow-md flex flex-col justify-between hover:border-[#0091FF]/50 transition-colors">
              <div>
                <div className="w-10 h-10 rounded-full bg-[#0A0D14] text-[#00C5FF] border border-[#0091FF]/40 flex items-center justify-center font-bold text-sm mb-4">
                  4
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  Combinamos a melhor forma de atender
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Definimos com você o atendimento, conforme a sua região e a sua necessidade.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PERGUNTAS FREQUENTES (ACCORDION) ================= */}
      <section className="py-14 sm:py-20 bg-[#0E131F] border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-3 border border-[#0091FF]/30">
              <HelpCircle className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Tire Suas Dúvidas</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Perguntas frequentes sobre controle de portão automático
            </h2>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              const buttonId = `remote-faq-btn-${idx}`;
              const panelId = `remote-faq-panel-${idx}`;

              return (
                <div
                  key={idx}
                  className="bg-[#121824] rounded-xl border border-slate-800 shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base hover:text-[#00C5FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0091FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#121824] transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#00C5FF]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="px-6 pb-5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800 pt-3"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= VEJA TAMBÉM ================= */}
      <section className="py-12 sm:py-16 bg-[#0A0D14] border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8">
            <span className="text-[#00C5FF] text-xs font-bold uppercase tracking-wider block mb-2">
              Navegação Relacionada
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Veja também
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/servicos/portao-automatico/"
              className="bg-[#121824] p-5 rounded-xl border border-slate-800 hover:border-[#0091FF] hover:bg-[#0091FF]/10 text-slate-200 hover:text-white transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs text-[#00C5FF] font-semibold block mb-1">Serviço Principal</span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#00C5FF] transition-colors">
                  Portão automático: instalação e manutenção
                </h3>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#00C5FF]">
                <span>Acessar</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/servicos/portao-automatico/"
              className="bg-[#121824] p-5 rounded-xl border border-slate-800 hover:border-[#0091FF] hover:bg-[#0091FF]/10 text-slate-200 hover:text-white transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs text-[#00C5FF] font-semibold block mb-1">Assistência Técnica</span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#00C5FF] transition-colors">
                  Manutenção de portão e do motor
                </h3>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#00C5FF]">
                <span>Acessar</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/cidades/"
              className="bg-[#121824] p-5 rounded-xl border border-slate-800 hover:border-[#0091FF] hover:bg-[#0091FF]/10 text-slate-200 hover:text-white transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs text-[#00C5FF] font-semibold block mb-1">Cobertura</span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#00C5FF] transition-colors">
                  Atendemos toda a Região Metropolitana
                </h3>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#00C5FF]">
                <span>Acessar</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/cidades/curitiba/"
              className="bg-[#121824] p-5 rounded-xl border border-slate-800 hover:border-[#0091FF] hover:bg-[#0091FF]/10 text-slate-200 hover:text-white transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="text-xs text-[#00C5FF] font-semibold block mb-1">Sede</span>
                <h3 className="text-sm font-bold text-white group-hover:text-[#00C5FF] transition-colors">
                  Curitiba
                </h3>
              </div>
              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#00C5FF]">
                <span>Acessar</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="bg-[#0A0D14] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="w-12 h-12 rounded-2xl bg-[#0091FF]/20 border border-[#0091FF]/30 flex items-center justify-center text-[#00C5FF] mx-auto mb-6">
            <Radio className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
            Peça um orçamento de controle para o seu portão
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Envie a marca do motor ou uma foto do controle e indicamos a melhor opção.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-xl hover:shadow-[#25D366]/20 text-base"
          >
            <WhatsAppIcon className="w-6 h-6 fill-current" />
            <span>Falar no WhatsApp agora</span>
          </a>

          <p className="text-xs text-slate-400 mt-4">
            Ou ligue para <a href={COMPANY_INFO.phoneTel} className="text-[#00C5FF] font-semibold hover:underline">{COMPANY_INFO.phoneDisplay}</a>
          </p>

        </div>
      </section>

    </div>
  );
};
