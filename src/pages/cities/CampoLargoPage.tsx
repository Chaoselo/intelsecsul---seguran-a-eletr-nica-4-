import React from 'react';
import { CityPageTemplate } from '../../components/CityPageTemplate';

export const CampoLargoPage: React.FC = () => {
  return (
    <CityPageTemplate
      title="Segurança Eletrônica em Campo Largo PR | Câmeras e Alarme Monitorado | Intelsecsul"
      metaDescription="Instalação de câmeras, alarme monitorado, cerca elétrica e controle de acesso em Campo Largo. Atendimento residencial, comercial e industrial. Peça um orçamento."
      h1="Segurança eletrônica em Campo Largo"
      introText="A Intelsecsul atende Campo Largo com instalação e manutenção de câmeras de segurança, alarme monitorado, cerca elétrica e controle de acesso, cobrindo bairros como Centro, Rondinha, São Francisco e Vila Bancária. Conhecida como a Capital da Louça pela forte presença de indústrias cerâmicas, Campo Largo também tem uma demanda relevante por controle de acesso e CFTV para empresas e galpões, além dos projetos residenciais."
      servicosDestaque={[
        {
          name: 'Câmeras de Segurança',
          slug: 'cameras-de-seguranca',
          description: 'Sistemas de CFTV de alta definição para monitoramento residencial, comercial e industrial.',
        },
        {
          name: 'Controle de Acesso',
          slug: 'controle-de-acesso',
          description: 'Gerenciamento de acesso por biometria, cartão e reconhecimento facial para empresas e galpões.',
        },
        {
          name: 'Instalação de Alarmes',
          slug: 'instalacao-de-alarmes',
          description: 'Proteção perimetral e interna com sensores e alertas instantâneos no celular.',
        },
        {
          name: 'Locação de Equipamentos de Segurança',
          slug: 'locacao-de-equipamentos-de-seguranca',
          description: 'Aluguel de câmeras e alarme sem investimento inicial e com manutenção preventiva inclusa.',
        },
      ]}
      faq={[
        {
          question: 'A Intelsecsul atende empresas em Campo Largo?',
          answer: 'Sim, atendemos residências, comércios e empresas em toda a cidade, incluindo projetos industriais.',
        },
        {
          question: 'Quais bairros de Campo Largo vocês atendem?',
          answer: 'Atendemos toda a cidade, incluindo Centro, Rondinha, São Francisco e Vila Bancária.',
        },
        {
          question: 'Quanto tempo leva para agendar uma visita técnica em Campo Largo?',
          answer: 'Normalmente agendamos a visita técnica em poucos dias após o primeiro contato.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito em Campo Largo',
        text: 'Avaliamos o imóvel ou a empresa e apresentamos o projeto de segurança ideal.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      cityName="Campo Largo"
      citySlug="campo-largo"
    />
  );
};
