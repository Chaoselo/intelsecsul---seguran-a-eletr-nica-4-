import React from 'react';
import { SegmentPageTemplate } from '../../../components/SegmentPageTemplate';

export const InterfoniaCondominioPage: React.FC = () => {
  return (
    <SegmentPageTemplate
      title="Interfonia e Vídeo-Porteiro para Condomínios em Curitiba | Intelsecsul"
      metaDescription="Instalação e manutenção de interfone e vídeo-porteiro para condomínios em Curitiba e região. Suporte a portaria remota. Peça um orçamento."
      h1="Interfone e vídeo-porteiro para condomínios em Curitiba e região"
      introText="Instalamos sistemas de interfonia integrados à portaria de condomínios, com opção de vídeo-porteiro para identificação visual de visitantes antes da liberação do acesso, incluindo projetos de portaria remota."
      destaques={[
        'Integração com a central da portaria',
        'Opção de vídeo-porteiro com identificação visual',
        'Suporte a projetos de portaria remota',
        'Adaptação à estrutura já existente do condomínio',
      ]}
      pillarLink={{
        url: '/servicos/interfonia/',
        label: 'Veja todos os detalhes sobre Interfonia',
      }}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para interfonia em condomínios',
        text: 'Avaliamos a estrutura do condomínio e indicamos o sistema de interfonia ou vídeo-porteiro ideal.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      segmentBadge="Condomínios"
    />
  );
};
