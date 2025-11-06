import React from "react";
import { Button } from "@/components/ui/button";

export const SubscriptionOptionsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-5 px-4 py-[50px] relative">
      <h2 className="relative max-w-[974px] w-full [font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl text-center tracking-[0] leading-[normal]">
        Not Sure Which Plan Is Right for You?
      </h2>

      <p className="relative max-w-[674px] w-full [font-family:'Onest',Helvetica] font-normal text-textblack text-base text-center tracking-[0] leading-[20.8px]">
        We understand that every business is unique with specific needs. If
        you&#39;re uncertain about the best plan for you or have questions, our
        team is here to assist. We provide personalized guidance to ensure you
        get the most out of the platform&#39;s capabilities.
      </p>

      <Button className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4">
        <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5">
          Contact Us
        </span>
      </Button>
    </section>
  );
};
