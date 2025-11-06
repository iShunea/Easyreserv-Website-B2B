import React from "react";
import { Link } from "wouter";

export const FeatureImageSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-2.5 px-4 md:px-[180px] py-8 md:py-[50px] relative">
      <div className="flex flex-col items-start justify-center gap-6 md:gap-8 p-6 md:p-12 relative self-stretch w-full rounded-[20px] overflow-hidden bg-[linear-gradient(19deg,rgba(254,152,0,1)_0%,rgba(254,187,1,0.5)_100%)]">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full z-10">
          <h2 className="relative self-stretch [font-family:'Onest',Helvetica] font-extrabold text-white text-2xl md:text-4xl tracking-[0] leading-tight md:leading-10">
            Povestea Ta de Succes Începe Astăzi!
          </h2>
        </div>

        <Link href="/pricing" className="h-auto bg-white hover:bg-white/90 text-[#2d2c65] font-bold text-base px-6 py-4 rounded-[5px] inline-flex items-center justify-center z-10" data-testid="button-become-partner">
          Devino Partener
        </Link>

        <img
          className="hidden lg:block absolute -top-11 left-[772px] w-[367px] h-[366px]"
          alt="Logo icon"
          src="/figmaAssets/logo-icon.svg"
        />

        <img
          className="hidden md:block absolute top-[calc(50.00%_-_110px)] right-6 w-[200px] md:w-[323px] h-auto opacity-30 md:opacity-100"
          alt="Group"
          src="/figmaAssets/group.png"
        />
      </div>
    </section>
  );
};
