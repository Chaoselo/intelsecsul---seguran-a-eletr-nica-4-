import React from 'react';
import { CityPageTemplate } from '../../components/CityPageTemplate';

export const QuatroBarrasPage: React.FC = () => {
  return (
    <CityPageTemplate
      title="Segurança Eletrônica em Quatro Barras PR | CFTV Industrial e Alarme | Intelsecsul"
      metaDescription="Instalação de câmeras, alarme monitorado, cerca elétrica e controle de acesso em Quatro Barras. Atendimento residencial e industrial. Peça um orçamento."
      h1="Segurança eletrônica em Quatro Barras"
      introText="A Intelsecsul atende Quatro Barras com instalação e manutenção de câmeras de segurança, alarme monitorado, cerca elétrica e controle de acesso, cobrindo desde bairros residenciais como a Colônia Maria José até a área industrial da cidade, próxima à BR-116. Quatro Barras concentra um polo automotivo importante da Região Metropolitana, o que gera uma demanda relevante por controle de acesso e CFTV para empresas, além dos projetos residenciais."
      servicosDestaque={[
        {
          name: 'Controle de Acesso',
          slug: 'controle-de-acesso',
          description: 'Sistemas inteligentes com biometria, cartão e reconhecimento facial para indústrias e galpões.',
        },
        {
          name: 'Câmeras de Segurança',
          slug: 'cameras-de-seguranca',
          description: 'CFTV de alta definição para monitoramento de frotas, pátios e perímetros industriais e residenciais.',
        },
        {
          name: 'Instalação de Alarmes',
          slug: 'instalacao-de-alarmes',
          description: 'Sistemas de alarme com sensores de presença e barreira infravermelha para grandes áreas.',
        },
        {
          name: 'Locação de Equipamentos de Segurança',
          slug: 'locacao-de-equipamentos-de-seguranca',
          description: 'Câmeras e alarmes por mensalidade sem investimento inicial e com suporte contínuo.',
        },
      ]}
      faq={[
        {
          question: 'A Intelsecsul atende empresas do polo automotivo de Quatro Barras?',
          answer: 'Sim, atendemos empresas da região industrial com projetos de controle de acesso e CFTV adequados a esse tipo de instalação.',
        },
        {
          question: 'Vocês atendem residências em Quatro Barras, além de empresas?',
          answer: 'Sim, atendemos residências e comércios em toda a cidade, incluindo a Colônia Maria José e demais bairros.',
        },
        {
          question: 'Quanto tempo leva para agendar uma visita técnica em Quatro Barras?',
          answer: 'Normalmente agendamos a visita técnica em poucos dias após o primeiro contato.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito em Quatro Barras',
        text: 'Avaliamos o imóvel ou a empresa e apresentamos o projeto de segurança ideal.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      cityName="Quatro Barras"
      citySlug="quatro-barras"
    />
  );
};
