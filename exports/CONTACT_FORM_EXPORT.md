# 📋 EXPORT FORMULAR DE CONTACT - EasyReserv B2B

**Destinație:** Frontend B2C  
**Data export:** 22 Octombrie 2025  
**Versiune:** 1.0.0

---

## 📦 PACHETELE NECESARE (Dependencies)

```bash
npm install lucide-react
npm install @radix-ui/react-select
npm install @radix-ui/react-popover
npm install @radix-ui/react-label
```

Dacă folosești shadcn/ui (recomandat):
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add textarea
npx shadcn-ui@latest add select
npx shadcn-ui@latest add popover
npx shadcn-ui@latest add command
npx shadcn-ui@latest add toast
```

---

## 🎨 CSS VARIABILE NECESARE

Adaugă în `globals.css` sau `index.css`:

```css
:root {
  /* Culori principale */
  --apporange: rgba(254, 152, 0, 1);
  --grayswhite: rgba(255, 255, 255, 1);
  
  /* Text */
  --textblack: #282828;
  --text-gray: #384250;
  
  /* Border & Input */
  --border: #D2D6DB;
  
  /* Font families */
  --font-onest: "Onest", Helvetica, sans-serif;
  --font-inter: "Inter", Helvetica, sans-serif;
}
```

---

## 📝 COMPONENTA COMPLETA - ContactFormSection.tsx

```typescript
import { MailIcon, ChevronsUpDown, Check, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

type Country = {
  code: string;
  name: string;
  prefix: string;
  flag: string;
};

// LISTA COMPLETA DE ȚĂRI (180+ țări)
const countries: Country[] = [
  { code: "AF", name: "Afghanistan", prefix: "+93", flag: "🇦🇫" },
  { code: "AL", name: "Albania", prefix: "+355", flag: "🇦🇱" },
  { code: "DZ", name: "Algeria", prefix: "+213", flag: "🇩🇿" },
  { code: "AD", name: "Andorra", prefix: "+376", flag: "🇦🇩" },
  { code: "AO", name: "Angola", prefix: "+244", flag: "🇦🇴" },
  { code: "AR", name: "Argentina", prefix: "+54", flag: "🇦🇷" },
  { code: "AM", name: "Armenia", prefix: "+374", flag: "🇦🇲" },
  { code: "AU", name: "Australia", prefix: "+61", flag: "🇦🇺" },
  { code: "AT", name: "Austria", prefix: "+43", flag: "🇦🇹" },
  { code: "AZ", name: "Azerbaijan", prefix: "+994", flag: "🇦🇿" },
  { code: "BH", name: "Bahrain", prefix: "+973", flag: "🇧🇭" },
  { code: "BD", name: "Bangladesh", prefix: "+880", flag: "🇧🇩" },
  { code: "BY", name: "Belarus", prefix: "+375", flag: "🇧🇾" },
  { code: "BE", name: "Belgia", prefix: "+32", flag: "🇧🇪" },
  { code: "BZ", name: "Belize", prefix: "+501", flag: "🇧🇿" },
  { code: "BJ", name: "Benin", prefix: "+229", flag: "🇧🇯" },
  { code: "BT", name: "Bhutan", prefix: "+975", flag: "🇧🇹" },
  { code: "BO", name: "Bolivia", prefix: "+591", flag: "🇧🇴" },
  { code: "BA", name: "Bosnia și Herțegovina", prefix: "+387", flag: "🇧🇦" },
  { code: "BW", name: "Botswana", prefix: "+267", flag: "🇧🇼" },
  { code: "BR", name: "Brazilia", prefix: "+55", flag: "🇧🇷" },
  { code: "BN", name: "Brunei", prefix: "+673", flag: "🇧🇳" },
  { code: "BG", name: "Bulgaria", prefix: "+359", flag: "🇧🇬" },
  { code: "BF", name: "Burkina Faso", prefix: "+226", flag: "🇧🇫" },
  { code: "BI", name: "Burundi", prefix: "+257", flag: "🇧🇮" },
  { code: "KH", name: "Cambodgia", prefix: "+855", flag: "🇰🇭" },
  { code: "CM", name: "Camerun", prefix: "+237", flag: "🇨🇲" },
  { code: "CA", name: "Canada", prefix: "+1", flag: "🇨🇦" },
  { code: "CV", name: "Capul Verde", prefix: "+238", flag: "🇨🇻" },
  { code: "CF", name: "Republica Centrafricană", prefix: "+236", flag: "🇨🇫" },
  { code: "TD", name: "Ciad", prefix: "+235", flag: "🇹🇩" },
  { code: "CL", name: "Chile", prefix: "+56", flag: "🇨🇱" },
  { code: "CN", name: "China", prefix: "+86", flag: "🇨🇳" },
  { code: "CO", name: "Columbia", prefix: "+57", flag: "🇨🇴" },
  { code: "KM", name: "Comore", prefix: "+269", flag: "🇰🇲" },
  { code: "CG", name: "Congo", prefix: "+242", flag: "🇨🇬" },
  { code: "CD", name: "R.D. Congo", prefix: "+243", flag: "🇨🇩" },
  { code: "CR", name: "Costa Rica", prefix: "+506", flag: "🇨🇷" },
  { code: "HR", name: "Croația", prefix: "+385", flag: "🇭🇷" },
  { code: "CU", name: "Cuba", prefix: "+53", flag: "🇨🇺" },
  { code: "CY", name: "Cipru", prefix: "+357", flag: "🇨🇾" },
  { code: "CZ", name: "Cehia", prefix: "+420", flag: "🇨🇿" },
  { code: "DK", name: "Danemarca", prefix: "+45", flag: "🇩🇰" },
  { code: "DJ", name: "Djibouti", prefix: "+253", flag: "🇩🇯" },
  { code: "DO", name: "Rep. Dominicană", prefix: "+1-809", flag: "🇩🇴" },
  { code: "EC", name: "Ecuador", prefix: "+593", flag: "🇪🇨" },
  { code: "EG", name: "Egipt", prefix: "+20", flag: "🇪🇬" },
  { code: "SV", name: "El Salvador", prefix: "+503", flag: "🇸🇻" },
  { code: "GQ", name: "Guineea Ecuatorială", prefix: "+240", flag: "🇬🇶" },
  { code: "ER", name: "Eritreea", prefix: "+291", flag: "🇪🇷" },
  { code: "EE", name: "Estonia", prefix: "+372", flag: "🇪🇪" },
  { code: "ET", name: "Etiopia", prefix: "+251", flag: "🇪🇹" },
  { code: "FJ", name: "Fiji", prefix: "+679", flag: "🇫🇯" },
  { code: "FI", name: "Finlanda", prefix: "+358", flag: "🇫🇮" },
  { code: "FR", name: "Franța", prefix: "+33", flag: "🇫🇷" },
  { code: "GA", name: "Gabon", prefix: "+241", flag: "🇬🇦" },
  { code: "GM", name: "Gambia", prefix: "+220", flag: "🇬🇲" },
  { code: "GE", name: "Georgia", prefix: "+995", flag: "🇬🇪" },
  { code: "DE", name: "Germania", prefix: "+49", flag: "🇩🇪" },
  { code: "GH", name: "Ghana", prefix: "+233", flag: "🇬🇭" },
  { code: "GR", name: "Grecia", prefix: "+30", flag: "🇬🇷" },
  { code: "GT", name: "Guatemala", prefix: "+502", flag: "🇬🇹" },
  { code: "GN", name: "Guineea", prefix: "+224", flag: "🇬🇳" },
  { code: "GW", name: "Guineea-Bissau", prefix: "+245", flag: "🇬🇼" },
  { code: "GY", name: "Guyana", prefix: "+592", flag: "🇬🇾" },
  { code: "HT", name: "Haiti", prefix: "+509", flag: "🇭🇹" },
  { code: "HN", name: "Honduras", prefix: "+504", flag: "🇭🇳" },
  { code: "HK", name: "Hong Kong", prefix: "+852", flag: "🇭🇰" },
  { code: "HU", name: "Ungaria", prefix: "+36", flag: "🇭🇺" },
  { code: "IS", name: "Islanda", prefix: "+354", flag: "🇮🇸" },
  { code: "IN", name: "India", prefix: "+91", flag: "🇮🇳" },
  { code: "ID", name: "Indonezia", prefix: "+62", flag: "🇮🇩" },
  { code: "IR", name: "Iran", prefix: "+98", flag: "🇮🇷" },
  { code: "IQ", name: "Irak", prefix: "+964", flag: "🇮🇶" },
  { code: "IE", name: "Irlanda", prefix: "+353", flag: "🇮🇪" },
  { code: "IL", name: "Israel", prefix: "+972", flag: "🇮🇱" },
  { code: "IT", name: "Italia", prefix: "+39", flag: "🇮🇹" },
  { code: "CI", name: "Coasta de Fildeș", prefix: "+225", flag: "🇨🇮" },
  { code: "JM", name: "Jamaica", prefix: "+1-876", flag: "🇯🇲" },
  { code: "JP", name: "Japonia", prefix: "+81", flag: "🇯🇵" },
  { code: "JO", name: "Iordania", prefix: "+962", flag: "🇯🇴" },
  { code: "KZ", name: "Kazahstan", prefix: "+7", flag: "🇰🇿" },
  { code: "KE", name: "Kenya", prefix: "+254", flag: "🇰🇪" },
  { code: "KW", name: "Kuwait", prefix: "+965", flag: "🇰🇼" },
  { code: "KG", name: "Kârgâzstan", prefix: "+996", flag: "🇰🇬" },
  { code: "LA", name: "Laos", prefix: "+856", flag: "🇱🇦" },
  { code: "LV", name: "Letonia", prefix: "+371", flag: "🇱🇻" },
  { code: "LB", name: "Liban", prefix: "+961", flag: "🇱🇧" },
  { code: "LS", name: "Lesotho", prefix: "+266", flag: "🇱🇸" },
  { code: "LR", name: "Liberia", prefix: "+231", flag: "🇱🇷" },
  { code: "LY", name: "Libia", prefix: "+218", flag: "🇱🇾" },
  { code: "LI", name: "Liechtenstein", prefix: "+423", flag: "🇱🇮" },
  { code: "LT", name: "Lituania", prefix: "+370", flag: "🇱🇹" },
  { code: "LU", name: "Luxemburg", prefix: "+352", flag: "🇱🇺" },
  { code: "MO", name: "Macao", prefix: "+853", flag: "🇲🇴" },
  { code: "MG", name: "Madagascar", prefix: "+261", flag: "🇲🇬" },
  { code: "MW", name: "Malawi", prefix: "+265", flag: "🇲🇼" },
  { code: "MY", name: "Malaysia", prefix: "+60", flag: "🇲🇾" },
  { code: "MV", name: "Maldive", prefix: "+960", flag: "🇲🇻" },
  { code: "ML", name: "Mali", prefix: "+223", flag: "🇲🇱" },
  { code: "MT", name: "Malta", prefix: "+356", flag: "🇲🇹" },
  { code: "MR", name: "Mauritania", prefix: "+222", flag: "🇲🇷" },
  { code: "MU", name: "Mauritius", prefix: "+230", flag: "🇲🇺" },
  { code: "MX", name: "Mexic", prefix: "+52", flag: "🇲🇽" },
  { code: "MD", name: "Moldova", prefix: "+373", flag: "🇲🇩" },
  { code: "MC", name: "Monaco", prefix: "+377", flag: "🇲🇨" },
  { code: "MN", name: "Mongolia", prefix: "+976", flag: "🇲🇳" },
  { code: "ME", name: "Muntenegru", prefix: "+382", flag: "🇲🇪" },
  { code: "MA", name: "Maroc", prefix: "+212", flag: "🇲🇦" },
  { code: "MZ", name: "Mozambic", prefix: "+258", flag: "🇲🇿" },
  { code: "MM", name: "Myanmar", prefix: "+95", flag: "🇲🇲" },
  { code: "NA", name: "Namibia", prefix: "+264", flag: "🇳🇦" },
  { code: "NP", name: "Nepal", prefix: "+977", flag: "🇳🇵" },
  { code: "NL", name: "Olanda", prefix: "+31", flag: "🇳🇱" },
  { code: "NZ", name: "Noua Zeelandă", prefix: "+64", flag: "🇳🇿" },
  { code: "NI", name: "Nicaragua", prefix: "+505", flag: "🇳🇮" },
  { code: "NE", name: "Niger", prefix: "+227", flag: "🇳🇪" },
  { code: "NG", name: "Nigeria", prefix: "+234", flag: "🇳🇬" },
  { code: "KP", name: "Coreea de Nord", prefix: "+850", flag: "🇰🇵" },
  { code: "MK", name: "Macedonia de Nord", prefix: "+389", flag: "🇲🇰" },
  { code: "NO", name: "Norvegia", prefix: "+47", flag: "🇳🇴" },
  { code: "OM", name: "Oman", prefix: "+968", flag: "🇴🇲" },
  { code: "PK", name: "Pakistan", prefix: "+92", flag: "🇵🇰" },
  { code: "PS", name: "Palestina", prefix: "+970", flag: "🇵🇸" },
  { code: "PA", name: "Panama", prefix: "+507", flag: "🇵🇦" },
  { code: "PG", name: "Papua Noua Guinee", prefix: "+675", flag: "🇵🇬" },
  { code: "PY", name: "Paraguay", prefix: "+595", flag: "🇵🇾" },
  { code: "PE", name: "Peru", prefix: "+51", flag: "🇵🇪" },
  { code: "PH", name: "Filipine", prefix: "+63", flag: "🇵🇭" },
  { code: "PL", name: "Polonia", prefix: "+48", flag: "🇵🇱" },
  { code: "PT", name: "Portugalia", prefix: "+351", flag: "🇵🇹" },
  { code: "PR", name: "Puerto Rico", prefix: "+1-787", flag: "🇵🇷" },
  { code: "QA", name: "Qatar", prefix: "+974", flag: "🇶🇦" },
  { code: "RO", name: "România", prefix: "+40", flag: "🇷🇴" },
  { code: "RU", name: "Rusia", prefix: "+7", flag: "🇷🇺" },
  { code: "RW", name: "Rwanda", prefix: "+250", flag: "🇷🇼" },
  { code: "WS", name: "Samoa", prefix: "+685", flag: "🇼🇸" },
  { code: "SM", name: "San Marino", prefix: "+378", flag: "🇸🇲" },
  { code: "SA", name: "Arabia Saudită", prefix: "+966", flag: "🇸🇦" },
  { code: "SN", name: "Senegal", prefix: "+221", flag: "🇸🇳" },
  { code: "RS", name: "Serbia", prefix: "+381", flag: "🇷🇸" },
  { code: "SC", name: "Seychelles", prefix: "+248", flag: "🇸🇨" },
  { code: "SL", name: "Sierra Leone", prefix: "+232", flag: "🇸🇱" },
  { code: "SG", name: "Singapore", prefix: "+65", flag: "🇸🇬" },
  { code: "SK", name: "Slovacia", prefix: "+421", flag: "🇸🇰" },
  { code: "SI", name: "Slovenia", prefix: "+386", flag: "🇸🇮" },
  { code: "SB", name: "Insulele Solomon", prefix: "+677", flag: "🇸🇧" },
  { code: "SO", name: "Somalia", prefix: "+252", flag: "🇸🇴" },
  { code: "ZA", name: "Africa de Sud", prefix: "+27", flag: "🇿🇦" },
  { code: "KR", name: "Coreea de Sud", prefix: "+82", flag: "🇰🇷" },
  { code: "SS", name: "Sudanul de Sud", prefix: "+211", flag: "🇸🇸" },
  { code: "ES", name: "Spania", prefix: "+34", flag: "🇪🇸" },
  { code: "LK", name: "Sri Lanka", prefix: "+94", flag: "🇱🇰" },
  { code: "SD", name: "Sudan", prefix: "+249", flag: "🇸🇩" },
  { code: "SR", name: "Surinam", prefix: "+597", flag: "🇸🇷" },
  { code: "SE", name: "Suedia", prefix: "+46", flag: "🇸🇪" },
  { code: "CH", name: "Elveția", prefix: "+41", flag: "🇨🇭" },
  { code: "SY", name: "Siria", prefix: "+963", flag: "🇸🇾" },
  { code: "TW", name: "Taiwan", prefix: "+886", flag: "🇹🇼" },
  { code: "TJ", name: "Tadjikistan", prefix: "+992", flag: "🇹🇯" },
  { code: "TZ", name: "Tanzania", prefix: "+255", flag: "🇹🇿" },
  { code: "TH", name: "Thailanda", prefix: "+66", flag: "🇹🇭" },
  { code: "TG", name: "Togo", prefix: "+228", flag: "🇹🇬" },
  { code: "TO", name: "Tonga", prefix: "+676", flag: "🇹🇴" },
  { code: "TT", name: "Trinidad și Tobago", prefix: "+1-868", flag: "🇹🇹" },
  { code: "TN", name: "Tunisia", prefix: "+216", flag: "🇹🇳" },
  { code: "TR", name: "Turcia", prefix: "+90", flag: "🇹🇷" },
  { code: "TM", name: "Turkmenistan", prefix: "+993", flag: "🇹🇲" },
  { code: "UG", name: "Uganda", prefix: "+256", flag: "🇺🇬" },
  { code: "UA", name: "Ucraina", prefix: "+380", flag: "🇺🇦" },
  { code: "AE", name: "Emiratele Arabe Unite", prefix: "+971", flag: "🇦🇪" },
  { code: "GB", name: "Regatul Unit", prefix: "+44", flag: "🇬🇧" },
  { code: "US", name: "SUA", prefix: "+1", flag: "🇺🇸" },
  { code: "UY", name: "Uruguay", prefix: "+598", flag: "🇺🇾" },
  { code: "UZ", name: "Uzbekistan", prefix: "+998", flag: "🇺🇿" },
  { code: "VU", name: "Vanuatu", prefix: "+678", flag: "🇻🇺" },
  { code: "VE", name: "Venezuela", prefix: "+58", flag: "🇻🇪" },
  { code: "VN", name: "Vietnam", prefix: "+84", flag: "🇻🇳" },
  { code: "YE", name: "Yemen", prefix: "+967", flag: "🇾🇪" },
  { code: "ZM", name: "Zambia", prefix: "+260", flag: "🇿🇲" },
  { code: "ZW", name: "Zimbabwe", prefix: "+263", flag: "🇿🇼" },
];

type FormField = {
  label: string;
  placeholder: string;
  type: string;
  icon?: string;
  hasCountryCode?: boolean;
  options?: string[];
};

const formFields = [
  {
    row: 1,
    fields: [
      { label: "Prenume", placeholder: "ex: Giorgio Marshal", type: "text" },
      { label: "Nume", placeholder: "ex: Giorgio Marshal", type: "text" },
    ],
  },
  {
    row: 2,
    fields: [
      {
        label: "Email",
        placeholder: "yourmail@gmail.com",
        type: "email",
        icon: "mail",
      },
      {
        label: "Telefon",
        placeholder: "+373 XX XXX XXX",
        type: "phone",
        hasCountryCode: true,
      },
    ],
  },
  {
    row: 3,
    fields: [
      {
        label: "Tipul afacerii",
        placeholder: "Restaurante",
        type: "select",
        options: [
          "Restaurante",
          "Cafenele",
          "Saloane de frumusețe",
          "Barbershopuri",
          "Hotele & Pensiuni",
          "Chirii auto",
          "Fitness",
          "Medical",
          "Retail",
          "Spălătorii auto",
          "Tenis/Padel/Fotbal"
        ],
      },
      { label: "Numele companiei", placeholder: "ishunearestaurant", type: "text" },
    ],
  },
  {
    row: 4,
    fields: [
      { label: "Rolul tău", placeholder: "CEO", type: "text" },
      {
        label: "Dimensiunea companiei",
        placeholder: "10 - 50",
        type: "select",
        options: ["1 - 10", "10 - 50", "50 - 100", "100+"],
      },
    ],
  },
];

export const ContactFormSection = (): JSX.Element => {
  const { toast } = useToast();
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessType: "",
    companyName: "",
    role: "",
    companySize: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Detect user's country on component mount
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        const userCountryCode = data.country_code;
        const userCountry = countries.find(c => c.code === userCountryCode);
        if (userCountry) {
          setSelectedCountry(userCountry);
        }
      })
      .catch(() => {
        // If geolocation fails, keep default (first country)
      });
  }, []);

  const getFieldName = (label: string): string => {
    const mapping: Record<string, string> = {
      "Prenume": "firstName",
      "Nume": "lastName",
      "Email": "email",
      "Telefon": "phone",
      "Tipul afacerii": "businessType",
      "Numele companiei": "companyName",
      "Rolul tău": "role",
      "Dimensiunea companiei": "companySize"
    };
    return mapping[label] || "";
  };

  const validateEmail = (email: string) => {
    if (!email.includes("@")) {
      return "Email-ul trebuie să conțină @";
    }
    return "";
  };

  const validatePhone = (phone: string) => {
    if (phone && !/^\d+$/.test(phone)) {
      return "Numărul de telefon trebuie să conțină doar cifre";
    }
    return "";
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }));
    
    if (fieldName === "email") {
      const error = validateEmail(value);
      setErrors(prev => ({ ...prev, email: error }));
    } else if (fieldName === "phone") {
      const error = validatePhone(value);
      setErrors(prev => ({ ...prev, phone: error }));
    }
  };

  const handleSubmit = async () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.email.includes("@")) {
      newErrors.email = "Email-ul trebuie să conțină @";
    }
    if (formData.phone && !/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Numărul de telefon trebuie să conțină doar cifre";
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        // IMPORTANT: Schimbă acest URL cu URL-ul backend-ului tău B2C
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';
        
        // Submit form data to backend
        const response = await fetch(`${backendUrl}/custom-forms/contact-form/submit`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fullName: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            phone: `${selectedCountry.prefix} ${formData.phone}`,
            message: formData.message,
            businessType: formData.businessType,
            companyName: formData.companyName,
            role: formData.role,
            companySize: formData.companySize,
            country: selectedCountry.name,
            countryCode: selectedCountry.code
          })
        });
        
        const result = await response.json();
        
        if (response.ok) {
          // Push form_submit event to Google Tag Manager for Analytics and Pixel tracking
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "form_submit",
            form_name: "contact_form",
            form_data: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              phone: formData.phone,
              businessType: formData.businessType,
              companyName: formData.companyName,
              role: formData.role,
              companySize: formData.companySize,
              message: formData.message,
              country: selectedCountry.code,
              countryName: selectedCountry.name,
              countryPrefix: selectedCountry.prefix
            }
          });
          
          // Show success notification
          toast({
            title: "Succes!",
            description: result.message || "Formularul a fost trimis cu succes! Te vom contacta în curând.",
          });
          
          // Reset form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            businessType: "",
            companyName: "",
            role: "",
            companySize: "",
            message: ""
          });
          setSelectedCountry(countries[0]);
        } else {
          toast({
            title: "Eroare",
            description: result.message || "A apărut o eroare. Te rugăm să încerci din nou.",
            variant: "destructive"
          });
        }
      } catch (error) {
        console.error('Form submission error:', error);
        toast({
          title: "Eroare de conexiune",
          description: "Nu s-a putut trimite formularul. Verifică conexiunea la internet și încearcă din nou.",
          variant: "destructive"
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="flex flex-col w-full max-w-[1138px] mx-auto items-center gap-5 px-0 py-[50px] bg-white rounded-[10px] border border-solid border-zinc-200 shadow-[8px_28px_30px_#00000008]">
      <h2 className="w-full max-w-[974px] [font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl text-center tracking-[0] leading-[normal]">
        Spune-ne despre afacerea ta
      </h2>

      <p className="w-full max-w-[674px] [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base text-center tracking-[0] leading-[20.8px]">
        Te rugăm să completezi formularul de mai jos pentru ca noi să înțelegem mai bine nevoile tale.
      </p>

      <div className="inline-flex flex-col items-start justify-center gap-5 w-full max-w-[974px] px-4">
        <div className="flex flex-col w-full items-start gap-5">
          {formFields.map((row) => (
            <div key={row.row} className="flex flex-col md:flex-row items-start gap-5 w-full">
              {row.fields.map((field: FormField, index) => (
                <div
                  key={`${row.row}-${index}`}
                  className="flex flex-col items-start gap-1.5 flex-1 w-full"
                >
                  <Label className="text-[#384250] text-sm font-medium">
                    {field.label}
                  </Label>

                  {field.type === "select" ? (
                    <>
                      <Select 
                        value={formData[getFieldName(field.label) as keyof typeof formData]} 
                        onValueChange={(value) => handleInputChange(getFieldName(field.label), value)}
                      >
                        <SelectTrigger className="w-full h-11 bg-white rounded-lg border border-solid border-[#d2d6db] focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0 focus:border-[#d2d6db]">
                          <SelectValue placeholder={field.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {field.options?.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors[getFieldName(field.label)] && (
                        <p className="text-red-500 text-sm">{errors[getFieldName(field.label)]}</p>
                      )}
                    </>
                  ) : field.type === "phone" ? (
                    <>
                      <div className="flex items-center gap-2 w-full h-11 bg-white rounded-lg border border-solid border-[#d2d6db] px-3">
                        <Popover open={open} onOpenChange={setOpen}>
                          <PopoverTrigger asChild>
                            <Button
                              variant="ghost"
                              role="combobox"
                              aria-expanded={open}
                              className="h-full justify-between p-0 hover:bg-transparent"
                            >
                              <span className="text-base">{selectedCountry.flag}</span>
                              <span className="ml-2 text-sm font-normal text-[#282828]">
                                {selectedCountry.prefix}
                              </span>
                              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-[300px] p-0" align="start">
                            <Command>
                              <CommandInput placeholder="Caută țara..." />
                              <CommandEmpty>Nicio țară găsită.</CommandEmpty>
                              <CommandList>
                                <CommandGroup>
                                  {countries.map((country) => (
                                    <CommandItem
                                      key={country.code}
                                      value={country.name}
                                      onSelect={() => {
                                        setSelectedCountry(country);
                                        setOpen(false);
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-4 w-4",
                                          selectedCountry.code === country.code
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
                                      <span className="mr-2">{country.flag}</span>
                                      <span className="flex-1">{country.name}</span>
                                      <span className="text-sm text-gray-500">
                                        {country.prefix}
                                      </span>
                                    </CommandItem>
                                  ))}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>
                        <div className="w-px h-6 bg-[#d2d6db]" />
                        <Input
                          type="tel"
                          placeholder={field.placeholder}
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          autoComplete="off"
                          className="flex-1 h-full border-0 shadow-none p-0 bg-transparent focus-visible:outline-none focus-visible:ring-0"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-sm">{errors.phone}</p>
                      )}
                    </>
                  ) : field.type === "email" ? (
                    <>
                      <div className="flex items-center gap-2 px-3 h-11 w-full bg-white rounded-lg border border-solid border-[#d2d6db]">
                        <MailIcon className="w-5 h-5 text-[#909090]" />
                        <Input
                          type="email"
                          placeholder={field.placeholder}
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          autoComplete="off"
                          className="flex-1 h-full border-0 shadow-none p-0 bg-transparent focus-visible:outline-none focus-visible:ring-0"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                      )}
                    </>
                  ) : (
                    <Input
                      type="text"
                      placeholder={field.placeholder}
                      value={formData[getFieldName(field.label) as keyof typeof formData]}
                      onChange={(e) => handleInputChange(getFieldName(field.label), e.target.value)}
                      autoComplete="off"
                      className="w-full h-11 bg-white rounded-lg border border-solid border-[#d2d6db] px-3 focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0 focus:border-[#d2d6db]"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start gap-1.5 w-full">
          <Label className="text-[#384250] text-sm font-medium">
            Mesaj
          </Label>
          <Textarea
            placeholder="Scrie-ți mesajul Dumneavoastră aici"
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className="w-full min-h-[120px] bg-white rounded-lg border border-solid border-[#d2d6db] px-3 py-2.5 text-black text-base focus-visible:outline-none focus-visible:ring-0 focus:outline-none focus:ring-0 focus:border-[#d2d6db] resize-none"
          />
        </div>

        <div className="w-full max-w-[880px] [font-family:'Inter',Helvetica] font-normal text-sm leading-[14px]">
          <span className="text-[#282828] tracking-[0] leading-[20.5px]">
            Prin trimiterea acestor informații, ești de acord cu următorii termeni:
            <br />
            {" "}
          </span>
          <span className="text-[#282828] tracking-[-0.04px] leading-[20.5px] underline">
            Politica de Confidențialitate
          </span>
          <span className="text-[#282828] tracking-[0] leading-[20.5px]">
            {" "}
            EasyReserv va reglementa utilizarea serviciilor pe care le primești și datele personale pe care le furnizezi.
            <br />
            De asemenea, consimți să primești comunicări de marketing de la EasyReserv despre noutăți, evenimente, promoții și buletine informative lunare.
            <br />
            Te poți dezabona oricând de la email-urile EasyReserv.
          </span>
        </div>
      </div>

      <Button 
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4 disabled:opacity-50 disabled:cursor-not-allowed" 
        data-testid="button-send-contact"
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5">
              Se trimite...
            </span>
          </div>
        ) : (
          <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5">
            Trimite
          </span>
        )}
      </Button>
    </section>
  );
};
```

---

## 🔧 CONFIGURARE BACKEND (API Endpoint)

Backend-ul B2C trebuie să aibă un endpoint care primește datele:

```typescript
// Backend endpoint example (Node.js/Express)
app.post('/custom-forms/contact-form/submit', async (req, res) => {
  const {
    fullName,
    email,
    phone,
    message,
    businessType,
    companyName,
    role,
    companySize,
    country,
    countryCode
  } = req.body;

  try {
    // 1. Salvează în baza de date
    // await db.contacts.create({ ... });

    // 2. Trimite email prin nodemailer
    // await sendEmail({ to: email, ... });

    // 3. Răspunde cu succes
    res.json({
      success: true,
      message: "Formularul a fost trimis cu succes!"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "A apărut o eroare la trimiterea formularului."
    });
  }
});
```

---

## 🎨 CLASE TAILWIND UTILIZATE

### Container principal
```css
max-w-[1138px]          /* Lățime maximă formular */
py-[50px]               /* Padding vertical */
rounded-[10px]          /* Border radius */
shadow-[8px_28px_30px_#00000008]  /* Shadow custom */
```

### Input-uri
```css
h-11                    /* Înălțime 44px */
rounded-lg              /* Border radius 8px */
border-[#d2d6db]       /* Culoare border */
```

### Butoane
```css
bg-[#2d2c65]           /* Albastru brand */
hover:bg-[#2d2c65]/90  /* Hover cu opacitate */
rounded-[5px]          /* Border radius mic */
px-6 py-4              /* Padding buton */
```

---

## 📊 DATELE TRIMISE LA BACKEND

```json
{
  "fullName": "Giorgio Marshal",
  "email": "giorgio@example.com",
  "phone": "+40 123456789",
  "message": "Mesaj de contact...",
  "businessType": "Restaurante",
  "companyName": "Restaurant Example",
  "role": "CEO",
  "companySize": "10 - 50",
  "country": "România",
  "countryCode": "RO"
}
```

---

## 📱 FEATURES INCLUSE

✅ **Validare formular în timp real**  
✅ **Selector țară cu căutare (180+ țări)**  
✅ **Auto-detectare țară utilizator (IP geolocation)**  
✅ **Loading state pe buton**  
✅ **Error handling complet**  
✅ **Google Tag Manager integration**  
✅ **Toast notifications**  
✅ **Responsive design (mobile + desktop)**  
✅ **Reset formular după submit**

---

## 🌍 ENVIRONMENT VARIABLES

Adaugă în `.env` sau `.env.local`:

```bash
# Pentru React/Vite
VITE_BACKEND_URL=https://your-b2c-backend-api.com

# Pentru Next.js
NEXT_PUBLIC_BACKEND_URL=https://your-b2c-backend-api.com
```

---

## ✨ CUSTOMIZARE PENTRU B2C

### 1. Schimbă textele în limba dorită
Caută și înlocuiește textele din română în altă limbă.

### 2. Modifică opțiunile de business
În array-ul `formFields`, rândul 3, editează opțiunile:
```typescript
options: [
  "Restaurante",
  "Cafenele",
  // Adaugă/șterge opțiuni
],
```

### 3. Schimbă culorile brand
Înlocuiește `#2d2c65` cu culoarea ta brand.

### 4. Ajustează URL-ul backend
În funcția `handleSubmit`, linia 384, setează URL-ul corect.

---

## 📞 SUPORT & CONTACT

Pentru orice întrebări sau probleme de integrare, contactați echipa B2B EasyReserv.

---

**© 2025 EasyReserv.io - Toate drepturile rezervate**
