import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';
import { initGTM, isPrerenderOrBot } from '../utils/analytics';

const CONSENT_STORAGE_KEY = 'cookie_consent';

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isPrerenderOrBot()) {
      return;
    }

    // Default Consent Mode v2 configuration
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'default_consent',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    });

    const storedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);

    if (storedConsent === 'granted') {
      initGTM();
    } else if (storedConsent === 'denied') {
      // User explicitly denied non-essential cookies
    } else {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, 'granted');

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'update_consent',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    });

    initGTM();
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_STORAGE_KEY, 'denied');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-[#0E131F]/95 backdrop-blur-md border-t border-slate-800 text-slate-200 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
        <div className="flex items-start gap-3.5 max-w-3xl">
          <div className="p-2.5 rounded-xl bg-[#0091FF]/10 text-[#00C5FF] border border-[#0091FF]/30 shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white mb-1">
              Privacidade e Cookies (LGPD)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Utilizamos cookies e tecnologias semelhantes para analisar o tráfego do site e melhorar sua experiência.
              Você pode aceitar todos os cookies ou manter apenas os estritamente necessários.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-end">
          <button
            onClick={handleDecline}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-[#141A29] hover:bg-[#1E2638] border border-slate-700 transition-all text-center cursor-pointer"
          >
            Rejeitar não essenciais
          </button>
          <button
            onClick={handleAccept}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0091FF] hover:bg-[#0081E6] active:bg-[#0070CC] shadow-lg hover:shadow-[#0091FF]/25 transition-all text-center cursor-pointer"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};
