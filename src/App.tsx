import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { CitiesHub } from './pages/CitiesHub';
import { ServicosHubPage } from './pages/ServicosHubPage';
import { PlaceholderPage } from './components/PlaceholderPage';
import { CamerasSegurancaPage } from './pages/services/CamerasSegurancaPage';
import { CamerasManutencaoPage } from './pages/services/CamerasManutencaoPage';
import { AlarmeMonitoradoPage } from './pages/services/AlarmeMonitoradoPage';
import { CercaEletricaPage } from './pages/services/CercaEletricaPage';
import { AluguelCamerasPage } from './pages/services/AluguelCamerasPage';
import { ControleAcessoPage } from './pages/services/ControleAcessoPage';
import { PortaoAutomaticoPage } from './pages/services/PortaoAutomaticoPage';
import { PortaoManutencaoPage } from './pages/services/PortaoManutencaoPage';
import { ControleRemotoPortaoPage } from './pages/services/ControleRemotoPortaoPage';
import { PortasAutomaticasPage } from './pages/services/PortasAutomaticasPage';
import { InterfoniaPage } from './pages/services/InterfoniaPage';
import { CancelasCatracasPage } from './pages/services/CancelasCatracasPage';
import { FechadurasEletronicasPage } from './pages/services/FechadurasEletronicasPage';
import { ManutencaoPage } from './pages/services/ManutencaoPage';
import { ContratoManutencaoPage } from './pages/services/ContratoManutencaoPage';
import { CamerasResidencialPage } from './pages/services/segments/CamerasResidencialPage';
import { CamerasComercialPage } from './pages/services/segments/CamerasComercialPage';
import { CamerasCondominioPage } from './pages/services/segments/CamerasCondominioPage';
import { AlarmeResidencialPage } from './pages/services/segments/AlarmeResidencialPage';
import { AlarmeEmpresarialPage } from './pages/services/segments/AlarmeEmpresarialPage';
import { ControleBiometriaPage } from './pages/services/segments/ControleBiometriaPage';
import { ControleFacialPage } from './pages/services/segments/ControleFacialPage';
import { CercaResidencialPage } from './pages/services/segments/CercaResidencialPage';
import { CercaCondominioPage } from './pages/services/segments/CercaCondominioPage';
import { InterfoniaCondominioPage } from './pages/services/segments/InterfoniaCondominioPage';
import { SobrePage } from './pages/SobrePage';
import { PorQueEscolherPage } from './pages/PorQueEscolherPage';
import { FaqPage } from './pages/FaqPage';
import { GlossarioPage } from './pages/GlossarioPage';
import { ContatoPage } from './pages/ContatoPage';
import { ComparativosHubPage } from './pages/ComparativosHubPage';
import { ComparativoCompraAluguelPage } from './pages/ComparativoCompraAluguelPage';
import { ComparativoVerisurePage } from './pages/ComparativoVerisurePage';
import { BlogHubPage } from './pages/BlogHubPage';
import { BlogPostPage } from './pages/blog/BlogPostPage';
import { CuritibaPage } from './pages/cities/CuritibaPage';
import { PinhaisPage } from './pages/cities/PinhaisPage';
import { SaoJoseDosPinhaisPage } from './pages/cities/SaoJoseDosPinhaisPage';
import { AraucariaPage } from './pages/cities/AraucariaPage';
import { AlmiranteTamandarePage } from './pages/cities/AlmiranteTamandarePage';
import { ColomboPage } from './pages/cities/ColomboPage';
import { CampoLargoPage } from './pages/cities/CampoLargoPage';
import { FazendaRioGrandePage } from './pages/cities/FazendaRioGrandePage';
import { CampoMagroPage } from './pages/cities/CampoMagroPage';
import { QuatroBarrasPage } from './pages/cities/QuatroBarrasPage';
import { CampinaGrandeDoSulPage } from './pages/cities/CampinaGrandeDoSulPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useGTMPageTracking } from './hooks/useGTMPageTracking';
import { CookieConsentBanner } from './components/CookieConsentBanner';

// Scroll to top automatically on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function GTMPageTracker() {
  useGTMPageTracking();
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GTMPageTracker />
      <div className="flex flex-col min-h-screen bg-[#0A0D14] text-slate-200 antialiased font-sans">
        
        {/* Global Header */}
        <Header />

        {/* Main Route Content */}
        <main className="flex-grow">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />

            {/* Cidades Hub & Specific Cities */}
            <Route path="/cidades" element={<CitiesHub />} />
            <Route path="/cidades/curitiba" element={<CuritibaPage />} />
            <Route path="/cidades/pinhais" element={<PinhaisPage />} />
            <Route path="/cidades/sao-jose-dos-pinhais" element={<SaoJoseDosPinhaisPage />} />
            <Route path="/cidades/araucaria" element={<AraucariaPage />} />
            <Route path="/cidades/almirante-tamandare" element={<AlmiranteTamandarePage />} />
            <Route path="/cidades/colombo" element={<ColomboPage />} />
            <Route path="/cidades/campo-largo" element={<CampoLargoPage />} />
            <Route path="/cidades/fazenda-rio-grande" element={<FazendaRioGrandePage />} />
            <Route path="/cidades/campo-magro" element={<CampoMagroPage />} />
            <Route path="/cidades/quatro-barras" element={<QuatroBarrasPage />} />
            <Route path="/cidades/campina-grande-do-sul" element={<CampinaGrandeDoSulPage />} />
            <Route path="/cidades/:slug" element={<PlaceholderPage type="city" />} />

            {/* Services Routes */}
            <Route path="/servicos" element={<ServicosHubPage />} />
            <Route path="/servicos/cameras-de-seguranca" element={<CamerasSegurancaPage />} />
            <Route path="/servicos/cameras-de-seguranca/manutencao" element={<CamerasManutencaoPage />} />
            <Route path="/servicos/cameras-de-seguranca/residencial" element={<CamerasResidencialPage />} />
            <Route path="/servicos/cameras-de-seguranca/comercial" element={<CamerasComercialPage />} />
            <Route path="/servicos/cameras-de-seguranca/condominio" element={<CamerasCondominioPage />} />

            <Route path="/servicos/instalacao-de-alarmes" element={<AlarmeMonitoradoPage />} />
            <Route path="/servicos/instalacao-de-alarmes/residencial" element={<AlarmeResidencialPage />} />
            <Route path="/servicos/instalacao-de-alarmes/empresarial" element={<AlarmeEmpresarialPage />} />

            {/* Fallback redirects for legacy URLs */}
            <Route path="/servicos/alarme-monitorado" element={<Navigate to="/servicos/instalacao-de-alarmes/" replace />} />
            <Route path="/servicos/alarme-monitorado/residencial" element={<Navigate to="/servicos/instalacao-de-alarmes/residencial/" replace />} />
            <Route path="/servicos/alarme-monitorado/empresarial" element={<Navigate to="/servicos/instalacao-de-alarmes/empresarial/" replace />} />

            <Route path="/servicos/cerca-eletrica" element={<CercaEletricaPage />} />
            <Route path="/servicos/cerca-eletrica/residencial" element={<CercaResidencialPage />} />
            <Route path="/servicos/cerca-eletrica/condominio" element={<CercaCondominioPage />} />

            <Route path="/servicos/controle-de-acesso" element={<ControleAcessoPage />} />
            <Route path="/servicos/controle-de-acesso/biometria" element={<ControleBiometriaPage />} />
            <Route path="/servicos/controle-de-acesso/reconhecimento-facial" element={<ControleFacialPage />} />

            <Route path="/servicos/portao-automatico" element={<PortaoAutomaticoPage />} />
            <Route path="/servicos/portao-automatico/manutencao" element={<PortaoManutencaoPage />} />
            <Route path="/servicos/portao-eletronico" element={<Navigate to="/servicos/portao-automatico/" replace />} />
            <Route path="/servicos/controle-remoto-para-portao" element={<ControleRemotoPortaoPage />} />
            <Route path="/servicos/portas-automaticas" element={<PortasAutomaticasPage />} />

            <Route path="/servicos/interfonia" element={<InterfoniaPage />} />
            <Route path="/servicos/interfones" element={<Navigate to="/servicos/interfonia/" replace />} />
            <Route path="/servicos/interfonia/condominio" element={<InterfoniaCondominioPage />} />

            <Route path="/servicos/cancelas-e-catracas" element={<CancelasCatracasPage />} />
            <Route path="/servicos/fechaduras-eletronicas" element={<FechadurasEletronicasPage />} />
            <Route path="/servicos/fechaduras-eletromagneticas" element={<Navigate to="/servicos/fechaduras-eletronicas/" replace />} />
            <Route path="/servicos/manutencao" element={<ManutencaoPage />} />
            <Route path="/servicos/contrato-de-manutencao" element={<ContratoManutencaoPage />} />
            <Route path="/servicos/manutencao-de-sistemas-de-seguranca" element={<Navigate to="/servicos/manutencao/" replace />} />
            <Route path="/servicos/aluguel-de-cameras-de-seguranca" element={<AluguelCamerasPage />} />
            <Route path="/servicos/locacao-de-cameras-de-seguranca" element={<Navigate to="/servicos/aluguel-de-cameras-de-seguranca/" replace />} />
            <Route path="/servicos/locacao-de-equipamentos-de-seguranca" element={<Navigate to="/servicos/aluguel-de-cameras-de-seguranca/" replace />} />
            <Route path="/servicos/locacao-de-equipamentos" element={<Navigate to="/servicos/aluguel-de-cameras-de-seguranca/" replace />} />
            <Route path="/servicos/:slug" element={<PlaceholderPage type="service" />} />

            {/* Institutional & Content Routes */}
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/por-que-escolher-a-intelsecsul" element={<PorQueEscolherPage />} />
            <Route path="/depoimentos" element={<Navigate to="/" replace />} />
            <Route path="/perguntas-frequentes" element={<FaqPage />} />
            <Route path="/faq" element={<Navigate to="/perguntas-frequentes/" replace />} />
            <Route path="/glossario" element={<GlossarioPage />} />
            
            {/* Comparativos Routes */}
            <Route path="/comparativos" element={<ComparativosHubPage />} />
            <Route path="/comparativos/compra-x-aluguel-de-cameras" element={<ComparativoCompraAluguelPage />} />
            <Route path="/comparativos/compra-x-locacao-de-equipamentos" element={<Navigate to="/comparativos/compra-x-aluguel-de-cameras/" replace />} />
            <Route path="/comparativos/intelsecsul-x-verisure" element={<ComparativoVerisurePage />} />

            {/* Blog Routes */}
            <Route path="/blog" element={<BlogHubPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />

            <Route path="/contato" element={<ContatoPage />} />

            {/* Catch-all Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />

        {/* Cookie Consent Banner */}
        <CookieConsentBanner />

      </div>
    </BrowserRouter>
  );
}
