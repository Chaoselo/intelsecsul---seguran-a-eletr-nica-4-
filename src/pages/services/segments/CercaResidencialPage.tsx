import React from 'react';
import { SegmentPageTemplate } from '../../../components/SegmentPageTemplate';

export const CercaResidencialPage: React.FC = () => {
  return (
    <SegmentPageTemplate
      title="Cerca Elétrica Residencial em Curitiba | Intelsecsul"
      metaDescription="Instalação de cerca elétrica para muros de casas e residências em Curitiba e região, com certificação e normas de segurança. Peça um orçamento."
      h1="Cerca elétrica residencial em Curitiba e região"
      introText="Instalamos cerca elétrica em muros de residências, com sinalização e dimensionamento conforme as normas de segurança, reforçando a proteção do perímetro da casa contra tentativas de invasão."
      destaques={[
        'Instalação sobre muros residenciais',
        'Sinalização e distâncias conforme normas de segurança',
        'Central com bateria reserva',
        'Pode ser integrada ao alarme e às câmeras já instalados',
      ]}
      pillarLink={{
        url: '/servicos/cerca-eletrica/',
        label: 'Veja todos os detalhes sobre Cerca Elétrica',
      }}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para cerca elétrica residencial',
        text: 'Avaliamos o seu muro e apresentamos a solução de cerca elétrica mais adequada para a sua residência.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      segmentBadge="Residencial"
    />
  );
};
