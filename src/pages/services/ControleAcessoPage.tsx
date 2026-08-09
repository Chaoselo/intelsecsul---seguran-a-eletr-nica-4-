import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';

export const ControleAcessoPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Controle de Acesso em Curitiba | Biometria, Facial e Catracas | Intelsecsul"
      metaDescription="Instalação de sistemas de controle de acesso com biometria, cartão e reconhecimento facial em Curitiba e região. Para empresas, condomínios e residências. Peça um orçamento."
      h1="Controle de acesso em Curitiba e Região Metropolitana"
      introText="Projetamos e instalamos sistemas de controle de acesso para gerenciar quem entra e sai de residências, condomínios, empresas e indústrias, com biometria, cartões de aproximação, senha ou reconhecimento facial, integrados a portas, catracas e portões."
      whenToHireTitle="Quando contratar controle de acesso"
      whenToHireText="O controle de acesso é indicado sempre que é preciso saber e decidir quem pode entrar em determinada área, sem depender de porteiro ou chave física. É comum em condomínios que querem reduzir o fluxo de pessoas não identificadas, em empresas que precisam registrar o horário de entrada e saída de funcionários, em áreas restritas como salas de servidores ou almoxarifados, e em residências que buscam mais praticidade e segurança na entrada principal. Também é possível integrar o controle de acesso com câmeras e alarme, formando um sistema único de segurança."
      sintomasFrequentes={[
        {
          titulo: "Leitor facial não reconhece o rosto sob sol forte ou escuridão",
          descricao: "Ajuste de WDR da câmera facial, calibração de iluminação infravermelha e recadastro biométrico.",
        },
        {
          titulo: "Leitor biométrico falhando na leitura de dedos secos ou suados",
          descricao: "Limpeza do prisma óptico, substituição por leitores capacitivos de alta precisão e ajuste de tolerância.",
        },
        {
          titulo: "Tag/Adesivo veicular não abre a cancela ou portão na aproximação",
          descricao: "Calibração de antena UHF de longo alcance, ajuste de potência e substituição de tags danificadas.",
        },
        {
          titulo: "Cartão de aproximação RFID dando erro de 'Acesso Não Permitido'",
          descricao: "Sincronização do banco de dados de usuários, recadastro de cartões e checagem de permissões por setor.",
        },
        {
          titulo: "Trava eletroímã esquentando demais, chiando ou travada aberta",
          descricao: "Regulagem de tensão da fonte de alimentação de 12V e instalação de relé temporizado contra sobrecarga.",
        },
        {
          titulo: "Cancela de veículos descendo no teto do carro ou não baixando",
          descricao: "Calibração do laço indutivo magnético de piso, ajuste da fotocélula de segurança e tempo de fechamento.",
        },
        {
          titulo: "Catraca da recepção travada nos dois sentidos ou girando livre",
          descricao: "Troca do solenóide de destravamento, regulagem do sistema de amortecimento e sensores de rotação.",
        },
        {
          titulo: "Botoeira de saída (botão de liberação) com mau contato",
          descricao: "Substituição por botoeiras em inox de alta durabilidade ou botões com sensor de aproximação sem toque.",
        },
        {
          titulo: "Software de gerenciamento desconectado dos controladores da porta",
          descricao: "Reconfiguração de IP na rede local, teste de comunicação TCP/IP e atualização dos drivers.",
        },
        {
          titulo: "Perda de dados de novos moradores/colaboradores cadastrados",
          descricao: "Restauração de backup do banco de dados e sincronização da memória interna da central standalone.",
        },
        {
          titulo: "Mola hidráulica da porta batendo forte ou deixando a porta frestada",
          descricao: "Ajuste de velocidade de fechamento e força de engate no parafuso regulador do braço da mola.",
        },
        {
          titulo: "Falta de energia deixando as portas totalmente abertas ou travadas",
          descricao: "Instalação de No-break dedicado com bateria estacionária para garantir autonomia prolongada.",
        },
      ]}
      tiposAplicacaoTitle="Tipos e aplicações"
      tiposAplicacao={[
        {
          title: 'Biometria digital',
          description: 'Reconhecimento por impressão digital, indicado para controle de ponto e acesso de funcionários.',
        },
        {
          title: 'Reconhecimento facial',
          description: 'Identificação sem contato físico, cada vez mais usada em portarias e recepções.',
        },
        {
          title: 'Cartão de aproximação',
          description: 'Praticidade para liberar acesso com cartão ou tag, comum em condomínios e empresas.',
        },
        {
          title: 'Senha/teclado',
          description: 'Alternativa simples para áreas com menor fluxo de pessoas.',
        },
      ]}
      segmentLinks={[
        {
          title: 'Biometria Digital',
          description: 'Identificação por digital para controle de ponto e acesso de funcionários.',
          url: '/servicos/controle-de-acesso/biometria',
        },
        {
          title: 'Reconhecimento Facial',
          description: 'Liberação rápida sem contato físico para portarias e recepções corporativas.',
          url: '/servicos/controle-de-acesso/reconhecimento-facial',
        },
      ]}
      diferenciais={[
        {
          title: 'Integração com outros sistemas',
          description: 'Pode ser combinado com câmeras, alarme e catracas.',
        },
        {
          title: 'Relatórios de acesso',
          description: 'Registro de quem entrou e saiu, e em qual horário.',
        },
        {
          title: 'Suporte técnico especializado',
          description: 'Configuração e manutenção por equipe própria.',
        },
      ]}
      faq={[
        {
          question: 'O controle de acesso funciona sem internet?',
          answer: 'Sim, sistemas mais simples funcionam localmente; recursos como acesso remoto ou relatórios online dependem de conexão com a internet.',
        },
        {
          question: 'É possível cadastrar vários usuários no sistema?',
          answer: 'Sim, é possível cadastrar quantos usuários forem necessários, com diferentes níveis de permissão.',
        },
        {
          question: 'Dá para integrar o controle de acesso com as câmeras já instaladas?',
          answer: 'Sim, é possível integrar o controle de acesso a câmeras e outros sistemas de segurança existentes.',
        },
        {
          question: 'Qual a diferença entre biometria e reconhecimento facial?',
          answer: 'A biometria identifica pela impressão digital, exigindo contato físico; o reconhecimento facial identifica pela câmera, sem contato, o que agiliza o fluxo em horários de pico.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para controle de acesso',
        text: 'Avaliamos o local e apresentamos a solução de controle de acesso mais adequada.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      serviceSlug="controle-de-acesso"
    />
  );
};
