import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST, CITIES_LIST } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Logo } from './Logo';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const whatsappUrl = getWhatsAppUrl(location.pathname);

  return (
    <footer className="bg-[#0A0D14] text-slate-300 border-t border-slate-800">
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Mission column (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center group">
              <Logo style={{ width: '120px', height: '120px' }} />
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Especialistas em projetos, instalação e manutenção de sistemas de segurança eletrônica para imóveis residenciais, comerciais e condomínios em Curitiba e Região Metropolitana. Equipe técnica própria e atendimento dedicado.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0091FF] shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0091FF] shrink-0" />
                <a href={COMPANY_INFO.phoneTel} className="hover:text-[#00C5FF] transition-colors font-medium">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0091FF] shrink-0" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Serviços */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-[#0091FF] pl-2">
              Serviços
            </h3>
            <ul className="space-y-2 text-xs">
              {SERVICES_LIST.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/servicos/${s.slug}/`}
                    className="hover:text-[#00C5FF] transition-colors flex items-center gap-1 group"
                  >
                    <span className="text-slate-500 group-hover:text-[#00C5FF] transition-colors">›</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Cidades Atendidas */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-[#0091FF] pl-2">
              Cidades Atendidas
            </h3>
            <ul className="space-y-2 text-xs">
              {CITIES_LIST.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/cidades/${c.slug}/`}
                    className="hover:text-[#00C5FF] transition-colors flex items-center gap-1 group"
                  >
                    <span className="text-slate-500 group-hover:text-[#00C5FF] transition-colors">›</span>
                    <span>{c.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/cidades/"
                  className="text-[#00C5FF] font-bold hover:underline inline-flex items-center gap-1 pt-1"
                >
                  <span>Ver todas as 11 cidades</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Institucional & Contato */}
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-2 border-[#0091FF] pl-2">
              Institucional
            </h3>
            <ul className="space-y-2.5 text-xs mb-6">
              <li>
                <Link to="/sobre/" className="hover:text-[#00C5FF] transition-colors">
                  Sobre a Empresa
                </Link>
              </li>
              <li>
                <Link to="/por-que-escolher-a-intelsecsul/" className="hover:text-[#00C5FF] transition-colors">
                  Por Que Nos Escolher
                </Link>
              </li>
              <li>
                <Link to="/depoimentos/" className="hover:text-[#00C5FF] transition-colors">
                  Depoimentos de Clientes
                </Link>
              </li>
              <li>
                <Link to="/perguntas-frequentes/" className="hover:text-[#00C5FF] transition-colors">
                  Perguntas Frequentes (FAQ)
                </Link>
              </li>
              <li>
                <Link to="/glossario/" className="hover:text-[#00C5FF] transition-colors">
                  Glossário Técnico
                </Link>
              </li>
              <li>
                <Link to="/comparativos/" className="hover:text-[#00C5FF] transition-colors">
                  Comparativos de Serviços
                </Link>
              </li>
              <li>
                <Link to="/blog/" className="hover:text-[#00C5FF] transition-colors">
                  Blog e Dicas de Segurança
                </Link>
              </li>
              <li>
                <Link to="/contato/" className="hover:text-[#00C5FF] transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>

            <div className="p-3.5 rounded-xl bg-[#121824] border border-slate-700/80">
              <span className="text-xs font-bold text-white block mb-1">
                Precisa de um orçamento?
              </span>
              <p className="text-[11px] text-slate-300 mb-2">
                Atendimento rápido para Curitiba e região.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span>Solicitar via WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-[#05070A] py-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p>© {currentYear} {COMPANY_INFO.name} Segurança Eletrônica. Todos os direitos reservados.</p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Sediada em Curitiba (PR) — Atendimento em toda a Região Metropolitana de Curitiba.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-slate-400 text-xs">
            <Link to="/sobre/" className="hover:text-white transition-colors">Sobre</Link>
            <span>•</span>
            <Link to="/perguntas-frequentes/" className="hover:text-white transition-colors">FAQ</Link>
            <span>•</span>
            <Link to="/glossario/" className="hover:text-white transition-colors">Glossário</Link>
            <span>•</span>
            <Link to="/comparativos/" className="hover:text-white transition-colors">Comparativos</Link>
            <span>•</span>
            <Link to="/blog/" className="hover:text-white transition-colors">Blog</Link>
            <span>•</span>
            <Link to="/servicos/manutencao/" className="hover:text-white transition-colors">Serviços</Link>
            <span>•</span>
            <Link to="/cidades/" className="hover:text-white transition-colors">Cidades</Link>
            <span>•</span>
            <Link to="/contato/" className="hover:text-white transition-colors">Contato</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
