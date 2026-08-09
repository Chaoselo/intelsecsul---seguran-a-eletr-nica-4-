import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';

export const PortaoEletronicoPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Portão Eletrônico em Curitiba | Instalação e Manutenção | Intelsecsul"
      metaDescription="Instalação, automação e manutenção de portões eletrônicos residenciais e comerciais em Curitiba e região. Motores de alta durabilidade. Peça um orçamento."
      h1="Portão eletrônico em Curitiba e Região Metropolitana"
      introText="Instalamos, automatizamos e damos manutenção em portões eletrônicos residenciais e comerciais, com motores adequados ao peso e ao uso de cada portão, seja deslizante, basculante ou de duas folhas."
      whenToHireTitle="Quando instalar ou trocar o motor do portão eletrônico"
      whenToHireText="A automação do portão costuma ser uma das primeiras melhorias de segurança e praticidade que as famílias e empresas buscam, principalmente para evitar abrir o portão manualmente à noite ou em dias de chuva. Também é comum a troca do motor quando o portão começa a apresentar lentidão, ruído excessivo ou parar de funcionar, sinais de que o motor está no fim da vida útil ou é inadequado para o peso do portão. Empresas com fluxo intenso de veículos também se beneficiam de motores de uso mais robusto, dimensionados para ciclos frequentes de abertura e fechamento."
      sintomasFrequentes={[
        {
          titulo: "Portão correndo devagar ou parando no meio do caminho",
          descricao: "Troca do capacitor de partida descapacitado, substituição de roldanas gastas e lubrificação técnica da cremalheira.",
        },
        {
          titulo: "Motor fazendo barulho alto de engrenagem raspando mas o portão não anda",
          descricao: "Substituição da engrenagem de nylon/bronze roçada e ajuste de folga do eixo do motor.",
        },
        {
          titulo: "Portão não obedece ao controle remoto (ou funciona só muito de perto)",
          descricao: "Troca de pilha do controle, reprogramação da frequência 433MHz e substituição da antena receptora da placa.",
        },
        {
          titulo: "Portão basculante despencando rápido ou muito pesado para erguer",
          descricao: "Ajuste e aperto dos cabos de aço e troca dos contrapesos ou molas de torção desreguladas.",
        },
        {
          titulo: "Portão fechando e batendo com força no batente sem parar",
          descricao: "Ajuste e substituição do sensor de fim de curso (ímã/reed switch) que delimita a parada.",
        },
        {
          titulo: "Placa de comando do motor queimada por raio ou oscilação de energia",
          descricao: "Substituição por placa receptora universal/inverter e instalação de protetor de surto (DPS).",
        },
        {
          titulo: "Portão travando no trilho em dias de chuva ou com sujeira",
          descricao: "Limpeza do trilho de rolamento inferior, alinhamento da estrutura e troca de roldanas com rolamento blindado.",
        },
        {
          titulo: "Destravar o motor na chave manual não funciona",
          descricao: "Desbloqueio e lubrificação da alavanca de destravamento com chave segredo da central.",
        },
        {
          titulo: "Braço do motor fuso/basculante solto da folha do portão",
          descricao: "Solda reforçada na cantoneira de fixação e troca da porca acionadora de bronze do fuso.",
        },
        {
          titulo: "Portão reabrindo sozinho logo após encostar no fim do curso",
          descricao: "Regulagem da embreagem eletrônica anti-esmagamento e ajuste de sensibilidade de rampa de parada.",
        },
        {
          titulo: "Portão eletrônico sem energia totalmente parado",
          descricao: "Instalação de No-break dedicado para portões com bateria de alta amperagem.",
        },
        {
          titulo: "Controle de portão TX Car (no farol do carro) sem dar sinal",
          descricao: "Troca do transmissor TX instalado no veículo e pareamento direto na central de comando.",
        },
        {
          titulo: "Cremalheira de ferro/nylon com dentes quebrados ou solta",
          descricao: "Troca dos gomos de cremalheira danificados e alinhamento milimétrico com o pinhão do motor.",
        },
      ]}
      tiposAplicacaoTitle="Tipos e aplicações"
      tiposAplicacao={[
        {
          title: 'Portão deslizante',
          description: 'Ideal para terrenos com espaço lateral, comum em residências e empresas.',
        },
        {
          title: 'Portão basculante',
          description: 'Abre para dentro do terreno, indicado para garagens com pouco espaço lateral.',
        },
        {
          title: 'Portão de duas folhas',
          description: 'Solução tradicional para entradas residenciais e de condomínios.',
        },
        {
          title: 'Motor de uso intenso',
          description: 'Dimensionado para portões com fluxo alto de abertura e fechamento, como em empresas.',
        },
      ]}
      diferenciais={[
        {
          title: 'Motores de alta durabilidade',
          description: 'Equipamentos dimensionados para o peso real do portão.',
        },
        {
          title: 'Instalação e manutenção pela mesma equipe',
          description: 'Sem necessidade de contratar empresas diferentes.',
        },
        {
          title: 'Controle remoto e por aplicativo',
          description: 'Opção de abrir o portão pelo celular, conforme o modelo escolhido.',
        },
      ]}
      faq={[
        {
          question: 'Qual motor é indicado para o meu portão?',
          answer: 'Depende do peso, do tamanho e do tipo do portão. Fazemos uma avaliação técnica para indicar o motor mais adequado.',
        },
        {
          question: 'Vocês fazem manutenção em motores de outras marcas?',
          answer: 'Sim, realizamos manutenção preventiva e corretiva independentemente da marca do motor já instalado.',
        },
        {
          question: 'É possível abrir o portão pelo celular?',
          answer: 'Sim, em modelos com essa funcionalidade é possível abrir e fechar o portão remotamente pelo aplicativo.',
        },
        {
          question: 'O que fazer se o portão parar de funcionar durante uma queda de energia?',
          answer: 'Motores com sistema de bateria reserva continuam funcionando por um período mesmo sem energia elétrica; também é possível destravar o motor manualmente.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para portão eletrônico',
        text: 'Avaliamos o portão e indicamos a melhor solução de automação ou manutenção.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      serviceSlug="portao-eletronico"
    />
  );
};
