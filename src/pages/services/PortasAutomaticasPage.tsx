import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';

export const PortasAutomaticasPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Portas Automáticas em Curitiba | Comercial e Industrial | Intelsecsul"
      metaDescription="Instalação e manutenção de portas automáticas comerciais, industriais e residenciais em Curitiba e região. Portas de vidro, seccionais e de enrolar. Orçamento grátis."
      h1="Portas Automáticas em Curitiba e Região Metropolitana"
      introText="A Intelsecsul instala e faz manutenção de portas automáticas para uso comercial, industrial e residencial em Curitiba e Região Metropolitana. Atendemos desde portas de vidro automáticas para lojas, clínicas e prédios comerciais até portas seccionais e de enrolar automatizadas para galpões, indústrias e garagens."
      whenToHireTitle="Quando instalar ou automatizar portas automáticas"
      whenToHireText="A instalação de portas automáticas é fundamental para estabelecimentos comerciais que buscam acessibilidade, fluxo contínuo de clientes e isolamento térmico e acústico, como lojas de rua, clínicas, farmácias e edifícios corporativos. No setor industrial e condominial, a automação de portas seccionais e de enrolar agiliza a logística de carga e descarga e reforça a segurança patrimonial.\n\nTambém realizamos manutenção preventiva e corretiva quando a porta automática apresenta paradas repentinas, lentidão, ruídos no motor ou desgaste em sensores de presença e trilhos."
      sintomasFrequentes={[
        {
          titulo: "Porta não abre ou não fecha completamente",
          descricao: "Regulagem e reprogramação dos limites de fim de curso na central, alinhamento de roldanas e desobstrução do trilho de rolamento.",
        },
        {
          titulo: "Sensor de presença não detecta movimento",
          descricao: "Calibração da área de cobertura do sensor infravermelho ou micro-ondas, limpeza de lentes ópticas ou substituição do módulo.",
        },
        {
          titulo: "Porta trava no meio do curso",
          descricao: "Substituição de rolamentos desgastados, lubrificação técnica das guias e calibração da sensibilidade anti-esmagamento.",
        },
        {
          titulo: "Motor fazendo barulho excessivo",
          descricao: "Troca de engrenagens ou mancais desgastados, balanceamento mecânico e alinhamento do conjunto de tração.",
        },
        {
          titulo: "Porta abre sozinha sem comando",
          descricao: "Ajuste de filtros contra interferências eletromagnéticas no sensor e revisão da fiação de botoeiras com contato instável.",
        },
        {
          titulo: "Placa eletrônica queimada",
          descricao: "Substituição da central de comando por modelo microprocessado compatível e instalação de protetor contra surtos de tensão.",
        },
        {
          titulo: "Correia ou corrente frouxa ou rompida",
          descricao: "Tensionamento da correia dentada reforçada ou troca por nova cinta de tração com alma de aço de alta resistência.",
        },
        {
          titulo: "Bateria do nobreak da porta descarregando rápido",
          descricao: "Substituição das baterias seladas internas de 12V e testes de autonomia e recarga do sistema de energia de emergência.",
        },
      ]}
      tiposAplicacaoTitle="Tipos de Portas Automáticas e Aplicações"
      tiposAplicacao={[
        {
          title: 'Porta de vidro automática de correr',
          description: 'Com sensor de presença ou botoeira de aproximação, ideal para lojas, clínicas, farmácias e prédios comerciais de alto fluxo.',
        },
        {
          title: 'Porta pivotante automática',
          description: 'Automação para portas de giro com operador eletromecânico discreto, indicada para consultórios e recepções executivas.',
        },
        {
          title: 'Porta giratória automática',
          description: 'Controle contínuo de fluxo de pedestres com excelente isolamento térmico e acústico em agências bancárias e hotéis.',
        },
        {
          title: 'Porta seccional automática',
          description: 'Abertura vertical rente ao teto para galpões logísticos, docas industriais e garagens residenciais de alto padrão.',
        },
        {
          title: 'Porta de enrolar automática',
          description: 'Lâminas de aço articuladas de alta resistência com motorização rápida e nobreak, comum em comércios de rua e depósitos.',
        },
        {
          title: 'Porta basculante automatizada',
          description: 'Elevação articulada para garagens amplas e galpões comerciais, com sistema de balanceamento seguro e motores robustos.',
        },
      ]}
      diferenciais={[
        {
          title: 'Equipe técnica própria e especializada',
          description: 'Instalação, parametrização e manutenção realizadas por técnicos próprios e certificados, sem terceirização.',
        },
        {
          title: 'Atendimento comercial, industrial e residencial',
          description: 'Soluções sob medida para o tamanho do vão e o volume de passagem em Curitiba e Região Metropolitana.',
        },
        {
          title: 'Segurança anti-esmagamento e nobreak',
          description: 'Sensores de reversão rápida de segurança e bateria de reserva para manter a porta operacional sem energia elétrica.',
        },
      ]}
      faq={[
        {
          question: 'Qual a diferença entre porta automática e portão eletrônico?',
          answer: 'Portas automáticas são sistemas projetados principalmente para passagem de pedestres ou docas (portas de vidro com sensor de presença, seccionais e de enrolar em lojas, clínicas e empresas). Já os portões eletrônicos são estruturas para tráfego de veículos em garagens residenciais e condomínios, geralmente com motores deslizantes ou basculantes.',
        },
        {
          question: 'Vocês fazem manutenção em porta automática de qualquer marca?',
          answer: 'Sim, nossa equipe técnica realiza manutenção preventiva e corretiva em portas automáticas de todas as principais marcas do mercado nacional e importado.',
        },
        {
          question: 'A porta automática funciona durante uma queda de energia?',
          answer: 'Sim, os sistemas contam com baterias de nobreak dedicadas que mantêm o funcionamento temporário durante quedas de luz, além de chave de destravamento manual de fácil acionamento.',
        },
        {
          question: 'Quanto tempo leva a instalação de uma porta automática comercial?',
          answer: 'A instalação técnica geralmente leva de 1 a 2 dias úteis após a fabricação dos vidros e perfis sob medida, permitindo rápida liberação para o funcionamento do comércio.',
        },
        {
          question: 'Vocês atendem emergência para porta comercial travada?',
          answer: 'Sim, disponibilizamos atendimento técnico prioritário para comércios e empresas com portas automáticas travadas, evitando riscos de segurança e prejuízos no atendimento.',
        },
        {
          question: 'É possível automatizar uma porta ou portão que já existe?',
          answer: 'Sim, na grande maioria dos casos é possível instalar kits motores, trilhos e sensores em portas seccionais, de enrolar ou pivotantes já existentes após avaliação técnica da estrutura.',
        },
        {
          question: 'Vocês oferecem contrato de manutenção preventiva?',
          answer: 'Sim, oferecemos contratos de manutenção preventiva periódica para condomínios, lojas e empresas, com vistorias programadas, substituição preventiva de peças e atendimento prioritário.',
        },
        {
          question: 'A Intelsecsul atende toda a Região Metropolitana de Curitiba para esse serviço?',
          answer: 'Sim, atendemos Curitiba e todos os 11 municípios da Região Metropolitana com técnicos especializados e visita técnica para orçamento sem custo.',
        },
      ]}
      crossLink={{
        text: 'Procurando automação de portão de casa com motor deslizante ou basculante? Veja nossa página de Portão Eletrônico.',
        linkText: 'Ver Portão Eletrônico',
        url: '/servicos/portao-eletronico/',
      }}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para portas automáticas',
        text: 'Avaliamos o vão e o fluxo do seu imóvel e apresentamos a melhor solução de porta automática ou manutenção técnica.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      serviceSlug="portas-automaticas"
    />
  );
};
