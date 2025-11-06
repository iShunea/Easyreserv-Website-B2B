# EasyReserv.io - Design System Documentation

## 🎨 Paletar de Culori

### Culori Principale
```css
--apporange: rgba(254, 152, 0, 1);      /* #FE9800 - Orange principal */
--grayswhite: rgba(255, 255, 255, 1);   /* #FFFFFF - Alb */
--primary: #2d2c65;                      /* Albastru întunecat (Brand) */
```

### Culori Text
```css
--textblack: #282828;                    /* Text principal negru */
--text-muted: #909090;                   /* Text secundar gri */
--text-gray: #384250;                    /* Text label-uri */
```

### Culori Fundal
```css
--background: #FFFFFF;                   /* Fundal principal */
--muted: hsl(210, 40%, 96.1%);          /* Fundal muted */
--card: transparent;                     /* Card-uri transparente */
```

### Culori Border & Input
```css
--border: #D2D6DB;                       /* Border standard */
--input-border: #D2D6DB;                 /* Border input-uri */
```

### Theme Dark Mode
```css
.dark {
  --background: hsl(224, 71%, 4%);
  --foreground: hsl(213, 31%, 91%);
  --primary: hsl(210, 40%, 98%);
  --card: transparent;
}
```

---

## 🔤 Tipografie

### Fonturi Principale
1. **Onest** - Font principal pentru headings și body text
2. **Work Sans** - Font secundar pentru body text
3. **Inter** - Font pentru text și interfață
4. **Geist Mono** - Font monospaced pentru cod

### Mărimi Fonturi

#### Headings
```css
--heading-1-font-size: 56px;
--heading-1-line-height: 60px;
--heading-1-font-weight: 700;
--heading-1-font-family: "Onest", Helvetica;

/* Responsive */
h1: text-3xl md:text-5xl (30px → 48px)
h2: text-2xl (24px)
h3: text-xl (20px)
```

#### Body Text
```css
--body-large-font-size: 18px;
--body-large-line-height: 150%;
--body-large-font-weight: 400;
--body-large-font-family: "Onest", Helvetica;

--body-1-font-size: 16px;
--body-1-line-height: 130%;
--body-1-font-weight: 400;
--body-1-font-family: "Work Sans", Helvetica;
```

#### Description & Small Text
```css
--description-font-size: 14px;
--description-line-height: 140%;
--description-font-weight: 400;

text-sm: 14px
text-xs: 12px
```

#### Text General
```css
--text-font-size: 18px;
--text-line-height: 130%;
--text-font-family: "Inter", Helvetica;
```

### Letter Spacing
```css
--heading-1-letter-spacing: 0px;
--body-1-letter-spacing: 0px;
--description-letter-spacing: 0px;
```

### Font Smoothing
```css
body, * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}
```

---

## 📐 Spacing & Dimensiuni

### Spacing Scale (Tailwind)
```
gap-1: 4px
gap-2: 8px
gap-3: 12px
gap-4: 16px
gap-5: 20px
gap-6: 24px
gap-8: 32px
gap-12: 48px
gap-16: 64px
```

### Padding Standard
```css
/* Secțiuni principale */
py-12: 48px vertical
py-16: 64px vertical
px-4: 16px horizontal (mobile)
px-[10%]: 10% horizontal (desktop)

/* Componente */
p-3: 12px
p-4: 16px
p-6: 24px
p-8: 32px
```

### Max Width Layout
```css
max-w-[1138px]  /* Formulare și secțiuni */
max-w-[1080px]  /* Conținut articole blog */
max-w-[974px]   /* Formulare Contact */
max-w-[674px]   /* Paragrafe text */
max-w-5xl       /* Cookie banner (1280px) */
```

### Border Radius
```css
--radius: 0.5rem;               /* 8px - standard */
rounded-[5px]: 5px             /* Butoane */
rounded-[10px]: 10px           /* Card-uri */
rounded-lg: 8px                /* Input-uri */
rounded-xl: 12px               /* Quote blocks */
```

---

## 🎯 Componente UI

### Butoane

#### Buton Principal (Primary)
```css
bg-[#2d2c65]
hover:bg-[#2d2c65]/90
text-white
rounded-[5px]
px-6 py-4
font-semibold
```

#### Buton Outline
```css
variant="outline"
border: 1px solid
bg-transparent
hover:bg-accent
```

#### Buton Ghost
```css
variant="ghost"
bg-transparent
hover:bg-accent
```

#### Sizes
```css
size="sm": text-xs, smaller padding
size="default": standard
size="lg": larger padding
size="icon": square, icon only
```

### Input-uri

#### Standard Input
```css
height: 44px (h-11)
border: 1px solid #D2D6DB
border-radius: 8px (rounded-lg)
background: white
padding: 0 12px
font-size: 16px

/* Focus State */
focus-visible:outline-none
focus-visible:ring-0
focus:border-[#D2D6DB]
```

#### Input Container Pattern
```html
<div className="flex items-center gap-2 px-3 h-11 w-full bg-white rounded-lg border border-solid border-[#d2d6db]">
  <Input className="flex-1 h-full border-0 shadow-none p-0 bg-transparent" />
</div>
```

### Card-uri

#### Standard Card
```css
border: 1px solid #E5E7EB
border-radius: 10px
background: white
shadow: 8px 28px 30px #00000008
```

#### Card Pattern
```html
<Card className="shadow-2xl border-2 bg-white dark:bg-gray-900">
  <CardHeader>...</CardHeader>
  <CardContent>...</CardContent>
  <CardFooter>...</CardFooter>
</Card>
```

### Select Dropdown
```css
height: 44px
border: 1px solid #D2D6DB
border-radius: 8px
background: white
```

### Textarea
```css
min-height: 120px
border: 1px solid #D2D6DB
border-radius: 8px
padding: 10px 12px
resize: none
```

---

## 🎬 Animații

### Fade Animations
```css
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: none; }
}

@keyframes fade-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: none; }
}

/* Usage */
.animate-fade-in { animation: fade-in 1s ease forwards; }
.animate-fade-up { animation: fade-up 1s ease forwards; }
```

### Marquee Animations
```css
@keyframes marquee {
  0% { transform: translate(0); }
  100% { transform: translateX(calc(-100% - var(--gap))); }
}

.animate-marquee { animation: marquee var(--duration) infinite linear; }
```

### Shimmer Effect
```css
@keyframes shimmer {
  0%, 90%, 100% { background-position: calc(-100% - var(--shimmer-width)) 0; }
  30%, 60% { background-position: calc(100% + var(--shimmer-width)) 0; }
}

.animate-shimmer { animation: shimmer 8s infinite; }
```

### Spin Animation
```css
@keyframes spin {
  to { transform: rotate(1turn); }
}

.animate-spin { animation: spin 1s linear infinite; }
```

---

## 🎨 Pattern-uri de Design

### Grid Layout Pattern
```css
/* 12-column grid */
display: grid;
grid-template-columns: repeat(12, 1fr);
gap: 20px;
```

### Container Pattern
```html
<Container className="grid grid-cols-12 gap-5">
  <div className="col-span-12 md:col-span-6">...</div>
</Container>
```

### Responsive Breakpoints
```css
/* Tailwind breakpoints */
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Flexbox Patterns

#### Centered Content
```css
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
```

#### Space Between
```css
display: flex;
justify-content: space-between;
align-items: center;
```

#### Responsive Flex
```css
flex-col md:flex-row
```

---

## 🖼️ Imagini & Media

### Avatar Sizes
```css
w-7 h-7   /* 28px - Small */
w-10 h-10 /* 40px - Medium (social icons) */
w-12 h-12 /* 48px - Large */
```

### Image Patterns
```css
/* Hero/Featured Images */
width: 100%
height: 462px (desktop)
height: 256px (mobile)
object-fit: cover
border-radius: 10px

/* Object Fit */
object-contain: pentru icoane/logo-uri
object-cover: pentru imagini decorative
```

---

## 📱 Mobile-First Patterns

### Input Fields Mobile
```css
/* Prevent zoom on focus (iOS) */
font-size: 16px minimum

/* Autofill prevention */
autocomplete="off"
-webkit-box-shadow: 0 0 0 30px white inset !important;
```

### Cookie Banner Responsive
```css
/* Mobile */
fixed bottom-4 left-4 right-4

/* Desktop */
md:bottom-6 md:left-6 md:right-6 md:max-w-5xl md:mx-auto
```

### Form Layout Responsive
```css
/* Mobile: Stacked */
flex-col gap-5

/* Desktop: Side by side */
md:flex-row gap-5
```

---

## 🔍 Shadows & Effects

### Shadow Scale
```css
shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1)
shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)

/* Custom shadows */
shadow-[8px_28px_30px_#00000008]: Card-uri
```

### Hover Effects
```css
/* Opacity */
hover:opacity-70
transition-opacity

/* Background */
hover:bg-[#2d2c65]/90

/* Scale */
hover:scale-105
transition-transform
```

---

## 📋 Form Validation

### Error States
```css
/* Error border */
border-red-500

/* Error text */
text-red-500 text-sm mt-1
```

### Success States
```css
/* Success border */
border-green-500

/* Success text */
text-green-500
```

---

## 🌐 Multi-Language Support

### Language Detection Pattern
```typescript
const { language } = useLanguage();
const { t } = useTranslation();

// Usage
<p>{t('key.translation')}</p>
```

### Language Routing
```
/ → Romanian (default)
/en → English
/ru → Russian
```

---

## 🍪 Cookie Consent Styling

### Banner Position
```css
position: fixed;
bottom: 1rem (mobile) / 1.5rem (desktop);
left: 1rem;
right: 1rem;
max-width: 80rem (desktop);
z-index: 50;
```

### Banner Design
```css
background: white;
border: 2px solid;
border-radius: 8px;
box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
padding: 1rem;
```

---

## 📊 SEO Meta Tags Pattern

### Title Format
```
"{Page Title} — {Section} | EasyReserv.io"
Length: ≤60 characters
```

### Description Format
```
Length: 140-160 characters
Action-oriented, clear value proposition
```

### Open Graph
```html
og:image: 1200×630px recommended
og:type: website | article
og:locale: ro_RO | en_US | ru_RU
```

---

## 🎯 Best Practices

### Performance
- Use `object-contain` for icons/logos
- Use `object-cover` for decorative images
- Lazy load images below fold
- Optimize font loading

### Accessibility
- Always include `aria-label` on icon buttons
- Use semantic HTML (article, section, nav, footer)
- Maintain color contrast ratio ≥4.5:1
- Include `alt` text on all images

### Dark Mode
- Use HSL color values for easy theme switching
- Test all components in both light/dark mode
- Use CSS variables for theme-dependent colors

---

## 📝 Component Examples

### Navigation Button
```tsx
<Button
  className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4"
  data-testid="button-submit"
>
  <span className="font-semibold text-white">Text</span>
</Button>
```

### Form Input
```tsx
<div className="flex flex-col gap-1.5">
  <Label className="text-[#384250] text-sm font-medium">Label</Label>
  <Input
    type="text"
    placeholder="Placeholder"
    autoComplete="off"
    className="h-11 border-[#d2d6db] bg-transparent"
  />
</div>
```

### Social Share Buttons
```tsx
<button
  onClick={shareFunction}
  className="hover:opacity-70 transition-opacity cursor-pointer"
  aria-label="Share on Platform"
>
  <img
    className="w-10 h-10 object-contain"
    alt="Platform Icon"
    src="/path/to/icon.svg"
  />
</button>
```

---

**Ultima actualizare:** Octombrie 2025  
**Versiune:** 1.0.0
