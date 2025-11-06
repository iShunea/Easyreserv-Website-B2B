import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/contexts/LanguageContext";
import { 
  termsAndConditionsRO, 
  termsAndConditionsEN, 
  termsAndConditionsRU,
  privacyPolicyRO,
  privacyPolicyEN,
  privacyPolicyRU,
  cookiesPolicyRO,
  cookiesPolicyEN,
  cookiesPolicyRU
} from "./policies/policyContent";

const getPolicyItems = (language: Language) => {
  const items = {
    ro: [
      { label: "Politica de confidențialitate", anchor: "#privacy-policy" },
      { label: "Politica Cookie", anchor: "#cookies-policy" },
      { label: "Termeni și condiții", anchor: "#terms-and-conditions" },
    ],
    en: [
      { label: "Privacy Policy", anchor: "#privacy-policy" },
      { label: "Cookie Policy", anchor: "#cookies-policy" },
      { label: "Terms and Conditions", anchor: "#terms-and-conditions" },
    ],
    ru: [
      { label: "Политика конфиденциальности", anchor: "#privacy-policy" },
      { label: "Политика использования файлов cookie", anchor: "#cookies-policy" },
      { label: "Условия использования", anchor: "#terms-and-conditions" },
    ],
  };
  return items[language] || items.ro;
};

const getPolicyContent = (id: string, language: Language) => {
  const policies: Record<string, Record<Language, { title: string; content: string }>> = {
    "privacy-policy": {
      ro: { title: "Politica de confidențialitate", content: privacyPolicyRO },
      en: { title: "Privacy Policy", content: privacyPolicyEN },
      ru: { title: "Политика конфиденциальности", content: privacyPolicyRU },
    },
    "cookies-policy": {
      ro: { title: "Politica Cookie", content: cookiesPolicyRO },
      en: { title: "Cookie Policy", content: cookiesPolicyEN },
      ru: { title: "Политика использования файлов cookie", content: cookiesPolicyRU },
    },
    "terms-and-conditions": {
      ro: { title: "Termeni și condiții", content: termsAndConditionsRO },
      en: { title: "Terms and Conditions", content: termsAndConditionsEN },
      ru: { title: "Условия использования", content: termsAndConditionsRU },
    },
  };

  return policies[id]?.[language] || policies[id]?.ro || { title: "", content: "" };
};

export const PoliciesSection = (): JSX.Element => {
  const { language } = useLanguage();
  const [selectedPolicy, setSelectedPolicy] = React.useState("privacy-policy");
  
  const policyItems = getPolicyItems(language);
  const currentPolicy = getPolicyContent(selectedPolicy, language);

  return (
    <section className="flex w-full items-start px-4 md:px-[10%] py-16 gap-8">
      <div className="hidden md:flex flex-col gap-2 min-w-[250px]">
        {policyItems.map((item) => (
          <Button
            key={item.anchor}
            onClick={() => setSelectedPolicy(item.anchor.replace("#", ""))}
            variant={selectedPolicy === item.anchor.replace("#", "") ? "default" : "ghost"}
            className={`justify-start ${
              selectedPolicy === item.anchor.replace("#", "")
                ? "bg-[#2d2c65] text-white hover:bg-[#2d2c65]/90"
                : "text-[#282828] hover:bg-gray-100"
            }`}
            data-testid={`button-policy-${item.anchor.replace("#", "")}`}
          >
            <span className="[font-family:'Onest',Helvetica] font-medium text-sm">
              {item.label}
            </span>
          </Button>
        ))}
      </div>

      <div className="md:hidden w-full mb-6">
        <select
          value={selectedPolicy}
          onChange={(e) => setSelectedPolicy(e.target.value)}
          className="w-full p-3 border border-gray-200 rounded-lg [font-family:'Onest',Helvetica] text-sm"
          data-testid="select-policy-mobile"
        >
          {policyItems.map((item) => (
            <option key={item.anchor} value={item.anchor.replace("#", "")}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {currentPolicy && (
        <Card className="flex-1 border-0 shadow-sm">
          <CardContent className="p-6 md:p-8 max-h-[calc(100vh-12rem)] overflow-y-auto">
            <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl md:text-2xl mb-6 tracking-[0] leading-normal">
              {currentPolicy.title}
            </h2>
            <div className="[font-family:'Onest',Helvetica] text-[#282828] text-base leading-relaxed whitespace-pre-wrap">
              {currentPolicy.content}
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
};
