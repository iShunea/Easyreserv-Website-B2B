# 🚿 Adăugare Industrie SPĂLĂTORII AUTO (CAR_WASH) cu Planuri

**Data:** 2025-10-30  
**Industrie:** CAR_WASH (nouă)  
**Tip modificare:** INSERT planuri în tabela `plan`  
**Prioritate:** MARE  

---

## 📊 Context

Implementare suport pentru industria SPĂLĂTORII AUTO (CAR_WASH) cu 6 planuri de subscription (3 tipuri × 2 perioade de facturare).

**Prețuri CAR_WASH (cele mai mici din toate industriile):**
- Basic: €35/lună sau €378/an (10% discount)
- Standard: €75/lună sau €810/an (10% discount)
- Pro: €125/lună sau €1,350/an (10% discount)

---

## 🆔 Plan IDs pentru CAR_WASH (UUID-uri noi)

| Plan | Billing Period | Plan ID | URL pentru B2B Site |
|------|----------------|---------|---------------------|
| **Basic** | MONTHLY | `ebe3b1ba-a954-40a9-8512-c0409695ae34` | `register?planId=ebe3b1ba-a954-40a9-8512-c0409695ae34` |
| **Standard** | MONTHLY | `af9a40d5-6882-4bcb-8601-c35cc5d5e6ff` | `register?planId=af9a40d5-6882-4bcb-8601-c35cc5d5e6ff` |
| **Pro** | MONTHLY | `2536ae4b-9797-4b72-9eed-6796e97448ce` | `register?planId=2536ae4b-9797-4b72-9eed-6796e97448ce` |
| **Basic** | ANNUALLY | `eeabd488-8e38-4bae-bbbe-38dd68585e8c` | `register?planId=eeabd488-8e38-4bae-bbbe-38dd68585e8c` |
| **Standard** | ANNUALLY | `2e8e0e63-2a65-440f-821a-e5755d77ecf9` | `register?planId=2e8e0e63-2a65-440f-821a-e5755d77ecf9` |
| **Pro** | ANNUALLY | `5dacdfb2-c34f-47d7-8f4b-7fc3ef5c4f39` | `register?planId=5dacdfb2-c34f-47d7-8f4b-7fc3ef5c4f39` |

---

## 🗄️ Modificări Necesare în Baza de Date

### **Tabelă afectată:** `plan`

**IMPORTANT:** Aceste INSERT-uri trebuie executate în **PRODUCTION** database.

---

## 📝 Script SQL pentru Producție

```sql
-- ============================================
-- Add CAR_WASH Industry Plans (2025-10-30)
-- ============================================

-- MONTHLY PLANS
-- ---------------------------------------------

-- Basic Monthly: €35
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
  'ebe3b1ba-a954-40a9-8512-c0409695ae34',
  'Basic',
  35.00,
  'BASIC',
  'MONTHLY',
  'CAR_WASH',
  NOW(),
  NOW()
);

-- Standard Monthly: €75
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
  'af9a40d5-6882-4bcb-8601-c35cc5d5e6ff',
  'Standard',
  75.00,
  'STANDARD',
  'MONTHLY',
  'CAR_WASH',
  NOW(),
  NOW()
);

-- Pro Monthly: €125
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
  '2536ae4b-9797-4b72-9eed-6796e97448ce',
  'Pro',
  125.00,
  'PRO',
  'MONTHLY',
  'CAR_WASH',
  NOW(),
  NOW()
);


-- ANNUAL PLANS (10% discount applied)
-- ---------------------------------------------

-- Basic Annually: €378 (35 × 12 × 0.9)
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
  'eeabd488-8e38-4bae-bbbe-38dd68585e8c',
  'Basic',
  378.00,
  'BASIC',
  'ANNUALLY',
  'CAR_WASH',
  NOW(),
  NOW()
);

-- Standard Annually: €810 (75 × 12 × 0.9)
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
  '2e8e0e63-2a65-440f-821a-e5755d77ecf9',
  'Standard',
  810.00,
  'STANDARD',
  'ANNUALLY',
  'CAR_WASH',
  NOW(),
  NOW()
);

-- Pro Annually: €1,350 (125 × 12 × 0.9)
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
  '5dacdfb2-c34f-47d7-8f4b-7fc3ef5c4f39',
  'Pro',
  1350.00,
  'PRO',
  'ANNUALLY',
  'CAR_WASH',
  NOW(),
  NOW()
);
```

---

## ✅ Verificare După Executare

După ce INSERT-urile au fost executate, rulați această query pentru verificare:

```sql
-- Verificare planuri CAR_WASH
SELECT 
  CONCAT(name, ' (', billing_period, ')') as plan_name,
  price as price_eur,
  place_type,
  type,
  billing_period,
  SUBSTRING(id, 1, 8) as id_prefix
FROM plan 
WHERE place_type = 'CAR_WASH' 
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
| Basic (MONTHLY)   | 35.00     | CAR_WASH   | BASIC     | MONTHLY         | ebe3b1ba  |
| Standard (MONTHLY)| 75.00     | CAR_WASH   | STANDARD  | MONTHLY         | af9a40d5  |
| Pro (MONTHLY)     | 125.00    | CAR_WASH   | PRO       | MONTHLY         | 2536ae4b  |
| Basic (ANNUALLY)  | 378.00    | CAR_WASH   | BASIC     | ANNUALLY        | eeabd488  |
| Standard (ANNUALLY)| 810.00   | CAR_WASH   | STANDARD  | ANNUALLY        | 2e8e0e63  |
| Pro (ANNUALLY)    | 1350.00   | CAR_WASH   | PRO       | ANNUALLY        | 5dacdfb2  |
+-------------------+-----------+------------+-----------+-----------------+-----------+
```

---

## 🌐 Integrare B2B Website

### **Plan Selection URLs pentru CAR_WASH:**

```html
<!-- Basic Monthly - €35/lună -->
<a href="https://app.easyreserv.io/register?planId=ebe3b1ba-a954-40a9-8512-c0409695ae34">
  Înregistrare Basic Monthly
</a>

<!-- Standard Monthly - €75/lună -->
<a href="https://app.easyreserv.io/register?planId=af9a40d5-6882-4bcb-8601-c35cc5d5e6ff">
  Înregistrare Standard Monthly
</a>

<!-- Pro Monthly - €125/lună (RECOMANDAT) -->
<a href="https://app.easyreserv.io/register?planId=2536ae4b-9797-4b72-9eed-6796e97448ce">
  Înregistrare Pro Monthly ⭐
</a>

<!-- Basic Annually - €378/an -->
<a href="https://app.easyreserv.io/register?planId=eeabd488-8e38-4bae-bbbe-38dd68585e8c">
  Înregistrare Basic Annually
</a>

<!-- Standard Annually - €810/an -->
<a href="https://app.easyreserv.io/register?planId=2e8e0e63-2a65-440f-821a-e5755d77ecf9">
  Înregistrare Standard Annually
</a>

<!-- Pro Annually - €1,350/an -->
<a href="https://app.easyreserv.io/register?planId=5dacdfb2-c34f-47d7-8f4b-7fc3ef5c4f39">
  Înregistrare Pro Annually
</a>
```

### **Sau pentru copy/paste rapid:**

```
Basic Monthly:     ebe3b1ba-a954-40a9-8512-c0409695ae34
Standard Monthly:  af9a40d5-6882-4bcb-8601-c35cc5d5e6ff
Pro Monthly:       2536ae4b-9797-4b72-9eed-6796e97448ce
Basic Annually:    eeabd488-8e38-4bae-bbbe-38dd68585e8c
Standard Annually: 2e8e0e63-2a65-440f-821a-e5755d77ecf9
Pro Annually:      5dacdfb2-c34f-47d7-8f4b-7fc3ef5c4f39
```

---

## ⚠️ Impact și Considerații

### **1. PlaceType Enum**

Backend-ul suportă deja:
```typescript
export enum PlaceType {
  RESTAURANT = 'RESTAURANT',
  CAFENEA = 'CAFENEA',
  CAR_WASH = 'CAR_WASH',     // ✅ Existent
  HOTEL = 'HOTEL',
  BEAUTY_SALON = 'BEAUTY_SALON',
}
```

### **2. Field Mapping**

`carWashId` deja configurat pentru relații database.

### **3. Prețuri cele mai mici**

CAR_WASH are cele mai accesibile prețuri:
- Basic: €35 (vs €50 RESTAURANT, €79 HOTEL)
- Standard: €75 (vs €125 RESTAURANT, €149 HOTEL)
- Pro: €125 (vs €200 RESTAURANT, €249 HOTEL)

**Perfect pentru spălătorii auto mici și self-service!** 🚗💧

---

## 📋 Checklist Executare

- [ ] Backup baza de date production
- [ ] Conectare la production database
- [ ] Executare INSERT-uri SQL (copy/paste din secțiunea de mai sus)
- [ ] Rulare query de verificare
- [ ] Confirmare că toate cele 6 planuri au fost adăugate
- [ ] Update B2B website cu UUID-urile noi pentru CAR_WASH
- [ ] Test înregistrare client cu plan Basic CAR_WASH
- [ ] Verificare că `place_type = 'CAR_WASH'` apare corect
- [ ] Documentare în changelog production

---

## 🔙 Rollback (dacă e necesar)

Dacă trebuie să ștergeți planurile CAR_WASH:

```sql
-- ROLLBACK - Ștergere planuri CAR_WASH
DELETE FROM plan WHERE place_type = 'CAR_WASH';

-- Verificare
SELECT COUNT(*) FROM plan WHERE place_type = 'CAR_WASH';
-- Trebuie să returneze 0
```

---

## 📋 Comparație Prețuri pe Industrii

| Industrie | Basic M/A | Standard M/A | Pro M/A |
|-----------|-----------|--------------|---------|
| **CAR_WASH** 🚿 | €35 / €378 | €75 / €810 | €125 / €1,350 |
| **RESTAURANT** 🍽️ | €50 / €540 | €125 / €1,350 | €200 / €2,160 |
| **CAFENEA** ☕ | €50 / €540 | €125 / €1,350 | €200 / €2,160 |
| **HOTEL** 🏨 | €79 / €853 | €149 / €1,609 | €249 / €2,689 |

*M = Monthly, A = Annually (10% discount)*

**Observație:** CAR_WASH are cele mai accesibile prețuri, ideal pentru business-uri mici!

---

## 💡 Use Cases CAR_WASH

### **Basic - €35/lună:**
- Self-service cu 2-3 poziții
- 1 angajat
- Rezervări simple
- Plăți cash

### **Standard - €75/lună:**
- Spălătorie mică cu 1-2 poziții manuale
- 2-3 angajați
- CRM clienți + istoric mașini
- Management pontaj

### **Pro - €125/lună (RECOMANDAT):**
- Spălătorie medie cu 3-5 poziții
- 4-8 angajați
- Servicii mobile/pickup
- Stocuri consumabile
- Marketing automatizat

---

## 📞 Contact pentru Executare

Persoana responsabilă cu deployment-ul production va executa aceste INSERT-uri.

**Estimare timp:** 5 minute  
**Downtime necesar:** NU (operațiune safe)  
**Testare necesară:** DA (verificare înregistrare CAR_WASH în frontend)  

---

**Status:** ⏳ În așteptare executare production  
**Creat de:** Agent Development  
**Data creării:** 2025-10-30  
**Cod actualizat:** ✅ DA (`src/scripts/insert-plans.ts` cu prețuri CAR_WASH)
