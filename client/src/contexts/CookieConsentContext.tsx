import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
}

interface CookieConsentContextType {
  preferences: CookiePreferences | null;
  hasConsented: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  setCustomPreferences: (prefs: CookiePreferences) => void;
  resetConsent: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const STORAGE_KEY = 'easyreserv_cookie_consent';

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setPreferences(parsed);
        setHasConsented(true);
      } catch (e) {
        console.error('Failed to parse cookie preferences:', e);
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    setPreferences(prefs);
    setHasConsented(true);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    
    if (prefs.analytics) {
      initializeAnalytics();
    }
  };

  const acceptAll = () => {
    savePreferences({ essential: true, analytics: true });
  };

  const rejectAll = () => {
    savePreferences({ essential: true, analytics: false });
  };

  const setCustomPreferences = (prefs: CookiePreferences) => {
    savePreferences(prefs);
  };

  const resetConsent = () => {
    localStorage.removeItem(STORAGE_KEY);
    setPreferences(null);
    setHasConsented(false);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        hasConsented,
        acceptAll,
        rejectAll,
        setCustomPreferences,
        resetConsent,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return context;
}

function initializeAnalytics() {
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID not configured');
    return;
  }

  if (typeof window.gtag !== 'undefined') {
    return;
  }

  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}', {
      page_path: window.location.pathname,
    });
  `;
  document.head.appendChild(script2);
}

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}
