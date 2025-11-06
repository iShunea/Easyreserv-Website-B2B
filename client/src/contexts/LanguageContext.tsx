import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'wouter';

export type Language = 'ro' | 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, options?: { returnObjects?: boolean }) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, any>> = {
  ro: {},
  ru: {},
  en: {}
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useLocation();
  const [language, setLanguageState] = useState<Language>('ro');
  const [translationsLoaded, setTranslationsLoaded] = useState(false);

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const [roData, ruData, enData] = await Promise.all([
          import('../locales/ro.json'),
          import('../locales/ru.json'),
          import('../locales/en.json')
        ]);
        
        translations.ro = roData.default;
        translations.ru = ruData.default;
        translations.en = enData.default;
        
        setTranslationsLoaded(true);
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    };
    
    loadTranslations();
  }, []);

  useEffect(() => {
    const pathLang = location.split('/')[1] as Language;
    
    if (pathLang === 'ro' || pathLang === 'ru' || pathLang === 'en') {
      setLanguageState(pathLang);
      localStorage.setItem('preferred-language', pathLang);
    } else {
      const savedLang = localStorage.getItem('preferred-language') as Language;
      
      if (savedLang && (savedLang === 'ru' || savedLang === 'en')) {
        setLanguageState(savedLang);
        const currentPath = location || '/';
        const newPath = `/${savedLang}${currentPath}`;
        setLocation(newPath);
      } else {
        setLanguageState('ro');
        if (savedLang !== 'ro') {
          localStorage.setItem('preferred-language', 'ro');
        }
      }
    }
  }, [location, setLocation]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
    
    const currentPath = location.replace(/^\/(ro|ru|en)/, '');
    const newPath = lang === 'ro' ? currentPath || '/' : `/${lang}${currentPath || '/'}`;
    setLocation(newPath);
  };

  const t = (key: string, options?: { returnObjects?: boolean }): any => {
    if (!translationsLoaded) return options?.returnObjects ? [] : key;
    
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return options?.returnObjects ? [] : key;
      }
    }
    
    if (options?.returnObjects) {
      return typeof value === 'object' ? value : [];
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
