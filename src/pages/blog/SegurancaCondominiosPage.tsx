import React from 'react';
import { BlogPostTemplate } from '../../components/BlogPostTemplate';

export const SegurancaCondominiosPage: React.FC = () => {
  return (
    <BlogPostTemplate
      title="Segurança Eletrônica para Condomínios | Blog Intelsecsul"
      metaDescription="O que considerar antes de instalar câmeras, controle de acesso e portaria remota em condomínios residenciais e comerciais."
      h1="Segurança eletrônica para condomínios: o que considerar antes de instalar"
      category="Condomínios"
      readTime="5 min de leitura"
      publishedDate="[DATA DE PUBLICAÇÃO]"
      intro="Condomínios têm necessidades diferentes de uma residência isolada — várias unidades, áreas comuns, portaria e um fluxo maior de pessoas e veículos circulando todos os dias."
      sections={[
        {
          h2: 'Cobertura das áreas comuns e garagens',
          content:
            'O projeto de câmeras em um condomínio precisa cobrir portaria, garagens, áreas de lazer e o perímetro externo, sempre respeitando a privacidade das áreas privativas dos moradores.',
        },
        {
          h2: 'Integração entre câmeras e controle de acesso',
          content:
            'Combinar câmeras com controle de acesso por biometria, cartão ou reconhecimento facial reduz a dependência de porteiro presencial e facilita o registro de quem entra e sai do condomínio.',
        },
        {
          h2: 'Portaria remota como tendência',
          content:
            'Muitos condomínios estão migrando total ou parcialmente para portaria remota, monitorada à distância, como forma de reduzir custos com funcionários sem abrir mão do controle de acesso.',
        },
        {
          h2: 'Aprovação em assembleia e planejamento do orçamento',
          content:
            'Por envolver decisão coletiva, projetos de segurança em condomínios costumam passar por aprovação em assembleia. Ter um orçamento detalhado facilita a apresentação da proposta aos moradores.',
        },
      ]}
      ctaFinal={{
        title: 'Precisa de um projeto de segurança para o seu condomínio?',
        text: 'Avaliamos o condomínio e apresentamos um projeto completo, sem compromisso.',
        buttonText: 'Falar no WhatsApp agora',
      }}
    />
  );
};
