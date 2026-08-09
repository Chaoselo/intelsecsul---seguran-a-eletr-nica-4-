import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  Users,
  Sparkles,
  Zap,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_INFO, CITIES_LIST, SERVICES_LIST } from '../constants';
import { WhatsAppIcon } from '../components/WhatsAppIcon';
import { useDocumentMeta, LOCAL_BUSINESS_SCHEMA } from '../hooks/useDocumentMeta';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ContatoPage: React.FC = () => {
  useDocumentMeta({
    title: 'Contato e Orçamento Gratuito | Intelsecsul Segurança Eletrônica em Curitiba',
    description: 'Solicite um orçamento sem compromisso para câmeras, alarmes, cercas elétricas e controle de acesso em Curitiba e Região Metropolitana. Fale conosco.',
    jsonLdSchema: LOCAL_BUSINESS_SCHEMA,
  });

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    cidade: 'Curitiba',
    servico: 'Câmeras de Segurança',
    mensagem: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  // Phone Mask helper (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    let formatted = value;
    if (value.length > 2) {
      formatted = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    }
    if (value.length > 7) {
      formatted = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    }

    setFormData((prev) => ({ ...prev, telefone: formatted }));
    if (formErrors.telefone) {
      setFormErrors((prev) => ({ ...prev, telefone: '' }));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.nome.trim()) {
      errors.nome = 'Por favor, informe seu nome completo.';
    }
    if (!formData.telefone.trim() || formData.telefone.length < 14) {
      errors.telefone = 'Por favor, informe um telefone/WhatsApp válido.';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Por favor, informe um e-mail válido.';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setSubmitted(true);
  };

  // Build custom WhatsApp message from form submission
  const customWhatsappMsg = `Olá! Acabei de enviar uma solicitação pelo site:
- Nome: ${formData.nome}
- Telefone: ${formData.telefone}
- Cidade: ${formData.cidade}
- Serviço: ${formData.servico}
${formData.mensagem ? `- Detalhes: ${formData.mensagem}` : ''}`;

  const whatsappDirectUrl = getWhatsAppUrl('/contato', customWhatsappMsg);
  const generalWhatsappUrl = getWhatsAppUrl('/contato');

  return (
    <div className="bg-[#0A0D14] text-slate-200 font-sans selection:bg-[#0091FF] selection:text-white min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#0A0D14] text-white py-12 sm:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
            <Link to="/" className="hover:text-[#00C5FF] transition-colors">Início</Link>
            <span>/</span>
            <span className="text-slate-200 font-medium">Contato</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0091FF]/10 text-[#00C5FF] text-xs font-semibold mb-4 border border-[#0091FF]/30">
              <Sparkles className="w-3.5 h-3.5 text-[#00C5FF]" />
              <span>Orçamento Sem Compromisso</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
              Fale com a Intelsecsul
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Atendimento em Curitiba e toda a Região Metropolitana. Solicite uma visita técnica ou um orçamento personalizado para o seu imóvel.
            </p>
          </div>

        </div>
      </section>


      {/* ================= MAIN CONTENT: FORM + SIDEBAR ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT / MAIN: FORM (8 cols) */}
          <div className="lg:col-span-7 bg-[#121824] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
            
            {!submitted ? (
              <>
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Solicitar Orçamento Gratuito
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400">
                    Preencha os dados abaixo e nossa equipe técnica retornará rapidamente.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nome Completo */}
                  <div>
                    <label htmlFor="nome" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Ex: João da Silva"
                      className={`w-full px-4 py-3 rounded-xl bg-[#0A0D14] border ${
                        formErrors.nome ? 'border-red-500' : 'border-slate-800 focus:border-[#0091FF]'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#0091FF] transition-all`}
                    />
                    {formErrors.nome && (
                      <p className="text-xs text-red-400 mt-1.5 font-medium">{formErrors.nome}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Telefone / WhatsApp */}
                    <div>
                      <label htmlFor="telefone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="text"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handlePhoneChange}
                        placeholder="(41) 99999-9999"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0A0D14] border ${
                          formErrors.telefone ? 'border-red-500' : 'border-slate-800 focus:border-[#0091FF]'
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#0091FF] transition-all`}
                      />
                      {formErrors.telefone && (
                        <p className="text-xs text-red-400 mt-1.5 font-medium">{formErrors.telefone}</p>
                      )}
                    </div>

                    {/* E-mail */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seuemail@exemplo.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#0A0D14] border ${
                          formErrors.email ? 'border-red-500' : 'border-slate-800 focus:border-[#0091FF]'
                        } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#0091FF] transition-all`}
                      />
                      {formErrors.email && (
                        <p className="text-xs text-red-400 mt-1.5 font-medium">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Cidade */}
                    <div>
                      <label htmlFor="cidade" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Cidade *
                      </label>
                      <select
                        id="cidade"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0D14] border border-slate-800 focus:border-[#0091FF] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#0091FF] transition-all cursor-pointer"
                      >
                        {CITIES_LIST.map((city) => (
                          <option key={city.slug} value={city.name} className="bg-[#0A0D14]">
                            {city.name}
                          </option>
                        ))}
                        <option value="Outra" className="bg-[#0A0D14]">Outra cidade</option>
                      </select>
                    </div>

                    {/* Serviço de interesse */}
                    <div>
                      <label htmlFor="servico" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Serviço de interesse *
                      </label>
                      <select
                        id="servico"
                        name="servico"
                        value={formData.servico}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#0A0D14] border border-slate-800 focus:border-[#0091FF] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#0091FF] transition-all cursor-pointer"
                      >
                        {SERVICES_LIST.map((srv) => (
                          <option key={srv.slug} value={srv.title} className="bg-[#0A0D14]">
                            {srv.title}
                          </option>
                        ))}
                        <option value="Locação de Equipamentos" className="bg-[#0A0D14]">
                          Locação de Equipamentos
                        </option>
                        <option value="Outro / Manutenção" className="bg-[#0A0D14]">
                          Outro / Manutenção
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label htmlFor="mensagem" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Mensagem / Detalhes do Imóvel
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      placeholder="Descreva o tipo do imóvel (casa, comércio, condomínio) e detalhes do projeto..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0D14] border border-slate-800 focus:border-[#0091FF] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-1 focus:ring-[#0091FF] transition-all resize-none"
                    />
                  </div>

                  {/* Botão de Envio */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-white bg-[#0091FF] hover:bg-[#0081E6] active:bg-[#0070CC] transition-all shadow-lg hover:shadow-[#0091FF]/30 text-sm uppercase tracking-wider cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar solicitação de orçamento</span>
                  </button>
                </form>
              </>
            ) : (
              /* SUCCESS STATE */
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h2 className="text-2xl font-bold text-white mb-3">
                  Solicitação Enviada com Sucesso!
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8">
                  Obrigado, <strong className="text-white">{formData.nome}</strong>! Recebemos sua solicitação para <strong className="text-white">{formData.servico}</strong> em <strong className="text-white">{formData.cidade}</strong>. Nossa equipe entrará em contato em breve.
                </p>

                <div className="space-y-4 max-w-md mx-auto">
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-xl hover:shadow-[#25D366]/30 text-sm"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                    <span>Enviar também mensagem no WhatsApp para atendimento imediato</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        nome: '',
                        telefone: '',
                        email: '',
                        cidade: 'Curitiba',
                        servico: 'Câmeras de Segurança',
                        mensagem: '',
                      });
                    }}
                    className="text-xs text-slate-400 hover:text-white underline transition-colors cursor-pointer"
                  >
                    Preencher um novo formulário
                  </button>
                </div>
              </div>
            )}

          </div>


          {/* RIGHT SIDEBAR: INFORMAÇÕES DE CONTATO & BENEFÍCIOS (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* CARD: CONTATO DIRETO */}
            <div className="bg-[#121824] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
              <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-4">
                Canais de Atendimento Direto
              </h2>

              <div className="space-y-4 text-sm">
                
                {/* Telefone / WhatsApp */}
                <a
                  href={generalWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0A0D14] border border-slate-800 hover:border-[#25D366] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                    <WhatsAppIcon className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">WhatsApp / Telefone</span>
                    <strong className="text-white text-base group-hover:text-[#25D366] transition-colors">
                      {COMPANY_INFO.phoneDisplay}
                    </strong>
                  </div>
                </a>

                {/* E-mail */}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0A0D14] border border-slate-800 hover:border-[#0091FF] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0091FF]/20 text-[#00C5FF] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">E-mail Comercial</span>
                    <strong className="text-white text-sm group-hover:text-[#00C5FF] transition-colors">
                      {COMPANY_INFO.email}
                    </strong>
                  </div>
                </a>

                {/* Horário de atendimento */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0A0D14] border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#00C5FF]" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Horário de Atendimento</span>
                    <p className="text-xs text-slate-200 mt-0.5 leading-snug">
                      Segunda a Sexta: 08h às 18h<br />
                      <span className="text-[#00C5FF] font-semibold">Suporte Emergencial 24h</span>
                    </p>
                  </div>
                </div>

                {/* Cidade Sede */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#0A0D14] border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#00C5FF]" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Cidade Sede</span>
                    <p className="text-xs text-slate-200 mt-0.5 leading-snug">
                      <strong>Curitiba - PR</strong><br />
                      Atendimento em toda a Região Metropolitana
                    </p>
                  </div>
                </div>

              </div>
            </div>


            {/* CARDS: BENEFÍCIOS */}
            <div className="bg-[#121824] rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#00C5FF]">
                Por que solicitar orçamento conosco?
              </h3>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0A0D14] border border-slate-800/80">
                  <ShieldCheck className="w-5 h-5 text-[#00C5FF] shrink-0" />
                  <div>
                    <strong className="text-xs text-white block">Visita Técnica Gratuita</strong>
                    <span className="text-[11px] text-slate-400">Avaliamos seu imóvel sem custo prévio</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0A0D14] border border-slate-800/80">
                  <Users className="w-5 h-5 text-[#00C5FF] shrink-0" />
                  <div>
                    <strong className="text-xs text-white block">Equipe Própria Certificada</strong>
                    <span className="text-[11px] text-slate-400">Instaladores experientes e padronizados</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#0A0D14] border border-slate-800/80">
                  <Zap className="w-5 h-5 text-[#00C5FF] shrink-0" />
                  <div>
                    <strong className="text-xs text-white block">Resposta Rápida</strong>
                    <span className="text-[11px] text-slate-400">Agilidade no envio de propostas e atendimento</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
