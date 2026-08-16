import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';

export const AlarmeMonitoradoPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Instalação e Manutenção de Alarmes em Curitiba | IntelSec Sul"
      metaDescription="Instalação, manutenção e projetos de alarmes residenciais e empresariais em Curitiba e região. Sensores de presença, sirenes e notificação no celular. Peça seu orçamento."
      h1="Instalação e Manutenção de Alarmes em Curitiba e Região Metropolitana"
      introText="Projetamos, instalamos e realizamos a manutenção preventiva e corretiva de sistemas de alarme para residências, comércios e empresas. Proteja seu imóvel com sensores de presença, alertas de abertura e notificação em tempo real diretamente no seu celular."
      whenToHireTitle="Quando instalar ou realizar manutenção no seu alarme"
      whenToHireText="Um sistema de alarme bem projetado é essencial para prevenir invasões em residências, condomínios e estabelecimentos comerciais. Se você passa longos períodos fora do imóvel, deseja ser notificado instantaneamente pelo smartphone ao sinal de qualquer disparo, ou possui um sistema antigo que necessita de manutenção técnica e troca de baterias, a IntelSec Sul oferece a solução ideal. Atuamos com venda, instalação profissional sem fiação exposta e assistência técnica especializada com equipe própria em toda a Região Metropolitana de Curitiba."
      sintomasFrequentes={[
        {
          titulo: "Sensor de presença (PIR) disparando sozinho sem ninguém",
          descricao: "Calibração de sensibilidade, ajuste de função PET e substituição de sensores descalibrados.",
        },
        {
          titulo: "Teclado apitando com aviso de 'Bateria Fraca' ou 'Falha'",
          descricao: "Substituição da bateria selada de 12V da central e teste de carga da rede elétrica.",
        },
        {
          titulo: "Central não aceita a senha master ou exibe 'Zona Aberta'",
          descricao: "Reset técnico, reprogramação do sistema e fechamento de zonas com resistor de fim de linha.",
        },
        {
          titulo: "Sirene do alarme tocando fraca, rouca ou queimada",
          descricao: "Troca de sirene piezoelétrica/bitonal e teste de saída de alta potência da placa do alarme.",
        },
        {
          titulo: "Controle remoto não responde ou funciona apenas colado na central",
          descricao: "Troca de pilha, limpeza de contatos e codificação de novos controles na frequência correta.",
        },
        {
          titulo: "Central desconectada do Wi-Fi sem notificar no celular",
          descricao: "Reconfiguração do módulo IP, atualização de firmware e instalação de chip GSM de backup.",
        },
        {
          titulo: "Sensor magnético de porta/janela descolou ou quebrou",
          descricao: "Reinstalação com fita de alta fixação ou parafusamento e alinhamento de ímã de contato.",
        },
        {
          titulo: "Disparo falso do alarme quando chove, venta ou cai raio",
          descricao: "Isolamento de fiação exposta, troca de sensores externos por modelos com dupla tecnologia (PIR + Micro-ondas).",
        },
        {
          titulo: "Central desligando totalmente durante quedas de energia na rua",
          descricao: "Troca do fusível de proteção e substituição da bateria de backup de emergência.",
        },
        {
          titulo: "Sensor de barreira infravermelha externa desalinhar",
          descricao: "Realinhamento óptico de feixe infravermelho e ajuste de altura para evitar passagem de pequenos animais.",
        },
        {
          titulo: "Botão de pânico da recepção/portaria sem sinal",
          descricao: "Substituição do botão físico de emergência e teste de continuidade do cabo até a central.",
        },
        {
          titulo: "Fiação do alarme partida ou com zinabre nas junções",
          descricao: "Revisão da malha de cabeamento, solda nos pontos de emenda e isolamento contra umidade.",
        },
      ]}
      tiposAplicacaoTitle="Equipamentos e aplicações"
      tiposAplicacao={[
        {
          title: 'Sensores de Abertura Magnéticos',
          description: 'Instalados em portas, portões e janelas, detectam imediatamente qualquer tentativa de intrusão.',
        },
        {
          title: 'Sensores de Presença e Movimento',
          description: 'Detectam movimentação indevida em ambientes internos ou externos, mesmo em escuridão total.',
        },
        {
          title: 'Centrais de Alarme com Wi-Fi/GPRS',
          description: 'Centrais inteligentes que enviam notificações em tempo real direto para o celular dos usuários.',
        },
        {
          title: 'Sirenes de Alto Decibel e Bateria Reserva',
          description: 'Efeito inibidor imediato e autonomia de funcionamento garantida mesmo em quedas de energia elétrica.',
        },
      ]}
      segmentLinks={[
        {
          title: 'Alarme Residencial',
          description: 'Sensores de presença e abertura para casas e apartamentos com alerta no celular.',
          url: '/servicos/instalacao-de-alarmes/residencial/',
        },
        {
          title: 'Alarme Empresarial',
          description: 'Proteção perimetral e interna para comércios, escritórios e galpões.',
          url: '/servicos/instalacao-de-alarmes/empresarial/',
        },
      ]}
      diferenciais={[
        {
          title: 'Equipe técnica própria',
          description: 'Instalação ágil, limpa e com configuração completa no seu smartphone.',
        },
        {
          title: 'Sem mensalidades obrigatórias',
          description: 'O equipamento e a instalação são seus, sem ficar preso a contratos abusivos.',
        },
        {
          title: 'Notificações e controle via App',
          description: 'Arme, desarme e receba alertas de disparo instantâneos de qualquer lugar.',
        },
      ]}
      faq={[
        {
          question: 'O alarme funciona mesmo se acabar a energia elétrica?',
          answer: 'Sim, instalamos centrais com bateria de nobreak integrada que mantêm o alarme operando normalmente durante quedas de energia.',
        },
        {
          question: 'Consigo controlar o alarme e receber avisos pelo celular?',
          answer: 'Sim, com as centrais inteligentes Intelbras e JFL configuradas pela nossa equipe, você recebe notificações instantâneas de disparo e pode armar/desarmar remotamente.',
        },
        {
          question: 'Vocês realizam manutenção em sistemas de alarme já existentes?',
          answer: 'Sim! Realizamos manutenção preventiva e corretiva, troca de baterias, substituição de sensores defeituosos e reconfiguração de centrais.',
        },
        {
          question: 'Vocês cobram mensalidade pelo uso do alarme?',
          answer: 'Nossos projetos de instalação e venda de equipamentos não possuem mensalidades obrigatórias. O sistema é 100% seu.',
        },
      ]}
      ctaFinal={{
        title: 'Solicite seu orçamento para instalação ou manutenção de alarmes',
        text: 'Nossa equipe técnica avalia suas necessidades e oferece o projeto ideal para seu imóvel em Curitiba e Região.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      serviceSlug="instalacao-de-alarmes"
    />
  );
};
