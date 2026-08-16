import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  ArrowRight, 
  BookOpen, 
  Calendar, 
  Clock, 
  ChevronRight
} from 'lucide-react';
import { BLOG_ARTICLES } from '../data/blogArticles';
import { COMPANY_INFO } from '../constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { useDocumentMeta, buildBreadcrumbSchema } from '../hooks/useDocumentMeta';

export const BlogHubPage: React.FC = () => {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Início', url: '/' },
    { name: 'Blog', url: '/blog/' }
  ]);

  useDocumentMeta({
    title: 'Blog Intelsecsul | Dicas de Segurança Eletrônica',
    description: 'Conteúdo sobre câmeras, alarme, controle de acesso e segurança eletrônica para residências, condomínios e empresas em Curitiba e região.',
    canonicalUrl: 'https://intelsecsul.com.br/blog/',
    jsonLdSchema: breadcrumbSchema,
  });

  const whatsappUrl = COMPANY_INFO.whatsappUrlDefault;

  return (
    <div className="bg-[#0A0D14] text-slate-200 font-sans selection:bg-[#0091FF] selection:text-white">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#0A0D14] text-white py-12 sm:py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-[#00C5FF] transition-colors">Início</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-slate-200 font-medium">Blog</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-6 border border-[#0091FF]/30">
              <BookOpen className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Conhecimento & Guias</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Blog Intelsecsul
            </h1>

            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
              Dicas e guias sobre segurança eletrônica para ajudar você a tomar a melhor decisão para sua casa, condomínio ou empresa.
            </p>
          </div>

        </div>
      </section>

      {/* ================= GRID DE ARTIGOS ================= */}
      <section className="py-12 sm:py-16 bg-[#0E131F] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Artigos Recentes
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Aprenda a proteger seu imóvel com dicas práticas de nossos especialistas
              </p>
            </div>
            
            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#141A29] text-slate-300 border border-slate-800">
              {BLOG_ARTICLES.length} artigos publicados
            </span>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {BLOG_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="group p-6 sm:p-8 rounded-2xl bg-[#121824] border border-slate-800 hover:border-[#0091FF]/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-xl hover:shadow-[#0091FF]/5"
              >
                <div>
                  {/* Category & Meta info */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs">
                    <span className="px-3 py-1 rounded-full bg-[#0091FF]/10 text-[#00C5FF] font-semibold border border-[#0091FF]/30">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-3 text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        <span>{article.publishedDate}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00C5FF] transition-colors mb-3 leading-snug">
                    <Link to={article.slug}>
                      {article.h1}
                    </Link>
                  </h3>

                  {/* Summary */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                {/* Read button link */}
                <div className="pt-4 border-t border-slate-800/80">
                  <Link
                    to={article.slug}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#00C5FF] group-hover:text-white transition-colors"
                  >
                    <span>Ler artigo completo</span>
                    <ArrowRight className="w-4 h-4 text-[#00C5FF] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="py-16 sm:py-20 bg-[#0A0D14] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#121826] to-[#0E131F] border border-slate-800 shadow-2xl relative">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-6 border border-[#0091FF]/30">
              <Shield className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Consultoria em Segurança</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              Precisa de ajuda para escolher a solução certa?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Nossa equipe técnica analisa seu imóvel em Curitiba e Região Metropolitana e apresenta a melhor opção para seu orçamento.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-100 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] transition-all text-base shadow-lg hover:shadow-[#25D366]/20"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>Falar no WhatsApp agora</span>
              </a>

              <Link
                to="/contato/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-[#1E2638] hover:bg-[#28334A] transition-all text-base border border-slate-700"
              >
                <span>Enviar mensagem</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

