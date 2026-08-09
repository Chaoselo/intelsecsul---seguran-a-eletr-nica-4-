import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  name: string;
}

export const ServiceIcon: React.FC<Props> = ({ name, className = "w-6 h-6", ...props }) => {
  switch (name) {
    case 'Camera':
      // Câmera de Segurança estilo CFTV / Dome + Bullet
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" />
          <path d="M18 10h.01" />
        </svg>
      );

    case 'KeyRound':
      // Locação de Equipamentos (Tag/Chave/Contrato)
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
          <circle cx="7.5" cy="16.5" r="1.5" />
        </svg>
      );

    case 'ShieldAlert':
      // Alarme Monitorado 24h (Escudo com Sirene)
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );

    case 'Zap':
      // Cerca Elétrica (Raio Perimetral)
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );

    case 'Fingerprint':
      // Controle de Acesso (Biometria / Face)
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
          <path d="M5 19.5C6.3 21 8.5 22 12 22c5.5 0 10-4.5 10-10 0-1.2-.2-2.4-.6-3.5" />
          <path d="M12 6a6 6 0 0 0-6 6c0 2.2 1 4.2 2.5 5.5" />
          <path d="M18 12a6 6 0 0 0-4-5.6" />
          <path d="M9 12a3 3 0 0 0 6 0c0-1-.4-2-1.1-2.6" />
        </svg>
      );

    case 'DoorClosed':
      // Portão Eletrônico (Automação / Engrenagem de Portão)
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18" />
          <path d="M15 3v18" />
          <path d="M3 9h18" />
          <path d="M3 15h18" />
        </svg>
      );

    case 'PhoneCall':
      // Interfonia / Vídeo Porteiro
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <circle cx="12" cy="18" r="1" />
          <path d="M9 6h6" />
          <rect x="8" y="9" width="8" height="5" rx="1" />
        </svg>
      );

    case 'Barrier':
      // Cancelas e Catracas
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M4 20V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" />
          <path d="M2 20h20" />
          <path d="M8 8V4" />
          <path d="M16 8V4" />
          <line x1="4" y1="12" x2="20" y2="12" />
        </svg>
      );

    case 'Lock':
      // Fechadura Eletromagnética
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1" />
        </svg>
      );

    case 'Wrench':
      // Manutenção
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
  }
};
