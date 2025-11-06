import React from "react";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";

export const Solutions = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <img
        className="absolute top-[4538px] left-[500px] w-[1512px] h-[416px]"
        alt="Vector"
        src="/figmaAssets/vector-21.svg"
      />

      <img
        className="absolute top-[2518px] left-[-428px] w-[1512px] h-[416px]"
        alt="Vector"
        src="/figmaAssets/vector-20-1.svg"
      />

      <img
        className="top-[1608px] left-[385px] absolute w-[1512px] h-[416px]"
        alt="Vector"
        src="/figmaAssets/vector-20.svg"
      />

      <img
        className="absolute top-0 left-0 w-[1044px] h-[879px]"
        alt="Vector"
        src="/figmaAssets/vector-21-1.svg"
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

      <NavigationBarSection />
      <MainContentSection />
    </div>
  );
};
