# Ghid de Import - Tabel de Prețuri EasyReserv.io

## 📋 Descriere

Acest export conține structura completă a tabelului de prețuri din Landing Page-ul EasyReserv.io (business.easyreserv.io), gata pentru import în aplicația Web.

## 📁 Fișiere Disponibile

1. **pricing_structure.json** - Structura completă a planurilor și prețurilor (JSON)
2. **pricing_plans.csv** - Tabelul de prețuri în format CSV
3. **IMPORT_GUIDE.md** - Acest ghid de import

## 📊 Structura Tabelului de Prețuri

### Planuri Disponibile

| Plan | ID | Este Popular? | Tip Buton | Descriere |
|------|-----|--------------|-----------|-----------|
| Basic | `basic` | Nu | outline | Plan de bază pentru afaceri mici |
| Standard | `standard` | Nu | outline | Plan pentru afaceri în creștere |
| Pro | `pro` | **DA** | default | Plan profesional (RECOMANDAT) |
| Enterprise | `enterprise` | Nu | outline | Plan custom pentru corporații |

### Prețuri pe Industrii (EUR/lună)

| Industrie | Basic | Standard | Pro | Enterprise |
|-----------|-------|----------|-----|------------|
| Restaurante | 50€ | 95€ | 155€ | Custom |
| Cafenele | 39€ | 79€ | 129€ | Custom |
| Saloane / Barbershop | 45€ | 85€ | 139€ | Custom |
| Hotele & Pensiuni | 55€ | 105€ | 169€ | Custom |
| Chirii Auto | 49€ | 99€ | 159€ | Custom |
| Fitness | 45€ | 89€ | 145€ | Custom |
| Medical | 59€ | 115€ | 185€ | Custom |
| Retail | 45€ | 89€ | 145€ | Custom |
| Spălătorii Auto | 35€ | 75€ | 125€ | Custom |
| Tenis/Padel/Fotbal | 39€ | 79€ | 129€ | Custom |

**Notă:** Toate planurile oferă **10% discount** pentru abonament anual.

## 🔧 Proces de Import în Web App

### Opțiunea 1: Import JSON (Recomandat)

```javascript
// 1. Citește fișierul JSON
const pricingData = require('./pricing_structure.json');

// 2. Procesează prețurile pentru fiecare industrie
const industryPricing = pricingData.industry_pricing;

// Exemplu pentru Restaurante
const restaurantePricing = industryPricing.restaurante;

console.log(restaurantePricing);
// Output:
// {
//   industry_key: "restaurante",
//   monthly_prices: {
//     basic: 50,
//     standard: 95,
//     pro: 155,
//     enterprise: null
//   },
//   annual_discount: 0.10
// }

// 3. Calculează prețul anual cu discount
function calculateAnnualPrice(monthlyPrice, discount) {
  return monthlyPrice * 12 * (1 - discount);
}

// Exemplu: Plan Pro pentru Restaurante - Plată Anuală
const proMonthly = restaurantePricing.monthly_prices.pro; // 155€
const annualDiscount = restaurantePricing.annual_discount; // 0.10
const proAnnual = calculateAnnualPrice(proMonthly, annualDiscount); 
// 155 * 12 * 0.9 = 1,674€/an (139.5€/lună)
```

### Opțiunea 2: Import CSV

```python
import pandas as pd

# 1. Citește CSV-ul
pricing_df = pd.read_csv('pricing_plans.csv')

# 2. Afișează datele
print(pricing_df)

# 3. Filtrează după industrie
restaurante = pricing_df[pricing_df['Industry_Key'] == 'restaurante']
print(f"Basic: {restaurante['Basic_Price_EUR'].values[0]}€")
print(f"Standard: {restaurante['Standard_Price_EUR'].values[0]}€")
print(f"Pro: {restaurante['Pro_Price_EUR'].values[0]}€")
```

### Opțiunea 3: Import în Bază de Date SQL

```sql
-- 1. Creează tabelul
CREATE TABLE pricing_plans (
    id SERIAL PRIMARY KEY,
    industry_name VARCHAR(100) NOT NULL,
    industry_key VARCHAR(50) UNIQUE NOT NULL,
    basic_price_eur DECIMAL(10,2),
    standard_price_eur DECIMAL(10,2),
    pro_price_eur DECIMAL(10,2),
    enterprise_price VARCHAR(20) DEFAULT 'Custom',
    annual_discount DECIMAL(5,4) DEFAULT 0.10,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Importă datele
INSERT INTO pricing_plans 
(industry_name, industry_key, basic_price_eur, standard_price_eur, pro_price_eur, enterprise_price, annual_discount)
VALUES
('Restaurante', 'restaurante', 50.00, 95.00, 155.00, 'Custom', 0.10),
('Cafenele', 'cafenele', 39.00, 79.00, 129.00, 'Custom', 0.10),
('Saloane de frumusețe / Barbershopuri', 'saloane_barbershop', 45.00, 85.00, 139.00, 'Custom', 0.10),
('Hotele & Pensiuni', 'hotele', 55.00, 105.00, 169.00, 'Custom', 0.10),
('Chirii Auto', 'chirii_auto', 49.00, 99.00, 159.00, 'Custom', 0.10),
('Fitness', 'fitness', 45.00, 89.00, 145.00, 'Custom', 0.10),
('Medical', 'medical', 59.00, 115.00, 185.00, 'Custom', 0.10),
('Retail', 'retail', 45.00, 89.00, 145.00, 'Custom', 0.10),
('Spălătorii Auto', 'spalatorii_auto', 35.00, 75.00, 125.00, 'Custom', 0.10),
('Tenis/Padel/Fotbal', 'tenis_padel_fotbal', 39.00, 79.00, 129.00, 'Custom', 0.10);

-- 3. Interogare exemplu
SELECT industry_name, pro_price_eur, 
       ROUND(pro_price_eur * 12 * 0.9, 2) as pro_annual_price
FROM pricing_plans
WHERE industry_key = 'restaurante';
```

## 🎯 Exemple de Utilizare în Web App

### React/Next.js

```jsx
import pricingData from './pricing_structure.json';

function PricingTable({ industry = 'restaurante' }) {
  const industryData = pricingData.industry_pricing[industry];
  const tiers = pricingData.pricing_tiers;
  
  return (
    <div className="pricing-table">
      {Object.entries(tiers).map(([key, tier]) => {
        const price = industryData.monthly_prices[key];
        
        return (
          <div key={key} className={tier.is_popular ? 'popular' : ''}>
            <h3>{tier.tier_name}</h3>
            <p className="price">
              {price ? `€${price}/lună` : 'Custom Pricing'}
            </p>
            <button className={`btn-${tier.button_variant}`}>
              Alege {tier.tier_name}
            </button>
          </div>
        );
      })}
    </div>
  );
}
```

### Node.js / Express API

```javascript
const express = require('express');
const app = express();
const pricingData = require('./pricing_structure.json');

// Endpoint pentru prețuri per industrie
app.get('/api/pricing/:industry', (req, res) => {
  const industry = req.params.industry;
  const data = pricingData.industry_pricing[industry];
  
  if (!data) {
    return res.status(404).json({ error: 'Industry not found' });
  }
  
  res.json({
    industry: data.industry_names,
    prices: data.monthly_prices,
    discount: data.annual_discount
  });
});

// Endpoint pentru calculul prețului anual
app.get('/api/pricing/:industry/annual', (req, res) => {
  const industry = req.params.industry;
  const data = pricingData.industry_pricing[industry];
  
  const annualPrices = {};
  Object.entries(data.monthly_prices).forEach(([tier, monthlyPrice]) => {
    if (monthlyPrice !== null) {
      annualPrices[tier] = {
        monthly: monthlyPrice,
        annual_total: monthlyPrice * 12 * (1 - data.annual_discount),
        monthly_with_discount: (monthlyPrice * 12 * (1 - data.annual_discount)) / 12,
        savings: monthlyPrice * 12 - (monthlyPrice * 12 * (1 - data.annual_discount))
      };
    }
  });
  
  res.json(annualPrices);
});

app.listen(3000);
```

## 📝 Structura Caracteristicilor (Features)

Caracteristicile (features) pentru fiecare plan sunt organizate pe **categorii** și **valori**:

### Tipuri de Valori

1. **Boolean** (`true`/`false`): Caracteristica este inclusă sau nu
2. **String**: Descriere sau limitare (ex: "Max 3 utilizatori", "Add-on")
3. **Număr**: Valoare cantitativă (ex: "10 locații")

### Exemplu de Categorii pentru Restaurante

**Categorie 1: Rezervări & Gestionare**
- Sistem rezervări online
- Calendar disponibilitate
- Confirmare automată
- Liste așteptare

**Categorie 2: POS & Plăți**
- Terminal POS integrat
- Plăți card/cash
- Bon fiscal
- Facturi

**Categorie 3: Rapoarte & Analize**
- Dashboard analitic
- Rapoarte vânzări
- Export date

**Notă:** Fișierul JSON conține structura completă a caracteristicilor pentru toate cele 10 industrii.

## ⚙️ Configurare în Aplicația Web

### Pas 1: Import Inițial

```bash
# Copiază fișierele în proiect
cp pricing_export/pricing_structure.json /path/to/webapp/data/
cp pricing_export/pricing_plans.csv /path/to/webapp/data/
```

### Pas 2: Creează Service/API

```javascript
// pricing.service.js
class PricingService {
  constructor() {
    this.data = require('./data/pricing_structure.json');
  }
  
  getPricingForIndustry(industryKey) {
    return this.data.industry_pricing[industryKey];
  }
  
  getAllIndustries() {
    return Object.keys(this.data.industry_pricing);
  }
  
  calculatePrice(industryKey, tier, isAnnual = false) {
    const pricing = this.getPricingForIndustry(industryKey);
    const monthlyPrice = pricing.monthly_prices[tier];
    
    if (monthlyPrice === null) return 'Custom';
    
    if (isAnnual) {
      const discount = pricing.annual_discount;
      return monthlyPrice * (1 - discount);
    }
    
    return monthlyPrice;
  }
}

module.exports = new PricingService();
```

### Pas 3: Testează Importul

```javascript
const PricingService = require('./pricing.service');

// Test 1: Obține prețurile pentru Restaurante
console.log(PricingService.getPricingForIndustry('restaurante'));

// Test 2: Calculează preț Pro lunar
const proMonthly = PricingService.calculatePrice('restaurante', 'pro', false);
console.log(`Pro Monthly: €${proMonthly}`);

// Test 3: Calculează preț Pro anual (cu discount)
const proAnnual = PricingService.calculatePrice('restaurante', 'pro', true);
console.log(`Pro Annual (per month): €${proAnnual.toFixed(2)}`);

// Test 4: Listează toate industriile
console.log(PricingService.getAllIndustries());
```

## 🔄 Sincronizare & Actualizare

Pentru a menține prețurile sincronizate între Landing Page și Web App:

1. **Manual**: Re-exportă și re-importă periodic
2. **API**: Creează un endpoint în Landing Page care servește prețurile
3. **Shared Database**: Folosește aceeași bază de date pentru ambele aplicații

### Exemplu Sincronizare prin API

```javascript
// În Web App
async function syncPricing() {
  const response = await fetch('https://business.easyreserv.io/api/pricing/export');
  const pricingData = await response.json();
  
  // Salvează în baza de date
  await db.savePricing(pricingData);
}

// Rulează sincronizarea zilnic
setInterval(syncPricing, 24 * 60 * 60 * 1000);
```

## 📞 Suport

Pentru întrebări sau probleme cu importul:
- Email: support@easyreserv.io
- Documentație: https://docs.easyreserv.io

---

**Versiune Export:** 1.0  
**Data Generare:** 28 Octombrie 2025  
**Sursă:** business.easyreserv.io Landing Page
