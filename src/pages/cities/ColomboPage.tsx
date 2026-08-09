import React from 'react';
import { CityPageTemplate } from '../../components/CityPageTemplate';

export const ColomboPage: React.FC = () => {
  return (
    <CityPageTemplate
      title="Segurança Eletrônica em Colombo PR | Câmeras e Alarme Monitorado | Intelsecsul"
      metaDescription="Instalação de câmeras, alarme monitorado, cerca elétrica e controle de acesso em Colombo. Atendimento residencial e comercial. Peça um orçamento."
      h1="Segurança eletrônica em Colombo"
      introText="A Intelsecsul atende Colombo com instalação e manutenção de câmeras de segurança, alarme monitorado, cerca elétrica e controle de acesso, cobrindo bairros como Guaraituba, Roça Grande, São Gabriel, Guarani e o Centro. Guaraituba, o bairro mais populoso da cidade, concentra boa parte do comércio e das residências que buscam reforçar a segurança com câmeras e alarme monitorado."
      servicosDestaque={[
        {
          name: 'Câmeras de Segurança',
          slug: 'cameras-de-seguranca',
          description: 'Sistemas de CFTV HD e IP com gravação local ou em nuvem e acesso pelo smartphone.',
        },
        {
          name: 'Instalação de Alarmes',
          slug: 'instalacao-de-alarmes',
          description: 'Sistemas de alarme com sensores de presença e alertas no celular.',
        },
        {
          name: 'Interfonia e Controle de Acesso',
          slug: 'interfonia',
          description: 'Comunicação e controle de portaria para residências, condomínios e comércios.',
        },
        {
          name: 'Locação de Câmeras e Equipamentos de Segurança',
          slug: 'locacao-de-cameras-de-seguranca',
          description: 'Equipamentos completos por mensalidade previsível, sem taxa de instalação.',
        },
      ]}
      faq={[
        {
          question: 'A Intelsecsul atende Colombo e região?',
          answer: 'Sim, atendemos toda a cidade, incluindo Guaraituba, Roça Grande, São Gabriel, Guarani e o Centro.',
        },
        {
          question: 'Vocês atendem condomínios em Colombo?',
          answer: 'Sim, instalamos e damos manutenção em sistemas de segurança para condomínios residenciais em Colombo.',
        },
        {
          question: 'Quanto tempo leva para agendar uma visita técnica em Colombo?',
          answer: 'Normalmente agendamos a visita técnica em poucos dias após o primeiro contato.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito em Colombo',
        text: 'Avaliamos o imóvel e apresentamos o projeto de segurança ideal para sua casa, comércio ou condomínio.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      cityName="Colombo"
      citySlug="colombo"
    />
  );
};
