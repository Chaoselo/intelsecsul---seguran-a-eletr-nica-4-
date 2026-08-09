import React from 'react';
import { CityPageTemplate } from '../../components/CityPageTemplate';

export const CampinaGrandeDoSulPage: React.FC = () => {
  return (
    <CityPageTemplate
      title="Segurança Eletrônica em Campina Grande do Sul PR | Câmeras e Alarme | Intelsecsul"
      metaDescription="Instalação de câmeras, alarme monitorado, cerca elétrica e controle de acesso em Campina Grande do Sul. Atendimento residencial, comercial e industrial. Peça um orçamento."
      h1="Segurança eletrônica em Campina Grande do Sul"
      introText="A Intelsecsul atende Campina Grande do Sul com instalação e manutenção de câmeras de segurança, alarme monitorado, cerca elétrica e controle de acesso, cobrindo bairros como Centro, Distrito Industrial, Jardim Paulista, Jardim Santa Rosa e Terra Boa. A cidade reúne tanto áreas residenciais tranquilas quanto uma região industrial em expansão, o que amplia a demanda por projetos de câmeras e controle de acesso para empresas, além dos sistemas residenciais."
      servicosDestaque={[
        {
          name: 'Câmeras de Segurança',
          slug: 'cameras-de-seguranca',
          description: 'CFTV de alta resolução com monitoramento via aplicativo para residências, lojas e indústrias.',
        },
        {
          name: 'Instalação de Alarmes',
          slug: 'instalacao-de-alarmes',
          description: 'Proteção com sensores perimetrais e internos com alertas no celular.',
        },
        {
          name: 'Controle de Acesso',
          slug: 'controle-de-acesso',
          description: 'Gerenciamento de fluxo de colaboradores, visitantes e veículos no Distrito Industrial.',
        },
        {
          name: 'Locação de Câmeras e Equipamentos de Segurança',
          slug: 'locacao-de-cameras-de-seguranca',
          description: 'Aluguel de câmeras e sistemas de segurança com suporte e manutenção inclusos.',
        },
      ]}
      faq={[
        {
          question: 'A Intelsecsul atende o Distrito Industrial de Campina Grande do Sul?',
          answer: 'Sim, atendemos empresas da região industrial com projetos de câmeras e controle de acesso, além de residências em toda a cidade.',
        },
        {
          question: 'Quais bairros de Campina Grande do Sul vocês atendem?',
          answer: 'Atendemos toda a cidade, incluindo Centro, Distrito Industrial, Jardim Paulista, Jardim Santa Rosa e Terra Boa.',
        },
        {
          question: 'Quanto tempo leva para agendar uma visita técnica em Campina Grande do Sul?',
          answer: 'Normalmente agendamos a visita técnica em poucos dias após o primeiro contato.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito em Campina Grande do Sul',
        text: 'Avaliamos o imóvel ou a empresa e apresentamos o projeto de segurança ideal.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      cityName="Campina Grande do Sul"
      citySlug="campina-grande-do-sul"
    />
  );
};
