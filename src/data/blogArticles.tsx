import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface BlogArticleSection {
  h2: string;
  content: React.ReactNode;
}

export interface BlogArticleMeta {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  category: string;
  readTime: string;
  publishedDate: string;
  summary: string;
  intro: string;
  sections: BlogArticleSection[];
  ctaFinal: {
    title: string;
    text: string;
    buttonText?: string;
  };
  keywords?: string[];
  ogImage?: string;
  whatsappMessage?: string;
  internalLink?: {
    text: string;
    url: string;
    linkText: string;
  };
  relatedQuestions?: Array<{
    question: string;
    answer: string;
  }>;
}

export type BlogArticle = BlogArticleMeta;

export const BLOG_ARTICLES: BlogArticleMeta[] = [
  {
    id: 'como-escolher-sistema-de-seguranca',
    slug: 'como-escolher-sistema-de-seguranca',
    title: 'Como Escolher o Sistema de Segurança Ideal | Blog Intelsecsul',
    metaTitle: 'Como Escolher o Sistema de Segurança Ideal | Blog Intelsecsul',
    metaDescription: 'Guia para escolher entre câmeras, alarme, cerca elétrica e controle de acesso, considerando o perfil do seu imóvel e o orçamento disponível.',
    h1: 'Como escolher o sistema de segurança ideal para sua casa ou empresa',
    category: 'Guia Prático',
    readTime: '4 min de leitura',
    publishedDate: '2026-08-28',
    summary: 'Com tantas opções disponíveis — câmeras, alarme monitorado, cerca elétrica, controle de acesso — é comum sentir dificuldade para saber por onde começar. Este guia ajuda a organizar a decisão em passos simples.',
    intro: 'Com tantas opções disponíveis — câmeras, alarme monitorado, cerca elétrica, controle de acesso — é comum sentir dificuldade para saber por onde começar. Este guia ajuda a organizar a decisão em passos simples.',
    sections: [
      {
        h2: 'Identifique o principal risco do seu imóvel',
        content:
          'Antes de escolher um equipamento, vale entender o que você mais quer evitar: um furto durante a noite, a entrada de visitantes não identificados, ou simplesmente a tranquilidade de acompanhar o imóvel à distância. Cada objetivo aponta para uma combinação diferente de sistemas.',
      },
      {
        h2: 'Avalie o tamanho e os pontos de acesso do imóvel',
        content:
          'Residências pequenas costumam precisar de poucos pontos de câmera bem posicionados, enquanto imóveis maiores, condomínios e empresas exigem um projeto mais completo, com cobertura de várias entradas e áreas comuns. Uma visita técnica ajuda a mapear esses pontos com precisão.',
      },
      {
        h2: 'Decida entre comprar ou alugar os equipamentos',
        content: (
          <div className="space-y-4">
            <p>
              Comprar significa um investimento maior no início, mas sem mensalidade pelo equipamento. Já a locação permite começar sem custo inicial, com manutenção inclusa.
            </p>
            <div className="p-4 rounded-xl bg-[#141A29] border border-[#0091FF]/30 inline-block">
              <Link
                to="/comparativos/compra-x-locacao-de-equipamentos/"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#00C5FF] hover:text-white transition-colors"
              >
                <span>Veja o comparativo completo entre compra e locação de equipamentos</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ),
      },
      {
        h2: 'Escolha uma empresa com equipe própria e suporte contínuo',
        content:
          'Depois da instalação, é importante saber que existe suporte disponível caso algo precise de ajuste ou manutenção. Empresas com equipe técnica própria, em vez de terceirizada, costumam responder com mais agilidade.',
      },
    ],
    ctaFinal: {
      title: 'Ainda com dúvidas sobre qual sistema escolher?',
      text: 'Fale com a Intelsecsul e receba uma orientação gratuita para o seu caso.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'seguranca-eletronica-para-condominios',
    slug: 'seguranca-eletronica-para-condominios',
    title: 'Segurança Eletrônica para Condomínios | Blog Intelsecsul',
    metaTitle: 'Segurança Eletrônica para Condomínios | Blog Intelsecsul',
    metaDescription: 'O que considerar antes de instalar câmeras, controle de acesso e portaria remota em condomínios residenciais e comerciais.',
    h1: 'Segurança eletrônica para condomínios: o que considerar antes de instalar',
    category: 'Condomínios',
    readTime: '5 min de leitura',
    publishedDate: '2026-08-28',
    summary: 'Condomínios têm necessidades diferentes de uma residência isolada — várias unidades, áreas comuns, portaria e um fluxo maior de pessoas e veículos circulando todos os dias.',
    intro: 'Condomínios têm necessidades diferentes de uma residência isolada — várias unidades, áreas comuns, portaria e um fluxo maior de pessoas e veículos circulando todos os dias.',
    sections: [
      {
        h2: 'Cobertura das áreas comuns e garagens',
        content:
          'O projeto de câmeras em um condomínio precisa cobrir portaria, garagens, áreas de lazer e o perímetro externo, sempre respeitando a privacidade das áreas privativas dos moradores.',
      },
      {
        h2: 'Integração entre câmeras e controle de acesso',
        content:
          'Combinar câmeras com controle de acesso por biometria, cartão ou reconhecimento facial reduz a dependência de porteiro presencial e facilita o registro de quem entra e sai do condomínio.',
      },
      {
        h2: 'Portaria remota como tendência',
        content:
          'Muitos condomínios estão migrando total ou parcialmente para portaria remota, monitorada à distância, como forma de reduzir custos com funcionários sem abrir mão do controle de acesso.',
      },
      {
        h2: 'Aprovação em assembleia e planejamento do orçamento',
        content:
          'Por envolver decisão coletiva, projetos de segurança em condomínios costumam passar por aprovação em assembleia. Ter um orçamento detalhado facilita a apresentação da proposta aos moradores.',
      },
    ],
    ctaFinal: {
      title: 'Precisa de um projeto de segurança para o seu condomínio?',
      text: 'Avaliamos o condomínio e apresentamos um projeto completo, sem compromisso.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'seguranca-para-empresas-e-industrias',
    slug: 'seguranca-para-empresas-e-industrias',
    title: 'Segurança para Empresas e Indústrias | Blog Intelsecsul',
    metaTitle: 'Segurança para Empresas e Indústrias | Blog Intelsecsul',
    metaDescription: 'Cuidados na hora de projetar CFTV e controle de acesso para empresas, galpões e indústrias.',
    h1: 'Segurança para empresas e indústrias: cuidados no projeto de CFTV e controle de acesso',
    category: 'Empresas & Indústrias',
    readTime: '4 min de leitura',
    publishedDate: '2026-08-28',
    summary: 'Empresas e indústrias lidam com perímetros maiores, fluxo de funcionários e visitantes, e muitas vezes ativos de alto valor, o que exige um projeto de segurança mais robusto do que o residencial.',
    intro: 'Empresas e indústrias lidam com perímetros maiores, fluxo de funcionários e visitantes, e muitas vezes ativos de alto valor, o que exige um projeto de segurança mais robusto do que o residencial.',
    sections: [
      {
        h2: 'Mapeie as áreas mais críticas primeiro',
        content:
          'Antes de definir os equipamentos, identifique os pontos mais sensíveis: almoxarifado, sala de servidores, entrada de caminhões, áreas de carga e descarga. Esses pontos costumam merecer atenção prioritária no projeto.',
      },
      {
        h2: 'Controle de acesso por níveis de permissão',
        content:
          'Nem todo funcionário precisa ter acesso a todas as áreas. Um sistema de controle de acesso bem planejado define permissões diferentes por setor, turno ou cargo.',
      },
      {
        h2: 'CFTV interno e externo trabalhando juntos',
        content:
          'Câmeras externas monitoram o perímetro e a movimentação de veículos, enquanto câmeras internas acompanham áreas de estoque, produção e circulação de pessoas.',
      },
      {
        h2: 'Equipe técnica local faz diferença na manutenção',
        content:
          'Empresas que não podem parar a operação por muito tempo se beneficiam de ter um fornecedor com equipe técnica local, capaz de atender rapidamente em caso de falha em algum equipamento.',
      },
    ],
    ctaFinal: {
      title: 'Precisa de um projeto de segurança para sua empresa ou indústria?',
      text: 'Avaliamos o local e apresentamos uma proposta sob medida.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'checklist-seguranca-antes-de-viajar',
    slug: 'checklist-seguranca-antes-de-viajar',
    title: 'Checklist de Segurança Antes de Viajar | Blog Intelsecsul',
    metaTitle: 'Checklist de Segurança Antes de Viajar | Blog Intelsecsul',
    metaDescription: 'Cuidados simples para deixar a casa mais protegida antes de viajar, com ou sem sistema de segurança instalado.',
    h1: 'Checklist de segurança para deixar a casa protegida antes de viajar',
    category: 'Dicas de Segurança',
    readTime: '3 min de leitura',
    publishedDate: '2026-08-28',
    summary: 'Períodos de viagem costumam ser momentos de maior vulnerabilidade para residências, já que o imóvel fica sem ninguém por dias ou semanas. Alguns cuidados simples ajudam a reduzir os riscos.',
    intro: 'Períodos de viagem costumam ser momentos de maior vulnerabilidade para residências, já que o imóvel fica sem ninguém por dias ou semanas. Alguns cuidados simples ajudam a reduzir os riscos.',
    sections: [
      {
        h2: 'Evite divulgar a viagem publicamente',
        content:
          'Postar em redes sociais que a casa ficará vazia, com datas específicas, facilita a ação de quem está de olho em imóveis desocupados. O ideal é compartilhar fotos da viagem só depois de voltar.',
      },
      {
        h2: 'Combine com vizinhos ou uma pessoa de confiança',
        content:
          'Pedir para alguém recolher a correspondência e dar uma passada de vez em quando ajuda a manter a aparência de que a casa está ocupada.',
      },
      {
        h2: 'Use temporizadores em luzes',
        content:
          'Timers que acendem e apagam luzes em horários programados ajudam a simular presença durante a noite.',
      },
      {
        h2: 'Teste o sistema de segurança antes de viajar',
        content:
          'Se você já tem câmeras e alarme instalados, vale testar o funcionamento do acesso remoto e confirmar que o monitoramento está ativo antes de sair de viagem.',
      },
    ],
    ctaFinal: {
      title: 'Vai viajar e quer reforçar a segurança da casa antes?',
      text: 'Fale com a Intelsecsul e avaliamos o que faz sentido para o seu caso.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'portao-eletronico-nao-abre-ou-nao-fecha',
    slug: 'portao-eletronico-nao-abre-ou-nao-fecha',
    title: 'Portão Eletrônico Não Abre ou Não Fecha Completamente? Veja as Causas | Intelsecsul',
    metaTitle: 'Portão Eletrônico Não Abre ou Não Fecha Completamente? Veja as Causas | Intelsecsul',
    metaDescription: 'Portão eletrônico não abre ou não fecha totalmente? Veja as causas mais comuns (fotocélula, fim de curso, placa, corrente) e quando chamar assistência técnica.',
    h1: 'Por que meu portão eletrônico não abre ou não fecha completamente?',
    category: 'Portão Eletrônico',
    readTime: '4 min de leitura',
    publishedDate: '2026-08-29',
    summary: 'Na maioria dos casos, um portão eletrônico que não abre ou não fecha totalmente tem um destes três problemas: a fotocélula (sensor de segurança) está desalinhada ou suja, o fim de curso perdeu a referência de onde o portão deve parar, ou há um obstáculo físico no trilho ou na cremalheira.',
    intro: 'Na maioria dos casos, um portão eletrônico que não abre ou não fecha totalmente tem um destes três problemas: a fotocélula (sensor de segurança) está desalinhada ou suja, o fim de curso perdeu a referência de onde o portão deve parar, ou há um obstáculo físico no trilho ou na cremalheira. Também é comum ser um problema na placa da central ou no próprio motor, especialmente em portões com mais de 5 anos de uso sem manutenção preventiva. Abaixo, detalhamos cada causa, do problema mais simples (e mais barato de resolver) ao mais sério.',
    sections: [
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
    ],
    relatedQuestions: [
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
    ],
    internalLink: {
      text: 'Precisa de assistência técnica ou automação de portão?',
      url: '/servicos/portao-eletronico/',
      linkText: 'Ver Portão Eletrônico',
    },
    whatsappMessage: 'Vim do blog e meu portão não está abrindo/fechando direito',
    ctaFinal: {
      title: 'Seu portão não está abrindo ou fechando direito?',
      text: 'A Intelsecsul atende chamados em Curitiba e Região Metropolitana com diagnóstico no local.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'cerca-eletrica-x-concertina-diferenca',
    slug: 'cerca-eletrica-x-concertina-diferenca',
    title: 'Cerca Elétrica x Concertina: Qual a Diferença e Qual Protege Mais? | Intelsecsul',
    metaTitle: 'Cerca Elétrica x Concertina: Qual a Diferença e Qual Protege Mais? | Intelsecsul',
    metaDescription: 'Entenda a diferença entre cerca elétrica e concertina, qual oferece mais proteção, o que diz a legislação e qual escolher para residência, comércio ou indústria.',
    h1: 'Cerca elétrica x concertina: qual a diferença?',
    category: 'Cerca Elétrica',
    readTime: '4 min de leitura',
    publishedDate: '2026-08-29',
    summary: 'A diferença central é o princípio de funcionamento: a cerca elétrica usa fios energizados por uma central que aplica pulsos de choque, enquanto a concertina é uma barreira física cortante em espiral. Nenhuma das duas é melhor de forma absoluta — a escolha certa depende do imóvel.',
    intro: `A diferença central é o princípio de funcionamento: a cerca elétrica usa fios energizados por uma central que aplica pulsos de choque (de alerta, não letais quando instalada corretamente), enquanto a concertina é uma barreira física cortante, feita de lâminas de aço em espiral, que impede a passagem por dano físico direto a quem tenta escalar. Uma depende de eletricidade para funcionar; a outra funciona mesmo sem energia. Nenhuma das duas é "melhor" de forma absoluta — a escolha certa depende do tipo de imóvel, da altura do muro disponível e do nível de dissuasão que você precisa.`,
    sections: [
      {
        h2: 'Como funciona cada uma',
        content: (
          <div className="space-y-4">
            <p>
              Cerca elétrica: fios paralelos instalados no topo do muro (ou em suportes próprios), ligados a uma central que envia pulsos elétricos de curtíssima duração. O objetivo é o choque de alerta, que assusta e afasta sem causar lesão grave — desde que a instalação siga a norma técnica (NBR 14522, entre outras). A central também pode disparar um alarme sonoro e, dependendo da integração, avisar o proprietário pelo celular.
            </p>
            <p>
              Concertina: lâminas de aço em formato de espiral (também chamada de "arame farpado circular" ou "razor wire"), instalada no topo de muros ou grades. Funciona por dissuasão e barreira física — quem tenta passar sofre cortes, então a proteção não depende de nenhum sistema elétrico funcionando.
            </p>
          </div>
        ),
      },
      {
        h2: 'Qual protege mais?',
        content: (
          <div className="space-y-4">
            <p>
              Em termos de dissuasão psicológica, a cerca elétrica costuma ser mais eficaz porque o risco de choque assusta antes mesmo da tentativa. Em termos de proteção física continuada (funciona mesmo sem energia, não depende de manutenção elétrica), a concertina tem uma vantagem prática — mas seu aspecto visual é mais agressivo, o que pode não ser desejável em residências (é mais comum em indústrias, presídios e áreas de alta segurança).
            </p>
            <p>
              Uma combinação das duas — concertina em pontos estratégicos de mais fácil escalada, e cerca elétrica no restante do perímetro — é uma opção usada em imóveis com necessidade de proteção elevada.
            </p>
          </div>
        ),
      },
      {
        h2: 'O que diz a legislação',
        content:
          'Em área residencial, a instalação de cerca elétrica é permitida, mas precisa seguir a norma técnica (altura mínima acima do muro, sinalização obrigatória de "risco de choque", aterramento correto). A concertina também é permitida, mas alguns municípios e regulamentos de condomínio podem restringir seu uso em fachadas residenciais por questão estética ou de imagem do bairro — vale confirmar isso antes de decidir.',
      },
      {
        h2: 'Qual escolher para o seu caso',
        content: (
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <strong className="text-white">Residência em bairro urbano:</strong> cerca elétrica costuma ser a escolha mais comum, por ser discreta e eficaz.
            </li>
            <li>
              <strong className="text-white">Indústria, galpão ou depósito:</strong> concertina é frequentemente usada isoladamente ou combinada com cerca elétrica, priorizando barreira física contínua.
            </li>
            <li>
              <strong className="text-white">Condomínio:</strong> depende do regulamento interno e da altura do muro perimetral — vale uma visita técnica para avaliar o melhor ponto de instalação.
            </li>
          </ul>
        ),
      },
      {
        h2: 'Como a Intelsecsul pode ajudar',
        content:
          'Fazemos instalação de cerca elétrica residencial, comercial e para condomínios em Curitiba e Região Metropolitana, seguindo as normas técnicas de segurança e sinalização. Se o seu caso pede uma combinação com concertina, avaliamos isso na visita técnica gratuita.',
      },
    ],
    relatedQuestions: [
      {
        question: 'A cerca elétrica é perigosa para quem mora na casa?',
        answer:
          'Não, quando instalada conforme as normas — o choque é de alerta, não letal.',
      },
      {
        question: 'É obrigatório sinalizar a cerca elétrica?',
        answer:
          'Sim, a sinalização faz parte da instalação correta e é exigida por norma.',
      },
    ],
    internalLink: {
      text: 'Deseja proteger o perímetro da sua casa, condomínio ou empresa?',
      url: '/servicos/cerca-eletrica/',
      linkText: 'Ver Cerca Elétrica',
    },
    whatsappMessage: 'Solicitar orçamento de cerca elétrica',
    ctaFinal: {
      title: 'Proteja o perímetro do seu imóvel com segurança',
      text: 'Entre em contato com a Intelsecsul para uma avaliação técnica gratuita e orçamento de cerca elétrica.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'camera-com-fio-ou-wifi-qual-escolher',
    slug: 'camera-com-fio-ou-wifi-qual-escolher',
    title: 'Câmera com Fio ou Wi-Fi: Qual Escolher para Cada Ambiente? | Intelsecsul',
    metaTitle: 'Câmera com Fio ou Wi-Fi: Qual Escolher para Cada Ambiente? | Intelsecsul',
    metaDescription: 'Câmera de segurança com fio ou Wi-Fi: veja as vantagens de cada uma, quando usar cada tipo e qual opção é mais indicada para residência, comércio ou área externa.',
    h1: 'Câmera com fio ou Wi-Fi: qual escolher?',
    category: 'Câmeras de Segurança',
    readTime: '4 min de leitura',
    publishedDate: '2026-08-29',
    summary: 'Em geral, a câmera com fio é a mais indicada para instalações permanentes (residência, comércio, fachada externa), porque oferece conexão mais estável. Já a câmera Wi-Fi é ideal para pontos onde passar cabo é inviável, priorizando praticidade.',
    intro: `Em geral, a câmera com fio é a mais indicada para instalações permanentes (residência, comércio, fachada externa), porque oferece conexão mais estável e não depende da qualidade do sinal Wi-Fi no local. Já a câmera Wi-Fi é mais indicada para pontos onde passar cabo é difícil ou inviável (um cômodo isolado, uma área alugada, uma instalação temporária), priorizando praticidade sobre estabilidade máxima. Não existe uma resposta "certa" universal — a escolha depende do ambiente, da distância até o roteador e do nível de confiabilidade que a aplicação exige.`,
    sections: [
      {
        h2: 'Vantagens da câmera com fio',
        content: (
          <ul className="space-y-2 list-disc list-inside">
            <li>Conexão estável, sem interferência de outros aparelhos Wi-Fi da casa/empresa nem de paredes grossas no caminho do sinal.</li>
            <li>Sem depender da internet para gravar localmente — mesmo que a internet caia, a gravação no DVR/NVR continua (o acesso remoto pelo celular é que fica indisponível até a conexão voltar).</li>
            <li>Ideal para fachadas, portões e áreas externas, onde a distância do roteador costuma ser maior.</li>
            <li>Menor risco de interferência ou de alguém tentar "derrubar" a câmera bloqueando o Wi-Fi (um risco real de segurança em Wi-Fi mal configurado).</li>
          </ul>
        ),
      },
      {
        h2: 'Vantagens da câmera Wi-Fi',
        content: (
          <ul className="space-y-2 list-disc list-inside">
            <li>Instalação mais rápida e sem obra, já que não precisa passar cabo pela parede ou pelo forro.</li>
            <li>Boa opção para imóveis alugados, onde furar parede para passar cabeamento nem sempre é permitido.</li>
            <li>Fácil de realocar se você mudar o layout do ambiente.</li>
            <li>Suficiente para ambientes internos pequenos, próximos do roteador.</li>
          </ul>
        ),
      },
      {
        h2: 'E os pontos de atenção de cada uma',
        content:
          'Câmera Wi-Fi tende a perder qualidade de imagem (ou até a conexão) se estiver longe do roteador ou se houver muitas paredes de concreto no caminho — comum em apartamentos e casas com estrutura mais robusta. Já a câmera com fio exige mais planejamento na hora da instalação (definir o caminho do cabo antes da obra ou usar canaletas), o que pode encarecer um pouco o serviço se a estrutura já estiver pronta e sem previsão de passagem de cabo.',
      },
      {
        h2: 'Dá para misturar os dois tipos no mesmo sistema?',
        content:
          'Sim. É comum um projeto usar câmeras com fio na fachada e áreas externas (onde a estabilidade importa mais) e câmeras Wi-Fi em pontos internos específicos, de mais difícil acesso para cabeamento. A Intelsecsul avalia o melhor mix na visita técnica, considerando o layout do imóvel e o alcance real do seu roteador.',
      },
      {
        h2: 'Qual escolher para o seu caso',
        content: (
          <ul className="space-y-2 list-disc list-inside">
            <li><strong className="text-white">Fachada, portão, área externa:</strong> com fio.</li>
            <li><strong className="text-white">Comércio com CFTV central (DVR/NVR):</strong> com fio, para garantir gravação contínua independente da internet.</li>
            <li><strong className="text-white">Um cômodo isolado, ou instalação temporária:</strong> Wi-Fi.</li>
            <li><strong className="text-white">Imóvel alugado, sem previsão de obra:</strong> Wi-Fi.</li>
          </ul>
        ),
      },
    ],
    relatedQuestions: [
      {
        question: 'Câmera de segurança funciona sem internet?',
        answer:
          'A câmera com fio ligada a um DVR/NVR local grava normalmente sem internet; só o acesso remoto pelo celular depende de conexão. Câmeras Wi-Fi puras geralmente precisam de internet para funcionar.',
      },
      {
        question: 'Quantas câmeras eu preciso para minha casa?',
        answer:
          'Depende do tamanho do imóvel e dos pontos de entrada — fazemos essa avaliação gratuitamente na visita técnica.',
      },
    ],
    internalLink: {
      text: 'Procurando projeto ou instalação de câmeras de segurança?',
      url: '/servicos/cameras-de-seguranca/',
      linkText: 'Ver Câmeras de Segurança',
    },
    whatsappMessage: 'Solicitar orçamento de câmeras de segurança',
    ctaFinal: {
      title: 'Precisa de câmeras de segurança para o seu imóvel?',
      text: 'A Intelsecsul faz visita técnica gratuita para planejar o posicionamento ideal das câmeras.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'camera-fora-do-ar-causas-solucoes',
    slug: 'camera-fora-do-ar-causas-solucoes',
    title: 'Câmera Fora do Ar: 5 Causas Comuns e Como Resolver | Intelsecsul',
    metaTitle: 'Câmera Fora do Ar: 5 Causas Comuns e Como Resolver | Intelsecsul',
    metaDescription: 'Câmera de segurança fora do ar? Veja as 5 causas mais comuns (energia, rede, configuração, firmware e hardware) e aprenda o passo a passo para diagnosticar e resolver cada uma.',
    h1: 'Câmera fora do ar: as 5 causas mais comuns e como resolver',
    category: 'Câmeras de Segurança',
    readTime: '7 min de leitura',
    publishedDate: '2026-09-20',
    summary: 'Uma câmera de segurança fora do ar — seja exibindo "offline" no aplicativo, tela preta no DVR ou simplesmente sem imagem — tem, na grande maioria dos casos, uma destas cinco origens: falha de energia, problema de conectividade, configuração de rede alterada, firmware desatualizado ou corrompido, ou falha no próprio hardware.',
    intro: 'Uma câmera de segurança fora do ar — seja exibindo "offline" no aplicativo, tela preta no DVR ou simplesmente sem imagem — tem, na grande maioria dos casos, uma destas cinco origens: falha de energia (fonte queimada, cabo rompido ou tomada sem contato), problema de conectividade (Wi-Fi fraco, cabo de rede desconectado ou interferência), configuração de rede alterada (mudança de senha do Wi-Fi, IP conflitante ou porta errada no DVR/NVR), firmware desatualizado ou corrompido, ou falha no próprio hardware (câmera, DVR/NVR ou fonte com defeito). A boa notícia: a maioria dessas causas pode ser diagnosticada com verificações simples, sem necessidade de ferramentas especializadas.',
    sections: [
      {
        h2: '1. Falha de energia: a causa mais comum e mais fácil de verificar',
        content: (
          <div className="space-y-4">
            <p>Se a câmera está completamente "morta" — sem LED aceso, sem imagem, sem resposta no aplicativo — o primeiro lugar a verificar é a alimentação elétrica.</p>
            <div>
              <p className="font-bold text-white mb-2">Sintomas típicos:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Câmera sem nenhum LED indicador aceso.</li>
                <li>DVR/NVR não reconhece a câmera no canal correspondente.</li>
                <li>Câmera que funcionava e parou após uma queda de energia ou tempestade.</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-2">Como diagnosticar e resolver:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong className="text-white">Verifique a fonte de alimentação.</strong> Confirme se o LED da fonte está aceso. Se a fonte esquentar demais ou não acender, substitua por uma de mesma especificação (geralmente 12V 1A ou 12V 2A, dependendo do modelo).</li>
                <li><strong className="text-white">Teste a tomada.</strong> Ligue a câmera em outra tomada para descartar problema no ponto elétrico.</li>
                <li><strong className="text-white">Inspecione o cabo de alimentação.</strong> Cabos rompidos, conectores oxidados ou emendas mal feitas são causas frequentes — especialmente em instalações externas expostas a chuva e sol.</li>
                <li><strong className="text-white">Para câmeras PoE:</strong> verifique se o switch PoE está fornecendo energia suficiente para todas as câmeras conectadas. Se o switch estiver no limite de potência, câmeras podem desligar intermitentemente.</li>
              </ul>
            </div>
            <p><strong className="text-white">Quando é problema técnico:</strong> se a fonte nova não resolve e a câmera continua sem ligar, o problema pode estar na própria câmera (placa queimada) ou no cabo embutido na parede — nesse caso, é necessário um técnico com equipamento de teste.</p>
          </div>
        ),
      },
      {
        h2: '2. Problema de conectividade: Wi-Fi fraco, cabo desconectado ou interferência',
        content: (
          <div className="space-y-4">
            <p>A câmera tem energia (LED aceso) mas não aparece no aplicativo ou no DVR. Isso indica que o problema está na comunicação — seja por Wi-Fi instável ou por cabo de rede com defeito.</p>
            <div>
              <p className="font-bold text-white mb-2">Sintomas típicos:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Câmera aparece como "offline" no aplicativo, mas o LED está aceso.</li>
                <li>Imagem congela, pixeliza ou cai intermitentemente antes de ficar offline.</li>
                <li>DVR/NVR mostra "sem vídeo" em um ou mais canais.</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-2">Como diagnosticar e resolver:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong className="text-white">Verifique a conexão física (câmeras com fio).</strong> Confirme se o cabo de rede está firmemente conectado tanto na câmera quanto no roteador ou switch. Um conector RJ45 mal crimpado é uma causa clássica.</li>
                <li><strong className="text-white">Verifique a qualidade do sinal Wi-Fi (câmeras sem fio).</strong> A maioria das câmeras Wi-Fi opera exclusivamente na frequência 2.4 GHz. Se o roteador estiver com as bandas 2.4 GHz e 5 GHz "mescladas" (mesmo nome de rede), a câmera pode tentar conectar na 5 GHz — que ela não suporta — e falhar. A solução é separar as redes ou desabilitar temporariamente a banda 5 GHz durante a configuração.</li>
                <li><strong className="text-white">Aproxime a câmera do roteador.</strong> Paredes de concreto, espelhos, micro-ondas e outros dispositivos Wi-Fi causam interferência significativa. Se a câmera funciona perto do roteador mas falha no local definitivo, considere um repetidor ou migrar para uma câmera com fio.</li>
                <li><strong className="text-white">Reinicie os equipamentos de rede.</strong> Desligue o roteador e o switch da tomada por 10-15 segundos, religue e aguarde a rede estabilizar. Em seguida, reinicie a câmera.</li>
                <li><strong className="text-white">Verifique se a câmera está na rede local.</strong> Acesse o painel do roteador (geralmente 192.168.0.1 ou 192.168.1.1) e confira a lista de dispositivos conectados.</li>
              </ul>
            </div>
            <p><strong className="text-white">Quando é problema técnico:</strong> se o cabo de rede estiver danificado internamente (sem sinal) ou se o módulo Wi-Fi da câmera tiver queimado, a substituição é necessária.</p>
          </div>
        ),
      },
      {
        h2: '3. Configuração de rede alterada: senha do Wi-Fi, IP conflitante ou porta errada',
        content: (
          <div className="space-y-4">
            <p>Este é um dos casos mais frustrantes: a câmera tem energia, o cabo está conectado, mas ela simplesmente "desapareceu" do sistema. Geralmente acontece após uma mudança no roteador ou nas configurações da rede.</p>
            <div>
              <p className="font-bold text-white mb-2">Sintomas típicos:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Câmera funcionava perfeitamente e parou de repente após troca de roteador ou provedor de internet.</li>
                <li>Aplicativo mostra câmera offline, mas outros dispositivos da casa navegam normalmente.</li>
                <li>DVR/NVR lista a câmera com IP "0.0.0.0" ou como "não conectada".</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-2">Como diagnosticar e resolver:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong className="text-white">Senha ou nome do Wi-Fi alterados.</strong> Acesse o aplicativo da câmera e reconfigure a rede, ou faça um reset de fábrica e configure novamente.</li>
                <li><strong className="text-white">IP conflitante.</strong> Configure um IP fixo para a câmera (fora da faixa de DHCP do roteador) ou reserve o IP no próprio roteador.</li>
                <li><strong className="text-white">Porta errada no DVR/NVR.</strong> Se a câmera foi movida fisicamente de porta e a configuração não foi atualizada, o canal correspondente fica sem imagem.</li>
                <li><strong className="text-white">Configuração de gravação desabilitada.</strong> Verifique em Menu &gt; Gravação se o canal está habilitado.</li>
              </ul>
            </div>
            <p><strong className="text-white">Quando é problema técnico:</strong> se a câmera não aceita reconfiguração e continua offline mesmo após reset de fábrica, pode haver um defeito na placa de rede do equipamento.</p>
          </div>
        ),
      },
      {
        h2: '4. Firmware desatualizado ou corrompido',
        content: (
          <div className="space-y-4">
            <p>O firmware é o "sistema operacional" da câmera. Versões antigas podem ter bugs de conectividade, e atualizações interrompidas ou mal aplicadas podem corromper o sistema, deixando a câmera inoperante.</p>
            <div>
              <p className="font-bold text-white mb-2">Sintomas típicos:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Câmera que funcionava e parou após uma tentativa de atualização.</li>
                <li>Câmera reinicia sozinha repetidamente.</li>
                <li>Funções específicas (detecção de movimento, áudio, acesso remoto) param de funcionar sem motivo aparente.</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-2">Como diagnosticar e resolver:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong className="text-white">Verifique a versão atual do firmware.</strong> Procure por "Informações do dispositivo" no app ou na interface web e compare com a versão mais recente no site do fabricante.</li>
                <li><strong className="text-white">Atualize com cuidado.</strong> Use apenas arquivos oficiais. Durante a atualização, não desligue a câmera nem interrompa a conexão.</li>
              </ul>
            </div>
            <p><strong className="text-white">Quando é problema técnico:</strong> se a câmera não responde a nenhuma tentativa de acesso (web, app ou rede local) e o reset de fábrica não funciona, o firmware pode estar corrompido a ponto de exigir reprogramação em bancada.</p>
          </div>
        ),
      },
      {
        h2: '5. Falha no hardware: câmera, DVR/NVR ou fonte com defeito',
        content: (
          <div className="space-y-4">
            <p>Quando todas as verificações acima foram feitas e o problema persiste, a causa mais provável é uma falha física em um dos componentes do sistema.</p>
            <div>
              <p className="font-bold text-white mb-2">Como diagnosticar e resolver:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong className="text-white">Teste a câmera em outro canal do DVR/NVR.</strong> Se funcionar em outro canal, o problema é na porta do gravador, não na câmera.</li>
                <li><strong className="text-white">Teste com outra fonte de alimentação.</strong> Se a câmera ligar com uma fonte nova, o problema era a fonte.</li>
                <li><strong className="text-white">Teste outra câmera no mesmo cabo e porta.</strong> Se outra câmera funcionar no mesmo ponto, o problema é a câmera original.</li>
                <li><strong className="text-white">Verifique a temperatura.</strong> Câmeras externas expostas ao sol podem superaquecer e desligar como proteção; o mesmo vale para DVRs/NVRs sem ventilação.</li>
                <li><strong className="text-white">Verifique a saúde do HD do DVR/NVR.</strong> Um HD com setores defeituosos pode causar travamentos e perda de gravação.</li>
              </ul>
            </div>
            <p><strong className="text-white">Quando é problema técnico:</strong> falhas de hardware geralmente exigem substituição de componentes. Se o equipamento estiver na garantia, acione o fabricante.</p>
          </div>
        ),
      },
      {
        h2: 'Quando chamar um técnico especializado',
        content: (
          <div className="space-y-4">
            <p>Se você já passou pelas verificações de energia, conexão e configuração e a câmera continua fora do ar, é hora de chamar um profissional. Alguns cenários exigem conhecimento técnico específico:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Cabo de rede rompido dentro da parede — exige teste com equipamento adequado.</li>
              <li>Placa da câmera queimada — só um técnico pode confirmar e substituir.</li>
              <li>DVR/NVR travando ou sem reconhecer canais.</li>
              <li>Sistema inteiro fora do ar após queda de energia.</li>
              <li>Configuração de rede complexa (múltiplas câmeras IP, VLANs, switch gerenciável).</li>
            </ul>
            <p>A Intelsecsul atende chamados de manutenção e diagnóstico de CFTV em Curitiba e Região Metropolitana, com avaliação técnica no local antes de qualquer orçamento.</p>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: 'Câmera fora do ar não significa, necessariamente, equipamento perdido. Na maioria das vezes, a causa está em algo simples — uma fonte queimada, um cabo solto, uma senha de Wi-Fi alterada ou um firmware desatualizado. O diagnóstico metódico, começando pela energia e avançando para rede, configuração e hardware, resolve a maior parte dos casos sem custo elevado. Se após essas verificações o problema persistir, a avaliação de um técnico especializado evita tentativas que podem piorar o quadro.',
      },
    ],
    relatedQuestions: [
      {
        question: 'Por que minha câmera fica offline à noite?',
        answer: 'Quedas noturnas geralmente estão relacionadas a instabilidade na rede Wi-Fi ou a configurações de economia de energia do roteador. Verifique se o roteador não está reiniciando automaticamente em algum horário programado.',
      },
      {
        question: 'Câmera de segurança funciona sem internet?',
        answer: 'Sim. Câmeras com fio conectadas a um DVR/NVR local continuam gravando normalmente mesmo sem internet — apenas o acesso remoto pelo celular fica indisponível. Já câmeras Wi-Fi que dependem exclusivamente de nuvem geralmente param de funcionar sem internet.',
      },
      {
        question: 'Quanto tempo leva para resolver uma câmera fora do ar?',
        answer: 'Depende da causa. Problemas de energia e conectividade simples podem ser resolvidos em 15 a 30 minutos. Questões de configuração de rede ou firmware levam de 1 a 2 horas. Falhas de hardware podem exigir substituição de peças.',
      },
      {
        question: 'Preciso trocar a câmera se ela ficar offline?',
        answer: 'Nem sempre. Na maioria dos casos, o problema está na fonte, no cabo, na configuração ou no firmware — e não na câmera em si. Só após descartar todas essas possibilidades a substituição se torna necessária.',
      },
    ],
    internalLink: {
      text: 'Precisa de manutenção ou diagnóstico técnico de câmeras de segurança?',
      url: '/servicos/cameras-de-seguranca/',
      linkText: 'Ver Câmeras de Segurança',
    },
    whatsappMessage: 'Vim do blog e minha câmera está fora do ar',
    ctaFinal: {
      title: 'Precisa de ajuda com sua câmera fora do ar em Curitiba e Região Metropolitana?',
      text: 'A Intelsecsul atende chamados de manutenção e diagnóstico de CFTV em Curitiba e Região Metropolitana, com avaliação técnica no local antes de qualquer orçamento.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'contrato-manutencao-ou-chamar-quando-quebra',
    slug: 'contrato-manutencao-ou-chamar-quando-quebra',
    title: 'Contrato de Manutenção ou Chamar Quando Quebra? Qual Vale Mais a Pena | Intelsecsul',
    metaTitle: 'Contrato de Manutenção ou Chamar Quando Quebra? Qual Vale Mais a Pena | Intelsecsul',
    metaDescription: 'Contrato de manutenção ou chamado avulso? Compare custos, vantagens e riscos de cada modelo e descubra qual é o mais indicado para o seu sistema de segurança.',
    h1: 'Vale mais ter contrato de manutenção ou chamar quando quebra?',
    category: 'Manutenção',
    readTime: '9 min de leitura',
    publishedDate: '2026-09-20',
    summary: 'Essa é uma das dúvidas mais comuns de quem já tem um sistema de segurança instalado. A resposta curta é: depende do seu perfil de uso, do tamanho do sistema e do nível de criticidade da sua operação. Mas, na grande maioria dos casos, o contrato de manutenção preventiva sai mais barato no longo prazo do que depender só de chamados corretivos emergenciais.',
    intro: 'Essa é uma das dúvidas mais comuns de quem já tem um sistema de segurança instalado — seja CFTV, alarme, cerca elétrica, controle de acesso ou portão eletrônico. A resposta curta é: depende do seu perfil de uso, do tamanho do sistema e do nível de criticidade da sua operação. Mas a resposta longa — e útil — é que, na grande maioria dos casos, o contrato de manutenção preventiva sai mais barato no longo prazo do que depender exclusivamente de chamados corretivos emergenciais. Isso porque a manutenção preventiva identifica e corrige falhas antes que elas se tornem problemas graves.',
    sections: [
      {
        h2: 'O que é um contrato de manutenção preventiva?',
        content: (
          <div className="space-y-4">
            <p>Um contrato de manutenção é um acordo formal entre você e a empresa de segurança eletrônica, prevendo visitas periódicas programadas (mensais, trimestrais ou semestrais) para inspecionar, limpar, ajustar, atualizar e testar todos os equipamentos do sistema — câmeras, DVR/NVR, centrais de alarme, sensores, cercas elétricas, controles de acesso, portões automáticos e fontes de alimentação.</p>
            <p>Manutenção preventiva não é apenas "limpar câmeras". É um conjunto de verificações técnicas: teste de gravação, checagem da saúde do HD, verificação de tensão em cercas elétricas, teste de baterias de alarme, atualização de firmware, inspeção de cabeamento e conectores, e ajuste de configurações.</p>
            <p>Além das visitas programadas, a maioria dos contratos inclui condições especiais para atendimentos emergenciais — como prioridade na fila de chamados, descontos em peças e mão de obra, ou até atendimento 24/7 em casos críticos.</p>
          </div>
        ),
      },
      {
        h2: 'O que é o modelo de chamado avulso (corretivo)?',
        content: (
          <div className="space-y-4">
            <p>No modelo avulso, você não tem compromisso fixo. O sistema funciona normalmente, e quando algo quebra, você chama um técnico para consertar. O pagamento é feito por serviço realizado, caso a caso.</p>
            <p>Esse modelo parece mais barato no início — afinal, você só paga quando precisa. O problema é que, na prática, o custo total tende a ser maior: chamados emergenciais cobram taxas de urgência, deslocamento fora de horário, e o preço da peça substituída sem planejamento. Além disso, você fica sem o sistema funcionando exatamente no momento em que mais precisaria dele.</p>
          </div>
        ),
      },
      {
        h2: 'Comparativo direto: contrato x chamado avulso',
        content: (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-white font-bold">Critério</th>
                  <th className="text-left p-3 text-white font-bold">Contrato de manutenção</th>
                  <th className="text-left p-3 text-white font-bold">Chamado avulso</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Custo mensal</td><td className="p-3">Fixo e previsível</td><td className="p-3">Zero até a primeira falha</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Custo total no longo prazo</td><td className="p-3">Menor (prevenção evita reparos caros)</td><td className="p-3">Maior (emergências custam mais)</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Tempo de resposta</td><td className="p-3">Prioritário / programado</td><td className="p-3">Sob demanda, sujeito à agenda</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Vida útil dos equipamentos</td><td className="p-3">Prolongada (ajustes e limpezas regulares)</td><td className="p-3">Reduzida (só recebe atenção quando quebra)</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Risco de falha no momento crítico</td><td className="p-3">Reduzido (falhas detectadas antes)</td><td className="p-3">Alto (quebra acontece sem aviso)</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Previsibilidade de orçamento</td><td className="p-3">Sim (valor mensal fixo)</td><td className="p-3">Não (cada falha é uma surpresa)</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Registro técnico das revisões</td><td className="p-3">Sim (útil para condomínios e auditorias)</td><td className="p-3">Não</td></tr>
                <tr><td className="p-3 font-semibold text-white">Indicação para</td><td className="p-3">Sistemas críticos, condomínios, empresas</td><td className="p-3">Sistemas pequenos, uso residencial esporádico</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        h2: 'Quanto custa cada modelo?',
        content: (
          <div className="space-y-4">
            <p>Os valores variam conforme o tamanho do sistema, a quantidade de equipamentos e a frequência das visitas. Para dar uma referência realista:</p>
            <p><strong className="text-white">Contrato de manutenção preventiva (CFTV):</strong> em condomínios e empresas, a manutenção preventiva mensal costuma ficar na faixa de R$ 500 a R$ 1.500 para sistemas de pequeno a médio porte (até 16 canais). Para sistemas maiores (32 canais ou mais, múltiplos pontos), os valores podem chegar a R$ 3.000 ou mais por mês, dependendo do escopo.</p>
            <p><strong className="text-white">Manutenção corretiva avulsa:</strong> uma única visita emergencial para troca de câmera, por exemplo, pode custar entre R$ 400 e R$ 1.200 — dependendo do modelo da câmera, da complexidade da instalação e do horário do chamado. Se o problema for mais grave (placa queimada, HD corrompido, cabeamento rompido), o custo sobe consideravelmente.</p>
            <p><strong className="text-white">A conta que importa:</strong> o plano de locação da Intelsecsul para 8 câmeras custa R$ 489/mês — ou seja, R$ 5.868 por ano, já incluindo manutenção. Se, sem esse tipo de contrato, você tiver duas falhas no ano — uma câmera queimada e um HD substituído —, o custo total pode facilmente ultrapassar esse valor, sem contar o tempo que o sistema ficou fora do ar entre a falha e o reparo.</p>
          </div>
        ),
      },
      {
        h2: 'Vantagens do contrato de manutenção',
        content: (
          <ul className="space-y-2 list-disc list-inside">
            <li><strong className="text-white">Custo previsível e orçamento controlado.</strong> Com um valor mensal fixo, você sabe exatamente quanto vai gastar com manutenção no ano — facilita o planejamento financeiro, especialmente para condomínios.</li>
            <li><strong className="text-white">Prevenção de falhas no momento crítico.</strong> Um sistema que funciona mal dá falsa sensação de proteção justamente enquanto falha. A manutenção preventiva identifica problemas antes de um evento real.</li>
            <li><strong className="text-white">Assistência prioritária e mais rápida.</strong> Clientes com contrato ativo geralmente têm prioridade na fila e condições especiais em emergências.</li>
            <li><strong className="text-white">Vida útil prolongada dos equipamentos.</strong> Limpezas, ajustes de foco e atualizações de firmware mantêm os equipamentos operando por mais tempo.</li>
            <li><strong className="text-white">Registro técnico das revisões.</strong> Útil para condomínios e empresas comprovarem que o sistema foi cuidado, em auditorias ou prestação de contas.</li>
            <li><strong className="text-white">Atualizações e conformidade.</strong> Contratos geralmente incluem atualização de firmware e verificação de conformidade com normas vigentes.</li>
          </ul>
        ),
      },
      {
        h2: 'Desvantagens do contrato de manutenção',
        content: (
          <ul className="space-y-2 list-disc list-inside">
            <li><strong className="text-white">Custo fixo mesmo em meses sem uso.</strong> Em sistemas pequenos ou raramente usados, o valor mensal pode parecer um peso desnecessário.</li>
            <li><strong className="text-white">Necessidade de escolher bem a empresa.</strong> Um contrato com escopo vago pode gerar frustração — é essencial que detalhe visitas, equipamentos e peças cobertas.</li>
            <li><strong className="text-white">Compromisso de fidelidade mais longo.</strong> O contrato padrão da Intelsecsul é de 36 meses — acima da média de mercado. É esse prazo mais longo, porém, que viabiliza o modelo sem investimento inicial: os equipamentos são fornecidos e instalados sem custo de entrada, e a mensalidade amortiza esse investimento ao longo do contrato.</li>
          </ul>
        ),
      },
      {
        h2: 'Vantagens do modelo avulso',
        content: (
          <ul className="space-y-2 list-disc list-inside">
            <li><strong className="text-white">Nenhum custo fixo.</strong> Você só paga quando precisa — pode fazer sentido para uma ou duas câmeras de uso esporádico.</li>
            <li><strong className="text-white">Liberdade para escolher o técnico a cada chamado.</strong> Você não está preso a um fornecedor específico.</li>
          </ul>
        ),
      },
      {
        h2: 'Desvantagens do modelo avulso',
        content: (
          <ul className="space-y-2 list-disc list-inside">
            <li><strong className="text-white">Custo total maior no longo prazo.</strong> Reparos emergenciais custam significativamente mais que ajustes preventivos.</li>
            <li><strong className="text-white">Falhas no momento errado.</strong> Sem manutenção preventiva, o sistema quebra quando menos se espera — geralmente durante um evento real.</li>
            <li><strong className="text-white">Tempo de resposta imprevisível.</strong> Você depende da agenda do técnico disponível no momento.</li>
            <li><strong className="text-white">Vida útil reduzida dos equipamentos.</strong> Poeira, infiltrações e desgaste se acumulam silenciosamente até o problema aparecer.</li>
          </ul>
        ),
      },
      {
        h2: 'Quando o contrato de manutenção vale mais a pena?',
        content: (
          <ul className="space-y-2 list-disc list-inside">
            <li><strong className="text-white">Condomínios residenciais e comerciais</strong> — precisam de previsibilidade de custo e registro técnico para prestação de contas.</li>
            <li><strong className="text-white">Empresas com sistemas críticos</strong> — farmácias, clínicas, escolas, indústrias e comércios que dependem do sistema para proteger patrimônio e pessoas.</li>
            <li><strong className="text-white">Sistemas com múltiplos equipamentos</strong> — quanto maior o sistema, maior o risco de falhas encadeadas.</li>
            <li><strong className="text-white">Imóveis com histórico de problemas</strong> — o contrato resolve a causa raiz em vez de só tratar sintomas.</li>
            <li><strong className="text-white">Sistemas com mais de 3 anos de uso</strong> — equipamentos mais antigos se beneficiam mais da manutenção regular.</li>
          </ul>
        ),
      },
      {
        h2: 'Quando o modelo avulso pode fazer sentido?',
        content: (
          <div className="space-y-4">
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Residências com sistemas mínimos</strong> — uma ou duas câmeras Wi-Fi, uso esporádico.</li>
              <li><strong className="text-white">Imóveis de uso intermitente</strong> — chácaras, casas de praia ou de temporada.</li>
              <li><strong className="text-white">Sistemas recém-instalados</strong> — nos primeiros meses o risco de falha é baixo.</li>
            </ul>
            <p>Ainda assim, mesmo nesses casos, uma visita preventiva anual — sem contrato mensal — já reduz significativamente o risco de falhas inesperadas.</p>
          </div>
        ),
      },
      {
        h2: 'E se eu já tiver um sistema instalado por outra empresa?',
        content: 'Muitas empresas de manutenção (incluindo a Intelsecsul) atendem sistemas instalados por terceiros. O contrato de manutenção pode ser firmado independentemente de quem fez a instalação original — útil quando você não tem mais contato com o instalador, ou quer migrar para um fornecedor com atendimento mais ágil.',
      },
      {
        h2: 'Conclusão',
        content: 'Para a maioria dos sistemas de segurança — especialmente condomínios, empresas e residências com múltiplos equipamentos —, o contrato preventivo é a escolha que faz mais sentido financeira e operacionalmente. Ele transforma um risco imprevisível em um custo fixo e planejado, mantendo o sistema no nível de desempenho para o qual foi projetado. O modelo avulso tem seu lugar em sistemas muito pequenos ou de uso esporádico, mas mesmo nesses casos, uma visita preventiva anual é um investimento que se paga.',
      },
    ],
    relatedQuestions: [
      {
        question: 'Qual a diferença entre manutenção preventiva e corretiva?',
        answer: 'A preventiva segue um calendário programado de revisões para identificar desgaste antes que vire falha. A corretiva é acionada quando algo já parou de funcionar. Depender só da corretiva custa mais caro no longo prazo.',
      },
      {
        question: 'Quanto custa um contrato de manutenção de segurança eletrônica?',
        answer: 'Depende do tamanho do sistema e da frequência das visitas. Para sistemas de pequeno a médio porte (até 16 canais), a faixa típica é de R$ 500 a R$ 1.500 por mês. Sistemas maiores podem ultrapassar R$ 3.000 mensais.',
      },
      {
        question: 'Contrato de manutenção cobre a troca de peças?',
        answer: 'Depende do escopo contratado. Alguns contratos incluem peças de desgaste (fontes, conectores, baterias), outros cobram a peça à parte com desconto. É essencial ler o contrato antes de assinar.',
      },
      {
        question: 'Posso cancelar o contrato a qualquer momento?',
        answer: 'O contrato padrão da Intelsecsul é de 36 meses. Esse prazo mais longo é justamente o que permite oferecer o modelo de locação sem investimento inicial — os equipamentos são fornecidos e instalados sem custo de entrada, e a mensalidade cobre esse investimento ao longo do contrato. Negocie as condições de cancelamento antecipado antes de assinar.',
      },
      {
        question: 'Vale a pena contratar manutenção só para o alarme, sem incluir as câmeras?',
        answer: 'Sim. É possível contratar manutenção específica para um subsistema. O ideal é que o contrato cubra todos os sistemas integrados, mas nada impede um escopo mais restrito se o orçamento for limitado.',
      },
    ],
    internalLink: {
      text: 'Precisa de um contrato de manutenção para o seu sistema de segurança?',
      url: '/servicos/manutencao-de-sistemas-de-seguranca/',
      linkText: 'Ver Manutenção de Sistemas',
    },
    whatsappMessage: 'Vim do blog e quero saber sobre contrato de manutenção',
    ctaFinal: {
      title: 'Precisa avaliar seu sistema de segurança ou tirar dúvidas sobre manutenção?',
      text: 'A Intelsecsul faz essa avaliação em Curitiba e Região Metropolitana, identificando o estado dos equipamentos e recomendando o modelo mais adequado ao seu perfil.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'alarme-disparando-sozinho-causas-reduzir-falsos-alarmes',
    slug: 'alarme-disparando-sozinho-causas-reduzir-falsos-alarmes',
    title: 'Alarme Disparando Sozinho: Causas e Como Reduzir Falsos Alarmes | Intelsecsul',
    metaTitle: 'Alarme Disparando Sozinho: Causas e Como Reduzir Falsos Alarmes | Intelsecsul',
    metaDescription: 'Alarme disparando sozinho? Veja as causas mais comuns — sensores mal calibrados, bateria fraca, interferências e erros de operação — e aprenda como reduzir falsos alarmes no seu sistema.',
    h1: 'Alarme disparando sozinho: causas mais comuns e como reduzir falsos alarmes',
    category: 'Alarmes',
    readTime: '9 min de leitura',
    publishedDate: '2026-09-22',
    summary: 'Um alarme disparando sozinho acontece quando o sistema é acionado sem uma tentativa real de invasão. Na grande maioria dos casos, a causa é simples: sensores mal calibrados, baterias fracas, interferências eletromagnéticas ou erros de operação. Segundo a ABESE, cerca de 95% dos chamados de alarme são falsos.',
    intro: 'Um alarme disparando sozinho — ou falso alarme — acontece quando o sistema é acionado sem uma tentativa real de invasão ou emergência. Na grande maioria dos casos, o problema não é uma falha grave do equipamento, mas sim fatores simples: sensores mal calibrados ou posicionados de forma inadequada, baterias fracas, interferências eletromagnéticas, variações climáticas, sujeira acumulada nos sensores ou erros humanos na operação. Segundo a Associação Brasileira das Empresas de Sistemas Eletrônicos de Segurança (ABESE), cerca de 95% dos chamados de alarme em residências e empresas são falsos.',
    sections: [
      {
        h2: 'Causas relacionadas aos sensores',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">1. Sensores mal calibrados ou posicionados</h3>
            <p>Sensores com sensibilidade excessiva ou instalados em locais inadequados reagem a movimentos irrelevantes — cortinas balançando, sombras, animais domésticos, correntes de ar ou até reflexos de luz. É a causa mais comum de falsos alarmes em sistemas residenciais.</p>
            <div>
              <p className="font-bold text-white mb-2">Sintomas típicos:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Disparos em horários específicos (madrugada, quando o vento aumenta; ou à tarde, quando o sol incide diretamente no sensor).</li>
                <li>Disparos que coincidem com a movimentação de animais de estimação.</li>
                <li>Sensores que disparam mesmo sem ninguém na área monitorada.</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-2">Como diagnosticar e resolver:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong className="text-white">Verifique o posicionamento.</strong> Sensores PIR devem ser instalados a 2-2,5 metros de altura, longe de janelas com sol direto, cortinas, fontes de calor e objetos que balancem.</li>
                <li><strong className="text-white">Reduza a sensibilidade.</strong> Áreas de alta circulação podem precisar de ajuste mais baixo.</li>
                <li><strong className="text-white">Ative a função pet-immune (se aplicável).</strong> Ignora movimentos de animais até 20-40 kg.</li>
                <li><strong className="text-white">Limpe os sensores regularmente.</strong> Poeira e teias na lente prejudicam a leitura e causam disparos falsos.</li>
              </ul>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">2. Sujeira, insetos ou teias nos sensores</h3>
            <p>Aranhas, formigas e outros insetos sobre a lente de um sensor PIR são uma causa clássica de falsos alarmes. Uma teia de aranha balançando com o vento também pode ser interpretada como movimento.</p>
            <p><strong className="text-white">Como resolver:</strong> limpeza periódica dos sensores e repelente de insetos ao redor da carcaça (sem tocar na lente). Em casos recorrentes, vede frestas na instalação.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">3. Baterias fracas ou antigas</h3>
            <p>Sensores sem fio com bateria fraca enviam sinais instáveis à central, resultando em acionamentos indevidos.</p>
            <div>
              <p className="font-bold text-white mb-2">Sintomas típicos:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Disparos intermitentes, sem padrão claro.</li>
                <li>Avisos de "bateria fraca" no painel ou aplicativo.</li>
                <li>Sensores que param de funcionar logo após um disparo falso.</li>
              </ul>
            </div>
            <p><strong className="text-white">Como resolver:</strong> substitua as baterias de todos os sensores a cada 12-18 meses, mesmo que ainda pareçam funcionar.</p>
          </div>
        ),
      },
      {
        h2: 'Causas relacionadas à central e à infraestrutura',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">4. Interferências eletromagnéticas</h3>
            <p>Equipamentos eletrônicos próximos ao alarme — roteadores Wi-Fi, babás eletrônicas, micro-ondas, motores elétricos — podem interferir no sinal entre sensores e central.</p>
            <p><strong className="text-white">Como resolver:</strong> mantenha a central e os sensores afastados de fontes de interferência. Em sistemas com fio, a fiação deve ser adequadamente blindada.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">5. Falhas na fiação (sistemas com fio)</h3>
            <p>Conexões soltas, fios danificados ou umidade nos contatos podem gerar sinais irregulares e disparos inesperados, especialmente em imóveis mais antigos.</p>
            <p><strong className="text-white">Como resolver:</strong> uma inspeção profissional da fiação identifica emendas mal feitas, cabos rompidos ou conectores oxidados.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">6. Variações climáticas e correntes de ar</h3>
            <p>Mudanças bruscas de temperatura e ventos fortes afetam principalmente sensores em áreas externas ou semiabertas não adequados para esse ambiente.</p>
            <p><strong className="text-white">Como resolver:</strong> use sensores específicos para áreas externas e reposicione sensores internos próximos a janelas muito ventiladas.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">7. Defeito técnico na central ou nos sensores</h3>
            <p>Em equipamentos com muitos anos sem manutenção preventiva, o disparo constante pode indicar um defeito real.</p>
            <p><strong className="text-white">Como resolver:</strong> isole o sensor problemático (desabilite a zona no painel). Se os disparos cessarem, o sensor precisa ser trocado; se a central continuar disparando mesmo sem sensores ativos, o problema está nela.</p>
          </div>
        ),
      },
      {
        h2: 'Causas relacionadas ao uso e à operação',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">8. Erro humano na operação</h3>
            <p>Esta é a maior causa isolada de falsos alarmes. Esquecer de desativar o alarme, digitar o código errado, deixar uma janela entreaberta ou não treinar visitantes são erros comuns.</p>
            <div>
              <p className="font-bold text-white mb-2">Como reduzir:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Treine todos os usuários do sistema — familiares, funcionários, diaristas, visitantes frequentes.</li>
                <li>Aumente o tempo de atraso de entrada/saída para dar margem de desarmar sem pressa.</li>
                <li>Use o modo "Home" em vez de "Away" quando estiver em casa — desativa sensores internos, mantém os perimetrais.</li>
                <li>Mantenha portas e janelas bem fechadas antes de armar o sistema.</li>
              </ul>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">9. Animais de estimação e objetos em movimento</h3>
            <p>Pets circulando, cortinas balançando ou objetos pendurados próximos a sensores de movimento podem causar disparos.</p>
            <p><strong className="text-white">Como resolver:</strong> use sensores pet-immune, reposicione sensores mais altos, ou substitua por sensores de porta/janela nos ambientes onde os pets circulam.</p>
          </div>
        ),
      },
      {
        h2: 'Como reduzir falsos alarmes: passo a passo',
        content: (
          <ol className="space-y-2 list-decimal list-inside">
            <li>Ajuste a sensibilidade dos sensores conforme o ambiente de cada um.</li>
            <li>Substitua baterias preventivamente a cada 12-18 meses.</li>
            <li>Limpe os sensores periodicamente (a cada 3-6 meses).</li>
            <li>Treine todos os usuários do sistema.</li>
            <li>Aumente os tempos de atraso de entrada e saída.</li>
            <li>Verifique portas e janelas antes de armar o sistema.</li>
            <li>Contrate manutenção preventiva profissional — identifica problemas antes de virarem disparos recorrentes.</li>
          </ol>
        ),
      },
      {
        h2: 'Quando chamar um técnico especializado',
        content: (
          <div className="space-y-4">
            <ul className="space-y-2 list-disc list-inside">
              <li>Sensor específico disparando repetidamente após limpeza e ajuste.</li>
              <li>Central reiniciando ou disparando sozinha sem sensores ativos.</li>
              <li>Sistema com fio apresentando falhas intermitentes.</li>
              <li>Falsos alarmes recorrentes em condomínios.</li>
              <li>Sistema com mais de 3 anos sem manutenção preventiva.</li>
            </ul>
            <p>A Intelsecsul atende chamados de diagnóstico e manutenção de alarmes em Curitiba e Região Metropolitana, com avaliação técnica no local antes de qualquer orçamento.</p>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: (
          <div className="space-y-4">
            <p>Alarme disparando sozinho é um problema incômodo, mas quase sempre tem solução simples. As causas mais comuns — sensores mal calibrados, baterias fracas, sujeira, interferências e erros de operação — podem ser diagnosticadas e corrigidas com verificações básicas.</p>
            <p>O que resolve o problema no longo prazo é a combinação de instalação profissional, manutenção preventiva regular e uso consciente do sistema. Um alarme que "chora lobo" demais acaba sendo ignorado quando um evento real acontece. Se você já resolveu os falsos alarmes e quer manter todo o sistema — câmeras, cercas, portões e alarme — sem surpresas, vale considerar um <Link to="/blog/contrato-manutencao-ou-chamar-quando-quebra" className="text-white underline hover:text-slate-300">contrato de manutenção preventiva</Link>.</p>
          </div>
        ),
      },
    ],
    relatedQuestions: [
      {
        question: 'Alarme disparando sozinho pode ser sinal de invasão?',
        answer: 'Não, na grande maioria dos casos é falso alarme — causado por sensores mal ajustados, baterias fracas, interferências ou erros de operação. Se vier acompanhado de outros sinais (janela arrombada, objetos fora de lugar), aí sim pode indicar invasão real — nesse caso, acione a polícia.',
      },
      {
        question: 'Quantos falsos alarmes por ano são considerados normais?',
        answer: 'O ideal é zero. Um sistema bem instalado, configurado e mantido não deve disparar sem motivo. Disparos recorrentes indicam um problema que precisa ser corrigido.',
      },
      {
        question: 'Como desligar o alarme quando ele dispara sozinho?',
        answer: 'Digite o código de desarme no teclado. Se for monitorado, informe a central de monitoramento que é um falso alarme usando sua senha de cancelamento. Nunca saia correndo para verificar a origem do barulho.',
      },
      {
        question: 'Alarme sem fio dispara mais do que alarme com fio?',
        answer: 'Não necessariamente. A diferença está na manutenção: sensores sem fio dependem de bateria, sensores com fio dependem da integridade da fiação. Ambos exigem manutenção preventiva.',
      },
      {
        question: 'Existe multa para quem tem muitos falsos alarmes?',
        answer: 'Em algumas cidades, sim — projetos de lei e regulamentos municipais preveem advertência e multa para proprietários com chamados falsos recorrentes.',
      },
    ],
    internalLink: {
      text: 'Seu sistema de alarme precisa de instalação ou revisão técnica?',
      url: '/servicos/instalacao-de-alarmes/',
      linkText: 'Ver Instalação de Alarmes',
    },
    whatsappMessage: 'Vim do blog e meu alarme está disparando sozinho',
    ctaFinal: {
      title: 'Seu alarme está disparando sozinho? Precisa de ajuda para identificar a causa?',
      text: 'A Intelsecsul realiza diagnóstico e manutenção de sistemas de alarme em Curitiba e Região Metropolitana, identificando as causas dos falsos alarmes e recomendando as correções necessárias.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'interfone-nao-toca-no-apartamento-causas-testes',
    slug: 'interfone-nao-toca-no-apartamento-causas-testes',
    title: 'Interfone Não Toca no Apartamento: Causas e Sequência de Testes | Intelsecsul',
    metaTitle: 'Interfone Não Toca no Apartamento: Causas e Sequência de Testes | Intelsecsul',
    metaDescription: 'Interfone não toca no apartamento? Veja as causas mais comuns — defeito no aparelho, fonte, cabeamento ou central — e siga a sequência de testes certa para identificar o problema.',
    h1: 'Interfone não toca no apartamento: causas e sequência de testes',
    category: 'Interfonia',
    readTime: '10 min de leitura',
    publishedDate: '2026-09-22',
    summary: 'Quando o interfone não toca no apartamento, o problema pode estar em quatro pontos: no aparelho interno, na fonte de alimentação da central, no cabeamento do ramal, ou na própria central do condomínio. A ordem de investigação pode ser padronizada — comece pelo mais simples e avance até a central.',
    intro: 'Quando o interfone não toca no apartamento, o problema pode estar em quatro pontos distintos do sistema: no aparelho interno (fone ou monitor), na fonte de alimentação da central, no cabeamento que liga a central ao seu ramal, ou na própria central de interfonia do condomínio. A boa notícia é que a ordem de investigação pode ser padronizada — e na maioria dos casos, o morador ou o síndico consegue identificar em qual desses quatro pontos está a falha antes mesmo de chamar um técnico. A lógica é simples: comece pelo mais fácil e mais próximo de você, e vá avançando em direção à central.',
    sections: [
      {
        h2: 'Triagem rápida: é só o seu apartamento ou o prédio todo?',
        content: (
          <div className="space-y-4">
            <p>Antes de qualquer teste no seu aparelho, a primeira verificação é coletiva. Converse com um vizinho, pergunte se o interfone dele está funcionando normalmente. Essa informação muda completamente o diagnóstico:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Se apenas o seu apartamento não toca:</strong> o problema está no seu aparelho interno, no seu ramal ou na fiação privativa do imóvel. A central do condomínio está funcionando — o problema é pontual no seu ponto.</li>
              <li><strong className="text-white">Se vários apartamentos (ou todos) não tocam:</strong> o problema está na central de interfonia ou na fonte de alimentação da central. Não faz sentido mexer no seu aparelho — a solução exige um técnico na casa de máquinas.</li>
            </ul>
            <p>Essa distinção evita que você desmonte o seu interfone à toa quando o defeito está na central — e evita que o síndico chame uma equipe para a central quando o problema é apenas um fone com defeito em um único apartamento.</p>
          </div>
        ),
      },
      {
        h2: 'Verificações no aparelho interno (o que o morador pode checar)',
        content: (
          <div className="space-y-4">
            <p>Se o problema é só no seu apartamento, comece pelo que está na sua mão. Estas verificações são simples, seguras e resolvem boa parte dos casos.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Volume de campainha no mínimo ou no mudo</h3>
            <p>A causa mais banal — e uma das mais comuns — é o volume do toque estar no mínimo ou no modo silencioso. Verifique se o volume está audível e se o aparelho não está em modo silencioso.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Fone fora do gancho ou gancho travado</h3>
            <p>Se o fone estiver mal encaixado, a linha do seu ramal fica "ocupada" e a portaria não consegue completar a chamada. Verifique se o fone está bem encaixado e se o gancho não está travado ou quebrado.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Aparelho desligado ou sem energia</h3>
            <p>Vídeo-porteiros e alguns interfones têm fonte de alimentação própria. Se estiver desligada, queimada ou com mau contato, o aparelho não recebe a chamada. Verifique se o LED do aparelho está aceso e a fonte conectada corretamente.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Teste de compatibilidade (aparelho novo ou trocado)</h3>
            <p>Se você trocou o interfone recentemente, verifique se o modelo é compatível com a central e se a chave Tone/Pulse está na posição correta. Em centrais digitais (tone), um aparelho configurado para pulse não completa chamadas.</p>
          </div>
        ),
      },
      {
        h2: 'Testes no ramal e no cabeamento (morador ou técnico)',
        content: (
          <div className="space-y-4">
            <p>Se as verificações no aparelho não resolveram, o próximo suspeito é o ramal — o par de fios que liga a central ao seu apartamento. Problemas aqui são comuns, especialmente em prédios com mais de 10 anos de uso.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Sinais de problema no ramal ou na fiação</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>O interfone não toca, mas quando você tira o fone do gancho, a portaria te ouve (ou você ouve a portaria) — a linha está viva, mas o sinal de ring não chega.</li>
              <li>O interfone funciona intermitentemente — às vezes toca, às vezes não.</li>
              <li>Você ouve chiado, zumbido ou voz baixa durante a conversa, mesmo com o volume no máximo.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que causa defeito no ramal</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Oxidação nos conectores</strong> — umidade que penetra nos bornes ao longo dos anos impede a passagem do sinal.</li>
              <li><strong className="text-white">Fio rompido ou emenda mal feita</strong> — na tubulação ou na caixa de distribuição do andar.</li>
              <li><strong className="text-white">Interferência de outros pares</strong> — em prédios antigos, pares de fios cruzados ou em curto podem afetar o sinal.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Teste que o morador pode fazer</h3>
            <p>Desconecte o fone do interfone da caixa de conexão e verifique visualmente se os fios estão bem presos e sem sinais de oxidação (cor esverdeada ou escura no cobre). Não mexa nos fios da tubulação — apenas nos bornes de conexão do seu aparelho. Se estiverem soltos ou oxidados, um técnico pode limpar e reconectar.</p>
          </div>
        ),
      },
      {
        h2: 'Testes na central e na fonte (síndico ou técnico)',
        content: (
          <div className="space-y-4">
            <p>Se vários apartamentos estão com o mesmo problema, a investigação se volta para a central de interfonia e para a fonte de alimentação. Estes testes exigem multímetro e conhecimento técnico, e são de responsabilidade do condomínio.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">O que verificar na fonte</h3>
            <p>A fonte de alimentação da central gera a tensão de ring (GTOQ) — o sinal elétrico que faz o telefone tocar. Na maioria das centrais Intelbras (linha CP), a tensão correta entre o conector GTOQ e o GND é de 100 a 110 VDC (alguns modelos aceitam até 120 VDC). Se a medição estiver muito abaixo disso (ou zerada), o problema está na fonte.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que verificar na central</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Fusíveis da central:</strong> um fusível queimado pode interromper o sinal de ring para todos os ramais.</li>
              <li><strong className="text-white">Placas de ramal:</strong> em centrais modulares, cada placa atende um grupo de ramais. Trocar a placa de posição com outra é um teste útil para isolar o defeito.</li>
              <li><strong className="text-white">Programação da central:</strong> verifique se não foi reprogramada acidentalmente — funções como "não perturbe" em um ramal podem impedir chamadas.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Teste com "Hot Portaria"</h3>
            <p>Algumas centrais Intelbras têm a função Hot Portaria, que permite que qualquer ramal, ao retirar o telefone do gancho, disque diretamente para a portaria. Se o ramal consegue chamar a portaria mas não toca quando a portaria chama, o problema é especificamente no circuito de ring — e não na fiação de voz.</p>
          </div>
        ),
      },
      {
        h2: 'Sequência de testes passo a passo',
        content: (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-white font-bold">Passo</th>
                  <th className="text-left p-3 text-white font-bold">O que testar</th>
                  <th className="text-left p-3 text-white font-bold">Quem pode fazer</th>
                  <th className="text-left p-3 text-white font-bold">Se o teste falhar</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">1</td><td className="p-3">Pergunte a um vizinho: o interfone dele toca?</td><td className="p-3">Morador</td><td className="p-3">Se não, o problema é coletivo (central/fonte)</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">2</td><td className="p-3">Volume da campainha está audível? Aparelho está no mudo?</td><td className="p-3">Morador</td><td className="p-3">Ajuste o volume ou desative o mudo</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">3</td><td className="p-3">Fone está bem encaixado no gancho?</td><td className="p-3">Morador</td><td className="p-3">Reencaixe ou verifique o gancho</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">4</td><td className="p-3">A fonte do aparelho (se houver) está ligada?</td><td className="p-3">Morador</td><td className="p-3">Reconecte ou troque a fonte</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">5</td><td className="p-3">Fios no borne do aparelho estão soltos ou oxidados?</td><td className="p-3">Morador (com cuidado)</td><td className="p-3">Limpe os contatos ou chame técnico</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">6</td><td className="p-3">A tensão GTOQ na fonte da central está entre 100-110 VDC?</td><td className="p-3">Síndico / Técnico</td><td className="p-3">Troque a placa fonte</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">7</td><td className="p-3">Fusíveis da central estão íntegros?</td><td className="p-3">Síndico / Técnico</td><td className="p-3">Substitua os fusíveis</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">8</td><td className="p-3">Placas de ramal estão funcionando?</td><td className="p-3">Técnico</td><td className="p-3">Substitua a placa defeituosa</td></tr>
                <tr><td className="p-3 font-semibold text-white">9</td><td className="p-3">O ramal consegue chamar a portaria (Hot Portaria)?</td><td className="p-3">Técnico</td><td className="p-3">Se sim, o problema é só no ring; se não, é fiação</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        h2: 'Quando chamar um técnico especializado',
        content: (
          <div className="space-y-4">
            <ul className="space-y-2 list-disc list-inside">
              <li>Vários apartamentos sem toque — mexer na central ou fonte sem qualificação pode danificar o sistema inteiro.</li>
              <li>Suspeita de fio rompido na tubulação — exige ferramentas e acesso à infraestrutura do prédio.</li>
              <li>Central travada ou com programação alterada.</li>
              <li>Aparelho que não toca mas a portaria ouve você — indica problema no circuito de ring, precisa de teste com multímetro.</li>
              <li>Sistema com mais de 5 anos sem manutenção preventiva.</li>
            </ul>
            <p>A Intelsecsul atende chamados de diagnóstico e manutenção de interfonia em Curitiba e Região Metropolitana, tanto para moradores (ramal individual) quanto para síndicos (central e sistema coletivo).</p>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: (
          <div className="space-y-4">
            <p>Interfone que não toca no apartamento tem, na grande maioria dos casos, uma causa identificável — e a triagem correta evita gastos desnecessários e chamados técnicos precipitados. A regra de ouro: primeiro descubra se o problema é só do seu apartamento ou do prédio todo.</p>
            <p>Para síndicos, uma sequência de testes na central e na fonte identifica com precisão onde está o defeito — e, para condomínios que já tiveram esse tipo de imprevisto, um <Link to="/blog/contrato-manutencao-ou-chamar-quando-quebra" className="text-white underline hover:text-slate-300">contrato de manutenção preventiva</Link> cobrindo interfonia evita que o sistema pare de vez sem aviso.</p>
          </div>
        ),
      },
    ],
    relatedQuestions: [
      {
        question: 'O interfone não toca, mas quando atendo a portaria me ouve. O que pode ser?',
        answer: 'Isso indica que a fiação de voz está funcionando, mas o sinal de ring não está chegando ao seu aparelho. As causas mais prováveis são: defeito no circuito de ring do aparelho, tensão GTOQ baixa na fonte da central (se afetar vários ramais) ou problema no par de fios do seu ramal.',
      },
      {
        question: 'O interfone não toca e nem a portaria me ouve. O que fazer?',
        answer: 'O problema é mais amplo: pode ser o fone com defeito, o ramal desconectado ou a central sem alimentação. Comece verificando se o fone está bem encaixado e se a fonte está ligada. Verifique com um vizinho se o interfone dele funciona para isolar se é só no seu apartamento ou no prédio todo.',
      },
      {
        question: 'Quanto custa consertar um interfone que não toca?',
        answer: 'Depende da causa. Um reparo simples no aparelho (limpeza de contatos, troca de fone) pode custar a partir de R$ 100. Já a substituição da placa fonte da central, quando o problema é coletivo, tem custo médio mais elevado — em condomínios, reparos na central costumam ficar na faixa de R$ 1.000, podendo chegar a R$ 4.500 em casos de substituição de equipamentos.',
      },
      {
        question: 'O interfone de um apartamento específico não toca. O condomínio é responsável pelo conserto?',
        answer: 'Em geral, a central e a fiação comum são de responsabilidade do condomínio. Já o aparelho interno costuma ser de responsabilidade do morador. A fiação privativa pode ser de um ou de outro, dependendo da convenção do condomínio — o ideal é consultar o síndico antes de decidir quem paga.',
      },
    ],
    internalLink: {
      text: 'Seu interfone não está tocando ou precisa de manutenção na central?',
      url: '/servicos/interfonia/',
      linkText: 'Ver Interfonia',
    },
    whatsappMessage: 'Vim do blog e meu interfone não está tocando',
    ctaFinal: {
      title: 'Seu interfone não está tocando? Precisa de ajuda para identificar o problema?',
      text: 'A Intelsecsul realiza diagnóstico e manutenção de interfonia em Curitiba e Região Metropolitana, para moradores, síndicos e administradoras de condomínio.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'sistema-de-seguranca-parou-o-que-fazer',
    slug: 'sistema-de-seguranca-parou-o-que-fazer',
    title: 'Todo o Sistema de Segurança Parou: O Que Fazer e o Que Não Mexer | Intelsecsul',
    metaTitle: 'Todo o Sistema de Segurança Parou: O Que Fazer e o Que Não Mexer | Intelsecsul',
    metaDescription: 'Câmeras, alarme, portão e interfone pararam ao mesmo tempo? Veja o que desligar com segurança, o que não mexer de jeito nenhum e quando chamar um técnico especializado.',
    h1: 'Todo o sistema de segurança parou: o que desligar, o que não mexer e quando chamar técnico',
    category: 'Manutenção',
    readTime: '9 min de leitura',
    publishedDate: '2026-09-22',
    summary: 'Quando câmeras, alarme, portão e interfone param ao mesmo tempo, a causa quase nunca é um defeito isolado em cada equipamento — geralmente é um ponto único de falha: a mesma alimentação elétrica, a mesma rede ou a mesma central de integração.',
    intro: 'Quando câmeras, alarme, portão eletrônico, interfone e controle de acesso param de funcionar simultaneamente, a causa quase nunca é um defeito isolado em cada equipamento. O que acontece, na prática, é que esses sistemas compartilham pontos em comum: a mesma alimentação elétrica, a mesma rede ou a mesma central de integração. Isso significa que o problema provavelmente está em um ponto único de falha — e boa parte da triagem inicial pode ser feita com segurança por você, desde que respeitando limites claros do que não se deve fazer.',
    sections: [
      {
        h2: 'Primeiro: o que fazer antes de qualquer coisa',
        content: (
          <div className="space-y-4">
            <p>Antes de tocar em qualquer equipamento, siga esta ordem de verificações — do mais simples e seguro ao mais complexo.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">1. Verifique se o problema é geral ou setorial</h3>
            <p>Pergunte a vizinhos, funcionários ou moradores: o sistema de outros imóveis ou áreas também parou? Se sim, a causa provavelmente é externa — queda de energia no bairro, manutenção da internet, ou problema na rede elétrica do condomínio. Se não, o problema está dentro do seu imóvel.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">2. Verifique o disjuntor do sistema de segurança</h3>
            <p>A maioria dos sistemas tem um disjuntor dedicado no quadro de distribuição. Se ele desarmou, todos os equipamentos ligados a ele param ao mesmo tempo.</p>
            <p><strong className="text-white">O que fazer:</strong> localize o disjuntor e verifique se está na posição "ON". Se estiver desarmado, rearme uma única vez. Se desarmar de novo, não insista — indica curto-circuito ou sobrecarga que exige um eletricista ou técnico especializado.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">3. Verifique a alimentação dos equipamentos principais</h3>
            <p>Para cada equipamento, verifique se o LED de power está aceso:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">DVR/NVR:</strong> se o LED frontal estiver apagado, verifique a fonte e o cabo de força. Se as gravações pararem de aparecer sem energia visível, vale conferir também as <Link to="/blog/camera-fora-do-ar-causas-solucoes" className="text-white underline hover:text-slate-300">causas mais comuns de câmera fora do ar</Link>.</li>
              <li><strong className="text-white">Central de alarme:</strong> se o teclado estiver apagado, a central perdeu alimentação principal — pode estar operando só na bateria de backup, sem sinal de sensores sem fio. Se o alarme por acaso continuar <Link to="/blog/alarme-disparando-sozinho-causas-reduzir-falsos-alarmes" className="text-white underline hover:text-slate-300">disparando sozinho</Link> depois de normalizado, vale investigar à parte.</li>
              <li><strong className="text-white">Portão eletrônico:</strong> se o motor não responde e não há LED na central, a alimentação foi interrompida.</li>
              <li><strong className="text-white">Interfone/portaria:</strong> se o monitor ou fone não acende, verifique a fonte do aparelho.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">4. Verifique se há sinal de queimado ou dano visível</h3>
            <p>Cheiro de queimado, marcas escuras em tomadas, fontes deformadas ou cabos com isolamento derretido são sinais de alerta grave. Nesses casos, não ligue nada de volta e chame um profissional imediatamente — danos elétricos podem causar incêndio.</p>
          </div>
        ),
      },
      {
        h2: 'O que NÃO fazer (e por que é importante)',
        content: (
          <div className="space-y-4">
            <p>Em situações de urgência, a tentação de "mexer para ver se resolve" é grande — mas algumas ações podem piorar o problema, danificar equipamentos ou comprometer evidências de um evento real.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">❌ Não abra o DVR/NVR nem remova a tampa</h3>
            <p>Não há peças reparáveis pelo usuário dentro do gravador, e abrir o equipamento anula a garantia. O interior retém carga elétrica mesmo após o desligamento — o risco de choque é real.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não desconecte o HD do DVR para "testar"</h3>
            <p>O disco rígido contém as gravações — evidências em caso de furto, invasão ou acidente. Remover, formatar ou conectar a outro computador pode alterar metadados, quebrar a cadeia de custódia e tornar as imagens inutilizáveis em um processo judicial.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não formate o HD nem reinicie o sistema repetidamente</h3>
            <p>Formatar apaga todas as gravações. Não importa se o sistema está lento ou travando — nunca formate como tentativa de solução. Reinícios repetidos podem corromper o sistema de arquivos do gravador.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não mexa na fiação elétrica além do disjuntor</h3>
            <p>Se o disjuntor rearmou e desarmou de novo, não fique rearmando — indica defeito que precisa ser diagnosticado com multímetro por um profissional.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não desmonte sensores, câmeras ou centrais</h3>
            <p>Sensores fazem parte de um sistema de zonas — mexer sem entender a programação da central pode desconfigurar todo o sistema, além de danificar placas e anular garantias.</p>
          </div>
        ),
      },
      {
        h2: 'Preservação de evidências: por que isso importa',
        content: (
          <div className="space-y-4">
            <p>Se o sistema parou após um evento real — furto, tentativa de invasão, acidente —, as gravações do DVR/NVR podem ser a única prova disponível. Nesse cenário, preservar as evidências é tão importante quanto reparar o sistema.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">O que fazer para preservar as gravações</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Não desligue o DVR/NVR.</strong> Enquanto ligado, ele continua gravando.</li>
              <li><strong className="text-white">Anote a data e a hora do evento.</strong> Essencial para localizar as gravações no HD.</li>
              <li><strong className="text-white">Não exporte nem copie arquivos sem orientação.</strong> Sem os procedimentos adequados (hash, cadeia de custódia), o valor probatório pode ser comprometido.</li>
              <li><strong className="text-white">Documente o estado do sistema.</strong> Fotos do DVR/NVR, conexões, LEDs e mensagens de erro ajudam o técnico e, em caso de perícia, comprovam o estado do equipamento.</li>
              <li><strong className="text-white">Não formate, não apague, não sobrescreva.</strong> Se precisar preservar um período específico, a configuração do DVR deve ser feita por um técnico.</li>
            </ul>
          </div>
        ),
      },
      {
        h2: 'Quando chamar um técnico especializado',
        content: (
          <div className="space-y-4">
            <p>A triagem inicial (disjuntor, LEDs, alimentação) pode ser feita por você. Mas há cenários em que a intervenção profissional é obrigatória:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>🚨 O disjuntor rearmou e desarmou novamente — curto-circuito ou sobrecarga.</li>
              <li>🚨 Há cheiro de queimado ou dano visível em fontes, tomadas, cabos ou equipamentos.</li>
              <li>🚨 O DVR/NVR liga mas não dá imagem em nenhum monitor.</li>
              <li>🚨 O sistema parou após queda de energia ou descarga elétrica (raio).</li>
              <li>🚨 O sistema parou após um evento real — além do reparo, é preciso preservar evidências.</li>
              <li>🚨 Vários equipamentos de sistemas diferentes pararam juntos e o disjuntor não resolveu.</li>
              <li>🚨 Você não se sente seguro para fazer as verificações.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que o técnico vai verificar</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Medição de tensão na fonte e nos pontos de alimentação.</li>
              <li>Teste de continuidade nos cabos de rede e alimentação.</li>
              <li>Verificação do HD do DVR/NVR (saúde do disco, setores defeituosos, espaço disponível).</li>
              <li>Teste de firmware e possibilidade de recuperação sem perda de dados.</li>
              <li>Inspeção da central de alarme — bateria de backup, fusíveis, zonas.</li>
              <li>Verificação da integração entre sistemas, se houver automação centralizada.</li>
            </ul>
            <p>A Intelsecsul atende chamados de diagnóstico e manutenção em Curitiba e Região Metropolitana, com avaliação técnica no local antes de qualquer orçamento. Se o problema persistir mesmo após a triagem, um <Link to="/blog/contrato-manutencao-ou-chamar-quando-quebra" className="text-white underline hover:text-slate-300">contrato de manutenção preventiva</Link> reduz a chance desse tipo de parada acontecer de novo.</p>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: 'Quando todo o sistema de segurança para de funcionar ao mesmo tempo, a reação mais comum é o desespero — mas a abordagem correta é metódica. Verifique o disjuntor, confira os LEDs, identifique se o problema é geral ou setorial. O que não fazer é igualmente importante: não abra o DVR, não remova o HD, não formate nada, não fique rearmando disjuntor que desarma repetidamente. Se houve um evento real, preserve as evidências. Se a triagem inicial não resolveu, ou há sinal de dano elétrico, a intervenção de um técnico especializado é o caminho mais seguro.',
      },
    ],
    relatedQuestions: [
      {
        question: 'Todo o sistema parou de uma vez. É sinal de sabotagem?',
        answer: 'Não necessariamente. Na grande maioria dos casos, a causa é elétrica (disjuntor, fonte, queda de energia) ou de rede (roteador, switch). Sabotagem é rara, mas se você suspeita — especialmente se o sistema parou logo após um evento ou tentativa de invasão —, preserve as evidências e chame a polícia antes de mexer em qualquer equipamento.',
      },
      {
        question: 'Posso simplesmente desligar tudo e ligar de novo?',
        answer: 'Não recomendamos. Um "reset geral" pode resolver travamentos simples, mas também pode interromper gravações não salvas, apagar configurações do DVR/NVR, reiniciar a central de alarme e perder a programação de zonas, ou piorar um problema de HD que já estava em falha. Verifique o disjuntor e os LEDs primeiro — o reset geral só deve ser feito com orientação de um técnico.',
      },
      {
        question: 'O DVR está ligado (LED aceso) mas não aparece imagem. O que pode ser?',
        answer: 'As causas mais comuns são: cabo de vídeo solto ou com defeito, monitor desligado ou na entrada errada, saída de vídeo configurada incorretamente, ou falha na placa de vídeo do gravador. Não abra o DVR para verificar — teste primeiro o cabo e o monitor.',
      },
      {
        question: 'O alarme parou de funcionar junto com as câmeras. Isso é normal?',
        answer: 'Sim, se os dois sistemas compartilham a mesma alimentação ou rede — é comum o DVR/NVR e a central de alarme serem alimentados pelo mesmo circuito ou conectados ao mesmo switch. Se o disjuntor desse circuito desarmar, ambos param juntos. A solução é verificar o disjuntor e, se persistir, avaliar a separação dos circuitos.',
      },
      {
        question: 'Quanto tempo o sistema pode ficar parado sem perder gravações?',
        answer: 'Depende da falha. Se o DVR/NVR está desligado, ele para de gravar e não há registro do período fora do ar. Se está ligado mas as câmeras estão offline, o DVR pode continuar gravando os canais que ainda funcionam. Em qualquer caso, o período sem gravação é uma lacuna que não pode ser recuperada depois.',
      },
    ],
    internalLink: {
      text: 'Seu sistema de segurança parou e você precisa de diagnóstico urgente?',
      url: '/servicos/manutencao/',
      linkText: 'Ver Manutenção de Sistemas',
    },
    whatsappMessage: 'Vim do blog e meu sistema de segurança parou',
    ctaFinal: {
      title: 'Todo o sistema de segurança parou? Precisa de diagnóstico técnico urgente?',
      text: 'A Intelsecsul atende chamados de diagnóstico e manutenção de sistemas de segurança em Curitiba e Região Metropolitana, com avaliação técnica no local antes de qualquer orçamento.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'porta-automatica-nao-abre-causas-sensor-alimentacao-mecanismo',
    slug: 'porta-automatica-nao-abre-causas-sensor-alimentacao-mecanismo',
    title: 'Porta Automática Não Abre: Causas do Sensor, Alimentação e Mecanismo | Intelsecsul',
    metaTitle: 'Porta Automática Não Abre: Causas do Sensor, Alimentação e Mecanismo | Intelsecsul',
    metaDescription: 'Porta automática não abre? Veja as causas mais comuns — sensor desalinhado ou sujo, falha de alimentação e problema no mecanismo — e saiba quando a manutenção é obrigatória por risco de esmagamento.',
    h1: 'Porta automática não abre: causas do sensor, alimentação e mecanismo',
    category: 'Portas Automáticas',
    readTime: '10 min de leitura',
    publishedDate: '2026-09-22',
    summary: 'Quando uma porta automática não abre, o problema está quase sempre em um de três sistemas: o sensor de ativação, a alimentação elétrica ou o mecanismo (trilhos, correia, rolamentos e motor). Parte da triagem pode ser feita com segurança, mas qualquer intervenção além da verificação visual exige um técnico, por risco real de esmagamento.',
    intro: 'Quando uma porta automática não abre, o problema está quase sempre em um de três sistemas: o sensor de ativação (que detecta a aproximação de pessoas), a alimentação elétrica (que fornece energia ao motor e à central) ou o mecanismo (trilhos, correia, rolamentos e motor). A boa notícia é que parte da triagem inicial pode ser feita com segurança por você, sem abrir o equipamento. A má notícia é que portas automáticas envolvem risco real de esmagamento — e qualquer intervenção que ultrapasse a verificação visual exige um técnico especializado, tanto por segurança quanto por conformidade com as normas vigentes.',
    sections: [
      {
        h2: 'Antes de tudo: triagem segura em 3 passos',
        content: (
          <div className="space-y-4">
            <p>Antes de investigar causas específicas, faça estas três verificações — todas seguras, sem abrir equipamentos.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">1. Verifique o interruptor de programa (seletor de funções)</h3>
            <p>Muitas portas têm um seletor de programas com modos como Automático, Aberto, Fechado, Noturno e OFF. Se estiver em OFF ou Fechado, a porta não vai abrir por mais que o sensor detecte movimento — e isso não é um defeito.</p>
            <p><strong className="text-white">O que fazer:</strong> localize o seletor e confirme se está em Automático ou Aberto. Se não souber qual posição é a correta, não force a chave — chame um técnico.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">2. Verifique se há obstáculo na área de detecção do sensor</h3>
            <p>O sensor pode estar interpretando um objeto fixo — vaso, display, placa, tapete — como obstáculo permanente, mantendo a porta fechada por segurança.</p>
            <p><strong className="text-white">O que fazer:</strong> remova temporariamente qualquer objeto na área de detecção (1 a 2 metros na frente da porta) e observe se ela volta a abrir. Se sim, reposicione o objeto para fora da zona.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">3. Verifique se há energia no sistema</h3>
            <p>Se o display estiver apagado, o LED do sensor não acender e a porta não reagir a nenhum comando, verifique o disjuntor dedicado no quadro elétrico. Se estiver desarmado, rearme uma única vez. Se desarmar de novo, não insista — indica curto-circuito ou sobrecarga, e a intervenção de um eletricista é obrigatória.</p>
          </div>
        ),
      },
      {
        h2: 'Causa 1: Sensor de ativação com problema',
        content: (
          <div className="space-y-4">
            <p>O sensor de ativação é o componente que "vê" a aproximação de pessoas e envia o comando de abertura. Quando falha, a porta fica fechada mesmo com movimento na frente — ou abre e fecha de forma intermitente.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Sinais de problema no sensor</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>A porta não abre quando alguém se aproxima, mas abre pelo botão de emergência ou comando manual.</li>
              <li>A porta abre e fecha sozinha, sem ninguém na frente.</li>
              <li>O LED do sensor não acende quando alguém passa pela zona de detecção.</li>
              <li>A porta abre apenas uma fresta e para, mesmo com pessoas na frente.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Causas mais comuns no sensor</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Sensor sujo ou com gotas de água.</strong> Poeira e resíduos na lente impedem a detecção correta — comum em entradas comerciais e ambientes externos.</li>
              <li><strong className="text-white">Sensor desalinhado.</strong> Uma pancada, limpeza brusca ou desgaste do suporte pode desalinhar a zona de detecção.</li>
              <li><strong className="text-white">Reflexos e interferências.</strong> Pisos refletores, superfícies espelhadas e correntes de ar podem criar falsas detecções ou bloquear a real.</li>
              <li><strong className="text-white">Sensibilidade desregulada.</strong> Muito baixa não detecta pessoas; muito alta detecta movimento do lado de fora e abre sem necessidade.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que você pode fazer (e o que não pode)</h3>
            <p><strong className="text-white">Pode fazer:</strong> limpar a lente com pano seco e macio — nunca álcool, thinner ou produtos abrasivos. Verificar visualmente se o sensor está apontado para a área correta. Remover objetos da zona de detecção.</p>
            <p><strong className="text-white">Não pode fazer:</strong> abrir o sensor, alterar a sensibilidade, mudar o angle ou a profundidade da zona de detecção, ou mexer nos dip switches internos — esses ajustes podem comprometer a segurança anti-esmagamento se feitos incorretamente.</p>
          </div>
        ),
      },
      {
        h2: 'Causa 2: Falha na alimentação elétrica',
        content: (
          <div className="space-y-4">
            <p>A porta depende de energia para alimentar o motor, a central de controle e os sensores. Problemas de alimentação deixam a porta completamente inoperante.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Sinais de problema na alimentação</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Display do operador apagado e porta sem nenhuma reação.</li>
              <li>Porta funcionando com bateria de reserva — movimento mais lento, LED aceso só durante o ciclo.</li>
              <li>Fusível queimado na fonte ou no quadro de distribuição.</li>
              <li>Tomada sem energia ou disjuntor desarmado.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Causas mais comuns na alimentação</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Disjuntor desarmado ou fusível queimado.</strong> Se o disjuntor rearmar e desarmar de novo, há um defeito no circuito que exige diagnóstico profissional.</li>
              <li><strong className="text-white">Queda de energia.</strong> A porta pode manter-se fechada ou operar com bateria de reserva por tempo limitado; se a bateria estiver descarregada, pode não retomar o funcionamento normal.</li>
              <li><strong className="text-white">Fonte de alimentação com defeito.</strong> Pode queimar após surtos elétricos ou desgaste natural — quando queima, o sistema todo para, não só o motor.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que você pode fazer</h3>
            <p><strong className="text-white">Pode fazer:</strong> verificar se o disjuntor está em "ON" e rearmar uma única vez se estiver desarmado. Confirmar visualmente se a tomada do operador está energizada.</p>
            <p><strong className="text-white">Não pode fazer:</strong> abrir a fonte de alimentação, trocar fusíveis internos sem conhecer a especificação, ou insistir no rearme repetido do disjuntor — isso pode causar dano elétrico ou incêndio.</p>
          </div>
        ),
      },
      {
        h2: 'Causa 3: Problema no mecanismo',
        content: (
          <div className="space-y-4">
            <p>Se o sensor está funcionando e a alimentação está presente, mas a porta continua sem abrir, o problema pode estar no mecanismo: trilhos, correia, rolamentos, motor ou sistema de travamento.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Sinais de problema no mecanismo</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>O motor faz ruído mas a porta não se move — a transmissão não está transferindo o movimento.</li>
              <li>A porta abre apenas parcialmente e trava no meio do curso.</li>
              <li>A porta está pesada e exige esforço manual para abrir.</li>
              <li>Ruído excessivo durante a operação (rangido, estalo, batida).</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Causas mais comuns no mecanismo</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Sujeira no trilho inferior.</strong> Poeira, areia e resíduos aumentam o atrito e podem travar a porta — recorrente em portas externas.</li>
              <li><strong className="text-white">Correia frouxa ou rompida.</strong> O motor "roda no vazio": você ouve o motor funcionando, mas a porta não se move.</li>
              <li><strong className="text-white">Rolamentos desgastados.</strong> Aumentam o atrito e fazem a porta travar ou se mover de forma irregular.</li>
              <li><strong className="text-white">Bloqueio mecânico ativado.</strong> Uma trava elétrica (magnética) ou mecânica (pino) pode estar acionada, impedindo a abertura.</li>
              <li><strong className="text-white">Objeto entalado sob a porta.</strong> Pedras ou detritos podem ficar presos entre a folha e o piso.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que você pode fazer</h3>
            <p><strong className="text-white">Pode fazer:</strong> remover sujeira visível do trilho inferior com escova macia ou aspirador. Verificar objetos entalados sob a folha. Observar se o motor faz ruído ao receber o comando.</p>
            <p><strong className="text-white">Não pode fazer:</strong> forçar a porta manualmente quando travada, abrir o operador, ajustar a correia ou lubrificar componentes internos — qualquer intervenção no mecanismo exige desligamento seguro e conhecimento técnico.</p>
          </div>
        ),
      },
      {
        h2: '⚠️ Quando parar imediatamente e chamar técnico',
        content: (
          <div className="space-y-4">
            <p>Portas automáticas envolvem risco de esmagamento, impacto e corte — especialmente em portas de correr motorizadas. A norma europeia EN 16005 exige dispositivos de proteção contra esmagamento, impacto e cisalhamento em portas automáticas de pedestres. No Brasil, a NBR 9050:2020 exige dispositivo de segurança que impeça o fechamento sobre pessoas.</p>
            <p className="font-bold text-white">Pare imediatamente e chame um técnico se:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>A porta fechou sobre uma pessoa, animal ou objeto — mesmo sem lesão, indica falha no sistema anti-esmagamento.</li>
              <li>O sensor de segurança (cortina infravermelha) não está funcionando.</li>
              <li>A porta abre e fecha repetidamente sem comando.</li>
              <li>Há ruído de peça solta ou batida metálica dentro do operador.</li>
              <li>A porta não reverte ao encontrar obstáculo — a reversão é obrigatória por norma.</li>
              <li>Há cheiro de queimado ou dano visível em componentes elétricos.</li>
              <li>O disjuntor rearmou e desarmou novamente.</li>
            </ul>
            <p>A Intelsecsul atende chamados de diagnóstico e manutenção de portas automáticas em Curitiba e Região Metropolitana, priorizando situações que envolvam falha de segurança. Esse tipo de risco vale ainda mais atenção se o seu sistema de segurança como um todo já apresentou <Link to="/blog/sistema-de-seguranca-parou-o-que-fazer" className="text-white underline hover:text-slate-300">outras paradas inesperadas</Link> — pode ser sinal de que uma revisão geral está atrasada.</p>
          </div>
        ),
      },
      {
        h2: 'Manutenção preventiva: a melhor forma de evitar a porta travada',
        content: (
          <div className="space-y-4">
            <p>A maioria dos problemas que levam uma porta a não abrir pode ser prevenida com manutenção preventiva regular. A recomendação técnica é realizar manutenção a cada 3 a 6 meses, dependendo do volume de uso — ambientes de grande fluxo (shoppings, hospitais, supermercados) exigem revisões mais frequentes.</p>
            <p className="font-bold text-white">A manutenção preventiva inclui:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Limpeza e ajuste dos sensores de ativação e de segurança.</li>
              <li>Limpeza e lubrificação do trilho superior e inferior.</li>
              <li>Verificação da tensão da correia e dos rolamentos.</li>
              <li>Teste do sistema anti-esmagamento e da função de reversão.</li>
              <li>Inspeção elétrica da fonte, cabeamento e fusíveis.</li>
              <li>Verificação da bateria de reserva (se aplicável).</li>
            </ul>
            <p>Portas automáticas instaladas em Curitiba e Região Metropolitana que operam sem manutenção preventiva têm risco significativamente maior de falhas inesperadas — e, mais grave, de falhas nos dispositivos de segurança.</p>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: 'Porta automática que não abre tem, na grande maioria dos casos, uma causa identificável em um dos três sistemas: sensor, alimentação ou mecanismo. A triagem segura — verificar o seletor de programa, remover obstáculos e checar a alimentação — resolve parte dos casos sem custo e sem risco. Mas portas automáticas não são portões residenciais: o risco de esmagamento é real, a legislação é específica, e qualquer intervenção além da limpeza externa exige um técnico qualificado. Se a triagem inicial não resolveu, a Intelsecsul realiza diagnóstico e manutenção de portas automáticas em Curitiba e Região Metropolitana, priorizando casos que envolvam falha de segurança.',
      },
    ],
    relatedQuestions: [
      {
        question: 'A porta automática não abre nem com o botão de emergência. O que pode ser?',
        answer: 'Se a porta não responde a nenhum comando, o problema provavelmente está na alimentação elétrica ou na central de controle. Verifique o disjuntor e o display do operador. Se o display estiver apagado, está sem energia; se estiver aceso mas a porta não reage, pode ser falha na placa ou no motor. Não abra o operador — chame um técnico.',
      },
      {
        question: 'Limpei o sensor e a porta continua não abrindo. O que mais pode ser?',
        answer: 'As causas mais prováveis são: sensor desalinhado, sensibilidade desregulada, interferência de reflexo (piso brilhante, superfície espelhada) ou falha no próprio sensor. Ajustes de ângulo e sensibilidade podem ser feitos pelo técnico na visita; substituição do sensor exige peça nova.',
      },
      {
        question: 'Porta automática abre sozinha, sem ninguém na frente. É perigoso?',
        answer: 'Sim, é um comportamento de risco. Pode indicar sensor com sensibilidade excessiva, interferência eletromagnética ou falha na central. Pode causar acidentes se abrir no momento em que alguém está passando. O ideal é um técnico reduzir a sensibilidade ou reposicionar a zona de detecção com segurança.',
      },
      {
        question: 'Quanto custa consertar uma porta automática que não abre?',
        answer: 'Depende da causa. Problemas simples (sensor sujo, trilho obstruído, seletor em OFF) podem ser resolvidos em uma visita de manutenção preventiva. Problemas de alimentação e de mecanismo variam conforme a peça — problemas na central ou no motor costumam ser os mais caros. O diagnóstico técnico no local evita trocas desnecessárias.',
      },
      {
        question: 'Porta automática funciona durante falta de energia?',
        answer: 'Depende do modelo. A maioria mantém a porta fechada e trancada durante a falta de energia, ou opera com bateria de reserva por tempo limitado. A NBR 9050 exige que portas de rota de saída com abertura automática tenham sistema antipânico para abertura manual em caso de falta de energia.',
      },
    ],
    internalLink: {
      text: 'Sua porta automática precisa de diagnóstico ou manutenção técnica?',
      url: '/servicos/portas-automaticas/',
      linkText: 'Ver Portas Automáticas',
    },
    whatsappMessage: 'Vim do blog e minha porta automática não está abrindo',
    ctaFinal: {
      title: 'Sua porta automática não está abrindo? Precisa de diagnóstico técnico?',
      text: 'A Intelsecsul realiza diagnóstico e manutenção de portas automáticas em Curitiba e Região Metropolitana, com avaliação técnica no local, priorizando casos que envolvam falha de segurança.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'quantas-cameras-de-seguranca-preciso-para-minha-casa',
    slug: 'quantas-cameras-de-seguranca-preciso-para-minha-casa',
    title: 'Quantas Câmeras de Segurança Preciso para Minha Casa? Como Calcular | Intelsecsul',
    metaTitle: 'Quantas Câmeras de Segurança Preciso para Minha Casa? Como Calcular | Intelsecsul',
    metaDescription: 'Descubra quantas câmeras de segurança sua casa realmente precisa. Regra prática por tipo de imóvel, pontos de cobertura essenciais e como calcular sem comprar a mais nem a menos.',
    h1: 'Quantas câmeras de segurança preciso para minha casa? Veja como calcular',
    category: 'Câmeras de Segurança',
    readTime: '10 min de leitura',
    publishedDate: '2026-09-28',
    summary: 'A resposta não está nos metros quadrados da casa, mas na contagem de pontos de acesso e ângulos cegos. Casas térreas simples ficam bem com 3 a 4 câmeras; sobrados, com 5 a 6; condomínios, com 8 a 16 ou mais.',
    intro: 'Quase todo mundo começa pelo caminho inverso: "minha casa tem 150 m², quantas câmeras preciso?". Mas câmera de segurança não cobre metros quadrados — ela cobre pontos de vulnerabilidade. A pergunta certa não é "quantas câmeras", e sim "onde preciso de visão". Cobrir bem com 4 câmeras certas vale mais do que 8 mal posicionadas apontando para o mesmo lugar.',
    sections: [
      {
        h2: 'Por que "quantas câmeras" é a pergunta errada?',
        content: (
          <div className="space-y-4">
            <p>Duas casas do mesmo tamanho podem precisar de números completamente diferentes, dependendo de quantos acessos e ângulos cegos cada uma tem.</p>
            <p>Pense como um instalador: o objetivo é não deixar nenhum acesso sem cobertura e nenhum canto cego onde alguém possa se aproximar sem aparecer. O número de câmeras é simplesmente a soma desses pontos, depois de eliminar sobreposições desnecessárias.</p>
            <p>Este guia ajuda você a calcular o número certo para o seu caso — seja para compra de um sistema CFTV ou para locação de câmeras — sem gastar demais nem ficar desprotegido. Se você mora em Curitiba ou Região Metropolitana, a Intelsecsul faz essa avaliação gratuitamente na visita técnica.</p>
          </div>
        ),
      },
      {
        h2: 'Regra prática: quantas câmeras para cada tipo de casa',
        content: (
          <div className="space-y-4">
            <p>Antes de entrar no detalhamento, uma referência rápida baseada em projetos residenciais reais:</p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-3 text-white font-bold">Tipo de imóvel</th>
                    <th className="text-left p-3 text-white font-bold">Quantidade típica</th>
                    <th className="text-left p-3 text-white font-bold">Pontos cobertos</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Casa térrea simples (até 2 dormitórios)</td><td className="p-3">3 a 4 câmeras</td><td className="p-3">Portão, garagem, fundos, área de serviço</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Casa térrea média (3 dormitórios, lateral)</td><td className="p-3">4 a 6 câmeras</td><td className="p-3">Portão, garagem, laterais, fundos, área de serviço</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Sobrado (2 pavimentos)</td><td className="p-3">5 a 6 câmeras</td><td className="p-3">Entrada, garagem, laterais externas, fundos + 1 externa no pavimento superior</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Casa grande com muro extenso</td><td className="p-3">6 a 8 câmeras</td><td className="p-3">Perímetro completo, acessos secundários, corredor lateral</td></tr>
                  <tr><td className="p-3 font-semibold text-white">Condomínio residencial (áreas comuns)</td><td className="p-3">8 a 16+ câmeras</td><td className="p-3">Portaria, garagens, áreas de lazer, circulação, perimetral</td></tr>
                </tbody>
              </table>
            </div>
            <p>Esses números são referências de partida, não regras fixas. A maioria das casas fica bem atendida com 3 a 6 câmeras. O que define o número exato é a contagem de pontos de acesso e ângulos cegos do seu imóvel.</p>
          </div>
        ),
      },
      {
        h2: 'O cálculo que realmente importa: conte os pontos, não os metros',
        content: (
          <div className="space-y-4">
            <p>Em vez de chutar um número, faça uma volta no imóvel e anote cada ponto por onde alguém poderia entrar ou se esconder. A lista abaixo está em ordem de prioridade.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Pontos prioritários (toda casa precisa cobrir)</h3>
            <ol className="space-y-2 list-decimal list-inside">
              <li><strong className="text-white">Portão e entrada principal.</strong> O ponto número um — por onde a maioria das abordagens acontece. Uma câmera aqui é indispensável.</li>
              <li><strong className="text-white">Garagem.</strong> Protege o carro e costuma ser um segundo acesso à casa.</li>
              <li><strong className="text-white">Quintal e laterais (ângulos cegos).</strong> Os cantos que não se veem da rua são os preferidos de quem tenta pular o muro.</li>
              <li><strong className="text-white">Área de serviço.</strong> Ponto clássico de invasão — isolada, pouco visível e com acesso fácil.</li>
              <li><strong className="text-white">Porta dos fundos.</strong> Segunda via de entrada que muita gente esquece de cobrir.</li>
            </ol>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Pontos complementares (para imóveis maiores ou orçamento mais alto)</h3>
            <ol className="space-y-2 list-decimal list-inside" start={6}>
              <li><strong className="text-white">Corredor lateral.</strong> Em casas maiores, o caminho estreito entre a casa e o muro merece uma câmera dedicada.</li>
              <li><strong className="text-white">Área social interna (opcional).</strong> Para acompanhar o interior, pets ou uma área de valor.</li>
              <li><strong className="text-white">Perímetro adicional.</strong> Em terrenos grandes ou esquinas, pode ser necessário mais de um ponto para cobrir todo o muro.</li>
            </ol>
          </div>
        ),
      },
      {
        h2: 'Exemplos práticos: casa térrea, sobrado e condomínio',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Casa térrea simples — 3 a 4 câmeras</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Câmera 1: portão de entrada</li>
              <li>Câmera 2: garagem</li>
              <li>Câmera 3: área de serviço / porta dos fundos</li>
              <li>Câmera 4 (opcional): quintal ou lateral, se houver ângulo cego</li>
            </ul>
            <p><strong className="text-white">Por que funciona:</strong> cobre os quatro acessos principais de uma casa térrea. Se não há corredor lateral nem quintal amplo, 3 câmeras podem ser suficientes.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Sobrado — 5 a 6 câmeras</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Câmera 1: portão de entrada (térreo)</li>
              <li>Câmera 2: garagem (térreo)</li>
              <li>Câmera 3: lateral externa</li>
              <li>Câmera 4: fundos / área de serviço</li>
              <li>Câmera 5: externa no pavimento superior</li>
              <li>Câmera 6 (opcional): escada interna ou hall de entrada</li>
            </ul>
            <p><strong className="text-white">Por que funciona:</strong> o perímetro externo é maior e a visão do térreo não cobre ângulos superiores. Uma câmera no pavimento superior amplia a cobertura sem precisar de muitas no térreo.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Condomínio residencial — 8 a 16+ câmeras</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Portaria e guarita (2 a 3 câmeras)</li>
              <li>Garagens e acesso de veículos (2 a 4 câmeras)</li>
              <li>Áreas de lazer — piscina, salão, playground (2 a 3 câmeras)</li>
              <li>Circulação de pedestres e corredores (1 a 2 câmeras)</li>
              <li>Perimetral e muros externos (2 a 4 câmeras)</li>
            </ul>
            <p><strong className="text-white">Por que funciona:</strong> condomínios têm múltiplas áreas comuns que precisam de cobertura. O número final depende do tamanho, do número de blocos e da extensão do perímetro — pode facilmente passar de 16 câmeras.</p>
          </div>
        ),
      },
      {
        h2: 'Compra ou locação: como o cálculo muda',
        content: (
          <div className="space-y-4">
            <p>O número de câmeras necessárias é o mesmo, independentemente de você comprar ou locar o sistema. O que muda é o modelo de investimento:</p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-3 text-white font-bold">Aspecto</th>
                    <th className="text-left p-3 text-white font-bold">Compra (CFTV próprio)</th>
                    <th className="text-left p-3 text-white font-bold">Locação de câmeras</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Investimento inicial</td><td className="p-3">Alto (equipamentos + instalação)</td><td className="p-3">Baixo ou zero (mensalidade)</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Custo mensal</td><td className="p-3">Manutenção (se contratada)</td><td className="p-3">Fixo, incluso equipamento e manutenção</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Ideal para</td><td className="p-3">Quem quer patrimônio e não se importa com custo inicial</td><td className="p-3">Quem quer previsibilidade e não quer imobilizar capital</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Manutenção</td><td className="p-3">Responsabilidade do proprietário</td><td className="p-3">Inclusa no contrato de locação</td></tr>
                  <tr><td className="p-3 font-semibold text-white">Upgrade futuro</td><td className="p-3">Custo adicional para trocar equipamentos</td><td className="p-3">Possível trocar conforme necessidade</td></tr>
                </tbody>
              </table>
            </div>
            <p>Em Curitiba, a instalação de câmeras CFTV varia entre R$ 180 e R$ 450 por ponto (mão de obra), e kits residenciais com 4 câmeras e DVR ficam entre R$ 1.200 e R$ 2.500. Já a <Link to="/servicos/locacao-de-cameras-de-seguranca" className="text-white underline hover:text-slate-300">locação residencial</Link> pode começar a partir de R$ 149/mês para pacotes básicos, com instalação e manutenção inclusas — sem o compromisso de <Link to="/blog/contrato-manutencao-ou-chamar-quando-quebra" className="text-white underline hover:text-slate-300">avaliar separadamente um contrato de manutenção</Link>, já que ele vem embutido.</p>
            <p>A Intelsecsul trabalha com <Link to="/servicos/cameras-de-seguranca" className="text-white underline hover:text-slate-300">venda</Link> e locação de câmeras de segurança. Na visita técnica, avaliamos o seu imóvel, calculamos a quantidade ideal de pontos e apresentamos as duas opções para você decidir qual faz mais sentido para o seu perfil.</p>
          </div>
        ),
      },
      {
        h2: 'Erros comuns ao calcular a quantidade de câmeras',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">❌ Comprar pelo preço do kit, não pela necessidade</h3>
            <p>Kits prontos de 4 câmeras são atraentes pelo preço, mas podem deixar ângulos cegos críticos sem cobertura. O kit certo é o que atende ao seu imóvel — não o que está em promoção.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Espalhar câmeras sem critério</h3>
            <p>Mais câmeras não significa mais segurança. Câmeras mal posicionadas, apontando para o mesmo lugar ou cobrindo áreas irrelevantes, geram mais imagens para revisar e menos resultado prático.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Esquecer a altura e o ângulo de instalação</h3>
            <p>A altura ideal é entre 2,5 m e 3 m do chão, com a câmera angulada para baixo. Acima disso, a imagem captura apenas o topo da cabeça — péssimo para reconhecimento facial.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Ignorar a LGPD e a privacidade do vizinho</h3>
            <p>No Brasil, gravar imagens de vias públicas é permitido, mas filmar quintal ou janelas de vizinhos pode gerar problemas legais. Configure máscaras de privacidade no DVR e evite apontar câmeras para dentro de propriedades alheias.</p>
          </div>
        ),
      },
      {
        h2: 'Quando chamar um profissional para o projeto',
        content: (
          <div className="space-y-4">
            <p>Embora a contagem de pontos possa ser feita por você, o projeto CFTV envolve decisões técnicas que impactam diretamente a qualidade final:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Passagem de cabeamento</strong> — em casas prontas, o caminho do cabo define onde as câmeras podem ser instaladas.</li>
              <li><strong className="text-white">Posicionamento e ângulo</strong> — uma câmera 30 cm mais alta ou mais baixa pode mudar completamente a qualidade da imagem.</li>
              <li><strong className="text-white">Configuração do DVR/NVR</strong> — resolução, taxa de quadros, detecção de movimento e máscaras de privacidade.</li>
              <li><strong className="text-white">Acesso remoto seguro</strong> — senha forte e rede segura para evitar invasões ao sistema.</li>
              <li><strong className="text-white">Integração com outros sistemas</strong> — alarme, portão eletrônico, controle de acesso.</li>
            </ul>
            <p>A Intelsecsul realiza projetos de CFTV residencial em Curitiba e Região Metropolitana, com avaliação gratuita no local. Se depois de instalado o sistema apresentar problemas, vale conferir também as <Link to="/blog/camera-fora-do-ar-causas-solucoes" className="text-white underline hover:text-slate-300">causas mais comuns de câmera fora do ar</Link>.</p>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: 'Quantas câmeras de segurança você precisa? A resposta não está nos metros quadrados da casa, mas na contagem de pontos de acesso e ângulos cegos. Portão, garagem, laterais, área de serviço e fundos são os pontos prioritários. Casas térreas simples ficam bem com 3 a 4 câmeras; sobrados, com 5 a 6; condomínios, com 8 a 16 ou mais. O cálculo certo evita os dois extremos: comprar menos do que o necessário e ficar com pontos cegos críticos, ou comprar mais do que o necessário e gastar à toa. E tanto para compra quanto para locação, o número de câmeras é o mesmo — o que muda é o modelo de investimento.',
      },
    ],
    relatedQuestions: [
      {
        question: 'Quantas câmeras preciso para uma casa de 3 dormitórios?',
        answer: 'Para uma casa térrea de 3 dormitórios, a faixa típica é de 4 a 6 câmeras, cobrindo portão, garagem, laterais, fundos e área de serviço. Se a casa tiver corredor lateral e quintal amplo, 6 câmeras garantem cobertura completa. Se for um sobrado, considere uma câmera adicional no pavimento superior.',
      },
      {
        question: 'Posso começar com 2 câmeras e ampliar depois?',
        answer: 'Sim, desde que o DVR/NVR escolhido tenha canais livres para expansão. Um gravador de 8 canais permite começar com 2 ou 3 câmeras e adicionar mais conforme necessidade. Na locação, a expansão também é possível, geralmente com ajuste no valor mensal.',
      },
      {
        question: 'Quantas câmeras preciso para cobrir o perímetro da casa?',
        answer: 'O cálculo é: 1 câmera a cada 8 a 12 metros de muro, dependendo da largura da lente e dos obstáculos visuais. Em terrenos com esquina ou muro muito extenso, podem ser necessárias 2 câmeras apenas para a frente.',
      },
      {
        question: 'Câmera Wi-Fi ou com fio: qual escolher para a quantidade que preciso?',
        answer: 'Para 1 a 3 pontos, câmeras Wi-Fi resolvem — especialmente em imóveis alugados onde não se pode fazer obra. Para 4 ou mais câmeras, o sistema com fio é mais estável e mais barato por câmera. Veja mais detalhes no nosso comparativo de câmera com fio ou Wi-Fi.',
      },
      {
        question: 'Vale a pena contratar um projeto de CFTV ou comprar um kit pronto?',
        answer: 'Se o seu imóvel tem particularidades (esquina, muro alto, múltiplos acessos, garagem para dois carros), um projeto personalizado evita comprar câmeras em excesso ou deixar pontos cegos. Se o imóvel é simples e bem padronizado, um kit pode atender — desde que você faça a contagem de pontos antes de comprar.',
      },
    ],
    internalLink: {
      text: 'Quer saber exatamente quantas câmeras sua casa precisa?',
      url: '/servicos/locacao-de-cameras-de-seguranca/',
      linkText: 'Ver Locação de Câmeras',
    },
    whatsappMessage: 'Vim do blog e quero saber quantas câmeras preciso',
    ctaFinal: {
      title: 'Quer saber exatamente quantas câmeras sua casa precisa?',
      text: 'A Intelsecsul faz a avaliação gratuitamente em Curitiba e Região Metropolitana. Na visita, mapeamos os pontos de vulnerabilidade, definimos a quantidade ideal de câmeras e apresentamos as opções de compra e locação.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'portao-eletronico-faz-barulho-ajuste-ou-defeito',
    slug: 'portao-eletronico-faz-barulho-ajuste-ou-defeito',
    title: 'Portão Eletrônico Faz Barulho: Quando é Ajuste e Quando é Defeito | Intelsecsul',
    metaTitle: 'Portão Eletrônico Faz Barulho: Quando é Ajuste e Quando é Defeito | Intelsecsul',
    metaDescription: 'Portão eletrônico fazendo barulho? Veja como distinguir ruído normal de defeito, identificar a origem do som (trilho, engrenagem, rolamento ou esforço excessivo) e quando chamar assistência técnica.',
    h1: 'Portão eletrônico faz barulho: quando é ajuste e quando é defeito',
    category: 'Portão Eletrônico',
    readTime: '10 min de leitura',
    publishedDate: '2026-09-28',
    summary: 'Ruído normal é constante e moderado. Quando o som muda, aumenta ou aparece um ruído novo, o portão está comunicando algo. Rangido geralmente é falta de lubrificação; estalo seco é peça desgastada; ronco forte é esforço excessivo; zumbido agudo é problema interno no motor.',
    intro: 'Todo portão eletrônico faz algum ruído ao operar — o som do motor, o deslizamento da cremalheira, o encaixe do fim de curso. Ruído normal é constante, moderado e sem variações bruscas. Quando o som muda, aumenta de intensidade ou aparece um ruído novo, o portão está comunicando alguma coisa. Na maioria dos casos, um barulho anormal tem origem em um desajuste mecânico ou de infraestrutura — não em um defeito no motor. O trilho desnivelado, por exemplo, é apontado por instaladores com mais de 20 anos de experiência como a principal causa de sobrecarga e queima de motores: segundo um serralheiro entrevistado pelo Olhar Digital, 7 em cada 10 motores queimam pelo mesmo erro de nivelamento do trilho.',
    sections: [
      {
        h2: 'Antes de tudo: como é o som normal do seu portão?',
        content: (
          <div className="space-y-4">
            <p>O ruído saudável de um portão eletrônico é baixo, contínuo e previsível. Em modelos deslizantes, é o som do motor mais o deslizar suave das roldanas no trilho. Em basculantes, é o motor e a corrente ou correia trabalhando sem estalos. Em dias frios, é normal o motor operar um pouco mais "áspero" no primeiro ciclo — isso não é defeito.</p>
            <div>
              <p className="font-bold text-white mb-2">Ruído normal:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Constante durante todo o percurso de abertura e fechamento.</li>
                <li>Sem variações bruscas de intensidade ou tom.</li>
                <li>Sem estalos, raspagens ou rangidos metálicos.</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-2">Ruído crítico:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Aparece ou aumenta progressivamente.</li>
                <li>Varia de tom ou intensidade durante o percurso.</li>
                <li>Acompanha trancos, lentidão ou paradas no meio do caminho.</li>
                <li>Vem acompanhado de cheiro de queimado, vibração excessiva ou superaquecimento do motor.</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        h2: 'Tabela de diagnóstico: que tipo de barulho seu portão está fazendo?',
        content: (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-white font-bold">Tipo de ruído</th>
                  <th className="text-left p-3 text-white font-bold">Causa mais provável</th>
                  <th className="text-left p-3 text-white font-bold">Onde está o problema</th>
                  <th className="text-left p-3 text-white font-bold">Nível de urgência</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Rangido metálico contínuo</td><td className="p-3">Falta de lubrificação no trilho, cremalheira ou roldanas</td><td className="p-3">Trilho / roldanas</td><td className="p-3">Ajuste — manutenção preventiva</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Raspagem de ferro</td><td className="p-3">Roldanas ou rolamentos desgastados, trilho sujo</td><td className="p-3">Trilho / roldanas</td><td className="p-3">Ajuste/peça — avaliação técnica</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Estalo seco (Tec-Tec)</td><td className="p-3">Roldanas quadradas (desgaste), cabo de aço desfiando</td><td className="p-3">Trilho / cabo</td><td className="p-3">Defeito — requer substituição</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Ronco forte no motor</td><td className="p-3">Esforço excessivo, portão desbalanceado ou trilho desnivelado</td><td className="p-3">Motor / infraestrutura</td><td className="p-3">Defeito — risco de queima do motor</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Zumbido agudo ou vibração persistente</td><td className="p-3">Rolamentos internos do motor com desgaste</td><td className="p-3">Motor (caixa de engrenagens)</td><td className="p-3">Defeito — requer técnico</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Golpes secos (batida metálica)</td><td className="p-3">Folgas em parafusos, corrente frouxa, componentes soltos</td><td className="p-3">Fixação / corrente</td><td className="p-3">Ajuste — manutenção preventiva</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Chiado que aumenta com a abertura</td><td className="p-3">Atrito interno, engrenagens gastas ou falta de lubrificação na rosca do motor</td><td className="p-3">Motor / engrenagens</td><td className="p-3">Defeito se persistir após lubrificação</td></tr>
                <tr><td className="p-3 font-semibold text-white">Ruído de arrasto + portão lento</td><td className="p-3">Trilho desnivelado, portão desbalanceado ou obstrução</td><td className="p-3">Infraestrutura / contrapeso</td><td className="p-3">Ajuste/defeito — avaliação urgente</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        h2: 'Ruído 1: Rangido ou chiado metálico — o mais comum e o mais fácil de resolver',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">O que você está ouvindo</h3>
            <p>Um som contínuo de metal raspando ou rangendo, que aparece principalmente no início do movimento e diminui (mas não desaparece) depois que o portão entra em velocidade.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que está acontecendo</h3>
            <p>O rangido metálico é o som clássico de falta de lubrificação. O trilho, a cremalheira ou as roldanas estão trabalhando a seco, e o atrito do metal contra metal gera esse ruído. Com o tempo, a falta de lubrificação acelera o desgaste — roldanas que deveriam durar anos se desgastam em meses.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">É ajuste ou defeito?</h3>
            <p><strong className="text-white">Ajuste.</strong> Na grande maioria dos casos, uma lubrificação adequada resolve o problema imediatamente. É a manutenção preventiva mais simples e mais eficaz para portões eletrônicos.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que você pode fazer</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Limpe o trilho com uma escova macia ou aspirador para remover poeira, areia e detritos.</li>
              <li>Aplique graxa branca de boa qualidade na rosca do motor e nos pontos de contato do trilho — não atrai poeira como os óleos comuns.</li>
              <li>Frequência: a lubrificação preventiva deve ser feita a cada três ou quatro meses.</li>
              <li>Não use óleo comum, WD-40 ou derivados de petróleo — atraem poeira e pioram o problema a médio prazo.</li>
            </ul>
            <p>Se o rangido persistir após a lubrificação, o desgaste das peças pode já ter passado do ponto de ajuste — nesse caso, a avaliação de um técnico é necessária.</p>
          </div>
        ),
      },
      {
        h2: 'Ruído 2: Estalo seco (Tec-Tec) — sinal de desgaste de peça',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">O que você está ouvindo</h3>
            <p>Um som de "tec-tec" ritmado, que acompanha o movimento do portão. Parece uma batida metálica seca, repetida.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que está acontecendo</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Roldanas "quadradas"</strong> — roldanas que deveriam ser redondas se desgastaram e agora têm facetas. A cada volta, batem no trilho, gerando o estalo.</li>
              <li><strong className="text-white">Cabo de aço desfiando</strong> — em portões basculantes com cabo de aço, fios rompidos dentro do cabo batem contra a estrutura.</li>
              <li><strong className="text-white">Engrenagens com dentes quebrados ou gastos</strong> — o contato irregular entre os dentes gera estalos a cada rotação.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">É ajuste ou defeito?</h3>
            <p><strong className="text-white">Defeito — requer substituição de peça.</strong> Lubrificação não resolve estalo seco causado por desgaste. A peça precisa ser trocada.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que você pode fazer</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Não lubrifique esperando que o estalo passe — a causa é estrutural, não de atrito.</li>
              <li>Identifique de onde vem o som (trilho, motor ou cabo) e informe ao técnico.</li>
              <li>Interrompa o uso se o estalo for acompanhado de trancos — a peça pode se romper completamente e travar o portão.</li>
            </ul>
          </div>
        ),
      },
      {
        h2: 'Ruído 3: Ronco forte ou zumbido — esforço excessivo do motor',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">O que você está ouvindo</h3>
            <p>Um som grave, contínuo, que parece o motor "sofrendo" para movimentar o portão. Pode ser acompanhado de lentidão, trancos ou aquecimento excessivo do motor.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que está acontecendo</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Trilho desnivelado ou desalinhado</strong> — o motor precisa compensar o desvio a cada abertura e fechamento, forçando engrenagens, corrente e sistema elétrico.</li>
              <li><strong className="text-white">Portão desbalanceado</strong> — o peso está sendo sustentado pelo motor em vez dos contrapesos ou roldanas. O motor pode precisar de até 3x mais força do que o normal.</li>
              <li><strong className="text-white">Obstrução no trilho</strong> — pedras, areia ou detritos aumentam o atrito e forçam o motor.</li>
              <li><strong className="text-white">Corrente ou correia frouxa</strong> — perde eficiência na transmissão, exigindo mais esforço do motor.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">É ajuste ou defeito?</h3>
            <p><strong className="text-white">Ajuste urgente — com risco de defeito grave se ignorado.</strong> O ronco forte não é um defeito em si, mas é o principal sinal de alerta de que o motor está sendo sobrecarregado. Ignorar esse ruído é o caminho mais rápido para a queima do motor. Se o problema persistir mesmo com o trilho verificado, os sintomas se aproximam do que já cobrimos em <Link to="/blog/portao-eletronico-nao-abre-ou-nao-fecha" className="text-white underline hover:text-slate-300">portão eletrônico que não abre ou não fecha</Link>.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que você pode fazer</h3>
            <p className="font-bold text-white">Teste do desbalanceamento:</p>
            <ol className="space-y-2 list-decimal list-inside">
              <li>Feche o portão totalmente.</li>
              <li>Coloque o motor no modo manual (destrave a chave).</li>
              <li>Levante o portão com a mão até a metade do caminho e solte.</li>
              <li>O portão deve ficar parado onde você soltou. Se ele cair com tudo ou subir sozinho disparado, está desbalanceado.</li>
            </ol>
            <p className="font-bold text-white pt-2">Teste do nível do trilho:</p>
            <ol className="space-y-2 list-decimal list-inside">
              <li>Desligue a alimentação do automatizador.</li>
              <li>Destrave o portão para movimentação manual.</li>
              <li>Apoie um nível de bolha sobre o trilho em diferentes pontos do percurso.</li>
              <li>Se a bolha não ficar centralizada, o trilho está desnivelado.</li>
            </ol>
            <p>Se qualquer um dos testes indicar problema, não tente ajustar sozinho — trilho desnivelado e portão desbalanceado exigem ajuste técnico, e insistir no uso agrava o desgaste.</p>
          </div>
        ),
      },
      {
        h2: 'Ruído 4: Zumbido agudo ou vibração persistente — problema interno no motor',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">O que você está ouvindo</h3>
            <p>Um zumbido fino, agudo, que não vem do trilho nem das roldanas, mas de dentro do motor. Pode ser acompanhado de vibração que se sente na carcaça.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que está acontecendo</h3>
            <p>Esse ruído indica desgaste nos rolamentos internos do motor ou na caixa de engrenagens. Quando os rolamentos perdem eficiência, o motor vibra de forma anormal e emite um zumbido agudo. Se o som parece vir "de dentro" da carcaça, o problema é interno.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">É ajuste ou defeito?</h3>
            <p><strong className="text-white">Defeito — requer técnico especializado.</strong> Rolamentos internos do motor não são peças de manutenção do usuário. A substituição exige desmontagem do motor e ferramentas específicas.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que você pode fazer</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Não tente abrir o motor — além do risco elétrico, a desmontagem incorreta pode danificar componentes internos.</li>
              <li>Anote quando o ruído acontece (só na partida, durante todo o percurso, só no fechamento) — ajuda o técnico a isolar o problema.</li>
              <li>Se o motor estiver esquentando além do normal, interrompa o uso. Motor quente + zumbido agudo é sinal de risco de queima.</li>
            </ul>
          </div>
        ),
      },
      {
        h2: 'O que você pode ajustar sozinho (e o que não deve)',
        content: (
          <div className="space-y-4">
            <div>
              <p className="font-bold text-white mb-2">✅ Seguro para fazer:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Lubrificação preventiva do trilho, cremalheira e rosca do motor com graxa branca.</li>
                <li>Limpeza do trilho com escova macia ou aspirador.</li>
                <li>Remoção de obstáculos visíveis (pedras, folhas, detritos) do caminho do portão.</li>
                <li>Teste de desbalanceamento (manual, com o motor destravado).</li>
                <li>Teste do nível de bolha no trilho.</li>
                <li>Observação e registro do tipo de ruído, quando acontece e como evolui.</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-2">❌ Não faça de jeito nenhum:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Não abra o motor nem remova a tampa da caixa de engrenagens.</li>
                <li>Não desmonte roldanas ou rolamentos para "verificar" — a remontagem incorreta pode travar o portão.</li>
                <li>Não force o portão manualmente quando ele estiver travado ou com resistência anormal.</li>
                <li>Não use óleo comum ou WD-40 como lubrificante.</li>
                <li>Não ajuste a força do motor na central sem saber o que está fazendo — pode causar acidentes ou queima do motor.</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        h2: 'Quando chamar um técnico especializado',
        content: (
          <div className="space-y-4">
            <ul className="space-y-2 list-disc list-inside">
              <li>Ronco forte persistente após verificação do trilho.</li>
              <li>Estalo seco (Tec-Tec) — peça desgastada que precisa ser substituída.</li>
              <li>Zumbido agudo vindo de dentro do motor.</li>
              <li>Portão desbalanceado (teste manual confirmou).</li>
              <li>Trilho desnivelado.</li>
              <li>Cheiro de queimado.</li>
              <li>Portão que trava, para no meio do percurso ou anda mais devagar que o normal.</li>
            </ul>
            <p>A Intelsecsul atende chamados de diagnóstico e manutenção de portões eletrônicos em Curitiba e Região Metropolitana, com avaliação técnica no local antes de qualquer orçamento. O diagnóstico identifica se o problema é ajuste ou defeito — e o orçamento é apresentado com clareza antes de qualquer intervenção.</p>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: (
          <div className="space-y-4">
            <p>Portão eletrônico fazendo barulho é um aviso — e a maioria dos ruídos tem solução simples se identificada cedo. Rangido metálico geralmente é falta de lubrificação; estalo seco é peça desgastada; ronco forte é esforço excessivo; zumbido agudo é problema interno no motor.</p>
            <p>O que não se deve fazer é ignorar o ruído esperando que ele passe. Um rangido não tratado evolui para desgaste de roldanas, depois para esforço excessivo do motor, e por fim para a queima do equipamento — cada etapa mais cara que a anterior. Um <Link to="/blog/contrato-manutencao-ou-chamar-quando-quebra" className="text-white underline hover:text-slate-300">contrato de manutenção preventiva</Link> é o que quebra esse ciclo antes que ele comece.</p>
          </div>
        ),
      },
    ],
    relatedQuestions: [
      {
        question: 'Portão eletrônico fazendo barulho alto é sempre defeito?',
        answer: 'Não. Barulho alto pode ser apenas falta de lubrificação — a causa mais comum e a mais fácil de resolver. O que diferencia "ajuste" de "defeito" é o tipo de som: rangido metálico geralmente é lubrificação; estalo seco é peça desgastada; ronco forte é esforço excessivo; zumbido agudo é problema interno no motor.',
      },
      {
        question: 'Posso lubrificar o portão eletrônico sozinho?',
        answer: 'Sim, a lubrificação preventiva do trilho, cremalheira e rosca do motor é uma tarefa que o usuário pode fazer. Use graxa branca de boa qualidade e aplique a cada 3-4 meses. Não use óleo comum, WD-40 ou derivados de petróleo.',
      },
      {
        question: 'Quanto custa consertar um portão eletrônico que está fazendo barulho?',
        answer: 'Depende da causa. Uma visita de lubrificação e ajuste preventivo em Curitiba começa a partir de R$ 150,00 para serviços simples. Se envolver substituição de roldanas, engrenagens ou rolamentos, o custo varia conforme a peça. Se o motor já estiver comprometido, o reparo é mais caro.',
      },
      {
        question: 'O barulho pode ser sinal de que o motor vai queimar?',
        answer: 'Sim, especialmente se o ruído for um ronco forte ou zumbido agudo persistente. O ronco forte indica esforço excessivo, principal causa de superaquecimento e queima do motor. Se o portão está roncando e demorando mais para abrir ou fechar, pare de usá-lo e chame um técnico.',
      },
      {
        question: 'Trilho desnivelado é a causa mais comum de barulho?',
        answer: 'Segundo instaladores com décadas de experiência, sim — o nivelamento do trilho é a principal causa de sobrecarga no motor e, consequentemente, de ruídos e queima prematura. O teste do nível de bolha é uma forma simples de verificar.',
      },
    ],
    internalLink: {
      text: 'Seu portão eletrônico está fazendo barulho? Precisa de diagnóstico técnico?',
      url: '/servicos/portao-eletronico/',
      linkText: 'Ver Portão Eletrônico',
    },
    whatsappMessage: 'Vim do blog e meu portão está fazendo barulho',
    ctaFinal: {
      title: 'Seu portão eletrônico está fazendo barulho? Precisa de diagnóstico técnico?',
      text: 'A Intelsecsul realiza diagnóstico e manutenção de portões eletrônicos em Curitiba e Região Metropolitana. A visita técnica identifica a causa do ruído — ajuste ou defeito — e apresenta o orçamento antes de qualquer intervenção.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'biometria-cartao-rfid-ou-reconhecimento-facial-qual-escolher',
    slug: 'biometria-cartao-rfid-ou-reconhecimento-facial-qual-escolher',
    title: 'Biometria, Cartão RFID ou Reconhecimento Facial: Qual Escolher? | Intelsecsul',
    metaTitle: 'Biometria, Cartão RFID ou Reconhecimento Facial: Qual Escolher? | Intelsecsul',
    metaDescription: 'Biometria, cartão RFID ou reconhecimento facial? Compare as três tecnologias por fluxo, higiene, privacidade, custo, visitantes e auditoria e descubra qual escolher para sua empresa ou condomínio.',
    h1: 'Biometria, cartão RFID ou reconhecimento facial: qual controle de acesso escolher?',
    category: 'Controle de Acesso',
    readTime: '12 min de leitura',
    publishedDate: '2026-09-30',
    summary: 'A escolha do controle de acesso não é sobre eleger uma tecnologia superior — é sobre entender qual credencial faz sentido para o seu contexto, considerando fluxo de pessoas, nível de segurança, orçamento e obrigações de privacidade.',
    intro: 'A pergunta "qual é melhor, biometria ou cartão RFID?" é, quase sempre, a pergunta errada. A escolha do controle de acesso não é sobre eleger uma tecnologia superior — é sobre entender qual credencial faz sentido para o seu contexto, considerando o fluxo de pessoas, o nível de segurança exigido, as condições do ambiente, o orçamento disponível e as obrigações legais de privacidade. Biometria digital autentica pela impressão digital — a credencial é o próprio corpo. Cartão RFID autentica por proximidade — é a tecnologia mais difundida em prédios comerciais. Reconhecimento facial autentica pelo mapeamento do rosto, sem contato — a experiência mais fluida, mas que exige cuidados maiores com privacidade.',
    sections: [
      {
        h2: '1. Fluxo e velocidade de passagem',
        content: (
          <div className="space-y-4">
            <p>Cartão RFID leva a dianteira em vazão. A leitura é praticamente instantânea — o usuário aproxima o cartão e a porta libera em menos de um segundo. Em horários de pico, é a tecnologia que menos forma fila.</p>
            <p>Reconhecimento facial com leitor 3D moderno opera em menos de um segundo, com a vantagem de ser totalmente sem contato. O usuário simplesmente caminha e a porta abre.</p>
            <p>Biometria digital é rápida quando funciona de primeira, mas cai bastante quando o dedo está sujo, molhado, machucado ou mal posicionado. Em ambientes industriais, cozinhas ou hospitais, a taxa de falha de leitura aumenta e a fila anda mais devagar.</p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[520px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-3 text-white font-bold">Tecnologia</th>
                    <th className="text-left p-3 text-white font-bold">Velocidade típica</th>
                    <th className="text-left p-3 text-white font-bold">Comportamento em pico</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">RFID</td><td className="p-3">&lt; 1 segundo</td><td className="p-3">Excelente — fluxo contínuo</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Reconhecimento facial</td><td className="p-3">&lt; 1 segundo</td><td className="p-3">Muito bom — sem contato</td></tr>
                  <tr><td className="p-3 font-semibold text-white">Biometria digital</td><td className="p-3">1-3 segundos</td><td className="p-3">Variável — depende da qualidade da leitura</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        h2: '2. Higiene e contato físico',
        content: (
          <div className="space-y-4">
            <p>A biometria digital exige contato físico com o leitor. Em ambientes onde a higiene é prioridade — hospitais, clínicas, cozinhas industriais, laboratórios — isso é uma desvantagem concreta. Leitores de impressão digital são superfícies compartilhadas, e a preocupação com contaminação é legítima.</p>
            <p>RFID é sem contato no sentido de que o cartão apenas se aproxima do leitor, mas ainda exige que o usuário manuseie o cartão — o que pode ser um incômodo quando as mãos estão ocupadas.</p>
            <p>Reconhecimento facial é totalmente touchless — o usuário não toca em nada. É a tecnologia mais adequada para ambientes onde a higiene é prioridade: hospitais, clínicas, indústrias alimentícias e qualquer local que exija operação com as mãos livres.</p>
          </div>
        ),
      },
      {
        h2: '3. Privacidade e LGPD',
        content: (
          <div className="space-y-4">
            <p>Este é o critério que mais tem mudado nos últimos anos — e o que exige mais atenção das empresas. Dados biométricos são classificados como dados pessoais sensíveis pela LGPD (Art. 5º, II). Isso significa que o tratamento desses dados exige consentimento explícito e destacado do titular, com finalidades específicas, além de garantias de transparência e segurança em todo o processo.</p>
            <p>Reconhecimento facial é o mais sensível das três tecnologias sob a ótica da LGPD. Estudos apontam riscos de "racismo algorítmico" — taxas de erro maiores para determinados grupos raciais quando os dados de treinamento não são diversos. O TJSP já reconheceu a possibilidade de biometria facial em condomínios, desde que observados os limites da LGPD — princípios de finalidade, necessidade e proporcionalidade.</p>
            <p>Biometria digital também é dado sensível, mas tem um histórico de uso mais consolidado. RFID é a tecnologia com menor exposição de privacidade — o cartão não contém dados biométricos, apenas um identificador.</p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-3 text-white font-bold">Tecnologia</th>
                    <th className="text-left p-3 text-white font-bold">Classificação LGPD</th>
                    <th className="text-left p-3 text-white font-bold">Exigência de consentimento</th>
                    <th className="text-left p-3 text-white font-bold">Risco de privacidade</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">RFID</td><td className="p-3">Dado comum</td><td className="p-3">Não (para uso interno)</td><td className="p-3">Baixo</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Biometria digital</td><td className="p-3">Dado sensível</td><td className="p-3">Sim, explícito e destacado</td><td className="p-3">Médio</td></tr>
                  <tr><td className="p-3 font-semibold text-white">Reconhecimento facial</td><td className="p-3">Dado sensível</td><td className="p-3">Sim, explícito e destacado</td><td className="p-3">Alto</td></tr>
                </tbody>
              </table>
            </div>
            <p>A penalidade por não cumprimento da LGPD pode chegar a 2% do faturamento da empresa, limitada a R$ 50 milhões por infração, além de sanções como suspensão ou proibição do tratamento de dados. Para empresas que ainda não têm um programa de conformidade, o RFID é o caminho de menor risco regulatório.</p>
          </div>
        ),
      },
      {
        h2: '4. Custo de implantação e operação',
        content: (
          <div className="space-y-4">
            <p>O RFID é o mais barato das três tecnologias. Cartões avulsos custam entre US$ 2 e US$ 5 cada (aproximadamente R$ 10 a R$ 25), e os leitores são maduros, amplamente disponíveis e de baixo custo.</p>
            <p>Biometria digital tem custo inicial intermediário. Leitores biométricos de entrada no mercado brasileiro começam em torno de R$ 379 a R$ 709 (modelos de mesa ou embutidos), enquanto leitores de maior capacidade podem chegar a R$ 1.280 ou mais.</p>
            <p>Reconhecimento facial tem o maior custo inicial — espera-se US$ 200 a US$ 500 por dispositivo (aproximadamente R$ 1.000 a R$ 2.500) em modelos empresariais, mais a infraestrutura de rede e o backend de armazenamento de templates faciais.</p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-3 text-white font-bold">Tecnologia</th>
                    <th className="text-left p-3 text-white font-bold">Custo inicial (leitor)</th>
                    <th className="text-left p-3 text-white font-bold">Custo por credencial</th>
                    <th className="text-left p-3 text-white font-bold">Custo operacional</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">RFID</td><td className="p-3">Baixo (R$ 100-500)</td><td className="p-3">R$ 10-25 por cartão</td><td className="p-3">Reposição de cartões perdidos</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Biometria digital</td><td className="p-3">Médio (R$ 380-1.300)</td><td className="p-3">Zero (credencial = pessoa)</td><td className="p-3">Cadastro inicial, manutenção</td></tr>
                  <tr><td className="p-3 font-semibold text-white">Reconhecimento facial</td><td className="p-3">Alto (R$ 1.000-2.500+)</td><td className="p-3">Zero (credencial = rosto)</td><td className="p-3">Infraestrutura, conformidade</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        h2: '5. Gestão de visitantes e credenciais temporárias',
        content: (
          <div className="space-y-4">
            <p>RFID é a tecnologia mais prática para visitantes e prestadores de serviço. Credenciais temporárias podem ser emitidas e revogadas em segundos, sem necessidade de cadastro biométrico. Para prédios comerciais multi-inquilino, o RFID é a escolha natural.</p>
            <p>Biometria digital exige cadastro biométrico do visitante — impraticável para visitas rápidas (um entregador, um técnico, um cliente). Em condomínios, o visitante precisa ser cadastrado na portaria, o que adiciona tempo e burocracia.</p>
            <p>Reconhecimento facial para visitantes é ainda mais complexo do ponto de vista regulatório: coletar dados biométricos de visitantes casuais exige consentimento explícito e finalidade específica, muitas vezes inviável em fluxos de curta duração.</p>
            <p>A solução mais comum em recepções empresariais modernas é um kiosk de autoatendimento que combina leitura de documento com verificação facial para confirmar identidade — aumentando a auditabilidade sem exigir cadastro biométrico prévio do visitante.</p>
          </div>
        ),
      },
      {
        h2: '6. Auditoria, rastreabilidade e integração com ponto eletrônico',
        content: (
          <div className="space-y-4">
            <p>Biometria digital é a tecnologia com a melhor rastreabilidade individual. Como a credencial é intransferível, o registro de acesso comprova que foi exatamente aquela pessoa que passou pela porta — eliminando o "buddy punching" (um funcionário bater o ponto pelo outro).</p>
            <p>RFID gera logs de acesso, mas com uma ressalva: o cartão pode ser compartilhado. Em áreas restritas (sala de servidores, financeiro, P&D), a transferência de credencial compromete a auditoria.</p>
            <p>Reconhecimento facial oferece rastreabilidade individual sem contato — e, integrado a sistemas de CFTV, permite correlação entre eventos de acesso e imagens gravadas.</p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-3 text-white font-bold">Critério</th>
                    <th className="text-left p-3 text-white font-bold">Biometria digital</th>
                    <th className="text-left p-3 text-white font-bold">RFID</th>
                    <th className="text-left p-3 text-white font-bold">Reconhecimento facial</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Rastreabilidade individual</td><td className="p-3">Excelente</td><td className="p-3">Limitada (compartilhável)</td><td className="p-3">Excelente</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Integração com ponto eletrônico</td><td className="p-3">Nativa</td><td className="p-3">Requer software adicional</td><td className="p-3">Nativa</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Integração com CFTV</td><td className="p-3">Limitada</td><td className="p-3">Limitada</td><td className="p-3">Excelente</td></tr>
                  <tr><td className="p-3 font-semibold text-white">Auditabilidade para conformidade</td><td className="p-3">Alta</td><td className="p-3">Média</td><td className="p-3">Alta</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        h2: 'Tabela comparativa resumida',
        content: (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-white font-bold">Critério</th>
                  <th className="text-left p-3 text-white font-bold">Biometria digital</th>
                  <th className="text-left p-3 text-white font-bold">Cartão RFID</th>
                  <th className="text-left p-3 text-white font-bold">Reconhecimento facial</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Velocidade em pico</td><td className="p-3">Variável</td><td className="p-3">Excelente</td><td className="p-3">Muito boa</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Higiene / contato</td><td className="p-3">Contato obrigatório</td><td className="p-3">Contato leve</td><td className="p-3">Totalmente sem contato</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Privacidade / LGPD</td><td className="p-3">Dado sensível — consentimento</td><td className="p-3">Dado comum — menor risco</td><td className="p-3">Dado sensível — maior risco</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Custo inicial</td><td className="p-3">Médio</td><td className="p-3">Baixo</td><td className="p-3">Alto</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Custo operacional</td><td className="p-3">Cadastro inicial</td><td className="p-3">Reposição de cartões</td><td className="p-3">Infraestrutura + conformidade</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Visitantes</td><td className="p-3">Difícil</td><td className="p-3">Fácil</td><td className="p-3">Complexo (regulatório)</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Auditoria / ponto</td><td className="p-3">Excelente</td><td className="p-3">Média</td><td className="p-3">Excelente</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Integração CFTV</td><td className="p-3">Limitada</td><td className="p-3">Limitada</td><td className="p-3">Excelente</td></tr>
                <tr><td className="p-3 font-semibold text-white">Melhor para</td><td className="p-3">Áreas restritas, ponto eletrônico</td><td className="p-3">Escritórios, alto fluxo, visitantes</td><td className="p-3">Ambientes sem contato, campi, saúde</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        h2: 'Qual escolher para cada cenário?',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Escolha RFID se…</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>O fluxo de pessoas é alto e a velocidade de entrada é prioridade.</li>
              <li>O orçamento é limitado e você precisa de escala sem custo elevado.</li>
              <li>Você precisa gerenciar visitantes e prestadores de serviço com facilidade.</li>
              <li>O nível de risco é moderado e a área não é altamente restrita.</li>
              <li>Você quer menor exposição regulatória em relação à LGPD.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Escolha biometria digital se…</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Você precisa de verificação de identidade forte e não pode tolerar compartilhamento de credencial.</li>
              <li>Há integração com ponto eletrônico e eliminação de fraudes de frequência.</li>
              <li>Você tem áreas restritas (sala de servidores, financeiro, P&D) que exigem auditoria rigorosa.</li>
              <li>O ambiente tem mãos frequentemente ocupadas ou sujas e você precisa de credencial que não se perde.</li>
              <li>Você está disposto a investir em conformidade com a LGPD para dados biométricos.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Escolha reconhecimento facial se…</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Você quer experiência touchless — higiene é prioridade (saúde, alimentação, laboratórios).</li>
              <li>Você busca experiência premium de smart building.</li>
              <li>Há integração com CFTV e workflows de análise de segurança.</li>
              <li>O ambiente tem alto fluxo onde leitores de digital formariam fila.</li>
              <li>Você tem infraestrutura de rede e backend preparada para armazenar templates faciais com segurança.</li>
              <li>Você está preparado para conformidade rigorosa com a LGPD.</li>
            </ul>
          </div>
        ),
      },
      {
        h2: 'A resposta mais comum: combinação',
        content: (
          <div className="space-y-4">
            <p>Na prática, a maioria das empresas não escolhe uma tecnologia — combina duas ou três. O padrão mais comum é:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">RFID</strong> para acesso geral (portas de escritório, áreas comuns, catracas de entrada).</li>
              <li><strong className="text-white">Biometria</strong> para áreas restritas (sala de servidores, financeiro, almoxarifado) e ponto eletrônico.</li>
              <li><strong className="text-white">Reconhecimento facial</strong> para entradas premium, áreas de saúde ou ambientes que exigem touchless.</li>
            </ul>
            <p>Essa arquitetura híbrida entrega conveniência em escala sem abrir mão de verificação forte onde ela realmente importa.</p>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: 'Biometria, cartão RFID ou reconhecimento facial? A resposta não está em qual tecnologia é "mais avançada", mas em qual resolve o seu problema com o menor custo total e o menor risco regulatório. O RFID é imbatível em velocidade, custo e praticidade para visitantes. A biometria digital é insuperável em rastreabilidade individual e integração com ponto eletrônico. O reconhecimento facial é a melhor escolha quando higiene, experiência touchless e integração com CFTV são prioridades. Na maioria dos casos, a resposta certa é combinar tecnologias: RFID onde a conveniência importa, biometria onde a segurança é crítica, e reconhecimento facial onde o contato precisa ser zero.',
      },
    ],
    relatedQuestions: [
      {
        question: 'Biometria digital funciona com dedo sujo ou molhado?',
        answer: 'Não de forma confiável. Leitores de impressão digital têm dificuldade com dedos sujos, molhados, machucados ou desgastados. Em ambientes industriais, cozinhas e hospitais, a taxa de falha de leitura aumenta significativamente. Nesses casos, RFID ou reconhecimento facial são mais adequados.',
      },
      {
        question: 'Cartão RFID pode ser clonado?',
        answer: 'Depende do tipo de cartão. Cartões de proximidade legados (125 kHz, como EM4100 e HID Prox) transmitem um número fixo sem criptografia e são facilmente copiáveis. Cartões Mifare Classic também têm criptografia quebrada desde 2008. Já cartões criptografados de fato (DESFire EV2/EV3, Seos, iCLASS SE) usam AES-128 com autenticação mútua — comprometer um cartão não compromete o sistema.',
      },
      {
        question: 'Reconhecimento facial funciona com máscara ou óculos?',
        answer: 'Leitores faciais modernos com detecção de vivacidade (liveness detection) funcionam com óculos e, em muitos casos, com máscaras — embora a precisão possa variar. Modelos 3D com infravermelho são mais robustos que modelos 2D baseados em câmera RGB.',
      },
      {
        question: 'Preciso de consentimento para usar biometria no controle de acesso?',
        answer: 'Sim. Dados biométricos são classificados como dados pessoais sensíveis pela LGPD (Art. 5º, II), e o tratamento exige consentimento explícito e destacado do titular. Para reconhecimento facial, a exigência é ainda mais rigorosa. O descumprimento pode gerar multas de até 2% do faturamento, limitadas a R$ 50 milhões.',
      },
      {
        question: 'Qual tecnologia é melhor para condomínio?',
        answer: 'Depende do perfil do condomínio. RFID é prático para portarias com muitos visitantes e prestadores de serviço. Biometria digital é adequada para áreas restritas (academia, salão de festas, garagem). Reconhecimento facial é cada vez mais comum em condomínios de alto padrão, mas exige conformidade rigorosa com a LGPD. Em muitos casos, a melhor solução é combinar RFID para moradores e visitantes com biometria para áreas comuns.',
      },
    ],
    internalLink: {
      text: 'Precisa escolher o controle de acesso ideal para sua empresa ou condomínio?',
      url: '/servicos/controle-de-acesso/',
      linkText: 'Ver Controle de Acesso',
    },
    whatsappMessage: 'Vim do blog e quero avaliar o controle de acesso',
    ctaFinal: {
      title: 'Precisa escolher o controle de acesso ideal para sua empresa ou condomínio?',
      text: 'A Intelsecsul realiza projetos de controle de acesso em Curitiba e Região Metropolitana, com avaliação técnica no local para definir a arquitetura mais adequada ao seu fluxo, ao seu orçamento e às suas obrigações de conformidade.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'comprar-ou-alugar-cameras-de-seguranca-comparacao-completa',
    slug: 'comprar-ou-alugar-cameras-de-seguranca-comparacao-completa',
    title: 'Comprar ou Alugar Câmeras de Segurança? Comparação Completa | Intelsecsul',
    metaTitle: 'Comprar ou Alugar Câmeras de Segurança? Comparação Completa | Intelsecsul',
    metaDescription: 'Comprar ou alugar câmeras de segurança? Compare investimento inicial, manutenção, atualização, contrato e previsibilidade — e descubra qual modelo faz mais sentido para o seu imóvel ou empresa.',
    h1: 'Comprar ou alugar câmeras e equipamentos de segurança? Comparação completa',
    category: 'Locação',
    readTime: '11 min de leitura',
    publishedDate: '2026-09-26',
    summary: 'A decisão entre comprar e alugar câmeras de segurança não é apenas financeira — é estratégica. A compra exige investimento inicial alto; a locação distribui o custo em mensalidades fixas, com manutenção e suporte inclusos.',
    intro: 'A decisão entre comprar e alugar um sistema de câmeras de segurança não é apenas financeira — é estratégica. Enquanto a compra exige um investimento inicial alto e transfere para você a responsabilidade sobre manutenção, atualização e substituição de equipamentos, a locação distribui esse custo em mensalidades fixas e previsíveis, com manutenção e suporte inclusos. Um estudo da Prefeitura de Londrina comparou os dois modelos para um projeto de videomonitoramento e concluiu que a locação apresentou valor inferior em relação à aquisição de novos equipamentos: R$ 505.425,60 contra R$ 546.522,48 — uma diferença de mais de R$ 40 mil a favor da locação.',
    sections: [
      {
        h2: 'Investimento inicial: o critério que mais pesa na decisão',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Compra</h3>
            <p>A compra exige desembolso imediato de todo o valor do sistema. Para uma residência com 4 câmeras, um kit CFTV completo (DVR + câmeras + HD + cabos + fonte) custa entre R$ 1.200 e R$ 2.500. A isso soma-se a mão de obra de instalação, que em Curitiba varia entre R$ 180 e R$ 450 por ponto — ou seja, mais R$ 720 a R$ 1.800 para 4 câmeras.</p>
            <p>O investimento total para um sistema residencial de 4 câmeras fica, portanto, entre R$ 1.920 e R$ 4.300. Para sistemas comerciais maiores (8 a 16 câmeras), o valor pode ultrapassar R$ 10.000 antes da primeira imagem gravada. Se você ainda não sabe quantas câmeras precisa, vale conferir nosso <Link to="/blog/quantas-cameras-de-seguranca-preciso-para-minha-casa" className="text-white underline hover:text-slate-300">guia de cálculo de câmeras por imóvel</Link> antes de fechar qualquer orçamento.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Locação</h3>
            <p>A locação elimina o CAPEX (investimento inicial). O modelo de aluguel funciona como OPEX (despesa operacional): você paga uma mensalidade que já inclui equipamentos, instalação, manutenção e suporte técnico. Valores de referência do mercado brasileiro para locação de CFTV:</p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[480px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-3 text-white font-bold">Sistema</th>
                    <th className="text-left p-3 text-white font-bold">Quantidade de câmeras</th>
                    <th className="text-left p-3 text-white font-bold">Valor médio mensal</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Básico</td><td className="p-3">2 a 4 câmeras</td><td className="p-3">R$ 340</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Intermediário</td><td className="p-3">5 a 7 câmeras</td><td className="p-3">R$ 410</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Intermediário</td><td className="p-3">8 câmeras</td><td className="p-3">R$ 520</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Avançado</td><td className="p-3">9 câmeras</td><td className="p-3">R$ 620</td></tr>
                  <tr><td className="p-3 font-semibold text-white">Avançado</td><td className="p-3">10 a 16 câmeras</td><td className="p-3">R$ 880</td></tr>
                </tbody>
              </table>
            </div>
            <p>Esses valores incluem instalação, manutenção, suporte técnico e substituição de equipamentos defeituosos.</p>
            <p><strong className="text-white">Vantagem na locação:</strong> zero investimento inicial. O sistema começa a funcionar com o primeiro pagamento mensal, sem descapitalizar o orçamento.</p>
          </div>
        ),
      },
      {
        h2: 'Custo total ao longo do tempo: a conta que realmente importa',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Compra</h3>
            <p>Além do investimento inicial, a compra carrega custos ocultos que só aparecem com o tempo:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Manutenção corretiva:</strong> cada chamado técnico é pago à parte. Uma troca de câmera avulsa pode custar entre R$ 400 e R$ 1.200.</li>
              <li><strong className="text-white">Substituição de HD:</strong> o disco rígido do DVR tem vida útil limitada e precisa ser trocado a cada 3-5 anos.</li>
              <li><strong className="text-white">Atualização tecnológica:</strong> câmeras e gravadores se tornam obsoletos em 7 a 9 anos em média.</li>
              <li><strong className="text-white">Peças de desgaste:</strong> fontes, conectores e cabos têm vida útil mais curta que as câmeras.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Locação</h3>
            <p>Na locação, todos esses custos estão diluídos na mensalidade. A empresa locadora é responsável por manter o sistema funcionando, substituir equipamentos defeituosos sem custo adicional e arcar com a obsolescência tecnológica. O estudo de Londrina aponta que a locação dispensa provisionamentos para compra de novos equipamentos e elimina as variações de custo acarretadas por perda, furto, desastres naturais ou necessidade de manutenção e compra de peças.</p>
            <p><strong className="text-white">Vantagem na locação:</strong> custo total mais previsível e, em muitos cenários, menor no longo prazo — especialmente quando se contabilizam manutenções emergenciais, substituições e atualizações.</p>
          </div>
        ),
      },
      {
        h2: 'Manutenção: quem cuida do sistema?',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Compra</h3>
            <p>Na compra, a manutenção é responsabilidade do proprietário. Se você não contrata um plano de manutenção preventiva, o sistema só recebe atenção quando quebra — e reparos corretivos custam significativamente mais do que ajustes preventivos. Se está em dúvida sobre qual modelo de manutenção faz mais sentido, vale ler nosso comparativo de <Link to="/blog/contrato-manutencao-ou-chamar-quando-quebra" className="text-white underline hover:text-slate-300">contrato de manutenção x chamado avulso</Link>.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Locação</h3>
            <p>Na locação, a manutenção está inclusa no contrato. A empresa locadora faz a manutenção preventiva programada, a manutenção corretiva sem custo adicional e a substituição de câmeras defeituosas sem taxa. Para o cliente, isso significa zero surpresas com custos de reparo.</p>
            <p><strong className="text-white">Vantagem na locação:</strong> manutenção preventiva e corretiva inclusas, sem necessidade de gerenciar fornecedores ou arcar com reparos inesperados.</p>
          </div>
        ),
      },
      {
        h2: 'Atualização tecnológica: quem fica com o equipamento obsoleto?',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Compra</h3>
            <p>A tecnologia de segurança eletrônica evolui rapidamente. Câmeras que eram top de linha há cinco anos podem estar defasadas em resolução, visão noturna ou capacidade de análise inteligente. Na compra, você fica com o equipamento obsoleto e precisa arcar com a substituição quando decidir atualizar.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Locação</h3>
            <p>Na locação, a atualização tecnológica é responsabilidade da locadora. Ao renovar o contrato ou durante a vigência, o cliente pode ter acesso a equipamentos mais modernos sem precisar comprar tudo de novo.</p>
            <p><strong className="text-white">Vantagem na locação:</strong> o sistema se mantém atualizado ao longo do contrato, sem custo adicional de aquisição.</p>
          </div>
        ),
      },
      {
        h2: 'Contrato e fidelidade: qual a flexibilidade de cada modelo?',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Compra</h3>
            <p>A compra não tem fidelidade. Você é dono do equipamento e pode fazer o que quiser com ele — vender, transferir, desmontar. Não há mensalidade, não há multa de cancelamento, não há obrigação contratual de longo prazo (exceto se você contratar manutenção separadamente).</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Locação</h3>
            <p>A locação é um contrato de prestação de serviço continuado, e os prazos variam entre fornecedores. É importante ler o contrato com atenção: o que está incluso, qual o prazo de fidelidade, qual a multa por cancelamento antecipado e o que acontece com os equipamentos ao final.</p>
            <p><strong className="text-white">Vantagem na compra:</strong> liberdade total, sem fidelidade e sem mensalidade obrigatória. <strong className="text-white">Vantagem na locação:</strong> flexibilidade para ajustar o escopo conforme a necessidade, em alguns modelos de contrato.</p>
          </div>
        ),
      },
      {
        h2: 'Previsibilidade: o valor de saber quanto vai gastar',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Compra</h3>
            <p>O custo da compra é imprevisível no longo prazo. Você sabe quanto pagou pelo kit inicial, mas não sabe quanto vai gastar com manutenção nos próximos 5 anos, quantas câmeras vão queimar, se o HD vai falhar ou quando será necessário atualizar o sistema.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Locação</h3>
            <p>A locação entrega previsibilidade absoluta. A mensalidade é fixa, e todos os custos operacionais (manutenção, substituição, suporte) já estão embutidos.</p>
            <p><strong className="text-white">Vantagem na locação:</strong> orçamento controlado. Você sabe exatamente quanto o sistema custa por mês, sem variáveis.</p>
          </div>
        ),
      },
      {
        h2: 'Tabela comparativa resumida',
        content: (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-white font-bold">Critério</th>
                  <th className="text-left p-3 text-white font-bold">Compra</th>
                  <th className="text-left p-3 text-white font-bold">Locação</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Investimento inicial</td><td className="p-3">Alto (R$ 1.920 a R$ 4.300+ para 4 câmeras)</td><td className="p-3">Zero (primeiro pagamento após instalação)</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Custo mensal</td><td className="p-3">Nenhum (exceto manutenção contratada)</td><td className="p-3">Fixo (R$ 340 a R$ 880 para 2 a 16 câmeras)</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Manutenção</td><td className="p-3">Responsabilidade do proprietário</td><td className="p-3">Inclusa no contrato</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Substituição de equipamentos</td><td className="p-3">Custo do proprietário</td><td className="p-3">Inclusa, sem taxa adicional</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Atualização tecnológica</td><td className="p-3">Custo do proprietário</td><td className="p-3">Responsabilidade da locadora</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Previsibilidade de custo</td><td className="p-3">Baixa (custos ocultos ao longo do tempo)</td><td className="p-3">Alta (mensalidade fixa)</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Fidelidade</td><td className="p-3">Nenhuma</td><td className="p-3">Conforme contrato</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Propriedade do equipamento</td><td className="p-3">Sim (patrimônio)</td><td className="p-3">Não (comodato)</td></tr>
                <tr><td className="p-3 font-semibold text-white">Melhor para</td><td className="p-3">Quem fica no imóvel a longo prazo e tem capital disponível</td><td className="p-3">Quem quer previsibilidade, sem investimento inicial</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        h2: 'Quando alugar faz mais sentido?',
        content: (
          <ul className="space-y-2 list-disc list-inside">
            <li><strong className="text-white">Quem não quer (ou não pode) descapitalizar.</strong> Empresas que precisam preservar capital de giro e residências com orçamento apertado encontram na locação uma forma de ter segurança sem comprometer o caixa.</li>
            <li><strong className="text-white">Quem valoriza previsibilidade.</strong> Saber exatamente quanto gasta por mês com segurança facilita o planejamento financeiro.</li>
            <li><strong className="text-white">Quem está em imóvel alugado ou temporário.</strong> Se você vai sair em 1 ou 2 anos, não compensa investir em sistema fixo.</li>
            <li><strong className="text-white">Quem quer acesso à tecnologia atualizada.</strong> A locadora se encarrega de manter o sistema moderno, sem custo de upgrade.</li>
            <li><strong className="text-white">Quem não quer gerenciar manutenção.</strong> A locação terceiriza toda a operação do sistema — você só usa.</li>
          </ul>
        ),
      },
      {
        h2: 'Quando comprar faz mais sentido?',
        content: (
          <ul className="space-y-2 list-disc list-inside">
            <li><strong className="text-white">Quem pretende ficar no imóvel por muitos anos.</strong> A partir do segundo ou terceiro ano, o custo total da compra tende a se equalizar com o da locação, e a partir daí a compra sai mais barata.</li>
            <li><strong className="text-white">Quem quer patrimônio.</strong> O equipamento é seu, e você pode vendê-lo, transferi-lo ou reutilizá-lo quando quiser.</li>
            <li><strong className="text-white">Quem tem capital disponível e prefere não ter mensalidade.</strong> Se o orçamento permite o desembolso inicial, a compra elimina a obrigação mensal.</li>
            <li><strong className="text-white">Quem quer personalizar o sistema.</strong> A compra permite escolher cada componente, marca e modelo sem as restrições de pacotes de locação.</li>
          </ul>
        ),
      },
      {
        h2: 'Como a Intelsecsul pode ajudar',
        content: (
          <div className="space-y-4">
            <p>A Intelsecsul trabalha com <Link to="/servicos/cameras-de-seguranca" className="text-white underline hover:text-slate-300">venda</Link> e locação de câmeras de segurança em Curitiba e Região Metropolitana. Nosso plano de locação para 8 câmeras, por exemplo, sai por R$ 489/mês — abaixo da média de mercado citada acima para essa mesma faixa. Na visita técnica gratuita, avaliamos o seu imóvel, calculamos a quantidade ideal de câmeras e apresentamos as duas opções com simulação de custo total para o seu cenário específico.</p>
            <p>Se você está avaliando uma oferta de locação, nossa equipe explica o que está incluso no plano, qual o prazo de fidelidade e como funciona a manutenção e a substituição de equipamentos. Sem letras miúdas.</p>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: 'Comprar ou alugar câmeras de segurança? A resposta depende do seu prazo de permanência no imóvel, do capital disponível e de quanto você valoriza previsibilidade. A locação elimina o investimento inicial, inclui manutenção e atualização, e entrega custo mensal fixo — ideal para quem quer segurança sem descapitalizar ou gerenciar equipamentos. A compra é um investimento de longo prazo que faz sentido para quem vai ficar no imóvel por muitos anos e quer patrimônio. O que não faz sentido é decidir sem comparar.',
      },
    ],
    relatedQuestions: [
      {
        question: 'Posso cancelar a locação a qualquer momento?',
        answer: 'Depende do contrato. Verifique o prazo mínimo e as condições de cancelamento antecipado antes de assinar — alguns modelos oferecem contratos mais flexíveis que outros.',
      },
      {
        question: 'O que acontece com os equipamentos ao final do contrato de locação?',
        answer: 'Em modelos de comodato, os equipamentos são devolvidos à locadora. Em alguns contratos, pode haver opção de compra ao final do prazo. O destino dos equipamentos deve estar claro no contrato.',
      },
      {
        question: 'A locação inclui a manutenção preventiva?',
        answer: 'Sim, na maioria dos planos de locação profissional. A manutenção preventiva (limpeza, ajustes, verificação de firmware) e a corretiva (substituição de peças defeituosas) estão inclusas na mensalidade.',
      },
      {
        question: 'Locação é mais barata que comprar?',
        answer: 'Depende do prazo de uso. No curto e médio prazo (até 2 anos), a locação costuma ser mais barata por não exigir investimento inicial. No longo prazo (5 anos ou mais), a compra tende a ser mais econômica, desde que você contabilize os custos de manutenção e atualização.',
      },
      {
        question: 'Posso alugar câmeras e depois comprar?',
        answer: 'Em alguns contratos de locação há opção de compra ao final do prazo, podendo o valor pago na locação ser parcialmente abatido do preço de compra. Verifique as condições com a locadora.',
      },
    ],
    internalLink: {
      text: 'Quer comparar compra e locação para o seu imóvel?',
      url: '/servicos/locacao-de-cameras-de-seguranca/',
      linkText: 'Ver Locação de Câmeras',
    },
    whatsappMessage: 'Vim do blog e quero comparar compra e locação de câmeras',
    ctaFinal: {
      title: 'Quer comparar compra e locação para o seu imóvel?',
      text: 'A Intelsecsul faz essa comparação gratuitamente na visita técnica, com simulação de custo total para o seu cenário em Curitiba e Região Metropolitana.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'porta-automatica-de-correr-ou-giratoria-qual-escolher',
    slug: 'porta-automatica-de-correr-ou-giratoria-qual-escolher',
    title: 'Porta Automática de Correr ou Giratória: Qual Escolher para Comércio e Clínica? | Intelsecsul',
    metaTitle: 'Porta Automática de Correr ou Giratória: Qual Escolher para Comércio e Clínica? | Intelsecsul',
    metaDescription: 'Porta automática de correr ou giratória? Compare espaço, fluxo, acessibilidade (NBR 9050), manutenção e tipo de entrada para escolher a melhor opção para comércio ou clínica.',
    h1: 'Porta automática de correr ou giratória: qual a diferença?',
    category: 'Portas Automáticas',
    readTime: '12 min de leitura',
    publishedDate: '2026-10-01',
    summary: 'A escolha entre porta de correr e porta giratória envolve acessibilidade, fluxo, segurança e conformidade com a NBR 9050. A porta de correr é mais versátil e acessível; a giratória oferece isolamento superior, mas nunca pode ser a entrada única de um estabelecimento acessível.',
    intro: 'A escolha entre uma porta automática de correr e uma porta giratória não é uma questão de preferência estética — é uma decisão técnica que envolve acessibilidade, fluxo de pessoas, segurança e conformidade com a NBR 9050. A NBR 9050:2020 é clara: em portas giratórias, é obrigatória a existência de uma entrada alternativa acessível para cadeirantes, pessoas com mobilidade reduzida e usuários de dispositivos de rodas. Em portas de correr, o vão livre de 0,80 m deve ser garantido quando a porta está aberta. Isso significa que a porta giratória nunca pode ser a única entrada de um estabelecimento que precisa ser acessível — para muitos comércios e clínicas, essa exigência já elimina a giratória como opção viável.',
    sections: [
      {
        h2: '1. Espaço necessário',
        content: (
          <div className="space-y-4">
            <p>Porta de correr exige espaço lateral para as folhas deslizarem. Em locais com espaço lateral limitado, a versão telescópica permite ampliar o passo aproveitando melhor o vão, com as folhas deslizando sobrepostas. Não exige espaço de giro na frente ou atrás, o que a torna ideal para fachadas de vidro e corredores estreitos.</p>
            <p>Porta giratória exige espaço circular para o tambor girar — diâmetro mínimo de 1,50 m (alguns modelos chegam a 2,40 m), com área ao redor livre de obstáculos. Em compensação, não precisa de espaço lateral para folhas abrirem.</p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-3 text-white font-bold">Critério de espaço</th>
                    <th className="text-left p-3 text-white font-bold">Porta de correr</th>
                    <th className="text-left p-3 text-white font-bold">Porta giratória</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Espaço lateral</td><td className="p-3">Necessário (exceto telescópica)</td><td className="p-3">Não necessário</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Espaço de giro</td><td className="p-3">Não necessário</td><td className="p-3">Necessário (diâmetro mínimo 1,50 m)</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Espaço no piso</td><td className="p-3">Trilho superior (recomendado)</td><td className="p-3">Base circular no piso</td></tr>
                  <tr><td className="p-3 font-semibold text-white">Ideal para</td><td className="p-3">Fachadas de vidro, corredores estreitos</td><td className="p-3">Fachadas amplas, halls espaçosos</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        h2: '2. Fluxo e volume de pessoas',
        content: (
          <div className="space-y-4">
            <p>Porta de correr é a tecnologia de maior vazão. A abertura horizontal permite passagem contínua, sem interrupção, e o fluxo bidirecional é natural. Sistemas de alto desempenho abrem e fecham cerca de 4.000 vezes por dia.</p>
            <p>Porta giratória impõe um fluxo sequencial: cada pessoa ocupa um compartimento do tambor, e a rotação precisa ser completada antes do próximo usuário entrar. Em horários de pico, isso cria filas — é mais indicada para fluxo moderado e controlado, como entradas corporativas e bancos.</p>
            <p>Em clínicas e consultórios, a porta de correr é quase sempre a escolha mais adequada: o fluxo de pacientes, acompanhantes e profissionais é contínuo, e a acessibilidade é prioridade absoluta.</p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-3 text-white font-bold">Fluxo</th>
                    <th className="text-left p-3 text-white font-bold">Porta de correr</th>
                    <th className="text-left p-3 text-white font-bold">Porta giratória</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Vazão</td><td className="p-3">Alta (passagem contínua)</td><td className="p-3">Moderada (fluxo sequencial)</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Bidirecional</td><td className="p-3">Sim, natural</td><td className="p-3">Limitado (compartimentos)</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Ideal para</td><td className="p-3">Comércio, clínicas, shoppings</td><td className="p-3">Bancos, corporativo, edifícios premium</td></tr>
                  <tr><td className="p-3 font-semibold text-white">Risco de fila</td><td className="p-3">Baixo</td><td className="p-3">Moderado a alto em pico</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        h2: '3. Acessibilidade e NBR 9050',
        content: (
          <div className="space-y-4">
            <p>Este é o critério mais crítico da comparação. Porta de correr, quando aberta, deve ter vão livre maior ou igual a 0,80 m de largura e 2,10 m de altura. Os trilhos devem ficar na parte superior, e as frestas dos trilhos inferiores devem ser inferiores a 1,5 cm para não obstruir cadeiras de rodas. Sensores devem ser ajustados para detectar pessoas de baixa estatura, crianças e usuários de cadeiras de rodas.</p>
            <p>Porta giratória: a NBR 9050 é explícita — locais com portas giratórias devem fornecer entrada alternativa acessível e sinalizada. A giratória não é acessível por si só — é uma barreira física para cadeirantes, carrinhos de bebê, idosos com mobilidade reduzida e usuários de muletas.</p>
            <p><strong className="text-white">Implicação prática:</strong> em uma clínica, a porta de correr é a escolha natural. Em um comércio que opte pela giratória como entrada principal, será necessário instalar uma segunda porta acessível ao lado — o que aumenta custo e espaço.</p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-3 text-white font-bold">Acessibilidade</th>
                    <th className="text-left p-3 text-white font-bold">Porta de correr</th>
                    <th className="text-left p-3 text-white font-bold">Porta giratória</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Acessível sozinha</td><td className="p-3">Sim (vão livre ≥ 0,80 m)</td><td className="p-3">Não (exige entrada alternativa)</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Cadeirante</td><td className="p-3">Acesso direto</td><td className="p-3">Acesso apenas pela porta alternativa</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Carrinho de bebê</td><td className="p-3">Acesso direto</td><td className="p-3">Difícil ou impossível</td></tr>
                  <tr><td className="p-3 font-semibold text-white">Conformidade NBR 9050</td><td className="p-3">Atende como entrada única</td><td className="p-3">Exige entrada alternativa sinalizada</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        h2: '4. Segurança e risco de esmagamento',
        content: (
          <div className="space-y-4">
            <p>Porta de correr oferece risco de esmagamento menor e mais controlável — movimento horizontal, forças de impacto limitadas, e dispositivos de segurança (fotocélulas, cortinas infravermelhas) mais simples de implementar e testar.</p>
            <p>Porta giratória apresenta riscos mais complexos: entalamento, pinçamento e cisalhamento entre bordas móveis e fixas do tambor. A EN 16005 aborda explicitamente riscos de esmagamento, impacto, cisalhamento, arrasto e movimentos incontrolados em portas giratórias. Em um estudo conduzido na Alemanha, 12 de 14 tipos de portas giratórias foram recomendados para desligamento imediato por não atenderem aos requisitos de segurança.</p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-3 text-white font-bold">Segurança</th>
                    <th className="text-left p-3 text-white font-bold">Porta de correr</th>
                    <th className="text-left p-3 text-white font-bold">Porta giratória</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Risco de esmagamento</td><td className="p-3">Menor (movimento horizontal)</td><td className="p-3">Maior (pontos de pinçamento e cisalhamento)</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Dispositivos de segurança</td><td className="p-3">Fotocélulas e cortinas</td><td className="p-3">Sensores de borda + sistemas complexos</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Complexidade de conformidade</td><td className="p-3">Moderada</td><td className="p-3">Alta (EN 16005, calibração rigorosa)</td></tr>
                  <tr><td className="p-3 font-semibold text-white">Risco para crianças/idosos</td><td className="p-3">Baixo</td><td className="p-3">Moderado a alto</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        h2: '5. Manutenção e custo',
        content: (
          <div className="space-y-4">
            <p>Porta de correr: manutenção relativamente simples — limpeza do trilho, verificação da correia ou corrente, lubrificação de roletes e rolamentos, teste dos sensores. A cada 3-6 meses mantém o sistema confiável. Se o seu sistema já apresenta sintomas de falha, vale conferir nosso guia de <Link to="/blog/porta-automatica-nao-abre-causas-sensor-alimentacao-mecanismo" className="text-white underline hover:text-slate-300">causas de porta automática que não abre</Link>.</p>
            <p>Porta giratória: manutenção mais complexa e cara — verificação de sensores EN 16005, calibração de velocidade, afinação de bordas de segurança, controle de sistemas de bloqueio eletromagnético, avaliação do motor. Intervalo mínimo recomendado: uma vez ao ano, mais em alto fluxo.</p>
            <p><strong className="text-white">Custo:</strong> uma porta de correr automática de vidro (deslizante simples, 3 m, 2 folhas, com instalação) parte de R$ 7.600. Uma porta giratória automática de aço inoxidável e vidro, com 2,40 m de altura, tem custo direto estimado em R$ 72.112,98, com custo de manutenção decenal de R$ 19.550,98 nos primeiros 10 anos — a giratória pode custar até 10 vezes mais que uma porta de correr equivalente.</p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[560px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-3 text-white font-bold">Manutenção e custo</th>
                    <th className="text-left p-3 text-white font-bold">Porta de correr</th>
                    <th className="text-left p-3 text-white font-bold">Porta giratória</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Complexidade de manutenção</td><td className="p-3">Moderada</td><td className="p-3">Alta</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Frequência recomendada</td><td className="p-3">A cada 3-6 meses</td><td className="p-3">Pelo menos 1x/ano (mais em alto fluxo)</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Custo inicial (referência)</td><td className="p-3">A partir de R$ 7.600</td><td className="p-3">R$ 70.000+</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Custo de manutenção decenal</td><td className="p-3">Moderado</td><td className="p-3">R$ 19.550+ (referência)</td></tr>
                  <tr><td className="p-3 font-semibold text-white">Pontos críticos</td><td className="p-3">Trilho, correia, sensores</td><td className="p-3">Sensores EN 16005, bordas, motor</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        h2: '6. Tipo de entrada e adequação por segmento',
        content: (
          <div className="space-y-4">
            <p><strong className="text-white">Comércio (lojas, farmácias, supermercados):</strong> porta de correr é a escolha padrão. O fluxo é alto, os clientes entram e saem com carrinhos, sacolas e crianças — a porta de correr oferece passagem contínua, sem barreiras, com acessibilidade garantida.</p>
            <p><strong className="text-white">Clínica e consultório:</strong> porta de correr é praticamente obrigatória. A acessibilidade é um requisito legal e ético, e a maioria dos pacientes tem alguma limitação de mobilidade. Permite também integração com controle de acesso e versão hermética para centros cirúrgicos e laboratórios.</p>
            <p><strong className="text-white">Edifícios corporativos e bancos:</strong> a porta giratória é mais comum — por isolamento térmico e acústico, controle de fluxo e estética premium, geralmente com uma porta de correr acessível ao lado.</p>
            <p><strong className="text-white">Hospital e laboratório:</strong> porta de correr hermética é a escolha para áreas que exigem controle de contaminação.</p>
          </div>
        ),
      },
      {
        h2: 'Tabela comparativa resumida',
        content: (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse min-w-[680px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-white font-bold">Critério</th>
                  <th className="text-left p-3 text-white font-bold">Porta de correr</th>
                  <th className="text-left p-3 text-white font-bold">Porta giratória</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Espaço lateral</td><td className="p-3">Necessário (telescópica resolve)</td><td className="p-3">Não necessário</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Espaço de giro</td><td className="p-3">Não necessário</td><td className="p-3">Necessário (diâmetro ≥ 1,50 m)</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Fluxo</td><td className="p-3">Alto, contínuo, bidirecional</td><td className="p-3">Moderado, sequencial</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Acessibilidade NBR 9050</td><td className="p-3">Atende como entrada única</td><td className="p-3">Exige entrada alternativa acessível</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Risco de esmagamento</td><td className="p-3">Menor</td><td className="p-3">Maior (pontos de pinçamento)</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Manutenção</td><td className="p-3">Moderada, simples</td><td className="p-3">Alta, complexa</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Custo inicial</td><td className="p-3">A partir de R$ 7.600</td><td className="p-3">R$ 70.000+</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Isolamento térmico/acústico</td><td className="p-3">Bom (versão hermética)</td><td className="p-3">Excelente</td></tr>
                <tr><td className="p-3 font-semibold text-white">Ideal para</td><td className="p-3">Comércio, clínicas, hospitais, shoppings</td><td className="p-3">Bancos, corporativo, edifícios premium</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        h2: 'Quando escolher cada uma?',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Escolha porta de correr se…</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Você tem comércio ou clínica e precisa de acessibilidade garantida sem entrada alternativa.</li>
              <li>O fluxo de pessoas é alto e você precisa de passagem contínua e bidirecional.</li>
              <li>Você quer custo de instalação e manutenção mais acessível.</li>
              <li>O espaço lateral é limitado — a versão telescópica resolve.</li>
              <li>Você precisa de integração com controle de acesso e possibilidade de versão hermética.</li>
              <li>Você quer conformidade simples com a NBR 9050 sem precisar de uma segunda porta acessível.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Escolha porta giratória se…</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Você tem edifício corporativo, banco ou entrada premium e quer isolamento térmico e acústico superior.</li>
              <li>O fluxo é moderado e você não tem pico de circulação intenso.</li>
              <li>Você tem espaço lateral limitado e espaço interno amplo para o tambor.</li>
              <li>Você está disposto a instalar uma segunda porta acessível ao lado para conformidade com a NBR 9050.</li>
              <li>Você valoriza a estética arquitetônica e o aspecto premium da entrada.</li>
              <li>Você tem orçamento para manutenção rigorosa e equipamentos de segurança de alta qualidade.</li>
            </ul>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: 'Porta automática de correr ou giratória? Para comércio e clínica, a porta de correr é a escolha mais segura, acessível e econômica na grande maioria dos casos. Ela atende à NBR 9050 como entrada única, oferece fluxo contínuo e tem custo inicial e de manutenção menores. A porta giratória tem seu lugar em edifícios corporativos, bancos e entradas premium — mas sempre acompanhada de uma entrada alternativa acessível. Para clínicas, a giratória simplesmente não é uma opção viável como entrada única.',
      },
    ],
    relatedQuestions: [
      {
        question: 'Porta giratória é permitida pela NBR 9050?',
        answer: 'Sim, mas com uma condição obrigatória: locais com portas giratórias devem fornecer entrada alternativa acessível e sinalizada. A giratória em si é uma barreira para cadeirantes, carrinhos de bebê e pessoas com mobilidade reduzida — se ela for a entrada principal, é obrigatório ter uma porta acessível ao lado.',
      },
      {
        question: 'Porta automática de correr é acessível para cadeirantes?',
        answer: 'Sim. Quando aberta, deve ter vão livre de no mínimo 0,80 m de largura e 2,10 m de altura. Os trilhos inferiores devem ter frestas inferiores a 1,5 cm, e os sensores devem detectar pessoas de baixa estatura e usuários de cadeiras de rodas.',
      },
      {
        question: 'Porta giratória é mais segura contra furtos?',
        answer: 'Não necessariamente. A giratória oferece controle de fluxo, mas não é um dispositivo de segurança contra furto. O controle de acesso real é feito por catracas, leitores biométricos ou sistemas de alarme — a giratória não substitui essas soluções.',
      },
      {
        question: 'Quanto custa uma porta automática de correr para comércio?',
        answer: 'Uma porta de correr automática de vidro (deslizante simples, 3 m, 2 folhas, com instalação) parte de R$ 7.600, conforme referência de mercado. Modelos telescópicos, herméticos ou com controle de acesso integrado têm custo superior. O prazo médio de instalação é de 15 dias úteis.',
      },
      {
        question: 'Porta giratória precisa de manutenção com que frequência?',
        answer: 'O intervalo mínimo recomendado é de pelo menos uma vez por ano, incluindo verificação de sensores EN 16005, calibração de velocidade, afinação de bordas de segurança e avaliação do desgaste do motor. Em ambientes de alto fluxo, a frequência deve ser maior.',
      },
      {
        question: 'Qual é melhor para clínica: correr ou giratória?',
        answer: 'Porta de correr, sem dúvida. Clínicas precisam de acessibilidade garantida — a giratória exigiria uma segunda entrada acessível. Além disso, a porta de correr permite versão hermética para áreas que exigem controle de contaminação e integração com controle de acesso.',
      },
    ],
    internalLink: {
      text: 'Precisa escolher a porta automática ideal para seu comércio ou clínica?',
      url: '/servicos/portas-automaticas/',
      linkText: 'Ver Portas Automáticas',
    },
    whatsappMessage: 'Vim do blog e quero avaliar a porta automática ideal',
    ctaFinal: {
      title: 'Precisa escolher a porta automática ideal para seu comércio ou clínica?',
      text: 'A Intelsecsul realiza projetos de portas automáticas em Curitiba e Região Metropolitana, com avaliação técnica no local para definir a solução mais adequada ao seu tipo de estabelecimento, ao fluxo de pessoas e às exigências de acessibilidade.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'cancela-automatica-condominio-empresa-como-dimensionar-fluxo',
    slug: 'cancela-automatica-condominio-empresa-como-dimensionar-fluxo',
    title: 'Cancela Automática para Condomínio ou Empresa: Como Dimensionar o Fluxo | Intelsecsul',
    metaTitle: 'Cancela Automática para Condomínio ou Empresa: Como Dimensionar o Fluxo | Intelsecsul',
    metaDescription: 'Cancela automática para condomínio ou empresa? Aprenda a dimensionar o fluxo de veículos por volume, horários de pico, tecnologia de identificação e contingência — e evite filas na portaria.',
    h1: 'Cancela automática para condomínio ou empresa: como dimensionar o fluxo de veículos',
    category: 'Cancelas e Catracas',
    readTime: '11 min de leitura',
    publishedDate: '2026-10-01',
    summary: 'Fila na portaria não é falta de sorte — é projeto mal dimensionado. O dimensionamento correto parte de três variáveis: volume de veículos no pico, tempo de ciclo de identificação e capacidade de ciclos por hora da cancela.',
    intro: 'Fila na portaria não é falta de sorte — é projeto mal dimensionado. Quando a cancela automática é escolhida pelo preço ou pelo modelo mais vendido, sem considerar o volume real de veículos, os horários de pico, a tecnologia de identificação e o layout da pista, o resultado aparece rapidamente: congestionamento na entrada, atrasos na saída, moradores irritados e sensação de insegurança. O dimensionamento correto parte de uma pergunta simples: quantos veículos precisam passar por aquela pista no horário mais crítico? A partir daí, calcula-se o tempo de ciclo e verifica-se se uma pista é suficiente ou se o projeto precisa de duas ou mais cancelas por sentido.',
    sections: [
      {
        h2: 'O que é dimensionar o fluxo de veículos de uma cancela?',
        content: (
          <div className="space-y-4">
            <p>Dimensionar o fluxo significa garantir que a pista de acesso consiga absorver o volume de veículos no horário de pico sem formar fila. Para isso, três variáveis precisam ser conhecidas:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Volume de veículos por hora (no pico).</strong> Em condomínios residenciais, o pico costuma ser entre 7h e 9h (saída) e entre 18h e 20h (entrada). Em empresas, o pico é na entrada (8h) e na saída (18h).</li>
              <li><strong className="text-white">Tempo de ciclo de cada veículo.</strong> É a soma do tempo de identificação (tag RFID, leitura de placa, cartão, QR Code, interfone), mais abertura, passagem e fechamento. Cada tecnologia tem tempos diferentes.</li>
              <li><strong className="text-white">Capacidade de ciclos por hora da cancela.</strong> Modelos de alto fluxo chegam a 500 a 600 ciclos/hora; modelos de médio fluxo operam entre 200 e 400 ciclos/hora.</li>
            </ul>
            <p>A regra de ouro é: a demanda no horário de pico deve ser menor que a capacidade da pista. Se a demanda se aproxima ou ultrapassa a capacidade, o projeto precisa de duas pistas (ou mais) por sentido.</p>
          </div>
        ),
      },
      {
        h2: 'Fatores que determinam o dimensionamento',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Volume de veículos e horários de pico</h3>
            <p>O primeiro passo é medir ou estimar o volume real. Em condomínios residenciais, a regra prática é:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Condomínio pequeno</strong> (até 50 unidades): pico de 30 a 60 veículos/hora.</li>
              <li><strong className="text-white">Condomínio médio</strong> (50 a 150 unidades): pico de 60 a 150 veículos/hora.</li>
              <li><strong className="text-white">Condomínio grande</strong> (150 a 500 unidades): pico de 150 a 400 veículos/hora.</li>
              <li><strong className="text-white">Condomínio empresarial ou centro logístico:</strong> pico pode ultrapassar 900 veículos/hora.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Tecnologia de identificação: o fator que mais impacta o tempo de ciclo</h3>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-3 text-white font-bold">Tecnologia</th>
                    <th className="text-left p-3 text-white font-bold">Tempo de identificação</th>
                    <th className="text-left p-3 text-white font-bold">Observações</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Tag RFID UHF</td><td className="p-3">0,3 a 1 segundo</td><td className="p-3">Abertura automática com aproximação de até 6 metros, sem parar</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Leitura de placas (LPR)</td><td className="p-3">1 a 2 segundos</td><td className="p-3">Câmera lê a placa e libera automaticamente, sem parada total</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Cartão RFID / proximidade</td><td className="p-3">1 segundo</td><td className="p-3">Exige que o motorista pare, abaixe o vidro e aproxime o cartão</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">QR Code</td><td className="p-3">2 a 4 segundos</td><td className="p-3">Exige abrir o app, encontrar o código e apontar para o leitor</td></tr>
                  <tr><td className="p-3 font-semibold text-white">Interfone / porteiro</td><td className="p-3">5 a 15 segundos</td><td className="p-3">Depende da resposta do morador ou operador — o método mais lento</td></tr>
                </tbody>
              </table>
            </div>
            <p>Tag RFID UHF e LPR são as tecnologias que mais reduzem o tempo de ciclo — e, portanto, as que mais aumentam a capacidade de uma pista. Em projetos de alto fluxo, a combinação de tag RFID para moradores e LPR para visitantes é o padrão mais adotado.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Tipos de veículos</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Motocicletas:</strong> passagem rápida, em média 2 segundos após a abertura.</li>
              <li><strong className="text-white">Carros:</strong> passagem em 3 a 4 segundos, dependendo da largura da pista.</li>
              <li><strong className="text-white">Caminhões e veículos grandes:</strong> passagem em 5 a 8 segundos, podendo exigir pista mais larga e raio de giro maior.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Layout da pista e posicionamento da cancela</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Recuo da cancela:</strong> deve ficar no mínimo 5 metros da divisa do imóvel em relação à via pública, para o veículo não parar na calçada aguardando a abertura.</li>
              <li><strong className="text-white">Largura da pista:</strong> no mínimo 7 metros para circulação de veículos e calçadas de 2 metros de cada lado. Em estacionamentos, a largura típica é de 2,5 a 3,5 metros por cancela.</li>
              <li><strong className="text-white">Posição do laço indutivo:</strong> deve ficar antes da cancela, para detectar o veículo a tempo. Se estiver muito próximo, o veículo pode ser detectado já em cima da cancela, causando travamento.</li>
            </ul>
          </div>
        ),
      },
      {
        h2: 'Cálculo prático: quantos veículos uma cancela atende por hora?',
        content: (
          <div className="space-y-4">
            <p className="font-bold text-white">A fórmula básica é: Capacidade por hora = 3.600 ÷ tempo de ciclo (em segundos)</p>
            <p>Exemplo com tag RFID UHF e tempo de ciclo de 5 segundos (1 s identificação + 1,5 s abertura + 2 s passagem + 0,5 s fechamento): 3.600 ÷ 5 = 720 veículos/hora — mas esse número é teórico. Na prática, a capacidade real é menor por causa de variações de motorista, falhas de leitura e tempos de reação. Projetos reais usam fatores de segurança de 0,6 a 0,7, o que resulta em 430 a 500 veículos/hora por pista.</p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-3 text-white font-bold">Tecnologia</th>
                    <th className="text-left p-3 text-white font-bold">Tempo de ciclo</th>
                    <th className="text-left p-3 text-white font-bold">Capacidade teórica/hora</th>
                    <th className="text-left p-3 text-white font-bold">Capacidade real estimada/hora</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Tag RFID UHF</td><td className="p-3">4 a 6 s</td><td className="p-3">600 a 900</td><td className="p-3">400 a 600</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Leitura de placas (LPR)</td><td className="p-3">5 a 7 s</td><td className="p-3">510 a 720</td><td className="p-3">350 a 500</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Cartão RFID</td><td className="p-3">6 a 8 s</td><td className="p-3">450 a 600</td><td className="p-3">300 a 420</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">QR Code</td><td className="p-3">8 a 12 s</td><td className="p-3">300 a 450</td><td className="p-3">200 a 300</td></tr>
                  <tr><td className="p-3 font-semibold text-white">Interfone / porteiro</td><td className="p-3">15 a 25 s</td><td className="p-3">144 a 240</td><td className="p-3">100 a 170</td></tr>
                </tbody>
              </table>
            </div>
            <p><strong className="text-white">Interpretação prática:</strong> uma pista com tag RFID UHF atende bem até 400 veículos/hora com conforto. Se o pico do seu condomínio é de 500 veículos/hora, uma pista única vai formar fila — o projeto precisa de duas pistas ou de uma pista com LPR + tag para aumentar a capacidade.</p>
          </div>
        ),
      },
      {
        h2: 'Cenários práticos de dimensionamento',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Condomínio residencial médio (100 unidades)</h3>
            <p><strong className="text-white">Volume no pico:</strong> 80 veículos/hora (saída entre 7h e 9h). <strong className="text-white">Tecnologia:</strong> tag RFID UHF para moradores + interfone para visitantes. <strong className="text-white">Cálculo:</strong> 80 ÷ 400 (capacidade real por pista) = 0,2 pista.</p>
            <p><strong className="text-white">Conclusão:</strong> uma pista de entrada e uma de saída são suficientes. O gargalo não é a capacidade da cancela, mas o tempo de resposta do interfone para visitantes — a solução é priorizar moradores com tag e ter portaria remota para agilizar visitantes.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Condomínio empresarial (500 colaboradores)</h3>
            <p><strong className="text-white">Volume no pico:</strong> 250 veículos/hora (entrada entre 7h30 e 8h30). <strong className="text-white">Tecnologia:</strong> tag RFID UHF para colaboradores + LPR para visitantes. <strong className="text-white">Cálculo:</strong> 250 ÷ 500 (capacidade real com LPR + tag) = 0,5 pista.</p>
            <p><strong className="text-white">Conclusão:</strong> uma pista de entrada atende, mas com fila moderada. Para conforto total, o projeto deve prever duas pistas de entrada — uma exclusiva para tag e outra para visitantes/LPR.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Centro logístico (900 veículos/hora)</h3>
            <p><strong className="text-white">Volume no pico:</strong> 900 veículos/hora. <strong className="text-white">Tecnologia:</strong> tag RFID UHF para frota + LPR para visitantes + pistas separadas por tipo de veículo. <strong className="text-white">Cálculo:</strong> 900 ÷ 500 = 1,8 pista.</p>
            <p><strong className="text-white">Conclusão:</strong> o projeto precisa de pelo menos duas pistas de entrada e duas de saída, com separação por tipo de veículo. Pistas exclusivas para caminhões exigem cancela com braço mais longo e motor mais potente.</p>
          </div>
        ),
      },
      {
        h2: 'Contingência: o que acontece na falta de energia?',
        content: (
          <div className="space-y-4">
            <p>Uma cancela automática bem projetada precisa funcionar mesmo quando a energia acaba. A maioria dos modelos profissionais inclui bateria de reserva que garante operação por pelo menos 1 hora em caso de queda de energia. Outros recursos importantes:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Sistema de escamoteamento da barreira:</strong> a haste pode ser levantada manualmente ou liberada automaticamente para permitir a passagem.</li>
              <li><strong className="text-white">Abertura de emergência:</strong> em situações críticas (incêndio, evacuação), a cancela deve permitir abertura imediata sem depender de energia.</li>
              <li><strong className="text-white">Sinalização luminosa:</strong> LEDs indicam o estado da cancela e alertam em caso de falha.</li>
            </ul>
            <p>Na especificação da cancela, verifique se o modelo inclui bateria de reserva, abertura manual de emergência e sinalização luminosa. Esses recursos não são opcionais em condomínios e empresas — são requisitos de segurança e continuidade operacional.</p>
          </div>
        ),
      },
      {
        h2: 'Quando chamar um técnico para o projeto',
        content: (
          <div className="space-y-4">
            <p>O dimensionamento pode ser feito com dados de fluxo e uma planilha simples, mas o projeto completo envolve decisões técnicas que impactam diretamente o resultado:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Escolha do modelo de cancela</strong> — tempo de abertura, ciclos por hora, comprimento do braço, tipo de motor.</li>
              <li><strong className="text-white">Tecnologia de identificação</strong> — tag RFID UHF, LPR, cartão, QR Code, interfone.</li>
              <li><strong className="text-white">Integração com CFTV</strong> — câmeras de leitura de placas, gravação de eventos, auditoria de acesso.</li>
              <li><strong className="text-white">Layout da pista</strong> — recuo, largura, laço indutivo, sinalização.</li>
              <li><strong className="text-white">Contingência</strong> — bateria, abertura de emergência, operação manual.</li>
              <li><strong className="text-white">Software de gestão</strong> — cadastro de veículos, relatórios de acesso, integração com portaria remota.</li>
            </ul>
            <p>A Intelsecsul realiza projetos de cancelas e catracas em Curitiba e Região Metropolitana, com avaliação técnica no local para medir o fluxo real, definir a tecnologia mais adequada e dimensionar o número de pistas necessário.</p>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: 'Dimensionar o fluxo de veículos de uma cancela automática é mais do que escolher um modelo — é garantir que a pista absorva o volume no horário de pico sem fila. O cálculo parte de três variáveis: volume de veículos por hora, tempo de ciclo por tecnologia de identificação e capacidade de ciclos da cancela. Tag RFID UHF e leitura de placas (LPR) são as tecnologias que mais aumentam a capacidade de uma pista. Para condomínios residenciais, uma pista de entrada e uma de saída costumam ser suficientes; para empresas e centros logísticos com picos acima de 400 veículos/hora, o projeto precisa de duas ou mais pistas — e de contingência para falta de energia. E assim como o fluxo de veículos exige dimensionamento, o sistema que sustenta isso no dia a dia também precisa de manutenção: vale sempre revisar se compensa um contrato de manutenção preventiva em vez de depender só de chamados corretivos.',
      },
    ],
    relatedQuestions: [
      {
        question: 'Quantas cancelas preciso para meu condomínio?',
        answer: 'Depende do volume no horário de pico. A regra prática é: uma pista de entrada e uma de saída para condomínios com até 150 unidades. Se o pico ultrapassar 400 veículos/hora, ou se o tempo de resposta do interfone para visitantes for alto, o projeto deve prever duas pistas de entrada.',
      },
      {
        question: 'Qual a cancela mais rápida para alto fluxo?',
        answer: 'Cancelas com motor 24 VDC com encoder e tempo de abertura de 0,9 a 2 segundos são as mais rápidas do mercado, chegando a 500-600 ciclos/hora. Para alto fluxo, a combinação ideal é cancela rápida + tag RFID UHF ou LPR.',
      },
      {
        question: 'Tag RFID ou leitura de placas: qual é melhor para condomínio?',
        answer: 'As duas tecnologias podem ser combinadas. A tag RFID UHF é mais rápida e confiável para moradores. A leitura de placas (LPR) é melhor para visitantes e prestadores de serviço, que não têm tag. O projeto ideal usa tag para moradores e LPR para visitantes.',
      },
      {
        question: 'Cancela automática funciona sem energia?',
        answer: 'Sim, se o modelo incluir bateria de reserva — a maioria das cancelas profissionais garante pelo menos 1 hora de operação. Modelos com sistema de escamoteamento também permitem que a haste seja levantada manualmente em caso de queda de energia.',
      },
      {
        question: 'Quanto custa instalar uma cancela automática em Curitiba?',
        answer: 'Varia conforme o modelo, a tecnologia de identificação e a infraestrutura necessária. Uma cancela de alto fluxo com bateria e sinalização pode custar a partir de R$ 5.980 (equipamento), com instalação à parte. Projetos completos (cancela + tag + LPR + software) têm custo maior.',
      },
    ],
    internalLink: {
      text: 'Sua portaria está com fila? Precisa dimensionar a cancela para o fluxo real?',
      url: '/servicos/cancelas-e-catracas/',
      linkText: 'Ver Cancelas e Catracas',
    },
    whatsappMessage: 'Vim do blog e quero dimensionar a cancela para o fluxo real',
    ctaFinal: {
      title: 'Sua portaria está com fila? Precisa dimensionar a cancela para o fluxo real?',
      text: 'A Intelsecsul realiza projetos de cancelas e catracas em Curitiba e Região Metropolitana. A visita técnica mede o fluxo real, define a tecnologia ideal e dimensiona o número de pistas necessário.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'dvr-mostra-imagem-ao-vivo-mas-nao-grava',
    slug: 'dvr-mostra-imagem-ao-vivo-mas-nao-grava',
    title: 'DVR Mostra Imagem ao Vivo mas Não Grava: O Que Verificar Antes de Perder Provas | Intelsecsul',
    metaTitle: 'DVR Mostra Imagem ao Vivo mas Não Grava: O Que Verificar Antes de Perder Provas | Intelsecsul',
    metaDescription: 'DVR mostra imagem ao vivo mas não grava? Veja o que verificar antes de formatar o HD, como testar o playback e quando chamar diagnóstico de CFTV para não perder gravações importantes.',
    h1: 'DVR mostra imagem ao vivo, mas não grava: o que verificar antes de perder provas',
    category: 'Câmeras de Segurança',
    readTime: '9 min de leitura',
    publishedDate: '2026-10-05',
    summary: 'Imagem ao vivo e gravação são funções separadas dentro do DVR: a primeira depende do processador de vídeo, a segunda depende do HD e da fonte de alimentação. Veja as causas mais comuns e como verificar.',
    keywords: [
      'dvr mostra imagem mas nao grava',
      'dvr nao grava imagem ao vivo',
      'dvr nao reconhece hd',
      'cftv nao esta gravando',
      'cameras funcionam mas dvr nao grava',
      'como saber se o dvr esta gravando',
      'hd do dvr parou de gravar',
    ],
    intro: (
      <div className="space-y-4">
        <p>
          Este é um dos cenários mais comuns e perigosos em sistemas de CFTV: todas as câmeras aparecem na tela, o monitor mostra o que está acontecendo em tempo real, mas quando alguém precisa resgatar uma gravação de ontem ou da semana passada, descobre que <strong>o sistema não grava nada há dias ou semanas</strong>.
        </p>
        <p>
          Isso acontece porque a exibição de imagem ao vivo e a gravação em disco são <strong>processos completamente independentes</strong> dentro do DVR. O fato de haver imagem no monitor significa apenas que o sinal de vídeo está chegando e sendo processado pelo chip gráfico — não garante que o disco rígido esteja gravando um único segundo sequer.
        </p>
        <p>
          Neste guia, você vai entender por que isso acontece, quais são as causas mais comuns, como verificar o status real de gravação em menos de cinco minutos e o que fazer antes que uma ocorrência aconteça e você perceba tarde demais que não tem imagens salvas.
        </p>
      </div>
    ),
    sections: [
      {
        h2: 'Por que isso acontece: imagem ao vivo e gravação são processos separados',
        content: (
          <div className="space-y-4">
            <p>
              Para entender o problema, vale saber como o DVR lida com os sinais que recebe. Ele executa dois fluxos de trabalho paralelos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Fluxo de exibição ao vivo (Display):</strong> O cabo coaxial ou de rede traz o sinal da câmera, o processador decodifica o vídeo e o envia diretamente para a saída HDMI ou VGA. O HD não participa dessa etapa.
              </li>
              <li>
                <strong>Fluxo de gravação (Storage):</strong> O vídeo comprimido (H.264, H.265) é enfileirado na memória RAM do DVR e gravado continuamente ou por eventos no disco rígido conectado à interface SATA. Esse processo exige comunicação estável com o HD, alimentação elétrica suficiente e permissão de escrita do sistema de arquivos.
              </li>
            </ul>
            <p>
              Se o HD falhar, o cabo de dados desconectar, a fonte perder potência ou a agenda de gravação for desconfigurada, o fluxo de exibição continuará funcionando normalmente enquanto o fluxo de armazenamento para por completo — criando uma <strong>falsa sensação de segurança</strong> para quem apenas olha o monitor de tempos em tempos.
            </p>
          </div>
        ),
      },
      {
        h2: 'As causas mais comuns para o DVR não gravar',
        content: (
          <div className="space-y-4">
            <p>
              Na rotina de campo, a Intelsecsul costuma identificar seis causas principais quando um DVR reproduz imagem ao vivo mas não grava:
            </p>

            <h3 className="text-xl font-semibold text-white mt-4">1. HD não reconhecido ou desconectado</h3>
            <p>
              O disco rígido pode ter sido desconectado fisicamente por vibração contínua, mau contato no cabo SATA de dados ou queima da controladora do próprio HD. O DVR inicia sem acusar erro visual evidente no mosaico de câmeras, mas na tela de gerenciamento de disco o status aparece como <em>"Nenhum disco encontrado"</em> ou <em>"Sem HD"</em>.
            </p>

            <h3 className="text-xl font-semibold text-white mt-4">2. HD corrompido, com setores defeituosos (bad blocks) ou travado</h3>
            <p>
              Discos rígidos comuns de desktop (linha comum de computador) usados em DVRs sofrem desgaste acelerado porque trabalham 24 horas por dia gravando sem parar. Quando surgem setores defeituosos na área onde o sistema operacional do DVR grava os índices de vídeo, o processo de escrita trava e o DVR suspende a gravação para proteger o restante dos dados.
            </p>

            <h3 className="text-xl font-semibold text-white mt-4">3. Fonte de alimentação do DVR desgastada ou de amperagem insuficiente</h3>
            <p>
              Esta é uma das causas mais subestimadas. O DVR precisa de energia tanto para sua placa-mãe quanto para girar o motor do HD mecânico (3.5 polegadas consome pico de corrente ao ligar e manter rotação). Fontes chaveadas genéricas perdem capacidade com o tempo. A fonte de 12V 2A ou 3A enfraquecida consegue manter a placa do DVR e a tela vivas, mas não fornece corrente suficiente para manter os pratos do HD girando com estabilidade. O HD simplesmente desliga ou reinicia sozinho.
            </p>

            <h3 className="text-xl font-semibold text-white mt-4">4. Gravação por detecção de movimento mal configurada</h3>
            <p>
              Se o DVR estiver configurado para gravar <em>somente por movimento</em> (em vez de gravação contínua), e a área de detecção não foi desenhada na tela ou a sensibilidade ficou muito baixa, o sistema não dispara o gatilho de gravação. O resultado é que a imagem ao vivo existe, mas nenhuma gravação é registrada porque o DVR "acredita" que nada aconteceu na cena.
            </p>

            <h3 className="text-xl font-semibold text-white mt-4">5. Sobrescrita de disco (overwrite) desativada</h3>
            <p>
              Por padrão, DVRs funcionam no modo sobrescrita contínua: quando o disco atinge 100% de capacidade, os vídeos mais antigos são apagados para dar espaço aos novos. Se essa opção for desmarcada por engano ou se a política de retenção for alterada, assim que o HD enche, o DVR para completamente de gravar e aguarda intervenção manual.
            </p>

            <h3 className="text-xl font-semibold text-white mt-4">6. Agenda de gravação vazia ou desmarcada</h3>
            <p>
              Na tela de agendamento (Schedule), cada dia da semana e cada faixa de horário precisa estar pintada na cor correspondente (geralmente verde para gravação contínua ou amarela para movimento). Uma reinicialização com perda de configurações ou um perfil incorreto pode deixar a grade horária em branco para um ou todos os canais.
            </p>
          </div>
        ),
      },
      {
        h2: 'Tabela: Diagnóstico rápido do problema',
        content: (
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-300 border border-slate-700">
                <thead className="bg-slate-800 text-white font-semibold">
                  <tr>
                    <th className="p-3 border-b border-slate-700">Sintoma Observado</th>
                    <th className="p-3 border-b border-slate-700">Causa Mais Provável</th>
                    <th className="p-3 border-b border-slate-700">O Que Checar Primeiro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="p-3 font-medium text-white">Menu diz "Sem HD" ou capacidade zerada</td>
                    <td className="p-3">Cabo SATA solto, alimentação SATA rompida ou HD queimado</td>
                    <td className="p-3">Conexões internas do cabo SATA e escutar se o HD vibra/gira</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">HD aparece como "Não Formatado" ou "Erro"</td>
                    <td className="p-3">Partição corrompida por queda de energia ou setores ruins</td>
                    <td className="p-3">Tentar formatar pelo DVR; se falhar, substituir por HD CFTV</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">HD some depois de alguns minutos ligado</td>
                    <td className="p-3">Fonte de alimentação do DVR fraca / perdendo tensão</td>
                    <td className="p-3">Trocar fonte de alimentação do DVR por modelo original ou de maior amperagem</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">HD está 100% cheio e sem gravação recente</td>
                    <td className="p-3">Opção de sobrescrita (overwrite) desligada</td>
                    <td className="p-3">Menu Armazenamento &gt; Avançado &gt; marcar "Sobrescrever: Sim"</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Ícone de gravação ausente nas telas das câmeras</td>
                    <td className="p-3">Agenda desmarcada ou canal configurado apenas para evento sem gatilho</td>
                    <td className="p-3">Menu Gravação &gt; Agenda: conferir se todas as horas estão marcadas</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-white">Data e hora do DVR estão em 2000 ou 1970</td>
                    <td className="p-3">Bateria interna CR2032 esgotada + queda de energia</td>
                    <td className="p-3">Ajustar horário e trocar bateria tipo moeda da placa-mãe</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ),
      },
      {
        h2: 'Passo a passo: o que verificar antes de chamar um técnico',
        content: (
          <div className="space-y-4">
            <p>
              Você pode fazer uma triagem em poucos minutos usando apenas o mouse conectado ao DVR ou o aplicativo no celular:
            </p>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Verifique os ícones nos cantos das telas:</strong> A maioria dos DVRs (Intelbras, Hikvision, Tecvoz, Giga) exibe um pequeno ícone de claquete, fita cassete ou círculo vermelho/verde quando o canal está efetivamente gravando. Se a imagem está ao vivo e esse ícone não aparece, aquele canal não está gravando naquele instante.
              </li>
              <li>
                <strong>Tente fazer uma busca de reprodução (Playback):</strong> Entre no menu de busca, selecione a data de hoje e clique na barra de tempo. Se a linha do tempo estiver cinza (vazia) ou acusar "Nenhum arquivo encontrado", o DVR não gravou nada nesse período.
              </li>
              <li>
                <strong>Acesse o menu Gerenciamento de HD / Armazenamento:</strong>
                <ul className="list-disc pl-6 mt-1 space-y-1">
                  <li>O status deve estar como <em>Normal</em> ou <em>Leitura/Escrita</em>.</li>
                  <li>Se estiver como <em>Não inicializado</em>, <em>Anormal</em> ou <em>Erro</em>, o disco está com falha lógica ou física.</li>
                </ul>
              </li>
              <li>
                <strong>Escute o aparelho de perto:</strong> Aproxime o ouvido do DVR. Um HD mecânico em funcionamento emite uma leve vibração e um suave zumbido de rotação. Se o DVR estiver totalmente silencioso por dentro (exceto cooler, se houver), o HD não está girando por falta de energia ou queima do motor.
              </li>
              <li>
                <strong>Atenção à data e hora do sistema:</strong> Se o DVR resetou a data para o ano de fabricação (como 2000 ou 2015), as gravações novas podem estar sendo salvas nessa data antiga. Ao buscar por 2026, você não encontrará nada porque o sistema gravou no passado virtual do aparelho.
              </li>
            </ol>
            <p>
              Se você está em dúvida sobre o dimensionamento do seu sistema como um todo, vale a pena ver também nosso guia sobre <Link to="/blog/quantas-cameras-de-seguranca-preciso-para-minha-casa" className="text-white underline hover:text-slate-300">quantas câmeras de segurança sua casa realmente precisa</Link>.
            </p>
          </div>
        ),
      },
      {
        h2: 'Cuidado: o perigo de formatar o HD às cegas',
        content: (
          <div className="space-y-4">
            <p>
              Muitos usuários e até técnicos inexperientes correm para clicar no botão <strong>"Formatar HD"</strong> assim que encontram um erro de gravação. Essa atitude tem dois riscos graves:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Destruição de provas:</strong> Se houve um incidente recente (um furto, uma batida no portão, uma invasão) que pode ter sido gravado dias atrás antes do travamento, a formatação apagará irrevogavelmente os arquivos de vídeo remanescentes.
              </li>
              <li>
                <strong>Ilusão temporária de solução:</strong> Se o disco tem setores defeituosos ou se a fonte de alimentação está fraca, a formatação até pode ser concluída com sucesso aparente, mas o DVR voltará a parar de gravar em menos de 48 ou 72 horas — deixando o local desprotegido novamente.
              </li>
            </ul>
            <p>
              Se você suspeita de falha no disco mas precisa recuperar imagens passadas, não tente formatar. Desligue o DVR da tomada para evitar que novas escritas sobrescrevam setores e solicite a extração pericial ou diagnóstico técnico especializado.
            </p>
          </div>
        ),
      },
      {
        h2: 'HD para PC vs. HD Purple/SkyHawk: por que o disco comum falha no DVR',
        content: (
          <div className="space-y-4">
            <p>
              Um dos erros mais recorrentes encontrados em manutenções preventivas é o uso de <strong>HDs comuns de computador (desktop)</strong> dentro de gravadores de CFTV. Embora o conector SATA seja idêntico, a arquitetura interna é completamente diferente:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>HD Comum de Desktop (Desktop Drive):</strong> Projetado para funcionar cerca de 8 horas por dia, 5 dias por semana, com carga de 80% de leitura e 20% de escrita. Não tolera vibração contínua e possui firmware voltado para recuperação de erros de sistema operacional (se um setor falhar, ele para tudo e tenta ler novamente, o que faz o fluxo de vídeo engasgar).
              </li>
              <li>
                <strong>HD Próprio para CFTV (WD Purple, Seagate SkyHawk):</strong> Projetado para operação ininterrupta <strong>24 horas por dia, 7 dias por semana (24x7)</strong>, com ciclo de 90% a 95% de escrita contínua. Conta com firmware inteligente (como o AllFrame da WD) que prioriza a gravação ininterrupta de múltiplos fluxos de câmera sem travar, além de suportar temperaturas mais altas e vibração mecânica dentro do chassi do DVR.
              </li>
            </ul>
            <p>
              Substituir um HD danificado por outro HD de desktop comum é garantia de ter a mesma dor de cabeça daqui a 6 ou 12 meses. Para CFTV, utilize sempre discos certificados para segurança eletrônica. Se você prefere não se preocupar com reposição de peças e queimas de disco, confira as vantagens em nosso comparativo sobre <Link to="/blog/comprar-ou-alugar-cameras-de-seguranca-comparacao-completa" className="text-white underline hover:text-slate-300">comprar ou alugar câmeras e equipamentos de segurança</Link>.
            </p>
          </div>
        ),
      },
    ],
    relatedQuestions: [
      {
        question: 'Como saber se o DVR está realmente gravando sem abrir o menu?',
        answer: 'Observe as telas das câmeras no monitor: a grande maioria dos aparelhos exibe um pequeno ícone de gravação (uma fita, claquete ou bolinha vermelha/verde) no canto de cada imagem quando a gravação está ativa. No painel frontal de alguns DVRs também há um LED indicador chamado "REC" ou "HDD" que pisca durante a gravação.',
      },
      {
        question: 'Por que o DVR grava apenas alguns segundos e para?',
        answer: 'Geralmente ocorre por gravação configurada para detecção de movimento com pós-gravação muito curta, por setores defeituosos no HD que travam a escrita em blocos específicos, ou por fonte de alimentação enfraquecida que reinicia o HD assim que a corrente de pico é exigida.',
      },
      {
        question: 'Posso usar pen drive ou HD externo USB para gravar no DVR?',
        answer: 'Não para gravação contínua. A porta USB do DVR serve exclusivamente para backup pontual de trechos de vídeo já gravados ou para conexão do mouse. Para gravar as câmeras continuamente, o DVR exige um HD interno conectado diretamente à porta SATA.',
      },
      {
        question: 'O DVR apaga sozinho as gravações velhas?',
        answer: 'Sim, desde que a função de sobrescrita (overwrite) esteja ativada nas configurações de armazenamento. Quando o HD atinge 100% de ocupação, o sistema apaga automaticamente as horas mais antigas para abrir espaço para os novos vídeos.',
      },
      {
        question: 'Quanto tempo dura um HD próprio para CFTV?',
        answer: 'Discos dedicados a vigilância como WD Purple ou Seagate SkyHawk costumam operar de 3 a 5 anos continuamente em condições adequadas de temperatura e alimentação estável com nobreak. Discos de desktop comuns costumam falhar entre 6 e 18 meses de uso contínuo em DVRs.',
      },
    ],
    internalLink: {
      text: 'Seu DVR parou de gravar ou não reconhece o HD? Precisa de diagnóstico e suporte técnico?',
      url: '/servicos/cameras-de-seguranca/',
      linkText: 'Ver Câmeras de Segurança',
    },
    whatsappMessage: 'Vim do blog e meu DVR mostra imagem mas não grava, preciso de manutenção',
    ctaFinal: {
      title: 'Seu sistema de CFTV parou de gravar e você não pode arriscar ficar sem provas?',
      text: 'A Intelsecsul realiza diagnóstico técnico, substituição de HD para vigilância 24x7, troca de fontes e manutenção preventiva de CFTV em Curitiba e Região Metropolitana. Não espere um incidente acontecer para descobrir que o sistema estava sem gravar.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'hd-do-dvr-nao-e-reconhecido-defeito-disco-cabo-ou-gravador',
    slug: 'hd-do-dvr-nao-e-reconhecido-defeito-disco-cabo-ou-gravador',
    title: 'HD do DVR Não é Reconhecido: Defeito no Disco, Cabo ou Gravador? | Intelsecsul',
    metaTitle: 'HD do DVR Não é Reconhecido: Defeito no Disco, Cabo ou Gravador? | Intelsecsul',
    metaDescription: 'DVR não reconhece HD? Veja como distinguir defeito no disco, cabo SATA ou gravador, meça a alimentação de 5V e 12V, verifique a lista de compatibilidade Intelbras e evite perder gravações importantes.',
    h1: 'HD do DVR não é reconhecido: é defeito no disco, cabo ou gravador?',
    category: 'Câmeras de Segurança',
    readTime: '10 min de leitura',
    publishedDate: '2026-10-05',
    summary: 'Quando o DVR deixa de reconhecer o HD, o problema pode estar em quatro pontos: o próprio disco, o cabo SATA, a alimentação que o DVR fornece ao HD, ou a placa do gravador. A ordem de verificação faz toda a diferença.',
    intro: 'Quando o DVR deixa de reconhecer o HD — exibindo "Sem HD", "HDD não encontrado" ou simplesmente não listando o disco no menu de armazenamento —, o problema pode estar em quatro pontos distintos: o próprio disco rígido (setores defeituosos, desgaste ou falha física), o cabo SATA (conexão solta, oxidação ou rompimento), a alimentação que o DVR fornece ao HD (tensão fora do padrão), ou a placa do gravador (porta SATA queimada ou falha no circuito de alimentação). A Intelbras, em seu manual oficial, orienta que, em primeiro lugar, deve-se verificar se o HD está danificado e, em seguida, a conexão do cabo SATA e o cabo de força. Antes de qualquer coisa, uma regra absoluta: se há qualquer chance de existirem gravações importantes no disco, não formate, não inicialize e não substitua o HD sem antes esgotar as verificações abaixo.',
    sections: [
      {
        h2: 'Primeiro: confirme se o problema é o HD ou o DVR',
        content: (
          <div className="space-y-4">
            <p>O teste mais rápido para saber se o problema está no disco ou no gravador é testar o HD em outro equipamento — ou testar outro HD no mesmo DVR.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Se você tem outro DVR ou um computador disponível</h3>
            <ol className="space-y-2 list-decimal list-inside">
              <li>Desligue o DVR e remova o HD com cuidado.</li>
              <li>Conecte o HD a outro DVR (de preferência, compatível) ou a um computador, usando um adaptador SATA-USB.</li>
              <li>Se o HD for reconhecido e funcionar normalmente em outro equipamento, o problema está no DVR (porta SATA, alimentação ou placa).</li>
              <li>Se o HD não for reconhecido em nenhum equipamento, o problema está no próprio disco.</li>
            </ol>
            <p>Atenção: se o HD contiver gravações importantes, não o formate em nenhum momento durante esse teste. Apenas verifique se ele é reconhecido.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Se você tem outro HD para testar no DVR</h3>
            <ol className="space-y-2 list-decimal list-inside">
              <li>Desligue o DVR, remova o HD original e conecte o HD de teste.</li>
              <li>Ligue o DVR e verifique no menu de armazenamento se o novo HD é reconhecido.</li>
              <li>Se o novo HD for reconhecido, o problema é o HD original.</li>
              <li>Se o novo HD também não for reconhecido, o problema está no DVR (cabo, alimentação ou porta SATA).</li>
            </ol>
            <p>Esse teste cruzado é a forma mais confiável de isolar se o defeito está no disco ou no gravador — e evita que você troque um HD que ainda funciona ou descarte um DVR que só precisa de um cabo novo.</p>
          </div>
        ),
      },
      {
        h2: 'Verificações na ordem certa (sem formatar o disco)',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">1. O HD aparece no menu de armazenamento?</h3>
            <p>Acesse o menu de Armazenamento / Disco / HDD do DVR e verifique: o HD é listado pelo sistema? O status está como Normal ou Read/Write? A capacidade está correta? Há algum alerta ou erro na tela? Se o HD não aparece na lista, o DVR não tem onde gravar — mesmo que a imagem ao vivo continue funcionando normalmente, igual vimos no caso de <Link to="/blog/dvr-mostra-imagem-ao-vivo-mas-nao-grava" className="text-white underline hover:text-slate-300">DVR que mostra imagem mas não grava</Link>.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">2. Verifique a alimentação que o DVR fornece ao HD</h3>
            <p>Este é um dos pontos mais críticos e menos conhecidos. O DVR fornece energia ao HD através de um cabo de alimentação que fica ao lado do cabo SATA. A Intelbras orienta que essa alimentação seja verificada com um multímetro:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Entre o fio preto e o amarelo: a tensão deve ser de 12 V (podendo variar até 10%).</li>
              <li>Entre o fio preto e o vermelho: a tensão deve ser de 5 V (podendo variar até 10%).</li>
            </ul>
            <p>Se as tensões estiverem fora desses valores, o problema pode estar na fonte do DVR — e não no HD. A medição deve ser feita com o DVR ligado e o HD conectado, para que a tensão seja medida sob carga. Se você não tem multímetro ou não se sente seguro para fazer a medição, não abra o equipamento — encaminhe para um técnico.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">3. Verifique o cabo SATA e a conexão física</h3>
            <p>Problemas comuns incluem conector solto, oxidação nos contatos (especialmente em ambientes úmidos), cabo rompido ou com mau contato interno, ou porta SATA danificada na placa do DVR.</p>
            <p className="font-bold text-white">O que fazer:</p>
            <ol className="space-y-2 list-decimal list-inside">
              <li>Desligue o DVR da tomada.</li>
              <li>Reconecte o cabo SATA firmemente nas duas pontas (no HD e na placa do DVR).</li>
              <li>Reconecte o cabo de alimentação do HD.</li>
              <li>Ligue o DVR e verifique novamente o menu de armazenamento.</li>
            </ol>
            <p>Se o HD voltar a ser reconhecido, o problema era mau contato. Se continuar sem reconhecer, substitua o cabo SATA por um novo e teste novamente — é barato e elimina uma variável importante do diagnóstico.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">4. O HD é compatível com o DVR?</h3>
            <p>A Intelbras garante o funcionamento correto do DVR apenas com HDs compatíveis e disponibiliza uma lista de HDs homologados em seu site. O modelo do seu HD está na lista? É específico para vigilância (como WD Purple, Seagate SkyHawk), ou é um HD comum de computador?</p>
            <p>HDs de computador comum não são projetados para operação 24/7 e podem apresentar falhas de reconhecimento, superaquecimento e desgaste prematuro em sistemas de CFTV.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">5. Atualize o firmware do DVR (se aplicável)</h3>
            <p>Em alguns casos, um HD novo — mesmo homologado — pode não ser reconhecido porque o firmware do DVR está desatualizado. Verifique a versão atual no menu de informações, compare com a mais recente no site da Intelbras e, se houver atualização, siga as instruções oficiais — use apenas arquivos do fabricante e não interrompa a atualização.</p>
            <p>Cuidado: a atualização de firmware pode corromper o sistema se interrompida ou feita com o arquivo errado. Se você não se sente seguro, encaminhe o DVR para um técnico.</p>
          </div>
        ),
      },
      {
        h2: 'Tabela de diagnóstico rápido',
        content: (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-white font-bold">Sintoma</th>
                  <th className="text-left p-3 text-white font-bold">Verificação prioritária</th>
                  <th className="text-left p-3 text-white font-bold">Causa provável</th>
                  <th className="text-left p-3 text-white font-bold">Ação segura</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">"Sem HD" no DVR</td><td className="p-3">HD reconhecido em outro equipamento?</td><td className="p-3">HD com falha física</td><td className="p-3">Testar HD em outro DVR/PC; não formatar</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">HD não aparece no menu</td><td className="p-3">Tensão de 12V e 5V no cabo de alimentação</td><td className="p-3">Fonte do DVR com defeito</td><td className="p-3">Medir tensões; se fora do padrão, encaminhar</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">HD reconhecido intermitentemente</td><td className="p-3">Cabo SATA bem conectado? Oxidação?</td><td className="p-3">Mau contato no cabo SATA</td><td className="p-3">Reconectar; substituir cabo SATA</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">HD novo não é reconhecido</td><td className="p-3">Modelo está na lista de compatibilidade?</td><td className="p-3">HD não homologado</td><td className="p-3">Consultar lista; substituir por modelo compatível</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">HD homologado não é reconhecido</td><td className="p-3">Versão do firmware do DVR</td><td className="p-3">Firmware desatualizado</td><td className="p-3">Atualizar firmware conforme orientação oficial</td></tr>
                <tr><td className="p-3 font-semibold text-white">Após queda de energia, HD sumiu</td><td className="p-3">Porta SATA, alimentação, placa</td><td className="p-3">Falha na placa do DVR ou fonte</td><td className="p-3">Não insistir; encaminhar para diagnóstico técnico</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        h2: 'O que NÃO fazer (e por quê)',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">❌ Não formate o HD antes de preservar as gravações</h3>
            <p>Formatar o HD apaga todas as gravações. Se houver qualquer chance de existirem imagens importantes, a formatação deve ser a última opção. Mesmo que o HD pareça "vazio" ou "não reconhecido", os dados podem estar recuperáveis. A Intelbras recomenda formatar apenas HDs novos, antes do primeiro uso — não discos com gravações que você precisa manter.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não inicialize o disco</h3>
            <p>A inicialização (initialize) apaga e recria a estrutura de arquivos do HD. O resultado é o mesmo da formatação: perda de dados. Não confunda "inicializar" com "reconhecer" — inicializar não resolve problemas de conexão, alimentação ou compatibilidade.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não troque o HD sem antes testar alimentação e cabo</h3>
            <p>Muitos HDs são substituídos desnecessariamente porque o problema era alimentação insuficiente ou cabo SATA com mau contato. Antes de comprar um HD novo, meça as tensões (12V e 5V), substitua o cabo SATA e teste o HD em outro equipamento.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não abra o DVR se não tiver experiência</h3>
            <p>Abrir o DVR para mexer no HD, nos cabos ou na placa expõe você a risco de choque elétrico e pode danificar componentes sensíveis. Se você não tem multímetro ou não se sente seguro, encaminhe para um técnico especializado.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não ignore o histórico do equipamento</h3>
            <p>Se o DVR já apresentou outros problemas (reinícios, travamentos, superaquecimento, perda de configuração), o HD não reconhecido pode ser sintoma de um problema maior — como fonte instável ou placa com defeito.</p>
          </div>
        ),
      },
      {
        h2: 'Quando encaminhar o gravador para assistência técnica',
        content: (
          <div className="space-y-4">
            <ul className="space-y-2 list-disc list-inside">
              <li>As tensões de alimentação do HD estão fora do padrão (12V e 5V com variação superior a 10%).</li>
              <li>O HD funciona em outro equipamento, mas não é reconhecido no DVR.</li>
              <li>O HD é homologado, as conexões estão corretas, a alimentação está no padrão e o firmware está atualizado — mas o DVR continua sem reconhecer o disco.</li>
              <li>O DVR reinicia, trava ou apresenta outros sintomas além do HD não reconhecido.</li>
              <li>Você precisa preservar gravações importantes.</li>
              <li>O equipamento está na garantia — abrir o DVR sem autorização pode anulá-la.</li>
            </ul>
            <p>A Intelsecsul atende chamados de diagnóstico e manutenção de CFTV em Curitiba e Região Metropolitana. O atendimento prioriza a preservação das gravações existentes antes de qualquer intervenção. Se o problema não for isolado ao HD — por exemplo, se outros equipamentos pararam junto — vale conferir nosso guia de <Link to="/blog/sistema-de-seguranca-parou-o-que-fazer" className="text-white underline hover:text-slate-300">quando todo o sistema de segurança para ao mesmo tempo</Link>.</p>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: 'HD do DVR não reconhecido pode ser defeito no disco, no cabo SATA, na alimentação ou no gravador — e a ordem de verificação faz toda a diferença. Comece pelo teste cruzado, depois verifique alimentação (12V e 5V), conexão do cabo SATA, compatibilidade do modelo e, por fim, firmware do DVR. A regra mais importante vale para todos os cenários: não formate, não inicialize e não substitua o HD antes de esgotar as verificações e confirmar que não há gravações a preservar. Esse tipo de triagem — junto com a de câmeras que ficam fora do ar — é o que evita trocas de equipamento desnecessárias e perda de gravações importantes.',
      },
    ],
    relatedQuestions: [
      {
        question: 'O HD funciona no computador, mas não é reconhecido no DVR. O que pode ser?',
        answer: 'As causas mais prováveis são: alimentação insuficiente (o DVR pode não estar fornecendo 12V e 5V corretos), porta SATA danificada na placa do DVR, cabo SATA com problema ou incompatibilidade (HD não homologado). Meça as tensões, substitua o cabo SATA e verifique se o modelo está na lista de compatibilidade da Intelbras.',
      },
      {
        question: 'Posso formatar o HD para o DVR reconhecer?',
        answer: 'Formatar apaga todas as gravações. Se o HD tiver imagens que você precisa manter, não formate — além disso, formatar não resolve problemas de conexão, alimentação ou compatibilidade. A formatação só é recomendada para HDs novos, antes do primeiro uso.',
      },
      {
        question: 'Qual a tensão correta de alimentação do HD no DVR?',
        answer: 'Entre o fio preto e o amarelo, a tensão deve ser de 12V, e entre o fio preto e o vermelho, de 5V — podendo variar até 10% para mais ou para menos. Se as tensões estiverem fora desse intervalo, o problema pode estar na fonte do DVR, e não no HD.',
      },
      {
        question: 'Preciso comprar um HD específico para DVR?',
        answer: 'Sim, é altamente recomendável. HDs de vigilância (como WD Purple e Seagate SkyHawk) são projetados para operação 24/7 e têm maior durabilidade em sistemas de CFTV. HDs de computador comum podem funcionar temporariamente, mas não têm garantia de reconhecimento estável nem de durabilidade.',
      },
      {
        question: 'O HD não é reconhecido após queda de energia. O que fazer?',
        answer: 'Quedas de energia podem danificar o sistema de arquivos do HD, a fonte do DVR ou a placa do gravador. Verifique primeiro as tensões de alimentação, reconecte o cabo SATA e teste o HD em outro equipamento. Se funcionar em outro lugar mas não no DVR, o problema é no gravador. Não formate o HD se houver gravações importantes.',
      },
    ],
    internalLink: {
      text: 'Seu DVR não está reconhecendo o HD? Precisa de diagnóstico sem perder as gravações?',
      url: '/servicos/manutencao/',
      linkText: 'Ver Manutenção de Sistemas',
    },
    whatsappMessage: 'Vim do blog e meu DVR não reconhece o HD',
    ctaFinal: {
      title: 'Seu DVR não está reconhecendo o HD? Precisa de diagnóstico sem perder as gravações?',
      text: 'A Intelsecsul realiza diagnóstico de CFTV em Curitiba e Região Metropolitana, com prioridade para a preservação das gravações existentes antes de qualquer intervenção.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'dvr-apitando-sem-parar-o-que-significa',
    slug: 'dvr-apitando-sem-parar-o-que-significa',
    title: 'DVR Apitando Sem Parar: O Que Significa e Quando Chamar Assistência | Intelsecsul',
    metaTitle: 'DVR Apitando Sem Parar: O Que Significa e Quando Chamar Assistência | Intelsecsul',
    metaDescription: 'DVR apitando sem parar? Entenda o que cada bipe significa (HD, perda de vídeo, rede ou alimentação), como identificar a causa pelo menu de anormalidade e quando chamar assistência técnica.',
    h1: 'DVR apitando sem parar: o que significa e quando chamar assistência',
    category: 'Câmeras de Segurança',
    readTime: '10 min de leitura',
    publishedDate: '2026-10-09',
    summary: 'O apito do DVR é um alarme de anormalidade (buzzer). Nos gravadores Intelbras da linha MHDX, cinco eventos o acionam — sem HD, erro no HD, HD sem espaço, rede ausente e conflito de IP — e três deles são problemas de HD. Desligar o buzzer sem investigar mantém o problema.',
    intro: 'O DVR não apita por acaso. O som é um alarme de anormalidade (buzzer) que o próprio gravador dispara quando identifica um evento que compromete o funcionamento do sistema. Nos gravadores Intelbras da linha MHDX, são cinco os eventos que acionam o buzzer: sem HD, erro no HD, HD sem espaço, rede ausente e conflito de IP — e três dos cinco são problemas de HD, por isso o disco é o primeiro lugar onde se deve olhar. O apito é um aviso de que o sistema pode estar sem gravar: desligar o buzzer sem investigar resolve o barulho e mantém o problema, e você só vai descobrir quando precisar da gravação e ela não existir. Antes de qualquer ação, uma regra vale para todos os cenários: não formate o HD, não inicialize o disco e não restaure o DVR para configurações de fábrica enquanto houver qualquer chance de existirem gravações importantes.',
    sections: [
      {
        h2: 'O que é o buzzer e o que ele monitora',
        content: (
          <div className="space-y-4">
            <p>O buzzer é o alarme sonoro interno do DVR. Ele não é transmitido pelo HDMI para a TV — o som é emitido apenas pelo próprio gravador. Isso significa que, mesmo com o monitor ligado, o apito vem diretamente do equipamento.</p>
            <p>O DVR monitora continuamente quatro categorias de eventos que podem acionar o buzzer:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Armazenamento (HD):</strong> disco ausente, disco com erro, disco cheio sem sobrescrita.</li>
              <li><strong className="text-white">Vídeo:</strong> perda de sinal de uma ou mais câmeras.</li>
              <li><strong className="text-white">Rede:</strong> ausência de conexão de rede ou conflito de endereço IP.</li>
              <li><strong className="text-white">Sistema:</strong> temperatura elevada, falha de inicialização ou travamento.</li>
            </ul>
            <p>Cada um desses eventos pode ser configurado para acionar ou não o buzzer de forma independente. Quando o DVR apita, ele está reagindo a um desses eventos — e o log do sistema registra exatamente qual foi, com data e hora.</p>
          </div>
        ),
      },
      {
        h2: 'Existe um código secreto de bipes (3 bipes, 4 bipes, 5 bipes)?',
        content: (
          <div className="space-y-4">
            <p>Uma das buscas mais comuns é "DVR apitando 4 vezes" ou "DVR apitando 5 vezes", como se a quantidade de bipes fosse um código de erro de BIOS de computador. Não é assim que funciona nos DVRs de CFTV. O buzzer do DVR Intelbras é orientado a eventos, não a contagem. Não existe uma tabela oficial onde 3 bipes = HD com erro ou 4 bipes = câmera offline. O que varia é o padrão do som (contínuo, intermitente, em rajadas), que muda conforme o modelo e o firmware — mas não corresponde a um código de erro publicável.</p>
            <p>O cenário mais frequente por trás de "4 bipes" é simples: 4 câmeras perderam o sinal ao mesmo tempo — por queda de energia momentânea, conector solto ou fonte com problema. O DVR dispara o buzzer para cada canal afetado, resultando em múltiplos bipes em sequência. Ao verificar a tela principal, 4 canais vão mostrar "Perda de Vídeo" ou "Sem Sinal". Se for o seu caso, vale conferir as <Link to="/blog/camera-fora-do-ar-causas-solucoes" className="text-white underline hover:text-slate-300">causas mais comuns de câmera fora do ar</Link>.</p>
            <p>O que realmente funciona não é contar bipes, mas fazer o DVR "falar" em vez de apitar. No menu de Anormalidade, além do buzzer, existe a opção de exibir mensagem na tela. Ative a mensagem para cada evento e, na próxima vez que o alarme disparar, o próprio gravador escreve o motivo no monitor — sem adivinhação.</p>
          </div>
        ),
      },
      {
        h2: 'Tabela de padrões de apito e causas prováveis',
        content: (
          <div className="space-y-4">
            <p>A tabela abaixo reúne padrões observados com frequência na prática. Eles variam conforme o modelo e o firmware e não substituem a consulta ao menu de Anormalidade, que é a forma confiável de confirmar a causa.</p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-3 text-white font-bold">Padrão do apito</th>
                    <th className="text-left p-3 text-white font-bold">Causa mais provável</th>
                    <th className="text-left p-3 text-white font-bold">Como confirmar</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">1 bipe curto ao ligar</td><td className="p-3">Inicialização normal do sistema</td><td className="p-3">Nenhuma ação necessária</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Bipes contínuos sem pausa</td><td className="p-3">Uma ou mais câmeras com perda de vídeo ativa</td><td className="p-3">Verificar canais na tela principal</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Múltiplos bipes rápidos seguidos</td><td className="p-3">Múltiplas câmeras offline ao mesmo tempo</td><td className="p-3">Verificar quantos canais estão sem imagem</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Bipes periódicos a cada 1-2 minutos</td><td className="p-3">HD com erro, HD cheio ou HD ausente</td><td className="p-3">Menu Principal &gt; Armazenamento &gt; Disco Rígido</td></tr>
                  <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Bipe isolado ao desconectar o cabo de rede</td><td className="p-3">Alerta de rede ativo no menu</td><td className="p-3">Configurável em Evento &gt; Anormalidade</td></tr>
                  <tr><td className="p-3 font-semibold text-white">Bipes que somem após alguns minutos</td><td className="p-3">Câmera oscilou e reconectou</td><td className="p-3">Verificar log de eventos</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400">Fonte: Leste Câmeras.</p>
          </div>
        ),
      },
      {
        h2: 'As 5 causas do apito, uma a uma',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">1. Sem HD (HD ausente ou não detectado)</h3>
            <p><strong className="text-white">O que está acontecendo:</strong> o DVR não encontrou nenhum disco rígido. As causas mais comuns são: HD ausente (o equipamento está operando sem disco, o que é possível em alguns modelos), cabo SATA solto ou danificado, HD queimado ou modelo incompatível (fora da lista de homologados do fabricante).</p>
            <p><strong className="text-white">Como confirmar:</strong> acesse Menu Principal &gt; Armazenamento &gt; Disco Rígido e verifique se o disco aparece na lista. Se não aparecer, o problema é de conexão, compatibilidade ou falha física no disco.</p>
            <p><strong className="text-white">O que fazer:</strong> desligue o DVR, verifique as conexões do cabo SATA e do cabo de alimentação do HD e reconecte firmemente. Se o HD continuar sem ser reconhecido, teste-o em outro equipamento (DVR ou computador) para isolar se o problema é o disco ou o gravador. Não formate o HD se houver gravações a preservar. O passo a passo completo está no guia sobre <Link to="/blog/hd-do-dvr-nao-e-reconhecido-defeito-disco-cabo-ou-gravador" className="text-white underline hover:text-slate-300">HD do DVR que não é reconhecido</Link>.</p>
            <p><strong className="text-white">Observação importante:</strong> se o DVR nunca teve um HD instalado, ele continuará apitando e o som não poderá ser desativado até que um disco seja instalado e formatado. Nesse caso, a solução é instalar um HD compatível.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">2. Erro no HD (falha de leitura/gravação)</h3>
            <p><strong className="text-white">O que está acontecendo:</strong> o disco foi detectado, mas apresenta falha de leitura ou gravação — o quadro clássico de HD chegando ao fim da vida útil. Setores defeituosos (bad blocks), desgaste mecânico ou corrupção do sistema de arquivos são as causas mais comuns. O DVR continua mostrando imagem ao vivo, mas pode não estar gravando corretamente ou estar gravando de forma intermitente.</p>
            <p><strong className="text-white">Como confirmar:</strong> acesse Menu Principal &gt; Armazenamento &gt; Disco Rígido e verifique o status do HD. Se estiver como "Erro" ou "Anormal", o disco está falhando.</p>
            <p><strong className="text-white">O que fazer:</strong> não formate o HD como primeira medida. Se houver gravações importantes, tente exportá-las antes de qualquer intervenção. Em alguns casos, uma verificação de disco (check disk) pelo próprio DVR pode corrigir pequenos erros de índice de arquivos. Se o erro persistir, o HD provavelmente precisa ser substituído por um modelo novo e homologado.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">3. HD sem espaço (disco cheio sem sobrescrita)</h3>
            <p><strong className="text-white">O que está acontecendo:</strong> o disco encheu e a sobrescrita automática está desativada. Sem espaço para gravar novos vídeos, o DVR para de gravar e dispara o alarme sonoro.</p>
            <p><strong className="text-white">Como confirmar:</strong> acesse Menu Principal &gt; Armazenamento e verifique o percentual de uso do HD. Se estiver em 100% e a opção de sobrescrita (Overwrite / Recycle) estiver desativada, essa é a causa. Como imagem ao vivo e gravação são funções separadas, confirme também se o DVR está gravando — veja como fazer o teste de playback em <Link to="/blog/dvr-mostra-imagem-ao-vivo-mas-nao-grava" className="text-white underline hover:text-slate-300">DVR que mostra imagem ao vivo mas não grava</Link>.</p>
            <p><strong className="text-white">O que fazer:</strong> ative a sobrescrita automática no menu de armazenamento, o que permite ao DVR continuar gravando e substituir as gravações mais antigas pelas mais recentes. Atenção: se você precisa preservar gravações de um período específico, exporte esses arquivos antes de ativar a sobrescrita.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">4. Rede ausente (cabo desconectado ou sem conexão)</h3>
            <p><strong className="text-white">O que está acontecendo:</strong> o DVR perdeu a conexão de rede — o cabo foi desconectado, o roteador está desligado ou a rede caiu. Se o alerta de rede estiver ativo no menu, o DVR emite um bipe isolado no momento da desconexão.</p>
            <p><strong className="text-white">Como confirmar:</strong> verifique se o cabo de rede está conectado firmemente na traseira do DVR e no roteador/switch e se os LEDs da porta de rede estão acesos. Acesse o menu de Configurações de Rede e veja se o DVR está com endereço IP válido.</p>
            <p><strong className="text-white">O que fazer:</strong> reconecte o cabo de rede. Se a rede voltar, o bipe deve parar. Se o bipe continuar mesmo com a rede funcionando, o problema pode ser outro evento — verifique o log do sistema.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">5. Conflito de IP (dois dispositivos com o mesmo endereço)</h3>
            <p><strong className="text-white">O que está acontecendo:</strong> o DVR está usando o mesmo endereço IP de outro dispositivo na rede (roteador, computador, outra câmera IP). O conflito causa instabilidade na comunicação e aciona o buzzer.</p>
            <p><strong className="text-white">Como confirmar:</strong> acesse as Configurações de Rede do DVR, verifique o endereço IP atual e compare com os IPs de outros dispositivos. O DVR pode estar com IP fixo fora da faixa de DHCP, ou o roteador pode ter atribuído o mesmo IP para dois dispositivos.</p>
            <p><strong className="text-white">O que fazer:</strong> altere o endereço IP do DVR para um endereço livre na rede ou ative o DHCP para que o roteador atribua um IP automaticamente. Em alguns casos, a solução é desativar o DHCP e configurar um IP fixo fora da faixa de distribuição do roteador.</p>
          </div>
        ),
      },
      {
        h2: 'Como identificar a causa exata pelo menu e pelos logs',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">Passo 1: acesse o menu de Anormalidade</h3>
            <p>O caminho varia conforme o modelo do DVR, mas a lógica é a mesma:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Modelos Intelbras MHDX (mais recentes):</strong> Menu Principal &gt; Evento &gt; Anormalidade.</li>
              <li><strong className="text-white">Modelos Intelbras MHDX (mais antigos):</strong> Menu Principal &gt; Avançado &gt; Anormalidade.</li>
            </ul>
            <p>Nessa tela, você vê cada evento configurável (sem HD, erro no HD, HD sem espaço, rede ausente, conflito de IP) e pode verificar qual deles está com o buzzer habilitado. O evento com o buzzer ativo é o que está causando o apito.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Passo 2: ative a mensagem na tela</h3>
            <p>Em vez de só ouvir o bipe, faça o DVR mostrar o motivo na tela. No mesmo menu de Anormalidade, ative a opção de exibir mensagem na tela para cada evento. Na próxima vez que o alarme disparar, o próprio gravador escreve o motivo no monitor.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Passo 3: consulte os logs do sistema</h3>
            <p>O log registra com data e hora cada evento que acionou o buzzer. Acesse Menu Principal &gt; Registros / Log e procure pelos eventos mais recentes. O log mostra exatamente qual anormalidade ocorreu e quando — o que ajuda a correlacionar o apito com um evento real (uma câmera que caiu, uma oscilação de rede, um erro de HD).</p>
          </div>
        ),
      },
      {
        h2: 'O que NÃO fazer (e por quê)',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">❌ Não desligue o buzzer sem investigar a causa</h3>
            <p>Desligar o buzzer resolve o barulho, mas mantém o problema. Se o DVR está apitando por erro no HD, você desliga o som e continua sem gravação — e só vai descobrir quando precisar das imagens. O buzzer existe justamente para chamar atenção para um problema que pode comprometer a segurança.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não formate o HD como primeira medida</h3>
            <p>Formatar o HD apaga todas as gravações. Se o apito é por erro no HD, a formatação pode até resolver temporariamente o alarme, mas destrói o histórico de imagens. Exporte as gravações importantes antes de qualquer formatação.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não inicialize o disco</h3>
            <p>A inicialização (initialize) apaga e recria a estrutura de arquivos do HD. O resultado é o mesmo da formatação: perda de dados. Não confunda "inicializar" com "reconhecer".</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não restaure o DVR para configurações de fábrica</h3>
            <p>O reset de fábrica pode apagar configurações de rede, senhas de acesso, agenda de gravação e, em alguns modelos, a estrutura de arquivos do HD. Se o problema é de configuração, você pode corrigi-lo manualmente sem reset.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não abra o DVR se não tiver experiência</h3>
            <p>Abrir o DVR para mexer no HD ou nos cabos expõe você a risco de choque elétrico e pode danificar componentes sensíveis. Se você não tem multímetro, não sabe medir tensões ou não se sente seguro, não abra o equipamento — encaminhe para um técnico especializado.</p>
          </div>
        ),
      },
      {
        h2: 'Quando chamar um técnico especializado',
        content: (
          <div className="space-y-4">
            <p>A triagem pelo menu de Anormalidade e pelos logs pode ser feita por você. Mas alguns cenários exigem diagnóstico profissional:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>HD com erro persistente mesmo após verificação das conexões — pode ser falha física no disco que exige substituição.</li>
              <li>HD não reconhecido após testar em outro equipamento — pode ser falha na porta SATA ou na placa do DVR.</li>
              <li>Apito continua mesmo após desativar todos os eventos de anormalidade — pode ser falha no firmware ou na placa do gravador.</li>
              <li>DVR reinicia, trava ou superaquece junto com o apito — problema de hardware que exige avaliação técnica.</li>
              <li>Existem gravações importantes que precisam ser preservadas — um técnico pode tentar exportar as imagens antes de qualquer intervenção.</li>
              <li>O equipamento está na garantia — abrir o DVR ou mexer no HD sem autorização pode anular a garantia.</li>
              <li>Você não se sente seguro para navegar nos menus ou fazer as verificações.</li>
            </ul>
            <p>A Intelsecsul atende chamados de diagnóstico e manutenção de CFTV em Curitiba e Região Metropolitana. O atendimento prioriza a preservação das gravações existentes antes de qualquer intervenção — e o orçamento é apresentado com clareza depois do diagnóstico.</p>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: (
          <div className="space-y-4">
            <p>DVR apitando sem parar é um alarme de anormalidade — e o som está comunicando um problema real. As cinco causas mais comuns são: sem HD, erro no HD, HD sem espaço, rede ausente e conflito de IP — e três delas envolvem o disco rígido. A triagem correta começa pelo menu de Anormalidade, onde você identifica qual evento está com o buzzer ativo, e segue pelos logs do sistema, para confirmar o que aconteceu e quando.</p>
            <p>A regra mais importante: não desligue o buzzer sem investigar, não formate o HD sem preservar as gravações e não restaure o DVR sem necessidade. Se a triagem não resolveu, ou se existem gravações importantes que precisam ser preservadas, a avaliação de um técnico especializado é o caminho mais seguro.</p>
          </div>
        ),
      },
    ],
    relatedQuestions: [
      {
        question: 'DVR apitando 4 vezes: o que significa?',
        answer: 'Não existe um código oficial onde 4 bipes correspondem a um erro específico. O que acontece na maioria dos casos é que 4 câmeras perderam o sinal ao mesmo tempo — por queda de energia, conector solto ou fonte com problema. O DVR dispara o buzzer para cada canal afetado, resultando em múltiplos bipes em sequência. Verifique na tela principal quantos canais estão mostrando "Perda de Vídeo" ou "Sem Sinal".',
      },
      {
        question: 'Posso simplesmente desligar o buzzer para parar o barulho?',
        answer: 'Pode, mas não é recomendado sem antes investigar a causa. Desligar o buzzer silencia o alarme, mas mantém o problema — se o DVR está apitando por erro no HD, você continua sem gravação. O ideal é identificar o evento que disparou o alarme (pelo menu de Anormalidade ou pelos logs), resolver a causa e, só então, decidir se o buzzer deve ser desativado.',
      },
      {
        question: 'Como desativar o buzzer do DVR Intelbras?',
        answer: 'Acesse Menu Principal > Evento > Anormalidade (ou Menu Principal > Avançado > Anormalidade em modelos mais antigos) e verifique se a opção de buzzer está desabilitada para os eventos como sem HD, erro no HD, HD sem espaço, rede ausente e conflito de IP. Para o buzzer de detecção de movimento, acesse Menu Principal > Evento > Detectar e desabilite a opção de buzzer para todos os canais nas abas de Movimento, Mascaramento e Perda de Vídeo.',
      },
      {
        question: 'O DVR apita mesmo sem HD instalado. É normal?',
        answer: 'Sim, e nesse caso o apito não pode ser desativado enquanto não houver um disco instalado. O DVR continua apitando para alertar que não tem onde gravar. A solução é instalar um HD compatível e formatá-lo pelo próprio DVR.',
      },
      {
        question: 'O apito pode indicar que o DVR não está gravando?',
        answer: 'Sim, e essa é a principal preocupação. A maioria dos eventos que disparam o apito (sem HD, erro no HD, HD sem espaço) afeta diretamente a gravação. Se o DVR está apitando, verifique imediatamente se está gravando acessando o menu de Playback e testando a reprodução de uma data recente. Imagem ao vivo e gravação são funções separadas.',
      },
      {
        question: 'O apito para sozinho depois de alguns minutos. Devo me preocupar?',
        answer: 'Se o apito para sozinho, pode ter sido um evento momentâneo — uma câmera que oscilou e reconectou, uma oscilação rápida de rede ou um pico de temperatura. Ainda assim, vale verificar o log do sistema para identificar qual evento ocorreu e se ele pode se repetir, porque eventos intermitentes podem evoluir para falhas permanentes.',
      },
    ],
    internalLink: {
      text: 'Seu DVR está apitando sem parar? Precisa de diagnóstico sem perder as gravações?',
      url: '/servicos/manutencao/',
      linkText: 'Ver Manutenção de Sistemas',
    },
    whatsappMessage: 'Vim do blog e meu DVR está apitando',
    ctaFinal: {
      title: 'Seu DVR está apitando sem parar? Precisa de diagnóstico sem perder as gravações?',
      text: 'A Intelsecsul realiza diagnóstico de CFTV em Curitiba e Região Metropolitana, com prioridade para a preservação das gravações existentes antes de qualquer intervenção.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'nvr-nao-reconhece-camera-ip-depois-de-trocar-roteador',
    slug: 'nvr-nao-reconhece-camera-ip-depois-de-trocar-roteador',
    title: 'NVR Não Reconhece Câmeras IP Depois de Trocar o Roteador: O Que Fazer | Intelsecsul',
    metaTitle: 'NVR Não Reconhece Câmeras IP Depois de Trocar o Roteador: O Que Fazer | Intelsecsul',
    metaDescription: 'Trocou o roteador e o NVR parou de reconhecer as câmeras IP? Veja como diagnosticar DHCP, faixa de IP, PoE e credenciais — sem resetar o NVR nem perder as configurações.',
    h1: 'NVR não reconhece câmeras IP depois de trocar o roteador',
    category: 'Câmeras de Segurança',
    readTime: '10 min de leitura',
    publishedDate: '2026-10-13',
    summary: 'Quando o roteador é trocado, três coisas mudam silenciosamente: a faixa de endereços IP, o comportamento do DHCP e, às vezes, as credenciais das câmeras. Na maioria dos casos, basta alinhar a faixa de IP entre NVR, câmeras e roteador — sem resetar nada.',
    intro: 'Quando você troca o roteador, o NVR e as câmeras IP continuam ligados, os cabos continuam conectados e o sistema parece intacto. Mas por trás disso, três coisas mudam silenciosamente: a faixa de endereços IP da rede (o roteador novo pode usar 192.168.1.x, enquanto o antigo usava 192.168.0.x), as credenciais de acesso (a câmera pode ter usuário e senha diferentes do que o NVR espera) e o comportamento do servidor DHCP. O resultado é sempre o mesmo sintoma: o NVR lista os canais como "Offline", "Sem Host de Rede" ou simplesmente não encontra nenhuma câmera na busca automática. O erro mais comum é a mudança de faixa de IP: se o roteador antigo usava 192.168.0.1 e o novo usa 192.168.1.1, todas as câmeras configuradas com IP fixo na faixa antiga ficam inalcançáveis pelo NVR. A boa notícia é que, na maioria dos casos, a solução não exige resetar o NVR nem reinstalar as câmeras. Antes de qualquer ação: não restaure o NVR para configurações de fábrica, não formate o HD e não resete as câmeras.',
    sections: [
      {
        h2: 'Primeiro: entenda onde está o problema (rede local, PoE ou configuração)',
        content: (
          <div className="space-y-4">
            <p>A falha pode estar em três camadas diferentes, e cada uma exige um tipo de verificação:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Rede local (LAN):</strong> o NVR e as câmeras precisam estar na mesma sub-rede. Se o roteador mudou a faixa de IP, os dispositivos ficam em "ilhas" separadas e não se enxergam.</li>
              <li><strong className="text-white">Alimentação PoE:</strong> se as câmeras são alimentadas pelas portas PoE do próprio NVR, a troca do roteador não afeta a alimentação. Mas se houver um switch PoE externo entre o roteador e as câmeras, a troca pode ter interrompido a comunicação com esse switch.</li>
              <li><strong className="text-white">Configuração de cada câmera:</strong> mesmo com a rede alinhada, o NVR precisa das credenciais corretas (usuário e senha) para acessar cada câmera. Se a câmera foi reiniciada ou perdeu configuração, o NVR não consegue autenticar.</li>
            </ul>
            <p>A ordem de verificação segue essa lógica: primeiro a rede, depois a alimentação, depois as credenciais. Pular etapas gera tentativas aleatórias que podem piorar o problema.</p>
          </div>
        ),
      },
      {
        h2: 'Verificações na ordem certa (sem resetar nada)',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">1. Confirme a faixa de IP do novo roteador</h3>
            <p>Acesse o painel do roteador novo (geralmente 192.168.1.1 ou 192.168.0.1, conforme a etiqueta do aparelho) e verifique qual é a faixa de IP da rede local. Anote o gateway (endereço do roteador) e a máscara de sub-rede (geralmente 255.255.255.0).</p>
            <p>Exemplo: se o roteador novo usa 192.168.2.1 como gateway, todos os dispositivos da rede precisam estar na faixa 192.168.2.x para se comunicarem entre si. Se o NVR está em 192.168.1.108 (faixa antiga) e as câmeras também, eles não conseguem se alcançar pelo novo roteador.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">2. Verifique o IP atual do NVR</h3>
            <p>No menu do NVR, acesse Menu Principal &gt; Ajustes &gt; Rede &gt; TCP/IP e confira: o endereço IP do NVR está na mesma faixa do roteador novo? A máscara de sub-rede corresponde à do roteador? O gateway está configurado com o IP do roteador novo?</p>
            <p>Se o NVR estiver na faixa antiga (192.168.1.x) e o roteador novo for 192.168.2.x, o NVR está em uma sub-rede diferente. Nesse caso, você precisa alterar o IP do NVR para a faixa nova — ou alterar a faixa do roteador para a faixa antiga, se for possível e não afetar outros dispositivos.</p>
            <p><strong className="text-white">Cuidado:</strong> alterar o IP do NVR pode exigir que você acesse o equipamento pela interface local (monitor e mouse conectados diretamente) se o acesso remoto pelo navegador parar de funcionar. Faça a alteração com o NVR conectado a um monitor.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">3. Verifique se as câmeras estão na mesma faixa</h3>
            <p>Se as câmeras estão conectadas diretamente nas portas PoE do NVR, o próprio NVR distribui IPs para elas (geralmente em uma faixa interna, como 10.1.1.x). Nesse caso, a troca do roteador não afeta a comunicação entre NVR e câmeras — o problema pode ser outro.</p>
            <p>Se as câmeras estão conectadas a um switch externo (com ou sem PoE), elas precisam estar na mesma faixa do NVR. Para verificar o IP de cada câmera, use a ferramenta de busca do NVR (geralmente no menu Disp. Remoto &gt; Buscar) ou um software de descoberta do fabricante da câmera.</p>
            <p>Se a câmera não aparece na busca, o problema pode ser: câmera sem alimentação (PoE), cabo de rede desconectado, ou câmera em uma sub-rede inalcançável. Vale conferir também as <Link to="/blog/camera-fora-do-ar-causas-solucoes" className="text-white underline hover:text-slate-300">causas mais comuns de câmera fora do ar</Link>.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">4. Verifique a alimentação PoE</h3>
            <p>Se as câmeras são alimentadas por PoE (pelo NVR ou por um switch externo), confirme: o LED da porta PoE está aceso? O cabo de rede está firmemente conectado nas duas pontas? O switch PoE (se externo) está ligado e conectado ao roteador novo?</p>
            <p>Se o LED da porta PoE estiver apagado, tente mover a câmera para outra porta PoE ou substituir o cabo de rede. Se o LED continuar apagado, a câmera pode não estar recebendo energia — o que pode indicar problema no switch PoE ou no próprio cabo.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">5. Verifique as credenciais de acesso</h3>
            <p>Mesmo com a rede alinhada e a alimentação correta, o NVR precisa das credenciais certas para acessar cada câmera. No menu do NVR, acesse Disp. Remoto e verifique se cada canal está configurado com:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Usuário correto</strong> (por padrão, admin — mas pode ter sido alterado).</li>
              <li><strong className="text-white">Senha correta</strong> (se a câmera foi resetada, a senha volta ao padrão de fábrica e pode ser diferente da que o NVR tem salva).</li>
              <li><strong className="text-white">Protocolo correto</strong> (Intelbras-1 para câmeras Intelbras, ONVIF para câmeras de outras marcas).</li>
            </ul>
            <p>Se a câmera aparece na busca mas não conecta, o problema é de credencial ou protocolo. Edite o canal, insira a senha correta e teste novamente.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">6. Renove o DHCP ou defina IP fixo</h3>
            <p>Se as câmeras estão configuradas como DHCP, elas precisam renovar o endereço IP com o novo roteador. A forma mais simples é reiniciar as câmeras (desligar e ligar) para que solicitem um novo IP ao servidor DHCP do roteador novo.</p>
            <p>Se as câmeras estão com IP fixo, você precisa alterar manualmente o IP de cada uma para a faixa do roteador novo. Isso exige acessar a interface web de cada câmera (pelo IP antigo, em um computador configurado na mesma faixa) e alterar o endereço.</p>
            <p><strong className="text-white">Recomendação prática:</strong> para evitar que esse problema se repita na próxima troca de roteador, use a reserva de IP (DHCP reservation) no roteador. Assim, o NVR e as câmeras mantêm sempre o mesmo endereço sem precisar configurá-lo manualmente em cada dispositivo. Deixar tudo em DHCP puro também funciona, mas o IP pode mudar a qualquer reinício, e o NVR pode perder as câmeras.</p>
          </div>
        ),
      },
      {
        h2: 'Tabela de diagnóstico rápido',
        content: (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-white font-bold">Sintoma</th>
                  <th className="text-left p-3 text-white font-bold">Verificação prioritária</th>
                  <th className="text-left p-3 text-white font-bold">Causa provável</th>
                  <th className="text-left p-3 text-white font-bold">Ação segura</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">NVR não encontra nenhuma câmera</td><td className="p-3">Faixa de IP do NVR e do roteador</td><td className="p-3">Sub-redes diferentes</td><td className="p-3">Alinhar IP do NVR à faixa do roteador</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Câmera aparece na busca mas fica offline</td><td className="p-3">Credenciais (usuário/senha)</td><td className="p-3">Senha da câmera diferente do NVR</td><td className="p-3">Editar canal e inserir senha correta</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">LED da porta PoE apagado</td><td className="p-3">Alimentação PoE</td><td className="p-3">Cabo desconectado ou porta com defeito</td><td className="p-3">Trocar cabo ou porta PoE</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Câmeras DHCP não aparecem após troca</td><td className="p-3">Renovação de DHCP</td><td className="p-3">Câmeras mantiveram IP da faixa antiga</td><td className="p-3">Reiniciar câmeras para renovar DHCP</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Câmera com IP fixo não aparece</td><td className="p-3">Faixa de IP da câmera</td><td className="p-3">IP fora da faixa do roteador novo</td><td className="p-3">Acessar câmera e alterar IP manualmente</td></tr>
                <tr><td className="p-3 font-semibold text-white">NVR perde configuração após reinício</td><td className="p-3">Modo DHCP do NVR</td><td className="p-3">NVR recebe IP diferente a cada reinício</td><td className="p-3">Reservar IP no roteador ou fixar IP estático</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        h2: 'Passo a passo para reconectar as câmeras ao NVR',
        content: (
          <div className="space-y-4">
            <p>Se as verificações acima não resolveram, siga esta sequência para forçar a redescoberta:</p>
            <ol className="space-y-2 list-decimal list-inside">
              <li>Reinicie o NVR (desligue e ligue pela fonte) para que ele solicite um novo IP ao roteador novo, caso esteja em DHCP.</li>
              <li>Reinicie as câmeras (desligue e ligue a alimentação) para que renovem o DHCP.</li>
              <li>No NVR, acesse Disp. Remoto e clique em Buscar. Aguarde a listagem dos dispositivos encontrados na mesma rede.</li>
              <li>Selecione as câmeras que aparecerem e clique em Adicionar (ou dê duplo clique).</li>
              <li>Se a câmera não aparecer na busca, use a função Adicionar Manualmente e preencha o endereço IP, porta, protocolo e credenciais.</li>
              <li>Após adicionar, aguarde alguns segundos para que o NVR estabilize a conexão e a detecção de movimento.</li>
              <li>Se a imagem não aparecer, acesse Disp. Remoto, selecione o canal e verifique os parâmetros de configuração (protocolo, porta, credenciais).</li>
            </ol>
          </div>
        ),
      },
      {
        h2: 'O que NÃO fazer (e por quê)',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">❌ Não restaure o NVR para configurações de fábrica</h3>
            <p>O reset de fábrica pode apagar configurações de rede, senhas de acesso, agenda de gravação e, em alguns modelos, a estrutura de arquivos do HD. Se o problema é de faixa de IP ou credenciais, você pode corrigir manualmente sem reset. O reset só deve ser considerado depois de esgotar todas as outras possibilidades.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não resete as câmeras sem necessidade</h3>
            <p>Resetar uma câmera IP apaga todas as configurações dela — incluindo IP, senha, configurações de stream e detecção de movimento. Se o problema é de faixa de IP, você pode alterar o IP sem resetar. Se a câmera foi resetada acidentalmente, será necessário reconfigurá-la do zero, o que pode exigir acesso físico e um aplicativo do fabricante.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não altere o IP do NVR sem ter acesso local</h3>
            <p>Se você alterar o IP do NVR para uma faixa diferente da que o seu computador está usando, perderá o acesso remoto ao equipamento. Faça alterações de IP com o NVR conectado a um monitor e mouse (acesso local), para não ficar sem interface de configuração.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não ignore a possibilidade de conflito de IP</h3>
            <p>Se o roteador novo atribuiu o mesmo IP para o NVR e para outro dispositivo (ou para uma câmera), a rede fica instável e a comunicação falha. Verifique a lista de dispositivos conectados no painel do roteador e procure por IPs duplicados.</p>
          </div>
        ),
      },
      {
        h2: 'Quando chamar um técnico especializado',
        content: (
          <div className="space-y-4">
            <p>A triagem de rede pode ser feita por você, mas alguns cenários exigem diagnóstico profissional:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>As câmeras não aparecem na busca mesmo com NVR e câmeras na mesma faixa de IP.</li>
              <li>O NVR não aceita alteração de IP ou perde a configuração após reiniciar.</li>
              <li>As câmeras estão em locais de difícil acesso e exigem remoção para teste.</li>
              <li>Há múltiplos switches PoE na rede e a topologia é complexa.</li>
              <li>O sistema tem câmeras de marcas diferentes (Intelbras, Hikvision, Dahua) e a compatibilidade ONVIF está falhando.</li>
              <li>Você não se sente seguro para mexer nas configurações de rede — uma alteração errada pode deixar o sistema inteiro inacessível.</li>
            </ul>
            <p>A Intelsecsul atende chamados de configuração e manutenção de CFTV IP em Curitiba e Região Metropolitana. O diagnóstico identifica se o problema é de rede, PoE, credenciais ou configuração do NVR — e o orçamento é apresentado com clareza antes de qualquer intervenção.</p>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: (
          <div className="space-y-4">
            <p>NVR que não reconhece câmeras IP depois de trocar o roteador é um problema de rede, não de equipamento. A causa mais comum é a mudança de faixa de IP: o roteador novo usa uma sub-rede diferente da que o NVR e as câmeras estavam configurados, e nenhum dispositivo consegue alcançar o outro.</p>
            <p>A solução segue uma ordem clara: confirme a faixa do roteador, verifique o IP do NVR, alinhe as câmeras à mesma faixa, verifique a alimentação PoE e, por fim, confirme as credenciais. Em muitos casos, basta reiniciar as câmeras para que renovem o DHCP e voltem a aparecer. A regra que vale para todos os cenários: não resete o NVR, não resete as câmeras e não restaure configurações de fábrica antes de esgotar as verificações de rede.</p>
            <p>Quando as câmeras voltarem, confirme que o NVR está realmente gravando — imagem ao vivo não garante gravação, como explicamos em <Link to="/blog/dvr-mostra-imagem-ao-vivo-mas-nao-grava" className="text-white underline hover:text-slate-300">DVR que mostra imagem ao vivo mas não grava</Link>. E se a troca de roteador veio junto com a ampliação do sistema, vale conferir <Link to="/blog/quantas-cameras-de-seguranca-preciso-para-minha-casa" className="text-white underline hover:text-slate-300">quantas câmeras o seu imóvel realmente precisa</Link> antes de adicionar novos pontos.</p>
          </div>
        ),
      },
    ],
    relatedQuestions: [
      {
        question: 'Preciso resetar o NVR depois de trocar o roteador?',
        answer: 'Não. Na grande maioria dos casos, o problema é apenas de faixa de IP ou credenciais. Resetar o NVR apaga configurações e não resolve o problema de rede. O caminho correto é alinhar o IP do NVR à faixa do roteador novo e renovar o DHCP das câmeras.',
      },
      {
        question: 'As câmeras estão em DHCP. Por que não aparecem no NVR?',
        answer: 'Se as câmeras estão em DHCP, elas precisam renovar o endereço IP com o novo roteador. Reinicie as câmeras (desligue e ligue a alimentação) para que solicitem um novo IP. Se elas mantiverem o IP da faixa antiga (por exemplo, 192.168.1.x enquanto o roteador novo usa 192.168.2.x), não serão alcançadas pelo NVR.',
      },
      {
        question: 'Como saber o IP atual das câmeras?',
        answer: 'Use a ferramenta de busca do NVR (menu Disp. Remoto > Buscar) ou um software de descoberta do fabricante da câmera (Intelbras IP Utility, Hikvision SADP, Dahua ConfigTool). Esses programas escaneiam a rede e listam todos os dispositivos IP encontrados, com seus respectivos endereços.',
      },
      {
        question: 'O NVR não encontra as câmeras nem na busca manual. O que fazer?',
        answer: 'Verifique: alimentação PoE (LED da porta aceso), cabo de rede (substitua por um novo), faixa de IP (NVR e câmeras na mesma sub-rede) e firewall do roteador (pode estar bloqueando a comunicação entre dispositivos na rede local). Se tudo estiver correto e o problema persistir, o diagnóstico técnico é necessário.',
      },
      {
        question: 'A troca do roteador afeta a gravação do NVR?',
        answer: 'A gravação continua normalmente enquanto o NVR tiver um HD reconhecido e configurado para gravar. A troca do roteador afeta a comunicação com as câmeras IP: se o NVR perde contato com uma câmera, ele para de gravar aquele canal. Os canais cujas câmeras continuam alcançáveis seguem gravando normalmente.',
      },
    ],
    internalLink: {
      text: 'Seu NVR não está reconhecendo as câmeras IP depois de trocar o roteador? Precisa de ajuda para alinhar a rede?',
      url: '/servicos/cameras-de-seguranca/',
      linkText: 'Ver Câmeras de Segurança',
    },
    whatsappMessage: 'Vim do blog e meu NVR não reconhece as câmeras IP',
    ctaFinal: {
      title: 'Seu NVR não está reconhecendo as câmeras IP depois de trocar o roteador?',
      text: 'A Intelsecsul realiza configuração e manutenção de CFTV IP em Curitiba e Região Metropolitana, com diagnóstico no local e orçamento claro antes de qualquer intervenção.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'alarme-nao-arma-causas-zona-aberta-bateria-falha-comunicacao',
    slug: 'alarme-nao-arma-causas-zona-aberta-bateria-falha-comunicacao',
    title: 'Alarme Não Arma: Causas de Zona Aberta, Bateria e Falha de Comunicação | Intelsecsul',
    metaTitle: 'Alarme Não Arma: Causas de Zona Aberta, Bateria e Falha de Comunicação | Intelsecsul',
    metaDescription: 'Seu alarme não arma? Veja as causas mais comuns — zona aberta, bateria fraca, falha de comunicação e senha incorreta — e aprenda a diagnosticar cada uma antes de chamar assistência técnica.',
    h1: 'Alarme não arma: causas de zona aberta, bateria e falha de comunicação',
    category: 'Alarmes',
    readTime: '10 min de leitura',
    publishedDate: '2026-10-13',
    summary: 'Quando o alarme não arma, o problema quase sempre está em uma de quatro categorias: zona aberta, bateria fraca ou ausente, falha de comunicação ou senha e teclado com problema. A falha é silenciosa: o imóvel parece protegido, mas não está.',
    intro: 'Quando você digita a senha, ouve o bipe de confirmação e espera o alarme armar — mas ele simplesmente não ativa, ou exibe uma mensagem de erro no teclado, o problema quase sempre está em uma destas quatro categorias: zona aberta (algum sensor ou contato está violado), bateria fraca ou ausente (a central não tem energia suficiente para completar o arme), falha de comunicação (a central não consegue se conectar à rede ou à empresa de monitoramento) ou senha ou teclado com problema (a central não reconhece o código digitado). A dor aqui é silenciosa e perigosa: o sistema parece instalado, mas não está protegendo. Você fecha o imóvel acreditando que está seguro, e o alarme está desarmado ou inoperante.',
    sections: [
      {
        h2: 'Primeiro: identifique a mensagem de erro no teclado',
        content: (
          <div className="space-y-4">
            <p>O teclado da central é o seu principal instrumento de diagnóstico. Antes de abrir qualquer coisa ou mexer na fiação, observe o que ele está informando. As centrais Intelbras (linhas AMT e ANM) usam um sistema de indicação por teclas numéricas acesas ou piscando:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Tecla acesa:</strong> zona aberta (sensor violado naquela zona).</li>
              <li><strong className="text-white">Tecla apagada:</strong> zona fechada (normal).</li>
              <li><strong className="text-white">Tecla piscando:</strong> zona disparada (o alarme já ocorreu naquela zona).</li>
            </ul>
            <p>Para ver quais zonas estão abertas no momento, pressione a tecla Menu, acesse Sens. abertos (ou o equivalente no seu modelo) e depois Enter. O teclado exibirá os sensores violados.</p>
            <p>Se o LED "Problema" estiver piscando, pressione a tecla F1 uma vez: a tecla numérica correspondente ao problema ficará acesa. Nas centrais ANM, por exemplo, a tecla 1 indica falha na rede elétrica e a tecla 2 indica falha de supervisão (sensor sem comunicação).</p>
            <p>Essa leitura inicial evita que você tente armar o alarme repetidamente enquanto um sensor está aberto, ou que troque a bateria quando o problema é de rede.</p>
          </div>
        ),
      },
      {
        h2: 'Causa 1: Zona aberta — o sensor está violado',
        content: (
          <div className="space-y-4">
            <p>Esta é, de longe, a causa mais comum de alarme que não arma. A central se recusa a armar enquanto houver qualquer zona aberta — é uma proteção para que você não saia de casa com uma porta ou janela desprotegida.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">O que é uma zona aberta</h3>
            <p>Uma zona é considerada aberta quando o sensor conectado a ela está no estado de "violado". Isso acontece quando:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Porta ou janela está aberta:</strong> o ímã do sensor de abertura está longe do contato, e a central interpreta como "porta aberta".</li>
              <li><strong className="text-white">Sensor de presença detectou movimento:</strong> o PIR (infravermelho passivo) acionou e a zona ficou violada. Se ele dispara sem motivo aparente, veja também as <Link to="/blog/alarme-disparando-sozinho-causas-reduzir-falsos-alarmes" className="text-white underline hover:text-slate-300">causas de alarme disparando sozinho</Link>.</li>
              <li><strong className="text-white">Sensor com fio mal instalado:</strong> o contato seco não está fechando o circuito, e a central interpreta a zona como permanentemente aberta.</li>
              <li><strong className="text-white">Sensor sem fio com problema de comunicação:</strong> a central não recebe o sinal de "zona fechada" e mantém a zona aberta por segurança.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Como diagnosticar e resolver</h3>
            <ol className="space-y-2 list-decimal list-inside">
              <li><strong className="text-white">Verifique fisicamente portas e janelas.</strong> Faça uma volta pelo imóvel e confira se tudo está bem fechado. Uma janela entreaberta ou uma porta mal encostada é suficiente para manter a zona aberta.</li>
              <li><strong className="text-white">Consulte as zonas abertas no teclado.</strong> Pressione Menu &gt; Sens. abertos &gt; Enter, anote o número da zona e identifique qual sensor corresponde a ela.</li>
              <li><strong className="text-white">Se for um sensor sem fio,</strong> verifique se a bateria dele está fraca ou se foi movido de posição. Bateria baixa pode impedir a transmissão correta do sinal de "zona fechada".</li>
              <li><strong className="text-white">Se for um sensor com fio,</strong> o problema pode ser contato seco que não fecha o circuito ou fiação invertida. Um técnico pode testar fechando a zona com um pedaço de fio no lugar do sensor para ver o comportamento da central.</li>
              <li><strong className="text-white">Considere a anulação de zonas abertas.</strong> Algumas centrais (como a AMT 8000) permitem anular zonas abertas antes de armar, fazendo a central ignorar aquela zona e armar o restante. Atenção: é uma solução temporária — não deve virar prática regular, porque deixa parte do imóvel desprotegida.</li>
            </ol>
          </div>
        ),
      },
      {
        h2: 'Causa 2: Bateria fraca ou ausente — a central não tem energia',
        content: (
          <div className="space-y-4">
            <p>A bateria da central mantém o sistema funcionando durante uma queda de energia. Mas ela também se desgasta com o tempo — e, quando está fraca ou ausente, a central pode se recusar a armar.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Sinais de problema na bateria</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>LED de problema aceso ou piscando no teclado.</li>
              <li>A central não liga mesmo com a energia da tomada presente — em alguns modelos, ela não inicializa sem a bateria conectada.</li>
              <li>A central desarma sozinha após alguns segundos de arme.</li>
              <li>O teclado exibe falha de bateria no menu de problemas.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Como diagnosticar e resolver</h3>
            <ol className="space-y-2 list-decimal list-inside">
              <li><strong className="text-white">Verifique o LED de energia.</strong> Se o LED que indica a presença de energia elétrica estiver apagado ou piscando, o fusível da rede ou a fonte AC da central podem estar com problema. Nesse caso, a falha é na alimentação elétrica, não na bateria.</li>
              <li><strong className="text-white">Verifique a conexão da bateria.</strong> Ela é ligada por dois fios (vermelho e preto). Confira se os terminais estão firmes e sem oxidação.</li>
              <li><strong className="text-white">Verifique a tensão da bateria.</strong> Com um multímetro e a central ligada à energia elétrica, meça nos terminais: uma bateria de chumbo-ácido de 12V em bom estado marca entre 13 e 14 VDC. Abaixo de 12V, ela está descarregada ou danificada.</li>
              <li><strong className="text-white">Se estiver descarregada,</strong> deixe a central conectada à energia por cerca de 24 horas para recarregar. Se depois disso a bateria não mantiver a carga, ela precisa ser substituída. Baterias de centrais de alarme duram, em média, 3 a 5 anos.</li>
            </ol>
            <p><strong className="text-white">Atenção:</strong> em algumas centrais (como a AMT 8000 Lite), a central não liga se a bateria estiver desconectada — mesmo com a energia AC presente. A bateria precisa estar conectada para que a central inicialize.</p>
          </div>
        ),
      },
      {
        h2: 'Causa 3: Falha de comunicação — a central não conecta',
        content: (
          <div className="space-y-4">
            <p>Se a central tem monitoramento (empresa de segurança) ou acesso remoto pelo aplicativo, uma falha de comunicação pode impedir o arme ou gerar alertas de erro.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Sinais de falha de comunicação</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>LED de problema piscando e tecla 2 acesa (falha de supervisão): a central não recebe sinal de algum sensor sem fio.</li>
              <li>A central não envia eventos para a empresa de monitoramento ou para o aplicativo.</li>
              <li>O aplicativo mostra a central offline, mesmo com o imóvel conectado à internet.</li>
              <li>A central não responde a comandos remotos de arme e desarme.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Como diagnosticar e resolver</h3>
            <ol className="space-y-2 list-decimal list-inside">
              <li><strong className="text-white">Verifique a conexão de rede (Ethernet).</strong> O cabo está firme na central e no roteador ou switch? Os LEDs da porta de rede estão acesos? O endereço IP da central está correto? Conferir o IP pelo teclado exige entrar na programação da central com a senha do instalador, procedimento que consta no manual do modelo e que, em caso de dúvida, deve ficar com um técnico.</li>
              <li><strong className="text-white">Teste a conectividade com ping.</strong> Em um computador na mesma rede, abra o Prompt de Comando e execute ping seguido do IP da central. Se houver resposta, a central está na rede local; se não houver, o problema é físico (cabo, porta ou switch).</li>
              <li><strong className="text-white">Verifique a conexão GPRS/GSM (se aplicável).</strong> O chip está ativo (com crédito, se for pré-pago)? A antena está bem conectada? Há sinal da operadora no local? A central envia periodicamente uma mensagem de verificação (heartbeat) ao receptor; se ela não chega dentro do intervalo programado (padrão de fábrica: 5 minutos), um evento de falha é gerado.</li>
              <li><strong className="text-white">Verifique DNS e gateway.</strong> Se a central não consegue falar com a nuvem ou com a empresa de monitoramento, confira se o gateway e o DNS estão corretos. Em muitos casos, fixar manualmente o endereço da nuvem ou do receptor IP resolve.</li>
            </ol>
          </div>
        ),
      },
      {
        h2: 'Causa 4: Senha ou teclado com problema',
        content: (
          <div className="space-y-4">
            <p>Se a central rejeita a senha digitada, o problema pode estar no teclado, na senha ou na própria programação da central.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Sinais de problema de senha ou teclado</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>O teclado exibe "Senha incorreta" ou mensagem equivalente.</li>
              <li>As teclas não respondem ao toque.</li>
              <li>A central aceita a senha para desarmar, mas não arma.</li>
              <li>O teclado está travado ou piscando de forma errática.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Como diagnosticar e resolver</h3>
            <ol className="space-y-2 list-decimal list-inside">
              <li><strong className="text-white">Confirme a senha correta.</strong> Se a senha nunca foi alterada, a de fábrica consta no manual do seu modelo — e é importante trocá-la, porque senhas de fábrica são de conhecimento público.</li>
              <li><strong className="text-white">Verifique se o teclado está no modo correto.</strong> Alguns teclados têm modos de operação diferentes (usuário, instalador, programação). No modo de programação, ele não aceita comandos de arme e desarme.</li>
              <li><strong className="text-white">Se for preciso acessar a programação</strong> para checar se as zonas estão habilitadas ou se alguma configuração impede o arme, isso exige a senha do instalador. Deixe esse passo com um técnico.</li>
              <li><strong className="text-white">Se o teclado não responde,</strong> verifique a conexão dele com a central e se há energia chegando ao teclado. Um teclado sem energia não se comunica com a central.</li>
            </ol>
          </div>
        ),
      },
      {
        h2: 'Tabela de diagnóstico rápido',
        content: (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-white font-bold">Sintoma</th>
                  <th className="text-left p-3 text-white font-bold">Verificação prioritária</th>
                  <th className="text-left p-3 text-white font-bold">Causa provável</th>
                  <th className="text-left p-3 text-white font-bold">Ação segura</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Teclado exibe "zona aberta"</td><td className="p-3">Menu &gt; Sens. abertos</td><td className="p-3">Porta/janela aberta ou sensor violado</td><td className="p-3">Fechar acessos; verificar sensor</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">LED Problema piscando, tecla 1 acesa</td><td className="p-3">Alimentação elétrica</td><td className="p-3">Falha na rede elétrica ou fonte</td><td className="p-3">Verificar disjuntor e fusível</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">LED Problema piscando, tecla 2 acesa</td><td className="p-3">Supervisão dos sensores sem fio</td><td className="p-3">Sensor sem comunicação ou bateria baixa</td><td className="p-3">Verificar sensor e bateria</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Central não liga nem com energia AC</td><td className="p-3">Bateria conectada?</td><td className="p-3">Bateria ausente ou desconectada</td><td className="p-3">Conectar ou substituir a bateria</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Central não conecta ao app ou ao monitoramento</td><td className="p-3">Cabo de rede, IP, chip GPRS</td><td className="p-3">Falha de comunicação</td><td className="p-3">Testar cabo; verificar IP e chip</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Teclado exibe "Senha incorreta"</td><td className="p-3">Senha digitada e manual do modelo</td><td className="p-3">Senha errada ou teclado com problema</td><td className="p-3">Conferir senha no manual; verificar teclado</td></tr>
                <tr><td className="p-3 font-semibold text-white">Central arma mas desarma sozinha</td><td className="p-3">Zona aberta momentânea ou bateria</td><td className="p-3">Sensor com falha intermitente</td><td className="p-3">Verificar histórico de eventos; testar sensor</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        h2: 'O que NÃO fazer (e por quê)',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">❌ Não fique tentando armar repetidamente com zona aberta</h3>
            <p>Se o teclado indica zona aberta, armar repetidamente não resolve — a central vai continuar recusando. Identifique qual zona está aberta e resolva a causa antes de tentar de novo.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não anule zonas abertas como prática regular</h3>
            <p>A anulação é uma solução temporária para emergências, como um sensor com defeito que você não consegue consertar naquele momento. Usada como rotina, deixa partes do imóvel desprotegidas e mascara problemas reais (sensor com bateria fraca, fiação com mau contato).</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não desconecte a bateria para "testar"</h3>
            <p>Em algumas centrais, desconectar a bateria impede a central de ligar, mesmo com a energia AC presente. Além disso, a bateria é o que mantém o sistema funcionando durante uma queda de energia — desconectá-la sem necessidade deixa o imóvel vulnerável.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não restaure a central para configurações de fábrica sem orientação</h3>
            <p>O reset de fábrica apaga todas as programações: zonas, senhas, números de telefone, configurações de comunicação. Se o problema é zona aberta ou senha errada, dá para corrigir sem reset. Ele só deve ser considerado depois de esgotar as outras possibilidades e, de preferência, com um técnico.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não abra a central se não tiver experiência</h3>
            <p>Abrir a central expõe você a risco de choque elétrico e pode danificar componentes sensíveis. Se você não tem multímetro, não sabe medir tensões ou não se sente seguro, não abra o equipamento — encaminhe para um técnico especializado.</p>
          </div>
        ),
      },
      {
        h2: 'Quando chamar um técnico especializado',
        content: (
          <div className="space-y-4">
            <p>A triagem pelo teclado e as verificações de bateria e rede podem ser feitas por você. Mas alguns cenários exigem diagnóstico profissional:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Zona aberta persistente mesmo com portas e janelas fechadas — pode ser sensor com defeito, fiação rompida ou contato seco mal instalado.</li>
              <li>Bateria que não recarrega após 24 horas conectada à energia — ela precisa ser substituída.</li>
              <li>Central que não conecta à rede mesmo com cabo e IP corretos — pode ser falha na placa de rede ou no módulo GPRS.</li>
              <li>Teclado que não responde ou exibe mensagens inconsistentes — pode ser problema no teclado ou na comunicação com a central.</li>
              <li>Central que reinicia, trava ou desarma sozinha — problema de hardware ou firmware.</li>
              <li>Você não se sente seguro para navegar nos menus ou fazer as verificações.</li>
            </ul>
            <p>A Intelsecsul atende chamados de diagnóstico e manutenção de alarmes em Curitiba e Região Metropolitana, com avaliação técnica no local antes de qualquer orçamento. Para evitar que a falha só apareça quando você mais precisa, vale considerar um <Link to="/blog/contrato-manutencao-ou-chamar-quando-quebra" className="text-white underline hover:text-slate-300">contrato de manutenção preventiva</Link>, que inclui a revisão periódica de bateria, sensores e comunicação.</p>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: (
          <div className="space-y-4">
            <p>Alarme que não arma tem, na grande maioria dos casos, uma causa identificável, e o teclado da central é o seu principal aliado no diagnóstico. As quatro causas mais comuns são zona aberta, bateria fraca ou ausente, falha de comunicação e senha ou teclado com problema.</p>
            <p>A triagem começa pela leitura do que o teclado indica: teclas acesas (zonas abertas), teclas piscando (zonas disparadas), LED de problema e teclas de diagnóstico. Daí em diante, as verificações são simples: fechar portas e janelas, conferir a bateria, testar a rede e confirmar a senha.</p>
            <p>A regra vale para todos os cenários: não anule zonas abertas como prática regular, não desconecte a bateria para "testar" e não restaure a central para configurações de fábrica antes de esgotar as verificações. Se a triagem não resolveu, a avaliação de um técnico especializado é o caminho mais seguro.</p>
          </div>
        ),
      },
    ],
    relatedQuestions: [
      {
        question: 'Meu alarme não arma e o teclado mostra "zona aberta". O que faço?',
        answer: 'Verifique fisicamente todas as portas e janelas — uma delas pode estar entreaberta. Depois, no teclado, acesse Menu > Sens. abertos e veja qual zona está violada. Se todos os acessos estiverem fechados e a zona continuar aberta, o sensor pode estar com defeito ou com fiação mal conectada, e é necessário testar o sensor ou a fiação.',
      },
      {
        question: 'Posso armar o alarme com uma zona aberta?',
        answer: 'Algumas centrais permitem anular zonas abertas antes de armar, fazendo a central ignorar temporariamente aquela zona e armar o restante do sistema. Não é recomendado como prática regular, porque deixa uma parte do imóvel desprotegida. Use apenas como solução temporária, até resolver a causa da zona aberta.',
      },
      {
        question: 'A bateria da central de alarme precisa ser trocada com que frequência?',
        answer: 'Em média, a cada 3 a 5 anos. A bateria é um consumível e perde capacidade com o tempo. Se a central não mantém a operação durante uma queda de energia, ou se a bateria não recarrega após 24 horas ligada à energia, é hora de substituí-la.',
      },
      {
        question: 'A central não liga nem com a energia da tomada. O que pode ser?',
        answer: 'Verifique se a bateria está conectada: em algumas centrais, ela não liga sem a bateria, mesmo com a energia AC presente. Se a bateria estiver conectada e a central continuar sem ligar, verifique o fusível da rede e a fonte AC. Se o fusível estiver queimado, a substituição exige um técnico.',
      },
      {
        question: 'O alarme não arma e o LED "Problema" está piscando. O que significa?',
        answer: 'Pressione a tecla F1 no teclado: a tecla numérica que acender corresponde ao problema. Nas centrais ANM, a tecla 1 indica falha na rede elétrica e a tecla 2 indica falha de supervisão (sensor sem comunicação ou bateria baixa). Se a tecla 2 estiver acesa, verifique a bateria e a comunicação dos sensores sem fio.',
      },
      {
        question: 'Zona aberta pode ser problema de fiação?',
        answer: 'Sim. Se o sensor é com fio e a central indica zona aberta mesmo com a porta ou janela fechada, pode haver fiação rompida, contato seco mal instalado ou fio invertido. Um técnico pode testar fechando a zona com um pedaço de fio no lugar do sensor para verificar o comportamento da central.',
      },
    ],
    internalLink: {
      text: 'Seu alarme não está armando? Precisa de ajuda para identificar a causa?',
      url: '/servicos/instalacao-de-alarmes/',
      linkText: 'Ver Instalação de Alarmes',
    },
    whatsappMessage: 'Vim do blog e meu alarme não está armando',
    ctaFinal: {
      title: 'Seu alarme não está armando? Precisa de ajuda para identificar a causa?',
      text: 'A Intelsecsul realiza diagnóstico e manutenção de alarmes em Curitiba e Região Metropolitana, com prioridade para que o seu sistema volte a proteger o imóvel o mais rápido possível.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'cerca-eletrica-dispara-depois-da-chuva-isoladores-fuga-corrente-instalacao',
    slug: 'cerca-eletrica-dispara-depois-da-chuva-isoladores-fuga-corrente-instalacao',
    title: 'Cerca Elétrica Dispara Depois da Chuva: Isoladores, Fuga de Corrente ou Instalação | Intelsecsul',
    metaTitle: 'Cerca Elétrica Dispara Depois da Chuva: Isoladores, Fuga de Corrente ou Instalação | Intelsecsul',
    metaDescription: 'Sua cerca elétrica dispara depois da chuva? Veja as causas mais comuns — isoladores rachados, fuga de corrente, aterramento inadequado e vegetação — e como diagnosticar cada uma antes de chamar assistência técnica.',
    h1: 'Cerca elétrica dispara depois da chuva: isoladores, fuga de corrente ou instalação',
    category: 'Cerca Elétrica',
    readTime: '10 min de leitura',
    publishedDate: '2026-10-16',
    summary: 'Cerca elétrica que dispara depois da chuva não é normal: a água é o agente revelador de um problema de isolamento ou manutenção. As causas mais comuns são isolador rachado ou ressecado (a mais frequente), fuga de corrente no perímetro, aterramento inadequado, vegetação encostando nos fios e umidade no eletrificador.',
    intro: 'Uma cerca elétrica que dispara depois da chuva — ou durante ela — está revelando um problema de isolamento ou manutenção que fica mascarado no tempo seco. A água da chuva, por si só, não é a causa do disparo: ela é o agente revelador. Quando a umidade entra em contato com um ponto falho do sistema, a corrente de alta tensão encontra um caminho para o solo (fuga) e a central interpreta isso como uma violação do perímetro, disparando o alarme. A boa notícia é que, na maioria dos casos, o problema é identificável e solucionável sem substituir a central. A triagem abaixo ajuda você a distinguir entre chuva normal (que não deveria causar disparo) e problema real: isolador rachado, fuga de corrente, aterramento inadequado ou vegetação encostando nos fios.',
    sections: [
      {
        h2: 'Primeiro: entenda por que a chuva revela o problema',
        content: (
          <div className="space-y-4">
            <p>A Intelbras, em seu material técnico "TOP 10 Problemas de Cercas Elétricas", aponta a causa de forma direta: "Central dispara com chuva e/ou neblina. Causa: Instalação da cerca susceptível a fuga / Choque muito forte para cercas de perímetro pequeno / isolador da haste com fissuras, rachaduras segurando umidade, fuga no perímetro onde deve checar os fios de inox estão com 'barriga'."</p>
            <p>Em fóruns técnicos da Intelbras, a avaliação de técnicos converge: "os isoladores normalmente são a causa mais frequente de disparos que ocorrem na chuva". A lógica é simples: isoladores rachados, ressecados pelo sol ou acumulando água criam um caminho de fuga para a corrente de alta tensão quando estão molhados.</p>
            <p>Em tempo seco, a resistência elétrica do ar e dos materiais isolantes é alta o suficiente para conter a corrente de alta tensão nos fios da cerca. Quando chove:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">A umidade no ar aumenta a condutividade elétrica.</strong> Pequenas fugas que não aconteciam no seco começam a acontecer.</li>
              <li><strong className="text-white">Isoladores rachados ou com fissuras seguram umidade.</strong> A água penetra nas fissuras e cria um caminho condutor entre o fio de alta tensão e a haste metálica (que está aterrada).</li>
              <li><strong className="text-white">Vegetação molhada encosta nos fios.</strong> Folhas e galhos que estavam secos e afastados se tornam condutores quando encharcados.</li>
              <li><strong className="text-white">O solo encharcado altera o aterramento.</strong> Em alguns casos o aterramento fica mais eficiente; em outros, a água acumulada cria caminhos de fuga inesperados.</li>
            </ul>
            <p>A Belgo Arames, fabricante de arames e soluções para cercas, alerta que "chuvas intensas afetam diretamente o funcionamento das cercas elétricas" e que "condições climáticas extremas, como altas taxas de umidade e incidência de raios, podem comprometer o desempenho das cercas elétricas, aumentando o risco de curto-circuito e danos aos componentes do sistema".</p>
          </div>
        ),
      },
      {
        h2: 'Causa 1: Isolador rachado, ressecado ou com fissuras — a causa mais frequente',
        content: (
          <div className="space-y-4">
            <p>O isolador é a peça que impede que o fio de alta tensão entre em contato direto com a haste metálica (que está aterrada). Quando o isolador está íntegro, a corrente passa pelo fio e retorna à central sem encontrar caminho para o solo. Quando ele está danificado, a corrente escapa.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Por que o isolador falha na chuva</h3>
            <p>O isolador fica exposto ao sol e à chuva durante anos. O sol resseca o plástico, criando microfissuras. A chuva, então, penetra nessas fissuras e a água, que é condutora, cria um caminho elétrico entre o fio e a haste. O resultado é a fuga de corrente e o disparo da central.</p>
            <p>A Belgo Arames recomenda isoladores fabricados com plástico virgem e equipados com filtro ultravioleta (UV), que "evitam o ressecamento devido à exposição solar e o acúmulo excessivo de água".</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Como diagnosticar</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Faça uma inspeção visual dos isoladores, com a cerca desligada na central.</strong> Procure rachaduras, fissuras, pontos esbranquiçados ou deformações. Passe a mão para sentir se a superfície está áspera ou trincada.</li>
              <li><strong className="text-white">Observe o comportamento com a cerca ligada, sem encostar nela.</strong> Em dia seco e depois em dia de chuva, observe à distância segura, sem tocar nos fios nem nas hastes, e nunca durante tempestade com raios, se há estalos ou faíscas saindo dos isoladores. Em fóruns técnicos, usuários relatam exatamente isso: as cercas dos vizinhos estalam, mas a sua, que tem isoladores danificados, dispara silenciosamente.</li>
              <li><strong className="text-white">Substitua os isoladores suspeitos por modelos reforçados anti-UV.</strong> A recomendação técnica é usar isoladores de qualidade, com proteção UV, que resistem melhor à exposição solar e não seguram umidade.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que fazer</h3>
            <p>Se encontrar isoladores rachados ou ressecados, a substituição é a solução. Não tente "consertar" o isolador com fita isolante ou produtos improvisados — a fita também se deteriora com a chuva e o problema volta. A substituição é simples e barata, e pode ser feita pelo próprio morador (com a cerca desligada na central) ou por um técnico.</p>
          </div>
        ),
      },
      {
        h2: 'Causa 2: Fuga de corrente no perímetro (fios com "barriga" ou em contato com estruturas)',
        content: (
          <div className="space-y-4">
            <p>Além dos isoladores, a própria instalação da cerca pode ter pontos de fuga que só se manifestam na chuva. A Intelbras aponta como causa "fuga no perímetro onde deve checar os fios de inox estão com 'barriga'". "Barriga" é o termo usado para fios que estão frouxos, com folga ou desalinhados, o que aumenta a chance de encostarem em estruturas metálicas ou em outros fios.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Tipos de fuga no perímetro</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Fio encostando em calha, grade ou estrutura metálica.</strong> A estrutura está aterrada (ou em contato com o solo) e cria um caminho de fuga.</li>
              <li><strong className="text-white">Fio encostando em outro fio.</strong> Dois fios de alta tensão se tocando podem causar curto-circuito, especialmente se um deles estiver com isolamento danificado.</li>
              <li><strong className="text-white">Fio com isolamento rompido ou oxidado.</strong> O isolamento pode ter se desgastado com o tempo, expondo o condutor.</li>
              <li><strong className="text-white">Cabo de alta isolação passando junto ao fio de retorno.</strong> Em alguns casos, os dois cabos percorrem o mesmo conduíte ou tubulação, o que pode causar interferência e fuga.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Como diagnosticar</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Percorra o perímetro visualmente, com a cerca desligada na central.</strong> Procure fios frouxos, em contato com estruturas metálicas, ou com isolamento danificado. Verifique especialmente os pontos de fixação e as curvas.</li>
              <li><strong className="text-white">Verifique se o fio tem "barriga".</strong> São trechos em que o fio está visivelmente mais baixo ou com folga, aumentando a chance de contato com vegetação ou estruturas.</li>
              <li><strong className="text-white">Peça ao técnico a medição da resistência de isolamento.</strong> Ela é feita com a cerca desconectada da central, preferencialmente com um megômetro (instrumento específico), medindo a resistência entre o fio e o solo. Valores muito baixos indicam fuga.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que fazer</h3>
            <p>Qualquer ajuste nos fios deve ser feito com a cerca desligada na central.</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Reestique os fios que estiverem frouxos, usando conectores adequados.</li>
              <li>Substitua trechos de fio com isolamento rompido ou oxidado.</li>
              <li>Afaste os fios de estruturas metálicas ou instale isoladores adicionais nos pontos de contato.</li>
              <li>Separe fisicamente o cabo de alta tensão do cabo de retorno — eles não devem percorrer o mesmo conduíte.</li>
            </ul>
          </div>
        ),
      },
      {
        h2: 'Causa 3: Aterramento inadequado ou mal localizado',
        content: (
          <div className="space-y-4">
            <p>O aterramento é um componente essencial da cerca elétrica. Ele serve para fechar o circuito (a corrente sai pela cerca, passa pelo corpo de quem toca e retorna ao solo, encontrando o aterramento da central) e para proteger o equipamento contra descargas atmosféricas. Um aterramento mal feito ou localizado de forma inadequada pode causar disparos falsos, especialmente na chuva.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Problemas comuns de aterramento</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Haste muito curta ou poucas hastes.</strong> A recomendação técnica é haste de aço galvanizado de 2 metros de profundidade por joule de energia liberada pelo eletrificador, com espaçamento de 3 metros entre cada haste. Para eletrificadores de 1 a 3 joules, o ideal é formar um triângulo com no mínimo três hastes.</li>
              <li><strong className="text-white">Aterramento compartilhado com outros sistemas.</strong> A Intelbras alerta que "problema no aterramento (não eficaz)" é uma causa de disparos falsos e de danos por descarga elétrica. O aterramento da cerca deve ser exclusivo, distante no mínimo 30 metros de qualquer outro aterramento (antenas, central de alarme, rede elétrica).</li>
              <li><strong className="text-white">Local seco ou inadequado.</strong> O aterramento precisa estar em local úmido para funcionar bem. Se as hastes estiverem em solo muito seco e arenoso, a resistência de terra fica alta e o sistema pode disparar falsamente. A recomendação é procurar sempre um local mais úmido para fixação da haste.</li>
              <li><strong className="text-white">Corrosão das hastes ou conexões.</strong> Com o tempo, as hastes de cobre ou aço cobreado podem oxidar, aumentando a resistência. A oxidação das conexões também é um problema comum.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">Como diagnosticar</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Verifique a localização e o número de hastes.</strong> O aterramento da cerca deve estar separado de qualquer outro aterramento, em local úmido, com pelo menos três hastes espaçadas 3 metros entre si (para eletrificadores de 1 a 3 J).</li>
              <li><strong className="text-white">Verifique o estado das hastes e conexões.</strong> Procure por oxidação, corrosão ou conexões soltas.</li>
              <li><strong className="text-white">Meça a resistência de terra com um terrômetro</strong> (instrumento específico). Valores acima de 10 ohms indicam aterramento ineficaz.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que fazer</h3>
            <p>Se o aterramento estiver inadequado, a correção exige cravar novas hastes em local úmido, refazer as conexões com cabo de cobre e garantir que o sistema esteja isolado de outros aterramentos. Esse é um serviço que exige ferramentas específicas e conhecimento técnico — não é recomendado fazer por conta própria.</p>
          </div>
        ),
      },
      {
        h2: 'Causa 4: Vegetação encostando nos fios',
        content: (
          <div className="space-y-4">
            <p>Vegetação encostando nos fios da cerca é uma causa clássica de disparo na chuva. No tempo seco, a vegetação tem alta resistência elétrica e não causa fuga. Quando molhada, a resistência cai drasticamente, e a corrente escapa para o solo através das folhas e galhos.</p>
            <p>A Belgo Arames alerta que "vegetação em contato com o arame aumenta a resistência elétrica e reduz a voltagem" do sistema. Em fóruns técnicos, a recomendação é "impedir que a vegetação encoste na fiação da cerca eletrificada, uma vez que isto poderá causar fugas elétricas e, portanto, disparos aleatórios".</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Como diagnosticar</h3>
            <p>Percorra o perímetro da cerca e verifique se há galhos, folhas, trepadeiras ou mato alto encostando nos fios. Preste atenção especial aos pontos em que a vegetação cresceu durante a primavera e o verão — o crescimento pode ter aproximado galhos dos fios sem que você perceba.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que fazer</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Faça a poda da vegetação que estiver encostando nos fios. Desligue a cerca antes de podar — a recomendação é "desligar a cerca para eventuais podas de vegetação e/ou manutenção dos fios".</li>
              <li>Mantenha uma faixa de segurança de pelo menos 30 a 50 cm entre a vegetação e os fios.</li>
              <li>Faça a manutenção da vegetação regularmente — pelo menos uma vez por semana em períodos de crescimento intenso, ou após chuvas intensas e ventos fortes.</li>
            </ul>
          </div>
        ),
      },
      {
        h2: 'Causa 5: Umidade no eletrificador ou na fiação de conexão',
        content: (
          <div className="space-y-4">
            <p>A central de choque (eletrificador) precisa estar abrigada do sol e da chuva. Se o equipamento estiver exposto ou em local úmido, a umidade pode penetrar nos componentes internos e causar disparos falsos.</p>
            <p>A Intelbras orienta que o produto "deve ser fixado em local protegido do sol, chuva e umidade". Manuais de fabricantes de eletrificadores rurais reforçam: "procure um lugar onde o aparelho fique abrigado do sol e da chuva. Se for fora do galpão, construir um abrigo". Além do eletrificador, a fiação de conexão entre a central e a cerca também pode ser afetada pela umidade. Se o cabo de alta isolação estiver danificado ou se os conectores estiverem oxidados, a chuva pode causar fuga nessa conexão.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Como diagnosticar</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Verifique se o eletrificador está em local abrigado — coberto, ventilado e protegido de respingos de chuva.</li>
              <li>Inspecione a fiação de conexão entre a central e a cerca — procure por isolamento danificado, conectores oxidados ou emendas mal feitas.</li>
              <li>Verifique se há água acumulada próxima ao eletrificador ou nos conduítes de passagem dos cabos.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que fazer</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Instale o eletrificador em local abrigado (dentro de casa, em uma caixa de proteção ou em um abrigo construído para esse fim).</li>
              <li>Substitua a fiação de conexão danificada e os conectores oxidados.</li>
              <li>Vede os conduítes para evitar entrada de água.</li>
            </ul>
          </div>
        ),
      },
      {
        h2: 'Tabela de diagnóstico rápido',
        content: (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-white font-bold">Sintoma</th>
                  <th className="text-left p-3 text-white font-bold">Verificação prioritária</th>
                  <th className="text-left p-3 text-white font-bold">Causa provável</th>
                  <th className="text-left p-3 text-white font-bold">Ação segura</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Dispara só na chuva, tempo seco OK</td><td className="p-3">Isoladores (visual: rachaduras, fissuras)</td><td className="p-3">Isolador rachado segurando umidade</td><td className="p-3">Substituir isoladores por modelos anti-UV</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Dispara com chuva forte e vento</td><td className="p-3">Vegetação encostando nos fios</td><td className="p-3">Vegetação molhada conduzindo corrente</td><td className="p-3">Poda técnica (desligar cerca antes)</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Dispara mesmo com cerca limpa e isoladores OK</td><td className="p-3">Aterramento (número de hastes, localização)</td><td className="p-3">Aterramento inadequado ou compartilhado</td><td className="p-3">Verificar/corrigir aterramento com técnico</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Dispara após chuva, com estalos audíveis</td><td className="p-3">Fios com "barriga" ou em contato com estruturas</td><td className="p-3">Fuga no perímetro</td><td className="p-3">Reestirar fios, afastar de estruturas metálicas</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Dispara com neblina ou alta umidade</td><td className="p-3">Isoladores + aterramento</td><td className="p-3">Isolamento comprometido</td><td className="p-3">Revisar isoladores e aterramento</td></tr>
                <tr><td className="p-3 font-semibold text-white">Central dispara sozinha, sem chuva</td><td className="p-3">Verificar sensibilidade e aprendizado</td><td className="p-3">Sensibilidade muito alta ou aprendizado incorreto</td><td className="p-3">Reajustar sensibilidade; refazer aprendizado</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        h2: 'O que NÃO fazer (e por quê)',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">❌ Não aumente a sensibilidade da central para "compensar" a chuva</h3>
            <p>A tentação de aumentar a sensibilidade da cerca para que ela "sinta melhor" o toque é um erro. Sensibilidade mais alta significa que qualquer fuga mínima (umidade, vegetação, isolador com microfissura) será interpretada como violação, e a cerca vai disparar ainda mais. A Intelbras orienta "diminuir a tensão dos pulsos da cerca" quando o perímetro é pequeno e a tensão está muito alta, pois isso também pode causar disparos.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não desligue o alarme para "resolver" o barulho</h3>
            <p>Desligar o alarme silencia o problema, mas mantém a cerca inoperante ou com fuga. Se a cerca dispara por fuga de corrente, desligar o alarme não corrige a fuga — e você fica sem a proteção. O disparo é um sintoma; a causa precisa ser corrigida.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não use fita isolante ou improvisos para "consertar" isoladores</h3>
            <p>Fita isolante comum não é adequada para alta tensão e se deteriora rapidamente com a chuva e o sol. O problema volta em poucos dias. A substituição do isolador por um modelo reforçado anti-UV é a solução correta e barata.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não faça poda de vegetação com a cerca ligada</h3>
            <p>A recomendação técnica é desligar a cerca antes de podar a vegetação próxima aos fios. Podar com a cerca ligada expõe você a choques e pode causar danos ao sistema.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não meça a tensão dos fios com multímetro comum</h3>
            <p>Os pulsos de uma cerca elétrica são de alta tensão. Um multímetro comum não foi feito para esse tipo de medição: pode ser danificado e causar acidente. A medição de tensão exige instrumento específico para cerca elétrica e conhecimento técnico — se for necessária, deixe com um profissional.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não compartilhe o aterramento da cerca com outros sistemas</h3>
            <p>O aterramento da cerca elétrica deve ser exclusivo. Compartilhar o aterramento com a central de alarme, antena de TV, rede elétrica ou outros sistemas é uma causa comum de disparos falsos e pode danificar equipamentos em caso de descarga elétrica.</p>
          </div>
        ),
      },
      {
        h2: 'Quando chamar um técnico especializado',
        content: (
          <div className="space-y-4">
            <p>A triagem visual — verificar isoladores, vegetação e abrigo do eletrificador — pode ser feita por você, com a cerca desligada na central. Mas alguns cenários exigem diagnóstico profissional:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Substituição de isoladores em hastes de difícil acesso ou em cercas com muitos pontos.</li>
              <li>Correção de aterramento — exige cravar novas hastes, refazer conexões e medir a resistência de terra com equipamento específico.</li>
              <li>Fuga de corrente persistente que não é resolvida com a limpeza de vegetação e substituição de isoladores.</li>
              <li>Fios com isolamento danificado que precisam ser substituídos em trechos longos.</li>
              <li>Eletrificador com danos internos (após descarga elétrica ou infiltração de água).</li>
              <li>Sistema com mais de 5 anos sem manutenção preventiva — uma revisão completa identifica múltiplos pontos de desgaste antes que o sistema pare de proteger.</li>
            </ul>
            <p>A Intelsecsul atende chamados de diagnóstico e manutenção de cercas elétricas em Curitiba e Região Metropolitana, com avaliação técnica no local antes de qualquer orçamento. A visita identifica se o problema é de isolador, fuga de corrente, aterramento ou instalação — e apresenta a solução com clareza.</p>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: (
          <div className="space-y-4">
            <p>Cerca elétrica disparando depois da chuva não é normal — é um sinal de que o sistema tem um ponto de fuga que a umidade está revelando. As causas mais comuns são: isolador rachado ou ressecado (a mais frequente, segundo técnicos em fóruns da Intelbras), fuga de corrente no perímetro (fios com "barriga" ou em contato com estruturas metálicas), aterramento inadequado (hastes insuficientes, local seco ou aterramento compartilhado) e vegetação encostando nos fios.</p>
            <p>A triagem começa pela inspeção visual dos isoladores — procure por rachaduras e fissuras — e pela verificação da vegetação que possa estar encostando nos fios. Se esses dois pontos estiverem OK, o problema pode estar no aterramento, que exige verificação técnica.</p>
            <p>E a regra que vale para todos os cenários: não aumente a sensibilidade da central para "compensar" a chuva, não desligue o alarme como solução e não compartilhe o aterramento da cerca com outros sistemas. Essas ações mascaram o problema e podem deixar o imóvel desprotegido.</p>
            <p>Se o problema se repete a cada chuva e você está repensando a proteção do muro, vale conferir o comparativo <Link to="/blog/cerca-eletrica-x-concertina-diferenca" className="text-white underline hover:text-slate-300">cerca elétrica x concertina</Link>. E para que isolador, vegetação e aterramento não sejam lembrados só quando o alarme dispara, um <Link to="/blog/contrato-manutencao-ou-chamar-quando-quebra" className="text-white underline hover:text-slate-300">contrato de manutenção preventiva</Link> inclui essas revisões periodicamente.</p>
          </div>
        ),
      },
    ],
    relatedQuestions: [
      {
        question: 'Cerca elétrica disparando na chuva é normal?',
        answer: 'Não. Uma cerca elétrica instalada corretamente e com manutenção em dia não deve disparar com a chuva. Se ela dispara toda vez que chove, há um problema de isolamento, fuga de corrente ou aterramento que precisa ser corrigido. A chuva é o agente que revela o problema — não a causa dele.',
      },
      {
        question: 'Qual a causa mais frequente de cerca elétrica disparando na chuva?',
        answer: 'Segundo técnicos em fóruns da Intelbras, os isoladores são a causa mais frequente de disparos que ocorrem na chuva. Isoladores com fissuras, rachaduras ou ressecamento pelo sol seguram umidade e criam um caminho de fuga para a corrente de alta tensão. A substituição por isoladores reforçados anti-UV resolve a maioria dos casos.',
      },
      {
        question: 'Como saber se o problema é isolador ou aterramento?',
        answer: 'Se a cerca dispara apenas na chuva e para no tempo seco, a causa mais provável é isolador (a umidade cria o caminho de fuga). Se a cerca dispara mesmo com isoladores em bom estado e vegetação limpa, o problema pode ser aterramento inadequado. A medição de resistência de isolamento (megômetro) e de aterramento (terrômetro), feita por um técnico, ajuda a distinguir entre fuga de isolamento e aterramento ineficaz.',
      },
      {
        question: 'Posso testar a cerca elétrica sozinho?',
        answer: 'Você pode fazer inspeção visual de isoladores, vegetação e abrigo do eletrificador, sempre com a cerca desligada na central. Não meça a tensão dos fios com multímetro comum: os pulsos da cerca são de alta tensão e podem danificar o aparelho e causar acidentes. A medição de tensão, de resistência de isolamento e de aterramento exige instrumentos específicos (voltímetro para cerca elétrica, megômetro, terrômetro) e conhecimento técnico. Se não se sentir seguro, chame um técnico.',
      },
      {
        question: 'Cerca elétrica dispara na chuva e o alarme toca. Devo desligar a cerca?',
        answer: 'Desligar a cerca silencia o alarme, mas não corrige o problema. Se a cerca dispara por fuga de corrente, ela continua inoperante (ou com fuga) mesmo com o alarme desligado. O ideal é identificar a causa — isolador, vegetação, aterramento — e corrigi-la. Se você precisa desligar temporariamente para fazer manutenção, lembre-se de religar depois e testar o funcionamento.',
      },
      {
        question: 'Com que frequência devo fazer manutenção na cerca elétrica?',
        answer: 'A recomendação técnica é fazer inspeções visuais e funcionais pelo menos uma vez por semana, além de verificações após chuvas intensas ou ventos fortes. Em sistemas mais intensivos, o ideal é o monitoramento contínuo da voltagem. A manutenção preventiva completa (substituição de isoladores, reaperto de conexões, limpeza de vegetação) deve ser feita a cada 3 a 6 meses.',
      },
    ],
    internalLink: {
      text: 'Sua cerca elétrica está disparando na chuva? Precisa de diagnóstico técnico?',
      url: '/servicos/cerca-eletrica/',
      linkText: 'Ver Cerca Elétrica',
    },
    whatsappMessage: 'Vim do blog e minha cerca elétrica está disparando na chuva',
    ctaFinal: {
      title: 'Sua cerca elétrica está disparando na chuva? Precisa de diagnóstico técnico?',
      text: 'A Intelsecsul realiza diagnóstico e manutenção de cercas elétricas em Curitiba e Região Metropolitana, com avaliação no local e orçamento claro antes de qualquer intervenção.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'cancela-ou-catraca-travou-diagnostico-rapido',
    slug: 'cancela-ou-catraca-travou-diagnostico-rapido',
    title: 'Cancela ou Catraca Travou: Diagnóstico Rápido para Não Parar a Entrada | Intelsecsul',
    metaTitle: 'Cancela ou Catraca Travou: Diagnóstico Rápido para Não Parar a Entrada | Intelsecsul',
    metaDescription: 'Cancela ou catraca travou e a entrada parou? Siga o diagnóstico por sintoma — haste no meio, tag sem comando, fotocélula, laço indutivo, display e solenoide — e saiba quando chamar manutenção de cancela e catraca em Curitiba.',
    h1: 'Cancela ou catraca travou: diagnóstico rápido para não parar a entrada',
    category: 'Cancelas e Catracas',
    readTime: '9 min de leitura',
    publishedDate: '2026-10-19',
    summary: 'Cancela ou catraca travada para a portaria inteira. Este guia organiza o diagnóstico por sintoma: haste parada no meio do curso, tag sem comando, fotocélula, laço indutivo, solenoide e display de erro. Mostra o que dá para verificar com segurança e quando chamar manutenção de cancela e catraca em Curitiba.',
    intro: 'Uma cancela ou catraca travada não é só um equipamento com defeito: é a portaria inteira parada. Em um condomínio, a fila se forma na guarita em minutos. Em um estacionamento comercial, cada veículo retido é receita perdida e reclamação acumulada. Em uma empresa, o acesso de colaboradores e visitantes trava junto com o equipamento. A diferença entre resolver o problema em minutos ou em horas está quase sempre na triagem correta: muitos travamentos têm causas simples e identificáveis, como um obstáculo na fotocélula, um laço indutivo que perdeu a sintonia, uma tag que não está sendo lida ou um solenoide que não libera o giro. Outros são sintomas de desgaste que exige manutenção especializada.',
    sections: [
      {
        h2: 'Como fazer a triagem: por sintoma, do visível ao técnico',
        content: (
          <div className="space-y-4">
            <p>Este guia organiza o diagnóstico por sintoma — o que você está vendo no equipamento — para que a triagem seja rápida e segura. A regra é começar pelo que é visível e não invasivo, e só avançar para verificações técnicas quando o problema não se resolve na superfície. Para manutenção de cancela e catraca em Curitiba, o diagnóstico local evita a troca desnecessária de peças e reduz o tempo de parada.</p>
            <p>Se a entrada trava com frequência nos horários de pico, o problema pode não ser defeito, e sim um fluxo acima do que o equipamento suporta. Veja como <Link to="/blog/cancela-automatica-condominio-empresa-como-dimensionar-fluxo" className="text-white underline hover:text-slate-300">dimensionar o fluxo de veículos de uma cancela automática</Link>.</p>
          </div>
        ),
      },
      {
        h2: 'Antes de tudo: segurança e limites do que você pode fazer',
        content: (
          <div className="space-y-4">
            <p>Cancela e catraca têm partes móveis motorizadas e componentes elétricos. Antes de qualquer verificação:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Não coloque as mãos no mecanismo</strong> com o equipamento energizado.</li>
              <li><strong className="text-white">Não force a haste ou o braço da catraca</strong> manualmente quando o equipamento estiver travado — isso pode danificar engrenagens, solenoides e o motor.</li>
              <li><strong className="text-white">Não abra o painel elétrico se não tiver experiência.</strong> A maioria dos fabricantes recomenda que a manutenção seja feita por pessoal tecnicamente competente.</li>
              <li><strong className="text-white">Se houver cheiro de queimado, fumaça ou faísca,</strong> desligue a alimentação no disjuntor e chame assistência imediatamente.</li>
            </ul>
            <p>O que você pode fazer com segurança: inspeção visual, limpeza externa de sensores, verificação de obstáculos e leitura de indicadores no display.</p>
          </div>
        ),
      },
      {
        h2: 'Sintoma 1: A haste da cancela para no meio do curso (não abre ou não fecha completamente)',
        content: (
          <div className="space-y-4">
            <p>Quando a haste para no meio do caminho, o problema está quase sempre em um dispositivo de segurança que está sendo acionado ou em uma referência de posição que se perdeu.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Causas prováveis</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Fotocélula obstruída ou desalinhada.</strong> A fotocélula é o sensor que impede a cancela de fechar sobre um veículo ou pessoa. Se houver qualquer obstáculo entre o transmissor e o receptor — inclusive sujeira, folhas ou um objeto esquecido — a cancela interpreta como presença e interrompe o movimento. Se as lentes estiverem desalinhadas, o feixe não chega ao receptor e o comportamento é o mesmo.</li>
              <li><strong className="text-white">Fim de curso desregulado ou com mau contato.</strong> O fim de curso é o sensor que informa à central onde a haste deve parar (totalmente aberta e totalmente fechada). Se ele perder a referência — por desgaste, mau contato ou reprogramação — a haste para antes do ponto correto ou não completa o ciclo.</li>
              <li><strong className="text-white">Obstáculo físico no trilho ou na cremalheira.</strong> Sujeira acumulada, uma pedra pequena ou o desalinhamento da própria haste podem fazer o motor "sentir" resistência e interromper o movimento como medida de proteção.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que verificar primeiro</h3>
            <p>Limpe as lentes da fotocélula com um pano seco, confirme visualmente se elas estão alinhadas uma com a outra e remova qualquer objeto entre elas. Se a haste voltar a completar o curso, o problema era obstrução ou desalinhamento. Se continuar parando, o fim de curso ou o mecanismo precisam de avaliação técnica.</p>
          </div>
        ),
      },
      {
        h2: 'Sintoma 2: A tag ou o controle não dá comando (a cancela não reage ao acionamento)',
        content: (
          <div className="space-y-4">
            <p>Se você aproxima a tag, aperta o controle ou digita o código, e a cancela não faz nada, o problema pode estar na identificação (o equipamento não está lendo a credencial) ou no receptor (a central não está recebendo o comando).</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Causas prováveis</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Tag ou cartão com problema.</strong> A tag pode estar danificada, sem leitura, com bateria fraca (no caso de tags ativas) ou fora do alcance do leitor. Teste com outra tag ou outro cartão cadastrado. Se outra credencial funcionar, o problema é a tag específica.</li>
              <li><strong className="text-white">Leitor desalinhado ou sujo.</strong> O leitor de proximidade (RFID) ou o leitor de código pode estar sujo, desalinhado ou com mau contato. Limpe a superfície do leitor e verifique se há algum obstáculo físico na frente dele.</li>
              <li><strong className="text-white">Receptor ou central sem receber o comando.</strong> Se a cancela funciona com o botão interno (na guarita ou no painel), mas não com a tag ou o controle, o problema está no receptor ou na central de comando — não no motor nem no mecanismo. Nesse caso, a verificação exige acesso ao painel e conhecimento da central.</li>
              <li><strong className="text-white">Controle remoto sem bateria ou fora de sintonia.</strong> Se o controle remoto não funciona, mas a tag funciona, verifique a bateria do controle e, se necessário, refaça a memorização no receptor.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que verificar primeiro</h3>
            <p>Teste com outra credencial (outra tag ou outro controle). Se outra funcionar, o problema é a credencial original. Se nenhuma funcionar, limpe o leitor e verifique se a cancela responde ao botão interno.</p>
          </div>
        ),
      },
      {
        h2: 'Sintoma 3: A fotocélula não está funcionando (a cancela não fecha ou fecha e reabre)',
        content: (
          <div className="space-y-4">
            <p>Este é um dos sintomas mais específicos e um dos mais perigosos se ignorado, porque a fotocélula é o dispositivo de segurança anti-esmagamento. Se ela não está funcionando, a cancela pode fechar sobre um veículo ou uma pessoa.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Como confirmar que o problema é a fotocélula</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Teste de bloqueio do feixe.</strong> Peça a alguém para comandar o fechamento enquanto você bloqueia o feixe entre transmissor e receptor com a mão ou um objeto, mantendo-se sempre fora do trajeto da haste. Se a cancela não parar nem reverter, a fotocélula não está sendo lida pela central. Nunca coloque o corpo ou a mão no caminho da haste para testar.</li>
              <li><strong className="text-white">Lentes e LED.</strong> Verifique se as lentes estão limpas e se o LED do receptor está aceso (na maioria dos modelos, um LED indica alinhamento e detecção).</li>
              <li><strong className="text-white">Cabo da fotocélula.</strong> Verifique, apenas visualmente, se o cabo está firme e sem trechos rompidos ou oxidados. Mexer nas conexões da central é serviço técnico.</li>
            </ul>
            <p>Se a fotocélula não responde ao teste, o problema pode ser desalinhamento, sujeira, fiação ou falha no próprio sensor. A substituição do sensor é necessária se ele estiver defeituoso. <strong className="text-white">Não desative a fotocélula para "resolver" o travamento</strong> — isso elimina a proteção anti-esmagamento e cria risco de acidente.</p>
          </div>
        ),
      },
      {
        h2: 'Sintoma 4: O laço indutivo não detecta o veículo (a cancela não abre na aproximação)',
        content: (
          <div className="space-y-4">
            <p>O laço indutivo é o sensor instalado no piso que detecta a presença de veículos por variação do campo magnético. Quando ele não detecta o carro, a cancela não recebe o comando de abertura — e o motorista fica parado na frente da haste.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Causas prováveis</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Laço danificado ou com mau contato.</strong> O fio do laço indutivo fica embutido no piso e pode se romper com o desgaste, com obras ou com infiltração. Se o laço estiver aberto (fio rompido), o detector não funciona.</li>
              <li><strong className="text-white">Interferência de metal próximo.</strong> Uma malha de aço ou estrutura metálica muito próxima ao laço reduz o campo magnético e prejudica a detecção.</li>
              <li><strong className="text-white">Detector desregulado ou com falha.</strong> O módulo detector pode estar descalibrado ou com falha eletrônica. Em alguns casos, o veículo permanece sobre o laço por muito tempo e o detector deixa de detectá-lo, porque alguns modelos têm tempo máximo de presença.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que verificar primeiro</h3>
            <p>Observe se o LED do detector de laço acende quando um veículo se aproxima. Se não acender, o laço pode estar rompido ou o detector com falha. Se acender mas a cancela não abrir, o problema está na comunicação entre o detector e a central. A verificação do laço exige equipamento de teste e, muitas vezes, a substituição do laço no piso — um serviço técnico.</p>
          </div>
        ),
      },
      {
        h2: 'Sintoma 5: A catraca não libera o giro (display aponta erro ou solenoide não aciona)',
        content: (
          <div className="space-y-4">
            <p>Na catraca, o travamento tem um componente eletromecânico central: o solenoide de liberação. Quando a placa recebe a autorização de acesso, ela energiza o solenoide, que destrava o mecanismo e permite o giro do braço. Se o solenoide não aciona, o braço fica travado mesmo com a credencial válida.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Causas prováveis</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Solenoide com bobina queimada ou sem alimentação.</strong> A Intelbras orienta que, quando o solenoide não libera ou trava o braço, o técnico verifique a bobina, a tensão que sai da placa e chega ao solenoide, teste o funcionamento com alimentação externa de 24V e analise o alinhamento da peça. Se o solenoide não responde nem com alimentação externa, ele precisa ser substituído. Esses testes são elétricos e devem ser feitos por técnico.</li>
              <li><strong className="text-white">Solenoide desalinhado ou com desgaste.</strong> O pino e a mola de retorno do solenoide se desgastam com o uso. Um solenoide desalinhado pode travar o braço mesmo estando eletricamente bom.</li>
              <li><strong className="text-white">Mecanismo com atrito ou desalinhamento.</strong> Barulhos, travamentos ou giro pesado podem indicar torque incorreto nos parafusos de fixação, falta de lubrificação ou desalinhamento do mecanismo com os demais componentes da catraca.</li>
              <li><strong className="text-white">Display com código de erro.</strong> Se o display da catraca mostra um código de erro, ele é a primeira pista. Os códigos variam conforme o modelo — consulte o manual do fabricante. Em alguns modelos, o display indica o estado do solenoide e da liberação do giro.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que verificar primeiro</h3>
            <p>Leia o display e anote o código (se houver). Teste com outra credencial válida. Se o display indicar acesso liberado mas o braço não girar, o problema está no solenoide ou no mecanismo — não na leitura da credencial. A substituição ou o ajuste do solenoide exige um técnico.</p>
          </div>
        ),
      },
      {
        h2: 'Tabela de diagnóstico rápido',
        content: (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-white font-bold">Sintoma</th>
                  <th className="text-left p-3 text-white font-bold">Verificação prioritária</th>
                  <th className="text-left p-3 text-white font-bold">Causa provável</th>
                  <th className="text-left p-3 text-white font-bold">Ação segura</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Haste para no meio do curso</td><td className="p-3">Fotocélula limpa e alinhada?</td><td className="p-3">Obstrução ou desalinhamento da fotocélula</td><td className="p-3">Limpar lentes e remover obstáculos</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Haste não completa a abertura ou o fechamento</td><td className="p-3">Fim de curso com mau contato?</td><td className="p-3">Fim de curso desregulado</td><td className="p-3">Não forçar; chamar técnico para reprogramar</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Tag não dá comando</td><td className="p-3">Outra tag funciona?</td><td className="p-3">Tag danificada ou leitor com problema</td><td className="p-3">Testar outra credencial; limpar leitor</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Cancela não fecha ou fecha e reabre</td><td className="p-3">Teste de bloqueio do feixe (fora do trajeto da haste)</td><td className="p-3">Fotocélula com falha ou desalinhada</td><td className="p-3">Não desativar; corrigir alinhamento ou substituir</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Cancela não abre na aproximação</td><td className="p-3">LED do detector de laço acende?</td><td className="p-3">Laço rompido ou detector com falha</td><td className="p-3">Verificação técnica do laço e do detector</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Catraca não libera giro</td><td className="p-3">Display mostra erro?</td><td className="p-3">Solenoide sem acionamento ou desalinhado</td><td className="p-3">Anotar código; chamar técnico</td></tr>
                <tr><td className="p-3 font-semibold text-white">Catraca com giro pesado ou barulho</td><td className="p-3">Parafusos e lubrificação</td><td className="p-3">Mecanismo desalinhado ou sem lubrificação</td><td className="p-3">Manutenção preventiva</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        h2: 'O que NÃO fazer (e por quê)',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">❌ Não force a haste ou o braço manualmente</h3>
            <p>Forçar a cancela ou a catraca travada pode quebrar engrenagens, empenar a haste ou danificar o solenoide. O equipamento tem um sistema de destravamento manual para situações de emergência (falta de energia, por exemplo) — use esse recurso, não a força.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não desative a fotocélula para "resolver" o travamento</h3>
            <p>A fotocélula é o dispositivo anti-esmagamento. Desativá-la faz a cancela fechar sem detectar obstáculos, criando risco de acidente grave. Se a fotocélula está causando travamento, o problema é obstrução, desalinhamento ou falha — e deve ser corrigido, não contornado.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não aumente a força do motor para "vencer" o travamento</h3>
            <p>Aumentar a força do motor (ou o torque do solenoide) para superar um obstáculo mascara o problema e acelera o desgaste de engrenagens, correia e motor. O travamento é um sintoma de que algo está errado no mecanismo, na segurança ou na instalação.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não abra o painel elétrico sem experiência</h3>
            <p>A maioria dos fabricantes recomenda que a manutenção seja feita por pessoal tecnicamente competente. Abrir o painel expõe você a risco elétrico e pode danificar componentes sensíveis. Se você não tem multímetro ou não sabe medir tensões, não abra.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não ignore a manutenção preventiva</h3>
            <p>A falta de manutenção preventiva é o erro mais frequente que leva a falhas em cancelas e catracas. A recomendação técnica é realizar vistorias a cada 100 mil ciclos ou a cada seis meses, o que ocorrer primeiro. Em catracas, a Intelbras recomenda inspeções e ajustes periódicos para evitar "falhas inesperadas, perdas de acesso e prejuízos causados pela paralisação do sistema".</p>
          </div>
        ),
      },
      {
        h2: 'Quando chamar manutenção de cancela e catraca em Curitiba',
        content: (
          <div className="space-y-4">
            <p>A triagem visual resolve os casos de obstrução, sujeira e credencial com problema. Mas alguns cenários exigem atendimento técnico local:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>A haste para no meio do curso mesmo com a fotocélula limpa e alinhada — pode ser fim de curso, placa ou mecanismo.</li>
              <li>A fotocélula não responde ao teste de bloqueio do feixe — pode ser sensor defeituoso ou fiação rompida.</li>
              <li>O laço indutivo não detecta veículo — exige teste do laço e do detector, com possível substituição do laço no piso.</li>
              <li>A catraca não libera o giro mesmo com credencial válida e display indicando acesso — solenoide, placa ou mecanismo.</li>
              <li>O display mostra código de erro que não se resolve com reinício.</li>
              <li>Há cheiro de queimado, ruído anormal ou superaquecimento — risco elétrico ou de dano maior.</li>
              <li>O equipamento está na garantia — abrir ou forçar pode anular a garantia.</li>
            </ul>
            <p>A Intelsecsul atende chamados de manutenção de cancela e catraca em Curitiba e Região Metropolitana, com diagnóstico no local e orçamento claro antes de qualquer intervenção. O atendimento prioriza a liberação rápida da entrada — sem sacrificar a segurança nem a integridade dos equipamentos.</p>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: (
          <div className="space-y-4">
            <p>Cancela ou catraca travada tem, na maioria dos casos, uma causa identificável por sintoma: haste no meio do curso aponta para fotocélula ou fim de curso; tag sem comando aponta para credencial ou leitor; fotocélula que não responde é falha de segurança que não pode ser ignorada; laço indutivo que não detecta é problema de sensor de piso; catraca que não libera o giro aponta para solenoide ou mecanismo.</p>
            <p>A triagem correta começa pelo que é visível e não invasivo — limpar lentes, remover obstáculos, testar outra credencial, ler o display. E a regra que vale para todos os cenários: não force a haste, não desative a fotocélula, não aumente a força do motor e não abra o painel elétrico sem experiência.</p>
            <p>Se a triagem não resolver, ou se o problema envolver solenoide, laço indutivo, placa ou fim de curso, a manutenção de cancela e catraca em Curitiba com diagnóstico local é o caminho mais seguro para liberar a entrada sem comprometer a segurança. Para que essas revisões aconteçam antes da parada, e não depois, veja também <Link to="/blog/contrato-manutencao-ou-chamar-quando-quebra" className="text-white underline hover:text-slate-300">vale mais ter contrato de manutenção ou chamar quando quebra</Link>. A Intelsecsul realiza atendimento técnico em Curitiba e Região Metropolitana, com prioridade para a liberação rápida da portaria.</p>
          </div>
        ),
      },
    ],
    relatedQuestions: [
      {
        question: 'Cancela não abre com a tag, mas abre com o botão interno. O que pode ser?',
        answer: 'Se a cancela responde ao botão interno mas não à tag, o problema está na identificação, e não no motor nem no mecanismo. As causas mais prováveis são tag danificada ou com bateria fraca, leitor sujo ou desalinhado, ou receptor sem receber o comando. Teste com outra tag: se outra funcionar, o problema é a credencial original. Se nenhuma funcionar, limpe o leitor e verifique a conexão do receptor com a central.',
      },
      {
        question: 'A cancela fecha e reabre sozinha. É a fotocélula?',
        answer: 'Pode ser. Quando a fotocélula detecta um obstáculo durante o fechamento, a cancela reverte o movimento por segurança. Se isso acontece sem nenhum obstáculo visível, a fotocélula pode estar suja, desalinhada ou com falha. Limpe as lentes e verifique o alinhamento. Se o problema persistir, faça o teste de bloqueio do feixe: com alguém comandando o fechamento e você fora do trajeto da haste, bloqueie o feixe entre transmissor e receptor. Se a cancela não parar, a fotocélula não está sendo lida e precisa de verificação técnica.',
      },
      {
        question: 'Catraca travada com display indicando erro: o que fazer?',
        answer: 'Anote o código de erro exibido no display e consulte o manual do fabricante. Os códigos variam conforme o modelo e indicam desde falha de comunicação até problema no solenoide ou no motor. Não tente abrir o mecanismo nem forçar o braço. Se o código indicar falha no solenoide ou no motor, o equipamento precisa de assistência técnica.',
      },
      {
        question: 'Posso destravar a cancela manualmente em caso de falta de energia?',
        answer: 'Sim, a maioria das cancelas automáticas tem um sistema de destravamento manual para situações de emergência, como falta de energia. O procedimento varia conforme o modelo e geralmente envolve girar uma chave ou acionar uma alavanca no operador. Antes de destravar, desligue a alimentação do operador e confirme que ninguém está na área de giro da haste. Não force a haste sem usar o destravamento, porque isso pode danificar o mecanismo. Consulte o manual do seu equipamento para o procedimento correto.',
      },
      {
        question: 'Com que frequência devo fazer manutenção preventiva em cancela e catraca?',
        answer: 'A recomendação técnica é a cada 100 mil ciclos ou a cada seis meses, o que ocorrer primeiro. Em locais de alto fluxo, como estacionamentos comerciais, portarias de condomínios grandes e catracas de academias, a frequência deve ser maior. A manutenção preventiva inclui limpeza, lubrificação, verificação de solenoides, ajuste de fim de curso, teste de fotocélulas e reaperto de conexões.',
      },
    ],
    internalLink: {
      text: 'Sua cancela ou catraca travou? Precisa de manutenção local em Curitiba?',
      url: '/servicos/cancelas-e-catracas/',
      linkText: 'Ver Cancelas e Catracas',
    },
    whatsappMessage: 'Vim do blog e minha cancela ou catraca travou',
    ctaFinal: {
      title: 'Sua cancela ou catraca travou? Precisa de manutenção local em Curitiba?',
      text: 'A Intelsecsul realiza diagnóstico e manutenção de cancelas e catracas em Curitiba e Região Metropolitana, com avaliação no local e orçamento claro antes de qualquer intervenção.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'camera-de-seguranca-fica-preta-a-noite-infravermelho-fonte-configuracao',
    slug: 'camera-de-seguranca-fica-preta-a-noite-infravermelho-fonte-configuracao',
    title: 'Câmera de Segurança Fica Preta à Noite: Infravermelho, Fonte ou Configuração? | Intelsecsul',
    metaTitle: 'Câmera de Segurança Fica Preta à Noite: Infravermelho, Fonte ou Configuração? | Intelsecsul',
    metaDescription: 'Câmera de segurança fica preta à noite? Veja as causas mais comuns — LEDs infravermelhos, reflexo no domo, fonte insuficiente e configuração do modo noturno — e saiba como diagnosticar cada uma antes de chamar assistência técnica.',
    h1: 'Câmera de segurança fica preta à noite: infravermelho, fonte ou configuração?',
    category: 'Câmeras de Segurança',
    readTime: '10 min de leitura',
    publishedDate: '2026-10-20',
    summary: 'Câmera que funciona de dia e fica preta à noite costuma ter problema em um de quatro pontos: LEDs infravermelhos que não acendem, reflexo do IR no domo ou em objetos próximos, fonte de alimentação insuficiente ou configuração do modo noturno. Veja como fazer a triagem na ordem certa e quando chamar assistência técnica.',
    intro: 'Uma câmera que funciona perfeitamente durante o dia e fica completamente preta à noite tem, na maioria dos casos, um problema em um de quatro sistemas: a iluminação infravermelha (IR), que não está acendendo; o reflexo do infravermelho no domo ou em objetos próximos, que "estoura" a imagem e a deixa inutilizável; a fonte de alimentação, que não fornece energia suficiente para acender os LEDs IR; ou a configuração do modo noturno, que pode estar desativada ou com o limiar de luminosidade mal ajustado. O risco é silencioso: o cliente acredita estar protegido porque a imagem diurna é nítida, mas perde a visão justamente em um dos períodos mais críticos. É diferente de uma câmera "embaçada" ou "nebulosa": o sintoma de tela preta ou imagem totalmente escura aponta para causas mais específicas. Este guia ajuda você a fazer a triagem na ordem certa, do mais simples e visível ao mais técnico, e a entender quando o problema está na configuração, na instalação ou em um componente que exige substituição.',
    sections: [
      {
        h2: 'Primeiro: confirme se a câmera está no modo noturno correto',
        content: (
          <div className="space-y-4">
            <p>Antes de suspeitar de hardware, verifique se a câmera está realmente tentando entrar no modo noturno. Câmeras de segurança têm um sensor de luminosidade (lux) que decide quando desligar o filtro IR-cut e acender os LEDs infravermelhos. Se esse sensor estiver bloqueado ou se a configuração estiver errada, a câmera pode permanecer no modo diurno à noite — e o resultado é uma imagem escura, sem o auxílio do infravermelho.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">O que verificar</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Modo noturno.</strong> No aplicativo ou no software de gestão, procure a opção "Modo Noturno" ou "Night Vision" e confirme se está em "Automático" ou "Ligado". Se estiver "Desligado", a câmera não vai acender os LEDs IR.</li>
              <li><strong className="text-white">Limiar de luminosidade (lux).</strong> Quando o menu oferece essa opção, confira o ponto em que a câmera troca entre dia e noite. Se estiver ajustado para trocar só com muita escuridão, a câmera demora a entrar no modo noturno ao anoitecer e a imagem fica escura nesse intervalo. Se trocar cedo demais, ela passa para preto e branco enquanto ainda há luz no ambiente. O ajuste ideal depende do local, e o nome da opção varia conforme o fabricante.</li>
              <li><strong className="text-white">Sensor de luminosidade físico.</strong> Algumas câmeras têm um pequeno sensor na parte frontal. Se ele estiver obstruído por sujeira, tinta ou pela própria instalação (por exemplo, a câmera montada muito próxima a uma parede), a câmera pode não perceber que escureceu.</li>
            </ul>
            <p>Sinais de que o problema pode ser configuração: a câmera exibe imagem colorida mesmo em ambiente totalmente escuro (não entra no modo preto e branco), ou os LEDs IR não acendem com o ambiente totalmente escuro. O mais provável, nesse caso, é ajuste ou sensor obstruído. Se a configuração estiver correta e o sintoma continuar, o filtro IR-cut pode estar travado (veja a Causa 4). Lembre que, perto de poste de iluminação ou refletor, imagem colorida à noite pode ser normal.</p>
          </div>
        ),
      },
      {
        h2: 'Causa 1: LEDs infravermelhos não estão acendendo',
        content: (
          <div className="space-y-4">
            <p>Se a câmera está no modo noturno, mas os LEDs IR não emitem luz, o problema pode estar nos próprios LEDs, na fonte de alimentação ou no circuito de acionamento.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Como confirmar</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Olhe a frente da câmera no escuro.</strong> Em muitos modelos, os LEDs IR emitem um brilho vermelho fraco quando estão ligados. Outros usam infravermelho de 940 nm, que não tem brilho visível. Por isso, a ausência de brilho não prova que os LEDs estão queimados: faça também o teste do celular.</li>
              <li><strong className="text-white">Use a câmera do celular para "ver" os LEDs.</strong> A câmera frontal costuma mostrar melhor, porque a traseira de muitos aparelhos tem filtro de infravermelho. Se o celular mostrar os LEDs acesos e a câmera de segurança continuar sem imagem, o problema está na captação, e não na emissão.</li>
              <li><strong className="text-white">Verifique se a câmera funciona durante o dia.</strong> Se a imagem diurna é normal, o sensor de imagem está bom. O problema está no subsistema de infravermelho (LEDs, driver ou alimentação) ou no filtro IR-cut.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que fazer</h3>
            <p>Se os LEDs não acendem, não tente abrir a câmera para "trocar o LED". Os LEDs IR são componentes soldados na placa e não são substituíveis pelo usuário. A solução é encaminhar a câmera para assistência técnica ou substituí-la. Antes disso, porém, verifique a fonte de alimentação (próxima causa), porque a falta de energia é uma das razões mais comuns para os LEDs não acenderem.</p>
          </div>
        ),
      },
      {
        h2: 'Causa 2: Fonte de alimentação insuficiente',
        content: (
          <div className="space-y-4">
            <p>Os LEDs infravermelhos consomem bastante energia — muito mais do que o sensor de imagem sozinho. Quando a fonte de alimentação não fornece tensão ou corrente suficientes, a câmera pode até funcionar durante o dia (quando os LEDs estão desligados), mas falha ou fica completamente preta à noite, quando os LEDs precisam acender.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Como confirmar</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Verifique a especificação da fonte.</strong> A câmera precisa de uma fonte com tensão e corrente compatíveis com o consumo dela. Por exemplo, câmeras que exigem 12V 1A ou 12V 2A podem não funcionar corretamente com fontes de menor capacidade.</li>
              <li><strong className="text-white">Meça a tensão nos terminais da câmera.</strong> Em câmeras alimentadas por fonte 12 V DC, com a câmera ligada e os LEDs em operação, meça a tensão no lado de baixa tensão. Segundo a orientação da Intelbras, tensão abaixo de 9V indica problema na fonte ou no cabo. Meça sempre no lado de baixa tensão, nunca na entrada de energia da fonte (127/220 V). Se não tiver experiência com multímetro, deixe essa medição com um técnico. Não se aplica a câmeras PoE.</li>
              <li><strong className="text-white">Teste a câmera com outra fonte de mesma especificação.</strong> Se a imagem noturna voltar a funcionar, o problema era a fonte original.</li>
              <li><strong className="text-white">Verifique o comprimento e a qualidade do cabo de alimentação.</strong> Cabos muito longos ou com seção insuficiente causam queda de tensão: a câmera recebe menos energia do que o necessário, e os LEDs IR não acendem.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que fazer</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Substitua a fonte por uma de mesma tensão e corrente igual ou superior à especificada no manual da câmera.</li>
              <li>Encurte o cabo de alimentação ou use um cabo com bitola maior para reduzir a queda de tensão.</li>
              <li>Instale a fonte o mais próximo possível da câmera, conforme orientação da Intelbras.</li>
              <li>Se a câmera for PoE, verifique se o switch PoE está fornecendo potência suficiente para todas as câmeras conectadas. Switches no limite de potência podem fazer algumas câmeras reiniciarem ou operarem com infravermelho reduzido.</li>
            </ul>
            <p>Se a câmera não apresenta o problema só à noite, mas some ou reinicia em outros horários, veja também <Link to="/blog/camera-fora-do-ar-causas-solucoes" className="text-white underline hover:text-slate-300">câmera fora do ar: as causas mais comuns e como resolver</Link>. E, se o cabo é longo por causa do ambiente, vale entender as diferenças entre <Link to="/blog/camera-com-fio-ou-wifi-qual-escolher" className="text-white underline hover:text-slate-300">câmera com fio ou Wi-Fi</Link>.</p>
          </div>
        ),
      },
      {
        h2: 'Causa 3: Reflexo do infravermelho no domo ou em objetos próximos',
        content: (
          <div className="space-y-4">
            <p>Este é um dos problemas mais comuns em câmeras dome (as câmeras com formato de cúpula). O infravermelho emitido pelos LEDs reflete na superfície do domo ou em objetos próximos e volta para a lente, criando um efeito de "neblina" ou "imagem leitosa" que, em casos extremos, deixa a imagem escura ou inutilizável.</p>
            <p>A Axis, em material técnico sobre reflexos de IR em câmeras dome, explica que os problemas são normalmente causados por objetos próximos (paredes, postes), gotas de água, sujeira ou poeira no domo e fontes de luz externas voltadas para a câmera. Segundo a Trendnet, nos modelos com anel de espuma, o caso mais grave de reflexão ocorre quando o anel não está firmemente pressionado contra a cúpula, o que cria um efeito de "névoa circular" na imagem.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Como confirmar</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Limpe o domo com um pano de microfibra limpo.</strong> Poeira, gordura (de dedadas) e gotas de chuva são suficientes para causar reflexão.</li>
              <li><strong className="text-white">Verifique se há objetos próximos à frente da câmera:</strong> paredes, beirais, plantas, placas. Mesmo que esses objetos não apareçam no campo de visão, eles podem refletir o IR de volta para a lente.</li>
              <li><strong className="text-white">Teste a câmera em outro local,</strong> longe de superfícies refletivas. Se a imagem noturna melhorar, o problema é de instalação, não de hardware.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que fazer</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Limpe o domo regularmente com pano de microfibra e produto adequado para lentes. Evite tocar na cúpula com os dedos durante a instalação.</li>
              <li>Afaste a câmera de paredes e superfícies refletivas. Use suportes de montagem para deslocar a câmera da parede e evitar que o feixe IR atinja superfícies próximas.</li>
              <li>Ajuste o ângulo da câmera para que o feixe IR não incida diretamente sobre objetos próximos.</li>
              <li>Nos modelos que têm anel de espuma, verifique se ele está no lugar e bem pressionado contra a cúpula. Se estiver solto ou ausente, ele precisa ser recolocado ou substituído.</li>
            </ul>
          </div>
        ),
      },
      {
        h2: 'Causa 4: Configuração do filtro IR-cut ou do modo noturno',
        content: (
          <div className="space-y-4">
            <p>O filtro IR-cut é um componente mecânico que fica na frente do sensor de imagem. Durante o dia, ele bloqueia a luz infravermelha para que as cores sejam reproduzidas corretamente. À noite, ele se retira para permitir que o sensor capte a luz infravermelha dos LEDs.</p>
            <p>Se o filtro IR-cut travar na posição diurna, a câmera não capta o infravermelho à noite, e a imagem fica preta ou extremamente escura. Se travar na posição noturna, a imagem pode ficar com cores distorcidas durante o dia.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Como confirmar</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Ouça a câmera ao anoitecer.</strong> Em muitos modelos, é normal ouvir um "clique" suave quando o filtro IR-cut se move. Se não houver clique, o filtro pode estar travado. Alguns modelos têm acionamento silencioso, então a ausência de clique, sozinha, não prova defeito.</li>
              <li><strong className="text-white">Verifique a configuração do modo noturno</strong> no aplicativo ou software. Alguns modelos permitem escolher entre "Automático", "Dia" e "Noite". Se estiver em "Dia" à noite, a câmera não vai acender os LEDs.</li>
              <li><strong className="text-white">Compare a imagem de dia e de noite.</strong> Cores estranhas de dia e imagem preta à noite, juntas, são um sinal típico de filtro que não está trocando de posição.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que fazer</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Ajuste a configuração para "Automático" ou "Noite" e verifique se o ponto de troca entre dia e noite está adequado.</li>
              <li>Se o filtro estiver travado mecanicamente, a câmera precisa de assistência técnica. O filtro IR-cut é um componente interno e não deve ser reparado pelo usuário.</li>
              <li>Em câmeras de marcas que oferecem atualização de firmware, verifique se há uma versão mais recente que corrija problemas relacionados ao modo noturno.</li>
            </ul>
          </div>
        ),
      },
      {
        h2: 'Tabela de diagnóstico rápido',
        content: (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-white font-bold">Sintoma</th>
                  <th className="text-left p-3 text-white font-bold">Verificação prioritária</th>
                  <th className="text-left p-3 text-white font-bold">Causa provável</th>
                  <th className="text-left p-3 text-white font-bold">Ação segura</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Imagem totalmente preta à noite, LEDs IR não acendem</td><td className="p-3">Fonte de alimentação (tensão e corrente)</td><td className="p-3">Fonte insuficiente ou cabo com queda de tensão</td><td className="p-3">Substituir fonte; encurtar cabo</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">LEDs IR acendem, mas imagem fica "nebulosa" ou escura</td><td className="p-3">Domo limpo? Objetos próximos?</td><td className="p-3">Reflexo de IR no domo ou em superfícies</td><td className="p-3">Limpar domo; afastar de paredes</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Câmera não "clica" ao anoitecer e fica preta</td><td className="p-3">Filtro IR-cut travado</td><td className="p-3">Falha mecânica no filtro IR-cut</td><td className="p-3">Assistência técnica</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Configuração do app mostra "Modo Noturno" desligado</td><td className="p-3">Configuração do modo noturno</td><td className="p-3">Configuração incorreta</td><td className="p-3">Ativar o modo "Automático" ou "Noite"</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Câmera demora a entrar no modo noturno ao anoitecer</td><td className="p-3">Ponto de troca entre dia e noite (lux)</td><td className="p-3">Limiar de luminosidade mal ajustado</td><td className="p-3">Ajustar a sensibilidade de troca (a direção depende do menu do fabricante)</td></tr>
                <tr><td className="p-3 font-semibold text-white">Câmera funciona de dia, mas fica preta à noite, sem brilho nos LEDs</td><td className="p-3">Teste com a câmera do celular; fonte nova</td><td className="p-3">LEDs IR queimados ou driver com falha</td><td className="p-3">Assistência técnica ou substituição</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        h2: 'O que NÃO fazer (e por quê)',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">❌ Não abra a câmera para "trocar o LED" ou o filtro IR-cut</h3>
            <p>Os LEDs infravermelhos e o filtro IR-cut são componentes internos soldados ou montados em mecanismos delicados. Abrir a câmera expõe você a risco de danificar o sensor de imagem, a vedação contra água e a garantia do equipamento. A substituição desses componentes exige assistência técnica.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não sacuda nem bata na câmera para "destravar" o filtro</h3>
            <p>Alguns guias de câmeras domésticas sugerem sacudir o aparelho. Em câmeras fixadas na parede ou no teto, isso pode soltar o suporte, desalinhar a lente e comprometer a vedação. Mesmo que o filtro volte a mexer, o travamento tende a se repetir: o caminho correto é a assistência técnica.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não use produtos abrasivos para limpar o domo</h3>
            <p>Alguns domos têm revestimento antirreflexivo. Produtos abrasivos (álcool em excesso, thinner, panos ásperos) podem danificar esse revestimento, riscar a cúpula e piorar o reflexo do infravermelho. Use um pano de microfibra limpo ou um produto específico para lentes.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não ignore a fonte de alimentação</h3>
            <p>Muitas câmeras são substituídas desnecessariamente porque o problema era fonte insuficiente ou cabo com queda de tensão. Antes de comprar uma câmera nova, teste com outra fonte de mesma especificação e, se souber medir com segurança, confira a tensão no lado de baixa tensão. Essa verificação custa pouco e pode economizar o preço de um equipamento novo.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não instale a câmera em cantos apertados</h3>
            <p>Cantos e superfícies muito próximas refletem o infravermelho de volta para a lente, criando o efeito de "neblina" que deixa a imagem escura. A Trendnet recomenda evitar a instalação em cantos apertados e usar suportes de montagem para afastar a câmera de paredes e superfícies próximas.</p>
          </div>
        ),
      },
      {
        h2: 'Quando chamar um técnico especializado',
        content: (
          <div className="space-y-4">
            <p>A triagem de configuração, a limpeza do domo e a verificação da fonte podem ser feitas por você. Mas alguns cenários exigem diagnóstico profissional:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>LEDs IR não acendem mesmo com fonte nova e configuração correta — pode ser falha no driver de IR ou nos próprios LEDs.</li>
              <li>Filtro IR-cut travado (a câmera não faz a troca de imagem ao anoitecer) — falha mecânica que exige assistência.</li>
              <li>Reflexo de IR persistente mesmo após limpeza e reposicionamento — pode exigir reposicionar a câmera, trocar o domo ou usar um modelo com tecnologia anti-reflexo (como a OptimizedIR, da Axis).</li>
              <li>Câmera com mais de 5 anos de uso que nunca passou por manutenção preventiva — os LEDs IR têm vida útil limitada e podem estar no fim da vida.</li>
              <li>Sistema com várias câmeras em que apenas uma apresenta o problema — a substituição ou o reparo pontual é mais simples com diagnóstico técnico.</li>
              <li>Você não se sente seguro para mexer nas configurações ou na instalação — uma alteração errada pode comprometer a segurança do imóvel.</li>
            </ul>
            <p>A Intelsecsul atende chamados de diagnóstico e manutenção de câmeras de segurança em Curitiba e Região Metropolitana, com avaliação técnica no local antes de qualquer orçamento. A visita identifica se o problema é de infravermelho, fonte, configuração ou instalação — e apresenta a solução com clareza.</p>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: (
          <div className="space-y-4">
            <p>Câmera de segurança que fica preta à noite tem, na grande maioria dos casos, uma causa identificável: configuração do modo noturno, fonte de alimentação insuficiente, LEDs infravermelhos queimados ou sem energia, reflexo do IR no domo ou em objetos próximos, ou filtro IR-cut travado.</p>
            <p>A triagem começa pelo que é mais simples e não invasivo: verifique a configuração, limpe o domo, afaste a câmera de paredes e teste a fonte. Se os LEDs não acenderem com uma fonte nova, ou se o filtro IR-cut estiver travado, a assistência técnica é necessária.</p>
            <p>E a regra que vale para todos os cenários: não abra a câmera, não a sacuda, não use produtos abrasivos no domo, não ignore a fonte e não instale a câmera em cantos apertados. Essas atitudes podem danificar o equipamento ou agravar o problema de reflexo.</p>
            <p>Se você está revendo o posicionamento das câmeras, veja também <Link to="/blog/quantas-cameras-de-seguranca-preciso-para-minha-casa" className="text-white underline hover:text-slate-300">quantas câmeras de segurança preciso para minha casa</Link>. E, se a triagem não resolveu, a Intelsecsul realiza diagnóstico e manutenção de câmeras de segurança em Curitiba e Região Metropolitana, com avaliação no local e orçamento claro antes de qualquer intervenção.</p>
          </div>
        ),
      },
    ],
    relatedQuestions: [
      {
        question: 'Câmera de segurança fica preta à noite, mas funciona de dia. O que pode ser?',
        answer: 'As causas mais prováveis são: LEDs infravermelhos queimados ou sem energia, fonte de alimentação insuficiente (que não fornece corrente suficiente para acender os LEDs), filtro IR-cut travado na posição diurna, reflexo do infravermelho no domo ou configuração do modo noturno desativada. A ordem de verificação é: configuração, fonte, LEDs e, por último, filtro IR-cut.',
      },
      {
        question: 'Os LEDs vermelhos da câmera acendem, mas a imagem fica escura. Por quê?',
        answer: 'Se os LEDs acendem, mas a imagem não ilumina, o problema pode ser reflexo do infravermelho no domo ou em objetos próximos, potência insuficiente dos LEDs (mesmo acendendo, podem estar fracos), filtro IR-cut travado ou sensor de imagem com baixa sensibilidade ao IR. Limpe o domo, verifique se há objetos próximos refletindo o feixe e teste a câmera em outro local.',
      },
      {
        question: 'Como saber se o problema é a fonte de alimentação?',
        answer: 'O teste mais seguro é trocar a fonte por outra de mesma especificação e ver se a imagem noturna volta. Se você souber usar um multímetro, meça a tensão no lado de baixa tensão da câmera, com ela ligada e em modo noturno: para uma câmera de 12 V, tensão muito abaixo da especificada (por exemplo, abaixo de 9 V, segundo orientação da Intelbras) indica problema na fonte ou no cabo. Nunca meça na entrada de energia da fonte (127/220 V), e essa medição não se aplica a câmeras PoE. Em caso de dúvida, chame um técnico.',
      },
      {
        question: 'Câmera dome com imagem "nebulosa" à noite. O que fazer?',
        answer: 'A imagem "nebulosa" ou "leitosa" à noite é o sintoma clássico de reflexo de infravermelho. Limpe o domo com um pano de microfibra, verifique se o anel de espuma (nos modelos que têm) está no lugar e bem pressionado, e afaste a câmera de paredes e superfícies refletivas. Se o problema persistir, pode ser necessário trocar o domo ou usar um modelo com tecnologia anti-reflexo.',
      },
      {
        question: 'Preciso trocar a câmera se ela fica preta à noite?',
        answer: 'Nem sempre. Na maioria dos casos, o problema está na fonte, na configuração, no domo sujo ou no posicionamento, e não na câmera em si. A substituição só é necessária quando os LEDs IR ou o filtro IR-cut estão defeituosos, ou quando a câmera já tem muitos anos de uso e o subsistema de infravermelho chegou ao fim da vida útil.',
      },
      {
        question: 'Câmera com visão noturna colorida funciona melhor à noite?',
        answer: 'Câmeras com visão noturna colorida (que usam sensores de alta sensibilidade ou iluminação branca integrada) podem oferecer imagem colorida em condições de baixa luminosidade, mas geralmente têm alcance menor que as câmeras com IR tradicional. A escolha depende do ambiente: para grandes áreas externas, o IR tradicional costuma ter alcance maior; para áreas internas ou com alguma luz residual, a visão noturna colorida pode ser mais útil.',
      },
    ],
    internalLink: {
      text: 'Sua câmera fica preta à noite? Precisa de diagnóstico técnico?',
      url: '/servicos/cameras-de-seguranca/',
      linkText: 'Ver Câmeras de Segurança',
    },
    whatsappMessage: 'Vim do blog e minha câmera fica preta à noite',
    ctaFinal: {
      title: 'Sua câmera fica preta à noite? Precisa de diagnóstico técnico?',
      text: 'A Intelsecsul realiza diagnóstico e manutenção de câmeras de segurança em Curitiba e Região Metropolitana, com avaliação no local e orçamento claro antes de qualquer intervenção.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
  {
    id: 'portao-eletronico-trava-no-meio-do-caminho-causas',
    slug: 'portao-eletronico-trava-no-meio-do-caminho-causas',
    title: 'Portão Eletrônico Trava no Meio do Caminho: Causas Além do Barulho | Intelsecsul',
    metaTitle: 'Portão Eletrônico Trava no Meio do Caminho: Causas Além do Barulho | Intelsecsul',
    metaDescription: 'Portão eletrônico trava no meio do percurso? Veja as causas além do barulho — proteção térmica, capacitor de partida, desbalanceamento e esforço do motor — e saiba quando o ajuste resolve ou quando é defeito.',
    h1: 'Portão eletrônico trava no meio do caminho: causas além do barulho',
    category: 'Portão Eletrônico',
    readTime: '10 min de leitura',
    publishedDate: '2026-10-20',
    summary: 'Portão que trava no meio do percurso costuma ter problema de força, torque ou proteção, e não de comando. As causas mais comuns são proteção térmica, capacitor de partida desgastado, portão desbalanceado, atrito mecânico e configuração de força ou fim de curso. Veja o que verificar com segurança e quando chamar assistência técnica.',
    intro: 'Um portão que trava no meio do caminho — abre alguns centímetros, perde força e para, ou fecha pela metade e interrompe o movimento — tem um comportamento diferente de um portão que simplesmente "não abre" ou "não fecha completamente". Na maioria dos casos, o portão começa o movimento normalmente e para no meio do curso porque a central eletrônica detectou um esforço excessivo ou porque um componente perdeu a capacidade de sustentar o torque necessário. As causas mais comuns estão em cinco frentes: proteção térmica (o motor superaquece e a central corta a energia para não queimar), capacitor de partida desgastado (nos motores que usam capacitor, o motor perde o impulso inicial), desbalanceamento do portão (o motor precisa fazer muito mais força do que o normal), esforço mecânico por atrito ou desalinhamento (trilho sujo, roldanas travadas, cremalheira desalinhada) e configuração de força ou de fim de curso inadequada (a central interpreta o esforço normal como obstrução e interrompe o ciclo). Este guia separa cada uma dessas causas, mostra o que você pode verificar com segurança e indica o momento em que o problema deixa de ser ajuste e passa a ser defeito que exige assistência técnica.',
    sections: [
      {
        h2: 'Primeiro: entenda a diferença entre "travar no meio" e "não abrir"',
        content: (
          <div className="space-y-4">
            <p>Um portão que não abre normalmente tem um problema de comando (controle, receptor, fotocélula ou central). Um portão que trava no meio do percurso geralmente tem um problema de força, torque ou proteção. O motor recebe o comando, começa a movimentar o portão e para porque a central entende que continuar seria perigoso para o equipamento.</p>
            <p>Essa distinção é importante porque muda completamente o tipo de verificação. Se o portão não abre, você investiga o comando: veja <Link to="/blog/portao-eletronico-nao-abre-ou-nao-fecha" className="text-white underline hover:text-slate-300">portão eletrônico não abre ou não fecha: causas e o que verificar</Link>. Se o portão trava no meio, você investiga esforço, alimentação, capacitor, balanceamento e configuração de força, que é o foco deste guia.</p>
            <p>Antes de qualquer verificação, desligue a energia no disjuntor, mantenha mãos e pés fora de trilhos, roldanas e partes móveis e nunca mexa no portão enquanto ele estiver em movimento.</p>
          </div>
        ),
      },
      {
        h2: 'Causa 1: Proteção térmica — o motor esquenta e a central corta a energia',
        content: (
          <div className="space-y-4">
            <p>Esta é uma das causas mais frequentes e menos compreendidas. O motor do portão não foi projetado para operar em esforço contínuo. Quando ele trabalha acima do torque nominal — por atrito, desbalanceamento ou obstrução —, a temperatura sobe, e a central (ou o próprio motor) aciona um protetor térmico que interrompe a energia para evitar a queima da bobina ou da placa.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Como identificar</h3>
            <p>O sintoma clássico é um portão que abre alguns centímetros, para, e só volta a funcionar depois de alguns minutos (tempo necessário para o motor esfriar). Em alguns modelos Intelbras, a central sinaliza com o LED de força aceso (LED2 – Força), indicando "Alarme Temperatura ou Corrente Motor". A sinalização varia conforme a marca e o modelo: consulte o manual da sua central.</p>
            <p>A causa subjacente quase sempre é esforço excessivo: trilho desalinhado, roldanas travadas, portão pesado ou desbalanceado, ou configuração de força muito alta na central.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que fazer</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Não insista em acionar o portão repetidamente enquanto ele está quente.</strong> Isso agrava o superaquecimento e pode queimar o motor.</li>
              <li>Aguarde o motor esfriar e verifique se há obstrução visível no trilho, sujeira acumulada ou objetos presos.</li>
              <li>Se o portão volta a funcionar após esfriar, mas o problema se repete, a causa raiz (esforço excessivo) precisa ser corrigida. A proteção térmica está fazendo o papel dela: o problema não é a proteção, é o esforço que a aciona.</li>
            </ul>
          </div>
        ),
      },
      {
        h2: 'Causa 2: Capacitor de partida desgastado — o motor perde o impulso inicial',
        content: (
          <div className="space-y-4">
            <p>O capacitor de partida é o componente que armazena e libera energia para dar o impulso inicial ao motor. Ele é usado em motores AC (corrente alternada); alguns automatizadores têm motor DC e não usam esse componente, e nesses casos o sintoma aponta para outras causas. Sem o capacitor em bom estado, o motor não vence a inércia da carga, e o portão começa a andar e perde força no meio do percurso.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Como identificar</h3>
            <p>Os sintomas típicos de capacitor fraco ou queimado são:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Zumbido no motor (som de esforço), mas o portão não se move ou se move muito devagar.</li>
              <li>Portão que começa rápido e perde força no meio do caminho.</li>
              <li>Motor que funciona em apenas um sentido (abre mas não fecha, ou vice-versa), o que também pode indicar capacitor.</li>
              <li>Necessidade de empurrar o portão manualmente para ajudar o motor a arrancar.</li>
              <li>Em alguns casos, estufamento visível na carcaça do capacitor.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que fazer</h3>
            <p>A substituição do capacitor é um reparo relativamente simples e barato, mas exige cuidado: o capacitor armazena carga elétrica mesmo após o desligamento. A recomendação técnica é que a troca seja feita por um profissional qualificado, que desliga a energia, descarrega o capacitor com segurança e instala um componente de mesma especificação (medida em microfarads – uF).</p>
            <p>Não tente trocar o capacitor sem conhecer a especificação correta. Um capacitor com valor errado pode não resolver o problema ou danificar o motor.</p>
          </div>
        ),
      },
      {
        h2: 'Causa 3: Portão desbalanceado — o motor faz muito mais força do que deveria',
        content: (
          <div className="space-y-4">
            <p>O desbalanceamento é apontado como uma das principais causas de queima prematura de automatizadores. O motor foi projetado para movimentar o portão, não para sustentar o peso dele. Quem deve equilibrar o peso são as molas e os contrapesos (em portões basculantes) ou as roldanas (em deslizantes). Quando o portão está desbalanceado, o motor precisa fazer muito mais força do que o normal, o que leva a superaquecimento, desgaste da coroa interna e queima da placa ou da bobina.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">O teste que você pode fazer (com cuidado)</h3>
            <p><strong className="text-white">Portão basculante (que sobe):</strong></p>
            <ol className="space-y-2 list-decimal list-inside">
              <li>Desligue a energia no disjuntor e feche o portão totalmente.</li>
              <li>Destrave o motor (chave de desbloqueio) para colocá-lo no modo manual.</li>
              <li>Com duas pessoas e com mãos e pés fora da trajetória do portão, levante-o até a metade do caminho e solte com cuidado.</li>
              <li>Resultado esperado: o portão deve ficar parado onde você soltou. Se ele cair com tudo ou subir sozinho, está desbalanceado.</li>
            </ol>
            <p>Como um portão desbalanceado pode cair com força e machucar, se ele for muito pesado deixe esse teste com um técnico.</p>
            <p><strong className="text-white">Portão deslizante:</strong></p>
            <ol className="space-y-2 list-decimal list-inside">
              <li>Desligue a energia no disjuntor e destrave o motor.</li>
              <li>Empurre o portão com uma das mãos ao longo de todo o curso.</li>
              <li>Resultado esperado: ele deve deslizar com esforço leve e constante, sem pontos duros nem ruído de atrito. Se emperrar em pontos específicos ou exigir muita força, há atrito ou desalinhamento (veja a Causa 4).</li>
            </ol>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que fazer</h3>
            <p>Se o teste confirmar o desbalanceamento, não adianta trocar o motor nem o capacitor: o problema está no portão, e um motor novo também vai queimar em poucos meses. A correção exige:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Basculantes:</strong> ajuste ou troca de molas, ou adição de contrapeso nas caixas. As molas ficam sob tensão e são perigosas de ajustar: deixe com profissional.</li>
              <li><strong className="text-white">Deslizantes:</strong> substituição de roldanas travadas ou desgastadas e alinhamento do trilho.</li>
            </ul>
            <p>Esse é um serviço de serralheria ou manutenção especializada, não de ajuste elétrico.</p>
          </div>
        ),
      },
      {
        h2: 'Causa 4: Esforço mecânico — atrito, desalinhamento e obstrução',
        content: (
          <div className="space-y-4">
            <p>Além do desbalanceamento, o esforço excessivo pode vir de atrito mecânico no caminho do portão. A central detecta o aumento no consumo de corrente e interrompe o movimento como proteção para evitar a queima do motor diante de uma obstrução mecânica ou falta de lubrificação. Se, além de travar, o portão faz ruídos de atrito ou rangidos, veja também <Link to="/blog/portao-eletronico-faz-barulho-ajuste-ou-defeito" className="text-white underline hover:text-slate-300">portão eletrônico faz barulho: ajuste ou defeito</Link>.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Causas comuns de atrito</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong className="text-white">Trilho sujo ou desalinhado.</strong> Poeira, areia e detritos aumentam o atrito e podem desviar a trajetória.</li>
              <li><strong className="text-white">Roldanas travadas ou desgastadas.</strong> Roldanas "quadradas" (com facetas) batem no trilho e aumentam a resistência.</li>
              <li><strong className="text-white">Cremalheira desalinhada ou com emendas irregulares.</strong> Os dentes não engatam corretamente e o motor "sente" resistência.</li>
              <li><strong className="text-white">Corrente ou correia frouxa ou tensionada demais.</strong> Nos modelos que usam corrente ou correia, a tensão incorreta prejudica a transmissão de força.</li>
              <li><strong className="text-white">Falta de lubrificação</strong> nos pontos de contato indicados pelo fabricante.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que fazer</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>Com o portão desenergizado, limpe o trilho com escova macia ou aspirador.</li>
              <li>Verifique visualmente se há objetos presos no caminho do portão.</li>
              <li>Com o motor no modo manual e a energia desligada, observe se as roldanas giram livremente.</li>
              <li>Se o atrito persistir após a limpeza, o problema pode ser desalinhamento estrutural ou desgaste de peças, e exige avaliação técnica.</li>
            </ul>
          </div>
        ),
      },
      {
        h2: 'Causa 5: Configuração de força ou fim de curso inadequada',
        content: (
          <div className="space-y-4">
            <p>A central do portão tem um parâmetro de força (ou torque) que define quanta resistência o motor pode vencer antes de a central interpretar como obstrução e parar. Se esse parâmetro estiver muito baixo, o portão para no meio do percurso mesmo sem obstáculo real. Se estiver muito alto, a central pode deixar de detectar obstáculos e o motor sofre esforço excessivo, o que pode levar à proteção térmica ou à queima.</p>
            <p>Além da força, o fim de curso (ou encoder) informa à central onde o portão deve desacelerar e parar. Se o fim de curso estiver desregulado ou com mau contato, o portão pode interromper o movimento antes do ponto correto.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white">Como identificar</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>O portão para sempre no mesmo ponto do percurso (indicando fim de curso ou encoder).</li>
              <li>O portão para em pontos aleatórios (indicando força mal ajustada ou esforço variável).</li>
              <li>A central exibe código de erro relacionado a percurso ou fim de curso.</li>
            </ul>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">O que fazer</h3>
            <p><strong className="text-white">Não ajuste a força "no chute".</strong> A configuração de força deve ser calibrada para o peso real do portão, e um valor muito alto reduz ou elimina a proteção contra obstáculos. O ajuste deve ser feito por um técnico que conheça o modelo da central e possa reprogramar o percurso e a força com segurança. Em alguns modelos, o próprio manual orienta o reaprendizado do percurso após qualquer alteração mecânica.</p>
          </div>
        ),
      },
      {
        h2: 'Tabela de diagnóstico rápido',
        content: (
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <table className="w-full text-sm border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-white font-bold">Sintoma</th>
                  <th className="text-left p-3 text-white font-bold">Verificação prioritária</th>
                  <th className="text-left p-3 text-white font-bold">Causa provável</th>
                  <th className="text-left p-3 text-white font-bold">Ação segura</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Portão abre alguns centímetros e para; volta a funcionar após alguns minutos</td><td className="p-3">Motor quente? Indicação de força/temperatura na central?</td><td className="p-3">Proteção térmica por esforço excessivo</td><td className="p-3">Não insistir; verificar trilho e balanceamento</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Motor zumbe, mas o portão não sai do lugar</td><td className="p-3">Capacitor de partida (motores AC)</td><td className="p-3">Capacitor fraco ou queimado</td><td className="p-3">Substituir capacitor (técnico)</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Portão começa rápido e perde força no meio</td><td className="p-3">Teste de balanceamento manual</td><td className="p-3">Portão desbalanceado</td><td className="p-3">Corrigir contrapeso, molas ou roldanas</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Portão para em pontos aleatórios</td><td className="p-3">Trilho limpo? Roldanas livres?</td><td className="p-3">Atrito ou obstrução mecânica</td><td className="p-3">Limpar trilho; verificar roldanas</td></tr>
                <tr className="border-b border-slate-800"><td className="p-3 font-semibold text-white">Portão para sempre no mesmo ponto</td><td className="p-3">Fim de curso ou encoder</td><td className="p-3">Fim de curso desregulado</td><td className="p-3">Reprogramar percurso (técnico)</td></tr>
                <tr><td className="p-3 font-semibold text-white">Central exibe código de erro de força</td><td className="p-3">Manual da central</td><td className="p-3">Força mal ajustada ou obstrução</td><td className="p-3">Não aumentar a força sem diagnóstico</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        h2: 'O que NÃO fazer (e por quê)',
        content: (
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">❌ Não aumente a força da central para "resolver" o travamento</h3>
            <p>Aumentar a força pode fazer o portão vencer o obstáculo, mas reduz ou elimina a proteção contra esmagamento e força o motor além do limite, acelerando o desgaste e a queima. Se o portão trava no meio, a causa é esforço ou falha de componente, e não falta de força configurada.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não insista em acionar o portão enquanto ele está quente</h3>
            <p>O protetor térmico está fazendo o papel dele: evitar a queima. Insistir em acionar um motor superaquecido agrava o problema e pode transformar uma proteção temporária em queima definitiva.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não troque o motor sem antes verificar o balanceamento</h3>
            <p>Se o portão está desbalanceado, um motor novo também vai queimar em poucos meses. O balanceamento é a causa raiz, e trocar o motor sem corrigi-lo é gasto desnecessário.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não tente trocar o capacitor sem conhecer a especificação</h3>
            <p>O capacitor armazena carga e exige descarga segura. Além disso, a especificação (uF) precisa ser exata. Uma troca incorreta pode não resolver o problema ou danificar a placa.</p>
            <h3 className="text-lg sm:text-xl font-bold text-white pt-2">❌ Não use óleo comum ou WD-40 como lubrificante</h3>
            <p>Óleos comuns atraem poeira e pioram o atrito a médio prazo, e o WD-40 não foi feito para lubrificar de forma duradoura. Lubrifique apenas os pontos indicados pelo fabricante (por exemplo, rolamentos das roldanas, dobradiças e cremalheira) com graxa adequada, e mantenha o trilho limpo, sem excesso de graxa.</p>
          </div>
        ),
      },
      {
        h2: 'Quando chamar um técnico especializado',
        content: (
          <div className="space-y-4">
            <p>A verificação visual do trilho, o teste de balanceamento (com os cuidados descritos) e a observação do comportamento do portão podem ser feitos por você. Mas alguns cenários exigem diagnóstico profissional:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Capacitor de partida precisa ser substituído — exige descarga segura e especificação correta.</li>
              <li>Desbalanceamento confirmado — exige ajuste de contrapeso, molas ou roldanas, que é serviço de serralheria ou manutenção especializada.</li>
              <li>Proteção térmica recorrente — indica esforço excessivo que precisa ser diagnosticado na origem (trilho, alinhamento, configuração).</li>
              <li>Fim de curso ou encoder desregulado — exige reprogramação com conhecimento do modelo da central.</li>
              <li>Configuração de força precisa ser recalibrada — não deve ser feita "no chute".</li>
              <li>Cheiro de queimado ou superaquecimento persistente — desligue a energia no disjuntor e chame assistência. Pode indicar fiação com mau contato ou bobina sob estresse.</li>
              <li>O equipamento está na garantia — abrir ou mexer nos componentes sem autorização pode anular a garantia.</li>
            </ul>
            <p>A Intelsecsul atende chamados de diagnóstico e manutenção de portões eletrônicos em Curitiba e Região Metropolitana, com avaliação técnica no local antes de qualquer orçamento. A visita identifica se o problema é proteção térmica, capacitor, desbalanceamento, esforço mecânico ou configuração — e apresenta a solução com clareza.</p>
          </div>
        ),
      },
      {
        h2: 'Conclusão',
        content: (
          <div className="space-y-4">
            <p>Portão eletrônico que trava no meio do caminho tem, na grande maioria dos casos, uma causa identificável: proteção térmica (motor superaquece por esforço), capacitor de partida desgastado (perda do impulso inicial), desbalanceamento (motor faz muito mais força), atrito mecânico (trilho sujo, roldanas travadas) ou configuração de força ou fim de curso inadequada.</p>
            <p>A triagem começa pelo que é seguro e não invasivo: teste de balanceamento manual, limpeza do trilho e observação do comportamento do motor (se esquenta, se zumbe, se para no mesmo ponto). E a regra que vale para todos os cenários: não aumente a força da central, não insista com o motor quente, não troque o motor sem verificar o balanceamento e não troque o capacitor sem conhecer a especificação.</p>
            <p>Se a triagem não resolveu, ou se o problema envolve capacitor, fim de curso ou configuração de força, a avaliação de um técnico especializado é o caminho mais seguro. Para que trilho, roldanas e balanceamento sejam revisados antes de o portão parar, veja <Link to="/blog/contrato-manutencao-ou-chamar-quando-quebra" className="text-white underline hover:text-slate-300">vale mais ter contrato de manutenção ou chamar quando quebra</Link>. A Intelsecsul realiza diagnóstico e manutenção de portões eletrônicos em Curitiba e Região Metropolitana, com avaliação no local e orçamento claro antes de qualquer intervenção.</p>
          </div>
        ),
      },
    ],
    relatedQuestions: [
      {
        question: 'Portão eletrônico abre alguns centímetros e para. O que pode ser?',
        answer: 'As causas mais prováveis são proteção térmica (o motor esquenta e a central corta a energia), capacitor de partida fraco (o motor não vence a inércia) ou desbalanceamento (o motor faz força excessiva). Se o portão volta a funcionar após alguns minutos, a proteção térmica está atuando, e a causa raiz é o esforço excessivo, que precisa ser corrigido.',
      },
      {
        question: 'Motor do portão zumbe mas o portão não se move. É o capacitor?',
        answer: 'Pode ser, em motores AC que usam capacitor de partida. O zumbido com ausência de movimento é um dos sintomas clássicos de capacitor fraco ou queimado. No entanto, o mesmo sintoma pode ocorrer se o motor estiver travado mecanicamente, e alguns automatizadores têm motor DC, sem capacitor. O teste com um técnico ajuda a distinguir entre falha elétrica (capacitor) e falha mecânica (travamento).',
      },
      {
        question: 'Portão desbalanceado queima o motor?',
        answer: 'Pode queimar. O desbalanceamento é apontado como uma das principais causas de queima prematura de automatizadores. Quando o portão está desbalanceado, o motor precisa fazer muito mais força, o que leva a superaquecimento e queima da placa ou da bobina. Se o portão está desbalanceado, trocar o motor sem corrigir o balanceamento não resolve.',
      },
      {
        question: 'Como saber se o problema é o capacitor ou a placa?',
        answer: 'O capacitor fraco causa perda de força de partida (o motor zumbe, o portão não sai do lugar ou começa e perde força). A placa com defeito pode causar comportamentos erráticos, erros de leitura de fim de curso ou falhas intermitentes. O diagnóstico preciso exige medição com instrumentos e conhecimento técnico, e não é possível distinguir apenas pelo sintoma.',
      },
      {
        question: 'Posso ajustar a força do portão sozinho?',
        answer: 'Não é recomendado. A configuração de força deve ser calibrada para o peso real do portão. Um valor muito alto reduz ou elimina a proteção contra obstáculos e força o motor além do limite; um valor muito baixo faz o portão parar sem motivo. O ajuste deve ser feito por um técnico que conheça o modelo da central.',
      },
      {
        question: 'Portão que trava no meio do caminho pode ser problema de fim de curso?',
        answer: 'Sim. Se o portão para sempre no mesmo ponto do percurso, o fim de curso (ou encoder) pode estar desregulado ou com mau contato. Nesse caso, a central "acha" que o portão chegou ao fim do curso e interrompe o movimento. A reprogramação do percurso resolve, e deve ser feita por um técnico.',
      },
    ],
    internalLink: {
      text: 'Seu portão está travando no meio do caminho? Precisa de diagnóstico técnico?',
      url: '/servicos/portao-eletronico/',
      linkText: 'Ver Portão Eletrônico',
    },
    whatsappMessage: 'Vim do blog e meu portão trava no meio do caminho',
    ctaFinal: {
      title: 'Seu portão está travando no meio do caminho? Precisa de diagnóstico técnico?',
      text: 'A Intelsecsul realiza diagnóstico e manutenção de portões eletrônicos em Curitiba e Região Metropolitana, com avaliação no local e orçamento claro antes de qualquer intervenção.',
      buttonText: 'Falar no WhatsApp agora',
    },
  },
];


