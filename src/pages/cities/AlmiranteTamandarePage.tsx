import React from 'react';
import { CityPageTemplate } from '../../components/CityPageTemplate';

export const AlmiranteTamandarePage: React.FC = () => {
  return (
    <CityPageTemplate
      title="Segurança Eletrônica em Almirante Tamandaré PR | Câmeras e Alarme | Intelsecsul"
      metaDescription="Instalação de câmeras, alarme monitorado, cerca elétrica e controle de acesso em Almirante Tamandaré. Atendimento residencial e comercial. Peça um orçamento."
      h1="Segurança eletrônica em Almirante Tamandaré"
      introText="A Intelsecsul atende Almirante Tamandaré com instalação e manutenção de câmeras de segurança, alarme monitorado, cerca elétrica e controle de acesso, cobrindo bairros como Centro, Bom Fim, Cachoeira, Jardim Central e Lamenha Pequena. A cidade tem crescido nos últimos anos, e reforçar a segurança residencial tem sido uma prioridade cada vez maior para quem mora na região."
      servicosDestaque={[
        {
          name: 'Câmeras de Segurança',
          slug: 'cameras-de-seguranca',
          description: 'Sistemas de CFTV HD e 4K com gravação e acesso remoto pelo celular para imóveis e empresas.',
        },
        {
          name: 'Instalação de Alarmes',
          slug: 'instalacao-de-alarmes',
          description: 'Sistemas de alarme residencial e comercial com sensores de presença e alerta no celular.',
        },
        {
          name: 'Cerca Elétrica',
          slug: 'cerca-eletrica',
          description: 'Proteção perimetral certificada em muros residenciais, comerciais e de condomínios.',
        },
        {
          name: 'Locação de Câmeras e Equipamentos de Segurança',
          slug: 'locacao-de-cameras-de-seguranca',
          description: 'Câmeras e alarme por mensalidade fixa sem investimento inicial e com manutenção inclusa.',
        },
      ]}
      faq={[
        {
          question: 'A Intelsecsul atende Almirante Tamandaré?',
          answer: 'Sim, atendemos toda a cidade, incluindo Centro, Bom Fim, Cachoeira, Jardim Central e Lamenha Pequena.',
        },
        {
          question: 'Quanto tempo leva para agendar uma visita técnica em Almirante Tamandaré?',
          answer: 'Normalmente agendamos a visita técnica em poucos dias após o primeiro contato.',
        },
        {
          question: 'Vocês atendem residências afastadas do centro da cidade?',
          answer: 'Sim, atendemos toda a área urbana do município, não apenas a região central.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito em Almirante Tamandaré',
        text: 'Avaliamos o imóvel e apresentamos o projeto de segurança ideal para sua casa ou comércio.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      cityName="Almirante Tamandaré"
      citySlug="almirante-tamandare"
    />
  );
};
