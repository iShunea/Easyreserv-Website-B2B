# 💇 Adăugare Industrie SALOANE DE FRUMUSEȚE & BARBERSHOP (BEAUTY_SALON) cu Planuri

**Data:** 2025-10-30  
**Industrie:** BEAUTY_SALON (nouă) - Saloane de Frumusețe & Barbershop-uri  
**Tip modificare:** INSERT planuri în tabela `plan`  
**Prioritate:** MARE  

---

## 📊 Context

Implementare suport pentru industria SALOANE DE FRUMUSEȚE & BARBERSHOP (BEAUTY_SALON) cu 6 planuri de subscription (3 tipuri × 2 perioade de facturare).

**Notă importantă:** În backend, ambele tipuri (Salon de Frumusețe și Barbershop) folosesc același `PlaceType.BEAUTY_SALON`. Diferențierea se va face în frontend prin afișarea denumirilor adaptate, dar structura planurilor și prețurilor este identică.

**Prețuri BEAUTY_SALON:**
- Basic: €40/lună sau €432/an (10% discount)
- Standard: €85/lună sau €918/an (10% discount)
- Pro: €140/lună sau €1,512/an (10% discount)

---

## 🆔 Plan IDs pentru BEAUTY_SALON (UUID-uri noi)

| Plan | Billing Period | Plan ID | URL pentru B2B Site |
|------|----------------|---------|---------------------|
| **Basic** | MONTHLY | `d968307e-153f-4dd9-a09a-1427feea3a32` | `register?planId=d968307e-153f-4dd9-a09a-1427feea3a32` |
| **Standard** | MONTHLY | `c1dd33f0-5eaa-4300-8d59-cbd4bbe81a9d` | `register?planId=c1dd33f0-5eaa-4300-8d59-cbd4bbe81a9d` |
| **Pro** | MONTHLY | `7a70660c-e382-4824-83de-e38c78f605f7` | `register?planId=7a70660c-e382-4824-83de-e38c78f605f7` |
| **Basic** | ANNUALLY | `506fd99b-4768-4ca4-b081-071ccfb81d6f` | `register?planId=506fd99b-4768-4ca4-b081-071ccfb81d6f` |
| **Standard** | ANNUALLY | `ff7c1ac5-f492-4245-a299-f959b665ccfc` | `register?planId=ff7c1ac5-f492-4245-a299-f959b665ccfc` |
| **Pro** | ANNUALLY | `290f2dad-313a-41c0-aabb-a397afc7dba0` | `register?planId=290f2dad-313a-41c0-aabb-a397afc7dba0` |

---

## 🗄️ Modificări Necesare în Baza de Date

### **Tabelă afectată:** `plan`

**IMPORTANT:** Aceste INSERT-uri trebuie executate în **PRODUCTION** database.

---

## 📝 Script SQL pentru Producție

```sql
-- ============================================
-- Add BEAUTY_SALON Industry Plans (2025-10-30)
-- Saloane de Frumusețe & Barbershop-uri
-- ============================================

-- MONTHLY PLANS
-- ---------------------------------------------

-- Basic Monthly: €40
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
  'd968307e-153f-4dd9-a09a-1427feea3a32',
  'Basic',
  40.00,
  'BASIC',
  'MONTHLY',
  'BEAUTY_SALON',
  NOW(),
  NOW()
);

-- Standard Monthly: €85
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
  'c1dd33f0-5eaa-4300-8d59-cbd4bbe81a9d',
  'Standard',
  85.00,
  'STANDARD',
  'MONTHLY',
  'BEAUTY_SALON',
  NOW(),
  NOW()
);

-- Pro Monthly: €140
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
  '7a70660c-e382-4824-83de-e38c78f605f7',
  'Pro',
  140.00,
  'PRO',
  'MONTHLY',
  'BEAUTY_SALON',
  NOW(),
  NOW()
);


-- ANNUAL PLANS (10% discount applied)
-- ---------------------------------------------

-- Basic Annually: €432 (40 × 12 × 0.9)
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
  '506fd99b-4768-4ca4-b081-071ccfb81d6f',
  'Basic',
  432.00,
  'BASIC',
  'ANNUALLY',
  'BEAUTY_SALON',
  NOW(),
  NOW()
);

-- Standard Annually: €918 (85 × 12 × 0.9)
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
  'ff7c1ac5-f492-4245-a299-f959b665ccfc',
  'Standard',
  918.00,
  'STANDARD',
  'ANNUALLY',
  'BEAUTY_SALON',
  NOW(),
  NOW()
);

-- Pro Annually: €1,512 (140 × 12 × 0.9)
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
  '290f2dad-313a-41c0-aabb-a397afc7dba0',
  'Pro',
  1512.00,
  'PRO',
  'ANNUALLY',
  'BEAUTY_SALON',
  NOW(),
  NOW()
);
```

---

## ✅ Verificare După Executare

După ce INSERT-urile au fost executate, rulați această query pentru verificare:

```sql
-- Verificare planuri BEAUTY_SALON
SELECT 
  CONCAT(name, ' (', billing_period, ')') as plan_name,
  price as price_eur,
  place_type,
  type,
  billing_period,
  SUBSTRING(id, 1, 8) as id_prefix
FROM plan 
WHERE place_type = 'BEAUTY_SALON' 
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
| Basic (MONTHLY)   | 40.00     | BEAUTY_SALON | BASIC     | MONTHLY         | d968307e  |
| Standard (MONTHLY)| 85.00     | BEAUTY_SALON | STANDARD  | MONTHLY         | c1dd33f0  |
| Pro (MONTHLY)     | 140.00    | BEAUTY_SALON | PRO       | MONTHLY         | 7a70660c  |
| Basic (ANNUALLY)  | 432.00    | BEAUTY_SALON | BASIC     | ANNUALLY        | 506fd99b  |
| Standard (ANNUALLY)| 918.00   | BEAUTY_SALON | STANDARD  | ANNUALLY        | ff7c1ac5  |
| Pro (ANNUALLY)    | 1512.00   | BEAUTY_SALON | PRO       | ANNUALLY        | 290f2dad  |
+-------------------+-----------+--------------+-----------+-----------------+-----------+
```

---

## 🌐 Integrare B2B Website

### **Plan Selection URLs pentru BEAUTY_SALON:**

```html
<!-- Basic Monthly - €40/lună -->
<a href="https://app.easyreserv.io/register?planId=d968307e-153f-4dd9-a09a-1427feea3a32">
  Înregistrare Basic Monthly (Salon/Barbershop)
</a>

<!-- Standard Monthly - €85/lună -->
<a href="https://app.easyreserv.io/register?planId=c1dd33f0-5eaa-4300-8d59-cbd4bbe81a9d">
  Înregistrare Standard Monthly (Salon/Barbershop)
</a>

<!-- Pro Monthly - €140/lună (RECOMANDAT) -->
<a href="https://app.easyreserv.io/register?planId=7a70660c-e382-4824-83de-e38c78f605f7">
  Înregistrare Pro Monthly (Salon/Barbershop) ⭐
</a>

<!-- Basic Annually - €432/an -->
<a href="https://app.easyreserv.io/register?planId=506fd99b-4768-4ca4-b081-071ccfb81d6f">
  Înregistrare Basic Annually (Salon/Barbershop)
</a>

<!-- Standard Annually - €918/an -->
<a href="https://app.easyreserv.io/register?planId=ff7c1ac5-f492-4245-a299-f959b665ccfc">
  Înregistrare Standard Annually (Salon/Barbershop)
</a>

<!-- Pro Annually - €1,512/an -->
<a href="https://app.easyreserv.io/register?planId=290f2dad-313a-41c0-aabb-a397afc7dba0">
  Înregistrare Pro Annually (Salon/Barbershop)
</a>
```

### **Sau pentru copy/paste rapid:**

```
Basic Monthly:     d968307e-153f-4dd9-a09a-1427feea3a32
Standard Monthly:  c1dd33f0-5eaa-4300-8d59-cbd4bbe81a9d
Pro Monthly:       7a70660c-e382-4824-83de-e38c78f605f7
Basic Annually:    506fd99b-4768-4ca4-b081-071ccfb81d6f
Standard Annually: ff7c1ac5-f492-4245-a299-f959b665ccfc
Pro Annually:      290f2dad-313a-41c0-aabb-a397afc7dba0
```

---

## ⚠️ Impact și Considerații

### **1. PlaceType Enum**

Backend-ul suportă deja:
```typescript
export enum PlaceType {
  RESTAURANT = 'RESTAURANT',
  CAFENEA = 'CAFENEA',
  BEAUTY_SALON = 'BEAUTY_SALON',  // ✅ Existent - folosit pentru ambele
  CAR_WASH = 'CAR_WASH',
  HOTEL = 'HOTEL',
}
```

### **2. Diferențiere Frontend**

**Backend:** Un singur tip `BEAUTY_SALON` pentru ambele  
**Frontend:** Două variante de afișare:
- **Salon de Frumusețe** - Denumire feminină, imagini cu saloane, servicii de înfrumusețare
- **Barbershop** - Denumire masculină, imagini cu frizerii, servicii bărbierești

**Aceleași planuri, aceleași prețuri, aceleași UUID-uri!**

### **3. Field Mapping**

`beautySalonId` deja configurat pentru relații database.

### **4. Prețuri intermediare**

BEAUTY_SALON are prețuri între CAR_WASH și RESTAURANT:
- Basic: €40 (între €35 CAR_WASH și €50 RESTAURANT)
- Standard: €85 (între €75 CAR_WASH și €125 RESTAURANT)
- Pro: €140 (între €125 CAR_WASH și €200 RESTAURANT)

**Perfect pentru saloane de frumusețe și barbershop-uri mici și medii!** 💇‍♀️✂️

---

## 📋 Checklist Executare

- [ ] Backup baza de date production
- [ ] Conectare la production database
- [ ] Executare INSERT-uri SQL (copy/paste din secțiunea de mai sus)
- [ ] Rulare query de verificare
- [ ] Confirmare că toate cele 6 planuri au fost adăugate
- [ ] Update B2B website cu UUID-urile noi pentru BEAUTY_SALON
- [ ] Test înregistrare client cu plan Basic BEAUTY_SALON
- [ ] Verificare că `place_type = 'BEAUTY_SALON'` apare corect
- [ ] Documentare în changelog production

---

## 🔙 Rollback (dacă e necesar)

Dacă trebuie să ștergeți planurile BEAUTY_SALON:

```sql
-- ROLLBACK - Ștergere planuri BEAUTY_SALON
DELETE FROM plan WHERE place_type = 'BEAUTY_SALON';

-- Verificare
SELECT COUNT(*) FROM plan WHERE place_type = 'BEAUTY_SALON';
-- Trebuie să returneze 0
```

---

## 📋 Comparație Prețuri pe Industrii (TOATE INDUSTRIILE)

| Industrie | Basic M/A | Standard M/A | Pro M/A |
|-----------|-----------|--------------|---------|
| **CAR_WASH** 🚿 | €35 / €378 | €75 / €810 | €125 / €1,350 |
| **BEAUTY_SALON** 💇 | €40 / €432 | €85 / €918 | €140 / €1,512 |
| **RESTAURANT** 🍽️ | €50 / €540 | €125 / €1,350 | €200 / €2,160 |
| **CAFENEA** ☕ | €50 / €540 | €125 / €1,350 | €200 / €2,160 |
| **HOTEL** 🏨 | €79 / €853 | €149 / €1,609 | €249 / €2,689 |

*M = Monthly, A = Annually (10% discount)*

**Observație:** Toate cele 5 industrii acum implementate! ✅

---

## 💡 Use Cases BEAUTY_SALON

### **Basic - €40/lună:**
- Solo barber / frizeriță independentă
- 1 specialist
- Programări simple
- Până la 100-200 clienți/lună

### **Standard - €85/lună:**
- Salon mic cu 2-3 specialiști
- CRM clienți + istoric servicii
- SMS reamintiri
- Vânzare produse retail
- 300-500 clienți/lună

### **Pro - €140/lună (RECOMANDAT):**
- Salon popular cu 4-6 specialiști
- Pachete & abonamente
- Stocuri consumabile
- Marketing automatizat
- Program fidelitate
- 600-1000 clienți/lună

---

## 📞 Contact pentru Executare

Persoana responsabilă cu deployment-ul production va executa aceste INSERT-uri.

**Estimare timp:** 5 minute  
**Downtime necesar:** NU (operațiune safe)  
**Testare necesară:** DA (verificare înregistrare BEAUTY_SALON în frontend)  

---

## 🎉 FINALIZARE - Toate Industriile Complete!

Acesta este **ULTIMUL** fișier din seria de implementări industrii:

1. ✅ RESTAURANT - Fișier 1
2. ✅ CAFENEA - Fișier 2
3. ✅ HOTEL - Fișier 3
4. ✅ CAR_WASH - Fișier 4
5. ✅ BEAUTY_SALON - Fișier 5 **(FINAL)**

**Total planuri în sistem după executare:** 30 planuri (5 industrii × 6 planuri fiecare)

---

**Status:** ⏳ În așteptare executare production  
**Creat de:** Agent Development  
**Data creării:** 2025-10-30  
**Cod actualizat:** ✅ DA (`src/scripts/insert-plans.ts` cu toate 5 industriile)  
**Completare implementare:** 🎉 **100% TOATE INDUSTRIILE!**
