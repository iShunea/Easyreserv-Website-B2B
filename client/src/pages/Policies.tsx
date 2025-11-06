import React from "react";
import { PoliciesSection } from "./sections/PoliciesSection";
import { FooterSection } from "./sections/FooterSection";
import { NavigationSection } from "./sections/NavigationSection";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seo-config";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export const Policies = (): JSX.Element => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <SEO 
        {...seoConfig.policies} 
        language={language}
        title={t('seo.policies_title')}
        description={t('seo.policies_description')}
      />
      <NavigationSection />
      <PoliciesSection />
      <FooterSection />
    </div>
  );
};
