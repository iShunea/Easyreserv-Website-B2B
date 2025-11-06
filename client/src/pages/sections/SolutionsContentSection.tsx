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
import { Container } from "@/components/Container";
import { useTranslation } from "@/hooks/useTranslation";

const getFeaturesByIndustry = (industry: string, t: any) => {
  // Map the display values to translation keys
  const industryKeyMap: Record<string, string> = {
    'restaurante': 'restaurante',
    'cafenele': 'cafenele',
    'saloane': 'saloane',
    'barbershop': 'barbershop',
    'hoteluri': 'hoteluri',
    'chirii-auto': 'chirii_auto',
    'fitness': 'fitness',
    'medical': 'medical',
    'retail': 'retail',
    'spalatorii-auto': 'spalatorii_auto'
  };

  const translationKey = industryKeyMap[industry] || 'restaurante';
  
  return {
    employeeManagement: t(`solutions_page.${translationKey}.employee_management`, { returnObjects: true }) || [],
    businessInsights: t(`solutions_page.${translationKey}.business_insights`, { returnObjects: true }) || [],
    inventoryManagement: t(`solutions_page.${translationKey}.inventory_management`, { returnObjects: true }) || [],
    customerEngagement: t(`solutions_page.${translationKey}.customer_engagement`, { returnObjects: true }) || []
  };
};


export const SolutionsContentSection = (): JSX.Element => {
  const [selectedIndustry, setSelectedIndustry] = React.useState("restaurante");
  const { t } = useTranslation();

  const heroFeatures = [
    {
      icon: "/figmaAssets/icon-5.svg",
      title: t("solutions_page.hero_features.feature1_title"),
      description: t("solutions_page.hero_features.feature1_description"),
      height: "h-auto min-h-[200px]",
    },
    {
      icon: "/figmaAssets/icon-5.svg",
      title: t("solutions_page.hero_features.feature2_title"),
      description: t("solutions_page.hero_features.feature2_description"),
      height: "h-auto min-h-[221px]",
    },
    {
      icon: "/figmaAssets/icon-5.svg",
      title: t("solutions_page.hero_features.feature3_title"),
      description: t("solutions_page.hero_features.feature3_description"),
      height: "h-auto",
    },
  ];

  const industries = [
    { value: "restaurante", label: t("solutions_page.industries.restaurante") },
    { value: "cafenele", label: t("solutions_page.industries.cafenele") },
    { value: "saloane", label: t("solutions_page.industries.saloane") },
    { value: "barbershop", label: t("solutions_page.industries.barbershop") },
    { value: "hoteluri", label: t("solutions_page.industries.hoteluri") },
    { value: "chirii-auto", label: t("solutions_page.industries.chirii_auto") },
    { value: "fitness", label: t("solutions_page.industries.fitness") },
    { value: "medical", label: t("solutions_page.industries.medical") },
    { value: "retail", label: t("solutions_page.industries.retail") },
    { value: "spalatorii-auto", label: t("solutions_page.industries.spalatorii_auto") },
  ];

  const currentFeatures = getFeaturesByIndustry(selectedIndustry, t);
  const employeeManagementFeatures = currentFeatures.employeeManagement;
  const businessInsightsFeatures = currentFeatures.businessInsights;
  const inventoryManagementFeatures = currentFeatures.inventoryManagement;
  const customerEngagementFeatures = currentFeatures.customerEngagement;
  
  const howItWorksSteps = t("solutions_page.how_it_works.steps", { returnObjects: true }) as Array<{title: string, description: string}>;
  const businessTypes = t("solutions_page.business_types.types", { returnObjects: true }) as Array<{number: string, name: string, description: string}>;
  const benefitsItems = t("solutions_page.benefits.items", { returnObjects: true }) as Array<{title: string, description: string}>;
  const whatIsFaq = t("solutions_page.what_is.faq", { returnObjects: true }) as Array<{question: string, answer: string}>;

  return (
    <section className="relative z-10 flex flex-col w-full items-center">
      <Container className="py-8 md:py-[50px]">
        <div className="relative z-20 col-span-12 md:col-span-6 flex flex-col items-start justify-center gap-5">
          <h1 className="[font-family:'Onest',Helvetica] font-bold text-3xl md:text-5xl tracking-[0] leading-tight md:leading-[normal]">
            <span className="text-[#282828]">{t("solutions_page.hero.title")} </span>
            <span className="text-[#fe9800]">{t("solutions_page.hero.title_highlight")}</span>
            <span className="text-[#282828]">
              {" "}
              {t("solutions_page.hero.title_end")}
            </span>
          </h1>

          <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[20.8px]">
            {t("solutions_page.hero.description")}
          </p>

          <Link href="/pricing" className="h-auto bg-[#2d2c65] rounded-[5px] px-6 py-4 hover:bg-[#2d2c65]/90 inline-flex items-center justify-center" data-testid="button-explore-plans">
            <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base tracking-[0] leading-5">
              {t("solutions_page.hero.cta")}
            </span>
          </Link>
        </div>

        <div className="col-span-12 md:col-span-6 flex flex-col md:flex-row items-start gap-5">
          <div className="flex flex-col items-start gap-5 w-full md:w-auto">
            {heroFeatures.slice(0, 2).map((feature, index) => (
              <Card
                key={index}
                className={`w-full md:w-[255px] ${feature.height} bg-[#2d2c651a] rounded-[20px] border-[#2d2c65]`}
              >
                <CardContent className="flex flex-col items-start gap-2.5 p-5">
                  <img
                    className="w-[53px] h-[53px]"
                    alt="Icon"
                    src={feature.icon}
                  />
                  <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-[26px]">
                    {feature.title}
                  </h3>
                  <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[20.8px]">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="w-full md:w-[255px] bg-[#2d2c651a] rounded-[20px] border-[#2d2c65]">
            <CardContent className="flex flex-col items-start gap-2.5 p-5">
              <img
                className="w-[53px] h-[53px]"
                alt="Icon"
                src={heroFeatures[2].icon}
              />
              <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-[26px]">
                {heroFeatures[2].title}
              </h3>
              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[20.8px]">
                {heroFeatures[2].description}
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>

      <Container className="py-8 md:py-[50px]">
        <div className="col-span-12 flex flex-col items-center justify-center gap-4 md:gap-6 mb-8">
          <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-2xl md:text-5xl text-center tracking-[0] leading-tight md:leading-[normal]">
            {t("solutions_page.industries.title")}
          </h2>
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#2d2c650d] rounded-[5px] border border-solid border-[#28282833] [font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-lg md:text-2xl cursor-pointer appearance-none bg-no-repeat bg-right pr-12 w-full md:w-auto"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%232d2c65' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
              backgroundPosition: 'right 1rem center'
            }}
            data-testid="select-industry"
          >
            {industries.map((industry) => (
              <option key={industry.value} value={industry.value}>
                {industry.label}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-12 md:col-span-6 flex flex-col items-start gap-5">
          <Card className="w-full bg-[#2d2c650d] rounded-[20px] border-0">
            <CardContent className="flex flex-col items-start gap-6 p-6 md:p-[50px]">
              <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl md:text-2xl tracking-[0] leading-[normal]">
                {t("solutions_page.sections.employee_management")}
              </h3>

              <div className="flex flex-col items-start gap-5 w-full">
                {employeeManagementFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-start px-0 py-5 w-full ${
                      index < employeeManagementFeatures.length - 1
                        ? "border-b border-[#cccccc]"
                        : ""
                    }`}
                  >
                    <h4 className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-xl tracking-[0] leading-[22px]">
                      {feature.title}
                    </h4>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[17.6px]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="w-full bg-[#2d2c650d] rounded-[20px] border-0">
            <CardContent className="flex flex-col items-start gap-6 p-6 md:p-[50px]">
              <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl md:text-2xl tracking-[0] leading-[normal]">
                {t("solutions_page.sections.business_insights")}
              </h3>

              <div className="flex flex-col items-start gap-5 w-full">
                {businessInsightsFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-start px-0 py-5 w-full ${
                      index < businessInsightsFeatures.length - 1
                        ? "border-b border-[#cccccc]"
                        : ""
                    }`}
                  >
                    <h4 className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-xl tracking-[0] leading-[22px]">
                      {feature.title}
                    </h4>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[17.6px]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-12 md:col-span-6 flex flex-col items-start gap-5">
          <Card className="w-full bg-[#2d2c650d] rounded-[20px] border-0">
            <CardContent className="flex flex-col items-start gap-6 p-6 md:p-[50px]">
              <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl md:text-2xl tracking-[0] leading-[normal]">
                {t("solutions_page.sections.inventory_management")}
              </h3>

              <div className="flex flex-col items-start gap-5 w-full">
                {inventoryManagementFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-start px-0 py-5 w-full ${
                      index < inventoryManagementFeatures.length - 1
                        ? "border-b border-[#cccccc]"
                        : ""
                    }`}
                  >
                    <h4 className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-xl tracking-[0] leading-[22px]">
                      {feature.title}
                    </h4>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[17.6px]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="w-full bg-[#2d2c650d] rounded-[20px] border-0">
            <CardContent className="flex flex-col items-start gap-6 p-6 md:p-[50px]">
              <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl md:text-2xl tracking-[0] leading-[normal]">
                {t("solutions_page.sections.customer_engagement")}
              </h3>

              <div className="flex flex-col items-start gap-5 w-full">
                {customerEngagementFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-start px-0 py-5 w-full ${
                      index < customerEngagementFeatures.length - 1
                        ? "border-b border-[#cccccc]"
                        : ""
                    }`}
                  >
                    <h4 className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-xl tracking-[0] leading-[22px]">
                      {feature.title}
                    </h4>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[17.6px]">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>

      <div className="flex flex-col items-center justify-center gap-5 py-[50px] w-full bg-white">
        <Container>
          <div className="col-span-12">
            <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl text-center tracking-[0] leading-[normal]">
              {t("solutions_page.how_it_works.title")}
            </h2>
          </div>

          <div className="col-span-12 flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-4 w-full relative">
              <div className="absolute top-[40px] left-[40px] right-[40px] h-2 bg-[#2d2c65] hidden lg:block" />

              {howItWorksSteps.map((step, index) => {
                const stepIcons = [
                  "/figmaAssets/frame-1894.svg",
                  "/figmaAssets/frame-2147223393.svg",
                  "/figmaAssets/frame-2147223396.svg",
                  "/figmaAssets/frame-2147223394.svg",
                  "/figmaAssets/frame-2147223395.svg"
                ];
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-4 flex-1 max-w-full lg:max-w-[200px]"
                  >
                    <img
                      className="relative w-20 h-20 z-10"
                      alt="Frame"
                      src={stepIcons[index]}
                    />
                    <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#282828] text-lg md:text-xl text-center tracking-[0] leading-tight md:leading-[26px]">
                      {step.title}
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#282828] text-sm md:text-base text-center tracking-[0] leading-relaxed opacity-70">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>

      <div className="w-full py-12 md:py-16 bg-[#2d2c65]">
        <Container>
          <div className="col-span-12 mb-8 md:mb-12">
            <h2 className="[font-family:'Onest',Helvetica] font-bold text-white text-3xl md:text-5xl text-center tracking-[0] leading-tight md:leading-[normal]">
              {t("solutions_page.business_types.title")}
            </h2>
          </div>

          {businessTypes.map((business, index) => {
            const businessBackgrounds = [
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
              "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
              "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
              "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
              "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
              "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
              "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
              "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80"
            ];
            const pricingIndustries = ["Restaurante", "Cafenele", "Saloane de frumusețe", "Barbershopuri", "Hotele & Pensiuni", "Chirii auto", "Fitness", "Medical", "Retail", "Spălătorii auto"];
            return (
              <Link 
                key={index} 
                href={`/pricing?industry=${encodeURIComponent(pricingIndustries[index])}`}
                className="col-span-12 md:col-span-6 lg:col-span-4"
                data-testid={`business-card-${business.number}`}
              >
                <div 
                  className="relative h-[280px] md:h-[320px] rounded-[12px] overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%), url(${businessBackgrounds[index]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                {/* Orange bottom border/underline */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#fe9800] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 pb-8">
                  <div className="[font-family:'Onest',Helvetica] font-bold text-[#fe9800] text-5xl md:text-6xl tracking-[0] leading-none mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">
                    {business.number}
                  </div>
                  <h3 className="[font-family:'Onest',Helvetica] font-bold text-white text-lg md:text-xl tracking-[0] leading-tight mb-2 transform group-hover:-translate-y-1 transition-transform duration-300">
                    {business.name}
                  </h3>
                  <p className="[font-family:'Onest',Helvetica] font-normal text-white/90 text-sm md:text-base tracking-[0] leading-relaxed transform group-hover:-translate-y-1 transition-transform duration-300">
                    {business.description}
                  </p>
                </div>
                
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#fe9800]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Link>
            );
          })}
        </Container>
      </div>

      <Container className="py-[50px]">
        <div className="col-span-12">
          <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl text-center tracking-[0] leading-[72px]">
            {t("solutions_page.benefits.title")}
            <br />
            {t("solutions_page.benefits.title_line2")}
          </h2>
        </div>

        {benefitsItems.slice(0, 3).map((benefit, index) => {
          const benefitIcons = ["/figmaAssets/icon.svg", "/figmaAssets/icon-1.svg", "/figmaAssets/icon-1.svg", "/figmaAssets/icon.svg", "/figmaAssets/icon-1.svg", "/figmaAssets/icon-1.svg"];
          return (
            <div key={index} className="col-span-12 md:col-span-4">
              <Card className="w-full bg-brandsnowy rounded-[20px] border-[#8aa2a980] shadow-[8px_28px_30px_#00000008]">
                <CardContent className="flex flex-col items-start gap-4 pl-10 pr-8 py-10">
                  <img
                    className="w-[58px] h-[58px]"
                    alt="Icon"
                    src={benefitIcons[index]}
                  />
                  <div className="flex flex-col gap-1 w-full">
                    <h3 className="font-bold text-[#282828] text-xl leading-[30px] [font-family:'Onest',Helvetica] tracking-[0]">
                      {benefit.title}
                    </h3>
                    <p className="opacity-50 [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}

        {benefitsItems.slice(3, 6).map((benefit, index) => {
          const benefitIcons = ["/figmaAssets/icon.svg", "/figmaAssets/icon-1.svg", "/figmaAssets/icon-1.svg"];
          return (
            <div key={index} className="col-span-12 md:col-span-4">
              <Card className="w-full bg-brandsnowy rounded-[20px] border-[#8aa2a980] shadow-[8px_28px_30px_#00000008]">
                <CardContent className="flex flex-col items-start gap-4 pl-10 pr-8 py-10">
                  <img
                    className="w-[58px] h-[58px]"
                    alt="Icon"
                    src={benefitIcons[index]}
                  />
                  <div className="flex flex-col gap-1 w-full">
                    <h3 className="font-bold text-[#282828] text-xl leading-[30px] [font-family:'Onest',Helvetica] tracking-[0]">
                      {benefit.title}
                    </h3>
                    <p className="opacity-50 [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </Container>

      <div className="w-full py-16 bg-[#282828]">
        <Container>
          <div className="col-span-12 lg:col-span-6 flex flex-col items-start gap-8">
            <h2 className="[font-family:'Onest',Helvetica] font-bold text-white text-4xl md:text-5xl tracking-[0] leading-[52.8px]">
              {t("solutions_page.what_is.title")}
            </h2>

            <p className="[font-family:'Onest',Helvetica] font-normal text-white text-lg tracking-[-0.36px] leading-[27px]">
              {t("solutions_page.what_is.description")}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6 flex flex-col items-start">
            <Accordion type="single" collapsible className="w-full">
              {(t("solutions_page.what_is.faq", { returnObjects: true }) as Array<{question: string, answer: string}>).map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="border-b border-[#3f4e5b]"
                >
                  <AccordionTrigger className="text-lg leading-[27px] [font-family:'Onest',Helvetica] font-normal text-white tracking-[-0.36px] hover:no-underline px-0 py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-6 [font-family:'Onest',Helvetica] font-normal text-white tracking-[0] px-0 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </div>

      <Container className="py-[50px]">
        <div className="col-span-12">
          <div className="flex flex-col items-start justify-center gap-8 p-12 w-full rounded-[20px] overflow-hidden bg-[linear-gradient(19deg,rgba(254,152,0,1)_0%,rgba(254,187,1,0.5)_100%)] relative">
            <div className="flex flex-col items-start gap-4 w-full relative z-10">
              <h2 className="[font-family:'Onest',Helvetica] font-extrabold text-white text-4xl tracking-[0] leading-10">
                {t("solutions_page.cta_final.title")}
              </h2>
            </div>

            <Button className="h-auto bg-white rounded-xl p-4 hover:bg-white/90 relative z-10">
              <span className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-base tracking-[0] leading-4">
                {t("solutions_page.cta_final.button")}
              </span>
            </Button>

            <img
              className="absolute -top-11 left-[772px] w-[367px] h-[366px]"
              alt="Logo icon"
              src="/figmaAssets/logo-icon.svg"
            />

            <img
              className="absolute top-[calc(50.00%_-_108px)] right-6 w-[323px] h-[216px]"
              alt="Group"
              src="/figmaAssets/group.png"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
