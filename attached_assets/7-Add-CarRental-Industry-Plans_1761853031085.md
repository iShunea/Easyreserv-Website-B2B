# 🚗 Adăugare Industrie CAR_RENTAL (Chirii Auto / Rent-a-Car) cu Planuri

**Data:** 2025-10-30  
**Industrie:** CAR_RENTAL (nouă) - Chirii Auto, Rent-a-Car, Închirieri Vehicule  
**Tip modificare:** INSERT planuri în tabela `plan`  
**Prioritate:** MARE  

---

## 📊 Context

Implementare suport pentru industria CAR_RENTAL (Chirii Auto / Rent-a-Car) cu 6 planuri de subscription (3 tipuri × 2 perioade de facturare).

**Prețuri CAR_RENTAL:**
- Basic: €59/lună sau €637/an (10% discount)
- Standard: €119/lună sau €1,285/an (10% discount)
- Pro: €199/lună sau €2,149/an (10% discount)

**Notă Rotunjire:** Prețurile anuale CAR_RENTAL sunt rotunjite la EUR întreg pentru prezentare mai curată (€636.6→€637, €1,285.2→€1,285, €2,149.2→€2,149). Formula standard: Monthly × 12 × 0.9.

---

## 🆔 Plan IDs pentru CAR_RENTAL (UUID-uri noi)

| Plan | Billing Period | Plan ID | URL pentru B2B Site |
|------|----------------|---------|---------------------|
| **Basic** | MONTHLY | `76c21ba0-ec83-464a-9d09-430148eb90fa` | `register?planId=76c21ba0-ec83-464a-9d09-430148eb90fa` |
| **Standard** | MONTHLY | `e64e3297-3e11-4dc5-a9be-3b3a3ebaa860` | `register?planId=e64e3297-3e11-4dc5-a9be-3b3a3ebaa860` |
| **Pro** | MONTHLY | `5d4a61ae-c795-49ef-b732-3c6ca45afcef` | `register?planId=5d4a61ae-c795-49ef-b732-3c6ca45afcef` |
| **Basic** | ANNUALLY | `30945e8e-b546-4461-8f0c-49c401fa788f` | `register?planId=30945e8e-b546-4461-8f0c-49c401fa788f` |
| **Standard** | ANNUALLY | `d201420e-771c-44c3-9ca9-54e305fee4cd` | `register?planId=d201420e-771c-44c3-9ca9-54e305fee4cd` |
| **Pro** | ANNUALLY | `de540f19-0afe-40e1-bd86-b25dd9f23349` | `register?planId=de540f19-0afe-40e1-bd86-b25dd9f23349` |

---

## 🗄️ Modificări Necesare în Baza de Date

### **Tabelă afectată:** `plan`

**IMPORTANT:** Aceste INSERT-uri trebuie executate în **PRODUCTION** database.

---

## 📝 Script SQL pentru Producție

```sql
-- ============================================
-- Add CAR_RENTAL Industry Plans (2025-10-30)
-- Chirii Auto, Rent-a-Car, Închirieri Vehicule
-- ============================================

-- MONTHLY PLANS
-- ---------------------------------------------

-- Basic Monthly: €59
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
  '76c21ba0-ec83-464a-9d09-430148eb90fa',
  'Basic',
  59.00,
  'BASIC',
  'MONTHLY',
  'CAR_RENTAL',
  NOW(),
  NOW()
);

-- Standard Monthly: €119
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
  'e64e3297-3e11-4dc5-a9be-3b3a3ebaa860',
  'Standard',
  119.00,
  'STANDARD',
  'MONTHLY',
  'CAR_RENTAL',
  NOW(),
  NOW()
);

-- Pro Monthly: €199
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
  '5d4a61ae-c795-49ef-b732-3c6ca45afcef',
  'Pro',
  199.00,
  'PRO',
  'MONTHLY',
  'CAR_RENTAL',
  NOW(),
  NOW()
);


-- ANNUAL PLANS (10% discount applied, rotunjit)
-- ---------------------------------------------

-- Basic Annually: €637 (59 × 12 × 0.9 = 636.6 → 637)
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
  '30945e8e-b546-4461-8f0c-49c401fa788f',
  'Basic',
  637.00,
  'BASIC',
  'ANNUALLY',
  'CAR_RENTAL',
  NOW(),
  NOW()
);

-- Standard Annually: €1,285 (119 × 12 × 0.9 = 1285.2 → 1285)
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
  'd201420e-771c-44c3-9ca9-54e305fee4cd',
  'Standard',
  1285.00,
  'STANDARD',
  'ANNUALLY',
  'CAR_RENTAL',
  NOW(),
  NOW()
);

-- Pro Annually: €2,149 (199 × 12 × 0.9 = 2149.2 → 2149)
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
  'de540f19-0afe-40e1-bd86-b25dd9f23349',
  'Pro',
  2149.00,
  'PRO',
  'ANNUALLY',
  'CAR_RENTAL',
  NOW(),
  NOW()
);
```

---

## ✅ Verificare După Executare

După ce INSERT-urile au fost executate, rulați această query pentru verificare:

```sql
-- Verificare planuri CAR_RENTAL
SELECT 
  CONCAT(name, ' (', billing_period, ')') as plan_name,
  price as price_eur,
  place_type,
  type,
  billing_period,
  SUBSTRING(id, 1, 8) as id_prefix
FROM plan 
WHERE place_type = 'CAR_RENTAL' 
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
+-------------------+-----------+------------+-----------+-----------------+-----------+
| plan_name         | price_eur | place_type | type      | billing_period  | id_prefix |
+-------------------+-----------+------------+-----------+-----------------+-----------+
| Basic (MONTHLY)   | 59.00     | CAR_RENTAL | BASIC     | MONTHLY         | 76c21ba0  |
| Standard (MONTHLY)| 119.00    | CAR_RENTAL | STANDARD  | MONTHLY         | e64e3297  |
| Pro (MONTHLY)     | 199.00    | CAR_RENTAL | PRO       | MONTHLY         | 5d4a61ae  |
| Basic (ANNUALLY)  | 637.00    | CAR_RENTAL | BASIC     | ANNUALLY        | 30945e8e  |
| Standard (ANNUALLY)| 1285.00  | CAR_RENTAL | STANDARD  | ANNUALLY        | d201420e  |
| Pro (ANNUALLY)    | 2149.00   | CAR_RENTAL | PRO       | ANNUALLY        | de540f19  |
+-------------------+-----------+------------+-----------+-----------------+-----------+
```

---

## 🌐 Integrare B2B Website

### **Plan Selection URLs pentru CAR_RENTAL:**

```html
<!-- Basic Monthly - €59/lună -->
<a href="https://app.easyreserv.io/register?planId=76c21ba0-ec83-464a-9d09-430148eb90fa">
  Înregistrare Basic Monthly (Car Rental)
</a>

<!-- Standard Monthly - €119/lună -->
<a href="https://app.easyreserv.io/register?planId=e64e3297-3e11-4dc5-a9be-3b3a3ebaa860">
  Înregistrare Standard Monthly (Car Rental)
</a>

<!-- Pro Monthly - €199/lună (RECOMANDAT) -->
<a href="https://app.easyreserv.io/register?planId=5d4a61ae-c795-49ef-b732-3c6ca45afcef">
  Înregistrare Pro Monthly (Car Rental) ⭐
</a>

<!-- Basic Annually - €637/an -->
<a href="https://app.easyreserv.io/register?planId=30945e8e-b546-4461-8f0c-49c401fa788f">
  Înregistrare Basic Annually (Car Rental)
</a>

<!-- Standard Annually - €1,285/an -->
<a href="https://app.easyreserv.io/register?planId=d201420e-771c-44c3-9ca9-54e305fee4cd">
  Înregistrare Standard Annually (Car Rental)
</a>

<!-- Pro Annually - €2,149/an -->
<a href="https://app.easyreserv.io/register?planId=de540f19-0afe-40e1-bd86-b25dd9f23349">
  Înregistrare Pro Annually (Car Rental)
</a>
```

### **Sau pentru copy/paste rapid:**

```
Basic Monthly:     76c21ba0-ec83-464a-9d09-430148eb90fa
Standard Monthly:  e64e3297-3e11-4dc5-a9be-3b3a3ebaa860
Pro Monthly:       5d4a61ae-c795-49ef-b732-3c6ca45afcef
Basic Annually:    30945e8e-b546-4461-8f0c-49c401fa788f
Standard Annually: d201420e-771c-44c3-9ca9-54e305fee4cd
Pro Annually:      de540f19-0afe-40e1-bd86-b25dd9f23349
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
  CAR_RENTAL = 'CAR_RENTAL',  // ✅ NOU ADĂUGAT
}
```

### **2. Field Mapping**

`carRentalId` configurat pentru relații database:
```typescript
[PlaceType.CAR_RENTAL]: 'carRentalId',
```

### **3. Prețuri competitive pentru sectorul Rent-a-Car**

CAR_RENTAL are prețuri premium pentru complexitatea business-ului:
- Basic: €59 (fleet management simplu, 5-10 mașini)
- Standard: €119 (management mediu, 15-30 mașini)
- Pro: €199 (fleet mare, 40-100 mașini, features avansate)

**Perfect pentru companii de închirieri auto de toate dimensiunile!** 🚗

### **4. Specificități Rent-a-Car**

- 🚗 **Fleet Management** - inventar, status vehicule, mentenanță
- 📅 **Booking Engine** - rezervări online, multi-pickup/drop-off
- 📸 **Check-in/Check-out Digital** - damage report cu foto
- 💰 **Dynamic Pricing** - sezonale, peak pricing, corporate rates
- 💳 **Pre-autorizare Card** - garanții securizate
- 📊 **KPIs Specifice** - RevPAC, Fleet Utilization, ADR

---

## 📋 Checklist Executare

- [ ] Backup baza de date production
- [ ] Conectare la production database
- [ ] Executare INSERT-uri SQL (copy/paste din secțiunea de mai sus)
- [ ] Rulare query de verificare
- [ ] Confirmare că toate cele 6 planuri au fost adăugate
- [ ] Update B2B website cu UUID-urile noi pentru CAR_RENTAL
- [ ] Test înregistrare client cu plan Basic CAR_RENTAL
- [ ] Verificare că `place_type = 'CAR_RENTAL'` apare corect
- [ ] Documentare în changelog production

---

## 🔙 Rollback (dacă e necesar)

Dacă trebuie să ștergeți planurile CAR_RENTAL:

```sql
-- ROLLBACK - Ștergere planuri CAR_RENTAL
DELETE FROM plan WHERE place_type = 'CAR_RENTAL';

-- Verificare
SELECT COUNT(*) FROM plan WHERE place_type = 'CAR_RENTAL';
-- Trebuie să returneze 0
```

---

## 📋 Comparație Prețuri pe Industrii (ACTUALIZAT)

| Industrie | Basic M/A | Standard M/A | Pro M/A |
|-----------|-----------|--------------|---------|
| **CAR_WASH** 🚿 | €35 / €378 | €75 / €810 | €125 / €1,350 |
| **BEAUTY_SALON** 💇 | €40 / €432 | €85 / €918 | €140 / €1,512 |
| **MEDICAL** 🏥 | €49 / €529 | €99 / €1,069 | €199 / €2,149 |
| **RESTAURANT** 🍽️ | €50 / €540 | €125 / €1,350 | €200 / €2,160 |
| **CAFENEA** ☕ | €50 / €540 | €125 / €1,350 | €200 / €2,160 |
| **CAR_RENTAL** 🚗 | €59 / €637 | €119 / €1,285 | €199 / €2,149 |
| **HOTEL** 🏨 | €79 / €853 | €149 / €1,609 | €249 / €2,689 |

*M = Monthly, A = Annually (10% discount, rotunjit)*

**Observație:** Toate cele 7 industrii acum implementate! ✅

---

## 💡 Use Cases CAR_RENTAL

### **Basic - €59/lună:**
- Start-up / Companie locală
- 5-10 mașini în flotă
- Fleet management simplu
- Rezervări manuale sau cu calendar

### **Standard - €119/lună:**
- Companie medie
- 15-30 mașini
- Booking online + calendare
- Check-in/Check-out digital cu foto
- Multi-pickup/drop-off
- Programare mentenanță

### **Pro - €199/lună (RECOMANDAT):**
- Fleet mare
- 40-100 mașini
- Dynamic pricing (sezonale, peak, corporate)
- Pre-autorizare card automată
- Revenue management avansat
- Rapoarte KPI complete (RevPAC, ADR, Utilization)
- Forecast & yield per class

---

## 📊 KPIs Rent-a-Car (Pro & Enterprise)

**Operations:**
- 🚗 **Fleet Utilization Rate** - % timp mașinile sunt închiriate
- ⏱️ **Turnaround Time** - timp între închirieri
- 🔧 **Maintenance Cost** - costuri service per vehicul
- 📈 **Booking Lead Time** - cât din timp înainte rezervă clienții

**Financial:**
- 💰 **RevPAC** (Revenue Per Available Car) - venit per mașină disponibilă
- 📊 **ADR** (Average Daily Rate) - tarif mediu zilnic
- 💵 **Revenue per vehicle class**
- 📈 **Seasonal performance**

**Customer:**
- 👥 **Customer retention rate**
- ⭐ **Satisfaction score** (NPS)
- 🔄 **Repeat booking rate**

---

## 🔒 Securitate & Integrări

### **Fleet Management:**
- ✅ **GPS tracking** (Enterprise)
- 🔐 **Telematică** - sensor integration
- 📸 **Damage detection** - AI scan (Enterprise)
- 🔧 **Programare mentenanță** automată

### **Payments:**
- 💳 **Pre-autorizare card** - garanții securizate
- 💰 **Multi-gateway** payment processing
- 🔄 **Refund automat** la returnare
- 🏦 **Reconciliere bancară**

---

## 📞 Contact pentru Executare

Persoana responsabilă cu deployment-ul production va executa aceste INSERT-uri.

**Estimare timp:** 5 minute  
**Downtime necesar:** NU (operațiune safe)  
**Testare necesară:** DA (verificare înregistrare CAR_RENTAL în frontend)  

---

**Status:** ⏳ În așteptare executare production  
**Creat de:** Agent Development  
**Data creării:** 2025-10-30  
**Cod actualizat:** ✅ DA (`src/scripts/insert-plans.ts` + enum actualizat cu CAR_RENTAL)  
**Total industrii:** 🎉 **7 industrii complete!**
