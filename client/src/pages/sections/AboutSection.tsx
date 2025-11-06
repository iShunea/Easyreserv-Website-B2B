import React from "react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/Container";
import { FAQSection } from "./FAQSection";
import googlePlayBadge from "@assets/google-play-badge.png";
import { useTranslation } from "@/hooks/useTranslation";

const calculateYearsSince2023 = (): string => {
  const startDate = new Date(2023, 0, 1); // January 2023
  const currentDate = new Date();
  
  const yearsDiff = currentDate.getFullYear() - startDate.getFullYear();
  const monthsDiff = currentDate.getMonth() - startDate.getMonth();
  
  const totalYears = yearsDiff + monthsDiff / 12;
  
  return totalYears.toFixed(1) + "+";
};

export const AboutSection = (): JSX.Element => {
  const { t } = useTranslation();
  const [selectedIndustry, setSelectedIndustry] = React.useState("restaurante");
  const [openAccordion, setOpenAccordion] = React.useState("smart-reservations");

  const industries = [
    { value: "restaurante", label: t("features_section.industries.restaurante") },
    { value: "cafenele", label: t("features_section.industries.cafenele") },
    { value: "saloane", label: t("features_section.industries.saloane") },
    { value: "barbershop", label: t("features_section.industries.barbershop") },
    { value: "hotel", label: t("features_section.industries.hotel") },
    { value: "chirii-auto", label: t("features_section.industries.chirii-auto") },
    { value: "fitness", label: t("features_section.industries.fitness") },
    { value: "medical", label: t("features_section.industries.medical") },
    { value: "retail", label: t("features_section.industries.retail") },
    { value: "terenuri-sportive", label: t("features_section.industries.terenuri-sportive") },
    { value: "spalatorii-auto", label: t("features_section.industries.spalatorii-auto") },
  ];

  const topStats = [
    { label: t("stats.founded"), value: t("stats.founded_value") },
    { label: t("stats.professionals"), value: t("stats.professionals_value") },
    { label: t("stats.years"), value: calculateYearsSince2023() },
    { label: t("stats.widgets"), value: t("stats.widgets_value") },
  ];

  const bottomStats = [
    { label: t("stats.locations"), value: t("stats.locations_value") },
    { label: t("stats.time_optimized"), value: t("stats.time_optimized_value") },
    { label: t("stats.notifications"), value: t("stats.notifications_value") },
    { label: t("stats.users"), value: t("stats.users_value") },
  ];

  const getFeaturesByIndustry = (industry: string) => {
    const featuresData = t(`features.${industry}`, { returnObjects: true }) as Record<string, { title: string; content: string }>;
    return Object.entries(featuresData).map(([id, data]) => ({
      id,
      title: data.title,
      content: data.content,
    }));
  };

  const handleIndustryChange = (value: string) => {
    setSelectedIndustry(value);
    setOpenAccordion("smart-reservations");
  };

  return (
    <section className="flex flex-col items-center w-full">
      {/* Top Stats Section */}
      <div className="w-full py-12 bg-[#282828]">
        <Container>
          <div className="col-span-12 flex flex-col md:flex-row items-center justify-center gap-8">
            {topStats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center gap-4 px-6 ${
                  index < topStats.length - 1
                    ? "md:border-r border-[#ffffff40]"
                    : ""
                }`}
              >
                <div className="max-w-60 [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[18.2px] text-center">
                  {stat.label}
                </div>
                <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-[32px] tracking-[0] leading-[38.4px]">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Best Features Section */}
      <div className="w-full py-16 md:py-24">
        <Container>
          <div className="col-span-12 flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl text-center tracking-[0] leading-[52.8px]">
              {t("features_section.title")}
            </h2>
            <select
              value={selectedIndustry}
              onChange={(e) => handleIndustryChange(e.target.value)}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#2d2c650d] rounded-[5px] border border-solid border-[#28282833] [font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-lg cursor-pointer appearance-none bg-no-repeat bg-right pr-12"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%232d2c65' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                backgroundPosition: 'right 1rem center'
              }}
            >
              {industries.map((industry) => (
                <option key={industry.value} value={industry.value}>
                  {industry.label}
                </option>
              ))}
            </select>
          </div>

          <div className="col-span-12 lg:col-span-6 flex justify-center lg:justify-start">
            <div className="w-full max-w-[480px]">
              <Accordion
                type="single"
                collapsible
                value={openAccordion}
                onValueChange={setOpenAccordion}
                className="w-full"
              >
                {getFeaturesByIndustry(selectedIndustry).map((feature) => (
                  <AccordionItem
                    key={feature.id}
                    value={feature.id}
                    className={`border-b border-[#cccccc] ${
                      !feature.content ? "opacity-50" : ""
                    }`}
                  >
                    <AccordionTrigger className="px-0 py-5 hover:no-underline">
                      <span className={`[font-family:'Onest',Helvetica] font-normal text-xl tracking-[0.40px] leading-7 transition-colors ${
                        openAccordion === feature.id ? 'text-[#282828]' : 'text-[#999999]'
                      }`}>
                        {feature.title}
                      </span>
                    </AccordionTrigger>
                    {feature.content && (
                      <AccordionContent className="px-0 pb-5">
                        <div className="flex flex-col gap-6">
                          <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base leading-6">
                            {feature.content}
                          </p>
                          <Link href="/contact" className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-5 py-2.5 shadow-sm inline-flex items-center justify-center w-fit">
                            <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
                              {t("features_section.request_demo")}
                            </span>
                          </Link>
                        </div>
                      </AccordionContent>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 hidden lg:flex items-center justify-center">
            <img
              className="w-full max-w-[530px] h-auto"
              alt="Features illustration"
              src="/figmaAssets/frame-39977.svg"
            />
          </div>
        </Container>
      </div>

      {/* About Us Section */}
      <div className="w-full py-16">
        <Container>
          {/* Title - Shows first on mobile, hidden on desktop */}
          <div className="col-span-12 lg:hidden order-1">
            <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl tracking-[0] leading-[52.8px]">
              {t("about.title")}
            </h2>
          </div>

          {/* Image - Shows second on mobile, first column on desktop */}
          <div className="col-span-12 lg:col-span-6 flex items-start justify-center order-2 lg:order-1 mt-8 lg:mt-0">
            <img
              className="w-full max-w-[622px] h-auto rounded-[20px] object-cover"
              alt="EasyReserv Co-Founders presentation"
              src="/figmaAssets/about-founders.jpg"
            />
          </div>

          {/* Content - Shows third on mobile, second column on desktop */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center gap-10 order-3 lg:order-2 mt-8 lg:mt-0">
            {/* Title - Hidden on mobile, shows on desktop */}
            <h2 className="hidden lg:block [font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl tracking-[0] leading-[52.8px]">
              {t("about.title")}
            </h2>

            <div className="flex flex-col gap-5">
              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                {t("about.paragraph1")}
              </p>

              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                {t("about.paragraph2")}
              </p>

              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                {t("about.paragraph3")}
              </p>
            </div>

            <div>
              <Link href="/contact" className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4 shadow-sm inline-flex items-center">
                <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
                  {t("features_section.request_demo")}
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Stats Section */}
      <div className="w-full py-12 bg-[#282828]">
        <Container>
          <div className="col-span-12 flex flex-col md:flex-row items-center justify-center gap-8">
            {bottomStats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center gap-2.5 px-6 ${
                  index < bottomStats.length - 1
                    ? "md:border-r border-[#ffffff40]"
                    : ""
                }`}
              >
                <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-[32px] tracking-[0] leading-[38.4px] text-center">
                  {stat.value}
                </div>
                <div className="max-w-60 [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-[18.2px] text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Partners Section */}
      <div className="w-full py-16 md:py-24">
        <Container>
          <div className="col-span-12 flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl tracking-[0] leading-[52.8px]">
                {t("partners.title")}
              </h2>
              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg tracking-[-0.36px] leading-[27px] max-w-3xl">
                {t("partners.description")}
              </p>
            </div>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/figmaAssets/pegas-logo.png"
                  alt="Pegas Restaurant"
                  className="h-16 w-auto object-contain"
                />
                <span className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-sm text-center">
                  Pegas Restaurant
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/figmaAssets/royal-ranch-logo.jpg"
                  alt="Royal Ranch"
                  className="h-16 w-auto object-contain"
                />
                <span className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-sm text-center">
                  Royal Ranch
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/figmaAssets/atypic-logo.jpg"
                  alt="Atypic - Taste that matters"
                  className="h-16 w-auto object-contain"
                />
                <span className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-sm text-center">
                  Atypic
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/figmaAssets/chateau-vartely-logo.jpg"
                  alt="Chateau Vartely"
                  className="h-16 w-auto object-contain"
                />
                <span className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-sm text-center">
                  Château Vartely
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/figmaAssets/mojo-restobar-logo.jpg"
                  alt="MOJO Restobar"
                  className="h-16 w-auto object-contain"
                />
                <span className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-sm text-center">
                  MOJO Restobar
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/figmaAssets/osho-logo.jpg"
                  alt="Osho Bar and Kitchen"
                  className="h-16 w-auto object-contain"
                />
                <span className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-sm text-center">
                  Osho Bar & Kitchen
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/figmaAssets/anchiano-logo.jpg"
                  alt="Restaurant Anchiano"
                  className="h-16 w-auto object-contain"
                />
                <span className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-sm text-center">
                  Restaurant Anchiano
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/figmaAssets/puar-logo.jpg"
                  alt="PUER"
                  className="h-16 w-auto object-contain"
                />
                <span className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-sm text-center">
                  PUER
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/figmaAssets/wtf-logo.jpg"
                  alt="What The Food?"
                  className="h-16 w-auto object-contain"
                />
                <span className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-sm text-center">
                  What The Food?
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <img
                  src="/figmaAssets/513-logo.png"
                  alt="513"
                  className="h-16 w-auto object-contain"
                />
                <span className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-sm text-center">
                  513
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* CTA Section 1 */}
      <div className="w-full py-16">
        <Container>
          <div className="col-span-12">
            <div className="flex flex-col items-start justify-center gap-8 p-8 md:p-12 w-full rounded-[20px] overflow-hidden bg-[linear-gradient(19deg,rgba(254,152,0,1)_0%,rgba(254,187,1,0.5)_100%)] relative">
              <div className="flex flex-col items-start gap-4 w-full relative z-10 max-w-xl">
                <h2 className="[font-family:'Onest',Helvetica] font-extrabold text-white text-3xl md:text-4xl tracking-[0] leading-10">
                  {t("cta.optimize_business")}
                </h2>

                <Link href="/pricing" className="h-auto bg-white hover:bg-white/90 rounded-[5px] px-6 py-4 shadow-sm inline-flex items-center justify-center">
                  <span className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-base">
                    {t("cta.become_partner")}
                  </span>
                </Link>
              </div>

              <img
                className="absolute -top-11 right-1/3 w-[367px] h-[366px] opacity-30"
                alt="Logo icon"
                src="/figmaAssets/logo-icon-1.svg"
              />

              <img
                className="absolute top-1/2 -translate-y-1/2 right-6 w-[323px] h-[204px]"
                alt="Group"
                src="/figmaAssets/group.png"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Unlock Future Section */}
      <div className="w-full py-16">
        <Container>
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center gap-10">
            <div className="flex flex-col gap-4">
              <p className="[font-family:'Onest',Helvetica] font-semibold text-[#fe9800] text-lg tracking-[0] leading-6">
                {t("cta.all_in_one")}
              </p>
              <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl tracking-[0] leading-[52.8px]">
                {t("cta.unlock_future")}
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg tracking-[-0.36px] leading-[27px]">
                {t("cta.unlock_description")}
              </p>
            </div>

            <div>
              <Link href="/pricing" className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4 shadow-sm inline-flex items-center justify-center">
                <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
                  {t("cta.start_journey")}
                </span>
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 flex items-center justify-center">
            <img
              className="w-full max-w-[530px] h-auto"
              alt="Mobile app mockup"
              src="/figmaAssets/20901966-mobileapp-mockup1-copy-1.png"
            />
          </div>
        </Container>
      </div>

      {/* FAQ Section */}
      <FAQSection />

      {/* Download App Section */}
      <div className="w-full py-16">
        <Container>
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center order-2 lg:order-1">
            <img
              className="w-full max-w-[530px] h-auto object-contain"
              alt="Mobile app mockup"
              src="/figmaAssets/20901989-mobileapp-mockup4-copy.png"
            />
          </div>

          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center gap-10 order-1 lg:order-2">
            <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-5xl tracking-[0] leading-[52.8px]">
              {t("mobile_app.title")}
            </h2>

            <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg tracking-[-0.36px] leading-[27px]">
              {t("mobile_app.description")}
            </p>

            <div className="flex flex-col gap-4">
              <div className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-xl tracking-[0]">
                {t("mobile_app.available_on")}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://bit.ly/4c6yKJr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img
                    className="h-12 w-auto object-contain"
                    alt="Download on the App Store"
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1722556800"
                  />
                </a>
                <a
                  href="https://bit.ly/49Ce2Q1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img
                    className="h-12 w-auto object-contain"
                    alt="Get it on Google Play"
                    src={googlePlayBadge}
                  />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* CTA Section 2 */}
      <div className="w-full py-16">
        <Container>
          <div className="col-span-12">
            <div className="flex flex-col items-start justify-center gap-8 p-8 md:p-12 w-full rounded-[20px] overflow-hidden bg-[linear-gradient(19deg,rgba(254,152,0,1)_0%,rgba(254,187,1,0.5)_100%)] relative">
              <div className="flex flex-col items-start gap-4 w-full relative z-10 max-w-xl">
                <h2 className="[font-family:'Onest',Helvetica] font-extrabold text-white text-3xl md:text-4xl tracking-[0] leading-10">
                  {t("cta.optimize_business")}
                </h2>

                <Link href="/contact" className="h-auto bg-white hover:bg-white/90 rounded-[5px] px-6 py-4 shadow-sm inline-flex items-center justify-center">
                  <span className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-base">
                    {t("cta.request_demo")}
                  </span>
                </Link>
              </div>

              <img
                className="absolute -top-11 right-1/3 w-[367px] h-[366px] opacity-30"
                alt="Logo icon"
                src="/figmaAssets/logo-icon-1.svg"
              />

              <img
                className="absolute top-1/2 -translate-y-1/2 right-6 w-[323px] h-[204px]"
                alt="Group"
                src="/figmaAssets/group-1.png"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
