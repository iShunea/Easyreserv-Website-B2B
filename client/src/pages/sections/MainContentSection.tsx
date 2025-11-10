import React from "react";
import { Link } from "wouter";
import { useTranslation } from "@/hooks/useTranslation";

export const MainContentSection = (): JSX.Element => {
  const { t } = useTranslation();
  
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden">
      <img
        className="hidden md:block absolute top-0 left-0 w-[1044px] h-[879px]"
        alt="Vector"
        src="/figmaAssets/vector-21.svg"
      />

      <img
        className="hidden md:block absolute top-[51px] left-[1144px] w-[973px] h-[585px]"
        alt="Vector"
        src="/figmaAssets/vector-22.svg"
      />

      <img
        className="hidden md:block absolute top-[205px] left-[-165px] w-[656px] h-[510px]"
        alt="Vector"
        src="/figmaAssets/vector-23.svg"
      />

      <img
        className="hidden md:block top-[299px] left-[983px] absolute w-[1512px] h-[416px]"
        alt="Vector"
        src="/figmaAssets/vector-20-2.svg"
      />

      <div className="flex flex-col items-center gap-5 md:gap-7 lg:gap-8 absolute top-[60px] md:top-[110px] lg:top-[140px] left-1/2 -translate-x-1/2 w-full max-w-[1138px] px-4">
        <h1 className="w-full max-w-[974px] [font-family:'Onest',Helvetica] font-bold text-3xl md:text-[58px] lg:text-[66px] xl:text-[72px] text-center leading-tight md:leading-[1.2] lg:leading-[1.15]">
          <span className="text-[#282828]">{t("about_page.hero.title_part1")}</span>
          <span className="text-[#fe9800]">{t("about_page.hero.title_highlight")}</span>
          <span className="text-[#282828]">{t("about_page.hero.title_part2")}</span>
        </h1>

        <div className="w-full max-w-[860px] flex flex-col items-start gap-2.5">
          <p className="w-full [font-family:'Onest',Helvetica] font-normal text-[#282727] text-base md:text-lg lg:text-xl text-center leading-relaxed md:leading-relaxed">
            {t("about_page.hero.description")}
          </p>
        </div>

        <Link href="/contact" className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 inline-flex items-center justify-center transition-all">
          <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base md:text-lg">
            {t("about_page.hero.cta")}
          </span>
        </Link>
      </div>
    </section>
  );
};
