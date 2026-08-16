import React from 'react';
import { SegmentPageTemplate } from '../../../components/SegmentPageTemplate';

export const ControleBiometriaPage: React.FC = () => {
  return (
    <SegmentPageTemplate
      title="Controle de Acesso por Biometria em Curitiba | Intelsecsul"
      metaDescription="Instalação de leitores biométricos para empresas e condomínios em Curitiba e região. Gestão de fluxo de pessoas. Peça um orçamento."
      h1="Controle de acesso por biometria em Curitiba e região"
      introText="Instalamos sistemas de controle de acesso por biometria digital, indicados para empresas que precisam registrar o horário de entrada e saída de funcionários ou restringir o acesso a áreas específicas com segurança e praticidade."
      destaques={[
        'Reconhecimento por impressão digital',
        'Ideal para controle de ponto e áreas restritas',
        'Cadastro de múltiplos usuários com diferentes permissões',
        'Relatórios de acesso por data e horário',
      ]}
      pillarLink={{
        url: '/servicos/controle-de-acesso/',
        label: 'Veja todos os detalhes sobre Controle de Acesso',
      }}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para controle de acesso por biometria',
        text: 'Avaliamos o local e apresentamos a solução de biometria mais adequada para a sua empresa ou condomínio.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      segmentBadge="Biometria Digital"
    />
  );
};
