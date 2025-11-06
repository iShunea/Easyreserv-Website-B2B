import React from "react";
import { Link } from "wouter";
import { Container } from "@/components/Container";
import googlePlayBadge from "@assets/google-play-badge.png";
import { useTranslation } from "@/hooks/useTranslation";
import { useCookieConsent } from "@/contexts/CookieConsentContext";

type FooterLink = { text: string; href: string; action?: string };

const getFooterLinks = (t: (key: string) => string): { column1: FooterLink[]; column2: FooterLink[]; column3: FooterLink[] } => ({
  column1: [
    { text: t('footer.about_us'), href: "/about" },
    { text: t('footer.solutions'), href: "/solutions" },
    { text: t('footer.pricing'), href: "/pricing" },
    { text: t('footer.blog'), href: "/blog" },
    { text: t('footer.contact'), href: "/contact" },
  ],
  column2: [
    { text: t('footer.privacy_policy'), href: "/policies#privacy-policy" },
    { text: t('footer.cookies_policy'), href: "/policies#cookies-policy" },
    { text: t('footer.terms_conditions'), href: "/policies#terms-and-conditions" },
    { text: t('cookie_consent.cookie_policy'), href: "#", action: 'cookie-settings' },
  ],
  column3: [
    { text: t('footer.linkedin'), href: "https://www.linkedin.com/company/easyreserv" },
    { text: t('footer.facebook'), href: "https://www.facebook.com/easyreserv.io" },
    { text: t('footer.instagram'), href: "https://www.instagram.com/easyreserv.io/" },
  ],
});

export const FooterSection = (): JSX.Element => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  const { resetConsent } = useCookieConsent();
  const footerLinks = getFooterLinks(t);
  
  return (
    <footer className="w-full py-16 bg-[#191a24]">
      <Container>
        <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
          <Link to="/">
            <div className="inline-flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
              <img
                className="w-14 h-14"
                alt="Logo"
                src="/figmaAssets/logo.svg"
              />

              <div className="[font-family:'Inter',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[33.6px]">
                EasyReserv.io
              </div>
            </div>
          </Link>

          <p className="opacity-75 [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-normal max-w-md">
            {t('footer.description')}
          </p>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <nav className="flex flex-col gap-4">
              {footerLinks.column1.map((link, index) => (
                <Link key={index} to={link.href}>
                  <span className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[-0.32px] hover:underline cursor-pointer">
                    {link.text}
                  </span>
                </Link>
              ))}
            </nav>

            <nav className="flex flex-col gap-4">
              {footerLinks.column2.map((link, index) => (
                link.action === 'cookie-settings' ? (
                  <button
                    key={index}
                    onClick={resetConsent}
                    className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[-0.32px] hover:underline text-left"
                    data-testid="button-cookie-settings"
                  >
                    {link.text}
                  </button>
                ) : (
                  <a
                    key={index}
                    href={link.href}
                    className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[-0.32px] hover:underline"
                  >
                    {link.text}
                  </a>
                )
              ))}
            </nav>

            <nav className="flex flex-col gap-4">
              {footerLinks.column3.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[-0.32px] hover:underline"
                >
                  {link.text}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-4">
              <div className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0]">
                {t('footer.available_on')}
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="https://bit.ly/4c6yKJr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img
                    className="h-12 w-auto object-contain"
                    alt="Download on the App Store"
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83&releaseDate=1722556800"
                  />
                </a>
                <a
                  href="https://bit.ly/49Ce2Q1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img
                    className="h-12 w-auto object-contain"
                    alt="Get it on Google Play"
                    src={googlePlayBadge}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-[#ffffff20]">
          <div className="[font-family:'Inter',Helvetica] font-normal text-white text-base text-center tracking-[-0.32px] leading-7">
            © EasyReserv.io {currentYear}. {t('footer.copyright')}
          </div>

          <div className="opacity-50 [font-family:'Inter',Helvetica] font-normal text-white text-base text-center">
            <span className="tracking-[-0.05px] leading-7">
              {t('footer.developed_by')}
            </span>
            <span className="font-medium tracking-[0]">
              &nbsp;
            </span>
            <a 
              href="https://ishunea.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold tracking-[-0.05px] leading-7 underline hover:opacity-80 transition-opacity"
            >
              {t('footer.developer_name')}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
