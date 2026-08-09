import React from 'react';
import { SegmentPageTemplate } from '../../../components/SegmentPageTemplate';

export const CamerasCondominioPage: React.FC = () => {
  return (
    <SegmentPageTemplate
      title="Câmeras de Segurança para Condomínios em Curitiba | Intelsecsul"
      metaDescription="Sistemas de CFTV para portaria, garagens e áreas comuns de condomínios em Curitiba e região. Integração e acompanhamento remoto. Peça um orçamento."
      h1="Câmeras de segurança para condomínios em Curitiba e região"
      introText="Projetamos sistemas de CFTV para áreas comuns, portaria, garagens e perímetro de condomínios residenciais e comerciais, com possibilidade de integração ao controle de acesso e acompanhamento remoto pelo síndico ou pela administradora."
      destaques={[
        'Cobertura de portaria, garagens e áreas comuns',
        'Integração com o controle de acesso do condomínio',
        'Acesso remoto para síndico e administradora',
        'Projeto dimensionado para o perímetro do condomínio',
      ]}
      pillarLink={{
        url: '/servicos/cameras-de-seguranca',
        label: 'Veja todos os detalhes sobre Câmeras de Segurança',
      }}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para câmeras em condomínios',
        text: 'Avaliamos o condomínio e apresentamos o projeto de câmeras e CFTV ideal.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      segmentBadge="Condomínios"
    />
  );
};
