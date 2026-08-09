import { COMPANY_INFO } from '../constants';

const ROUTE_MESSAGES: Record<string, string> = {
  '/': 'Olá! Vi o site da Intelsecsul e gostaria de solicitar um orçamento para segurança eletrônica.',
  '/servicos/cameras-de-seguranca': 'Olá! Gostaria de um orçamento para instalação de Câmeras de Segurança em meu imóvel.',
  '/servicos/instalacao-de-alarmes': 'Olá! Gostaria de um orçamento para Instalação/Manutenção de Alarme em meu imóvel.',
  '/servicos/cerca-eletrica': 'Olá! Gostaria de um orçamento para instalação de Cerca Elétrica.',
  '/servicos/locacao-de-cameras-de-seguranca': 'Olá! Tenho interesse na Locação de Equipamentos sem taxa de instalação e gostaria de um orçamento.',
  '/servicos/controle-de-acesso': 'Olá! Preciso de um orçamento para Controle de Acesso (biometria/reconhecimento facial).',
  '/servicos/portao-eletronico': 'Olá! Gostaria de um orçamento para automação ou manutenção de Portão Eletrônico.',
  '/servicos/interfonia': 'Olá! Preciso de um orçamento para sistema de Interfonia / Vídeo Porteiro.',
  '/contato': 'Olá! Vim pela página de contato e gostaria de falar com a equipe comercial da Intelsecsul.',
};

export const DEFAULT_FALLBACK_MESSAGE = 'Olá! Gostaria de mais informações sobre os serviços de segurança eletrônica da Intelsecsul.';

/**
 * Retorna a mensagem pré-preenchida do WhatsApp com base na rota ou mensagem personalizada.
 */
export function getWhatsAppMessage(routePath?: string, customMessage?: string): string {
  if (customMessage) return customMessage;
  if (!routePath) return DEFAULT_FALLBACK_MESSAGE;

  // Remove trailing slashes unless it's root
  const cleanPath = routePath.length > 1 && routePath.endsWith('/') ? routePath.slice(0, -1) : routePath;

  return ROUTE_MESSAGES[cleanPath] || DEFAULT_FALLBACK_MESSAGE;
}

/**
 * Retorna a URL wa.me completa formatada com a mensagem contextual da rota.
 */
export function getWhatsAppUrl(routePath?: string, customMessage?: string): string {
  const message = getWhatsAppMessage(routePath, customMessage);
  return `https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
}
