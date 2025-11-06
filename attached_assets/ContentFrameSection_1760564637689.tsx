import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    id: 1,
    image: "/figmaAssets/rectangle-38-2.png",
    title:
      "Generation Sell - Engaging and Retaining Zoomers at Your Restaurant",
    date: "August 20, 2022",
  },
  {
    id: 2,
    image: "/figmaAssets/rectangle-38-2.png",
    title: "Cloud-Based Tech – A More Sustainable Solution for Your Restaurant",
    date: "August 20, 2022",
  },
  {
    id: 3,
    image: "/figmaAssets/rectangle-38-2.png",
    title: "Morale and Motivation - Improving Staff Retention With Syrve",
    date: "August 20, 2022",
  },
];

export const ContentFrameSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1080px] mx-auto items-start gap-[38px] px-4">
      <h2 className="self-stretch [font-family:'Onest',Helvetica] font-bold text-[#282828] text-[56px] tracking-[0] leading-[normal]">
        Keep reading
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {articles.map((article) => (
          <Card key={article.id} className="flex flex-col border-0 shadow-none">
            <CardContent className="flex flex-col items-center justify-center gap-2.5 p-0">
              <img
                className="w-full h-60 rounded-[5px] object-cover"
                alt={article.title}
                src={article.image}
              />

              <div className="flex flex-col items-start gap-4 w-full">
                <h3 className="text-[length:var(--heading-h3-semibold-font-size)] leading-[var(--heading-h3-semibold-line-height)] font-heading-h3-semibold font-[number:var(--heading-h3-semibold-font-weight)] text-[#282828] tracking-[var(--heading-h3-semibold-letter-spacing)] [font-style:var(--heading-h3-semibold-font-style)]">
                  {article.title}
                </h3>
              </div>

              <div className="flex items-center gap-5 w-full">
                <time className="flex-1 text-secondary-400 text-[length:var(--body-b4-regular-font-size)] leading-[var(--body-b4-regular-line-height)] font-body-b4-regular font-[number:var(--body-b4-regular-font-weight)] tracking-[var(--body-b4-regular-letter-spacing)] [font-style:var(--body-b4-regular-font-style)]">
                  {article.date}
                </time>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
