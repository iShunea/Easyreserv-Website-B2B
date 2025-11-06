import React from "react";
import { ContactFormSection } from "./sections/ContactFormSection";
import { LocationInfoSection } from "./sections/LocationInfoSection";
import { NavigationSection } from "./sections/NavigationSection";
import { FooterSection } from "./sections/FooterSection";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seo-config";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export const Contact = (): JSX.Element => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <SEO 
        {...seoConfig.contact} 
        language={language}
        title={t('seo.contact_title')}
        description={t('seo.contact_description')}
      />
      <img
        className="absolute top-[-77699px] left-[-9755px] w-[416px] h-[1512px]"
        alt="Vector"
        src="/figmaAssets/vector-21-1.svg"
      />

      <img
        className="absolute top-[-77699px] left-[-9755px] w-[416px] h-[1512px]"
        alt="Vector"
        src="/figmaAssets/vector-20-2.svg"
      />

      <img
        className="absolute top-[1608px] left-[385px] w-[1512px] h-[416px]"
        alt="Vector"
        src="/figmaAssets/vector-20-1.svg"
      />

      <img
        className="absolute top-0 left-0 w-[1044px] h-[879px]"
        alt="Vector"
        src="/figmaAssets/vector-21.svg"
      />

      <img
        className="absolute top-[205px] left-[-165px] w-[656px] h-[510px]"
        alt="Vector"
        src="/figmaAssets/vector-23.svg"
      />

      <img
        className="absolute top-[299px] left-[983px] w-[1512px] h-[416px]"
        alt="Vector"
        src="/figmaAssets/vector-20.svg"
      />

      <div className="relative flex flex-col w-full">
        <NavigationSection />
        <div className="flex flex-col items-center w-full px-[10%] py-16 gap-16">
          <ContactFormSection />
          <LocationInfoSection />
        </div>
        <FooterSection />
      </div>
    </div>
  );
};
