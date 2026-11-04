import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';

export const ContratoManutencaoPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Contrato de Manutenção de Segurança Eletrônica | Intelsecsul"
      metaDescription="Contrato de manutenção preventiva e corretiva de câmeras, portões, cerca elétrica, alarme e controle de acesso em Curitiba. Solicite seu orçamento."
      h1="Contrato de manutenção de sistemas de segurança eletrônica em Curitiba e Região Metropolitana"
      introText="Contrato de manutenção da Intelsecsul para residências, comércios, empresas e condomínios: visitas preventivas periódicas e atendimento corretivo por chamado para câmeras, portões automáticos, cerca elétrica, alarmes, controle de acesso, interfones, portas automáticas, cancelas e catracas, de todas as marcas."
      whenToHireTitle="Quando vale a pena ter um contrato de manutenção"
      whenToHireText="Sistemas de segurança costumam falhar quando mais se precisa deles: depois de uma queda de energia, de um temporal ou de meses sem revisão. Com o contrato, a manutenção preventiva acontece em intervalos definidos e, se algo falhar, o chamado já tem prazo de atendimento combinado. É indicado para condomínios, empresas e comércios que não podem ficar sem câmera, portão ou controle de acesso, e para residências que querem previsibilidade. Você também pode começar pelo diagnóstico gratuito pelo WhatsApp."
      sintomasFrequentesTitle="Situações em que o contrato resolve"
      sintomasFrequentes={[
        {
          titulo: 'Portão que só é consertado depois que para de funcionar',
          descricao: 'Visitas preventivas verificam motor, placa, cabos e lubrificação antes da falha.',
        },
        {
          titulo: 'Câmeras que gravam mal ou ficam sem imagem sem ninguém perceber',
          descricao: 'Revisão periódica de câmeras, DVR/NVR, HD, cabos e fontes, com teste de gravação.',
        },
        {
          titulo: 'Cerca elétrica que dispara à toa ou perde força',
          descricao: 'Inspeção da central, bateria, hastes, isoladores e aterramento.',
        },
        {
          titulo: 'Sistema instalado por outra empresa, sem suporte',
          descricao: 'Assumimos a manutenção do sistema existente, de qualquer marca.',
        },
        {
          titulo: 'Condomínio sem rotina de manutenção da portaria',
          descricao: 'Contrato que cobre portões, interfones, cancelas, catracas e controle de acesso, com relatório de cada visita.',
        },
        {
          titulo: 'Falha urgente fora da rotina',
          descricao: 'Chamado emergencial atendido em até 12 horas, sujeito a disponibilidade técnica e a taxa.',
        },
      ]}
      tiposAplicacaoTitle="O que o contrato inclui"
      tiposAplicacao={[
        {
          title: 'Visitas preventivas',
          description: 'Em geral trimestrais. A frequência é definida conforme o tamanho do local e a quantidade de equipamentos.',
        },
        {
          title: 'Atendimento corretivo por chamado',
          description: 'Mão de obra para atender os chamados quando surgir um problema. Prazo de até 48 horas úteis para chamados comuns.',
        },
        {
          title: 'Atendimento emergencial',
          description: 'Chamados urgentes em até 12 horas, mediante verificação de disponibilidade técnica e cobrança de taxa. Atendemos Curitiba e toda a Região Metropolitana.',
        },
        {
          title: 'Relatório com checklist',
          description: 'Ao final de cada atendimento, entregamos relatório com checklist do que foi verificado.',
        },
        {
          title: 'Peças e equipamentos',
          description: 'Cobrados à parte. O contrato cobre a mão de obra.',
        },
      ]}
      diferenciais={[
        {
          title: 'Todos os serviços de segurança eletrônica',
          description: 'Câmeras, portões, cerca elétrica, alarmes, controle de acesso, interfones, portas automáticas, cancelas e catracas.',
        },
        {
          title: 'Todas as marcas e modelos',
          description: 'Atendemos sistemas de qualquer marca, mesmo os instalados por outra empresa.',
        },
        {
          title: 'Diagnóstico gratuito pelo WhatsApp',
          description: 'Descreva o problema e comece o atendimento sem custo.',
        },
        {
          title: 'Garantia de 3 meses nos serviços',
          description: 'Os serviços executados têm garantia de 3 meses.',
        },
      ]}
      faq={[
        {
          question: 'Para quem é o contrato de manutenção?',
          answer: 'Para residências, comércios, empresas e condomínios.',
        },
        {
          question: 'Quais serviços entram no contrato?',
          answer: 'Todos os serviços de segurança eletrônica que instalamos e mantemos: câmeras, portões automáticos, cerca elétrica, alarmes, controle de acesso, interfones e videoporteiro, portas automáticas, cancelas e catracas.',
        },
        {
          question: 'Com que frequência são as visitas preventivas?',
          answer: 'Em geral, a cada três meses (trimestral). A frequência é definida conforme o tamanho do local e a quantidade de equipamentos.',
        },
        {
          question: 'O contrato inclui peças e equipamentos?',
          answer: 'Não. O contrato cobre a mão de obra das visitas preventivas e dos atendimentos por chamado. Peças e equipamentos são cobrados à parte.',
        },
        {
          question: 'Qual o prazo de atendimento?',
          answer: 'Chamados comuns são atendidos em até 48 horas úteis. Chamados emergenciais de urgência são atendidos em até 12 horas, mediante verificação de disponibilidade técnica e cobrança de taxa.',
        },
        {
          question: 'Qual a duração do contrato e como funciona a rescisão?',
          answer: 'O prazo mínimo é de 12 meses, e pode ser estendido conforme a necessidade do cliente. Em caso de rescisão antecipada, há aviso prévio e multa proporcional.',
        },
        {
          question: 'Vocês entregam relatório das visitas?',
          answer: 'Sim. Ao final do atendimento, entregamos relatório com checklist.',
        },
        {
          question: 'Vocês atendem sistemas instalados por outra empresa?',
          answer: 'Sim. Atendemos todas as marcas e modelos, independentemente de quem fez a instalação.',
        },
        {
          question: 'Quanto custa o contrato de manutenção?',
          answer: 'O valor depende do tamanho do local, da quantidade de equipamentos e da frequência das visitas. Solicite um orçamento pelo WhatsApp.',
        },
        {
          question: 'Como começo?',
          answer: 'Chame a Intelsecsul no WhatsApp para um diagnóstico gratuito. Se for necessário ir até o local, consulte a taxa de visita.',
        },
      ]}
      ctaFinal={{
        title: 'Solicite um orçamento de contrato de manutenção',
        text: 'Conte quais sistemas você tem e o tamanho do local. O orçamento depende de cada caso.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      relatedLinks={[
        { label: 'Manutenção de sistemas de segurança', url: '/servicos/manutencao/' },
        { label: 'Aluguel de câmeras de segurança (manutenção incluída)', url: '/servicos/aluguel-de-cameras-de-seguranca/' },
        { label: 'Atendemos toda a Região Metropolitana', url: '/cidades/' },
      ]}
      serviceSlug="manutencao"
      canonicalPath="/servicos/contrato-de-manutencao/"
    />
  );
};
