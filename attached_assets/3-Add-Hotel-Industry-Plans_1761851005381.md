# 🏨 Adăugare Industrie HOTEL cu Planuri

**Data:** 2025-10-30  
**Industrie:** HOTEL (nouă)  
**Tip modificare:** INSERT planuri în tabela `plan`  
**Prioritate:** MARE  

---

## 📊 Context

Implementare suport pentru industria HOTEL cu 6 planuri de subscription (3 tipuri × 2 perioade de facturare).

**Prețuri HOTEL (mai mari decât RESTAURANT/CAFENEA):**
- Basic: €79/lună sau €853/an (10% discount)
- Standard: €149/lună sau €1,609/an (10% discount)
- Pro: €249/lună sau €2,689/an (10% discount)

---

## 🆔 Plan IDs pentru HOTEL (UUID-uri noi)

| Plan | Billing Period | Plan ID | URL pentru B2B Site |
|------|----------------|---------|---------------------|
| **Basic** | MONTHLY | `7f5ed7da-5200-427e-aece-f503ffe7b15d` | `register?planId=7f5ed7da-5200-427e-aece-f503ffe7b15d` |
| **Standard** | MONTHLY | `8c994caf-8e21-46b5-8e6f-9aa7e26de6dd` | `register?planId=8c994caf-8e21-46b5-8e6f-9aa7e26de6dd` |
| **Pro** | MONTHLY | `e21eb5f5-ddba-4f49-8ee3-c55e1e316367` | `register?planId=e21eb5f5-ddba-4f49-8ee3-c55e1e316367` |
| **Basic** | ANNUALLY | `117ae90d-c4d7-4b21-990e-e921b9053cb1` | `register?planId=117ae90d-c4d7-4b21-990e-e921b9053cb1` |
| **Standard** | ANNUALLY | `6acd0e21-d44a-4339-86de-6e447c874d03` | `register?planId=6acd0e21-d44a-4339-86de-6e447c874d03` |
| **Pro** | ANNUALLY | `2a65e4f1-a5b7-4e21-81de-f0b9a4074e20` | `register?planId=2a65e4f1-a5b7-4e21-81de-f0b9a4074e20` |

---

## 🗄️ Modificări Necesare în Baza de Date

### **Tabelă afectată:** `plan`

**IMPORTANT:** Aceste INSERT-uri trebuie executate în **PRODUCTION** database.

---

## 📝 Script SQL pentru Producție

```sql
-- ============================================
-- Add HOTEL Industry Plans (2025-10-30)
-- ============================================

-- MONTHLY PLANS
-- ---------------------------------------------

-- Basic Monthly: €79
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
  '7f5ed7da-5200-427e-aece-f503ffe7b15d',
  'Basic',
  79.00,
  'BASIC',
  'MONTHLY',
  'HOTEL',
  NOW(),
  NOW()
);

-- Standard Monthly: €149
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
  '8c994caf-8e21-46b5-8e6f-9aa7e26de6dd',
  'Standard',
  149.00,
  'STANDARD',
  'MONTHLY',
  'HOTEL',
  NOW(),
  NOW()
);

-- Pro Monthly: €249
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
  'e21eb5f5-ddba-4f49-8ee3-c55e1e316367',
  'Pro',
  249.00,
  'PRO',
  'MONTHLY',
  'HOTEL',
  NOW(),
  NOW()
);


-- ANNUAL PLANS (10% discount applied)
-- ---------------------------------------------

-- Basic Annually: €853 (79 × 12 × 0.9)
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
  '117ae90d-c4d7-4b21-990e-e921b9053cb1',
  'Basic',
  853.00,
  'BASIC',
  'ANNUALLY',
  'HOTEL',
  NOW(),
  NOW()
);

-- Standard Annually: €1,609 (149 × 12 × 0.9)
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
  '6acd0e21-d44a-4339-86de-6e447c874d03',
  'Standard',
  1609.00,
  'STANDARD',
  'ANNUALLY',
  'HOTEL',
  NOW(),
  NOW()
);

-- Pro Annually: €2,689 (249 × 12 × 0.9)
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
  '2a65e4f1-a5b7-4e21-81de-f0b9a4074e20',
  'Pro',
  2689.00,
  'PRO',
  'ANNUALLY',
  'HOTEL',
  NOW(),
  NOW()
);
```

---

## ✅ Verificare După Executare

După ce INSERT-urile au fost executate, rulați această query pentru verificare:

```sql
-- Verificare planuri HOTEL
SELECT 
  CONCAT(name, ' (', billing_period, ')') as plan_name,
  price as price_eur,
  place_type,
  type,
  billing_period,
  SUBSTRING(id, 1, 8) as id_prefix
FROM plan 
WHERE place_type = 'HOTEL' 
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
| Basic (MONTHLY)   | 79.00     | HOTEL      | BASIC     | MONTHLY         | 7f5ed7da  |
| Standard (MONTHLY)| 149.00    | HOTEL      | STANDARD  | MONTHLY         | 8c994caf  |
| Pro (MONTHLY)     | 249.00    | HOTEL      | PRO       | MONTHLY         | e21eb5f5  |
| Basic (ANNUALLY)  | 853.00    | HOTEL      | BASIC     | ANNUALLY        | 117ae90d  |
| Standard (ANNUALLY)| 1609.00  | HOTEL      | STANDARD  | ANNUALLY        | 6acd0e21  |
| Pro (ANNUALLY)    | 2689.00   | HOTEL      | PRO       | ANNUALLY        | 2a65e4f1  |
+-------------------+-----------+------------+-----------+-----------------+-----------+
```

---

## 🌐 Integrare B2B Website

### **Plan Selection URLs pentru HOTEL:**

```html
<!-- Basic Monthly - €79/lună -->
<a href="https://app.easyreserv.io/register?planId=7f5ed7da-5200-427e-aece-f503ffe7b15d">
  Înregistrare Basic Monthly
</a>

<!-- Standard Monthly - €149/lună -->
<a href="https://app.easyreserv.io/register?planId=8c994caf-8e21-46b5-8e6f-9aa7e26de6dd">
  Înregistrare Standard Monthly
</a>

<!-- Pro Monthly - €249/lună (RECOMANDAT) -->
<a href="https://app.easyreserv.io/register?planId=e21eb5f5-ddba-4f49-8ee3-c55e1e316367">
  Înregistrare Pro Monthly ⭐
</a>

<!-- Basic Annually - €853/an -->
<a href="https://app.easyreserv.io/register?planId=117ae90d-c4d7-4b21-990e-e921b9053cb1">
  Înregistrare Basic Annually
</a>

<!-- Standard Annually - €1,609/an -->
<a href="https://app.easyreserv.io/register?planId=6acd0e21-d44a-4339-86de-6e447c874d03">
  Înregistrare Standard Annually
</a>

<!-- Pro Annually - €2,689/an -->
<a href="https://app.easyreserv.io/register?planId=2a65e4f1-a5b7-4e21-81de-f0b9a4074e20">
  Înregistrare Pro Annually
</a>
```

### **Sau pentru copy/paste rapid:**

```
Basic Monthly:     7f5ed7da-5200-427e-aece-f503ffe7b15d
Standard Monthly:  8c994caf-8e21-46b5-8e6f-9aa7e26de6dd
Pro Monthly:       e21eb5f5-ddba-4f49-8ee3-c55e1e316367
Basic Annually:    117ae90d-c4d7-4b21-990e-e921b9053cb1
Standard Annually: 6acd0e21-d44a-4339-86de-6e447c874d03
Pro Annually:      2a65e4f1-a5b7-4e21-81de-f0b9a4074e20
```

---

## ⚠️ Impact și Considerații

### **1. PlaceType Enum**

Backend-ul suportă deja:
```typescript
export enum PlaceType {
  RESTAURANT = 'RESTAURANT',
  CAFENEA = 'CAFENEA',
  HOTEL = 'HOTEL',          // ✅ Existent
  BEAUTY_SALON = 'BEAUTY_SALON',
  CAR_WASH = 'CAR_WASH',
}
```

### **2. Field Mapping**

`hotelId` deja configurat pentru relații database.

### **3. Prețuri diferite**

HOTEL are prețuri mai mari decât RESTAURANT/CAFENEA:
- Basic: €79 vs €50 (58% mai mult)
- Standard: €149 vs €125 (19% mai mult)
- Pro: €249 vs €200 (24.5% mai mult)

---

## 📋 Checklist Executare

- [ ] Backup baza de date production
- [ ] Conectare la production database
- [ ] Executare INSERT-uri SQL (copy/paste din secțiunea de mai sus)
- [ ] Rulare query de verificare
- [ ] Confirmare că toate cele 6 planuri au fost adăugate
- [ ] Update B2B website cu UUID-urile noi pentru HOTEL
- [ ] Test înregistrare client cu plan Basic HOTEL
- [ ] Verificare că `place_type = 'HOTEL'` apare corect
- [ ] Documentare în changelog production

---

## 🔙 Rollback (dacă e necesar)

Dacă trebuie să ștergeți planurile HOTEL:

```sql
-- ROLLBACK - Ștergere planuri HOTEL
DELETE FROM plan WHERE place_type = 'HOTEL';

-- Verificare
SELECT COUNT(*) FROM plan WHERE place_type = 'HOTEL';
-- Trebuie să returneze 0
```

---

## 📋 Comparație Prețuri pe Industrii

| Plan | RESTAURANT/CAFENEA | HOTEL | Diferență |
|------|-------------------|-------|-----------|
| **Basic Monthly** | €50 | €79 | +€29 (+58%) |
| **Standard Monthly** | €125 | €149 | +€24 (+19%) |
| **Pro Monthly** | €200 | €249 | +€49 (+24.5%) |
| **Basic Annually** | €540 | €853 | +€313 (+58%) |
| **Standard Annually** | €1,350 | €1,609 | +€259 (+19%) |
| **Pro Annually** | €2,160 | €2,689 | +€529 (+24.5%) |

---

## 📞 Contact pentru Executare

Persoana responsabilă cu deployment-ul production va executa aceste INSERT-uri.

**Estimare timp:** 5 minute  
**Downtime necesar:** NU (operațiune safe)  
**Testare necesară:** DA (verificare înregistrare HOTEL în frontend)  

---

**Status:** ⏳ În așteptare executare production  
**Creat de:** Agent Development  
**Data creării:** 2025-10-30  
**Cod actualizat:** ✅ DA (`src/scripts/insert-plans.ts` cu prețuri HOTEL)
