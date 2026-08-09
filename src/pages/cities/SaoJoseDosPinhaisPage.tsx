import React from 'react';
import { CityPageTemplate } from '../../components/CityPageTemplate';

export const SaoJoseDosPinhaisPage: React.FC = () => {
  return (
    <CityPageTemplate
      title="Segurança Eletrônica em São José dos Pinhais | CFTV e Controle de Acesso | Intelsecsul"
      metaDescription="Instalação de câmeras, controle de acesso, alarme monitorado e cerca elétrica em São José dos Pinhais. Atendimento residencial e empresarial. Peça um orçamento."
      h1="Segurança eletrônica em São José dos Pinhais"
      introText="A Intelsecsul atende São José dos Pinhais, cidade que reúne áreas residenciais como Afonso Pena, Águas Belas e Cidade Jardim e uma forte presença industrial e comercial na região do Aeroporto Internacional Afonso Pena e da Cidade Industrial. Por isso, atendemos tanto residências e condomínios quanto empresas e galpões que precisam de projetos mais robustos de controle de acesso e monitoramento."
      servicosDestaque={[
        {
          name: 'Controle de Acesso',
          slug: 'controle-de-acesso',
          description: 'Sistemas com biometria, RFID e reconhecimento facial para condomínios, empresas e galpões.',
        },
        {
          name: 'Câmeras de Segurança',
          slug: 'cameras-de-seguranca',
          description: 'Instalação de CFTV HD e IP para monitoramento perimetral, residencial e industrial.',
        },
        {
          name: 'Cerca Elétrica',
          slug: 'cerca-eletrica',
          description: 'Instalação e manutenção de cercas eletrificadas perimetrais conforme normas de segurança.',
        },
        {
          name: 'Locação de Câmeras e Equipamentos de Segurança',
          slug: 'locacao-de-cameras-de-seguranca',
          description: 'Solução completa para empresas e casas sem investimento inicial e com suporte contínuo.',
        },
      ]}
      faq={[
        {
          question: 'A Intelsecsul atende empresas em São José dos Pinhais?',
          answer: 'Sim, atendemos residências, condomínios, comércios e empresas em toda a cidade, incluindo a região industrial.',
        },
        {
          question: 'Vocês fazem projetos de controle de acesso para empresas?',
          answer: 'Sim, projetamos sistemas de controle de acesso com biometria, cartões ou reconhecimento facial para empresas e galpões.',
        },
        {
          question: 'Quais bairros de São José dos Pinhais vocês atendem?',
          answer: 'Atendemos toda a cidade, incluindo Afonso Pena, Águas Belas, Cidade Jardim, Guatupê e a região industrial.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito em São José dos Pinhais',
        text: 'Avaliamos o imóvel ou a empresa e apresentamos o projeto de segurança ideal.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      cityName="São José dos Pinhais"
      citySlug="sao-jose-dos-pinhais"
    />
  );
};
