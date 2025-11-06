import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/hooks/useTranslation";
import icon1 from "/figmaAssets/icon-1.svg";
import icon2 from "/figmaAssets/icon.svg";
import icon3 from "/figmaAssets/icon-3.svg";

const iconMap: Record<string, string> = {
  "/figmaAssets/icon-1.svg": icon1,
  "/figmaAssets/icon.svg": icon2,
  "/figmaAssets/icon-3.svg": icon3,
};

export const PricingTableSection = (): JSX.Element => {
  const { t } = useTranslation();
  const features = t('pricing_page.why_choose.features', { returnObjects: true }) as Array<{
    icon: string;
    title: string;
    description: string;
    number: string;
    numberLeft: string;
  }>;

  return (
    <section className="flex flex-col items-start gap-8 px-4 md:px-[180px] py-8 md:py-[50px] w-full">
      <header className="flex flex-col items-center justify-center gap-4 w-full">
        <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-3xl md:text-5xl tracking-[0] leading-tight md:leading-[72px] text-center">
          {t('pricing_page.why_choose.title')}
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="h-[400px] bg-brandsnowy rounded-[20px] overflow-hidden border border-solid border-[#8aa2a980] shadow-[8px_28px_30px_#00000008]"
          >
            <CardContent className="flex flex-col items-start gap-4 pl-10 pr-8 py-10 h-full relative">
              <img
                className="w-[58px] h-[58px]"
                alt="Icon"
                src={iconMap[feature.icon] || feature.icon}
              />

              <div className="flex flex-col gap-1 w-full">
                <h3 className="font-bold text-[#282828] text-xl leading-[30px] [font-family:'Onest',Helvetica] tracking-[0]">
                  {feature.title}
                </h3>

                <p className="opacity-50 [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-6">
                  {feature.description}
                </p>
              </div>

              <div
                className={`${feature.numberLeft} absolute bottom-[-100px] [font-family:'Onest',Helvetica] font-bold text-[#8aa2a9] opacity-15 text-[200px] text-right tracking-[0] leading-[240.0px] whitespace-nowrap`}
              >
                {feature.number}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
