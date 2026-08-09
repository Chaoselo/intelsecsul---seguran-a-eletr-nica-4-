import React from 'react';
import { CityPageTemplate } from '../../components/CityPageTemplate';

export const CuritibaPage: React.FC = () => {
  return (
    <CityPageTemplate
      title="Segurança Eletrônica em Curitiba | Câmeras, Alarme e Controle de Acesso | Intelsecsul"
      metaDescription="Instalação de câmeras, alarme monitorado, cerca elétrica e controle de acesso em Curitiba. Equipe própria, atendimento na capital e região. Peça um orçamento."
      h1="Segurança eletrônica em Curitiba"
      introText="A Intelsecsul é sediada em Curitiba e atende toda a cidade, de bairros centrais como Batel, Bigorrilho e Água Verde a regiões como Santa Felicidade, Boqueirão, Portão, Cabral, Cajuru e Sítio Cercado. Atendemos residências, comércios, empresas e condomínios com projetos de câmeras, alarme monitorado, cerca elétrica, controle de acesso e locação de equipamentos."
      servicosDestaque={[
        {
          name: 'Câmeras de Segurança',
          slug: 'cameras-de-seguranca',
          description: 'Sistemas de CFTV HD e 4K com gravação e acesso remoto pelo celular para imóveis e empresas em Curitiba.',
        },
        {
          name: 'Instalação de Alarmes',
          slug: 'instalacao-de-alarmes',
          description: 'Sistemas de alarme residencial e comercial com sensores de presença e alerta no celular em Curitiba.',
        },
        {
          name: 'Controle de Acesso',
          slug: 'controle-de-acesso',
          description: 'Gerenciamento inteligente de entradas e saídas por biometria, cartão RFID e reconhecimento facial.',
        },
        {
          name: 'Locação de Câmeras e Equipamentos de Segurança',
          slug: 'locacao-de-cameras-de-seguranca',
          description: 'Câmeras e alarme por mensalidade fixa sem investimento inicial e com manutenção inclusa.',
        },
      ]}
      faq={[
        {
          question: 'A Intelsecsul atende toda Curitiba?',
          answer: 'Sim, atendemos todos os bairros de Curitiba, além de toda a Região Metropolitana.',
        },
        {
          question: 'Quanto tempo leva para agendar uma visita técnica em Curitiba?',
          answer: 'Por sermos sediados na cidade, normalmente conseguimos agendar a visita técnica em poucos dias úteis.',
        },
        {
          question: 'Vocês atendem condomínios e empresas, além de residências?',
          answer: 'Sim, atendemos residências, condomínios, comércios e empresas em Curitiba.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito em Curitiba',
        text: 'Nossa equipe avalia o imóvel e apresenta o melhor projeto de segurança para o seu caso.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      bairrosCuritiba={true}
      cityName="Curitiba"
      citySlug="curitiba"
    />
  );
};
