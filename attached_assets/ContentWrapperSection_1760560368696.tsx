import {
  CheckIcon,
  ChevronDownIcon,
  HelpCircleIcon,
  SparklesIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Basic",
    description: "Best for Small Businesses",
    price: "€85",
    period: "/month",
    isPopular: false,
    buttonVariant: "outline" as const,
    features: [
      "Users Included: 2",
      "Business Setup",
      "Create Place",
      "Reservations",
    ],
  },
  {
    name: "Standard",
    description: "Best for Small Businesses",
    price: "€85",
    period: "/month",
    isPopular: false,
    buttonVariant: "outline" as const,
    features: [
      "Users Included: 2",
      "Business Setup",
      "Create Place",
      "Reservations",
    ],
  },
  {
    name: "Pro",
    description: "Best for Small Businesses",
    price: "€85",
    period: "/month",
    isPopular: true,
    buttonVariant: "default" as const,
    features: [
      "Users Included: 2",
      "Business Setup",
      "Create Place",
      "Reservations",
    ],
  },
  {
    name: "Enterprise",
    description: "Best for Small Businesses",
    price: "€85",
    period: "/month",
    isPopular: false,
    buttonVariant: "outline" as const,
    features: [
      "Users Included: 2",
      "Business Setup",
      "Create Place",
      "Reservations",
    ],
  },
];

const comparisonCategories = [
  {
    title: "User Types",
    features: [
      {
        name: "Admin",
        values: ["1", "1", "1", "Unlimited"],
        muted: [true, false, false, false],
      },
      {
        name: "Hostess",
        values: ["1", "1", "1", "Unlimited"],
        muted: [true, false, false, false],
      },
      {
        name: "Waiter",
        values: ["-", "2", "5", "Unlimited"],
        muted: [true, false, false, false],
      },
      {
        name: "Cook",
        values: ["-", "-", "3", "Unlimited"],
        muted: [true, false, false, false],
      },
    ],
  },
  {
    title: "Business Setup",
    features: [
      {
        name: "Working Hours Setup",
        values: [true, true, true, true],
      },
      {
        name: "Booking Duration Setup",
        values: [true, true, true, true],
      },
      {
        name: "10 Gallery Photo",
        values: [true, true, true, true],
      },
      {
        name: "Point on Map Setup",
        values: [true, true, true, true],
      },
    ],
  },
  {
    title: "Place Setup",
    features: [
      {
        name: "CRUD Place",
        values: [true, true, true, true],
      },
      {
        name: "CRUD Tables",
        values: [true, true, true, true],
      },
    ],
  },
  {
    title: "Menu",
    features: [
      {
        name: "CRUD Menu",
        values: [true, true, true, true],
      },
      {
        name: "Import Menu Items",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Reservations",
    features: [
      {
        name: "Accept / Reject",
        values: [true, true, true, true],
      },
      {
        name: "Reservation Tracking",
        values: [true, true, true, true],
      },
      {
        name: "Calendar Access",
        values: [true, true, true, true],
      },
      {
        name: "View Client Reviews",
        values: [false, false, true, true],
      },
      {
        name: "Modify Reservations",
        values: [true, true, true, true],
      },
      {
        name: "Create New Reservations",
        values: [true, true, true, true],
      },
      {
        name: "Create a Pre-Order / Order",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Order Management",
    features: [
      {
        name: "Confirm / Reject",
        values: [false, false, true, true],
      },
      {
        name: "To deliver",
        values: [false, false, true, true],
      },
      {
        name: "Notifications",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Staff Management",
    features: [
      {
        name: "CRUD Empoyee",
        values: [true, true, true, true],
      },
      {
        name: "Working Schedule Setup",
        values: [true, true, true, true],
      },
      {
        name: "Manage Vacations / Days off",
        values: [false, false, true, true],
      },
      {
        name: "Document Storage and Management",
        values: [false, false, true, true],
      },
      {
        name: "Staff Calendar Overview",
        values: [false, false, true, true],
      },
      {
        name: "CheckIcon IN/CheckIcon OUT",
        values: [false, false, true, true],
      },
      {
        name: "Employee Worked Timetable",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Clients Management",
    features: [
      {
        name: "Client List",
        values: [false, false, true, true],
      },
      {
        name: "Client Details",
        values: [false, false, true, true],
      },
      {
        name: "Reservation Details per Client",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Marketing Tools",
    features: [
      {
        name: "CRUD Article",
        values: ["1/month", "1/month", "2/month", "2/month"],
        muted: [true, true, true, true],
      },
      {
        name: "Targeting",
        values: [true, true, true, true],
      },
    ],
  },
  {
    title: "Reports",
    features: [
      {
        name: "Dashboard Acces",
        values: [false, false, true, true],
      },
      {
        name: "Reservation Reports",
        values: [false, false, true, true],
      },
      {
        name: "Client Reports",
        values: [false, false, true, true],
      },
      {
        name: "Business Rating Reports",
        values: [false, false, true, true],
      },
      {
        name: "Sales Reports",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Stock Management",
    features: [
      {
        name: "CRUD Supplier",
        values: [false, false, true, true],
      },
      {
        name: "CRUD Order",
        values: [false, false, true, true],
      },
      {
        name: "Order History",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Transport Park",
    features: [
      {
        name: "Transport List",
        values: [false, false, true, true],
      },
      {
        name: "Assign Transport Employee",
        values: [false, false, true, true],
      },
      {
        name: "Order History",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Task Planning",
    features: [
      {
        name: "CRUD Project",
        values: [false, false, true, true],
      },
      {
        name: "CRUD Task",
        values: [false, false, true, true],
      },
      {
        name: "Task Assignment",
        values: [false, false, true, true],
      },
      {
        name: "Progress Tracking",
        values: [false, false, true, true],
      },
    ],
  },
  {
    title: "Financial Management",
    features: [
      {
        name: "Debit/Credit",
        values: [false, false, false, true],
      },
    ],
  },
];

export const ContentWrapperSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-8 w-full">
      <div className="flex flex-col items-center gap-[43px] w-full max-w-[809px]">
        <div className="flex items-center justify-center gap-6 w-full flex-wrap">
          <h1 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl text-center tracking-[0] leading-[normal]">
            Subscription plans for
          </h1>

          <div className="inline-flex items-center gap-2.5 px-6 py-4 bg-[#2d2c650d] rounded-[5px] border border-solid border-[#28282833]">
            <div className="inline-flex items-center gap-1">
              <div className="[font-family:'Onest',Helvetica] font-bold text-[#2d2c65] text-[32px] tracking-[0.64px] leading-[44.8px] whitespace-nowrap">
                Restaurante
              </div>
              <img
                className="w-8 h-8"
                alt="Icons"
                src="/figmaAssets/icons.svg"
              />
            </div>
          </div>
        </div>

        <div className="inline-flex items-center justify-center gap-6 flex-wrap">
          <div className="[font-family:'Inter',Helvetica] font-medium text-[#282828] text-sm tracking-[0] leading-[17.5px] whitespace-nowrap">
            Save with annual billing
          </div>

          <div className="flex items-center justify-end px-1 py-0.5 bg-[#2d2c65] rounded-[100px] h-8 w-[52px]">
            <div className="flex-1 self-stretch relative">
              <div className="inline-flex items-center justify-center p-1 absolute top-1/2 -translate-y-1/2 -right-3">
                <div className="inline-flex flex-col items-center justify-center gap-2 p-2 rounded-[100px]">
                  <div className="inline-flex items-center justify-center p-[11px] bg-m3syslighton-primary rounded-3xl overflow-hidden">
                    <div className="w-0.5 h-0.5 rounded-[23px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Badge className="inline-flex items-center justify-center gap-2.5 p-2.5 bg-[#282828] rounded-[10px] h-auto">
            <span className="[font-family:'Inter',Helvetica] font-bold text-white text-sm tracking-[0] leading-[17.5px] whitespace-nowrap">
              SAVE 10%
            </span>
          </Badge>
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="flex items-start w-full">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`flex h-8 items-center justify-center gap-1 px-2 py-1.5 flex-1 ${
                plan.isPopular
                  ? "bg-[#2d2c65] rounded-[40px_40px_0px_0px]"
                  : "opacity-0 bg-[#2d2c65]"
              }`}
            >
              <div className="[font-family:'Onest',Helvetica] font-semibold text-sementicscolorfgon-accent text-xs tracking-[0] leading-[13.8px] whitespace-nowrap">
                Most Popular
              </div>
              {plan.isPopular && (
                <SparklesIcon className="w-3.5 h-3.5 text-sementicscolorfgon-accent" />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center w-full">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`flex-1 rounded-none ${
                plan.isPopular
                  ? "border-2 border-[#2d2c65]"
                  : "border border-zinc-200"
              }`}
            >
              <CardContent className="flex flex-col items-start gap-10 p-5">
                <div className="flex flex-col items-start gap-1 w-full">
                  <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-[23px]">
                    {plan.name}
                  </h3>
                  <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-xs tracking-[0] leading-[15px]">
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-start gap-[15px] w-full">
                  <div className="inline-flex items-end gap-1">
                    <span className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl tracking-[0] leading-[55.2px] whitespace-nowrap">
                      {plan.price}
                    </span>
                    <span className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-xs tracking-[0] leading-[13.8px] whitespace-nowrap">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <Button
                  variant={plan.buttonVariant}
                  className={`w-full h-auto px-6 py-4 rounded-[5px] ${
                    plan.isPopular
                      ? "bg-[#2d2c65] text-white hover:bg-[#2d2c65]/90"
                      : "bg-neutral-50 border border-[#2d2c65] text-[#2d2c65] hover:bg-neutral-100"
                  }`}
                >
                  <span className="[font-family:'Onest',Helvetica] font-bold text-base tracking-[0] leading-5">
                    Start Free Trial
                  </span>
                </Button>

                <div className="flex flex-col items-start gap-2 pl-2 pr-4 w-full">
                  <div className="[font-family:'Onest',Helvetica] font-semibold text-[#909090] text-base tracking-[0] leading-[18.4px]">
                    What you get
                  </div>

                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-4 w-full"
                    >
                      <CheckIcon className="w-6 h-6 text-[#2d2c65]" />
                      <div className="flex-1 [font-family:'Onest',Helvetica] font-normal text-[#282828] text-sm tracking-[0] leading-[17.5px]">
                        {feature}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <button className="flex items-center justify-center gap-2 p-4 w-full bg-white border-r border-b border-l border-zinc-200 hover:bg-gray-50 transition-colors">
          <span className="[font-family:'Onest',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[17.6px] whitespace-nowrap">
            See all features
          </span>
          <ChevronDownIcon className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col items-end gap-4 w-full">
        <div className="relative w-full max-w-[756px]">
          <div className="flex items-center justify-center w-full pt-[11px]">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col items-center justify-center gap-2"
              >
                <div className="inline-flex flex-col items-start gap-1">
                  <div className="font-sementic-type-title-l font-[number:var(--sementic-type-title-l-font-weight)] text-[#282828] text-[length:var(--sementic-type-title-l-font-size)] tracking-[var(--sementic-type-title-l-letter-spacing)] leading-[var(--sementic-type-title-l-line-height)] whitespace-nowrap [font-style:var(--sementic-type-title-l-font-style)]">
                    {plan.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[190px] h-[45px] bg-[#2d2c6512] border-4 border-solid border-[#2d2c6566]" />
        </div>

        <div className="relative w-full">
          <div className="flex flex-col items-start w-full rounded-[10px] overflow-hidden border border-solid border-zinc-200">
            {comparisonCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="flex flex-col items-start w-full"
              >
                <div className="flex items-end gap-4 px-3 py-4 w-full bg-[#f9fbfc] border border-solid border-zinc-200">
                  <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-[23px] whitespace-nowrap">
                    {category.title}
                  </h3>
                </div>

                {category.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center justify-between pl-4 pr-0 py-0 w-full bg-white"
                  >
                    <div className="flex items-center gap-1 flex-1">
                      <div className="[font-family:'Onest',Helvetica] font-medium text-[#282828] text-base tracking-[0] leading-[18.4px] whitespace-nowrap">
                        {feature.name}
                      </div>
                      <HelpCircleIcon className="w-6 h-6 text-gray-400" />
                    </div>

                    <div className="flex items-center justify-between w-[756px]">
                      {feature.values.map((value, valueIndex) => (
                        <div
                          key={valueIndex}
                          className={`flex items-center justify-center gap-2.5 px-2 py-[18px] flex-1 border-l border-zinc-200 ${
                            valueIndex === 3 ? "border-r" : ""
                          }`}
                        >
                          {typeof value === "boolean" ? (
                            value ? (
                              <CheckIcon className="w-6 h-6 text-[#2d2c65]" />
                            ) : (
                              <XIcon className="w-6 h-6 text-gray-400" />
                            )
                          ) : (
                            <div
                              className={`[font-family:'Inter',Helvetica] font-semibold text-base tracking-[0] leading-[18.4px] whitespace-nowrap ${
                                feature.muted && feature.muted[valueIndex]
                                  ? "text-sementicscolorfgmuted"
                                  : "text-[#282828]"
                              }`}
                            >
                              {value}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="absolute top-0 left-[702px] w-[190px] h-full bg-[#2d2c6505] border-2 border-solid border-[#2d2c6566] pointer-events-none" />
        </div>

        <div className="relative w-full max-w-[756px]">
          <div className="flex items-center w-full">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className="flex-1 rounded-none border border-zinc-200"
              >
                <CardContent className="flex flex-col items-start gap-5 p-5">
                  <div className="flex flex-col items-start gap-1 w-full">
                    <h3 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-[23px]">
                      {plan.name}
                    </h3>
                    <p className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-xs tracking-[0] leading-[15px]">
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex items-start gap-[15px] w-full">
                    <div className="inline-flex items-end gap-1">
                      <span className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-[32px] tracking-[0] leading-[36.8px] whitespace-nowrap">
                        {plan.price}
                      </span>
                      <span className="[font-family:'Onest',Helvetica] font-normal text-[#282828] text-xs tracking-[0] leading-[13.8px] whitespace-nowrap">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <Button
                    variant={plan.buttonVariant}
                    className={`w-full h-auto px-6 py-4 rounded-[5px] ${
                      plan.isPopular
                        ? "bg-[#2d2c65] text-white hover:bg-[#2d2c65]/90"
                        : "bg-neutral-50 border border-[#2d2c65] text-[#2d2c65] hover:bg-neutral-100"
                    }`}
                  >
                    <span className="[font-family:'Onest',Helvetica] font-bold text-base tracking-[0] leading-5">
                      Start Free Trial
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="absolute top-px left-[378px] w-[190px] h-[197px] bg-[#2d2c6505] border-2 border-solid border-[#2d2c6566] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
