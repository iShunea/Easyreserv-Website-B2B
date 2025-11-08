# EasyReserv.io Pricing Export

## 📋 Overview

This directory contains **standalone HTML exports** of all EasyReserv.io pricing pages for all 10 industries in 3 languages (Romanian, English, Russian). Each HTML file is completely self-contained with embedded CSS and JavaScript, ready to use anywhere.

## 📁 Directory Structure

```
pricing_export/
├── html/
│   ├── ro/           # Romanian pricing pages
│   │   ├── restaurante.html
│   │   ├── cafenele.html
│   │   ├── hotele.html
│   │   ├── saloane_barbershop.html
│   │   ├── chirii_auto.html
│   │   ├── spalatorii_auto.html
│   │   ├── tenis_padel_fotbal.html
│   │   ├── fitness.html
│   │   ├── medical.html
│   │   └── retail.html
│   ├── en/           # English pricing pages
│   │   └── ... (same files)
│   └── ru/           # Russian pricing pages
│       └── ... (same files)
├── styles/
│   └── pricing-export.css  # Standalone CSS
├── scripts/
│   └── generate-export.ts  # Export generation script
└── README.md         # This file
```

## 🎯 What's Included

### ✅ Complete Pricing Information
- **10 Industries**: All supported business types
- **4 Plans per Industry**: Basic, Standard, Pro, Enterprise
- **2 Billing Options**: Monthly and Annual (with 10% discount)
- **54 Unique Plan IDs**: Hardcoded for direct registration links

### ✅ Interactive Features
- **Billing Toggle**: Switch between monthly and annual pricing
- **Industry Selector**: Navigate between different industries
- **Registration Links**: Direct links to `app.easyreserv.io/register?planId={uuid}`
- **Responsive Design**: Works on mobile, tablet, and desktop

### ✅ Multilingual Support
- **Romanian (RO)**: Full translation
- **English (EN)**: International version
- **Russian (RU)**: Full localization

## 🚀 Usage

### Option 1: Open Directly in Browser

```bash
# Open any HTML file directly
open pricing_export/html/ro/restaurante.html
```

### Option 2: Serve with Local Server

```bash
# Using Python
cd pricing_export/html
python -m http.server 8000

# Using Node.js
npx http-server pricing_export/html -p 8000
```

Then visit: `http://localhost:8000/ro/restaurante.html`

### Option 3: Deploy to CDN

Upload the `html/` directory to any static hosting:
- **Vercel**: `vercel --prod pricing_export/html`
- **Netlify**: Drag & drop folder
- **AWS S3**: `aws s3 sync pricing_export/html s3://bucket`

## 📊 Pricing Structure

### Industries and Monthly Prices

| Industry | Basic | Standard | Pro |
|----------|-------|----------|-----|
| Spălătorii Auto (Car Wash) | €35 | €75 | €125 |
| Tenis/Padel/Fotbal (Sports) | €39 | €79 | €129 |
| Saloane & Barbershop | €40 | €85 | €140 |
| Fitness | €49 | €99 | €149 |
| Medical | €49 | €99 | €199 |
| Retail | €49 | €99 | €159 |
| Cafenele (Cafes) | €50 | €125 | €200 |
| Restaurante (Restaurants) | €50 | €125 | €200 |
| Chirii Auto (Car Rental) | €59 | €119 | €199 |
| Hotele (Hotels) | €79 | €149 | €249 |

**Annual Pricing**: `(Monthly × 12) × 0.9` (10% discount)

## 🔄 Regenerate Exports

```bash
npx tsx pricing_export/scripts/generate-export.ts
```

## 📝 Notes

- **No Dependencies**: Pure HTML/CSS/JS
- **Self-Contained**: All styles embedded
- **Fast Loading**: < 40KB per file
- **SEO Friendly**: Semantic HTML with meta tags
- **Cross-Browser**: Works in all modern browsers

---

**Generated on**: November 8, 2024  
**Total Files**: 30 HTML pages  
**Languages**: Romanian, English, Russian  
**Industries**: 10 supported sectors
