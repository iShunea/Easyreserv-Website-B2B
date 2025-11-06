import { useTranslation } from "@/hooks/useTranslation";
import { CheckCircle2, TrendingUp, Users, Coffee, UtensilsCrossed, Scissors, Hotel, Car, Dumbbell, Stethoscope, ShoppingBag, Droplet, Trophy } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import type { ComponentType } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type IndustryType = 'restaurant' | 'cafe' | 'beauty_salon' | 'barbershop' | 'hotel' | 'car_rental' | 'fitness' | 'medical' | 'retail' | 'car_wash' | 'sports';

interface PlanData {
  label: string;
  text: string;
  reservations: string;
  gradient: string;
  bgColor: string;
  iconColor: string;
}

interface IndustryConfig {
  icon: ComponentType<{ className?: string }>;
  translationKey: string;
}

export const ROICalculatorSection = (): JSX.Element => {
  const { t } = useTranslation();
  const [industry, setIndustry] = useState<IndustryType>('restaurant');

  const industries: Record<IndustryType, IndustryConfig> = {
    restaurant: { icon: UtensilsCrossed, translationKey: 'restaurant' },
    cafe: { icon: Coffee, translationKey: 'cafe' },
    beauty_salon: { icon: Scissors, translationKey: 'beauty_salon' },
    barbershop: { icon: Scissors, translationKey: 'barbershop' },
    hotel: { icon: Hotel, translationKey: 'hotel' },
    car_rental: { icon: Car, translationKey: 'car_rental' },
    fitness: { icon: Dumbbell, translationKey: 'fitness' },
    medical: { icon: Stethoscope, translationKey: 'medical' },
    retail: { icon: ShoppingBag, translationKey: 'retail' },
    car_wash: { icon: Droplet, translationKey: 'car_wash' },
    sports: { icon: Trophy, translationKey: 'sports' },
  };

  const getPlansForIndustry = (type: IndustryType): PlanData[] => {
    const industryData: Record<IndustryType, { basic: string; standard: string; pro: string }> = {
      restaurant: { basic: "2-3", standard: "5-6", pro: "8-10" },
      cafe: { basic: "4-5", standard: "10-12", pro: "16-20" },
      beauty_salon: { basic: "2-3", standard: "4-5", pro: "6-8" },
      barbershop: { basic: "2-4", standard: "5-8", pro: "8-12" },
      hotel: { basic: "2-3", standard: "4-5", pro: "6-8" },
      car_rental: { basic: "1-2", standard: "3-4", pro: "5-6" },
      fitness: { basic: "2-3", standard: "4-6", pro: "6-8" },
      medical: { basic: "2-3", standard: "4-6", pro: "6-8" },
      retail: { basic: "8-10", standard: "20-25", pro: "30-40" },
      car_wash: { basic: "6-8", standard: "15-18", pro: "25-30" },
      sports: { basic: "3-4", standard: "7-9", pro: "12-15" },
    };

    const data = industryData[type];

    return [
      {
        label: t('pricing_page.roi_calculator.basic_label'),
        text: t(`pricing_page.roi_calculator.${type}.basic_text`),
        reservations: data.basic,
        gradient: "from-blue-500 to-blue-600",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
      },
      {
        label: t('pricing_page.roi_calculator.standard_label'),
        text: t(`pricing_page.roi_calculator.${type}.standard_text`),
        reservations: data.standard,
        gradient: "from-purple-500 to-purple-600",
        bgColor: "bg-purple-50",
        iconColor: "text-purple-600",
      },
      {
        label: t('pricing_page.roi_calculator.pro_label'),
        text: t(`pricing_page.roi_calculator.${type}.pro_text`),
        reservations: data.pro,
        gradient: "from-orange-500 to-orange-600",
        bgColor: "bg-orange-50",
        iconColor: "text-orange-600",
      },
    ];
  };

  const plans = getPlansForIndustry(industry);

  return (
    <section className="w-full px-4 md:px-[10%] py-16 md:py-24 bg-gradient-to-br from-[#f9fafb] to-white">
      <div className="max-w-[1138px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-6">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="[font-family:'Onest',Helvetica] font-semibold text-green-700 text-sm">
              {t('pricing_page.roi_calculator.subtitle')}
            </span>
          </div>
          
          <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-3xl md:text-5xl mb-6">
            {t('pricing_page.roi_calculator.title')}
          </h2>
          
          <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg max-w-[800px] mx-auto leading-relaxed mb-8">
            {t('pricing_page.roi_calculator.description')}
          </p>

          {/* Industry Selector */}
          <div className="inline-block">
            <Select value={industry} onValueChange={(value) => setIndustry(value as IndustryType)}>
              <SelectTrigger className="w-[280px] h-12 bg-white border border-zinc-200 rounded-[10px] [font-family:'Onest',Helvetica] font-semibold text-base shadow-sm hover:border-[#2d2c65] transition-colors" data-testid="select-industry">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white border border-zinc-200 rounded-[10px] shadow-lg">
                {(Object.keys(industries) as IndustryType[]).map((key) => {
                  const IndustryIcon = industries[key].icon;
                  return (
                    <SelectItem 
                      key={key} 
                      value={key}
                      className="[font-family:'Onest',Helvetica] font-medium text-sm hover:bg-zinc-50 cursor-pointer"
                      data-testid={`option-industry-${key}`}
                    >
                      <div className="flex items-center gap-2">
                        <IndustryIcon className="w-4 h-4" />
                        <span>{t(`pricing_page.roi_calculator.industry.${key}`)}</span>
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] border-2 border-zinc-200 shadow-[8px_28px_30px_#00000008] overflow-hidden hover:shadow-xl hover:border-[#2d2c65] transition-all duration-300"
              data-testid={`card-roi-plan-${index}`}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${plan.gradient}`}></div>
              
              <div className="p-8">
                {/* Plan Label */}
                <div className="mb-6">
                  <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl mb-2">
                    {plan.label}
                  </h3>
                </div>

                {/* Icon and Reservations Number */}
                <div className={`${plan.bgColor} rounded-[15px] p-6 mb-6 text-center`}>
                  <Users className={`w-12 h-12 ${plan.iconColor} mx-auto mb-4`} />
                  <div className="[font-family:'Onest',Helvetica] font-bold text-4xl mb-2" style={{
                    background: `linear-gradient(135deg, ${plan.gradient.includes('blue') ? '#3b82f6' : plan.gradient.includes('purple') ? '#a855f7' : '#f97316'} 0%, ${plan.gradient.includes('blue') ? '#2563eb' : plan.gradient.includes('purple') ? '#9333ea' : '#ea580c'} 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {plan.reservations}
                  </div>
                  <p className="[font-family:'Onest',Helvetica] font-medium text-[#282828] text-sm opacity-70">
                    {t('pricing_page.roi_calculator.reservations_per_month')}
                  </p>
                </div>

                {/* Description */}
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-base leading-[24px]">
                    {plan.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="bg-[#2d2c6508] border-l-4 border-[#2d2c65] rounded-[10px] p-6 mb-8">
          <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-sm leading-[20px] opacity-70">
            <span className="font-semibold">💡 {t('pricing_page.roi_calculator.note_label')}</span> {t(`pricing_page.roi_calculator.${industry}.note`)}
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/contact">
            <Button className="h-auto bg-[#fe9800] hover:bg-[#fe9800]/90 rounded-[5px] px-8 py-4" data-testid="button-roi-cta">
              <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base">
                {t('pricing_page.roi_calculator.cta')}
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
