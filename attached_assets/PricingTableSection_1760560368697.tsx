import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "/figmaAssets/icon-1.svg",
    title: "Simplify Operations",
    description:
      "We streamline and centralize all your booking needs, making your business more efficient.",
    number: "01",
    numberLeft: "left-[calc(50.00%_-_104px)]",
  },
  {
    icon: "/figmaAssets/icon.svg",
    title: "Attract Clients",
    description:
      "Our platform helps you build strong connections with customers, ensuring their loyalty.",
    number: "02",
    numberLeft: "left-[calc(50.00%_-_120px)]",
  },
  {
    icon: "/figmaAssets/icon.svg",
    title: "Outperform the Competition",
    description:
      "Leverage cutting-edge technologies to elevate your business management.",
    number: "03",
    numberLeft: "left-[calc(50.00%_-_120px)]",
  },
  {
    icon: "/figmaAssets/icon-3.svg",
    title: "Unwavering Support",
    description:
      "We stand by your side, offering the assistance and expertise you need to succeed.",
    number: "04",
    numberLeft: "left-[calc(50.00%_-_130px)]",
  },
];

export const PricingTableSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-8 px-[180px] py-[50px] w-full">
      <header className="flex flex-col items-center justify-center gap-4 w-full">
        <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl tracking-[0] leading-[72px] whitespace-nowrap">
          Why choose us?
        </h2>
      </header>

      <div className="grid grid-cols-4 gap-5 w-full">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="h-[400px] bg-brandsnowy rounded-[20px] overflow-hidden border border-solid border-[#8aa2a980] shadow-[8px_28px_30px_#00000008]"
          >
            <CardContent className="flex flex-col items-start gap-4 pl-10 pr-8 py-10 h-full relative">
              <img
                className="w-[58px] h-[58px]"
                alt="Icon"
                src={feature.icon}
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
                className={`${feature.numberLeft} absolute bottom-[-100px] bg-[linear-gradient(180deg,rgba(138,162,169,0.5)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] opacity-20 [font-family:'Onest',Helvetica] font-bold text-transparent text-[200px] text-right tracking-[0] leading-[240.0px] whitespace-nowrap`}
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
