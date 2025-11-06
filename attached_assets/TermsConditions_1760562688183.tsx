import React from "react";
import { ContentSection } from "./sections/ContentSection";
import { FooterSection } from "./sections/FooterSection";
import { NavigationSection } from "./sections/NavigationSection";

export const TermsConditions = (): JSX.Element => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <NavigationSection />
      <ContentSection />
      <FooterSection />
    </div>
  );
};
