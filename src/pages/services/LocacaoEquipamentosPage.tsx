import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';

export const LocacaoEquipamentosPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Locação de Câmeras de Segurança e CFTV em Curitiba | Sem Investimento Inicial | IntelSec Sul"
      metaDescription="Locação de câmeras de segurança, CFTV e alarmes em Curitiba e RMC. Zero investimento inicial, taxa de instalação zero, manutenção inclusa e mensalidade fixa."
      h1="Locação de Câmeras de Segurança e CFTV em Curitiba sem Investimento Inicial"
      introText="Oferecemos a locação completa de equipamentos de segurança eletrônica — câmeras de segurança, CFTV, alarmes e controle de acesso — com Zero Investimento Inicial (Capex Zero) e Zero Taxa de Instalação. Você paga apenas uma mensalidade fixa e previsível, com manutenção preventiva, corretiva e substituição imediata de peças inclusas."
      whenToHireTitle="Quando optar pela locação de câmeras e equipamentos de segurança"
      whenToHireText="A locação de equipamentos é a opção ideal para condomínios, empresas e residências que buscam modernização tecnológica sem comprometer o fluxo de caixa com grandes investimentos de aquisição (Capex). Com o aluguel da IntelSec Sul, a manutenção preventiva, corretiva e a substituição de qualquer equipamento queimado por descargas elétricas ou desgastado pelo tempo ficam 100% sob nossa responsabilidade, eliminando orçamentos surpresa e garantindo funcionamento 24h por dia."
      sintomasFrequentes={[
        {
          titulo: "Equipamentos próprios antigos que vivem estragando",
          descricao: "Substituição total do sistema sem custo de compra por equipamentos novos da Intelbras.",
        },
        {
          titulo: "Gasto alto inesperado com câmeras queimadas por raios",
          descricao: "Manutenção preventiva/corretiva e troca imediata de peças defeituosas inclusas na mensalidade.",
        },
        {
          titulo: "Orçamento de conserto mais caro do que comprar aparelhos novos",
          descricao: "Zero custo de mão de obra e peças: tudo coberto pela mensalidade fixa do contrato de locação.",
        },
        {
          titulo: "Empresa que vendeu as câmeras sumiu e não dá garantia",
          descricao: "Suporte técnico contínuo e dedicado com equipe própria durante toda a vigência do contrato.",
        },
        {
          titulo: "Falta de caixa para investimento inicial alto no condomínio/empresa",
          descricao: "Zero investimento inicial (Capex zero) e taxa de instalação zero para começar imediatamente.",
        },
        {
          titulo: "Imagens da portaria ruins que não identificam placas ou rostos",
          descricao: "Upgrade para câmeras Full HD e IP com leitor de placas e visão noturna sem custo de aquisição.",
        },
        {
          titulo: "Dificuldade para deduzir despesas no Imposto de Renda",
          descricao: "Abatimento fiscal facilitado (classificação como despesa operacional / Opex para empresas).",
        },
        {
          titulo: "Cabeamento antigo gerando ruído que ninguém consegue resolver",
          descricao: "Passagem de novo cabeamento estruturado 100% incluso no projeto de aluguel.",
        },
        {
          titulo: "Síndico cobrado por moradores por falhas no sistema",
          descricao: "Tranquilidade com SLA de atendimento rápido e manutenção técnica preventiva regular.",
        },
        {
          titulo: "Falta de peças de reposição para modelos antigos no mercado",
          descricao: "Modernização imediata para tecnologias atuais mantendo a mensalidade previsível.",
        },
        {
          titulo: "Medo de pagar caro em câmeras que vão ficar obsoletas em 2 anos",
          descricao: "Atualização tecnológica garantida ao longo do contrato sem precisar comprar novos aparelhos.",
        },
        {
          titulo: "Incerteza sobre qual modelo escolher sem correr risco de errar",
          descricao: "Projeto técnico dimensionado gratuitamente por nossos engenheiros antes da assinatura.",
        },
      ]}
      tiposAplicacaoTitle="Principais Vantagens do Nosso Plano de Locação"
      tiposAplicacao={[
        {
          title: 'Zero Investimento Inicial (Capex Zero)',
          description: 'Você começa a usar o sistema completo sem precisar dispor de recursos para compra dos aparelhos.',
        },
        {
          title: 'Zero Taxa de Instalação',
          description: 'Toda a mão de obra de passagem de cabos, fixação e configuração é 100% inclusa na assinatura.',
        },
        {
          title: 'Manutenção Preventiva e Corretiva Inclusa',
          description: 'Atendimento técnico com equipe própria e revisões sem nenhuma cobrança adicional.',
        },
        {
          title: 'Substituição Imediata sem Custo Extra',
          description: 'Câmeras ou gravadores queimados por raio ou desgaste são trocados na hora sem custo.',
        },
      ]}
      diferenciais={[
        {
          title: 'Mensalidade Fixa e Previsível',
          description: 'Orçamento sem surpresas ou cobranças de visitas técnicas ao longo do contrato.',
        },
        {
          title: 'Equipamentos Homologados de Ponta',
          description: 'Trabalhamos com marcas líderes como Intelbras, garantindo altíssima durabilidade e resolução.',
        },
        {
          title: 'Suporte Técnico com Equipe Própria',
          description: 'Atendimento presencial rápido em Curitiba e RMC com SLA garantido contratualmente.',
        },
      ]}
      faq={[
        {
          question: 'Quais equipamentos posso alugar da Intelsecsul?',
          answer: 'Câmeras de segurança, portões eletrônicos, alarme monitorado, controle de acesso e outros sistemas de segurança eletrônica, de acordo com o projeto do seu imóvel.',
        },
        {
          question: 'Existe taxa de instalação na locação?',
          answer: 'Não. A instalação está incluída na mensalidade, sem cobrança adicional.',
        },
        {
          question: 'O que acontece se um equipamento apresentar defeito?',
          answer: 'A manutenção e a substituição de equipamentos com defeito estão incluídas no contrato, sem custo extra.',
        },
        {
          question: 'Qual o prazo mínimo de contrato para locação?',
          answer: 'Nossos contratos têm um prazo de fidelidade de 24 meses',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento para locação de equipamentos de segurança',
        text: 'Sem investimento inicial, sem taxa de instalação e sem custo de manutenção — pague apenas uma mensalidade.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      serviceSlug="locacao-de-cameras-de-seguranca"
    />
  );
};
