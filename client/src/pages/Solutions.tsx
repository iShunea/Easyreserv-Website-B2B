import React from "react";
import { NavigationSection } from "./sections/NavigationSection";
import { SolutionsContentSection } from "./sections/SolutionsContentSection";
import { FooterSection } from "./sections/FooterSection";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seo-config";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export function Solutions() {
  const { language } = useLanguage();
  const { t } = useTranslation();
  
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <SEO 
        {...seoConfig.solutions} 
        language={language}
        title={t('seo.solutions_title')}
        description={t('seo.solutions_description')}
      />
      <img
        className="hidden md:block absolute top-[4538px] left-[500px] w-[1512px] h-[416px] -z-10 pointer-events-none"
        alt="Vector"
        src="/figmaAssets/vector-21.svg"
      />

      <img
        className="hidden md:block absolute top-[2518px] left-[-428px] w-[1512px] h-[416px] -z-10 pointer-events-none"
        alt="Vector"
        src="/figmaAssets/vector-20-1.svg"
      />

      <img
        className="hidden md:block absolute top-[1608px] left-[385px] w-[1512px] h-[416px] -z-10 pointer-events-none"
        alt="Vector"
        src="/figmaAssets/vector-20.svg"
      />

      <img
        className="hidden md:block absolute top-0 left-0 w-[1044px] h-[879px] -z-10 pointer-events-none"
        alt="Vector"
        src="/figmaAssets/vector-21-1.svg"
      />

      <img
        className="hidden md:block absolute top-[205px] left-[-165px] w-[656px] h-[510px] -z-10 pointer-events-none"
        alt="Vector"
        src="/figmaAssets/vector-23.svg"
      />

      <img
        className="hidden md:block absolute top-[299px] left-[983px] w-[1512px] h-[416px] -z-10 pointer-events-none"
        alt="Vector"
        src="/figmaAssets/vector-20-2.svg"
      />

      <NavigationSection />
      <SolutionsContentSection />
      <FooterSection />
    </div>
  );
}
