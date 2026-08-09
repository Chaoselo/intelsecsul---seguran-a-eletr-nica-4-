import React from 'react';
import { SegmentPageTemplate } from '../../../components/SegmentPageTemplate';

export const AlarmeEmpresarialPage: React.FC = () => {
  return (
    <SegmentPageTemplate
      title="Instalação e Manutenção de Alarme Empresarial em Curitiba | IntelSec Sul"
      metaDescription="Sistemas de alarme para empresas, lojas e galpões em Curitiba e região. Instalação e assistência técnica especializada. Peça um orçamento."
      h1="Instalação de alarme empresarial em Curitiba e região"
      introText="Projetamos, instalamos e mantemos sistemas de alarme para empresas, comércios e galpões. Sensores perimétricos e de presença dimensionados para grandes áreas, com alertas instantâneos no celular e integração com câmeras."
      destaques={[
        'Sensores dimensionados para áreas comerciais e industriais',
        'Notificações instantâneas e controle via aplicativo',
        'Integração com sistemas de câmeras CFTV e controle de acesso',
        'Manutenção preventiva, corretiva e suporte técnico próprio',
      ]}
      pillarLink={{
        url: '/servicos/instalacao-de-alarmes',
        label: 'Veja todos os detalhes sobre Instalação e Manutenção de Alarmes',
      }}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para alarme empresarial',
        text: 'Avaliamos o seu comércio ou empresa e apresentamos a solução de alarme ideal.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      segmentBadge="Empresarial & Comercial"
    />
  );
};
