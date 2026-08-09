import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';

export const CancelasCatracasPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Cancelas e Catracas em Curitiba | Controle de Fluxo | Intelsecsul"
      metaDescription="Instalação de cancelas e catracas para condomínios, empresas e estacionamentos em Curitiba e região. Controle de fluxo de veículos e pessoas. Peça um orçamento."
      h1="Cancelas e catracas em Curitiba e Região Metropolitana"
      introText="Instalamos cancelas para controle de veículos e catracas para controle de pessoas em condomínios, empresas e estacionamentos, integradas a sistemas de controle de acesso, identificação por tag ou cartão."
      whenToHireTitle="Quando instalar cancelas ou catracas"
      whenToHireText="Cancelas são indicadas para condomínios e empresas que precisam controlar a entrada e saída de veículos, reduzindo o acesso de carros não autorizados e organizando o fluxo em horários de pico. Catracas, por sua vez, são usadas para controlar o fluxo de pessoas em recepções, portarias e áreas restritas, geralmente integradas a sistemas de biometria, cartão ou reconhecimento facial. Ambas as soluções também ajudam a gerar registros de quem entrou e saiu, o que é útil tanto para segurança quanto para controle administrativo."
      sintomasFrequentes={[
        {
          titulo: "Haste da cancela travada no meio do caminho ou caindo rápido",
          descricao: "Regulagem do braço de mola de tração da cancela e ajuste de fim de curso óptico.",
        },
        {
          titulo: "Veículo bateu na haste da cancela e entortou/quebrou o alumínio",
          descricao: "Troca da haste de alumínio (reta ou articulada) e substituição do acoplamento de proteção.",
        },
        {
          titulo: "Laço indutivo de piso não detecta a presença do carro",
          descricao: "Recorte do asfalto/piso, instalação de nova bobina de laço magnético e calibração do detector.",
        },
        {
          titulo: "Catraca dando duplo giro ou permitindo a passagem de duas pessoas de uma vez",
          descricao: "Ajuste de solenóide, substituição de molas de retorno e calibragem dos sensores de rotação.",
        },
        {
          titulo: "Braço da catraca solto, caído ou não travando após a passagem",
          descricao: "Substituição do conjunto mecânico de travamento e ajuste do amortecedor hidráulico.",
        },
        {
          titulo: "Placa controladora da cancela não aceita comando do controle remoto ou tag",
          descricao: "Reset de fábrica da placa, reprogramação de receptora 433MHz e substituição do relé de acionamento.",
        },
        {
          titulo: "Fotocélula de segurança não impede o fechamento da cancela sobre o veículo",
          descricao: "Alinhamento do feixe infravermelho de barreira e troca de sensores com infiltração de água.",
        },
        {
          titulo: "Catraca com display apagado e sinal sonoro de bipe contínuo",
          descricao: "Substituição da fonte chaveada interna de 12V/24V e reparo no cabo de comunicação do display.",
        },
        {
          titulo: "Cancela esquentando o motor e parando de funcionar em horários de pico",
          descricao: "Troca do motor por modelo de uso contínuo (Tragédia/100% duty cycle) e troca de capacitor.",
        },
        {
          titulo: "Catraca PNE (Acessibilidade) não destrava a porta lateral de cadeirante",
          descricao: "Troca da trava solenóide de alta amperagem e botão de liberação emergencial da recepção.",
        },
      ]}
      tiposAplicacaoTitle="Tipos e aplicações"
      tiposAplicacao={[
        {
          title: 'Cancela para condomínios',
          description: 'Controle de veículos na entrada, com acionamento por tag, controle remoto ou aplicativo.',
        },
        {
          title: 'Cancela para estacionamentos',
          description: 'Controle de fluxo com ou sem cobrança automatizada, conforme o projeto.',
        },
        {
          title: 'Catraca para empresas',
          description: 'Controle de acesso de funcionários e visitantes na recepção.',
        },
        {
          title: 'Catraca integrada à biometria',
          description: 'Libera a passagem apenas para usuários cadastrados no sistema.',
        },
      ]}
      diferenciais={[
        {
          title: 'Integração com controle de acesso',
          description: 'Cancelas e catracas liberadas pelo mesmo sistema de biometria ou cartão.',
        },
        {
          title: 'Equipamentos robustos',
          description: 'Dimensionados para uso frequente, sem perda de desempenho.',
        },
        {
          title: 'Suporte técnico e manutenção',
          description: 'Ajustes e reparos realizados pela mesma equipe da instalação.',
        },
      ]}
      faq={[
        {
          question: 'A cancela funciona com controle remoto?',
          answer: 'Sim, é possível acionar a cancela por controle remoto, tag ou aplicativo, conforme o projeto escolhido.',
        },
        {
          question: 'A catraca pode ser integrada à biometria ou ao reconhecimento facial?',
          answer: 'Sim, é possível integrar a catraca a sistemas de biometria, cartão ou reconhecimento facial.',
        },
        {
          question: 'Vocês instalam cancelas em estacionamentos comerciais?',
          answer: 'Sim, instalamos cancelas para estacionamentos, condomínios e empresas, com ou sem cobrança automatizada.',
        },
        {
          question: 'É possível registrar quem passou pela catraca?',
          answer: 'Sim, sistemas integrados geram relatórios de acesso com data e horário de cada passagem.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para cancelas e catracas',
        text: 'Avaliamos o local e apresentamos a solução ideal para controlar o fluxo de veículos ou pessoas.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      serviceSlug="cancelas-e-catracas"
    />
  );
};
