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
    publishedDate: '[DATA DE PUBLICAÇÃO]',
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
    publishedDate: '[DATA DE PUBLICAÇÃO]',
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
    publishedDate: '[DATA DE PUBLICAÇÃO]',
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
    publishedDate: '[DATA DE PUBLICAÇÃO]',
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
];
