import React from 'react';
import { BlogPostTemplate } from '../../components/BlogPostTemplate';

export const CercaEletricaConcertinaDiferencaPage: React.FC = () => {
  return (
    <BlogPostTemplate
      title="Cerca Elétrica x Concertina: Qual a Diferença e Qual Protege Mais? | Intelsecsul"
      metaDescription="Entenda a diferença entre cerca elétrica e concertina, qual oferece mais proteção, o que diz a legislação e qual escolher para residência, comércio ou indústria."
      h1="Cerca elétrica x concertina: qual a diferença?"
      category="Cerca Elétrica"
      readTime="4 min de leitura"
      publishedDate="2026-08-29"
      intro={`A diferença central é o princípio de funcionamento: a cerca elétrica usa fios energizados por uma central que aplica pulsos de choque (de alerta, não letais quando instalada corretamente), enquanto a concertina é uma barreira física cortante, feita de lâminas de aço em espiral, que impede a passagem por dano físico direto a quem tenta escalar. Uma depende de eletricidade para funcionar; a outra funciona mesmo sem energia. Nenhuma das duas é "melhor" de forma absoluta — a escolha certa depende do tipo de imóvel, da altura do muro disponível e do nível de dissuasão que você precisa.`}
      sections={[
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
      ]}
      relatedQuestions={[
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
      ]}
      internalLink={{
        text: 'Deseja proteger o perímetro da sua casa, condomínio ou empresa?',
        url: '/servicos/cerca-eletrica/',
        linkText: 'Ver Cerca Elétrica',
      }}
      whatsappMessage="Solicitar orçamento de cerca elétrica"
      ctaFinal={{
        title: 'Proteja o perímetro do seu imóvel com segurança',
        text: 'Entre em contato com a Intelsecsul para uma avaliação técnica gratuita e orçamento de cerca elétrica.',
        buttonText: 'Falar no WhatsApp agora',
      }}
    />
  );
};
