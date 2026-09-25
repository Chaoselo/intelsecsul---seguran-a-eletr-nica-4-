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
];
