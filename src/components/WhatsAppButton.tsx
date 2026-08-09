import React from 'react';
import { useLocation } from 'react-router-dom';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface Props {
  customMessage?: string;
}

export const WhatsAppButton: React.FC<Props> = ({ customMessage }) => {
  const location = useLocation();
  const whatsappUrl = getWhatsAppUrl(location.pathname, customMessage);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-slate-900"
      aria-label="Fale conosco no WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <span className="relative flex h-7 w-7 items-center justify-center">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/50 opacity-75"></span>
        <WhatsAppIcon className="w-7 h-7 relative shrink-0" />
      </span>
    </a>
  );
};
