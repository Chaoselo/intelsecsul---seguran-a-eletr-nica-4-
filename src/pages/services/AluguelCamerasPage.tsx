import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';

export const AluguelCamerasPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Aluguel de Câmeras de Segurança em Curitiba | Intelsecsul"
      metaDescription="Aluguel de câmeras de segurança IP em Curitiba a partir de R$ 249 por mês por ponto, com instalação e manutenção incluídas e sem investimento inicial."
      h1="Aluguel de Câmeras de Segurança e CFTV em Curitiba sem Investimento Inicial"
      introText="Oferecemos o aluguel de câmeras de segurança (CFTV) IP com zero investimento inicial e zero taxa de instalação. No aluguel da Intelsecsul, você conta com mensalidade a partir de R$ 249 por mês por ponto de câmera IP, com instalação, manutenção preventiva, manutenção corretiva, troca de HD e acesso pelo celular e computador inclusos."
      whenToHireTitle="Quando optar pelo aluguel de câmeras de segurança"
      whenToHireText={`O aluguel de câmeras de segurança IP é a opção ideal para condomínios, empresas, comércios, indústrias, obras e residências que buscam monitoramento profissional sem imobilizar capital em compra de equipamentos.

Quanto custa:
A partir de R$ 249 por mês por ponto de câmera IP. O valor final depende do prazo do contrato e do tipo de projeto. Projetos comerciais e industriais podem ter valor maior, conforme a infraestrutura. O valor exato é definido na visita técnica.

Prazos de contrato:
Trabalhamos com contratos de 6, 12, 24 ou 36 meses, conforme o seu projeto. Obras e canteiros costumam ter contratos de 6 a 12 meses. Empresas costumam ter contratos de 24 a 36 meses. Cada caso é analisado individualmente. Em caso de rescisão antecipada, é cobrada multa proporcional. Ao final, retiramos o equipamento sem taxa.

O que está incluso na mensalidade:
Todos os equipamentos do sistema: câmeras, gravador (NVR), HD, switch PoE e demais itens necessários. Instalação, manutenção preventiva, manutenção corretiva, troca de HD, acesso pelo celular e pelo computador. Manutenção emergencial sujeita a disponibilidade da equipe e a taxa. Gravação em nuvem é plano à parte, sob consulta. Câmeras 4G ou solares, sob consulta.

Prazo de início:
Seu projeto começa em até 5 dias após a assinatura do contrato. O prazo exato depende do tamanho do projeto e da disponibilidade da equipe técnica.`}
      sintomasFrequentes={[
        {
          titulo: "Câmeras antigas que vivem com defeito ou imagem ruim",
          descricao: "Substituição completa por câmeras IP modernas sem necessidade de compra dos aparelhos.",
        },
        {
          titulo: "Gasto imprevisto com substituição de HD ou câmeras queimadas",
          descricao: "Troca de HD e manutenção corretiva já estão incluídas na mensalidade do aluguel.",
        },
        {
          titulo: "Falta de caixa para investimento inicial alto em segurança",
          descricao: "Zero investimento inicial e taxa de instalação zero para proteger seu imóvel imediatamente.",
        },
        {
          titulo: "Empresa que instalou sumiu e deixou o sistema sem suporte",
          descricao: "Atendimento contínuo com equipe técnica própria durante toda a vigência do contrato.",
        },
        {
          titulo: "Necessidade de monitoramento temporário para obras e canteiros",
          descricao: "Contratos de 6 a 12 meses sob medida para canteiros de obras e projetos temporários.",
        },
        {
          titulo: "Dificuldade para deduzir despesas no Imposto de Renda empresarial",
          descricao: "Classificação como despesa operacional (Opex), facilitando a gestão contábil e fiscal.",
        },
        {
          titulo: "Imagens com ruído e cabeamento deteriorado pelo tempo",
          descricao: "Passagem de cabeamento estruturado e infraestrutura inclusos no projeto de aluguel.",
        },
        {
          titulo: "Síndico ou gestor sobrecarregado com manutenção de CFTV",
          descricao: "Manutenções preventiva e corretiva realizadas periodicamente pela equipe da Intelsecsul.",
        },
      ]}
      tiposAplicacaoTitle="Condições Comerciais e Benefícios do Aluguel"
      tiposAplicacao={[
        {
          title: 'A Partir de R$ 249/mês por Ponto de Câmera IP',
          description: 'Valor final definido conforme o prazo do contrato e a infraestrutura do imóvel após a visita técnica.',
        },
        {
          title: 'Prazos Contratuais de 6, 12, 24 ou 36 Meses',
          description: 'Obras costumam ficar entre 6 e 12 meses; empresas entre 24 e 36 meses. Em caso de rescisão antecipada, é cobrada multa proporcional.',
        },
        {
          title: 'Instalação e Manutenções Inclusas',
          description: 'Instalação inicial, manutenção preventiva, corretiva e troca de HD inclusas. Emergencial sujeita a taxa e disponibilidade.',
        },
        {
          title: 'Sem Investimento Inicial e Retirada sem Taxa',
          description: 'Sem custo de aquisição ou taxa de instalação. Ao final do contrato, o equipamento é retirado sem custo adicional.',
        },
      ]}
      diferenciais={[
        {
          title: 'Início em até 5 Dias',
          description: 'Seu projeto começa em até 5 dias após a assinatura do contrato, conforme disponibilidade e escopo.',
        },
        {
          title: 'Acesso pelo Celular e Computador',
          description: 'Acompanhe as imagens em tempo real de qualquer lugar, com aplicativo configurado pela nossa equipe.',
        },
        {
          title: 'Equipe Técnica Própria em Curitiba e RMC',
          description: 'Técnicos especializados para vistorias, manutenções preventivas e suporte sem intermediários.',
        },
      ]}
      faq={[
        {
          question: 'Quais equipamentos posso alugar da Intelsecsul?',
          answer: 'O aluguel é de câmeras de segurança IP, com todos os equipamentos do sistema (câmeras, gravador NVR, HD, switch PoE e demais itens), instalação e manutenção incluídos. Alarmes, cerca elétrica, portões automáticos e controle de acesso não são alugados: são atendidos por instalação e manutenção, e você pode falar com a nossa equipe sobre eles.',
        },
        {
          question: 'Qual é o prazo do contrato de aluguel?',
          answer: 'Trabalhamos com contratos de 6, 12, 24 ou 36 meses, conforme o seu projeto. Obras e canteiros costumam ter contratos de 6 a 12 meses. Empresas costumam ter contratos de 24 a 36 meses. Cada caso é analisado individualmente. Em caso de rescisão antecipada, é cobrada multa proporcional. Ao final, retiramos o equipamento sem taxa.',
        },
        {
          question: 'Quanto custa o aluguel de câmeras de segurança?',
          answer: 'A partir de R$ 249 por mês por ponto de câmera IP. O valor final depende do prazo do contrato e do tipo de projeto. Projetos comerciais e industriais podem ter valor maior, conforme a infraestrutura. O valor exato é definido na visita técnica.',
        },
        {
          question: 'O que está incluso na mensalidade do aluguel?',
          answer: 'A mensalidade inclui todos os equipamentos do sistema (câmeras, gravador NVR, HD, switch PoE e demais itens), instalação, manutenção preventiva, manutenção corretiva, troca de HD e acesso pelo celular e pelo computador. Manutenção emergencial é sujeita a disponibilidade da equipe e cobrança de taxa. Gravação em nuvem é plano à parte, sob consulta. Câmeras 4G ou solares, sob consulta.',
        },
        {
          question: 'Existe taxa de instalação ou investimento inicial?',
          answer: 'Não. O aluguel não exige investimento inicial nem taxa de instalação: toda a instalação inicial já está inclusa no contrato.',
        },
        {
          question: 'O que acontece se um equipamento apresentar defeito ou falha?',
          answer: 'A manutenção preventiva e corretiva e a substituição de peças com defeito, inclusive troca de HD, estão inclusas na mensalidade. Manutenção emergencial é sujeita a disponibilidade da equipe e cobrança de taxa.',
        },
        {
          question: 'Em quanto tempo o projeto de aluguel começa?',
          answer: 'Seu projeto começa em até 5 dias após a assinatura do contrato. O prazo exato depende do tamanho do projeto e da disponibilidade da equipe técnica.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento para aluguel de câmeras de segurança',
        text: 'A partir de R$ 249/mês por ponto de câmera IP, sem investimento inicial, com instalação e manutenção preventiva e corretiva inclusas.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      serviceSlug="aluguel-de-cameras-de-seguranca"
    />
  );
};
