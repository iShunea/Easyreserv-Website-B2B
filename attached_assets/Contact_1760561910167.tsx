import React from "react";
import { ContactFormSection } from "./sections/ContactFormSection";
import { LocationInfoSection } from "./sections/LocationInfoSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";

export const Contact = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <img
        className="absolute top-[-77699px] left-[-9755px] w-[416px] h-[1512px]"
        alt="Vector"
        src="/figmaAssets/vector-21-1.svg"
      />

      <img
        className="absolute top-[-77699px] left-[-9755px] w-[416px] h-[1512px]"
        alt="Vector"
        src="/figmaAssets/vector-20-2.svg"
      />

      <img
        className="absolute top-[1608px] left-[385px] w-[1512px] h-[416px]"
        alt="Vector"
        src="/figmaAssets/vector-20-1.svg"
      />

      <img
        className="absolute top-0 left-0 w-[1044px] h-[879px]"
        alt="Vector"
        src="/figmaAssets/vector-21.svg"
      />

      <img
        className="absolute top-[205px] left-[-165px] w-[656px] h-[510px]"
        alt="Vector"
        src="/figmaAssets/vector-23.svg"
      />

      <img
        className="absolute top-[299px] left-[983px] w-[1512px] h-[416px]"
        alt="Vector"
        src="/figmaAssets/vector-20.svg"
      />

      <div className="relative flex flex-col w-full">
        <NavigationBarSection />
        <div className="flex flex-col items-center w-full px-[10%] gap-4">
          <ContactFormSection />
          <LocationInfoSection />
        </div>
      </div>
    </div>
  );
};
