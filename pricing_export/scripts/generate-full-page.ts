import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const LANGUAGES = ['ro', 'en', 'ru'];

const INDUSTRY_KEYS = {
  RESTAURANTE: "restaurante",
  CAFENELE: "cafenele",
  SALOANE_BARBERSHOP: "saloane_barbershop",
  HOTELE: "hotele",
  CHIRII_AUTO: "chirii_auto",
  FITNESS: "fitness",
  MEDICAL: "medical",
  RETAIL: "retail",
  SPALATORII_AUTO: "spalatorii_auto",
  TENIS_PADEL_FOTBAL: "tenis_padel_fotbal",
} as const;

// Pricing per industry (monthly prices in €)
const INDUSTRY_PRICING: Record<string, { basic: number; standard: number; pro: number }> = {
  [INDUSTRY_KEYS.RESTAURANTE]: { basic: 50, standard: 125, pro: 200 },
  [INDUSTRY_KEYS.CAFENELE]: { basic: 50, standard: 125, pro: 200 },
  [INDUSTRY_KEYS.SALOANE_BARBERSHOP]: { basic: 40, standard: 85, pro: 140 },
  [INDUSTRY_KEYS.HOTELE]: { basic: 79, standard: 149, pro: 249 },
  [INDUSTRY_KEYS.CHIRII_AUTO]: { basic: 59, standard: 119, pro: 199 },
  [INDUSTRY_KEYS.FITNESS]: { basic: 49, standard: 99, pro: 149 },
  [INDUSTRY_KEYS.MEDICAL]: { basic: 49, standard: 99, pro: 199 },
  [INDUSTRY_KEYS.RETAIL]: { basic: 49, standard: 99, pro: 159 },
  [INDUSTRY_KEYS.SPALATORII_AUTO]: { basic: 35, standard: 75, pro: 125 },
  [INDUSTRY_KEYS.TENIS_PADEL_FOTBAL]: { basic: 39, standard: 79, pro: 129 },
};

// Plan IDs per industry
const INDUSTRY_PLAN_IDS: Record<string, { 
  monthly: { basic: string; standard: string; pro: string };
  annually: { basic: string; standard: string; pro: string };
}> = {
  [INDUSTRY_KEYS.RESTAURANTE]: {
    monthly: {
      basic: "1f900d0c-5ea1-49a0-bfb7-eb2411e5eb0a",
      standard: "0a4eb8ea-e0a0-49bc-aae9-8774f0693f33",
      pro: "a5c8d9f2-3b4e-4a7c-8d1f-2e9b6c4a8f3d"
    },
    annually: {
      basic: "b2f7e4a1-8c3d-4f9b-a6e2-7d5c9f1a4b8e",
      standard: "c9d3a8f5-2e7b-4c1a-9f6d-8e4b7a2c5f9d",
      pro: "d4a7f9c2-5b8e-4d3a-a1f7-9c6e2b4d8a5f"
    }
  },
  [INDUSTRY_KEYS.CAFENELE]: {
    monthly: {
      basic: "bb45bdc1-8804-48f1-983c-87d2368d555c",
      standard: "a6479e33-f8a2-4783-8502-b1033e89a1ee",
      pro: "931cbc5b-cf1f-4379-a333-42ce1d22bb5d"
    },
    annually: {
      basic: "777a2240-3199-4b3a-993e-965652ac71f0",
      standard: "065f8e16-ac70-4bba-95c2-7acb0ff91783",
      pro: "036df0c8-1b57-4482-9057-ccde656754b0"
    }
  },
  [INDUSTRY_KEYS.HOTELE]: {
    monthly: {
      basic: "7f5ed7da-5200-427e-aece-f503ffe7b15d",
      standard: "8c994caf-8e21-46b5-8e6f-9aa7e26de6dd",
      pro: "e21eb5f5-ddba-4f49-8ee3-c55e1e316367"
    },
    annually: {
      basic: "117ae90d-c4d7-4b21-990e-e921b9053cb1",
      standard: "6acd0e21-d44a-4339-86de-6e447c874d03",
      pro: "2a65e4f1-a5b7-4e21-81de-f0b9a4074e20"
    }
  },
  [INDUSTRY_KEYS.SPALATORII_AUTO]: {
    monthly: {
      basic: "ebe3b1ba-a954-40a9-8512-c0409695ae34",
      standard: "af9a40d5-6882-4bcb-8601-c35cc5d5e6ff",
      pro: "2536ae4b-9797-4b72-9eed-6796e97448ce"
    },
    annually: {
      basic: "58c0d764-c8b7-47fb-9a9d-b3a8a5f5fd0a",
      standard: "86c01eff-d7e3-4c1f-bd23-10ad372f6663",
      pro: "56b9d32d-fad5-438f-a652-5cb6a7ea0ffc"
    }
  },
  [INDUSTRY_KEYS.SALOANE_BARBERSHOP]: {
    monthly: {
      basic: "d74fa21b-cb9c-4aba-bbb7-c7b90f38c867",
      standard: "0f3c1e8b-5c03-4f9f-ae44-bd06df44b09d",
      pro: "6ddb53eb-9a0f-4e1d-b2e9-91aecbdd7d23"
    },
    annually: {
      basic: "6d80c96b-b79d-41d8-a53b-02fdde0bde73",
      standard: "7a4f1c9c-f86a-4f06-85dd-18b01f654494",
      pro: "f0e1ac5c-33a3-44a0-80df-4f5b2e1c3d8a"
    }
  },
  [INDUSTRY_KEYS.CHIRII_AUTO]: {
    monthly: {
      basic: "5c78a3f2-d9e4-4b1a-8f6c-2e9b7d4a1c5f",
      standard: "8a4f2e9b-6c3d-4a7f-9e1b-5d8c7a2f4e9b",
      pro: "9e7c4a2f-5b8d-4e3a-a1f6-8c9e2b4d7a5f"
    },
    annually: {
      basic: "7d9e4a3f-8c2b-4f5a-9e1d-6c8a7b2f4e9c",
      standard: "4a8f2e7c-9b3d-4a6f-8e1b-5c7d9a2f4e8b",
      pro: "6c9e4a7f-8d2b-4e3a-9f1c-7a8e2b4d5f9c"
    }
  },
  [INDUSTRY_KEYS.MEDICAL]: {
    monthly: {
      basic: "3a7f2e9c-8d4b-4f6a-9e1c-5b8d7a2f4e9b",
      standard: "8e4a7f2c-9d3b-4a6f-8e1b-5c7d9a2f4e8c",
      pro: "9c7e4a2f-8d5b-4e3a-9f1c-6a8e2b4d7f9c"
    },
    annually: {
      basic: "4f8a2e9c-7d3b-4a6f-9e1b-5c8d7a2f4e9b",
      standard: "7e9a4f2c-8d3b-4a6f-9e1c-5b8d7a2f4e9c",
      pro: "8c9e4a7f-9d2b-4e3a-8f1c-6a7e2b4d5f9c"
    }
  },
  [INDUSTRY_KEYS.FITNESS]: {
    monthly: {
      basic: "2a9f4e8c-7d3b-4a6f-9e1b-5c8d7a2f4e9b",
      standard: "6e8a4f2c-9d3b-4a7f-8e1c-5b9d7a2f4e8c",
      pro: "9c8e4a7f-8d2b-4e3a-9f1c-7a8e2b4d5f9c"
    },
    annually: {
      basic: "5f9a2e8c-7d3b-4a6f-9e1b-6c8d7a2f4e9b",
      standard: "8e9a4f2c-7d3b-4a6f-9e1c-5b8d7a2f4e9c",
      pro: "7c9e4a8f-9d2b-4e3a-8f1c-6a7e2b4d5f9c"
    }
  },
  [INDUSTRY_KEYS.RETAIL]: {
    monthly: {
      basic: "4a8f2e9c-7d3b-4a6f-9e1b-5c8d7a2f4e9b",
      standard: "7e8a4f2c-9d3b-4a7f-8e1c-5b9d7a2f4e8c",
      pro: "8c9e4a7f-8d2b-4e3a-9f1c-7a8e2b4d5f9c"
    },
    annually: {
      basic: "6f8a2e9c-7d3b-4a6f-9e1b-5c8d7a2f4e9b",
      standard: "9e8a4f2c-7d3b-4a6f-9e1c-5b8d7a2f4e9c",
      pro: "8c7e4a9f-9d2b-4e3a-8f1c-6a7e2b4d5f9c"
    }
  },
  [INDUSTRY_KEYS.TENIS_PADEL_FOTBAL]: {
    monthly: {
      basic: "3a7f2e9c-8d4b-4f6a-9e1c-5b8d7a2f4e9d",
      standard: "8e4a7f2c-9d3b-4a6f-8e1b-5c7d9a2f4e8d",
      pro: "9c7e4a2f-8d5b-4e3a-9f1c-6a8e2b4d7f9d"
    },
    annually: {
      basic: "4f8a2e9c-7d3b-4a6f-9e1b-5c8d7a2f4e9d",
      standard: "7e9a4f2c-8d3b-4a6f-9e1c-5b8d7a2f4e9d",
      pro: "8c9e4a7f-9d2b-4e3a-8f1c-6a7e2b4d5f9d"
    }
  },
};

const ALL_INDUSTRIES = [
  INDUSTRY_KEYS.RESTAURANTE,
  INDUSTRY_KEYS.CAFENELE,
  INDUSTRY_KEYS.SALOANE_BARBERSHOP,
  INDUSTRY_KEYS.HOTELE,
  INDUSTRY_KEYS.CHIRII_AUTO,
  INDUSTRY_KEYS.FITNESS,
  INDUSTRY_KEYS.MEDICAL,
  INDUSTRY_KEYS.RETAIL,
  INDUSTRY_KEYS.SPALATORII_AUTO,
  INDUSTRY_KEYS.TENIS_PADEL_FOTBAL,
];

function loadTranslations(lang: string) {
  const path = join(__dirname, `../../client/src/locales/${lang}.json`);
  return JSON.parse(readFileSync(path, 'utf-8'));
}

function generateFullPageHTML(lang: string): string {
  const t = loadTranslations(lang);
  
  const industryCards = ALL_INDUSTRIES.map(industryKey => {
    const pricing = INDUSTRY_PRICING[industryKey];
    const planIds = INDUSTRY_PLAN_IDS[industryKey];
    const industryName = t.pricing_page.plans[industryKey]?.title || industryKey;
    
    const basicMonthly = pricing.basic;
    const standardMonthly = pricing.standard;
    const proMonthly = pricing.pro;
    
    const basicAnnual = Math.round(basicMonthly * 12 * 0.9);
    const standardAnnual = Math.round(standardMonthly * 12 * 0.9);
    const proAnnual = Math.round(proMonthly * 12 * 0.9);
    
    return `
    <div class="industry-section" id="${industryKey}">
      <h2 class="industry-heading">${industryName}</h2>
      <div class="pricing-grid">
        <!-- Basic Plan -->
        <div class="pricing-card">
          <div class="card-header">
            <h3 class="plan-name">Basic</h3>
            <p class="plan-description">${t.pricing_page.plans[industryKey]?.tiers?.basic?.description || ''}</p>
          </div>
          <div class="price-container">
            <div class="price monthly-price active">
              <span class="amount">€${basicMonthly}</span>
              <span class="period">/lună</span>
            </div>
            <div class="price annual-price">
              <span class="amount">€${basicAnnual}</span>
              <span class="period">/an</span>
            </div>
          </div>
          <a 
            href="https://app.easyreserv.io/register?planId=${planIds.monthly.basic}" 
            class="cta-button monthly-button"
            data-monthly-plan="${planIds.monthly.basic}"
            data-annual-plan="${planIds.annually.basic}"
            data-testid="button-subscribe-${industryKey}-basic">
            Începe perioada gratuită
          </a>
          <ul class="features-list">
            ${(t.pricing_page.plans[industryKey]?.tiers?.basic?.features || []).map((f: string) => `<li>${f}</li>`).join('')}
          </ul>
        </div>

        <!-- Standard Plan -->
        <div class="pricing-card featured">
          <div class="popular-badge">Cel mai popular</div>
          <div class="card-header">
            <h3 class="plan-name">Standard</h3>
            <p class="plan-description">${t.pricing_page.plans[industryKey]?.tiers?.standard?.description || ''}</p>
          </div>
          <div class="price-container">
            <div class="price monthly-price active">
              <span class="amount">€${standardMonthly}</span>
              <span class="period">/lună</span>
            </div>
            <div class="price annual-price">
              <span class="amount">€${standardAnnual}</span>
              <span class="period">/an</span>
            </div>
          </div>
          <a 
            href="https://app.easyreserv.io/register?planId=${planIds.monthly.standard}" 
            class="cta-button monthly-button"
            data-monthly-plan="${planIds.monthly.standard}"
            data-annual-plan="${planIds.annually.standard}"
            data-testid="button-subscribe-${industryKey}-standard">
            Începe perioada gratuită
          </a>
          <ul class="features-list">
            ${(t.pricing_page.plans[industryKey]?.tiers?.standard?.features || []).map((f: string) => `<li>${f}</li>`).join('')}
          </ul>
        </div>

        <!-- Pro Plan -->
        <div class="pricing-card">
          <div class="card-header">
            <h3 class="plan-name">Pro</h3>
            <p class="plan-description">${t.pricing_page.plans[industryKey]?.tiers?.pro?.description || ''}</p>
          </div>
          <div class="price-container">
            <div class="price monthly-price active">
              <span class="amount">€${proMonthly}</span>
              <span class="period">/lună</span>
            </div>
            <div class="price annual-price">
              <span class="amount">€${proAnnual}</span>
              <span class="period">/an</span>
            </div>
          </div>
          <a 
            href="https://app.easyreserv.io/register?planId=${planIds.monthly.pro}" 
            class="cta-button monthly-button"
            data-monthly-plan="${planIds.monthly.pro}"
            data-annual-plan="${planIds.annually.pro}"
            data-testid="button-subscribe-${industryKey}-pro">
            Începe perioada gratuită
          </a>
          <ul class="features-list">
            ${(t.pricing_page.plans[industryKey]?.tiers?.pro?.features || []).map((f: string) => `<li>${f}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>`;
  }).join('\n');

  const cssContent = readFileSync(join(__dirname, '../styles/pricing-export.css'), 'utf-8');

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.pricing_page.title} | EasyReserv.io</title>
  <meta name="description" content="${t.pricing_page.subtitle}">
  <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
${cssContent}
    .industry-section {
      margin-bottom: 80px;
      scroll-margin-top: 100px;
    }
    
    .industry-heading {
      font-size: 32px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 48px;
      color: #1a1a1a;
    }
    
    .nav-links {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
      margin-bottom: 48px;
    }
    
    .nav-link {
      padding: 8px 16px;
      background: #f3f4f6;
      border-radius: 8px;
      text-decoration: none;
      color: #4b5563;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.2s;
    }
    
    .nav-link:hover {
      background: #3B82F6;
      color: white;
    }
  </style>
</head>
<body>
  <div class="container">
    <header class="header">
      <div class="logo">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#3B82F6"/>
          <path d="M12 20L18 26L28 14" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>EasyReserv.io</span>
      </div>
    </header>

    <section class="hero">
      <h1>Alege excelența. Alege <span class="highlight">EasyReserv.io</span></h1>
      <p class="hero-description">Încearcă perioada de test gratuită și găsește abonamentul perfect pentru nevoile tale.</p>
    </section>

    <div class="billing-toggle" data-testid="billing-toggle">
      <button class="toggle-btn active" data-billing="monthly" data-testid="button-monthly">
        Lunar
      </button>
      <button class="toggle-btn" data-billing="annually" data-testid="button-annually">
        Anual
        <span class="discount-badge">Economisești 10%</span>
      </button>
    </div>

    <nav class="nav-links">
      ${ALL_INDUSTRIES.map(key => `
        <a href="#${key}" class="nav-link">${t.pricing_page.plans[key]?.title || key}</a>
      `).join('')}
    </nav>

    ${industryCards}

    <footer style="text-align: center; padding: 40px 20px; color: #666; border-top: 1px solid #e5e7eb;">
      <p><strong>EasyReserv.io</strong> - Prețuri & Planuri de abonament</p>
      <p style="margin-top: 8px; font-size: 14px;">Încearcă perioada de test gratuită și găsește abonamentul perfect pentru nevoile tale.</p>
    </footer>
  </div>

  <script>
    const toggleButtons = document.querySelectorAll('[data-billing]');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const annualPrices = document.querySelectorAll('.annual-price');
    const ctaButtons = document.querySelectorAll('.cta-button');

    toggleButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const billing = btn.dataset.billing;
        
        toggleButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (billing === 'monthly') {
          monthlyPrices.forEach(p => p.classList.add('active'));
          annualPrices.forEach(p => p.classList.remove('active'));
          ctaButtons.forEach(button => {
            const monthlyPlan = button.dataset.monthlyPlan;
            if (monthlyPlan) {
              button.href = \`https://app.easyreserv.io/register?planId=\${monthlyPlan}\`;
            }
          });
        } else {
          monthlyPrices.forEach(p => p.classList.remove('active'));
          annualPrices.forEach(p => p.classList.add('active'));
          ctaButtons.forEach(button => {
            const annualPlan = button.dataset.annualPlan;
            if (annualPlan) {
              button.href = \`https://app.easyreserv.io/register?planId=\${annualPlan}\`;
            }
          });
        }
      });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  </script>
</body>
</html>`;
}

console.log('🚀 Generating full pricing pages...\n');

LANGUAGES.forEach(lang => {
  const html = generateFullPageHTML(lang);
  const outputPath = join(__dirname, `../html/full_page_${lang}.html`);
  writeFileSync(outputPath, html, 'utf-8');
  console.log(`✅ full_page_${lang}.html`);
});

console.log('\n✨ Full page export complete!');
console.log('📁 Output: pricing_export/html/full_page_{ro,en,ru}.html');
