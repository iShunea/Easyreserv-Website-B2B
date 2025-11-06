import React from "react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FAQSection } from "./FAQSection";
import { Container } from "@/components/Container";
import { useTranslation } from "@/hooks/useTranslation";

// Import icon images
import icon1 from "/figmaAssets/icon-1.svg";
import icon2 from "/figmaAssets/icon-2.svg";
import icon3 from "/figmaAssets/icon-3.svg";
import iconGlobal from "/figmaAssets/vuesax-broken-global.png";
import iconSvg from "/figmaAssets/icon.svg";
import iconInnovation from "/figmaAssets/innovation.png";
import iconProfile from "/figmaAssets/vuesax-linear-profile.png";
import iconStatus from "/figmaAssets/vuesax-linear-status-up.png";
import iconHeart from "/figmaAssets/vuesax-linear-heart.png";

const calculateYearsSince2023 = (): string => {
  const startDate = new Date(2023, 0, 1); // January 2023
  const currentDate = new Date();
  
  const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = currentDate.getMonth() - startDate.getMonth();
  
  const totalYears = yearsDiff + monthsDiff / 12;
  
  return totalYears.toFixed(1) + "+";
};


const faqData = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Rutrum lectus ac.",
    answer: "",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Condimentum ac.",
    answer: "",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Et gravida.",
    answer: "",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Etiam sagittis.",
    answer: "",
  },
];

const footerLinks = {
  column1: [
    "About Us",
    "Solutions",
    "Pricing",
    "Contact",
    "Terms & Conditions",
  ],
  column2: ["LinkedIn", "Facebook", "Instagram"],
};

export const InfoSection = (): JSX.Element => {
  const { t } = useTranslation();
  
  const statsData = [
    {
      label: t("about_page.stats.founded_label"),
      value: t("about_page.stats.founded_value"),
    },
    {
      label: t("about_page.stats.professionals_label"),
      value: t("about_page.stats.professionals_value"),
    },
    {
      label: t("about_page.stats.years_label"),
      value: calculateYearsSince2023(),
    },
    {
      label: t("about_page.stats.widgets_label"),
      value: t("about_page.stats.widgets_value"),
    },
  ];

  const whyChooseUsData = [
    {
      icon: icon1,
      title: t("about_page.why_choose.reason1_title"),
      description: t("about_page.why_choose.reason1_text"),
      number: "01",
    },
    {
      icon: icon3,
      title: t("about_page.why_choose.reason2_title"),
      description: t("about_page.why_choose.reason2_text"),
      number: "02",
    },
    {
      icon: icon3,
      title: t("about_page.why_choose.reason3_title"),
      description: t("about_page.why_choose.reason3_text"),
      number: "03",
    },
    {
      icon: icon2,
      title: t("about_page.why_choose.reason4_title"),
      description: t("about_page.why_choose.reason4_text"),
      number: "04",
    },
  ];

  const featuresData = [
    {
      icon: iconGlobal,
      title: t("about_page.features.feature1_title"),
      description: t("about_page.features.feature1_text"),
    },
    {
      icon: iconSvg,
      title: t("about_page.features.feature2_title"),
      description: t("about_page.features.feature2_text"),
    },
    {
      icon: iconInnovation,
      title: t("about_page.features.feature3_title"),
      description: t("about_page.features.feature3_text"),
    },
    {
      icon: iconProfile,
      title: t("about_page.features.feature4_title"),
      description: t("about_page.features.feature4_text"),
    },
    {
      icon: iconStatus,
      title: t("about_page.features.feature5_title"),
      description: t("about_page.features.feature5_text"),
    },
    {
      icon: iconHeart,
      title: t("about_page.features.feature6_title"),
      description: t("about_page.features.feature6_text"),
    },
  ];
  
  return (
    <section className="flex flex-col items-center w-full">
      {/* Povestea Noastră Section */}
      <div className="w-full py-16">
        <Container>
          <div className="col-span-12 flex flex-col gap-8">
            {/* Header cu imagine mică și titlu/text */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="w-full lg:w-auto shrink-0">
                <img
                  className="w-full lg:w-[300px] h-auto rounded-[20px] object-cover"
                  alt="EasyReserv Story"
                  src="/figmaAssets/rectangle-435.png"
                />
              </div>

              <div className="flex-1 flex flex-col gap-6">
                <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl tracking-[0] leading-[52.8px]">
                  {t("about_page.story.title")}
                </h2>

                <div className="flex flex-col gap-4">
                  <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                    {t("about_page.story.paragraph1")}
                  </p>
                  
                  <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                    {t("about_page.story.paragraph2")}
                  </p>
                  
                  <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                    {t("about_page.story.paragraph3")}
                  </p>
                </div>
              </div>
            </div>

            {/* Card Cronologie */}
            <div className="bg-gray-50 rounded-[20px] p-8 border border-gray-200">
              <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl tracking-[0] leading-8 mb-6">
                {t("about_page.story.timeline_title")}
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-3">
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  <span className="font-semibold text-[#fe9800]">{t("about_page.story.timeline_day1")}</span> — {t("about_page.story.timeline_day1_text")}
                </p>
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  <span className="font-semibold text-[#fe9800]">{t("about_page.story.timeline_month3")}</span> — {t("about_page.story.timeline_month3_text")}
                </p>
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  <span className="font-semibold text-[#fe9800]">{t("about_page.story.timeline_month8")}</span> — {t("about_page.story.timeline_month8_text")}
                </p>
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  <span className="font-semibold text-[#fe9800]">{t("about_page.story.timeline_month13")}</span> — {t("about_page.story.timeline_month13_text")}
                </p>
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  <span className="font-semibold text-[#fe9800]">{t("about_page.story.timeline_month14")}</span> — {t("about_page.story.timeline_month14_text")}
                </p>
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  <span className="font-semibold text-[#fe9800]">{t("about_page.story.timeline_month18")}</span> — {t("about_page.story.timeline_month18_text")}
                </p>
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6 lg:col-span-2">
                  <span className="font-semibold text-[#fe9800]">{t("about_page.story.timeline_month20")}</span> — {t("about_page.story.timeline_month20_text")}
                </p>
              </div>
            </div>

            {/* Grid 2x2 pentru subsecțiuni ca carduri */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              <div className="bg-white rounded-[20px] p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl tracking-[0] leading-8 mb-4">
                  {t("about_page.story.who_we_are_title")}
                </h3>
                
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  {t("about_page.story.who_we_are_text")}
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl tracking-[0] leading-8 mb-4">
                  {t("about_page.story.optimizations_title")}
                </h3>
                
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  {t("about_page.story.optimizations_text")}
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl tracking-[0] leading-8 mb-4">
                  {t("about_page.story.impact_title")}
                </h3>
                
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  {t("about_page.story.impact_text")}
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl tracking-[0] leading-8 mb-4">
                  {t("about_page.story.mission_title")}
                </h3>
                
                <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  {t("about_page.story.mission_text")}
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-4">
              <Link href="/pricing" className="h-auto bg-[#2d2c65] rounded-[5px] px-8 py-4 hover:bg-[#2d2c65]/90 inline-flex items-center justify-center shadow-sm">
                <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base tracking-[0] leading-5">
                  {t("about_page.story.start_journey_cta")}
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-6 md:gap-8 px-4 md:px-[180px] py-8 md:py-[50px] bg-[#282828]">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center gap-3 md:gap-[15px] ${
              index < statsData.length - 1 ? "md:border-r border-[#ffffff40] md:pr-6" : ""
            }`}
          >
            <div className="max-w-60 [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[18.2px] text-center">
              {stat.label}
            </div>

            <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl md:text-[32px] tracking-[0] leading-[38.4px] text-center">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-start gap-6 md:gap-8 px-4 md:px-[180px] py-8 md:py-[50px] w-full max-w-[1440px]">
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-3xl md:text-5xl tracking-[0] leading-tight md:leading-[72px] text-center">
            {t("about_page.why_choose.title")}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-stretch gap-5 w-full">
          {whyChooseUsData.map((item, index) => (
            <Card
              key={index}
              className="flex-1 min-h-[350px] md:h-[400px] bg-[#f0f4f5] rounded-[20px] border border-solid border-[#8aa2a980] shadow-[8px_28px_30px_#00000008] overflow-hidden"
            >
              <CardContent className="flex flex-col items-start gap-4 px-6 md:pl-10 md:pr-8 py-8 md:py-10 h-full relative">
                <img className="w-[58px] h-[58px]" alt="Icon" src={item.icon} />

                <div className="flex flex-col items-start gap-1 w-full">
                  <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-[30px]">
                    {item.title}
                  </h3>

                  <p className="opacity-50 [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                    {item.description}
                  </p>
                </div>

                <div className="hidden md:block absolute left-[calc(50%-104px)] bottom-[-100px] bg-[linear-gradient(180deg,rgba(138,162,169,0.5)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] opacity-20 [font-family:'Onest',Helvetica] font-bold text-transparent text-[200px] text-right tracking-[0] leading-[240.0px]">
                  {item.number}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 px-4 md:px-0 py-8 md:py-[50px] w-full max-w-[1138px]">
        <h2 className="w-full max-w-[974px] [font-family:'Onest',Helvetica] font-bold text-[#282828] text-3xl md:text-5xl text-center tracking-[0] leading-tight md:leading-[normal]">
          {t("about_page.transform.title")}
        </h2>

        <div className="flex flex-col items-start gap-2.5 w-full max-w-[674px]">
          <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base text-center tracking-[0] leading-[20.8px]">
            {t("about_page.transform.paragraph1")}
          </p>

          <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base text-center tracking-[0] leading-[20.8px]">
            {t("about_page.transform.paragraph2")}
          </p>
        </div>

        <Link href="/pricing" className="h-auto bg-[#2d2c65] rounded-[5px] px-6 py-4 hover:bg-[#2d2c65]/90 inline-flex items-center justify-center">
          <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base tracking-[0] leading-5">
            {t("about_page.transform.cta")}
          </span>
        </Link>
      </div>

      <div className="flex flex-col items-center gap-2.5 p-6 md:p-[50px] bg-neutral-950 rounded-[40px] mx-4 md:mx-[180px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[20px] w-full max-w-[1080px]">
          {featuresData.map((feature, index) => (
            <Card
              key={index}
              className="bg-[#282828] rounded-[20px] border-0"
            >
              <CardContent className="flex flex-col items-start justify-center gap-6 p-6">
                <img
                  className="w-[60px] h-[60px]"
                  alt={feature.title}
                  src={feature.icon}
                />

                <h3 className="[font-family:'Onest',Helvetica] font-bold text-white text-xl md:text-2xl tracking-[0] leading-[31.2px]">
                  {feature.title}
                </h3>

                <p className="[font-family:'Onest',Helvetica] font-normal text-white text-base tracking-[0] leading-[20.8px]">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-5 px-4 md:px-[180px] py-8 md:py-[50px] w-full max-w-[1440px]">
        <div className="flex flex-col items-start gap-10 flex-1">
          <div className="flex flex-col items-start gap-4 w-full max-w-[530px]">
            <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-3xl md:text-5xl tracking-[0] leading-tight md:leading-[52.8px]">
              {t("about_page.feel_difference.title_line1")}
              <br />
              {t("about_page.feel_difference.title_line2")}
            </h2>

            <Link href="/pricing" className="h-auto bg-[#2d2c65] rounded-[5px] px-6 py-4 hover:bg-[#2d2c65]/90 inline-flex items-center justify-center">
              <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base tracking-[0] leading-5">
                {t("about_page.feel_difference.cta")}
              </span>
            </Link>
          </div>
        </div>

        <img
          className="w-full max-w-[530px] h-auto"
          alt="Element mobileapp"
          src="/figmaAssets/20901966-mobileapp-mockup1-copy-1.png"
        />
      </div>

      <FAQSection />

      <div className="flex flex-col items-start gap-2.5 px-4 md:px-[180px] py-8 md:py-[50px] w-full max-w-[1440px]">
        <div className="flex flex-col items-start justify-center gap-8 p-6 md:p-12 w-full rounded-[20px] overflow-hidden bg-[linear-gradient(19deg,rgba(254,152,0,1)_0%,rgba(254,187,1,0.5)_100%)] relative">
          <div className="flex flex-col items-start gap-4 w-full z-10 max-w-xl">
            <h2 className="[font-family:'Onest',Helvetica] font-extrabold text-white text-2xl md:text-4xl tracking-[0] leading-tight md:leading-10">
              {t("about_page.optimize_cta.title")}
            </h2>

            <Link href="/pricing" className="h-auto bg-white rounded-[5px] px-6 py-4 hover:bg-white/90 inline-flex items-center justify-center">
              <span className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-base tracking-[0] leading-5">
                {t("about_page.optimize_cta.cta")}
              </span>
            </Link>
          </div>

          <img
            className="hidden md:block absolute -top-11 left-[772px] w-[367px] h-[366px] opacity-30"
            alt="Logo icon"
            src="/figmaAssets/logo-icon-1.svg"
          />

          <img
            className="hidden md:block absolute top-[calc(50%-102px)] right-6 w-[323px] h-[204px]"
            alt="Group"
            src="/figmaAssets/group.png"
          />
        </div>
      </div>
    </section>
  );
};
