import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Industry keys (must match shared/schema.ts structure)
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

// Plan IDs per industry and billing period
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
      basic: "eeabd488-8e38-4bae-bbbe-38dd68585e8c",
      standard: "2e8e0e63-2a65-440f-821a-e5755d77ecf9",
      pro: "5dacdfb2-c34f-47d7-8f4b-7fc3ef5c4f39"
    }
  },
  [INDUSTRY_KEYS.SALOANE_BARBERSHOP]: {
    monthly: {
      basic: "d968307e-153f-4dd9-a09a-1427feea3a32",
      standard: "c1dd33f0-5eaa-4300-8d59-cbd4bbe81a9d",
      pro: "7a70660c-e382-4824-83de-e38c78f605f7"
    },
    annually: {
      basic: "506fd99b-4768-4ca4-b081-071ccfb81d6f",
      standard: "ff7c1ac5-f492-4245-a299-f959b665ccfc",
      pro: "290f2dad-313a-41c0-aabb-a397afc7dba0"
    }
  },
  [INDUSTRY_KEYS.MEDICAL]: {
    monthly: {
      basic: "4af96f06-945f-4532-ae7e-a1ed01f83507",
      standard: "763eabbe-c679-4294-93e2-15396f6ca07e",
      pro: "e4da4ee9-23aa-422b-baf5-c75e4eea37c1"
    },
    annually: {
      basic: "92eb5617-910a-4024-8fce-c27a95c3ae9b",
      standard: "afda6f96-2f2e-4a64-8965-ecdf056225bb",
      pro: "fd2ebdb6-1d9c-4146-9d16-fa3a3bc1e4a6"
    }
  },
  [INDUSTRY_KEYS.CHIRII_AUTO]: {
    monthly: {
      basic: "76c21ba0-ec83-464a-9d09-430148eb90fa",
      standard: "e64e3297-3e11-4dc5-a9be-3b3a3ebaa860",
      pro: "5d4a61ae-c795-49ef-b732-3c6ca45afcef"
    },
    annually: {
      basic: "30945e8e-b546-4461-8f0c-49c401fa788f",
      standard: "d201420e-771c-44c3-9ca9-54e305fee4cd",
      pro: "de540f19-0afe-40e1-bd86-b25dd9f23349"
    }
  },
  [INDUSTRY_KEYS.TENIS_PADEL_FOTBAL]: {
    monthly: {
      basic: "3360c7e6-9893-4a9b-aa30-4388a2fb1b01",
      standard: "02dc1a9d-d070-4c07-9a93-c38a98a6a922",
      pro: "71ff102f-63d3-458b-a6fb-f072602edd4f"
    },
    annually: {
      basic: "9957d5f0-40bd-4157-997e-14c454c05595",
      standard: "e2589bfd-2a8e-46ef-8d65-bb3cd9f74b55",
      pro: "c6f142d2-3c60-4ef8-8995-604547091994"
    }
  }
};

// Languages to export
const LANGUAGES = ['ro', 'en', 'ru'] as const;

// Load translation files
function loadTranslations(lang: string): any {
  // Go up two levels from pricing_export/scripts/ to project root
  const filePath = path.join(__dirname, '..', '..', 'client', 'src', 'locales', `${lang}.json`);
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

// Calculate annual price with 10% discount
function calculateAnnualPrice(monthlyPrice: number): number {
  return Math.round((monthlyPrice * 12) * 0.9);
}

// Generate pricing card HTML
function generatePricingCard(
  plan: any,
  isPopular: boolean,
  planId: string | null,
  isAnnual: boolean,
  t: any
): string {
  const priceDisplay = plan.monthlyPrice 
    ? `€${isAnnual ? calculateAnnualPrice(plan.monthlyPrice) : plan.monthlyPrice}` 
    : t.pricing_page.common.custom;
  
  const periodText = isAnnual ? `/an` : t.pricing_page.common.per_month;
  const registerUrl = planId ? `https://app.easyreserv.io/register?planId=${planId}` : '#contact';
  
  return `
    <div class="pricing-card ${isPopular ? 'popular' : ''}">
      ${isPopular ? `<div class="badge">${t.pricing_page.common.popular}</div>` : ''}
      <h3>${plan.name}</h3>
      <p class="description">${plan.description}</p>
      <div class="price-container">
        <span class="price">${priceDisplay}</span>
        ${plan.monthlyPrice ? `<span class="period">${periodText}</span>` : ''}
      </div>
      ${plan.monthlyPrice && isAnnual ? `<div class="save-badge">${t.pricing_page.common.save_10_percent}</div>` : ''}
      <a href="${registerUrl}" class="cta-button ${isPopular ? 'primary' : 'secondary'}" data-testid="button-select-plan">
        ${plan.monthlyPrice ? t.pricing_page.common.select_plan : t.pricing_page.common.contact_us}
      </a>
      <div class="features">
        <p class="features-title">${t.pricing_page.common.what_you_get}</p>
        <ul>
          ${plan.features.map((feature: string) => `<li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>${feature}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
}

// Generate full HTML page
function generateHTML(industryKey: string, lang: string): string {
  const t = loadTranslations(lang);
  const pricing = INDUSTRY_PRICING[industryKey];
  const planIds = INDUSTRY_PLAN_IDS[industryKey];
  const industryName = t.pricing_page.industries[industryKey] || industryKey;
  
  // Get plans data
  const tiers = ['basic', 'standard', 'pro', 'enterprise'];
  const monthlyPlans = tiers.map((tier) => {
    const planData = t.pricing_page?.plans?.[industryKey]?.[tier] || {
      name: tier.charAt(0).toUpperCase() + tier.slice(1),
      description: '',
      features: []
    };
    
    let monthlyPrice: number | null;
    if (tier === "enterprise") {
      monthlyPrice = null;
    } else if (tier === "basic") {
      monthlyPrice = pricing.basic;
    } else if (tier === "standard") {
      monthlyPrice = pricing.standard;
    } else {
      monthlyPrice = pricing.pro;
    }
    
    let planId: string | null = null;
    if (tier !== "enterprise" && planIds) {
      const tierKey = tier as 'basic' | 'standard' | 'pro';
      planId = planIds.monthly[tierKey];
    }
    
    return {
      ...planData,
      monthlyPrice,
      planId
    };
  });
  
  const annualPlans = tiers.map((tier) => {
    const planData = t.pricing_page?.plans?.[industryKey]?.[tier] || {
      name: tier.charAt(0).toUpperCase() + tier.slice(1),
      description: '',
      features: []
    };
    
    let monthlyPrice: number | null;
    if (tier === "enterprise") {
      monthlyPrice = null;
    } else if (tier === "basic") {
      monthlyPrice = pricing.basic;
    } else if (tier === "standard") {
      monthlyPrice = pricing.standard;
    } else {
      monthlyPrice = pricing.pro;
    }
    
    let planId: string | null = null;
    if (tier !== "enterprise" && planIds) {
      const tierKey = tier as 'basic' | 'standard' | 'pro';
      planId = planIds.annually[tierKey];
    }
    
    return {
      ...planData,
      monthlyPrice,
      planId
    };
  });

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.pricing_page.common.pricing_plans_for} ${industryName} | EasyReserv.io</title>
  <meta name="description" content="${t.pricing_page.hero.description}">
  <link rel="stylesheet" href="../../styles/pricing-export.css">
  <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;600;700&display=swap" rel="stylesheet">
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
      <nav class="nav">
        <select id="industry-selector" class="industry-select" data-testid="select-industry">
          ${Object.entries(INDUSTRY_KEYS).map(([key, value]) => `
            <option value="${value}" ${value === industryKey ? 'selected' : ''}>
              ${t.pricing_page.industries[value] || value}
            </option>
          `).join('')}
        </select>
      </nav>
    </header>

    <section class="hero">
      <h1>${t.pricing_page.hero.title_line1} ${t.pricing_page.hero.title_line2} <span class="highlight">${t.pricing_page.hero.title_highlight}</span></h1>
      <p class="hero-description">${t.pricing_page.hero.description}</p>
      <h2 class="industry-title">${t.pricing_page.common.pricing_plans_for} ${industryName}</h2>
    </section>

    <div class="billing-toggle" data-testid="billing-toggle">
      <button class="toggle-btn active" data-billing="monthly" data-testid="button-monthly">
        Lunar / Monthly / Ежемесячно
      </button>
      <button class="toggle-btn" data-billing="annual" data-testid="button-annual">
        Anual / Annual / Ежегодно
        <span class="save-badge-small">${t.pricing_page.common.save_10_percent}</span>
      </button>
    </div>

    <div class="pricing-grid" id="pricing-grid">
      ${monthlyPlans.map((plan, index) => 
        generatePricingCard(plan, index === 2, plan.planId, false, t)
      ).join('')}
    </div>

    <section class="cta-section">
      <h2>${t.pricing_page.cta.title}</h2>
      <p>${t.pricing_page.cta.description}</p>
      <a href="https://business.easyreserv.io/contact" class="cta-button primary" data-testid="button-contact">
        ${t.pricing_page.common.contact_us_full}
      </a>
    </section>

    <footer class="footer">
      <p>© 2024 EasyReserv.io. All rights reserved.</p>
      <p class="footer-lang">Language: ${lang.toUpperCase()} | Industry: ${industryName}</p>
    </footer>
  </div>

  <script>
    // Billing toggle functionality
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const pricingGrid = document.getElementById('pricing-grid');
    
    const monthlyPlans = ${JSON.stringify(monthlyPlans)};
    const annualPlans = ${JSON.stringify(annualPlans)};
    const translations = ${JSON.stringify(t.pricing_page)};
    
    function calculateAnnualPrice(monthlyPrice) {
      return Math.round((monthlyPrice * 12) * 0.9);
    }
    
    function generateCard(plan, isPopular, isAnnual) {
      const priceDisplay = plan.monthlyPrice 
        ? \`€\${isAnnual ? calculateAnnualPrice(plan.monthlyPrice) : plan.monthlyPrice}\`
        : translations.common.custom;
      
      const periodText = isAnnual ? \`/an\` : translations.common.per_month;
      const registerUrl = plan.planId ? \`https://app.easyreserv.io/register?planId=\${plan.planId}\` : '#contact';
      
      return \`
        <div class="pricing-card \${isPopular ? 'popular' : ''}">
          \${isPopular ? \`<div class="badge">\${translations.common.popular}</div>\` : ''}
          <h3>\${plan.name}</h3>
          <p class="description">\${plan.description}</p>
          <div class="price-container">
            <span class="price">\${priceDisplay}</span>
            \${plan.monthlyPrice ? \`<span class="period">\${periodText}</span>\` : ''}
          </div>
          \${plan.monthlyPrice && isAnnual ? \`<div class="save-badge">\${translations.common.save_10_percent}</div>\` : ''}
          <a href="\${registerUrl}" class="cta-button \${isPopular ? 'primary' : 'secondary'}" data-testid="button-select-plan">
            \${plan.monthlyPrice ? translations.common.select_plan : translations.common.contact_us}
          </a>
          <div class="features">
            <p class="features-title">\${translations.common.what_you_get}</p>
            <ul>
              \${plan.features.map(feature => \`<li><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>\${feature}</li>\`).join('')}
            </ul>
          </div>
        </div>
      \`;
    }
    
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const billing = btn.dataset.billing;
        toggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const plans = billing === 'monthly' ? monthlyPlans : annualPlans;
        pricingGrid.innerHTML = plans.map((plan, index) => 
          generateCard(plan, index === 2, billing === 'annual')
        ).join('');
      });
    });
    
    // Industry selector functionality
    const industrySelector = document.getElementById('industry-selector');
    industrySelector.addEventListener('change', (e) => {
      const selectedIndustry = e.target.value;
      const currentLang = '${lang}';
      window.location.href = \`../\${currentLang}/\${selectedIndustry}.html\`;
    });
  </script>
</body>
</html>`;
}

// Main export function
async function exportPricingPages() {
  console.log('🚀 Starting pricing export...\n');
  
  const industries = Object.values(INDUSTRY_KEYS);
  let totalExported = 0;
  
  for (const lang of LANGUAGES) {
    console.log(`📝 Generating ${lang.toUpperCase()} pages...`);
    
    for (const industry of industries) {
      try {
        const html = generateHTML(industry, lang);
        const outputPath = path.join(
          __dirname,
          '..',
          'html',
          lang,
          `${industry}.html`
        );
        
        fs.writeFileSync(outputPath, html, 'utf-8');
        totalExported++;
        console.log(`  ✅ ${industry}.html`);
      } catch (error) {
        console.error(`  ❌ Error generating ${industry} (${lang}):`, error);
      }
    }
    console.log('');
  }
  
  console.log(`✨ Export complete! Generated ${totalExported} files.`);
  console.log(`📁 Output: pricing_export/html/{ro,en,ru}/`);
}

// Run export
exportPricingPages().catch(console.error);
