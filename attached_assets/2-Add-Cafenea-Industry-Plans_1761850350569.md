# ☕ Adăugare Industrie CAFENEA cu Planuri

**Data:** 2025-10-30  
**Industrie:** CAFENEA (nouă)  
**Tip modificare:** INSERT planuri în tabela `plan`  
**Prioritate:** MARE  

---

## 📊 Context

Implementare suport pentru industria CAFENEA cu 6 planuri de subscription (3 tipuri × 2 perioade de facturare).

**Prețuri identice cu RESTAURANT:**
- Basic: €50/lună sau €540/an (10% discount)
- Standard: €125/lună sau €1,350/an (10% discount)
- Pro: €200/lună sau €2,160/an (10% discount)

---

## 🆔 Plan IDs pentru CAFENEA (UUID-uri noi)

| Plan | Billing Period | Plan ID | URL pentru B2B Site |
|------|----------------|---------|---------------------|
| **Basic** | MONTHLY | `bb45bdc1-8804-48f1-983c-87d2368d555c` | `register?planId=bb45bdc1-8804-48f1-983c-87d2368d555c` |
| **Standard** | MONTHLY | `a6479e33-f8a2-4783-8502-b1033e89a1ee` | `register?planId=a6479e33-f8a2-4783-8502-b1033e89a1ee` |
| **Pro** | MONTHLY | `931cbc5b-cf1f-4379-a333-42ce1d22bb5d` | `register?planId=931cbc5b-cf1f-4379-a333-42ce1d22bb5d` |
| **Basic** | ANNUALLY | `777a2240-3199-4b3a-993e-965652ac71f0` | `register?planId=777a2240-3199-4b3a-993e-965652ac71f0` |
| **Standard** | ANNUALLY | `065f8e16-ac70-4bba-95c2-7acb0ff91783` | `register?planId=065f8e16-ac70-4bba-95c2-7acb0ff91783` |
| **Pro** | ANNUALLY | `036df0c8-1b57-4482-9057-ccde656754b0` | `register?planId=036df0c8-1b57-4482-9057-ccde656754b0` |

---

## 🗄️ Modificări Necesare în Baza de Date

### **Tabelă afectată:** `plan`

**IMPORTANT:** Aceste INSERT-uri trebuie executate în **PRODUCTION** database.

---

## 📝 Script SQL pentru Producție

```sql
-- ============================================
-- Add CAFENEA Industry Plans (2025-10-30)
-- ============================================

-- MONTHLY PLANS
-- ---------------------------------------------

-- Basic Monthly: €50
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
  'bb45bdc1-8804-48f1-983c-87d2368d555c',
  'Basic',
  50.00,
  'BASIC',
  'MONTHLY',
  'CAFENEA',
  NOW(),
  NOW()
);

-- Standard Monthly: €125
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
  'a6479e33-f8a2-4783-8502-b1033e89a1ee',
  'Standard',
  125.00,
  'STANDARD',
  'MONTHLY',
  'CAFENEA',
  NOW(),
  NOW()
);

-- Pro Monthly: €200
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
  '931cbc5b-cf1f-4379-a333-42ce1d22bb5d',
  'Pro',
  200.00,
  'PRO',
  'MONTHLY',
  'CAFENEA',
  NOW(),
  NOW()
);


-- ANNUAL PLANS (10% discount applied)
-- ---------------------------------------------

-- Basic Annually: €540 (50 × 12 × 0.9)
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
  '777a2240-3199-4b3a-993e-965652ac71f0',
  'Basic',
  540.00,
  'BASIC',
  'ANNUALLY',
  'CAFENEA',
  NOW(),
  NOW()
);

-- Standard Annually: €1,350 (125 × 12 × 0.9)
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
  '065f8e16-ac70-4bba-95c2-7acb0ff91783',
  'Standard',
  1350.00,
  'STANDARD',
  'ANNUALLY',
  'CAFENEA',
  NOW(),
  NOW()
);

-- Pro Annually: €2,160 (200 × 12 × 0.9)
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
  '036df0c8-1b57-4482-9057-ccde656754b0',
  'Pro',
  2160.00,
  'PRO',
  'ANNUALLY',
  'CAFENEA',
  NOW(),
  NOW()
);
```

---

## ✅ Verificare După Executare

După ce INSERT-urile au fost executate, rulați această query pentru verificare:

```sql
-- Verificare planuri CAFENEA
SELECT 
  CONCAT(name, ' (', billing_period, ')') as plan_name,
  price as price_eur,
  place_type,
  type,
  billing_period,
  SUBSTRING(id, 1, 8) as id_prefix
FROM plan 
WHERE place_type = 'CAFENEA' 
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
| Basic (MONTHLY)   | 50.00     | CAFENEA    | BASIC     | MONTHLY         | bb45bdc1  |
| Standard (MONTHLY)| 125.00    | CAFENEA    | STANDARD  | MONTHLY         | a6479e33  |
| Pro (MONTHLY)     | 200.00    | CAFENEA    | PRO       | MONTHLY         | 931cbc5b  |
| Basic (ANNUALLY)  | 540.00    | CAFENEA    | BASIC     | ANNUALLY        | 777a2240  |
| Standard (ANNUALLY)| 1350.00  | CAFENEA    | STANDARD  | ANNUALLY        | 065f8e16  |
| Pro (ANNUALLY)    | 2160.00   | CAFENEA    | PRO       | ANNUALLY        | 036df0c8  |
+-------------------+-----------+------------+-----------+-----------------+-----------+
```

---

## 🌐 Integrare B2B Website

### **Plan Selection URLs pentru CAFENEA:**

```html
<!-- Basic Monthly - €50/lună -->
<a href="https://app.easyreserv.io/register?planId=bb45bdc1-8804-48f1-983c-87d2368d555c">
  Înregistrare Basic Monthly
</a>

<!-- Standard Monthly - €125/lună -->
<a href="https://app.easyreserv.io/register?planId=a6479e33-f8a2-4783-8502-b1033e89a1ee">
  Înregistrare Standard Monthly
</a>

<!-- Pro Monthly - €200/lună (RECOMANDAT) -->
<a href="https://app.easyreserv.io/register?planId=931cbc5b-cf1f-4379-a333-42ce1d22bb5d">
  Înregistrare Pro Monthly ⭐
</a>

<!-- Basic Annually - €540/an -->
<a href="https://app.easyreserv.io/register?planId=777a2240-3199-4b3a-993e-965652ac71f0">
  Înregistrare Basic Annually
</a>

<!-- Standard Annually - €1,350/an -->
<a href="https://app.easyreserv.io/register?planId=065f8e16-ac70-4bba-95c2-7acb0ff91783">
  Înregistrare Standard Annually
</a>

<!-- Pro Annually - €2,160/an -->
<a href="https://app.easyreserv.io/register?planId=036df0c8-1b57-4482-9057-ccde656754b0">
  Înregistrare Pro Annually
</a>
```

### **Sau pentru copy/paste rapid:**

```
Basic Monthly:    bb45bdc1-8804-48f1-983c-87d2368d555c
Standard Monthly: a6479e33-f8a2-4783-8502-b1033e89a1ee
Pro Monthly:      931cbc5b-cf1f-4379-a333-42ce1d22bb5d
Basic Annually:   777a2240-3199-4b3a-993e-965652ac71f0
Standard Annually: 065f8e16-ac70-4bba-95c2-7acb0ff91783
Pro Annually:     036df0c8-1b57-4482-9057-ccde656754b0
```

---

## ⚠️ Impact și Considerații

### **1. PlaceType Enum**

Backend-ul a fost actualizat cu:
```typescript
export enum PlaceType {
  RESTAURANT = 'RESTAURANT',
  CAFENEA = 'CAFENEA',    // ✅ NOU
  BEAUTY_SALON = 'BEAUTY_SALON',
  CAR_WASH = 'CAR_WASH',
  HOTEL = 'HOTEL',
}
```

### **2. Field Mapping**

Adăugat `cafeneaId` pentru relații database:
```typescript
{
  [PlaceType.CAFENEA]: 'cafeneaId'
}
```

### **3. Feature Gating**

Planurile CAFENEA vor folosi aceeași infrastructură de feature gating ca RESTAURANT:
- `@Plans()` decorator pentru access control
- `PlanGuard` pentru module restrictions
- Fiecare plan poate avea limite diferite de features

---

## 📋 Checklist Executare

- [ ] Backup baza de date production
- [ ] Conectare la production database
- [ ] Executare INSERT-uri SQL (copy/paste din secțiunea de mai sus)
- [ ] Rulare query de verificare
- [ ] Confirmare că toate cele 6 planuri au fost adăugate
- [ ] Update B2B website cu UUID-urile noi pentru CAFENEA
- [ ] Test înregistrare client cu plan Basic CAFENEA
- [ ] Verificare că `place_type = 'CAFENEA'` apare corect
- [ ] Documentare în changelog production

---

## 🔙 Rollback (dacă e necesar)

Dacă trebuie să ștergeți planurile CAFENEA:

```sql
-- ROLLBACK - Ștergere planuri CAFENEA
DELETE FROM plan WHERE place_type = 'CAFENEA';

-- Verificare
SELECT COUNT(*) FROM plan WHERE place_type = 'CAFENEA';
-- Trebuie să returneze 0
```

---

## 📋 Diferențe față de RESTAURANT

| Aspect | RESTAURANT | CAFENEA |
|--------|------------|---------|
| **PlaceType** | `RESTAURANT` | `CAFENEA` |
| **Field Mapping** | `restaurantId` | `cafeneaId` |
| **Plan UUIDs** | `1f900d0c-...`, etc | `bb45bdc1-...`, etc |
| **Prețuri** | €50/€125/€200 | €50/€125/€200 (identice) |
| **Features** | Restaurant-specific | Cafenea-specific |

**IMPORTANT:** Deși prețurile sunt identice, planurile sunt **complet separate** în baza de date. Fiecare industrie are propriile UUID-uri unice.

---

## 📞 Contact pentru Executare

Persoana responsabilă cu deployment-ul production va executa aceste INSERT-uri.

**Estimare timp:** 5 minute  
**Downtime necesar:** NU (operațiune safe)  
**Testare necesară:** DA (verificare înregistrare CAFENEA în frontend)  

---

**Status:** ⏳ În așteptare executare production  
**Creat de:** Agent Development  
**Data creării:** 2025-10-30  
**Cod actualizat:** ✅ DA (`src/scripts/insert-plans.ts`, `PlaceType` enum, field mapping)
