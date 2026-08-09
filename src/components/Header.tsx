import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, MapPin, Wrench } from 'lucide-react';
import { COMPANY_INFO, SERVICES_LIST, CITIES_LIST } from '../constants';
import { WhatsAppIcon } from './WhatsAppIcon';
import { Logo } from './Logo';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [citiesDropdownOpen, setCitiesDropdownOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setCitiesDropdownOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-[#0A0D14]/95 backdrop-blur-md border-b border-slate-800 shadow-lg text-white">
      {/* Top utility bar - mantido no código para SEO, oculto visualmente em PC e mobile */}
      <div className="sr-only">
        <span>Curitiba - PR e Região Metropolitana - Atendimento e Projetos Personalizados</span>
        <a href={COMPANY_INFO.phoneTel}>{COMPANY_INFO.phoneDisplay}</a>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" onClick={closeMobileMenu} className="flex items-center group py-1">
            <Logo style={{ width: '200px', height: '200px' }} />
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {/* Home Link */}
            <Link
              to="/"
              className={`transition-colors py-2 ${
                isActive('/') ? 'text-[#00A3FF] font-semibold' : 'text-slate-200 hover:text-[#00A3FF]'
              }`}
            >
              Início
            </Link>

            {/* Serviços Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 py-2 transition-colors ${
                  location.pathname.startsWith('/servicos')
                    ? 'text-[#00A3FF] font-semibold'
                    : 'text-slate-200 hover:text-[#00A3FF]'
                }`}
              >
                <span>Serviços</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#00A3FF]' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-[#121824] border border-slate-700/80 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-xs font-semibold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                    Nossas Soluções
                  </div>
                  <div className="divide-y divide-slate-800/60 max-h-[380px] overflow-y-auto custom-scrollbar">
                    {SERVICES_LIST.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/servicos/${service.slug}`}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="block px-3 py-2.5 rounded-lg text-slate-200 hover:bg-[#0091FF]/15 hover:text-[#00C5FF] transition-colors text-xs font-medium"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Cidades Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCitiesDropdownOpen(true)}
              onMouseLeave={() => setCitiesDropdownOpen(false)}
            >
              <Link
                to="/cidades"
                className={`flex items-center gap-1 py-2 transition-colors ${
                  location.pathname.startsWith('/cidades')
                    ? 'text-[#00C5FF] font-semibold'
                    : 'text-slate-200 hover:text-[#00C5FF]'
                }`}
              >
                <span>Cidades Atendidas</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${citiesDropdownOpen ? 'rotate-180 text-[#00C5FF]' : ''}`} />
              </Link>

              {citiesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-[#121824] border border-slate-700/80 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex justify-between items-center px-3 py-1.5">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Região Metropolitana
                    </span>
                    <Link
                      to="/cidades"
                      onClick={() => setCitiesDropdownOpen(false)}
                      className="text-[11px] text-[#00C5FF] hover:underline font-semibold"
                    >
                      Ver todas
                    </Link>
                  </div>
                  <div className="divide-y divide-slate-800/60 max-h-[320px] overflow-y-auto custom-scrollbar">
                    {CITIES_LIST.map((city) => (
                      <Link
                        key={city.slug}
                        to={`/cidades/${city.slug}`}
                        onClick={() => setCitiesDropdownOpen(false)}
                        className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-[#0091FF]/15 hover:text-[#00C5FF] transition-colors text-xs"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Blog Link */}
            <Link
              to="/blog"
              className={`transition-colors py-2 ${
                isActive('/blog') ? 'text-[#00A3FF] font-semibold' : 'text-slate-200 hover:text-[#00A3FF]'
              }`}
            >
              Blog
            </Link>

            {/* Sobre Link */}
            <Link
              to="/sobre"
              className={`transition-colors py-2 ${
                isActive('/sobre') ? 'text-[#00A3FF] font-semibold' : 'text-slate-200 hover:text-[#00A3FF]'
              }`}
            >
              Sobre
            </Link>

            {/* Depoimentos Link */}
            <Link
              to="/depoimentos"
              className={`transition-colors py-2 ${
                isActive('/depoimentos') ? 'text-[#00A3FF] font-semibold' : 'text-slate-200 hover:text-[#00A3FF]'
              }`}
            >
              Depoimentos
            </Link>

            {/* Contato Link */}
            <Link
              to="/contato"
              className={`transition-colors py-2 ${
                isActive('/contato') ? 'text-[#00A3FF] font-semibold' : 'text-slate-200 hover:text-[#00A3FF]'
              }`}
            >
              Contato
            </Link>
          </nav>

          {/* Phone & Highlight CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={COMPANY_INFO.phoneTel}
              className="flex items-center gap-2 text-slate-200 hover:text-[#00C5FF] font-bold text-sm transition-colors py-2 px-3 rounded-lg hover:bg-[#121824]"
              title="Ligar para Intelsecsul"
            >
              <Phone className="w-4 h-4 text-[#0091FF]" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <Link
              to="/contato"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-bold text-white bg-[#0091FF] hover:bg-[#0081E6] active:bg-[#0070CC] transition-all shadow-md hover:shadow-[#0091FF]/30"
            >
              Solicitar Orçamento
            </Link>
          </div>

          {/* Mobile menu hamburger toggle */}
          <div className="flex items-center lg:hidden gap-2">
            <a
              href={COMPANY_INFO.phoneTel}
              className="p-2 rounded-lg bg-slate-800 text-sky-400 hover:bg-slate-700"
              aria-label="Ligar por telefone"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`block px-3 py-2.5 rounded-lg font-medium text-base ${
                isActive('/') ? 'bg-sky-600/20 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              Início
            </Link>

            {/* Mobile Services Collapsible */}
            <div>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-medium text-base text-slate-200 hover:bg-slate-800"
              >
                <span>Serviços</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-sky-400' : ''}`} />
              </button>
              {servicesDropdownOpen && (
                <div className="ml-3 pl-3 border-l border-slate-800 my-1 space-y-1">
                  {SERVICES_LIST.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/servicos/${s.slug}`}
                      onClick={closeMobileMenu}
                      className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:text-sky-400 hover:bg-slate-800/80"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Cities Collapsible */}
            <div>
              <button
                onClick={() => setCitiesDropdownOpen(!citiesDropdownOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-medium text-base text-slate-200 hover:bg-slate-800"
              >
                <span>Cidades Atendidas</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${citiesDropdownOpen ? 'rotate-180 text-sky-400' : ''}`} />
              </button>
              {citiesDropdownOpen && (
                <div className="ml-3 pl-3 border-l border-slate-800 my-1 space-y-1">
                  <Link
                    to="/cidades"
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 rounded-md text-xs font-bold text-sky-400 hover:bg-slate-800 uppercase tracking-wider"
                  >
                    Ver Hub de Cidades →
                  </Link>
                  {CITIES_LIST.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/cidades/${c.slug}`}
                      onClick={closeMobileMenu}
                      className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:text-sky-400 hover:bg-slate-800/80"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/blog"
              onClick={closeMobileMenu}
              className={`block px-3 py-2.5 rounded-lg font-medium text-base ${
                isActive('/blog') ? 'bg-sky-600/20 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/sobre"
              onClick={closeMobileMenu}
              className={`block px-3 py-2.5 rounded-lg font-medium text-base ${
                isActive('/sobre') ? 'bg-sky-600/20 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              Sobre a Intelsecsul
            </Link>

            <Link
              to="/depoimentos"
              onClick={closeMobileMenu}
              className={`block px-3 py-2.5 rounded-lg font-medium text-base ${
                isActive('/depoimentos') ? 'bg-sky-600/20 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              Depoimentos
            </Link>

            <Link
              to="/contato"
              onClick={closeMobileMenu}
              className={`block px-3 py-2.5 rounded-lg font-medium text-base ${
                isActive('/contato') ? 'bg-sky-600/20 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-800'
              }`}
            >
              Contato
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-800 space-y-2">
            <a
              href={getWhatsAppUrl(location.pathname)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-white bg-[#25D366] hover:bg-[#20bd5a] font-bold text-sm shadow-sm"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>Atendimento via WhatsApp</span>
            </a>

            <a
              href={COMPANY_INFO.phoneTel}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-slate-200 bg-[#121824] border border-slate-700 font-semibold text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#0091FF]" />
              <span>Ligar: {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
