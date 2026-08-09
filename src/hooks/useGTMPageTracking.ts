import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageview } from '../utils/analytics';

export function useGTMPageTracking(): void {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      trackPageview(location.pathname + location.search, document.title);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.search]);
}
