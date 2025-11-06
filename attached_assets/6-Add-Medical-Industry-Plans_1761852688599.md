# 🏥 Adăugare Industrie MEDICAL (Servicii Medicale & Clinici) cu Planuri

**Data:** 2025-10-30  
**Industrie:** MEDICAL (nouă) - Servicii Medicale, Clinici, Cabinete Medicale  
**Tip modificare:** INSERT planuri în tabela `plan`  
**Prioritate:** MARE  

---

## 📊 Context

Implementare suport pentru industria MEDICAL (Servicii Medicale & Clinici) cu 6 planuri de subscription (3 tipuri × 2 perioade de facturare).

**Prețuri MEDICAL:**
- Basic: €49/lună sau €529/an (10% discount)
- Standard: €99/lună sau €1,069/an (10% discount)
- Pro: €199/lună sau €2,149/an (10% discount)

**Notă Rotunjire:** Prețurile anuale MEDICAL sunt rotunjite down la EUR întreg pentru prezentare mai curată (€529.2→€529, €1,069.2→€1,069, €2,149.2→€2,149). Rotunjirea de -€0.20 per plan este o decizie de business standard pentru simplitate în comunicare.

---

## 🆔 Plan IDs pentru MEDICAL (UUID-uri noi)

| Plan | Billing Period | Plan ID | URL pentru B2B Site |
|------|----------------|---------|---------------------|
| **Basic** | MONTHLY | `4af96f06-945f-4532-ae7e-a1ed01f83507` | `register?planId=4af96f06-945f-4532-ae7e-a1ed01f83507` |
| **Standard** | MONTHLY | `763eabbe-c679-4294-93e2-15396f6ca07e` | `register?planId=763eabbe-c679-4294-93e2-15396f6ca07e` |
| **Pro** | MONTHLY | `e4da4ee9-23aa-422b-baf5-c75e4eea37c1` | `register?planId=e4da4ee9-23aa-422b-baf5-c75e4eea37c1` |
| **Basic** | ANNUALLY | `92eb5617-910a-4024-8fce-c27a95c3ae9b` | `register?planId=92eb5617-910a-4024-8fce-c27a95c3ae9b` |
| **Standard** | ANNUALLY | `afda6f96-2f2e-4a64-8965-ecdf056225bb` | `register?planId=afda6f96-2f2e-4a64-8965-ecdf056225bb` |
| **Pro** | ANNUALLY | `fd2ebdb6-1d9c-4146-9d16-fa3a3bc1e4a6` | `register?planId=fd2ebdb6-1d9c-4146-9d16-fa3a3bc1e4a6` |

---

## 🗄️ Modificări Necesare în Baza de Date

### **Tabelă afectată:** `plan`

**IMPORTANT:** Aceste INSERT-uri trebuie executate în **PRODUCTION** database.

---

## 📝 Script SQL pentru Producție

```sql
-- ============================================
-- Add MEDICAL Industry Plans (2025-10-30)
-- Servicii Medicale, Clinici, Cabinete Medicale
-- ============================================

-- MONTHLY PLANS
-- ---------------------------------------------

-- Basic Monthly: €49
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
  '4af96f06-945f-4532-ae7e-a1ed01f83507',
  'Basic',
  49.00,
  'BASIC',
  'MONTHLY',
  'MEDICAL',
  NOW(),
  NOW()
);

-- Standard Monthly: €99
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
  '763eabbe-c679-4294-93e2-15396f6ca07e',
  'Standard',
  99.00,
  'STANDARD',
  'MONTHLY',
  'MEDICAL',
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
  'e4da4ee9-23aa-422b-baf5-c75e4eea37c1',
  'Pro',
  199.00,
  'PRO',
  'MONTHLY',
  'MEDICAL',
  NOW(),
  NOW()
);


-- ANNUAL PLANS (10% discount applied, rotunjit)
-- ---------------------------------------------

-- Basic Annually: €529 (49 × 12 × 0.9 = 529.2 → 529)
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
  '92eb5617-910a-4024-8fce-c27a95c3ae9b',
  'Basic',
  529.00,
  'BASIC',
  'ANNUALLY',
  'MEDICAL',
  NOW(),
  NOW()
);

-- Standard Annually: €1,069 (99 × 12 × 0.9 = 1069.2 → 1069)
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
  'afda6f96-2f2e-4a64-8965-ecdf056225bb',
  'Standard',
  1069.00,
  'STANDARD',
  'ANNUALLY',
  'MEDICAL',
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
  'fd2ebdb6-1d9c-4146-9d16-fa3a3bc1e4a6',
  'Pro',
  2149.00,
  'PRO',
  'ANNUALLY',
  'MEDICAL',
  NOW(),
  NOW()
);
```

---

## ✅ Verificare După Executare

După ce INSERT-urile au fost executate, rulați această query pentru verificare:

```sql
-- Verificare planuri MEDICAL
SELECT 
  CONCAT(name, ' (', billing_period, ')') as plan_name,
  price as price_eur,
  place_type,
  type,
  billing_period,
  SUBSTRING(id, 1, 8) as id_prefix
FROM plan 
WHERE place_type = 'MEDICAL' 
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
| Basic (MONTHLY)   | 49.00     | MEDICAL    | BASIC     | MONTHLY         | 4af96f06  |
| Standard (MONTHLY)| 99.00     | MEDICAL    | STANDARD  | MONTHLY         | 763eabbe  |
| Pro (MONTHLY)     | 199.00    | MEDICAL    | PRO       | MONTHLY         | e4da4ee9  |
| Basic (ANNUALLY)  | 529.00    | MEDICAL    | BASIC     | ANNUALLY        | 92eb5617  |
| Standard (ANNUALLY)| 1069.00  | MEDICAL    | STANDARD  | ANNUALLY        | afda6f96  |
| Pro (ANNUALLY)    | 2149.00   | MEDICAL    | PRO       | ANNUALLY        | fd2ebdb6  |
+-------------------+-----------+------------+-----------+-----------------+-----------+
```

---

## 🌐 Integrare B2B Website

### **Plan Selection URLs pentru MEDICAL:**

```html
<!-- Basic Monthly - €49/lună -->
<a href="https://app.easyreserv.io/register?planId=4af96f06-945f-4532-ae7e-a1ed01f83507">
  Înregistrare Basic Monthly (Medical)
</a>

<!-- Standard Monthly - €99/lună -->
<a href="https://app.easyreserv.io/register?planId=763eabbe-c679-4294-93e2-15396f6ca07e">
  Înregistrare Standard Monthly (Medical)
</a>

<!-- Pro Monthly - €199/lună (RECOMANDAT) -->
<a href="https://app.easyreserv.io/register?planId=e4da4ee9-23aa-422b-baf5-c75e4eea37c1">
  Înregistrare Pro Monthly (Medical) ⭐
</a>

<!-- Basic Annually - €529/an -->
<a href="https://app.easyreserv.io/register?planId=92eb5617-910a-4024-8fce-c27a95c3ae9b">
  Înregistrare Basic Annually (Medical)
</a>

<!-- Standard Annually - €1,069/an -->
<a href="https://app.easyreserv.io/register?planId=afda6f96-2f2e-4a64-8965-ecdf056225bb">
  Înregistrare Standard Annually (Medical)
</a>

<!-- Pro Annually - €2,149/an -->
<a href="https://app.easyreserv.io/register?planId=fd2ebdb6-1d9c-4146-9d16-fa3a3bc1e4a6">
  Înregistrare Pro Annually (Medical)
</a>
```

### **Sau pentru copy/paste rapid:**

```
Basic Monthly:     4af96f06-945f-4532-ae7e-a1ed01f83507
Standard Monthly:  763eabbe-c679-4294-93e2-15396f6ca07e
Pro Monthly:       e4da4ee9-23aa-422b-baf5-c75e4eea37c1
Basic Annually:    92eb5617-910a-4024-8fce-c27a95c3ae9b
Standard Annually: afda6f96-2f2e-4a64-8965-ecdf056225bb
Pro Annually:      fd2ebdb6-1d9c-4146-9d16-fa3a3bc1e4a6
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
  MEDICAL = 'MEDICAL',  // ✅ NOU ADĂUGAT
}
```

### **2. Field Mapping**

`medicalId` configurat pentru relații database:
```typescript
[PlaceType.MEDICAL]: 'medicalId',
```

### **3. Prețuri optimizate pentru sectorul medical**

MEDICAL are prețuri competitive între BEAUTY_SALON și RESTAURANT:
- Basic: €49 (între €40 BEAUTY_SALON și €50 RESTAURANT)
- Standard: €99 (între €85 BEAUTY_SALON și €125 RESTAURANT)
- Pro: €199 (între €140 BEAUTY_SALON și €200 RESTAURANT)

**Perfect pentru cabinete medicale mici și clinici!** 🏥

### **4. Specificități GDPR pentru sectorul medical**

- ✅ **GDPR compliant** obligatoriu pentru date pacienți
- ✅ **Criptare date medicale**
- ✅ **Audit trail** pentru accesări fișă pacient (Pro/Enterprise)
- ✅ **Backup zilnic** automat

---

## 📋 Checklist Executare

- [ ] Backup baza de date production
- [ ] Conectare la production database
- [ ] Executare INSERT-uri SQL (copy/paste din secțiunea de mai sus)
- [ ] Rulare query de verificare
- [ ] Confirmare că toate cele 6 planuri au fost adăugate
- [ ] Update B2B website cu UUID-urile noi pentru MEDICAL
- [ ] Test înregistrare client cu plan Basic MEDICAL
- [ ] Verificare că `place_type = 'MEDICAL'` apare corect
- [ ] Documentare în changelog production

---

## 🔙 Rollback (dacă e necesar)

Dacă trebuie să ștergeți planurile MEDICAL:

```sql
-- ROLLBACK - Ștergere planuri MEDICAL
DELETE FROM plan WHERE place_type = 'MEDICAL';

-- Verificare
SELECT COUNT(*) FROM plan WHERE place_type = 'MEDICAL';
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
| **HOTEL** 🏨 | €79 / €853 | €149 / €1,609 | €249 / €2,689 |

*M = Monthly, A = Annually (10% discount, rotunjit)*

**Observație:** Toate cele 6 industrii acum implementate! ✅

---

## 💡 Use Cases MEDICAL

### **Basic - €49/lună:**
- Cabinet individual 1 medic
- Programări simple
- 100-200 pacienți/lună
- Fișă pacient de bază

### **Standard - €99/lună:**
- Clinică mică cu 2-4 medici
- CRM pacienți + istoric consultații
- SMS/Email reamintiri
- Facturare automată
- 300-600 pacienți/lună

### **Pro - €199/lună (RECOMANDAT):**
- Policlinică cu 5-10 medici
- Teleconsultații video
- Prescripții digitale
- Convenții asigurări (CNAS)
- Marketing automatizat
- 700-1500 pacienți/lună

---

## 🔒 Specificități GDPR pentru Medical

**IMPORTANTE pentru sectorul medical:**

1. **Criptare date pacienți** - obligatoriu
2. **Acces controlat** - per rol (medic, asistent, recepționer)
3. **Audit trail** - istoric accesări fișă pacient
4. **Backup & recovery** - zilnic automat
5. **Right to be forgotten** - ștergere la cerere pacient
6. **Păstrare documente medicale** - conform legislație

---

## 📞 Contact pentru Executare

Persoana responsabilă cu deployment-ul production va executa aceste INSERT-uri.

**Estimare timp:** 5 minute  
**Downtime necesar:** NU (operațiune safe)  
**Testare necesară:** DA (verificare înregistrare MEDICAL în frontend)  

---

**Status:** ⏳ În așteptare executare production  
**Creat de:** Agent Development  
**Data creării:** 2025-10-30  
**Cod actualizat:** ✅ DA (`src/scripts/insert-plans.ts` + enum actualizat cu MEDICAL)  
**Total industrii:** 🎉 **6 industrii complete!**
