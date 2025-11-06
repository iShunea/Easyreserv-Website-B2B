import { useEffect } from 'react';

export type Language = 'ro' | 'ru' | 'en';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  robots?: string;
  language?: Language;
  og?: {
    title?: string;
    description?: string;
    image?: string;
    type?: string;
    url?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image';
    title?: string;
    description?: string;
    image?: string;
  };
  schema?: object[];
}

const getLocaleForLanguage = (lang: Language): string => {
  const localeMap: Record<Language, string> = {
    ro: 'ro_RO',
    ru: 'ru_RU',
    en: 'en_US'
  };
  return localeMap[lang];
};

export function SEO({
  title,
  description,
  canonical,
  robots = 'index, follow',
  language = 'ro',
  og,
  twitter,
  schema,
}: SEOProps) {
  useEffect(() => {
    document.title = title;
    
    document.documentElement.setAttribute('lang', language);

    const metaTags: { [key: string]: string } = {
      description,
      robots,
    };

    if (og) {
      metaTags['og:title'] = og.title || title;
      metaTags['og:description'] = og.description || description;
      metaTags['og:type'] = og.type || 'website';
      if (og.image) metaTags['og:image'] = og.image;
      if (og.url) metaTags['og:url'] = og.url;
      metaTags['og:site_name'] = 'EasyReserv.io';
      metaTags['og:locale'] = getLocaleForLanguage(language);
    }

    if (twitter) {
      metaTags['twitter:card'] = twitter.card || 'summary_large_image';
      metaTags['twitter:title'] = twitter.title || title;
      metaTags['twitter:description'] = twitter.description || description;
      if (twitter.image) metaTags['twitter:image'] = twitter.image;
    }

    Object.entries(metaTags).forEach(([name, content]) => {
      const attribute = name.startsWith('og:') ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    });

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    const baseUrl = window.location.origin;
    const currentPath = window.location.pathname.replace(/^\/(ro|ru|en)/, '') || '/';
    
    const hreflangs: Array<{ lang: Language | 'x-default'; href: string }> = [
      { lang: 'ro', href: `${baseUrl}${currentPath}` },
      { lang: 'ru', href: `${baseUrl}/ru${currentPath}` },
      { lang: 'en', href: `${baseUrl}/en${currentPath}` },
      { lang: 'x-default', href: `${baseUrl}${currentPath}` }
    ];

    document.querySelectorAll('link[rel="alternate"]').forEach(link => link.remove());

    hreflangs.forEach(({ lang, href }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      link.setAttribute('href', href);
      document.head.appendChild(link);
    });

    if (schema && schema.length > 0) {
      schema.forEach((schemaItem, index) => {
        const id = `schema-${index}`;
        let script = document.querySelector(`script#${id}`) as HTMLScriptElement;
        
        if (!script) {
          script = document.createElement('script');
          script.id = id;
          script.type = 'application/ld+json';
          document.head.appendChild(script);
        }
        
        script.textContent = JSON.stringify(schemaItem);
      });
    }

    return () => {
      const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
      existingSchemas.forEach(script => script.remove());
      document.querySelectorAll('link[rel="alternate"]').forEach(link => link.remove());
    };
  }, [title, description, canonical, robots, language, og, twitter, schema]);

  return null;
}
