import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { label: "About Us", hasDropdown: false },
  { label: "Solutions", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
  { label: "Contact", hasDropdown: false },
  { label: "Contact us", hasDropdown: false },
];

export const NavigationBarSection = (): JSX.Element => {
  return (
    <nav className="flex w-full items-center justify-between px-[130px] py-5 bg-white">
      <div className="flex items-center gap-[11px]">
        <img
          className="w-[47px] h-[46px]"
          alt="Logo icon"
          src="/figmaAssets/logo-icon.svg"
        />
        <div className="flex items-center justify-center [font-family:'Onest',Helvetica] font-semibold text-[#282828] text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap">
          EasyReserv.io
        </div>
      </div>

      <div className="inline-flex items-center gap-6">
        <div className="inline-flex items-center gap-6">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              className="inline-flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center justify-center [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                {item.label}
              </div>
              {item.hasDropdown && (
                <ChevronDownIcon className="w-[18px] h-[18px]" />
              )}
            </button>
          ))}
        </div>

        <div className="inline-flex items-center gap-2">
          <Button className="h-auto px-6 py-4 bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px]">
            <div className="px-1 [font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5 whitespace-nowrap">
              Sign up
            </div>
          </Button>

          <button className="inline-flex items-center gap-3 px-3 py-2 rounded-lg border-[0.5px] border-solid border-[#28282880] cursor-pointer hover:bg-gray-50 transition-colors">
            <img className="w-4 h-4" alt="US" src="/figmaAssets/us.svg" />
            <div className="flex items-center justify-center font-body-1 font-[number:var(--body-1-font-weight)] text-[#282828] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] whitespace-nowrap [font-style:var(--body-1-font-style)]">
              EN
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};
