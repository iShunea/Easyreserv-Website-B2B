# 📦 Export Tabel Prețuri - EasyReserv.io

## Fișiere Disponibile

✅ **pricing_structure.json** - Structura completă JSON (prețuri + configurări)
✅ **pricing_plans.csv** - Tabelul de prețuri în format CSV  
✅ **IMPORT_GUIDE.md** - Ghid detaliat de import în Web App
✅ **README.md** - Acest fișier

## 🚀 Start Rapid

### Descarcă Fișierele

Toate fișierele sunt în directorul `pricing_export/`:
- `pricing_structure.json` - pentru import programatic
- `pricing_plans.csv` - pentru import în Excel/Google Sheets/Database
- `IMPORT_GUIDE.md` - instrucțiuni complete

### Utilizare Rapidă

1. **Import JSON în JavaScript/Node.js:**
```javascript
const pricing = require('./pricing_structure.json');
console.log(pricing.industry_pricing.restaurante);
```

2. **Import CSV în Python:**
```python
import pandas as pd
df = pd.read_csv('pricing_plans.csv')
```

3. **Import în SQL Database:**
```sql
COPY pricing_plans FROM 'pricing_plans.csv' DELIMITER ',' CSV HEADER;
```

## 📊 Rezumat Prețuri

| Industrie | Basic | Standard | Pro | Enterprise |
|-----------|-------|----------|-----|------------|
| Restaurante | 50€ | 95€ | 155€ | Custom |
| Medical | 59€ | 115€ | 185€ | Custom |
| Hotele | 55€ | 105€ | 169€ | Custom |

**Toate planurile oferă 10% discount pentru plată anuală**

## 📖 Documentație Completă

Vezi `IMPORT_GUIDE.md` pentru:
- Procese detaliate de import
- Exemple de cod React/Node.js/Python/SQL
- Configurare în Web App
- Sincronizare automată

---
**Versiune:** 1.0 | **Data:** 28 Octombrie 2025
