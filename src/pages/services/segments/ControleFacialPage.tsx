import React from 'react';
import { SegmentPageTemplate } from '../../../components/SegmentPageTemplate';

export const ControleFacialPage: React.FC = () => {
  return (
    <SegmentPageTemplate
      title="Controle de Acesso por Reconhecimento Facial em Curitiba | Intelsecsul"
      metaDescription="Reconhecimento facial para portarias e recepções em Curitiba e região. Liberação sem contato e alta agilidade. Peça um orçamento."
      h1="Controle de acesso por reconhecimento facial em Curitiba e região"
      introText="Instalamos sistemas de reconhecimento facial para portarias, recepções e áreas restritas, uma alternativa sem contato físico que agiliza o fluxo de pessoas em horários de maior movimento."
      destaques={[
        'Identificação sem contato físico',
        'Agilidade em horários de pico',
        'Pode ser integrado a catracas e fechaduras eletromagnéticas',
        'Indicado para portarias, recepções e áreas corporativas',
      ]}
      pillarLink={{
        url: '/servicos/controle-de-acesso/',
        label: 'Veja todos os detalhes sobre Controle de Acesso',
      }}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para reconhecimento facial',
        text: 'Avaliamos o ambiente e indicamos os leitores faciais ideais para a sua portaria ou recepção.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      segmentBadge="Reconhecimento Facial"
    />
  );
};
