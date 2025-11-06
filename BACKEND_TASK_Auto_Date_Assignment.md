# Task Tehnic: Auto-atribuire Dată Publicare Articole Blog

## Obiectiv
Implementarea unui mecanism automat de atribuire a datei de publicare pentru articolele de blog la momentul creării/publicării acestora.

## Context
În prezent, articolele de blog necesită setarea manuală a câmpurilor `publishedAt` și `displayDate`. Avem nevoie de un sistem automat care să seteze aceste valori la crearea unui articol nou.

## Cerințe Funcționale

### 1. Auto-setare `publishedAt`
- **Când:** La crearea unui articol nou sau la marcarea unui draft ca "published"
- **Valoare:** Data și ora curentă în format ISO 8601 (ex: `2025-01-23T14:30:00Z`)
- **Comportament:**
  - Dacă articolul este creat cu status `draft` → `publishedAt` = `null`
  - Când articolul trece din `draft` → `published` → `publishedAt` = data curentă
  - Dacă articolul este creat direct ca `published` → `publishedAt` = data curentă
  - **Important:** `publishedAt` nu se schimbă ulterior (este immutable după prima setare)

### 2. Auto-generare `displayDate` Multi-limbă
Backend-ul trebuie să genereze automat `displayDate` în limba corectă pe baza valorii `publishedAt`.

#### Format pe limbi:
```javascript
// Română (ro)
"23 ianuarie 2025"    // zi + luna (text complet) + an

// Engleză (en)  
"January 23, 2025"    // luna (text complet) + zi + an

// Rusă (ru)
"23 января 2025"      // zi + luna (text genitivă) + an
```

#### Implementare sugerată (Node.js):
```javascript
function generateDisplayDate(date, lang) {
  const d = new Date(date);
  
  const monthsRO = ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 
                    'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'];
  
  const monthsRU = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
                    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  
  const monthsEN = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
  
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  
  if (lang === 'ro') {
    return `${day} ${monthsRO[month]} ${year}`;
  } else if (lang === 'ru') {
    return `${day} ${monthsRU[month]} ${year}`;
  } else { // en
    return `${monthsEN[month]} ${day}, ${year}`;
  }
}
```

### 3. Modificări în API

#### A. Endpoint CREATE Article (`POST /api/blog/articles`)
```javascript
// Request body
{
  "title": {...},
  "content": {...},
  "status": "published" | "draft"
  // NU se trimite publishedAt sau displayDate din frontend
}

// Backend logic
if (status === 'published') {
  article.publishedAt = new Date().toISOString();
} else {
  article.publishedAt = null;
}
```

#### B. Endpoint UPDATE Article (`PATCH /api/blog/articles/:id`)
```javascript
// Dacă status se schimbă din draft → published
if (oldStatus === 'draft' && newStatus === 'published' && !article.publishedAt) {
  article.publishedAt = new Date().toISOString();
}

// publishedAt nu se poate modifica manual (protected field)
```

#### C. Endpoint GET Articles (`GET /api/blog/articles?lang=ro`)
```javascript
// Pentru fiecare articol în răspuns
articles.map(article => ({
  ...article,
  displayDate: generateDisplayDate(article.publishedAt, lang)
}))
```

#### D. Endpoint GET Article by Slug (`GET /api/blog/articles/:slug?lang=ro`)
```javascript
// În răspuns
{
  ...article,
  displayDate: generateDisplayDate(article.publishedAt, lang)
}
```

#### E. Endpoint GET Featured Article (`GET /api/blog/featured?lang=ro`)
```javascript
// În răspuns
{
  ...article,
  displayDate: generateDisplayDate(article.publishedAt, lang)
}
```

## Schema Database (sugestie)

```sql
-- Adaugă constraint pentru publishedAt
ALTER TABLE blog_articles 
ADD CONSTRAINT check_published_date 
CHECK (
  (status = 'draft' AND published_at IS NULL) OR 
  (status = 'published' AND published_at IS NOT NULL)
);

-- Index pentru sortare după dată
CREATE INDEX idx_published_at ON blog_articles(published_at DESC);
```

## Scenarii de Testare

### Test 1: Creare articol published
```
POST /api/blog/articles
{
  "title": {"ro": "Test", "en": "Test", "ru": "Тест"},
  "status": "published"
}

Așteptat:
- publishedAt = data curentă (ex: "2025-01-23T14:30:00Z")
- GET /api/blog/articles?lang=ro → displayDate = "23 ianuarie 2025"
- GET /api/blog/articles?lang=en → displayDate = "January 23, 2025"
- GET /api/blog/articles?lang=ru → displayDate = "23 января 2025"
```

### Test 2: Creare draft apoi publish
```
Step 1: POST /api/blog/articles { "status": "draft" }
Așteptat: publishedAt = null

Step 2: PATCH /api/blog/articles/:id { "status": "published" }
Așteptat: publishedAt = data curentă la momentul PATCH-ului
```

### Test 3: Re-publicare (update articol deja published)
```
PATCH /api/blog/articles/:id { "title": {"ro": "Updated"} }
Așteptat: publishedAt rămâne neschimbat (data originală)
```

### Test 4: Draft → Published → Draft (edge case)
```
Step 1: Articol draft (publishedAt = null)
Step 2: Publish (publishedAt = "2025-01-23")
Step 3: Revert to draft (publishedAt rămâne "2025-01-23" sau devine null?)

Decizie necesară: Când un articol published devine draft, publishedAt:
- Opțiune A: Rămâne setat (păstrează data publicării originale)
- Opțiune B: Devine null (articolul nu mai este public)

Recomandare: Opțiunea A (păstrează istoricul)
```

## Validări Necesare

1. **publishedAt** nu poate fi setat manual din API request
2. **publishedAt** este read-only după prima setare
3. **displayDate** nu se salvează în DB (se generează dinamic la GET)
4. Articolele cu `status = 'published'` TREBUIE să aibă `publishedAt != null`
5. Articolele cu `status = 'draft'` TREBUIE să aibă `publishedAt = null`

## Backwards Compatibility

Dacă există deja articole în DB fără `publishedAt`:

```sql
-- Migration script
UPDATE blog_articles 
SET published_at = created_at 
WHERE status = 'published' AND published_at IS NULL;
```

## Criterii de Acceptare

✅ Articol nou creat ca "published" → `publishedAt` setat automat  
✅ Articol draft → published → `publishedAt` setat la momentul trecerii  
✅ `displayDate` generat corect în toate cele 3 limbi (ro/en/ru)  
✅ `publishedAt` nu se poate modifica din API după setare  
✅ Frontend primește `displayDate` gata formatat, nu mai face formatare locală  
✅ Toate endpoint-urile (list, detail, featured) returnează `displayDate` corect  
✅ Articolele se sortează corect după `publishedAt` DESC (cele mai noi primele)  

## Livrabile

1. ✅ Cod implementat pentru auto-setare `publishedAt`
2. ✅ Funcție `generateDisplayDate(date, lang)` pentru formatare multi-limbă
3. ✅ Modificări în toate endpoint-urile GET pentru a include `displayDate`
4. ✅ Validări/constraints în DB schema
5. ✅ Migration script pentru articole existente (dacă e cazul)
6. ✅ Teste unitare pentru `generateDisplayDate()` în toate limbile
7. ✅ Teste API pentru scenariile de mai sus

## Prioritate
🔴 **HIGH** - Această funcționalitate este esențială pentru gestionarea corectă a datelor articolelor.

## Estimated Time
**4-6 ore** (implementare + testare)

---

**Întrebări/Clarificări:** Contactați echipa frontend dacă aveți întrebări despre formatul așteptat.
