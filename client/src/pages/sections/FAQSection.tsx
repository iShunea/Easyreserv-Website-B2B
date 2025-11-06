import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/Container";
import { useTranslation } from "@/hooks/useTranslation";

export const FAQSection = (): JSX.Element => {
  const { t } = useTranslation();
  const [openFaqAccordion, setOpenFaqAccordion] = React.useState("faq-0");
  
  const faqItems = t("faq_section.items", { returnObjects: true }) as Array<{ question: string; answer: string }>;

  return (
    <div className="w-full py-16 bg-[#282828]">
      <Container>
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          <h2 className="[font-family:'Onest',Helvetica] font-bold text-white text-4xl md:text-5xl tracking-[0] leading-[52.8px]">
            {t("faq_section.title")}
          </h2>

          <p className="[font-family:'Onest',Helvetica] font-normal text-white text-lg tracking-[-0.36px] leading-[27px]">
            {t("faq_section.description")}
          </p>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <Accordion
            type="single"
            collapsible
            value={openFaqAccordion}
            onValueChange={setOpenFaqAccordion}
            className="w-full"
          >
            {faqItems.slice(0, 9).map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-b border-[#3f4e5b]"
              >
                <AccordionTrigger className="px-0 py-5 hover:no-underline">
                  <span className={`text-left text-lg leading-[27px] [font-family:'Onest',Helvetica] font-normal tracking-[-0.36px] transition-colors ${
                    openFaqAccordion === `faq-${index}` ? 'text-white' : 'text-[#999999]'
                  }`}>
                    {item.question}
                  </span>
                </AccordionTrigger>
                {item.answer && (
                  <AccordionContent className="px-0 pb-5">
                    <p className="text-base leading-6 [font-family:'Onest',Helvetica] font-normal text-white tracking-[0]">
                      {item.answer}
                    </p>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <Accordion
            type="single"
            collapsible
            value={openFaqAccordion}
            onValueChange={setOpenFaqAccordion}
            className="w-full"
          >
            {faqItems.slice(9).map((item, index) => (
              <AccordionItem
                key={index + 9}
                value={`faq-${index + 9}`}
                className="border-b border-[#3f4e5b]"
              >
                <AccordionTrigger className="px-0 py-5 hover:no-underline">
                  <span className={`text-left text-lg leading-[27px] [font-family:'Onest',Helvetica] font-normal tracking-[-0.36px] transition-colors ${
                    openFaqAccordion === `faq-${index + 9}` ? 'text-white' : 'text-[#999999]'
                  }`}>
                    {item.question}
                  </span>
                </AccordionTrigger>
                {item.answer && (
                  <AccordionContent className="px-0 pb-5">
                    <p className="text-base leading-6 [font-family:'Onest',Helvetica] font-normal text-white tracking-[0]">
                      {item.answer}
                    </p>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
};
