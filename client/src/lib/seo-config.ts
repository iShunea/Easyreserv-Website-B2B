import { SEOProps } from '@/components/SEO';

const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://easyreserv.io';

const defaultOGImage = `${baseUrl}/figmaAssets/logo.svg`;

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'EasyReserv.io',
  url: baseUrl,
  logo: `${baseUrl}/figmaAssets/logo.svg`,
  description: 'Platformă all-in-one pentru rezervări, POS, operațiuni și analitică',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@easyreserv.io',
    contactType: 'Customer Service',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'EasyReserv.io',
  url: baseUrl,
  description: 'Platformă ERP pentru management restaurante, saloane, auto, fitness și alte industrii',
};

export const seoConfig: Record<string, SEOProps> = {
  home: {
    title: 'EasyReserv.io — Platformă all-in-one POS și Rezervări',
    description: 'Automatizezi rezervările, POS, fluxurile operaționale și rapoartele. Integrezi plăți, contabilitate, notificări și livrare — fără schimbare de hardware.',
    canonical: baseUrl,
    og: {
      title: 'EasyReserv.io — Platformă all-in-one pentru afacerea ta',
      description: 'Gestionează rezervări, POS, operațiuni și analitică dintr-o singură platformă. Trial gratuit 14 zile.',
      image: defaultOGImage,
      type: 'website',
      url: baseUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: 'EasyReserv.io — Platformă all-in-one',
      description: 'Automatizează rezervările și operațiunile afacerii tale',
      image: defaultOGImage,
    },
    schema: [
      organizationSchema,
      websiteSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'EasyReserv.io',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        offers: {
          '@type': 'Offer',
          price: '50',
          priceCurrency: 'EUR',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '127',
        },
      },
    ],
  },

  about: {
    title: 'Despre Noi — EasyReserv.io | Misiunea noastră',
    description: 'Aflați povestea EasyReserv.io: cum ajutăm afacerile să automatizeze operațiunile, să crească eficiența și să îmbunătățească experiența clienților.',
    canonical: `${baseUrl}/about`,
    og: {
      title: 'Despre EasyReserv.io — Povestea noastră',
      description: 'Descoperă cum EasyReserv transformă modul în care afacerile gestionează rezervările și operațiunile',
      image: defaultOGImage,
      url: `${baseUrl}/about`,
    },
    twitter: {
      card: 'summary_large_image',
    },
    schema: [organizationSchema],
  },

  solutions: {
    title: 'Soluții Multi-Industrie — EasyReserv.io',
    description: 'Soluții personalizate pentru restaurante, saloane de înfrumusețare, chirie auto, fitness, spălătorii auto, terenuri sportive și alte industrii.',
    canonical: `${baseUrl}/solutions`,
    og: {
      title: 'Soluții EasyReserv pentru toate industriile',
      description: 'De la restaurante la fitness, oferim soluții complete pentru gestionarea afacerii tale',
      image: defaultOGImage,
      url: `${baseUrl}/solutions`,
    },
    twitter: {
      card: 'summary_large_image',
    },
    schema: [
      organizationSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Soluții ERP pentru multiple industrii',
        provider: organizationSchema,
        serviceType: 'Business Management Software',
        areaServed: 'RO',
      },
    ],
  },

  pricing: {
    title: 'Prețuri și Planuri — EasyReserv.io | De la 50€/lună',
    description: 'Planuri pentru toate tipurile de afaceri: Basic 50€, Standard 125€, Pro 200€. Trial gratuit 14 zile. Fără costuri ascunse.',
    canonical: `${baseUrl}/pricing`,
    og: {
      title: 'Prețuri EasyReserv — Alege planul potrivit',
      description: 'Planuri flexibile pentru afaceri de toate mărimile. Începe cu trial gratuit 14 zile.',
      image: defaultOGImage,
      url: `${baseUrl}/pricing`,
    },
    twitter: {
      card: 'summary_large_image',
    },
    schema: [
      organizationSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'EasyReserv Business Plan',
        offers: [
          {
            '@type': 'Offer',
            name: 'Basic',
            price: '50',
            priceCurrency: 'EUR',
            priceValidUntil: '2025-12-31',
          },
          {
            '@type': 'Offer',
            name: 'Standard',
            price: '125',
            priceCurrency: 'EUR',
            priceValidUntil: '2025-12-31',
          },
          {
            '@type': 'Offer',
            name: 'Pro',
            price: '200',
            priceCurrency: 'EUR',
            priceValidUntil: '2025-12-31',
          },
        ],
      },
    ],
  },

  contact: {
    title: 'Contact — EasyReserv.io | Demo și Suport',
    description: 'Contactează echipa EasyReserv pentru demo personalizat, suport tehnic sau întrebări despre platformă. Răspundem în maxim 24 de ore.',
    canonical: `${baseUrl}/contact`,
    og: {
      title: 'Contactează EasyReserv',
      description: 'Programează un demo sau contactează echipa de suport',
      image: defaultOGImage,
      url: `${baseUrl}/contact`,
    },
    twitter: {
      card: 'summary_large_image',
    },
    schema: [organizationSchema],
  },

  policies: {
    title: 'Politici — EasyReserv.io | Termeni și Confidențialitate',
    description: 'Politica de confidențialitate, politica cookie și termenii și condițiile platformei EasyReserv.io. Protecția datelor conform GDPR.',
    canonical: `${baseUrl}/policies`,
    robots: 'noindex, follow',
    og: {
      title: 'Politici EasyReserv',
      description: 'Politica de confidențialitate și termeni de utilizare',
      image: defaultOGImage,
      url: `${baseUrl}/policies`,
    },
    twitter: {
      card: 'summary_large_image',
    },
    schema: [organizationSchema],
  },

  blog: {
    title: 'Blog — EasyReserv.io | Ghiduri și Resurse Business',
    description: 'Articole despre managementul afacerilor, automatizare, tips & tricks pentru restaurante, saloane, fitness și alte industrii.',
    canonical: `${baseUrl}/blog`,
    og: {
      title: 'Blog EasyReserv — Resurse și Ghiduri',
      description: 'Cele mai recente articole și ghiduri pentru optimizarea afacerii tale',
      image: defaultOGImage,
      url: `${baseUrl}/blog`,
    },
    twitter: {
      card: 'summary_large_image',
    },
    schema: [
      organizationSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'EasyReserv Blog',
        description: 'Resurse și ghiduri pentru afaceri',
        url: `${baseUrl}/blog`,
      },
    ],
  },
};

export function getBlogArticleSEO(
  title: string,
  excerpt: string,
  slug: string,
  author: string,
  publishedDate: string,
  image?: string
): SEOProps {
  return {
    title: `${title} — EasyReserv Blog`,
    description: excerpt.slice(0, 155) + (excerpt.length > 155 ? '...' : ''),
    canonical: `${baseUrl}/blog/${slug}`,
    og: {
      title,
      description: excerpt.slice(0, 200),
      image: image || defaultOGImage,
      type: 'article',
      url: `${baseUrl}/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: excerpt.slice(0, 200),
      image: image || defaultOGImage,
    },
    schema: [
      organizationSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description: excerpt,
        image: image || defaultOGImage,
        datePublished: publishedDate,
        author: {
          '@type': 'Person',
          name: author,
        },
        publisher: organizationSchema,
      },
    ],
  };
}
