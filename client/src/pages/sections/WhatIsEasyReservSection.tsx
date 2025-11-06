import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/Container";
import { useTranslation } from "@/hooks/useTranslation";

export const WhatIsEasyReservSection = (): JSX.Element => {
  const { t } = useTranslation();
  
  const faqItems = [
    { 
      id: "q1", 
      question: t("what_is_section.faq.q1.question"),
      answer: t("what_is_section.faq.q1.answer")
    },
    { 
      id: "q2", 
      question: t("what_is_section.faq.q2.question"),
      answer: t("what_is_section.faq.q2.answer")
    },
    { 
      id: "q3", 
      question: t("what_is_section.faq.q3.question"),
      answer: t("what_is_section.faq.q3.answer")
    },
    { 
      id: "q4", 
      question: t("what_is_section.faq.q4.question"),
      answer: t("what_is_section.faq.q4.answer")
    }
  ];

  return (
    <div className="w-full py-16 bg-[#282828]">
      <Container>
        <div className="col-span-12 lg:col-span-6 flex flex-col items-start gap-8">
          <h2 className="[font-family:'Onest',Helvetica] font-bold text-white text-4xl md:text-5xl tracking-[0] leading-[52.8px]">
            {t("what_is_section.title")}
          </h2>

          <p className="[font-family:'Onest',Helvetica] font-normal text-white text-lg tracking-[-0.36px] leading-[27px]">
            {t("what_is_section.description")}
          </p>
        </div>

        <div className="col-span-12 lg:col-span-6 flex flex-col items-start">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={`item-${index + 1}`}
                className="border-b border-[#3f4e5b]"
              >
                <AccordionTrigger className="text-lg leading-[27px] [font-family:'Onest',Helvetica] font-normal text-white tracking-[-0.36px] hover:no-underline px-0 py-5">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-6 [font-family:'Onest',Helvetica] font-normal text-white tracking-[0] px-0 pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </div>
  );
};
