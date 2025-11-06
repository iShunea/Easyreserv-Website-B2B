import React from "react";
import { Button } from "@/components/ui/button";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex items-center gap-5 px-[180px] py-[50px] w-full">
      <div className="flex flex-col gap-10 items-start flex-1">
        <div className="flex flex-col items-start gap-4 w-full max-w-[530px]">
          <h1 className="[font-family:'Onest',Helvetica] font-bold text-5xl tracking-[0] leading-[52.8px]">
            <span className="text-[#282828]">
              Choose Excellence.
              <br />
              Choose{" "}
            </span>
            <span className="text-[#fe9800]">EasyReserv.io</span>
          </h1>

          <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg tracking-[-0.36px] leading-[27px]">
            Try the free trial and find the perfect subscription for your needs.
          </p>
        </div>

        <Button className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4">
          <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5">
            Start now
          </span>
        </Button>
      </div>

      <img
        className="w-full max-w-[530px] h-auto"
        alt="Element mobileapp"
        src="/figmaAssets/20901966-mobileapp-mockup1-copy-1.png"
      />
    </section>
  );
};
