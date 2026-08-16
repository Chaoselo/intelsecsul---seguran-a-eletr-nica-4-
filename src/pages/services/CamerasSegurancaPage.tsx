import React from 'react';
import { ServicePageTemplate } from '../../components/ServicePageTemplate';

export const CamerasSegurancaPage: React.FC = () => {
  return (
    <ServicePageTemplate
      title="Câmeras de Segurança em Curitiba | Instalação e Monitoramento | Intelsecsul"
      metaDescription="Instalação de câmeras de segurança, CFTV e sistemas com acesso remoto em Curitiba e região. Projeto técnico, equipamentos homologados e suporte. Peça seu orçamento."
      h1="Câmeras de segurança em Curitiba e Região Metropolitana"
      introText="Instalamos sistemas de câmeras de segurança e CFTV para residências, comércios, empresas e condomínios, com gravação em nuvem ou local e acesso pelo aplicativo do celular. Cada projeto começa com uma análise do imóvel para definir os melhores pontos de cobertura."
      whenToHireTitle="Quando instalar câmeras de segurança"
      whenToHireText="Câmeras de segurança fazem sentido em praticamente qualquer imóvel, mas alguns sinais indicam que a instalação não deve esperar: se a região já registrou furtos ou tentativas de invasão, se você precisa controlar entrada e saída de veículos ou visitantes, se o negócio lida com estoque, dinheiro ou equipamentos de valor, ou se o condomínio quer reduzir conflitos e ocorrências nas áreas comuns. Também é comum famílias instalarem câmeras para acompanhar a casa durante viagens ou monitorar crianças e idosos à distância. Em todos esses casos, o primeiro passo é uma visita técnica: avaliamos os pontos cegos do imóvel, o tipo de iluminação disponível e a necessidade real de cobertura antes de sugerir qualquer equipamento."
      bairrosCuritiba={true}
      sintomasFrequentes={[
        {
          titulo: "Câmera com tela preta ou aviso de 'Sem Sinal' (No Signal)",
          descricao: "Troca de fonte queimada, conectores BNC/Balun com mau contato ou reparo no cabo de vídeo.",
        },
        {
          titulo: "Imagem da câmera chiando, trêmula ou com listras horizontais",
          descricao: "Eliminação de ruídos na rede, troca de conectores oxidados e instalação de cabos blindados.",
        },
        {
          titulo: "Visão noturna (infravermelho/IR) apagada ou escura à noite",
          descricao: "Substituição de LEDs IR queimados, ajuste de iluminação auxiliar ou troca do sensor dia/noite.",
        },
        {
          titulo: "DVR/NVR apitando sem parar",
          descricao: "Solução de erro no HD de gravação, troca de disco rígido corrompido ou correção de sobreaquecimento.",
        },
        {
          titulo: "Sistema não grava ou perdeu gravações antigas",
          descricao: "Recuperação do sistema de armazenamento, formatação técnica e configuração de sobregravação.",
        },
        {
          titulo: "Lente da câmera embaçada, desfocada ou com vapor por dentro",
          descricao: "Limpeza interna, vedação contra chuva e ajuste do foco manual ou varifocal.",
        },
        {
          titulo: "Aplicativo no celular desconectado ou câmera 'Offline'",
          descricao: "Reconfiguração de IP fixo, DDNS, P2P no roteador e sincronização do app do smartphone.",
        },
        {
          titulo: "Câmera pisca, congela a imagem ou cai aleatoriamente",
          descricao: "Redimensionamento da fonte de alimentação centralizada e correção de queda de voltagem.",
        },
        {
          titulo: "Fonte colmeia/plugue queimada ou esquentando demais",
          descricao: "Substituição por fontes chaveadas com proteção contra surto elétrico e filtro contra ruído.",
        },
        {
          titulo: "Imagem com cores distorcidas (roxa, esverdeada ou preto e branco de dia)",
          descricao: "Desbloqueio e reparo do filtro mecânico IR-Cut travado no bloco óptico da câmera.",
        },
        {
          titulo: "Conector BNC ou Balun oxidado e com zinabre",
          descricao: "Troca completa dos conectores de sinal com decapagem e solda técnica para evitar perdas.",
        },
        {
          titulo: "Câmera desalinhada ou fora do ângulo correto após vento/chuva",
          descricao: "Reaperto de suportes, realinhamento de campo de visão e blindagem do ponto de fixação.",
        },
        {
          titulo: "Cabo coaxial/rede partido ou ressecado pelo sol",
          descricao: "Substituição por cabos com proteção UV para áreas externas e passagem por conduítes apropriados.",
        },
        {
          titulo: "Câmera PTZ / Speed Dome não gira ou não aceita comandos",
          descricao: "Manutenção no motor de passo, placa de comunicação RS485 e reconfiguração de protocolos.",
        },
      ]}
      tiposAplicacaoTitle="Tipos de câmera e aplicação"
      tiposAplicacao={[
        {
          title: 'Câmera Bullet (externa)',
          description: 'Formato alongado, ideal para áreas externas, muros e entradas, com alcance de visão maior.',
        },
        {
          title: 'Câmera Wi-Fi (interna/discreta)',
          description: 'Formato compacto e discreto, indicada para ambientes internos como recepções, corredores e lojas.',
        },
        {
          title: 'Câmera com visão noturna',
          description: 'Capta imagens mesmo em ambientes escuros, essencial para monitoramento 24 horas.',
        },
        {
          title: 'Câmera com detecção de movimento por IA',
          description: 'Envia alertas automáticos ao identificar movimento ou pessoas na área monitorada.',
        },
      ]}
      segmentLinks={[
        {
          title: 'Câmeras Residencial',
          description: 'Proteção para casas e apartamentos com foco em pontos de entrada, garagem e quintal.',
          url: '/servicos/cameras-de-seguranca/residencial/',
        },
        {
          title: 'Câmeras Comercial',
          description: 'Cobertura de caixa, estoque e fluxo de clientes para lojas e escritórios.',
          url: '/servicos/cameras-de-seguranca/comercial/',
        },
        {
          title: 'Câmeras para Condomínios',
          description: 'Sistemas de CFTV para portaria, garagens e perímetro de condomínios.',
          url: '/servicos/cameras-de-seguranca/condominio/',
        },
      ]}
      diferenciais={[
        {
          title: 'Equipamentos homologados',
          description: 'Trabalhamos com marcas confiáveis e equipamentos adequados para uso contínuo.',
        },
        {
          title: 'Equipe técnica própria',
          description: 'Instalação feita por profissionais da própria Intelsecsul, sem terceirização.',
        },
        {
          title: 'Suporte pós-instalação',
          description: 'Acompanhamento e manutenção disponíveis após a entrega do sistema.',
        },
      ]}
      faq={[
        {
          question: 'Quanto custa instalar câmeras de segurança em Curitiba?',
          answer: 'O valor varia de acordo com a quantidade de câmeras, a resolução escolhida e a complexidade da instalação. Fazemos uma visita técnica gratuita para apresentar um orçamento preciso.',
        },
        {
          question: 'É possível ver as câmeras pelo celular de qualquer lugar?',
          answer: 'Sim, em sistemas com acesso remoto você acompanha as câmeras pelo aplicativo, de qualquer lugar com internet.',
        },
        {
          question: 'Qual a diferença entre câmera com fio e câmera Wi-Fi?',
          answer: 'Câmeras com fio costumam ter conexão mais estável e são recomendadas para instalações permanentes; câmeras Wi-Fi facilitam a instalação em locais onde passar cabos é mais difícil.',
        },
        {
          question: 'As câmeras funcionam bem à noite?',
          answer: 'Sim, modelos com visão noturna infravermelha mantêm a qualidade de imagem mesmo sem iluminação no ambiente.',
        },
      ]}
      ctaFinal={{
        title: 'Peça um orçamento gratuito para câmeras de segurança',
        text: 'Nossa equipe avalia o imóvel e apresenta o melhor projeto de câmeras para o seu caso.',
        buttonText: 'Falar no WhatsApp agora',
      }}
      serviceSlug="cameras-de-seguranca"
    />
  );
};
