import { NavigationSection } from "./sections/NavigationSection";
import { FooterSection } from "./sections/FooterSection";
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seo-config";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2, Zap, Shield, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import fiscalDevice1 from "@assets/datecs-dp25-mev_161_1762628217268.jpg";
import fiscalDevice2 from "@assets/Tremol_S21_Grey_800px-800x800_1762628129366.jpg";
import posPrinter1 from "@assets/stock_images/thermal_receipt_prin_f8a95a09.jpg";
import posPrinter2 from "@assets/stock_images/epson_tm-t88v_therma_37f4b362.jpg";
import posPrinter3 from "@assets/stock_images/star_micronics_tsp10_6a719bc3.jpg";
import posTablet from "@assets/stock_images/android_tablet_pos_r_c3fd74b1.jpg";

export const Hardware = (): JSX.Element => {
  const { language, t } = useLanguage();

  const fiscalDevices = [
    {
      brand: "Datecs",
      models: ["DP-25", "DP-150", "FP-700", "WP-500"],
      description: t("hardware.fiscal_datecs_desc"),
      image: fiscalDevice1,
    },
    {
      brand: "Tremol",
      models: ["M20", "S21", "Z-KL", "FP-01"],
      description: t("hardware.fiscal_tremol_desc"),
      image: fiscalDevice2,
    },
  ];

  const posPrinters = [
    {
      brand: "HPRT",
      models: ["TP809", "TP801", "TP805L"],
      description: t("hardware.pos_hprt_desc"),
      image: posPrinter1,
    },
    {
      brand: "Epson",
      models: ["TM-T20III", "TM-M30II", "TM-T88VI"],
      description: t("hardware.pos_epson_desc"),
      image: posPrinter2,
    },
    {
      brand: "Star Micronics",
      models: ["TSP143III", "TSP654II", "mC-Print3"],
      description: t("hardware.pos_star_desc"),
      image: posPrinter3,
    },
  ];

  const features = [
    {
      icon: Zap,
      title: t("hardware.feature_rapid_integration"),
      description: t("hardware.feature_rapid_integration_desc"),
    },
    {
      icon: Shield,
      title: t("hardware.feature_compliance"),
      description: t("hardware.feature_compliance_desc"),
    },
    {
      icon: Cpu,
      title: t("hardware.feature_support"),
      description: t("hardware.feature_support_desc"),
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <SEO 
        {...seoConfig.solutions} 
        language={language}
        title={`${t("hardware.hero_title")} — ${t("hardware.fiscal_devices_title")} & ${t("hardware.pos_printers_title")} | EasyReserv.io`}
        description={t("hardware.hero_description")}
      />

      <div className="relative flex flex-col w-full">
        <NavigationSection />

        {/* Hero Section */}
        <section className="w-full px-4 md:px-[10%] py-16 md:py-24 bg-gradient-to-br from-[#2d2c65] to-[#1a1945]">
          <div className="max-w-[1138px] mx-auto text-center">
            <h1 className="[font-family:'Onest',Helvetica] font-bold text-white text-4xl md:text-6xl tracking-[0] leading-tight mb-6">
              {t("hardware.hero_title")}
            </h1>
            <p className="[font-family:'Onest',Helvetica] font-normal text-white/90 text-lg md:text-xl max-w-[800px] mx-auto leading-relaxed">
              {t("hardware.hero_description")}
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full px-4 md:px-[10%] py-16 bg-[#f9fafb]">
          <div className="max-w-[1138px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center p-8 bg-white rounded-[10px] border border-zinc-200 shadow-[8px_28px_30px_#00000008] hover:shadow-lg transition-shadow"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#2d2c6510] flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-[#2d2c65]" />
                    </div>
                    <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl mb-3">
                      {feature.title}
                    </h3>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base leading-[24px]">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Fiscal Devices Section */}
        <section className="w-full px-4 md:px-[10%] py-16">
          <div className="max-w-[1138px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-3xl md:text-5xl mb-4">
                {t("hardware.fiscal_devices_title")}
              </h2>
              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg max-w-[800px] mx-auto">
                {t("hardware.fiscal_devices_description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {fiscalDevices.map((device, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[10px] border border-zinc-200 shadow-[8px_28px_30px_#00000008] overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={device.image}
                      alt={`${device.brand} ${t("hardware.fiscal_devices_title")}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="px-4 py-1.5 bg-[#2d2c6510] rounded-full">
                        <span className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-sm">
                          {device.brand}
                        </span>
                      </div>
                      <div className="px-4 py-1.5 bg-green-50 rounded-full">
                        <span className="[font-family:'Onest',Helvetica] font-semibold text-green-700 text-sm">
                          ✓ {t("hardware.fiscal_certified")}
                        </span>
                      </div>
                    </div>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base mb-4 leading-[24px]">
                      {device.description}
                    </p>
                    <div className="border-t border-zinc-200 pt-4 mt-4">
                      <p className="[font-family:'Inter',Helvetica] font-medium text-[#282828] text-sm mb-2">
                        {t("hardware.compatible_models")}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {device.models.map((model, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-md text-sm font-medium text-[#282828]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                            {model}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* POS Printers Section */}
        <section className="w-full px-4 md:px-[10%] py-16 bg-[#f9fafb]">
          <div className="max-w-[1138px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-3xl md:text-5xl mb-4">
                {t("hardware.pos_printers_title")}
              </h2>
              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg max-w-[800px] mx-auto">
                {t("hardware.pos_printers_description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posPrinters.map((printer, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[10px] border border-zinc-200 shadow-[8px_28px_30px_#00000008] overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-square w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={printer.image}
                      alt={`${printer.brand} ${t("hardware.pos_printers_title")}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-[#fe980010] rounded-full [font-family:'Onest',Helvetica] font-bold text-[#fe9800] text-sm">
                        {printer.brand}
                      </span>
                    </div>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-sm mb-4 leading-[20px]">
                      {printer.description}
                    </p>
                    <div className="border-t border-zinc-200 pt-4 mt-4">
                      <div className="flex flex-wrap gap-1.5">
                        {printer.models.map((model, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2 py-1 bg-gray-100 rounded text-xs font-medium text-[#282828]"
                          >
                            {model}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Android POS Tablets Section */}
        <section className="w-full px-4 md:px-[10%] py-16">
          <div className="max-w-[1138px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-3xl md:text-5xl mb-4">
                {t("hardware.android_tablets_title")}
              </h2>
              <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg max-w-[800px] mx-auto">
                {t("hardware.android_tablets_description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#2d2c6510] flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-[#2d2c65]" />
                    </div>
                    <div>
                      <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl mb-2">
                        {t("hardware.android_feature_native")}
                      </h3>
                      <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base leading-[24px]">
                        {t("hardware.android_feature_native_desc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#fe980010] flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-[#fe9800]" />
                    </div>
                    <div>
                      <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl mb-2">
                        {t("hardware.android_feature_mobility")}
                      </h3>
                      <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base leading-[24px]">
                        {t("hardware.android_feature_mobility_desc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                      <Cpu className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl mb-2">
                        {t("hardware.android_feature_connectivity")}
                      </h3>
                      <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base leading-[24px]">
                        {t("hardware.android_feature_connectivity_desc")}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#f9fafb] rounded-[10px] p-6 border-l-4 border-[#2d2c65]">
                    <p className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-base mb-2">
                      💡 {t("hardware.android_important_factor")}
                    </p>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-sm leading-[20px]">
                      {t("hardware.android_important_desc")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="bg-white rounded-[10px] border border-zinc-200 shadow-[8px_28px_30px_#00000008] overflow-hidden">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img
                      src={posTablet}
                      alt={t("hardware.android_tablets_title")}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 bg-gradient-to-br from-[#2d2c65] to-[#1a1945]">
                    <h4 className="[font-family:'Onest',Helvetica] font-bold text-white text-lg mb-3">
                      {t("hardware.android_specs_title")}
                    </h4>
                    <ul className="space-y-2 text-white/90 text-sm [font-family:'Onest',Helvetica]">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {t("hardware.android_spec_os")}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {t("hardware.android_spec_screen")}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {t("hardware.android_spec_ram")}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {t("hardware.android_spec_wifi")}
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                        {t("hardware.android_spec_bluetooth")}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full px-4 md:px-[10%] py-16 md:py-24">
          <div className="max-w-[1138px] mx-auto bg-gradient-to-br from-[#2d2c65] to-[#1a1945] rounded-[20px] p-8 md:p-16 text-center">
            <h2 className="[font-family:'Onest',Helvetica] font-bold text-white text-3xl md:text-4xl mb-6">
              {t("hardware.cta_title")}
            </h2>
            <p className="[font-family:'Onest',Helvetica] font-normal text-white/90 text-lg max-w-[700px] mx-auto mb-8">
              {t("hardware.cta_description")}
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button className="h-auto bg-[#fe9800] hover:bg-[#fe9800]/90 rounded-[5px] px-8 py-4">
                  <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
                    {t("hardware.cta_contact")}
                  </span>
                </Button>
              </Link>
              <Link to="/solutions">
                <Button className="h-auto bg-white hover:bg-white/90 rounded-[5px] px-8 py-4">
                  <span className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-base">
                    {t("hardware.cta_solutions")}
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <FooterSection />
      </div>
    </div>
  );
};
