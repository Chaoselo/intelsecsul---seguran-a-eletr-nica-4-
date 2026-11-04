import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';

export const CamerasManutencaoPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Conserto e Manutenção de Câmeras e CFTV em Curitiba"
      metaDescription="Manutenção e conserto de câmeras de segurança e CFTV em Curitiba: IP, Wi-Fi, dome, bullet e analógicas, DVR e NVR. Diagnóstico gratuito pelo WhatsApp."
      h1="Manutenção e conserto de câmeras de segurança e CFTV em Curitiba e Região Metropolitana"
      introText="Fazemos manutenção preventiva e conserto de câmeras de segurança e de sistemas de CFTV em residências, condomínios, comércios e empresas. Atendemos todos os tipos de câmera, como IP, Wi-Fi, dome, bullet e analógica, e gravadores DVR e NVR de todas as marcas, mesmo quando a instalação foi feita por outra empresa. Descreva o problema pelo WhatsApp e receba um diagnóstico gratuito."
      whenToHireTitle="Quando chamar a manutenção do CFTV"
      whenToHireText="Muita gente só percebe que o sistema de câmeras parou quando precisa da imagem. Uma câmera sem sinal, um DVR que apita sem parar ou um HD que deixou de gravar são sinais de que o sistema precisa de revisão. A manutenção preventiva confere câmeras, cabos, fontes, gravador e disco antes da falha, e inclui o teste de gravação. O conserto resolve o defeito que já apareceu, em câmeras IP, Wi-Fi, dome, bullet ou analógicas, e em DVR ou NVR de qualquer marca."
      sintomasFrequentesTitle="Defeitos e problemas comuns em câmeras e CFTV"
      sintomasFrequentes={[
        {
          titulo: 'DVR apitando sem parar',
          descricao: 'Leitura do aviso na tela e verificação do HD, do disco cheio, da perda de vídeo e das fontes, para tirar a causa do alarme sonoro.',
        },
        {
          titulo: 'DVR não reconhece o HD ou não grava',
          descricao: 'Teste do disco, dos cabos e do gravador, formatação quando necessário e troca do HD ou do equipamento defeituoso.',
        },
        {
          titulo: "Câmera sem imagem ou aparecendo 'sem sinal'",
          descricao: 'Teste da fonte, do cabo, dos conectores e da câmera para achar em qual ponto a imagem se perde.',
        },
        {
          titulo: 'Imagem escura, preta ou sem visão noturna',
          descricao: 'Verificação da fonte, do infravermelho e da configuração, e troca da câmera quando o infravermelho está queimado.',
        },
        {
          titulo: 'Câmera IP offline ou NVR que não encontra a câmera',
          descricao: 'Revisão de rede, switch, cabo, endereço IP e configuração depois de troca de roteador ou de queda de energia.',
        },
        {
          titulo: 'Câmera Wi-Fi que cai ou desconecta toda hora',
          descricao: 'Análise do sinal, da fonte e da posição do roteador, e reconfiguração da conexão.',
        },
        {
          titulo: 'Imagem com chiado, listras ou tremida',
          descricao: 'Troca de conectores e baluns, correção de cabos e eliminação de interferência.',
        },
        {
          titulo: 'Câmeras queimadas depois de raio ou queda de energia',
          descricao: 'Diagnóstico das peças queimadas, reparo ou troca e instalação de proteção contra surtos.',
        },
        {
          titulo: 'Acesso pelo celular que parou de funcionar',
          descricao: 'Reconfiguração do acesso remoto, da conta e da conexão do gravador.',
        },
        {
          titulo: 'Câmera dome ou PTZ que não gira',
          descricao: 'Teste de comando, cabo e alimentação do motor da câmera, e troca da peça quando necessário.',
        },
        {
          titulo: 'Lente embaçada, suja ou fora de foco',
          descricao: 'Limpeza técnica, ajuste de foco e do ângulo, e vedação contra umidade.',
        },
        {
          titulo: 'Fonte esquentando ou câmera reiniciando sozinha',
          descricao: 'Troca da fonte inadequada e verificação da carga e do aterramento.',
        },
      ]}
      tiposAplicacaoTitle="Tipos de câmera e equipamentos que atendemos"
      tiposAplicacao={[
        {
          title: 'Câmeras IP',
          description: 'O tipo mais usado hoje: imagem digital pela rede, com gravação em NVR.',
        },
        {
          title: 'Câmeras Wi-Fi',
          description: 'Instalação sem cabo de imagem, com ajuste de sinal e de conexão.',
        },
        {
          title: 'Câmeras analógicas e HD',
          description: 'Sistemas com DVR, cabo coaxial e balun, comuns em instalações mais antigas.',
        },
        {
          title: 'Câmeras dome e PTZ',
          description: 'Modelos de teto e de movimento, internos e externos.',
        },
        {
          title: 'Câmeras bullet',
          description: 'Modelos de parede, externos, para fachadas e perímetro.',
        },
        {
          title: 'DVR, NVR e HD',
          description: 'Gravadores de todas as marcas, discos e fontes.',
        },
      ]}
      diferenciais={[
        {
          title: 'Todos os tipos de câmera e todas as marcas',
          description: 'Atendemos câmeras IP, Wi-Fi, dome, bullet e analógicas, e DVR e NVR de qualquer marca.',
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
        { label: 'Câmeras de segurança: instalação e manutenção', url: '/servicos/cameras-de-seguranca/' },
        { label: 'Aluguel de câmeras de segurança (manutenção incluída)', url: '/servicos/aluguel-de-cameras-de-seguranca/' },
        { label: 'Contrato de manutenção de segurança eletrônica', url: '/servicos/contrato-de-manutencao/' },
      ]}
      faq={[
        {
          question: 'Quanto custa o conserto ou a manutenção das câmeras?',
          answer: 'O valor depende do defeito, do tipo de câmera, do gravador e das peças necessárias. Faça o diagnóstico gratuito pelo WhatsApp e solicite o orçamento: ele é feito caso a caso.',
        },
        {
          question: 'O diagnóstico pelo WhatsApp é gratuito?',
          answer: 'Sim. Descreva o problema, envie foto ou vídeo e orientamos sem custo. Se for necessário ir até o local, consulte a taxa de visita.',
        },
        {
          question: 'Vocês atendem todos os tipos de câmera e todas as marcas de DVR e NVR?',
          answer: 'Sim. Atendemos câmeras IP, Wi-Fi, dome, bullet, analógicas e outras, e gravadores DVR e NVR de todas as marcas, mesmo quando a instalação foi feita por outra empresa.',
        },
        {
          question: 'Meu DVR está apitando sem parar. O que pode ser?',
          answer: 'O aviso sonoro costuma indicar problema no HD, como disco com defeito, ausente ou cheio, ou perda de vídeo de alguma câmera. Veja se há mensagem na tela do gravador. Se o apito continuar, não desmonte o equipamento: chame a assistência técnica.',
        },
        {
          question: 'Como saber se o DVR está gravando?',
          answer: 'Na tela do gravador, procure o indicador de gravação e abra a reprodução (playback) para confirmar se há imagens recentes. Se não houver gravação, o HD, o cabo ou a configuração podem estar com problema.',
        },
        {
          question: 'Minha câmera parou de funcionar. O que posso verificar antes de chamar?',
          answer: 'Veja se há energia (tomada, fonte e disjuntor), se os cabos e conectores estão firmes e se o gravador ou o roteador estão ligados. Se a câmera continuar sem imagem, chame a assistência técnica.',
        },
        {
          question: 'Câmera queimada depois de raio tem conserto?',
          answer: 'Depende do dano. No diagnóstico, informamos se compensa consertar ou trocar câmeras, fonte ou gravador, e indicamos proteção contra surtos para reduzir o risco de novos danos.',
        },
        {
          question: 'Com que frequência fazer a manutenção preventiva do CFTV?',
          answer: 'Depende do tamanho do sistema e do ambiente. Em condomínios e empresas, é comum a revisão trimestral, que pode ser combinada em contrato de manutenção.',
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
          question: 'No aluguel de câmeras, a manutenção está inclusa?',
          answer: 'Sim. No aluguel de câmeras da Intelsecsul, a manutenção preventiva e corretiva está inclusa na mensalidade. Veja a página de aluguel de câmeras de segurança.',
        },
      ]}
      ctaFinal={{
        title: 'Solicite um orçamento de manutenção de câmeras e CFTV',
        text: 'Comece pelo diagnóstico gratuito pelo WhatsApp. O orçamento depende de cada caso.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      serviceSlug="cameras-de-seguranca/manutencao"
      canonicalPath="/servicos/cameras-de-seguranca/manutencao/"
    />
  );
};
