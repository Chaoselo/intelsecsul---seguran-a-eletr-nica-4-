import React from 'react';
import { BlogPostTemplate } from '../../components/BlogPostTemplate';

export const SegurancaEmpresasPage: React.FC = () => {
  return (
    <BlogPostTemplate
      title="Segurança para Empresas e Indústrias | Blog Intelsecsul"
      metaDescription="Cuidados na hora de projetar CFTV e controle de acesso para empresas, galpões e indústrias."
      h1="Segurança para empresas e indústrias: cuidados no projeto de CFTV e controle de acesso"
      category="Empresas & Indústrias"
      readTime="4 min de leitura"
      publishedDate="[DATA DE PUBLICAÇÃO]"
      intro="Empresas e indústrias lidam com perímetros maiores, fluxo de funcionários e visitantes, e muitas vezes ativos de alto valor, o que exige um projeto de segurança mais robusto do que o residencial."
      sections={[
        {
          h2: 'Mapeie as áreas mais críticas primeiro',
          content:
            'Antes de definir os equipamentos, identifique os pontos mais sensíveis: almoxarifado, sala de servidores, entrada de caminhões, áreas de carga e descarga. Esses pontos costumam merecer atenção prioritária no projeto.',
        },
        {
          h2: 'Controle de acesso por níveis de permissão',
          content:
            'Nem todo funcionário precisa ter acesso a todas as áreas. Um sistema de controle de acesso bem planejado define permissões diferentes por setor, turno ou cargo.',
        },
        {
          h2: 'CFTV interno e externo trabalhando juntos',
          content:
            'Câmeras externas monitoram o perímetro e a movimentação de veículos, enquanto câmeras internas acompanham áreas de estoque, produção e circulação de pessoas.',
        },
        {
          h2: 'Equipe técnica local faz diferença na manutenção',
          content:
            'Empresas que não podem parar a operação por muito tempo se beneficiam de ter um fornecedor com equipe técnica local, capaz de atender rapidamente em caso de falha em algum equipamento.',
        },
      ]}
      ctaFinal={{
        title: 'Precisa de um projeto de segurança para sua empresa ou indústria?',
        text: 'Avaliamos o local e apresentamos uma proposta sob medida.',
        buttonText: 'Falar no WhatsApp agora',
      }}
    />
  );
};
