import React from 'react';
import { CityPageTemplate } from '../../components/CityPageTemplate';

export const PinhaisPage: React.FC = () => {
  return (
    <CityPageTemplate
      title="Segurança Eletrônica em Pinhais PR | Câmeras e Alarme Monitorado | Intelsecsul"
      metaDescription="Instalação de câmeras, alarme monitorado, cerca elétrica e controle de acesso em Pinhais e região. Atendimento local, orçamento sem custo. Fale no WhatsApp."
      h1="Segurança eletrônica em Pinhais"
      introText="A Intelsecsul atende Pinhais com instalação e manutenção de câmeras de segurança, alarme monitorado, cerca elétrica e controle de acesso, cobrindo bairros como Centro, Weissópolis, Emiliano Perneta, Atuba e Vargem Grande. Por ser uma cidade predominantemente residencial e a poucos minutos de Curitiba, atendemos com agilidade tanto casas quanto condomínios da região."
      servicosDestaque={[
        {
          name: 'Câmeras de Segurança',
          slug: 'cameras-de-seguranca',
          description: 'CFTV com visão noturna, gravação e acesso móvel para residências e empresas em Pinhais.',
        },
        {
          name: 'Instalação de Alarmes',
          slug: 'instalacao-de-alarmes',
          description: 'Sensores de presença e portas com alertas no celular para imóveis em Pinhais.',
        },
        {
          name: 'Cerca Elétrica',
          slug: 'cerca-eletrica',
          description: 'Proteção perimetral certificada em muros residenciais e de condomínios.',
        },
        {
          name: 'Locação de Câmeras e Equipamentos de Segurança',
          slug: 'locacao-de-cameras-de-seguranca',
          description: 'Sistemas completos por mensalidade sem taxa de instalação e com manutenção inclusa.',
        },
      ]}
      faq={[
        {
          question: 'A Intelsecsul atende Pinhais e região?',
          answer: 'Sim, atendemos toda a cidade de Pinhais, incluindo Centro, Weissópolis, Emiliano Perneta, Atuba e Vargem Grande.',
        },
        {
          question: 'Quanto tempo leva para agendar uma visita técnica em Pinhais?',
          answer: 'Normalmente conseguimos agendar a visita em poucos dias úteis, já que Pinhais fica próxima à nossa base em Curitiba.',
        },
        {
          question: 'Vocês atendem condomínios em Pinhais?',
          answer: 'Sim, instalamos e damos manutenção em sistemas de segurança para condomínios residenciais em Pinhais.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito em Pinhais',
        text: 'Avaliamos o imóvel e apresentamos o melhor projeto de segurança para sua casa ou condomínio.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      cityName="Pinhais"
      citySlug="pinhais"
    />
  );
};
