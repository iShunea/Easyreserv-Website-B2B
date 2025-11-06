import React from "react";
import { ContentFrameSection } from "./sections/ContentFrameSection";
import { FooterSection } from "./sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";

export const Blog = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <NavigationBarSection />
      <div className="w-full max-w-[1080px] mx-auto px-4 py-12">
        <MainContentSection />
      </div>
      <div className="w-full py-12">
        <ContentFrameSection />
      </div>
      <FooterSection />
    </div>
  );
};
