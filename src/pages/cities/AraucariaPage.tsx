import React from 'react';
import { CityPageTemplate } from '../../components/CityPageTemplate';

export const AraucariaPage: React.FC = () => {
  return (
    <CityPageTemplate
      title="Segurança Eletrônica em Araucária PR | CFTV Industrial e Controle de Acesso | Intelsecsul"
      metaDescription="Instalação de câmeras, controle de acesso, cerca elétrica e alarme monitorado em Araucária, incluindo empresas e polo industrial. Peça um orçamento."
      h1="Segurança eletrônica em Araucária"
      introText="A Intelsecsul atende Araucária, cidade com forte vocação industrial na Região Metropolitana de Curitiba, cobrindo bairros como Capela Velha, Costeira, Iguaçu, Fazenda Velha e Thomaz Coelho. Além de residências e condomínios, atendemos empresas e indústrias da cidade com projetos de CFTV, controle de acesso e cerca elétrica dimensionados para perímetros maiores."
      servicosDestaque={[
        {
          name: 'Controle de Acesso',
          slug: 'controle-de-acesso',
          description: 'Gerenciamento seguro de acesso de funcionários e visitantes em indústrias e galpões comerciais.',
        },
        {
          name: 'Câmeras de Segurança',
          slug: 'cameras-de-seguranca',
          description: 'Sistemas de CFTV de alta resolução e detecção inteligente para áreas extensas e pátios.',
        },
        {
          name: 'Cerca Elétrica',
          slug: 'cerca-eletrica',
          description: 'Proteção perimetral robusta para muros residenciais, terrenos industriais e galpões.',
        },
        {
          name: 'Manutenção de Sistemas de Segurança',
          slug: 'manutencao',
          description: 'Manutenção preventiva e corretiva especializada para manter seus sistemas funcionando 24 horas.',
        },
      ]}
      faq={[
        {
          question: 'A Intelsecsul atende empresas e indústrias em Araucária?',
          answer: 'Sim, temos experiência em projetos para empresas e indústrias, incluindo controle de acesso e CFTV para perímetros extensos.',
        },
        {
          question: 'Quais bairros de Araucária vocês atendem?',
          answer: 'Atendemos toda a cidade, incluindo Capela Velha, Costeira, Iguaçu, Fazenda Velha e Thomaz Coelho.',
        },
        {
          question: 'Vocês fazem manutenção em sistemas já instalados em empresas de Araucária?',
          answer: 'Sim, realizamos manutenção preventiva e corretiva independentemente de quem fez a instalação original.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito em Araucária',
        text: 'Avaliamos o imóvel ou a empresa e apresentamos o projeto de segurança ideal, incluindo perímetros industriais.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      cityName="Araucária"
      citySlug="araucaria"
    />
  );
};
