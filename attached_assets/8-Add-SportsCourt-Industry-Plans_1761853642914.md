# 🎾 Adăugare Industrie SPORTS_COURT (Terenuri Sportive) cu Planuri

**Data:** 2025-10-30  
**Industrie:** SPORTS_COURT (nouă) - Tenis, Padel, Fotbal, Terenuri Sportive  
**Tip modificare:** INSERT planuri în tabela `plan`  
**Prioritate:** MARE  

---

## 📊 Context

Implementare suport pentru industria SPORTS_COURT (Terenuri Sportive: Tenis, Padel, Fotbal, Volei, Baschet) cu 6 planuri de subscription (3 tipuri × 2 perioade de facturare).

**Prețuri SPORTS_COURT:**
- Basic: €39/lună sau €421/an (10% discount)
- Standard: €79/lună sau €853/an (10% discount)
- Pro: €129/lună sau €1,393/an (10% discount)

**Notă Rotunjire:** Prețurile anuale SPORTS_COURT sunt rotunjite la EUR întreg pentru prezentare mai curată (€421.2→€421, €853.2→€853, €1,393.2→€1,393). Formula standard: Monthly × 12 × 0.9.

---

## 🆔 Plan IDs pentru SPORTS_COURT (UUID-uri noi)

| Plan | Billing Period | Plan ID | URL pentru B2B Site |
|------|----------------|---------|---------------------|
| **Basic** | MONTHLY | `3360c7e6-9893-4a9b-aa30-4388a2fb1b01` | `register?planId=3360c7e6-9893-4a9b-aa30-4388a2fb1b01` |
| **Standard** | MONTHLY | `02dc1a9d-d070-4c07-9a93-c38a98a6a922` | `register?planId=02dc1a9d-d070-4c07-9a93-c38a98a6a922` |
| **Pro** | MONTHLY | `71ff102f-63d3-458b-a6fb-f072602edd4f` | `register?planId=71ff102f-63d3-458b-a6fb-f072602edd4f` |
| **Basic** | ANNUALLY | `9957d5f0-40bd-4157-997e-14c454c05595` | `register?planId=9957d5f0-40bd-4157-997e-14c454c05595` |
| **Standard** | ANNUALLY | `e2589bfd-2a8e-46ef-8d65-bb3cd9f74b55` | `register?planId=e2589bfd-2a8e-46ef-8d65-bb3cd9f74b55` |
| **Pro** | ANNUALLY | `c6f142d2-3c60-4ef8-8995-604547091994` | `register?planId=c6f142d2-3c60-4ef8-8995-604547091994` |

---

## 🗄️ Modificări Necesare în Baza de Date

### **Tabelă afectată:** `plan`

**IMPORTANT:** Aceste INSERT-uri trebuie executate în **PRODUCTION** database.

---

## 📝 Script SQL pentru Producție

```sql
-- ============================================
-- Add SPORTS_COURT Industry Plans (2025-10-30)
-- Tenis, Padel, Fotbal - Terenuri Sportive
-- ============================================

-- MONTHLY PLANS
-- ---------------------------------------------

-- Basic Monthly: €39
INSERT INTO plan (
  id, 
  name, 
  price, 
  type, 
  billing_period, 
  place_type,
  created_at,
  updated_at
) VALUES (
  '3360c7e6-9893-4a9b-aa30-4388a2fb1b01',
  'Basic',
  39.00,
  'BASIC',
  'MONTHLY',
  'SPORTS_COURT',
  NOW(),
  NOW()
);

-- Standard Monthly: €79
INSERT INTO plan (
  id, 
  name, 
  price, 
  type, 
  billing_period, 
  place_type,
  created_at,
  updated_at
) VALUES (
  '02dc1a9d-d070-4c07-9a93-c38a98a6a922',
  'Standard',
  79.00,
  'STANDARD',
  'MONTHLY',
  'SPORTS_COURT',
  NOW(),
  NOW()
);

-- Pro Monthly: €129
INSERT INTO plan (
  id, 
  name, 
  price, 
  type, 
  billing_period, 
  place_type,
  created_at,
  updated_at
) VALUES (
  '71ff102f-63d3-458b-a6fb-f072602edd4f',
  'Pro',
  129.00,
  'PRO',
  'MONTHLY',
  'SPORTS_COURT',
  NOW(),
  NOW()
);


-- ANNUAL PLANS (10% discount applied, rotunjit)
-- ---------------------------------------------

-- Basic Annually: €421 (39 × 12 × 0.9 = 421.2 → 421)
INSERT INTO plan (
  id, 
  name, 
  price, 
  type, 
  billing_period, 
  place_type,
  created_at,
  updated_at
) VALUES (
  '9957d5f0-40bd-4157-997e-14c454c05595',
  'Basic',
  421.00,
  'BASIC',
  'ANNUALLY',
  'SPORTS_COURT',
  NOW(),
  NOW()
);

-- Standard Annually: €853 (79 × 12 × 0.9 = 853.2 → 853)
INSERT INTO plan (
  id, 
  name, 
  price, 
  type, 
  billing_period, 
  place_type,
  created_at,
  updated_at
) VALUES (
  'e2589bfd-2a8e-46ef-8d65-bb3cd9f74b55',
  'Standard',
  853.00,
  'STANDARD',
  'ANNUALLY',
  'SPORTS_COURT',
  NOW(),
  NOW()
);

-- Pro Annually: €1,393 (129 × 12 × 0.9 = 1393.2 → 1393)
INSERT INTO plan (
  id, 
  name, 
  price, 
  type, 
  billing_period, 
  place_type,
  created_at,
  updated_at
) VALUES (
  'c6f142d2-3c60-4ef8-8995-604547091994',
  'Pro',
  1393.00,
  'PRO',
  'ANNUALLY',
  'SPORTS_COURT',
  NOW(),
  NOW()
);
```

---

## ✅ Verificare După Executare

După ce INSERT-urile au fost executate, rulați această query pentru verificare:

```sql
-- Verificare planuri SPORTS_COURT
SELECT 
  CONCAT(name, ' (', billing_period, ')') as plan_name,
  price as price_eur,
  place_type,
  type,
  billing_period,
  SUBSTRING(id, 1, 8) as id_prefix
FROM plan 
WHERE place_type = 'SPORTS_COURT' 
ORDER BY 
  CASE billing_period 
    WHEN 'MONTHLY' THEN 1 
    WHEN 'ANNUALLY' THEN 2 
  END,
  CASE type 
    WHEN 'BASIC' THEN 1 
    WHEN 'STANDARD' THEN 2 
    WHEN 'PRO' THEN 3 
  END;
```

**Output așteptat:**

```
+-------------------+-----------+--------------+-----------+-----------------+-----------+
| plan_name         | price_eur | place_type   | type      | billing_period  | id_prefix |
+-------------------+-----------+--------------+-----------+-----------------+-----------+
| Basic (MONTHLY)   | 39.00     | SPORTS_COURT | BASIC     | MONTHLY         | 3360c7e6  |
| Standard (MONTHLY)| 79.00     | SPORTS_COURT | STANDARD  | MONTHLY         | 02dc1a9d  |
| Pro (MONTHLY)     | 129.00    | SPORTS_COURT | PRO       | MONTHLY         | 71ff102f  |
| Basic (ANNUALLY)  | 421.00    | SPORTS_COURT | BASIC     | ANNUALLY        | 9957d5f0  |
| Standard (ANNUALLY)| 853.00   | SPORTS_COURT | STANDARD  | ANNUALLY        | e2589bfd  |
| Pro (ANNUALLY)    | 1393.00   | SPORTS_COURT | PRO       | ANNUALLY        | c6f142d2  |
+-------------------+-----------+--------------+-----------+-----------------+-----------+
```

---

## 🌐 Integrare B2B Website

### **Plan Selection URLs pentru SPORTS_COURT:**

```html
<!-- Basic Monthly - €39/lună -->
<a href="https://app.easyreserv.io/register?planId=3360c7e6-9893-4a9b-aa30-4388a2fb1b01">
  Înregistrare Basic Monthly (Terenuri Sportive)
</a>

<!-- Standard Monthly - €79/lună -->
<a href="https://app.easyreserv.io/register?planId=02dc1a9d-d070-4c07-9a93-c38a98a6a922">
  Înregistrare Standard Monthly (Terenuri Sportive)
</a>

<!-- Pro Monthly - €129/lună (RECOMANDAT) -->
<a href="https://app.easyreserv.io/register?planId=71ff102f-63d3-458b-a6fb-f072602edd4f">
  Înregistrare Pro Monthly (Terenuri Sportive) ⭐
</a>

<!-- Basic Annually - €421/an -->
<a href="https://app.easyreserv.io/register?planId=9957d5f0-40bd-4157-997e-14c454c05595">
  Înregistrare Basic Annually (Terenuri Sportive)
</a>

<!-- Standard Annually - €853/an -->
<a href="https://app.easyreserv.io/register?planId=e2589bfd-2a8e-46ef-8d65-bb3cd9f74b55">
  Înregistrare Standard Annually (Terenuri Sportive)
</a>

<!-- Pro Annually - €1,393/an -->
<a href="https://app.easyreserv.io/register?planId=c6f142d2-3c60-4ef8-8995-604547091994">
  Înregistrare Pro Annually (Terenuri Sportive)
</a>
```

### **Sau pentru copy/paste rapid:**

```
Basic Monthly:     3360c7e6-9893-4a9b-aa30-4388a2fb1b01
Standard Monthly:  02dc1a9d-d070-4c07-9a93-c38a98a6a922
Pro Monthly:       71ff102f-63d3-458b-a6fb-f072602edd4f
Basic Annually:    9957d5f0-40bd-4157-997e-14c454c05595
Standard Annually: e2589bfd-2a8e-46ef-8d65-bb3cd9f74b55
Pro Annually:      c6f142d2-3c60-4ef8-8995-604547091994
```

---

## ⚠️ Impact și Considerații

### **1. PlaceType Enum**

Backend-ul acum suportă:
```typescript
export enum PlaceType {
  RESTAURANT = 'RESTAURANT',
  CAFENEA = 'CAFENEA',
  BEAUTY_SALON = 'BEAUTY_SALON',
  CAR_WASH = 'CAR_WASH',
  HOTEL = 'HOTEL',
  MEDICAL = 'MEDICAL',
  CAR_RENTAL = 'CAR_RENTAL',
  SPORTS_COURT = 'SPORTS_COURT',  // ✅ NOU ADĂUGAT
}
```

### **2. Field Mapping**

`sportsCourtId` configurat pentru relații database:
```typescript
[PlaceType.SPORTS_COURT]: 'sportsCourtId',
```

### **3. Prețuri competitive pentru Terenuri Sportive**

SPORTS_COURT are prețuri accesibile pentru complexe sportive:
- Basic: €39 (1-2 terenuri, ideal pentru teren privat)
- Standard: €79 (3-5 terenuri, complex mic)
- Pro: €129 (6-10 terenuri, complex mediu cu multe features)

**Perfect pentru complexe sportive de toate dimensiunile!** 🎾

### **4. Specificități Terenuri Sportive**

- 🎾 **Multi-Sport** - tenis, padel, fotbal, volei, baschet
- 📅 **Booking 24/7** - rezervări online non-stop
- 💰 **Dynamic Pricing** - peak hours, weekend, sezonale
- 🏆 **Membri & Abonamente** - access prioritar, credits system
- 👨‍🏫 **Lecții & Antrenori** - programare lecții individuale sau grup
- 🎯 **Turnee** - organizare competiții cu bracket system
- 📊 **KPIs Specifice** - Court Occupancy, Revenue per Court/Hour

---

## 📋 Checklist Executare

- [ ] Backup baza de date production
- [ ] Conectare la production database
- [ ] Executare INSERT-uri SQL (copy/paste din secțiunea de mai sus)
- [ ] Rulare query de verificare
- [ ] Confirmare că toate cele 6 planuri au fost adăugate
- [ ] Update B2B website cu UUID-urile noi pentru SPORTS_COURT
- [ ] Test înregistrare client cu plan Basic SPORTS_COURT
- [ ] Verificare că `place_type = 'SPORTS_COURT'` apare corect
- [ ] Documentare în changelog production

---

## 🔙 Rollback (dacă e necesar)

Dacă trebuie să ștergeți planurile SPORTS_COURT:

```sql
-- ROLLBACK - Ștergere planuri SPORTS_COURT
DELETE FROM plan WHERE place_type = 'SPORTS_COURT';

-- Verificare
SELECT COUNT(*) FROM plan WHERE place_type = 'SPORTS_COURT';
-- Trebuie să returneze 0
```

---

## 📋 Comparație Prețuri pe Industrii (ACTUALIZAT)

| Industrie | Basic M/A | Standard M/A | Pro M/A |
|-----------|-----------|--------------|---------|
| **CAR_WASH** 🚿 | €35 / €378 | €75 / €810 | €125 / €1,350 |
| **SPORTS_COURT** 🎾 | €39 / €421 | €79 / €853 | €129 / €1,393 |
| **BEAUTY_SALON** 💇 | €40 / €432 | €85 / €918 | €140 / €1,512 |
| **MEDICAL** 🏥 | €49 / €529 | €99 / €1,069 | €199 / €2,149 |
| **RESTAURANT** 🍽️ | €50 / €540 | €125 / €1,350 | €200 / €2,160 |
| **CAFENEA** ☕ | €50 / €540 | €125 / €1,350 | €200 / €2,160 |
| **CAR_RENTAL** 🚗 | €59 / €637 | €119 / €1,285 | €199 / €2,149 |
| **HOTEL** 🏨 | €79 / €853 | €149 / €1,609 | €249 / €2,689 |

*M = Monthly, A = Annually (10% discount, rotunjit)*

**Observație:** Toate cele 8 industrii acum implementate! ✅

---

## 💡 Use Cases SPORTS_COURT

### **Basic - €39/lună:**
- Teren privat / Individual
- 1-2 terenuri
- 1 sport (ex: doar tenis)
- Booking simplu
- Tarife fixe

### **Standard - €79/lună:**
- Complex mic
- 3-5 terenuri
- 2 sporturi (ex: tenis + padel)
- Booking online 24/7
- Tarife flexibile (zi/noapte)
- Membri până la 200
- Lecții & antrenori

### **Pro - €129/lună (RECOMANDAT):**
- Complex mediu
- 6-10 terenuri
- 3+ sporturi (tenis, padel, fotbal, volei)
- Dynamic pricing (peak hours, weekend)
- Membri până la 1000
- Abonamente cu credits system
- Organizare turnee
- Forecast cerere

---

## 📊 KPIs Terenuri Sportive (Pro & Enterprise)

**Operations:**
- 🎾 **Court Occupancy Rate** - % timp terenurile sunt ocupate
- 💰 **Revenue per Court/Hour** - venit mediu per teren per oră
- ⏰ **Peak vs Off-Peak Ratio** - distribuție rezervări
- 📊 **Average booking duration** - durata medie rezervare

**Members:**
- 🎫 **Active memberships** - membri activi
- 🔄 **Retention rate** - % membri care se reînnoiesc
- 📈 **Credits utilization** - % credite folosite vs cumpărate
- 🏆 **Member vs Public ratio** - membri vs non-membri

**Financial:**
- 💵 **Revenue mix** - terenuri vs lecții vs shop
- 📊 **Average revenue per booking**
- 🎯 **Yield per court** - profitabilitate per teren
- 📈 **YoY growth** - creștere an-per-an

---

## 🔒 Features Specifice Terenuri Sportive

### **Multi-Sport Management:**
- ✅ **Tenis** - court indoor/outdoor
- ✅ **Padel** - terenuri acoperite
- ✅ **Fotbal** - mini-football 5v5, 7v7
- ✅ **Volei** - beach volley
- ✅ **Baschet** - half-court

### **Booking Intelligence:**
- 📅 **Rezervări recurente** - Luni & Joi la 18:00
- 👥 **Rezervări grup** - pentru turnee
- 🔔 **Reminder automat** - cu 24h înainte
- ⏰ **Slot-uri flexibile** - 30min, 1h, 1.5h, 2h

### **Prețuri Dinamice:**
- ☀️ **Peak hours** - 17:00-21:00 mai scump
- 🌙 **Off-peak** - 10:00-15:00 mai ieftin
- 📅 **Weekend vs weekday**
- ❄️ **Sezonale** - vară vs iarnă
- 🤖 **AI pricing** (Enterprise)

---

## 📞 Contact pentru Executare

Persoana responsabilă cu deployment-ul production va executa aceste INSERT-uri.

**Estimare timp:** 5 minute  
**Downtime necesar:** NU (operațiune safe)  
**Testare necesară:** DA (verificare înregistrare SPORTS_COURT în frontend)  

---

**Status:** ⏳ În așteptare executare production  
**Creat de:** Agent Development  
**Data creării:** 2025-10-30  
**Cod actualizat:** ✅ DA (`src/scripts/insert-plans.ts` + enum actualizat cu SPORTS_COURT)  
**Total industrii:** 🎉 **8 industrii complete!**
