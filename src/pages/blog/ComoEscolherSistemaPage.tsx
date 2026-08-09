import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPostTemplate } from '../../components/BlogPostTemplate';
import { ArrowRight } from 'lucide-react';

export const ComoEscolherSistemaPage: React.FC = () => {
  return (
    <BlogPostTemplate
      title="Como Escolher o Sistema de Segurança Ideal | Blog Intelsecsul"
      metaDescription="Guia para escolher entre câmeras, alarme, cerca elétrica e controle de acesso, considerando o perfil do seu imóvel e o orçamento disponível."
      h1="Como escolher o sistema de segurança ideal para sua casa ou empresa"
      category="Guia Prático"
      readTime="4 min de leitura"
      publishedDate="[DATA DE PUBLICAÇÃO]"
      intro="Com tantas opções disponíveis — câmeras, alarme monitorado, cerca elétrica, controle de acesso — é comum sentir dificuldade para saber por onde começar. Este guia ajuda a organizar a decisão em passos simples."
      sections={[
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
                  to="/comparativos/compra-x-locacao-de-equipamentos"
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
      ]}
      ctaFinal={{
        title: 'Ainda com dúvidas sobre qual sistema escolher?',
        text: 'Fale com a Intelsecsul e receba uma orientação gratuita para o seu caso.',
        buttonText: 'Falar no WhatsApp agora',
      }}
    />
  );
};
