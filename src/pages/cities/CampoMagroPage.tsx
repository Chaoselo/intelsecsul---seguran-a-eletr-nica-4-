import React from 'react';
import { CityPageTemplate } from '../../components/CityPageTemplate';

export const CampoMagroPage: React.FC = () => {
  return (
    <CityPageTemplate
      title="Segurança Eletrônica em Campo Magro PR | Câmeras e Alarme Monitorado | Intelsecsul"
      metaDescription="Instalação de câmeras, alarme monitorado, cerca elétrica e controle de acesso em Campo Magro. Atendimento residencial e em áreas rurais. Peça um orçamento."
      h1="Segurança eletrônica em Campo Magro"
      introText="A Intelsecsul atende Campo Magro com instalação e manutenção de câmeras de segurança, alarme monitorado, cerca elétrica e controle de acesso, incluindo o Jardim Boa Vista, bairro mais populoso da cidade, e demais regiões ao longo da Estrada do Cerne. Por ser um município com grande área verde, propriedades rurais e sítios, muitos projetos aqui combinam câmeras com cobertura noturna e cerca elétrica para reforçar o perímetro de terrenos maiores."
      servicosDestaque={[
        {
          name: 'Câmeras de Segurança',
          slug: 'cameras-de-seguranca',
          description: 'Sistemas de CFTV HD e 4K com visão noturna e acesso remoto para residências, comércios e sítios.',
        },
        {
          name: 'Cerca Elétrica',
          slug: 'cerca-eletrica',
          description: 'Proteção perimetral reforçada para terrenos extensos, chácaras e residências em Campo Magro.',
        },
        {
          name: 'Instalação de Alarmes',
          slug: 'instalacao-de-alarmes',
          description: 'Proteção com sensores de presença, sirenes e alerta no celular.',
        },
        {
          name: 'Locação de Equipamentos de Segurança',
          slug: 'locacao-de-equipamentos-de-seguranca',
          description: 'Aluguel de câmeras e alarmes por mensalidade fixa sem taxa de instalação e com manutenção inclusa.',
        },
      ]}
      faq={[
        {
          question: 'A Intelsecsul atende Campo Magro?',
          answer: 'Sim, atendemos toda a cidade, incluindo o Jardim Boa Vista e as regiões ao longo da Estrada do Cerne.',
        },
        {
          question: 'Vocês instalam sistemas em sítios e propriedades com terrenos grandes?',
          answer: 'Sim, temos experiência em projetos para propriedades rurais e terrenos extensos, combinando câmeras e cerca elétrica.',
        },
        {
          question: 'Quanto tempo leva para agendar uma visita técnica em Campo Magro?',
          answer: 'Normalmente agendamos a visita técnica em poucos dias após o primeiro contato.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito em Campo Magro',
        text: 'Avaliamos o imóvel, seja residência, sítio ou comércio, e apresentamos o projeto de segurança ideal.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      cityName="Campo Magro"
      citySlug="campo-magro"
    />
  );
};
