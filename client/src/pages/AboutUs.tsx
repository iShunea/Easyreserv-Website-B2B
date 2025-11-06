import React from "react";
import { NavigationSection } from "./sections/NavigationSection";
import { MainContentSection } from "./sections/MainContentSection";
import { InfoSection } from "./sections/InfoSection";
import { FooterSection } from "./sections/FooterSection";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seo-config";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export function AboutUs() {
  const { language } = useLanguage();
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col w-full">
      <SEO 
        {...seoConfig.about} 
        language={language}
        title={t('seo.about_title')}
        description={t('seo.about_description')}
      />
      <NavigationSection />
      <MainContentSection />
      <InfoSection />
      <FooterSection />
    </div>
  );
}
