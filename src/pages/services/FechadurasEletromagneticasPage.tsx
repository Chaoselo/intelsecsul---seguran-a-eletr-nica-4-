import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';

export const FechadurasEletromagneticasPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Fechaduras Eletromagnéticas em Curitiba | Travamento Eletrônico | Intelsecsul"
      metaDescription="Instalação de fechaduras eletromagnéticas para portas de áreas restritas em Curitiba e região, integradas ao controle de acesso. Peça um orçamento."
      h1="Fechaduras eletromagnéticas em Curitiba e Região Metropolitana"
      introText="Instalamos fechaduras eletromagnéticas para travamento eletrônico de portas em áreas restritas, integradas a sistemas de controle de acesso por biometria, cartão ou senha."
      whenToHireTitle="Quando instalar fechadura eletromagnética"
      whenToHireText="As fechaduras eletromagnéticas são indicadas para portas de áreas que precisam de controle rígido de acesso, como salas de servidores, almoxarifados, salas de reunião, laboratórios ou áreas restritas de condomínios e empresas. Diferente de uma fechadura convencional, elas são liberadas eletronicamente, o que permite integrar o travamento a um sistema de controle de acesso e manter um registro de quem entrou em cada ambiente."
      sintomasFrequentes={[
        {
          titulo: "Eletroímã fraco e abrindo com um empurrão leve",
          descricao: "Limpeza da placa de atração (bloco de atrito), alinhamento de suporte ZL e regulagem de tensão 12V.",
        },
        {
          titulo: "Porta de vidro/madeira desalinhada raspando no batente e não trancando",
          descricao: "Ajuste e regulagem de pivôs de porta de vidro, dobradiças e alinhamento do suporte do magneto.",
        },
        {
          titulo: "Fechadura eletromagnética fazendo barulho de zumbido contínuo/chiado",
          descricao: "Substituição da fonte de alimentação com ruído AC por fonte chaveada com saída DC regulada.",
        },
        {
          titulo: "Fechadura soltando sozinha durante o dia e deixando a porta destravada",
          descricao: "Troca do relé da placa de acionamento por falha de retenção de corrente.",
        },
        {
          titulo: "Porta destravada mas o leitor biométrico/cartão continua dando sinal verde",
          descricao: "Verificação da fiação do sensor de estado da porta (reed switch interno do eletroímã).",
        },
        {
          titulo: "Botoeira de saída não liberta o eletroímã quando pressionada",
          descricao: "Troca do micro-switch da botoeira e checagem do circuito de interrupção NC (Normalmente Fechado).",
        },
        {
          titulo: "Eletroímã esquentando excessivamente até queimar a pintura da porta",
          descricao: "Dimensionamento da voltagem da fonte (redução de 15V para 12V estáveis) e troca do eletroímã danificado.",
        },
        {
          titulo: "Porta de emergência com fechadura eletromagnética travada durante queda de energia",
          descricao: "Instalação de no-break dedicado e botoeira de emergência do tipo 'Quebre o Vidro' (Fail-Safe).",
        },
        {
          titulo: "Fechadura solenóide com pino emperrado dentro do orifício do batente",
          descricao: "Desmontagem, limpeza do cilindro de passagem do pino de aço e lubrificação com grafite.",
        },
        {
          titulo: "Fechadura elétrica HDL com barulho seco de 'estalo' mas sem abrir a porta",
          descricao: "Troca da bobina elétrica de pulso e ajuste da pressão da mola do batente mecânico.",
        },
      ]}
      tiposAplicacaoTitle="Tipos e aplicações"
      tiposAplicacao={[
        {
          title: 'Fechadura eletromagnética de sobrepor',
          description: 'Instalada na parte superior da porta, com alta força de travamento.',
        },
        {
          title: 'Fechadura eletromagnética embutida',
          description: 'Instalação mais discreta, indicada para portas onde a estética é importante.',
        },
        {
          title: 'Integração com biometria ou cartão',
          description: 'Libera a porta apenas para usuários autorizados.',
        },
        {
          title: 'Botoeira de emergência',
          description: 'Permite liberar a porta manualmente em situações de emergência.',
        },
      ]}
      diferenciais={[
        {
          title: 'Integração com controle de acesso',
          description: 'Funciona junto com biometria, cartão ou senha.',
        },
        {
          title: 'Instalação conforme normas de segurança',
          description: 'Inclui botoeira de emergência para evitar bloqueios em situações de risco.',
        },
        {
          title: 'Suporte técnico especializado',
          description: 'Manutenção e ajustes realizados pela equipe própria.',
        },
      ]}
      faq={[
        {
          question: 'A fechadura eletromagnética é segura em caso de falta de energia?',
          answer: 'Sim, projetos bem dimensionados incluem botoeira de emergência e, quando necessário, bateria reserva para evitar o travamento indevido da porta.',
        },
        {
          question: 'É possível integrar a fechadura eletromagnética à biometria já instalada?',
          answer: 'Sim, é possível integrar a fechadura a sistemas de biometria, cartão ou reconhecimento facial já existentes.',
        },
        {
          question: 'Qual a diferença entre fechadura de sobrepor e embutida?',
          answer: 'A de sobrepor é instalada na superfície da porta e tem maior força de travamento; a embutida é mais discreta esteticamente.',
        },
        {
          question: 'A instalação exige algum tipo de norma de segurança?',
          answer: 'Sim, é necessário prever uma forma de liberação manual em emergências, como uma botoeira, para garantir a saída segura das pessoas.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para fechaduras eletromagnéticas',
        text: 'Avaliamos o ambiente e indicamos a solução de travamento eletrônico mais adequada.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      serviceSlug="fechaduras-eletromagneticas"
    />
  );
};
