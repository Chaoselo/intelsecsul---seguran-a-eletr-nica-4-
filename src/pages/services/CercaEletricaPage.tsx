import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';

export const CercaEletricaPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Cerca Elétrica em Curitiba | Instalação Certificada | Intelsecsul"
      metaDescription="Instalação de cerca elétrica residencial, comercial e para condomínios em Curitiba e região, conforme normas de segurança. Peça seu orçamento gratuito."
      h1="Cerca elétrica em Curitiba e Região Metropolitana"
      introText="Instalamos cerca elétrica em muros e perímetros de residências, empresas e condomínios, com sinalização e instalação conforme as normas técnicas de segurança, reforçando a proteção contra invasões."
      whenToHireTitle="Quando instalar cerca elétrica"
      whenToHireText="A cerca elétrica é indicada para reforçar o perímetro de imóveis com muros baixos, terrenos grandes, áreas de fundo desprotegidas ou histórico de tentativas de invasão. É uma solução comum tanto para residências quanto para condomínios e empresas que precisam de uma barreira adicional além de portões e muros convencionais. A instalação deve seguir a sinalização e as distâncias mínimas exigidas pelas normas de segurança, e por isso é importante contar com uma equipe técnica que conheça esses requisitos."
      sintomasFrequentes={[
        {
          titulo: "Cerca elétrica disparando a sirene sozinha à noite/com vento",
          descricao: "Tensionamento de fios soltos, ajuste de sensibilidade da central de choque e limpeza de isoladores.",
        },
        {
          titulo: "Estalos altos e constantes na cerca quando chove",
          descricao: "Eliminação de fugas de corrente elétrica em isoladores trincados ou fios encostando no muro.",
        },
        {
          titulo: "Cerca elétrica que não dá choque ou choque muito fraco",
          descricao: "Medição com voltímetro técnico, revisão do aterramento e ajuste da voltagem da central (8k a 12k Volts).",
        },
        {
          titulo: "Galhos de árvores ou vegetação encostando nos fios",
          descricao: "Poda de galhos em contato, isolamento do trecho e reestruturação do perímetro de passagem.",
        },
        {
          titulo: "Central de choque com luz vermelha de erro ou bipe contínuo",
          descricao: "Reset da placa de choque, verificação de resistência do circuito e reparo de fusíveis queimados.",
        },
        {
          titulo: "Fio de inox partido, frouxo ou caído no muro",
          descricao: "Emenda técnica com conectores de inox apropriados e tensionamento com molas de alta resistência.",
        },
        {
          titulo: "Hastes de alumínio entortadas, frouxas ou enferrujadas",
          descricao: "Substituição de hastes danificadas, fixação com buchas adequadas e alinhamento do perímetro.",
        },
        {
          titulo: "Isoladores de plástico trincados ou ressecados pelo sol",
          descricao: "Troca completa por isoladores de polipropileno com proteção UV de alta durabilidade.",
        },
        {
          titulo: "Falta de placas de advertência obrigatórias na cerca",
          descricao: "Instalação de placas de sinalização conforme as normas técnicas e regulamentações municipais.",
        },
        {
          titulo: "Bateria da cerca não segura carga durante falta de luz",
          descricao: "Troca da bateria selada interna de 12V e verificação do circuito de carga do eletrificador.",
        },
        {
          titulo: "Sujeira, fuligem ou teias de aranha gerando curto-circuito",
          descricao: "Limpeza técnica dos isoladores e remoção de resíduos condutores na fiação.",
        },
        {
          titulo: "Concertina perimetral frouxa ou com ganchos soltos no muro",
          descricao: "Reafixação com buchas de impacto, tensionamento de cabo guia e solda dos pontos de suporte.",
        },
      ]}
      tiposAplicacaoTitle="Tipos e aplicações"
      tiposAplicacao={[
        {
          title: 'Cerca elétrica residencial',
          description: 'Instalada sobre muros, com sinalização e central de choque adequada ao tamanho do imóvel.',
        },
        {
          title: 'Cerca elétrica para condomínios',
          description: 'Cobre perímetros extensos, integrada ao sistema de segurança da portaria.',
        },
        {
          title: 'Cerca elétrica comercial/industrial',
          description: 'Reforço de perímetro para galpões, terrenos e áreas externas de empresas.',
        },
        {
          title: 'Concertina (alternativa/complemento)',
          description: 'Reforço adicional em situações que exigem barreira física mais robusta.',
        },
      ]}
      segmentLinks={[
        {
          title: 'Cerca Elétrica Residencial',
          description: 'Proteção perimetral sobre muros de casas com central de choque e bateria reserva.',
          url: '/servicos/cerca-eletrica/residencial',
        },
        {
          title: 'Cerca Elétrica para Condomínios',
          description: 'Dimensionamento para perímetros extensos e integração com a portaria.',
          url: '/servicos/cerca-eletrica/condominio',
        },
      ]}
      diferenciais={[
        {
          title: 'Instalação conforme normas',
          description: 'Sinalização e distâncias de acordo com as exigências de segurança.',
        },
        {
          title: 'Central com bateria reserva',
          description: 'Funcionamento mantido mesmo em quedas de energia.',
        },
        {
          title: 'Manutenção e revisão periódica',
          description: 'Verificação da tensão e do estado da instalação ao longo do tempo.',
        },
      ]}
      faq={[
        {
          question: 'A cerca elétrica é perigosa para quem mora na casa?',
          answer: 'Não, quando instalada conforme as normas de segurança, a cerca é dimensionada para causar um choque de alerta, sem risco à saúde.',
        },
        {
          question: 'É preciso sinalizar a cerca elétrica?',
          answer: 'Sim, a sinalização é obrigatória e faz parte da instalação, alertando sobre a presença da cerca.',
        },
        {
          question: 'A cerca elétrica funciona durante a chuva?',
          answer: 'Sim, os sistemas são projetados para funcionar normalmente em condições de chuva e umidade.',
        },
        {
          question: 'É possível instalar cerca elétrica em muros baixos?',
          answer: 'Sim, o projeto é adaptado à altura do muro e ao perímetro do imóvel para garantir a eficácia da instalação.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para cerca elétrica',
        text: 'Avaliamos o perímetro do imóvel e apresentamos o projeto ideal, dentro das normas de segurança.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      serviceSlug="cerca-eletrica"
    />
  );
};
