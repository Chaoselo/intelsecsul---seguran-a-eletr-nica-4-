import React from 'react';
import { SegmentPageTemplate } from '../../../components/SegmentPageTemplate';

export const CercaCondominioPage: React.FC = () => {
  return (
    <SegmentPageTemplate
      title="Cerca Elétrica para Condomínios em Curitiba | Intelsecsul"
      metaDescription="Proteção perimetral com cerca elétrica para condomínios residenciais e comerciais em Curitiba e região. Peça um orçamento."
      h1="Cerca elétrica para condomínios em Curitiba e região"
      introText="Projetamos cerca elétrica para perímetros extensos de condomínios residenciais e comerciais, integrada ao sistema de segurança da portaria, reforçando a proteção das áreas externas e de fundo do terreno."
      destaques={[
        'Dimensionamento para perímetros extensos',
        'Integração com a portaria e o controle de acesso',
        'Sinalização conforme normas de segurança',
        'Manutenção periódica para garantir o funcionamento',
      ]}
      pillarLink={{
        url: '/servicos/cerca-eletrica',
        label: 'Veja todos os detalhes sobre Cerca Elétrica',
      }}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para cerca elétrica em condomínios',
        text: 'Avaliamos o perímetro do condomínio e apresentamos o projeto de cerca elétrica ideal.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      segmentBadge="Condomínios"
    />
  );
};
