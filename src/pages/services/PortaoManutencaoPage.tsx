import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';

export const PortaoManutencaoPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Conserto e Manutenção de Portão Automático em Curitiba"
      metaDescription="Manutenção e conserto de portão automático em Curitiba: basculante, deslizante, pivotante e seccionado, todas as marcas. Diagnóstico gratuito pelo WhatsApp."
      h1="Manutenção e conserto de portão automático em Curitiba e Região Metropolitana"
      introText="Fazemos manutenção preventiva e conserto de portão automático, também chamado de portão eletrônico, em residências, condomínios e empresas. Atendemos todas as marcas e modelos de motor e todos os tipos de portão: basculante, deslizante, pivotante e seccionado. Descreva o problema pelo WhatsApp e receba um diagnóstico gratuito."
      whenToHireTitle="Quando chamar a manutenção do portão"
      whenToHireText="O portão automático é um dos equipamentos mais usados de uma casa ou empresa, e o desgaste aparece aos poucos: o portão fica mais lento, o motor faz barulho, o controle falha de vez em quando. Esperar quebrar costuma sair mais caro e deixa o imóvel aberto na pior hora, geralmente depois de um temporal ou de uma queda de energia. A manutenção preventiva revisa motor, trilho, cremalheira, placa, sensores e controles antes da falha. O conserto resolve o defeito que já apareceu, seja em motor deslizante, basculante, pivotante ou seccionado."
      sintomasFrequentesTitle="Defeitos e problemas comuns que consertamos"
      sintomasFrequentes={[
        {
          titulo: 'Portão lento, perdendo força ou parando no meio',
          descricao: 'Revisão do capacitor, do redutor, da cremalheira e do trilho, com ajuste da força do motor.',
        },
        {
          titulo: 'Motor liga, faz barulho, mas o portão não anda',
          descricao: 'Verificação das engrenagens, do acoplamento e do destravamento manual do motor.',
        },
        {
          titulo: 'Portão não responde ao controle remoto',
          descricao: 'Teste do receptor, da antena e do cadastro do controle, e troca ou reprogramação quando necessário.',
        },
        {
          titulo: 'Portão bate no fim do curso ou reabre sozinho',
          descricao: 'Regulagem do fim de curso e da sensibilidade que detecta obstáculo.',
        },
        {
          titulo: 'Portão basculante pesado ou descendo rápido demais',
          descricao: 'Revisão dos contrapesos, molas, cabos e roldanas. Por segurança, esse trabalho deve ser feito por técnico.',
        },
        {
          titulo: 'Portão seccionado com ruído, travando ou desalinhado',
          descricao: 'Ajuste de painéis, trilhos, roldanas e cabos, e verificação das molas.',
        },
        {
          titulo: 'Portão pivotante com folha caída ou braço solto',
          descricao: 'Reaperto e reforço da fixação do braço e alinhamento das folhas.',
        },
        {
          titulo: 'Placa queimada depois de temporal ou queda de energia',
          descricao: 'Diagnóstico da placa e da fonte, reparo ou troca, e proteção contra surtos.',
        },
        {
          titulo: 'Portão que não funciona sem energia',
          descricao: 'Orientação de destravamento manual e avaliação de bateria ou no-break para o motor.',
        },
        {
          titulo: 'Fotocélula ou sensor de segurança que não funciona',
          descricao: 'Limpeza, alinhamento e troca do sensor que evita o fechamento sobre pessoas ou carros.',
        },
      ]}
      tiposAplicacaoTitle="O que fazemos na manutenção preventiva"
      tiposAplicacao={[
        {
          title: 'Motor e redutor',
          description: 'Verificação de engrenagens, folgas, capacitor e aquecimento do motor.',
        },
        {
          title: 'Estrutura do portão',
          description: 'Trilhos, roldanas, cremalheira, dobradiças, cabos e molas, com lubrificação com produto adequado.',
        },
        {
          title: 'Placa e controles',
          description: 'Placa de comando, receptor, antena, controles remotos e cadastro dos controles.',
        },
        {
          title: 'Segurança',
          description: 'Fim de curso, sensibilidade de obstáculo, fotocélula, destravamento manual e sinalização.',
        },
        {
          title: 'Proteção elétrica',
          description: 'Fiação, aterramento e proteção contra surtos, para reduzir o risco de queimar a placa.',
        },
      ]}
      diferenciais={[
        {
          title: 'Todas as marcas e modelos',
          description: 'Atendemos portão deslizante, basculante, pivotante e seccionado, com motor de qualquer marca.',
        },
        {
          title: 'Diagnóstico gratuito pelo WhatsApp',
          description: 'Envie foto ou vídeo do problema e receba a orientação sem custo.',
        },
        {
          title: 'Atendimento de emergência',
          description: 'Em Curitiba e Região Metropolitana, mediante disponibilidade técnica e taxa.',
        },
        {
          title: 'Garantia de 3 meses nos serviços',
          description: 'Os serviços executados têm garantia de 3 meses.',
        },
      ]}
      crossLink={{
        text: 'Quer manutenção em todos os sistemas de segurança do imóvel?',
        linkText: 'Veja o contrato de manutenção',
        url: '/servicos/contrato-de-manutencao/',
      }}
      relatedLinks={[
        { label: 'Portão automático: instalação e automação', url: '/servicos/portao-automatico/' },
        { label: 'Controle remoto para portão automático: cópia e programação', url: '/servicos/controle-remoto-para-portao/' },
        { label: 'Contrato de manutenção de segurança eletrônica', url: '/servicos/contrato-de-manutencao/' },
      ]}
      faq={[
        {
          question: 'Quanto custa o conserto ou a manutenção do portão?',
          answer: 'O valor depende do defeito, do tipo de portão e das peças necessárias. Faça o diagnóstico gratuito pelo WhatsApp e solicite o orçamento: ele é feito caso a caso.',
        },
        {
          question: 'O diagnóstico pelo WhatsApp é gratuito?',
          answer: 'Sim. Descreva o problema, envie foto ou vídeo e orientamos sem custo. Se for necessário ir até o local, consulte a taxa de visita.',
        },
        {
          question: 'Vocês atendem todas as marcas e tipos de portão?',
          answer: 'Sim. Atendemos todas as marcas e modelos de motor e portão deslizante, basculante, pivotante e seccionado.',
        },
        {
          question: 'Meu portão parou de funcionar. O que posso verificar antes de chamar?',
          answer: 'Veja se há energia (disjuntor e tomada), se a pilha do controle está boa, se existe algo preso no trilho ou na folha e se o sensor de segurança está limpo. Se o portão continuar parado, não force o motor nem mexa em molas ou cabos de aço: chame a assistência técnica.',
        },
        {
          question: 'Como abrir o portão se acabar a energia?',
          answer: 'A maioria dos motores tem destravamento manual, com chave ou alavanca. Depois de destravar, o portão pode ser movido à mão. Se o destravamento não funcionar, chame um técnico para não forçar o equipamento.',
        },
        {
          question: 'Compensa consertar ou trocar o motor?',
          answer: 'Depende do estado do motor, do dimensionamento para o peso do portão e do tipo de defeito. No diagnóstico, informamos se compensa consertar ou trocar.',
        },
        {
          question: 'Com que frequência fazer a manutenção preventiva?',
          answer: 'Depende de quantas vezes o portão é acionado por dia. Em condomínios e empresas, é comum a revisão trimestral, que pode ser combinada em contrato de manutenção.',
        },
        {
          question: 'Vocês atendem emergência?',
          answer: 'Sim, em Curitiba e em toda a Região Metropolitana. Chamados urgentes são atendidos em até 12 horas, mediante disponibilidade técnica e cobrança de taxa.',
        },
        {
          question: 'O serviço tem garantia?',
          answer: 'Sim. Os serviços executados têm garantia de 3 meses.',
        },
        {
          question: 'Vocês fazem contrato de manutenção de portão para condomínio e empresa?',
          answer: 'Sim. O contrato inclui visitas preventivas e atendimento por chamado, para todos os sistemas de segurança do imóvel. Solicite um orçamento pelo WhatsApp.',
        },
      ]}
      ctaFinal={{
        title: 'Solicite um orçamento de manutenção de portão automático',
        text: 'Comece pelo diagnóstico gratuito pelo WhatsApp. O orçamento depende de cada caso.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      serviceSlug="portao-automatico/manutencao"
      canonicalPath="/servicos/portao-automatico/manutencao/"
    />
  );
};
