import { MailIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formFields = [
  {
    row: 1,
    fields: [
      { label: "First name", placeholder: "ex: Giorgio Marshal", type: "text" },
      { label: "Last name", placeholder: "ex: Giorgio Marshal", type: "text" },
    ],
  },
  {
    row: 2,
    fields: [
      {
        label: "Email",
        placeholder: "yourmail@gmail.com",
        type: "email",
        icon: "mail",
      },
      {
        label: "Phone",
        placeholder: "+373 XX XXX XXX",
        type: "phone",
        hasCountryCode: true,
      },
    ],
  },
  {
    row: 3,
    fields: [
      {
        label: "Type of business",
        placeholder: "Restaurant",
        type: "select",
        options: ["Restaurant"],
      },
      { label: "Company name", placeholder: "ishunearestaurant", type: "text" },
    ],
  },
  {
    row: 4,
    fields: [
      { label: "Your Role", placeholder: "CEO", type: "text" },
      {
        label: "Company size",
        placeholder: "10 - 50",
        type: "select",
        options: ["10 - 50"],
      },
    ],
  },
];

export const ContactFormSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1138px] mx-auto items-center gap-5 px-0 py-[50px] bg-white rounded-[10px] border border-solid border-zinc-200 shadow-[8px_28px_30px_#00000008]">
      <h2 className="w-full max-w-[974px] [font-family:'Onest',Helvetica] font-bold text-[#282828] text-5xl text-center tracking-[0] leading-[normal]">
        Tell us about your business
      </h2>

      <p className="w-full max-w-[674px] [font-family:'Onest',Helvetica] font-normal text-textblack text-base text-center tracking-[0] leading-[20.8px]">
        Please take a moment to fill out the contact form below so we can better
        understand your needs.
      </p>

      <div className="inline-flex flex-col items-start justify-center gap-5 w-full max-w-[974px] px-4">
        <div className="flex flex-col w-full items-start gap-5">
          {formFields.map((row) => (
            <div key={row.row} className="flex items-start gap-5 w-full">
              {row.fields.map((field, index) => (
                <div
                  key={`${row.row}-${index}`}
                  className="flex flex-col items-start gap-1.5 flex-1"
                >
                  <Label className="font-text-sm-medium text-[#384250] text-[length:var(--text-sm-medium-font-size)] leading-[var(--text-sm-medium-line-height)] font-[number:var(--text-sm-medium-font-weight)] tracking-[var(--text-sm-medium-letter-spacing)]">
                    {field.label}
                  </Label>

                  {field.type === "select" ? (
                    <Select defaultValue={field.placeholder}>
                      <SelectTrigger className="w-full bg-white rounded-lg border border-solid border-[#d2d6db] shadow-shadows-shadow-xs h-auto">
                        <SelectValue placeholder={field.placeholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {field.options?.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  ) : field.type === "phone" ? (
                    <div className="flex items-center w-full bg-white rounded-lg border border-solid border-[#d2d6db] shadow-shadows-shadow-xs">
                      <div className="flex gap-1 pl-3 pr-0 py-2 items-center">
                        <img
                          className="w-6 h-6"
                          alt="Country flag"
                          src="/figmaAssets/md.svg"
                        />
                        <img
                          className="w-5 h-5"
                          alt="Chevron down"
                          src="/figmaAssets/chevron-down.svg"
                        />
                      </div>
                      <Input
                        type="tel"
                        defaultValue={field.placeholder}
                        className="flex-1 border-0 shadow-none pl-2.5 pr-3 py-2 font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-black text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)]"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 px-3 py-2 w-full bg-white rounded-lg border border-solid border-[#d2d6db] shadow-shadows-shadow-xs">
                      <Input
                        type={field.type}
                        defaultValue={field.placeholder}
                        className="flex-1 border-0 shadow-none p-0 font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-black text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)]"
                      />
                      {field.icon === "mail" && (
                        <MailIcon className="w-5 h-5" />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="w-full max-w-[880px] [font-family:'Inter',Helvetica] font-normal text-transparent text-sm leading-[14px]">
          <span className="text-[#282828] tracking-[0] leading-[20.5px]">
            By submitting this information, you agree the following terms:
            <br />
            EasyReserv&#39;s{" "}
          </span>

          <span className="text-[#282828] tracking-[-0.04px] leading-[20.5px] underline">
            Privacy Policy
          </span>

          <span className="text-[#282828] tracking-[0] leading-[20.5px]">
            {" "}
            will govern the use of services you receive and the personal data
            you provide, respectively.
            <br />
            You also consent to receive marketing communications from EasyReserv
            about news, events, promotions, and monthly newsletters.
            <br />
            You can unsubscribe from EasyReserv emails at any time.
          </span>
        </div>
      </div>

      <Button className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4">
        <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5">
          Send
        </span>
      </Button>
    </section>
  );
};
