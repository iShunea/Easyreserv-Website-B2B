import React from "react";
import { Button } from "@/components/ui/button";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[508px] overflow-hidden">
      <img
        className="absolute top-0 left-0 w-[1044px] h-[879px]"
        alt="Vector"
        src="/figmaAssets/vector-21.svg"
      />

      <img
        className="absolute top-[51px] left-[1144px] w-[973px] h-[585px]"
        alt="Vector"
        src="/figmaAssets/vector-22.svg"
      />

      <img
        className="absolute top-[205px] left-[-165px] w-[656px] h-[510px]"
        alt="Vector"
        src="/figmaAssets/vector-23.svg"
      />

      <img
        className="top-[299px] left-[983px] absolute w-[1512px] h-[416px]"
        alt="Vector"
        src="/figmaAssets/vector-20-2.svg"
      />

      <div className="flex flex-col items-center gap-5 absolute top-[136px] left-1/2 -translate-x-1/2 w-full max-w-[1138px] px-4">
        <h1 className="w-full max-w-[974px] [font-family:'Onest',Helvetica] font-bold text-[56px] text-center leading-normal">
          <span className="text-[#282828]">How does </span>
          <span className="text-[#fe9800]">EasyReserv</span>
          <span className="text-[#282828]">
            {" "}
            differentiate itself in the market?
          </span>
        </h1>

        <div className="w-full max-w-[674px] flex flex-col items-start gap-2.5">
          <p className="w-full [font-family:'Onest',Helvetica] font-normal text-[#282727] text-base text-center leading-[20.8px]">
            At EasyReserv, we aren&#39;t just innovators, we&#39;re your
            partners in progress. With a dedicated team of experts, EasyReserv
            redefines what&#39;s possible in business management.
          </p>

          <p className="w-full [font-family:'Onest',Helvetica] font-normal text-[#282727] text-base text-center leading-[20.8px]">
            Your success is not just a goal for us - it is our passion.
          </p>
        </div>

        <Button className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4">
          <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
            Request Demo
          </span>
        </Button>
      </div>
    </section>
  );
};
