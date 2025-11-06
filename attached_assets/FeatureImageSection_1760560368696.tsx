import React from "react";
import { Button } from "@/components/ui/button";

export const FeatureImageSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2.5 px-[180px] py-[50px] relative">
      <div className="flex flex-col items-start justify-center gap-8 p-12 relative self-stretch w-full rounded-[20px] overflow-hidden bg-[linear-gradient(19deg,rgba(254,152,0,1)_0%,rgba(254,187,1,0.5)_100%)]">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
          <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Onest',Helvetica] font-extrabold text-white text-4xl tracking-[0] leading-10">
            Your Success Story Starts Today!
          </h2>
        </div>

        <Button className="h-auto bg-white hover:bg-white/90 text-[#2d2c65] font-bold text-base px-6 py-4 rounded-[5px]">
          Become a partner
        </Button>

        <img
          className="absolute -top-11 left-[772px] w-[367px] h-[366px]"
          alt="Logo icon"
          src="/figmaAssets/logo-icon.svg"
        />

        <img
          className="absolute top-[calc(50.00%_-_110px)] right-6 w-[323px] h-[220px]"
          alt="Group"
          src="/figmaAssets/group.png"
        />
      </div>
    </section>
  );
};
