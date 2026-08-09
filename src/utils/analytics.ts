declare global {
  interface Window {
    __PRERENDER_INJECTED?: boolean;
    dataLayer?: Array<Record<string, any>>;
  }
}

const GTM_ID = import.meta.env.VITE_GTM_ID || 'GTM-P72K9FKN';

export function isPrerenderOrBot(): boolean {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return true;
  }
  if (navigator.webdriver === true) {
    return true;
  }
  if (/HeadlessChrome/.test(navigator.userAgent)) {
    return true;
  }
  if (window.__PRERENDER_INJECTED) {
    return true;
  }
  return false;
}

export function initGTM(): void {
  if (isPrerenderOrBot() || !GTM_ID) {
    return;
  }

  if (document.getElementById('gtm-script')) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js'
  });

  const script = document.createElement('script');
  script.id = 'gtm-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);

  if (!document.getElementById('gtm-noscript')) {
    const noscript = document.createElement('noscript');
    noscript.id = 'gtm-noscript';
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    if (document.body.firstChild) {
      document.body.insertBefore(noscript, document.body.firstChild);
    } else {
      document.body.appendChild(noscript);
    }
  }
}

export function trackPageview(path: string, title: string): void {
  if (isPrerenderOrBot()) {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'pageview',
    page: path,
    title,
  });
}
