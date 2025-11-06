import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";

export const Blog = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <NavigationBarSection />
      <MainContentSection />
      <FooterSection />
    </div>
  );
};
