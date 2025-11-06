import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-center gap-2.5 px-20 py-12 bg-white">
      <div className="flex flex-col items-start gap-2.5 w-full max-w-[1239px]">
        <Card className="w-full rounded-[20px] border-0 bg-[linear-gradient(19deg,rgba(254,152,0,1)_0%,rgba(254,187,1,0.5)_100%)]">
          <CardContent className="flex flex-col items-start justify-center gap-8 px-8 py-12">
            <div className="flex flex-col items-start gap-4 w-full">
              <h2 className="w-full [font-family:'Onest',Helvetica] font-extrabold text-white text-4xl tracking-[0] leading-10">
                Act Before It&apos;s Too Late!
              </h2>

              <p className="w-full [font-family:'Onest',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                A good idiom for kids is &#34;It&#39;s raining cats and
                dogs.&#34; Kids know what both cats and dogs are from an early
                age.
              </p>
            </div>

            <Button className="h-auto bg-white hover:bg-white/90 text-[#2d2c65] px-6 py-4 rounded-[5px]">
              <span className="[font-family:'Onest',Helvetica] font-bold text-base text-center tracking-[0] leading-5">
                Get Started
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
