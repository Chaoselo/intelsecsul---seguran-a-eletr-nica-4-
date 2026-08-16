import React from 'react';
import { SegmentPageTemplate } from '../../../components/SegmentPageTemplate';

export const CamerasComercialPage: React.FC = () => {
  return (
    <SegmentPageTemplate
      title="Câmeras de Segurança Comercial em Curitiba | Intelsecsul"
      metaDescription="Instalação de câmeras de segurança para lojas, escritórios e empresas em Curitiba e região. Monitoramento local e remoto. Peça um orçamento."
      h1="Câmeras de segurança para comércios e empresas em Curitiba e região"
      introText="Instalamos sistemas de câmeras para lojas, escritórios e outros estabelecimentos comerciais, com cobertura de caixa, estoque, entrada de clientes e áreas externas. Além da segurança contra furtos, as câmeras também ajudam no acompanhamento de rotinas operacionais e no controle de fluxo de clientes."
      destaques={[
        'Cobertura de caixa, estoque e áreas de atendimento',
        'Gravação em nuvem ou local, conforme a necessidade do negócio',
        'Acesso remoto para acompanhar o comércio à distância',
        'Projeto adaptado ao layout do estabelecimento',
      ]}
      pillarLink={{
        url: '/servicos/cameras-de-seguranca/',
        label: 'Veja todos os detalhes sobre Câmeras de Segurança',
      }}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para câmeras comerciais',
        text: 'Avaliamos o seu estabelecimento e apresentamos o projeto de CFTV ideal para a sua empresa.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      segmentBadge="Comercial & Empresarial"
    />
  );
};
