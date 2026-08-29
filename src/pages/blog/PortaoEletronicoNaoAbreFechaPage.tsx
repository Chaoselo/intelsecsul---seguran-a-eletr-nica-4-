import React from 'react';
import { BlogPostTemplate } from '../../components/BlogPostTemplate';

export const PortaoEletronicoNaoAbreFechaPage: React.FC = () => {
  return (
    <BlogPostTemplate
      title="Portão Eletrônico Não Abre ou Não Fecha Completamente? Veja as Causas | Intelsecsul"
      metaDescription="Portão eletrônico não abre ou não fecha totalmente? Veja as causas mais comuns (fotocélula, fim de curso, placa, corrente) e quando chamar assistência técnica."
      h1="Por que meu portão eletrônico não abre ou não fecha completamente?"
      category="Portão Eletrônico"
      readTime="4 min de leitura"
      publishedDate="2026-08-29"
      intro="Na maioria dos casos, um portão eletrônico que não abre ou não fecha totalmente tem um destes três problemas: a fotocélula (sensor de segurança) está desalinhada ou suja, o fim de curso perdeu a referência de onde o portão deve parar, ou há um obstáculo físico no trilho ou na cremalheira. Também é comum ser um problema na placa da central ou no próprio motor, especialmente em portões com mais de 5 anos de uso sem manutenção preventiva. Abaixo, detalhamos cada causa, do problema mais simples (e mais barato de resolver) ao mais sério."
      sections={[
        {
          h2: '1. Fotocélula desalinhada, suja ou com objeto na frente',
          content:
            'A fotocélula é o sensor que impede o portão de fechar em cima de um carro, pessoa ou animal. Se ela estiver suja, desalinhada por uma pancada, ou com qualquer objeto (até uma folha de árvore) bloqueando o feixe, o motor entende isso como "obstáculo" e recusa a fechar — ou abre e fecha alguns centímetros e para. É a causa mais comum e também a mais rápida de checar: limpe as duas lentes (emissor e receptor) com um pano seco e confirme visualmente se elas estão apontadas exatamente uma para a outra.',
        },
        {
          h2: '2. Fim de curso ou memória de percurso perdida',
          content:
            'O motor "memoriza" os pontos exatos de abertura total e fechamento total. Uma queda de energia, uma reprogramação incompleta, ou o desgaste natural da placa podem apagar essa referência. O sintoma típico é o portão parar sempre no mesmo ponto, alguns centímetros antes de abrir ou fechar totalmente. A solução é reprogramar o curso do motor — um procedimento técnico rápido, mas que exige acesso à central e conhecimento do modelo específico do motor.',
        },
        {
          h2: '3. Obstáculo no trilho, na cremalheira ou na dobradiça',
          content:
            'Sujeira acumulada, uma pedra pequena, ou até o desalinhamento do próprio portão com o trilho (comum depois de anos de uso, ou após reformas na calçada/muro) fazem o motor "sentir" mais resistência do que o normal e interromper o movimento como medida de segurança. Vale uma inspeção visual completa do trilho e da cremalheira antes de qualquer intervenção elétrica.',
        },
        {
          h2: '4. Placa eletrônica com defeito',
          content:
            'Se o motor não reage a nenhum comando (nem controle, nem botoeira) e não há nenhum obstáculo visível, é provável que a placa tenha queimado — geralmente por uma descarga elétrica (raio) ou pela ausência de um bom aterramento. Nesse caso, o reparo exige um técnico, já que envolve testar e, se necessário, substituir componentes eletrônicos.',
        },
        {
          h2: '5. Corrente ou correia frouxa ou rompida (motores basculantes)',
          content:
            'Em motores basculantes, a corrente que puxa o portão pode esticar com o tempo, saltar do carretel, ou até romper. O sintoma costuma ser o motor "rodando no vazio" — você ouve o motor funcionando, mas o portão não se move.',
        },
        {
          h2: 'Quando chamar assistência técnica',
          content:
            'Se você já limpou a fotocélula e confirmou que não há obstáculo visível e o problema persistir, é hora de chamar um técnico — mexer na placa ou na regulagem de fim de curso sem experiência pode piorar o problema ou até queimar o motor. A Intelsecsul atende esse tipo de chamado em Curitiba e Região Metropolitana, com diagnóstico técnico no local antes de qualquer orçamento.',
        },
      ]}
      relatedQuestions={[
        {
          question: 'O motor do meu portão está fazendo barulho, isso está relacionado?',
          answer:
            'Sim — barulho excessivo geralmente acompanha os mesmos problemas de trilho/corrente descritos acima, e tende a piorar até a parada completa se não for resolvido.',
        },
        {
          question: 'Quanto custa consertar um portão eletrônico?',
          answer:
            'Depende da causa: uma simples reprogramação de fim de curso custa uma fração do preço de uma troca de placa. Fazemos diagnóstico antes de fechar orçamento.',
        },
      ]}
      internalLink={{
        text: 'Precisa de assistência técnica ou automação de portão?',
        url: '/servicos/portao-eletronico/',
        linkText: 'Ver Portão Eletrônico',
      }}
      whatsappMessage="Vim do blog e meu portão não está abrindo/fechando direito"
      ctaFinal={{
        title: 'Seu portão não está abrindo ou fechando direito?',
        text: 'A Intelsecsul atende chamados em Curitiba e Região Metropolitana com diagnóstico no local.',
        buttonText: 'Falar no WhatsApp agora',
      }}
    />
  );
};
