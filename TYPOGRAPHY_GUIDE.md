# 📐 Ghid de Tipografie - EasyReserv.io

## 🎨 Fonturi Principale

Aplicația folosește **3 familii de fonturi**:

| Font | Utilizare | Backup |
|------|-----------|--------|
| **Onest** | Headings, Body Text, UI Elements | Helvetica |
| **Work Sans** | Body paragraphs | Helvetica |
| **Inter** | Text generic, Labels | Helvetica |

---

## 📏 Scară de Dimensiuni (Typography Scale)

### Headings (Titluri)

| Element | Font | Size | Weight | Line Height | Letter Spacing | Utilizare |
|---------|------|------|--------|-------------|----------------|-----------|
| **H1 (Heading 1)** | Onest | 56px | 700 (Bold) | 60px | 0px | Titluri principale pagini |
| **H2 (Large)** | Onest | 48px | 700 (Bold) | 56px | 0px | Secțiuni majore |
| **H3 (Medium)** | Onest | 32px | 600 (SemiBold) | 44.8px | 0.64px | Sub-titluri importante |
| **H4 (Small)** | Onest | 24px | 600 (SemiBold) | 33.6px | 0px | Carduri, Componente |
| **H5 (XSmall)** | Onest | 20px | 500 (Medium) | 30px | 0px | Titluri mici, Labels |
| **H6 (Smallest)** | Onest | 18px | 600 (SemiBold) | 28px | 0px | Sub-secțiuni |

### Body Text (Paragrafe)

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| **Body Large** | Onest | 18px | 400 (Regular) | 150% (27px) | 0px |
| **Body 1** | Work Sans | 16px | 400 (Regular) | 130% (20.8px) | 0px |
| **Body 2 (Text)** | Inter | 18px | 400 (Regular) | 130% (23.4px) | 0px |
| **Description** | Onest | 14px | 400 (Regular) | 140% (19.6px) | 0px |

### UI Elements

| Element | Font | Size | Weight | Utilizare |
|---------|------|------|--------|-----------|
| **Button Large** | Onest | 16px | 700 (Bold) | CTA Buttons |
| **Button Small** | Onest | 14px | 700 (Bold) | Secondary Buttons |
| **Label** | Onest | 14px | 500 (Medium) | Form Labels |
| **Caption** | Onest | 12px | 400 (Regular) | Small Text, Footnotes |
| **Badge** | Onest | 12px | 600 (SemiBold) | Tags, Status |

---

## 🎯 CSS Variables (Design Tokens)

### Variabile Definite în `index.css`

```css
:root {
  /* Heading 1 */
  --heading-1-font-family: "Onest", Helvetica;
  --heading-1-font-size: 56px;
  --heading-1-font-weight: 700;
  --heading-1-line-height: 60px;
  --heading-1-letter-spacing: 0px;
  --heading-1-font-style: normal;

  /* Body Large */
  --body-large-font-family: "Onest", Helvetica;
  --body-large-font-size: 18px;
  --body-large-font-weight: 400;
  --body-large-line-height: 150%;
  --body-large-letter-spacing: 0px;
  --body-large-font-style: normal;

  /* Body 1 */
  --body-1-font-family: "Work Sans", Helvetica;
  --body-1-font-size: 16px;
  --body-1-font-weight: 400;
  --body-1-line-height: 130%;
  --body-1-letter-spacing: 0px;
  --body-1-font-style: normal;

  /* Description */
  --description-font-family: "Onest", Helvetica;
  --description-font-size: 14px;
  --description-font-weight: 400;
  --description-line-height: 140%;
  --description-letter-spacing: 0px;
  --description-font-style: normal;

  /* Text (Generic) */
  --text-font-family: "Inter", Helvetica;
  --text-font-size: 18px;
  --text-font-weight: 400;
  --text-line-height: 130%;
  --text-letter-spacing: 0px;
  --text-font-style: normal;
}
```

---

## 💻 Utilizare în Cod

### Opțiunea 1: Folosind CSS Variables

```jsx
// Heading 1
<h1 className="font-heading-1 font-[number:var(--heading-1-font-weight)] text-[length:var(--heading-1-font-size)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)]">
  Titlu Principal
</h1>

// Body Large
<p className="font-body-large font-[number:var(--body-large-font-weight)] text-[length:var(--body-large-font-size)] leading-[var(--body-large-line-height)]">
  Paragraph text
</p>

// Description
<p className="font-description font-[number:var(--description-font-weight)] text-[length:var(--description-font-size)] leading-[var(--description-line-height)]">
  Small description text
</p>
```

### Opțiunea 2: Folosind Tailwind Classes Direct

```jsx
// Heading 1 (H1)
<h1 className="[font-family:'Onest',Helvetica] font-bold text-[56px] leading-[60px]">
  Titlu Principal
</h1>

// Heading 2 (H2)
<h2 className="[font-family:'Onest',Helvetica] font-bold text-4xl md:text-5xl">
  Secțiune Importantă
</h2>

// Heading 3 (H3)
<h3 className="[font-family:'Onest',Helvetica] font-semibold text-2xl md:text-[32px]">
  Sub-titlu
</h3>

// Body Text
<p className="[font-family:'Onest',Helvetica] font-normal text-base leading-6">
  Paragraph text normal
</p>

// Small Text
<span className="[font-family:'Onest',Helvetica] font-medium text-sm">
  Small label text
</span>

// Caption / Micro Text
<span className="[font-family:'Onest',Helvetica] text-xs">
  Caption text
</span>
```

### Opțiunea 3: Tailwind Utility Classes Standard

```jsx
// Headings
<h1 className="text-4xl md:text-6xl font-bold">Main Title</h1>
<h2 className="text-3xl md:text-5xl font-bold">Section</h2>
<h3 className="text-2xl md:text-4xl font-semibold">Subsection</h3>
<h4 className="text-xl md:text-2xl font-semibold">Card Title</h4>

// Body
<p className="text-base font-normal">Regular paragraph</p>
<p className="text-lg font-normal">Large paragraph</p>
<p className="text-sm font-normal">Small text</p>

// Labels & Captions
<span className="text-xs font-medium uppercase">Label</span>
<span className="text-xs font-normal">Caption</span>
```

---

## 📱 Responsive Typography (Mobile First)

### Breakpoints pentru Text

| Screen | H1 | H2 | H3 | Body | Description |
|--------|----|----|----|----|-------------|
| **Mobile** (< 768px) | 32px | 28px | 24px | 16px | 14px |
| **Tablet** (768px+) | 42px | 36px | 28px | 16px | 14px |
| **Desktop** (1024px+) | 56px | 48px | 32px | 18px | 14px |

### Exemplu Responsive

```jsx
<h1 className="[font-family:'Onest',Helvetica] font-bold 
               text-[32px] md:text-[42px] lg:text-[56px] 
               leading-tight">
  Responsive Heading
</h1>

<p className="[font-family:'Onest',Helvetica] font-normal 
              text-sm md:text-base lg:text-lg 
              leading-relaxed">
  Responsive paragraph text
</p>
```

---

## 🎨 Combinații Recomandate

### Hero Section (Homepage)

```jsx
<section>
  {/* Main Title */}
  <h1 className="[font-family:'Onest',Helvetica] font-bold 
                 text-4xl md:text-[56px] 
                 leading-[60px] text-[#282828]">
    EasyReserv.io
  </h1>
  
  {/* Subtitle */}
  <p className="[font-family:'Onest',Helvetica] font-normal 
                text-lg md:text-xl 
                leading-[150%] text-[#909090]">
    Sistem ERP pentru restaurante
  </p>
</section>
```

### Card Component

```jsx
<div className="card">
  {/* Card Title */}
  <h3 className="[font-family:'Onest',Helvetica] font-semibold 
                 text-xl md:text-2xl 
                 leading-[28px] text-[#282828]">
    Plan Pro
  </h3>
  
  {/* Card Description */}
  <p className="[font-family:'Onest',Helvetica] font-normal 
                text-base 
                leading-6 text-[#909090]">
    Perfect pentru afaceri în creștere
  </p>
  
  {/* Price */}
  <span className="[font-family:'Onest',Helvetica] font-bold 
                   text-[32px] 
                   leading-[44.8px] text-[#2d2c65]">
    €155
  </span>
</div>
```

### Button Text

```jsx
{/* Primary Button */}
<button className="px-6 py-4 bg-[#2d2c65] rounded-lg">
  <span className="[font-family:'Onest',Helvetica] font-bold 
                   text-base 
                   text-white">
    Începe Acum
  </span>
</button>

{/* Secondary Button */}
<button className="px-4 py-2 border border-[#2d2c65] rounded-lg">
  <span className="[font-family:'Onest',Helvetica] font-medium 
                   text-sm 
                   text-[#2d2c65]">
    Află Mai Mult
  </span>
</button>
```

### Form Labels & Inputs

```jsx
{/* Label */}
<label className="[font-family:'Onest',Helvetica] font-medium 
                  text-sm 
                  text-[#384250]">
  Email
</label>

{/* Input Text */}
<input className="[font-family:'Onest',Helvetica] font-normal 
                  text-base 
                  text-[#282828]"
       placeholder="nume@exemplu.ro" />
```

---

## 🔧 Configurare Tailwind (tailwind.config.ts)

```typescript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'heading-1': 'var(--heading-1-font-family)',    // Onest
        'body-large': 'var(--body-large-font-family)',  // Onest
        'body-1': 'var(--body-1-font-family)',          // Work Sans
        'description': 'var(--description-font-family)', // Onest
        'text': 'var(--text-font-family)',              // Inter
      },
    },
  },
};
```

---

## 📊 Font Weights (Greutăți)

| Nume | Valoare | Tailwind Class | Utilizare |
|------|---------|----------------|-----------|
| **Regular** | 400 | `font-normal` | Body text, paragraphs |
| **Medium** | 500 | `font-medium` | Labels, emphasis |
| **SemiBold** | 600 | `font-semibold` | Sub-headings, cards |
| **Bold** | 700 | `font-bold` | Headings, buttons, CTA |

---

## 🎯 Best Practices

### ✅ DO (Recomandări)

1. **Folosește Onest** pentru majoritatea UI-ului (headings, body, buttons)
2. **Păstrează consistența** - folosește același font pentru elemente similare
3. **Respectă scara de dimensiuni** - nu crea dimensiuni custom random
4. **Line-height corect**:
   - Headings: 100-120% (tight/normal)
   - Body: 130-150% (relaxed)
   - UI Elements: 100-130%
5. **Font weights clare**:
   - Regular (400) pentru text normal
   - Medium (500) pentru labels
   - SemiBold (600) pentru sub-headings
   - Bold (700) pentru headings și CTA

### ❌ DON'T (Evită)

1. Nu folosi mai mult de **3 fonturi** diferite
2. Nu crea **dimensiuni custom** fără motiv (ex: text-[17px])
3. Nu folosi **letter-spacing** excesiv
4. Nu amesteca prea multe **font weights** (max 3-4 per pagină)
5. Nu face headings prea **late** sau prea **înguste** (line-height)

---

## 🌐 Accessibility (A11Y)

### Contrast Minim

| Element | Background | Text Color | Contrast Ratio |
|---------|-----------|------------|----------------|
| Body Text | White (#FFFFFF) | Dark (#282828) | 12.6:1 ✅ |
| Headings | White (#FFFFFF) | Dark (#282828) | 12.6:1 ✅ |
| Buttons | Brand (#2d2c65) | White (#FFFFFF) | 9.8:1 ✅ |
| Muted Text | White (#FFFFFF) | Gray (#909090) | 3.2:1 ⚠️ |

### Recomandări Accesibilitate

- **Minim 16px** pentru body text (desktop)
- **Minim 14px** pentru mobile
- **Contrast 4.5:1** pentru text normal
- **Contrast 3:1** pentru text mare (18px+)

---

## 📖 Resurse

- **Google Fonts Onest**: [Download](https://fonts.google.com/specimen/Onest)
- **Google Fonts Work Sans**: [Download](https://fonts.google.com/specimen/Work+Sans)
- **Google Fonts Inter**: [Download](https://fonts.google.com/specimen/Inter)

---

**Ultima actualizare:** 28 Octombrie 2025  
**Versiune:** 1.0
