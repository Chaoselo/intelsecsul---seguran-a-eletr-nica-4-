import React from 'react';
import { CityPageTemplate } from '../../components/CityPageTemplate';

export const FazendaRioGrandePage: React.FC = () => {
  return (
    <CityPageTemplate
      title="Segurança Eletrônica em Fazenda Rio Grande PR | Câmeras e Alarme | Intelsecsul"
      metaDescription="Instalação de câmeras, alarme monitorado, cerca elétrica e controle de acesso em Fazenda Rio Grande. Atendimento residencial e comercial. Peça um orçamento."
      h1="Segurança eletrônica em Fazenda Rio Grande"
      introText="A Intelsecsul atende Fazenda Rio Grande com instalação e manutenção de câmeras de segurança, alarme monitorado, cerca elétrica e controle de acesso, cobrindo bairros como Pioneiros, Eucaliptos, Estados, Nações e Iguaçu. Por ser uma cidade jovem e em crescimento acelerado na Região Metropolitana, com forte presença de condomínios fechados, atendemos tanto residências isoladas quanto projetos de controle de acesso para condomínios."
      servicosDestaque={[
        {
          name: 'Câmeras de Segurança',
          slug: 'cameras-de-seguranca',
          description: 'CFTV com gravação em nuvem ou DVR e acesso remoto em tempo real pelo celular.',
        },
        {
          name: 'Controle de Acesso',
          slug: 'controle-de-acesso',
          description: 'Projetos completos de portaria e controle de acesso de moradores e visitantes em condomínios.',
        },
        {
          name: 'Interfonia e Automação de Portões',
          slug: 'interfonia',
          description: 'Sistemas modernos de interfonia e automação para residências e condomínios fechados.',
        },
        {
          name: 'Locação de Câmeras e Equipamentos de Segurança',
          slug: 'locacao-de-cameras-de-seguranca',
          description: 'Segurança completa por mensalidade sem investimento inicial e sem taxa de instalação.',
        },
      ]}
      faq={[
        {
          question: 'A Intelsecsul atende condomínios em Fazenda Rio Grande?',
          answer: 'Sim, temos experiência em projetos de controle de acesso e CFTV para condomínios fechados na cidade.',
        },
        {
          question: 'Quais bairros de Fazenda Rio Grande vocês atendem?',
          answer: 'Atendemos toda a cidade, incluindo Pioneiros, Eucaliptos, Estados, Nações e Iguaçu.',
        },
        {
          question: 'Quanto tempo leva para agendar uma visita técnica em Fazenda Rio Grande?',
          answer: 'Normalmente agendamos a visita técnica em poucos dias após o primeiro contato.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito em Fazenda Rio Grande',
        text: 'Avaliamos o imóvel ou o condomínio e apresentamos o projeto de segurança ideal.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      cityName="Fazenda Rio Grande"
      citySlug="fazenda-rio-grande"
    />
  );
};
