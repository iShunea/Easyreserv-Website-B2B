import { ChevronDownIcon, Menu, Globe } from "lucide-react";
import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/Container";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import type { Language } from "@/contexts/LanguageContext";

const getNavigationItems = (t: (key: string) => string) => [
  { label: t('nav.about'), hasDropdown: false, href: "/about" },
  { 
    label: t('nav.solutions'), 
    hasDropdown: true, 
    href: "/solutions",
    dropdownItems: [
      { label: t('nav.solutions_software'), href: "/solutions" },
      { label: t('nav.hardware'), href: "/hardware" }
    ]
  },
  { label: t('nav.pricing'), hasDropdown: false, href: "/pricing" },
  { label: t('nav.blog'), hasDropdown: false, href: "/blog" },
  { label: t('nav.contact'), hasDropdown: false, href: "/contact" },
];

const languageOptions: Array<{ code: Language; label: string; flag: string }> = [
  { code: 'ro', label: 'Română', flag: 'RO' },
  { code: 'ru', label: 'Русский', flag: 'RU' },
  { code: 'en', label: 'English', flag: 'EN' },
];

export const NavigationSection = (): JSX.Element => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const navigationItems = getNavigationItems(t);
  const currentLanguageOption = languageOptions.find(opt => opt.code === language) || languageOptions[0];

  return (
    <nav className="relative z-50 w-full py-5 bg-white">
      <Container>
        {/* Logo - Left side */}
        <div className="col-span-6 md:col-span-3 flex items-center gap-[11px]">
          <Link to="/" className="flex items-center gap-[11px] cursor-pointer hover:opacity-80 transition-opacity">
            <img
              className="w-[47px] h-[46px]"
              alt="Logo"
              src="/figmaAssets/logo.svg"
            />
            <div className="flex items-center justify-center [font-family:'Onest',Helvetica] font-semibold text-[#282828] text-2xl tracking-[0] leading-[33.6px] whitespace-nowrap">
              EasyReserv.io
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Right side */}
        <div className="col-span-6 md:col-span-9 hidden lg:flex items-center justify-end gap-6">
          {/* Navigation Items */}
          <div className="flex items-center gap-6">
            {navigationItems.map((item, index) => {
              // Handle items with dropdown
              if (item.hasDropdown && item.dropdownItems) {
                return (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>
                      <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="flex items-center justify-center [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                          {item.label}
                        </div>
                        <ChevronDownIcon className="w-[18px] h-[18px] text-[#282828]" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-56">
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <Link key={idx} to={dropdownItem.href}>
                          <DropdownMenuItem className="cursor-pointer">
                            <span className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base">
                              {dropdownItem.label}
                            </span>
                          </DropdownMenuItem>
                        </Link>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              
              // Handle anchor links
              if (item.href.startsWith('#')) {
                return (
                  <a key={index} href={item.href}>
                    <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="flex items-center justify-center [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                        {item.label}
                      </div>
                    </div>
                  </a>
                );
              }
              
              // Handle regular links
              return (
                <Link key={index} to={item.href}>
                  <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity">
                    <div className="flex items-center justify-center [font-family:'Onest',Helvetica] font-normal text-[#282828] text-base tracking-[0] leading-[22.4px] whitespace-nowrap">
                      {item.label}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <a href="https://app.easyreserv.io/login" target="_blank" rel="noopener noreferrer">
              <Button className="h-auto px-4 py-2 bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px]">
                <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5">
                  {t('nav.sign_in')}
                </span>
              </Button>
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border-[0.5px] border-solid border-[#28282880] cursor-pointer hover:bg-gray-50 transition-colors">
                  <Globe className="w-4 h-4 text-[#282828]" />
                  <div className="flex items-center justify-center [font-family:'Onest',Helvetica] font-normal text-[#282828] text-sm leading-[20px] whitespace-nowrap">
                    {currentLanguageOption.flag}
                  </div>
                  <ChevronDownIcon className="w-3.5 h-3.5 text-[#282828]" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {languageOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.code}
                    onClick={() => setLanguage(option.code)}
                    className={`cursor-pointer ${language === option.code ? 'bg-[#2d2c650d] font-semibold' : ''}`}
                  >
                    <span className="mr-2">{option.flag}</span>
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="col-span-6 md:col-span-9 flex lg:hidden items-center justify-end">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="h-auto p-2"
                data-testid="button-mobile-menu"
                aria-label="Deschide meniul de navigare"
              >
                <Menu className="h-6 w-6 text-[#282828]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col">
              <SheetHeader className="flex-shrink-0">
                <SheetTitle className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-xl">
                  {t('nav.menu')}
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-8 overflow-y-auto flex-1 pb-6">
                {/* Navigation Links */}
                <div className="flex flex-col gap-4">
                  {navigationItems.map((item, index) => {
                    // Handle items with dropdown
                    if (item.hasDropdown && item.dropdownItems) {
                      return (
                        <div key={index} className="flex flex-col gap-2">
                          <div className="flex items-center gap-1 py-2">
                            <div className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-lg">
                              {item.label}
                            </div>
                            <ChevronDownIcon className="w-5 h-5 text-[#282828]" />
                          </div>
                          <div className="flex flex-col gap-2 pl-4 border-l-2 border-[#2d2c6520]">
                            {item.dropdownItems.map((dropdownItem, idx) => (
                              <Link
                                key={idx}
                                to={dropdownItem.href}
                                onClick={() => setIsOpen(false)}
                              >
                                <div className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base py-1.5 hover:text-[#2d2c65] transition-colors">
                                  {dropdownItem.label}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    }
                    
                    // Handle regular links
                    return (
                      <Link 
                        key={index} 
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="flex items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity py-2">
                          <div className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg">
                            {item.label}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Sign In Button */}
                <a 
                  href="https://app.easyreserv.io/login" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full h-auto px-6 py-4 bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px]">
                    <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
                      {t('nav.sign_in')}
                    </span>
                  </Button>
                </a>

                {/* Language Selector */}
                <div className="flex flex-col gap-2">
                  {languageOptions.map((option) => (
                    <div
                      key={option.code}
                      onClick={() => {
                        setLanguage(option.code);
                        setIsOpen(false);
                      }}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg border-[0.5px] border-solid cursor-pointer transition-colors ${
                        language === option.code
                          ? 'border-[#2d2c65] bg-[#2d2c650d] font-semibold'
                          : 'border-[#28282880] hover:bg-gray-50'
                      }`}
                    >
                      <Globe className="w-4 h-4 text-[#282828]" />
                      <div className="[font-family:'Onest',Helvetica] text-[#282828] text-base">
                        {option.flag} - {option.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </nav>
  );
};
