import React from 'react';
import { SegmentPageTemplate } from '../../../components/SegmentPageTemplate';

export const AlarmeResidencialPage: React.FC = () => {
  return (
    <SegmentPageTemplate
      title="Instalação e Manutenção de Alarme Residencial em Curitiba | IntelSec Sul"
      metaDescription="Instalação e manutenção de alarme para casas e apartamentos em Curitiba e região. Sensores de presença e alertas no celular. Peça um orçamento."
      h1="Instalação de alarme residencial em Curitiba e região"
      introText="Instalamos e realizamos manutenção em sistemas de alarme residenciais com sensores de presença e abertura para casas e apartamentos, com alertas instantâneos no celular. Proteja sua família e seu patrimônio com equipamentos de alta tecnologia."
      destaques={[
        'Sensores de presença e abertura em portas e janelas',
        'Notificação instantânea no celular pelo aplicativo',
        'Ativação e desativação remota pelo smartphone',
        'Bateria reserva para proteção em quedas de energia',
      ]}
      pillarLink={{
        url: '/servicos/instalacao-de-alarmes/',
        label: 'Veja todos os detalhes sobre Instalação e Manutenção de Alarmes',
      }}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para alarme residencial',
        text: 'Avaliamos o seu imóvel e apresentamos a solução de alarme monitorado ideal para a sua residência.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      segmentBadge="Residencial"
    />
  );
};
