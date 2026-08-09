import React from 'react';
import { SegmentPageTemplate } from '../../../components/SegmentPageTemplate';

export const CamerasResidencialPage: React.FC = () => {
  return (
    <SegmentPageTemplate
      title="Câmeras de Segurança Residencial em Curitiba | Intelsecsul"
      metaDescription="Instalação de câmeras de segurança para casas e apartamentos em Curitiba e região. Acompanhe sua residência pelo celular. Peça um orçamento."
      h1="Câmeras de segurança para residências em Curitiba e região"
      introText="Projetamos sistemas de câmeras para casas e apartamentos com foco nos pontos mais vulneráveis do imóvel, como entrada, garagem, quintal e área de serviço. O objetivo é dar tranquilidade ao morador, com a possibilidade de acompanhar a casa pelo celular mesmo à distância, seja no trabalho ou em viagem."
      destaques={[
        'Cobertura dos pontos de entrada e áreas externas da casa',
        'Acesso pelo aplicativo, de qualquer lugar',
        'Discrição na instalação, sem prejudicar a estética do imóvel',
        'Projeto adaptado ao tamanho do terreno e da residência',
      ]}
      pillarLink={{
        url: '/servicos/cameras-de-seguranca',
        label: 'Veja todos os detalhes sobre Câmeras de Segurança',
      }}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para câmeras residenciais',
        text: 'Avaliamos o seu imóvel e apresentamos o projeto de câmeras de segurança ideal para a sua casa.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      segmentBadge="Residencial"
    />
  );
};
