import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    title:
      "3 must-try dishes at Nashville's Chinese-meets-Southern hotspot Choy",
    date: "August 20, 2022",
    image: "/figmaAssets/rectangle-38-9.png",
  },
  {
    title: "Must-Know Restaurant Terms for 2025",
    date: "August 20, 2022",
    image: "/figmaAssets/rectangle-38-9.png",
  },
  {
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    date: "August 20, 2022",
    image: "/figmaAssets/rectangle-38-9.png",
  },
  {
    title: "Restaurant Loyalty Segmentation - What It Is, How To Do It",
    date: "August 20, 2022",
    image: "/figmaAssets/rectangle-38-9.png",
  },
  {
    title: "Reducing Plate Waste With Portion Control - A 5-Step Guide",
    date: "August 20, 2022",
    image: "/figmaAssets/rectangle-38-9.png",
  },
  {
    title: "How to Ensure Your Restaurant Fails - 5 Key Steps",
    date: "August 20, 2022",
    image: "/figmaAssets/rectangle-38-9.png",
  },
  {
    title:
      "Generation Sell - Engaging and Retaining Zoomers at Your Restaurant",
    date: "August 20, 2022",
    image: "/figmaAssets/rectangle-38-9.png",
  },
  {
    title: "Cloud-Based Tech – A More Sustainable Solution for Your Restaurant",
    date: "August 20, 2022",
    image: "/figmaAssets/rectangle-38-9.png",
  },
  {
    title: "Morale and Motivation - Improving Staff Retention With Syrve",
    date: "August 20, 2022",
    image: "/figmaAssets/rectangle-38-9.png",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-6 px-4 py-8">
      <h1 className="w-full [font-family:'Onest',Helvetica] font-bold text-[#282828] text-[56px] text-center tracking-[0] leading-normal">
        Our best stories
      </h1>

      <Card className="w-full border-0 shadow-none">
        <CardContent className="p-0">
          <div className="flex flex-col lg:flex-row items-center gap-2.5">
            <div className="flex flex-col items-start justify-center gap-2.5 flex-1">
              <div className="flex flex-col items-start gap-4 w-full">
                <h2 className="[font-family:'Onest',Helvetica] text-[#282828] text-[32px] leading-normal font-semibold tracking-[0]">
                  3 must-try dishes at Nashville&apos;s Chinese-meets-Southern
                  hotspot Choy
                </h2>
              </div>

              <p className="[font-family:'Onest',Helvetica] text-[#909090] leading-normal font-normal text-base tracking-[0]">
                The local dining scene has just been heating up year after year,
                and one of the hottest new players on the scene is Choy in
                Nashville, dubbed one of The Infatuation&apos;s best new
                restaurants in 2024.
              </p>

              <div className="flex items-center gap-5">
                <time className="[font-family:'Onest',Helvetica] text-[#282828] leading-normal font-normal text-base tracking-[0]">
                  August 20, 2022
                </time>
              </div>
            </div>

            <img
              className="flex-1 h-[355px] rounded-[5px] object-cover"
              alt="Featured article"
              src="/figmaAssets/rectangle-38-9.png"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {articles.map((article, index) => (
          <Card key={index} className="border-0 shadow-none">
            <CardContent className="p-0 flex flex-col gap-2.5">
              <img
                className="w-full h-60 rounded-[5px] object-cover"
                alt={article.title}
                src={article.image}
              />

              <div className="flex flex-col items-start gap-4">
                <h3 className="font-heading-h3-semibold text-secondary-800 text-[length:var(--heading-h3-semibold-font-size)] leading-[var(--heading-h3-semibold-line-height)] font-[number:var(--heading-h3-semibold-font-weight)] tracking-[var(--heading-h3-semibold-letter-spacing)] [font-style:var(--heading-h3-semibold-font-style)]">
                  {article.title}
                </h3>
              </div>

              <div className="flex items-center gap-5">
                <time className="font-body-b4-regular text-secondary-400 leading-[var(--body-b4-regular-line-height)] font-[number:var(--body-b4-regular-font-weight)] text-[length:var(--body-b4-regular-font-size)] tracking-[var(--body-b4-regular-letter-spacing)] [font-style:var(--body-b4-regular-font-style)]">
                  {article.date}
                </time>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4">
        <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5">
          Load more
        </span>
      </Button>
    </section>
  );
};
