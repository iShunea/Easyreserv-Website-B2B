import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { BlogSection } from "./sections/BlogSection";
import { NavigationSection } from "./sections/NavigationSection";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seo-config";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";

export const Blog = (): JSX.Element => {
  const { language } = useLanguage();
  const { t } = useTranslation();
  
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <SEO 
        {...seoConfig.blog} 
        language={language}
        title={t('seo.blog_title')}
        description={t('seo.blog_description')}
      />
      <NavigationSection />
      <BlogSection />
      <FooterSection />
    </div>
  );
};
