import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';

export const ManutencaoPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Manutenção de Sistemas de Segurança em Curitiba | Intelsecsul"
      metaDescription="Manutenção preventiva e corretiva de câmeras, alarme, cerca elétrica e demais sistemas de segurança em Curitiba e região, de qualquer marca. Peça um orçamento."
      h1="Manutenção de sistemas de segurança em Curitiba e Região Metropolitana"
      introText="Realizamos manutenção preventiva e corretiva de câmeras, alarme monitorado, cerca elétrica, controle de acesso e demais sistemas de segurança eletrônica, independentemente de quem fez a instalação original."
      whenToHireTitle="Quando contratar manutenção"
      whenToHireText="A manutenção preventiva é indicada para evitar falhas antes que aconteçam, com revisões periódicas de cabos, conexões, baterias e configurações do sistema. Já a manutenção corretiva é necessária quando algum equipamento já apresenta falha, como câmeras sem imagem, alarme disparando sem motivo ou cerca elétrica sem tensão adequada. Também atendemos quem quer atualizar um sistema antigo, adicionar novos pontos de câmera ou substituir equipamentos ultrapassados por versões mais atuais."
      sintomasFrequentes={[
        {
          titulo: "Empresa que instalou o sistema de segurança sumiu ou não dá garantia",
          descricao: "Assunção imediata da manutenção do sistema existente com diagnóstico completo e contrato de suporte técnico continuado.",
        },
        {
          titulo: "Câmeras e alarmes de marcas diferentes que não se conversam",
          descricao: "Unificação dos sistemas sob a mesma plataforma e centralização do acesso no aplicativo do cliente.",
        },
        {
          titulo: "Nobreaks apitando constantemente e sem segurar carga",
          descricao: "Substituição de baterias seladas/estacionárias e calibração da placa inversora de carga.",
        },
        {
          titulo: "Sistema de segurança antigo legado sem peças de reposição",
          descricao: "Plano de migração gradual preservando o cabeamento reaproveitável para economizar custos.",
        },
        {
          titulo: "Fiação exposta, tubulação solta ou fios partidos pela ação do tempo",
          descricao: "Reorganização de rack de CFTV, passagem de tubulação blindada e etiquetagem dos cabos.",
        },
        {
          titulo: "Aparelhos queimando direto por causa de descargas elétricas e raios em Curitiba",
          descricao: "Instalação de protetores de surto (DPS), aterramento técnico e filtros de linha profissionais.",
        },
        {
          titulo: "Falta de manutenção preventiva gerando falhas em momentos críticos de assalto",
          descricao: "Contrato de manutenção periódica (mensal ou trimestral) com check-list completo de funcionamento.",
        },
        {
          titulo: "Imagens do CFTV borradas por sujeira nas lentes e poeira acumulada",
          descricao: "Limpeza técnica periódica dos blocos ópticos e domos com produtos anti-estáticos.",
        },
        {
          titulo: "Relatórios de acesso ou gravação com hora e data totalmente erradas",
          descricao: "Sincronização de horário NTP com servidores oficiais e substituição da bateria relógio (CR2032) do DVR.",
        },
        {
          titulo: "Controles e senhas de acesso desatualizados de ex-funcionários/moradores",
          descricao: "Auditoria de usuários, reset de credenciais e recadastro seguro da base de dados.",
        },
        {
          titulo: "Inexistência de projeto técnico ou mapa de tubulação do imóvel",
          descricao: "Levantamento estrutural, identificação de rotas de cabos e elaboração do desenho técnico 'As-Built'.",
        },
      ]}
      tiposAplicacaoTitle="Tipos e aplicações"
      tiposAplicacao={[
        {
          title: 'Manutenção preventiva',
          description: 'Revisões periódicas para evitar falhas e prolongar a vida útil dos equipamentos.',
        },
        {
          title: 'Manutenção corretiva',
          description: 'Reparo de equipamentos com defeito ou mau funcionamento.',
        },
        {
          title: 'Atualização de sistemas',
          description: 'Substituição de equipamentos antigos por versões mais atuais.',
        },
        {
          title: 'Ampliação de sistemas existentes',
          description: 'Adição de novos pontos de câmera, sensores ou controle de acesso.',
        },
      ]}
      diferenciais={[
        {
          title: 'Atendemos sistemas de qualquer marca',
          description: 'Não é preciso ter sido nós quem instalou originalmente.',
        },
        {
          title: 'Diagnóstico técnico completo',
          description: 'Identificamos a causa real do problema antes de qualquer reparo.',
        },
        {
          title: 'Equipe própria',
          description: 'Sem intermediários ou terceirização do atendimento técnico.',
        },
      ]}
      faq={[
        {
          question: 'Vocês fazem manutenção em sistemas instalados por outra empresa?',
          answer: 'Sim, atendemos sistemas de qualquer marca ou instalador, independentemente de quem fez a instalação original.',
        },
        {
          question: 'Com que frequência devo fazer a manutenção preventiva?',
          answer: 'Recomendamos uma revisão periódica ao menos uma vez ao ano, mas isso pode variar conforme o tipo de equipamento e o ambiente de instalação.',
        },
        {
          question: 'Quanto tempo leva para resolver uma manutenção corretiva?',
          answer: 'Depende do problema identificado; após o diagnóstico, informamos o prazo estimado para o reparo.',
        },
        {
          question: 'Vocês também atualizam sistemas antigos?',
          answer: 'Sim, podemos avaliar o sistema atual e propor atualizações ou substituição de equipamentos ultrapassados.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para manutenção',
        text: 'Avaliamos o sistema atual e apresentamos o diagnóstico e a solução necessária.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      serviceSlug="manutencao"
    />
  );
};
