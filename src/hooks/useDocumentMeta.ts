import { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { TESTIMONIALS_LIST } from '../constants';
export { buildBreadcrumbSchema } from '../utils/schema';

export interface SEOOptions {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  jsonLdSchema?: Record<string, any> | Array<Record<string, any>>;
}

const DEFAULT_OG_IMAGE = 'https://intelsecsul.com.br/og-image.jpg';
const DOMAIN = 'https://intelsecsul.com.br';

export function normalizeCanonicalUrl(urlOrPath?: string): string {
  if (!urlOrPath || urlOrPath === '/' || urlOrPath === DOMAIN || urlOrPath === `${DOMAIN}/`) {
    return `${DOMAIN}/`;
  }
  let path = urlOrPath;
  if (path.startsWith(DOMAIN)) {
    path = path.slice(DOMAIN.length);
  }
  // Strip trailing slash first to handle aliases cleanly
  const trimmed = path.replace(/\/+$/, '');
  const aliasCanonicalMap: Record<string, string> = {
    '/faq': '/perguntas-frequentes',
    '/servicos/interfones': '/servicos/interfonia',
    '/servicos/manutencao-de-sistemas-de-seguranca': '/servicos/manutencao',
    '/servicos/alarme-monitorado': '/servicos/instalacao-de-alarmes',
    '/servicos/alarme-monitorado/residencial': '/servicos/instalacao-de-alarmes/residencial',
    '/servicos/alarme-monitorado/empresarial': '/servicos/instalacao-de-alarmes/empresarial',
    '/servicos/locacao-de-equipamentos-de-seguranca': '/servicos/locacao-de-cameras-de-seguranca',
    '/servicos/locacao-de-equipamentos': '/servicos/locacao-de-cameras-de-seguranca',
  };

  let resolvedPath = aliasCanonicalMap[trimmed] || trimmed;
  if (!resolvedPath.startsWith('/')) {
    resolvedPath = `/${resolvedPath}`;
  }
  if (!resolvedPath.endsWith('/')) {
    resolvedPath = `${resolvedPath}/`;
  }
  return `${DOMAIN}${resolvedPath}`;
}

function resolveFullImageUrl(url?: string): string {
  if (!url) return DEFAULT_OG_IMAGE;
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  const cleanPath = url.startsWith('/') ? url : `/${url}`;
  return `https://intelsecsul.com.br${cleanPath}`;
}

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SecurityService",
  "@id": "https://intelsecsul.com.br/#organization",
  "name": "IntelSec Sul - Segurança Eletrônica",
  "legalName": "IntelSec Sul Segurança Eletrônica e Tecnologia",
  "url": "https://intelsecsul.com.br",
  "telephone": siteConfig.phoneSchema,
  "email": siteConfig.email,
  "image": "https://intelsecsul.com.br/favicon.jpg",
  "priceRange": "$$",
  "description": "Empresa especializada em instalação e manutenção de câmeras de segurança, alarme, cerca elétrica, controle de acesso e locação de equipamentos em Curitiba e Região Metropolitana.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Curitiba",
    "addressRegion": "PR",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -25.4284,
    "longitude": -49.2733
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": siteConfig.googleRating,
    "reviewCount": siteConfig.googleReviewCount,
    "bestRating": "5"
  },
  "review": TESTIMONIALS_LIST.map((item) => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": item.rating,
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": item.author
    },
    "reviewBody": item.content
  })),
  "areaServed": [
    { "@type": "City", "name": "Curitiba" },
    { "@type": "City", "name": "Pinhais" },
    { "@type": "City", "name": "São José dos Pinhais" },
    { "@type": "City", "name": "Araucária" },
    { "@type": "City", "name": "Almirante Tamandaré" },
    { "@type": "City", "name": "Colombo" },
    { "@type": "City", "name": "Campo Largo" },
    { "@type": "City", "name": "Fazenda Rio Grande" },
    { "@type": "City", "name": "Campo Magro" },
    { "@type": "City", "name": "Quatro Barras" },
    { "@type": "City", "name": "Campina Grande do Sul" },
    { "@type": "Neighborhood", "name": "Batel" },
    { "@type": "Neighborhood", "name": "Água Verde" },
    { "@type": "Neighborhood", "name": "Bigorrilho" },
    { "@type": "Neighborhood", "name": "Centro" },
    { "@type": "Neighborhood", "name": "Portão" },
    { "@type": "Neighborhood", "name": "Santa Felicidade" },
    { "@type": "Neighborhood", "name": "CIC" },
    { "@type": "Neighborhood", "name": "Boqueirão" },
    { "@type": "Neighborhood", "name": "Cabral" },
    { "@type": "Neighborhood", "name": "Juvevê" },
    { "@type": "Neighborhood", "name": "Cristo Rei" },
    { "@type": "Neighborhood", "name": "Alto da XV" },
    { "@type": "Neighborhood", "name": "Rebouças" },
    { "@type": "Neighborhood", "name": "Mercês" },
    { "@type": "Neighborhood", "name": "Tarumã" },
    { "@type": "Neighborhood", "name": "Xaxim" },
    { "@type": "Neighborhood", "name": "Pinheirinho" },
    { "@type": "Neighborhood", "name": "Capão Raso" },
    { "@type": "Neighborhood", "name": "Sítio Cercado" },
    { "@type": "Neighborhood", "name": "Novo Mundo" },
    { "@type": "Neighborhood", "name": "Hauer" },
    { "@type": "Neighborhood", "name": "Bacacheri" },
    { "@type": "Neighborhood", "name": "Boa Vista" },
    { "@type": "Neighborhood", "name": "Pilarzinho" },
    { "@type": "Neighborhood", "name": "Abranches" },
    { "@type": "Neighborhood", "name": "São Lourenço" },
    { "@type": "Neighborhood", "name": "Ahu" },
    { "@type": "Neighborhood", "name": "Campo Comprido" },
    { "@type": "Neighborhood", "name": "Mossunguê" },
    { "@type": "Neighborhood", "name": "Fazendinha" },
    { "@type": "Neighborhood", "name": "Guabirotuba" },
    { "@type": "Neighborhood", "name": "Uberaba" },
    { "@type": "Neighborhood", "name": "Alto da Glória" },
    { "@type": "Neighborhood", "name": "Prado Velho" },
    { "@type": "Neighborhood", "name": "Umbará" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Serviços de Segurança Eletrônica",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Instalação de Câmeras de Segurança e CFTV" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Locação de Câmeras e Equipamentos de Segurança" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Instalação e Manutenção de Alarmes" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Instalação de Cerca Elétrica e Concertina" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Manutenção e Automação de Portão Eletrônico" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sistemas de Controle de Acesso Biométrico e Facial" } }
    ]
  }
};

export function useDocumentMeta({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage,
  jsonLdSchema
}: SEOOptions) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper function to update or create meta tag
    const setMetaTag = (selector: string, attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Meta description
    setMetaTag('meta[name="description"]', 'name', 'description', description);

    // 3. OpenGraph & Twitter Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMetaTag('meta[property="og:locale"]', 'property', 'og:locale', 'pt_BR');

    const fullOgImage = resolveFullImageUrl(ogImage);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', fullOgImage);
    setMetaTag('meta[property="og:image:width"]', 'property', 'og:image:width', '1200');
    setMetaTag('meta[property="og:image:height"]', 'property', 'og:image:height', '630');

    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', fullOgImage);

    // 4. Canonical Link & og:url
    const currentUrl = normalizeCanonicalUrl(canonicalUrl || window.location.pathname);
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', currentUrl);

    setMetaTag('meta[property="og:url"]', 'property', 'og:url', currentUrl);

    // 5. JSON-LD Schema
    let scriptTag = document.getElementById('json-ld-schema') as HTMLScriptElement | null;
    if (jsonLdSchema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'json-ld-schema';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLdSchema);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    // Cleanup on unmount / change
    return () => {
      document.title = 'Intelsecsul - Segurança Eletrônica e Tecnologia';
    };
  }, [title, description, canonicalUrl, ogType, ogImage, jsonLdSchema]);
}
