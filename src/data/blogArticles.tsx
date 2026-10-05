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
];
