import { ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question: "Can I access EasyReserv on both the web and mobile devices?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Viverra ut tincidunt lectus sem sit sed augue a. Sed nec nulla facilisis ut congue amet diam id ipsum. Arcu aenean in tellus aliquet in morbi. Justo ridiculus accumsan montes in in arcu fermentum ac vitae.",
    defaultOpen: true,
  },
  {
    id: "item-2",
    question: "Lorem ipsum dolor sit amet consectetur. Rutrum lectus ac.",
    answer: "",
    defaultOpen: false,
  },
  {
    id: "item-3",
    question: "Lorem ipsum dolor sit amet consectetur. Condimentum ac.",
    answer: "",
    defaultOpen: false,
  },
  {
    id: "item-4",
    question: "Lorem ipsum dolor sit amet consectetur. Et gravida.",
    answer: "",
    defaultOpen: false,
  },
  {
    id: "item-5",
    question: "Lorem ipsum dolor sit amet consectetur. Etiam sagittis.",
    answer: "",
    defaultOpen: false,
  },
];

export const DescriptionTextSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-2.5 px-[180px] py-[50px] bg-[#282828] w-full">
      <div className="flex gap-5 items-start w-full">
        <div className="flex flex-col w-[530px] items-start gap-[33px]">
          <h2 className="self-stretch mt-[-1.00px] font-heading-1 font-[number:var(--heading-1-font-weight)] text-white text-[length:var(--heading-1-font-size)] tracking-[var(--heading-1-letter-spacing)] leading-[var(--heading-1-line-height)] [font-style:var(--heading-1-font-style)]">
            What is EasyReserv
          </h2>

          <p className="self-stretch font-body-large font-[number:var(--body-large-font-weight)] text-white text-[length:var(--body-large-font-size)] tracking-[var(--body-large-letter-spacing)] leading-[var(--body-large-line-height)] [font-style:var(--body-large-font-style)]">
            EasyReserv is a comprehensive solution for managing and optimizing
            your business. Mobile reservations, employee management, business
            insights, inventory management, and other features are available.
            You can save time, increase revenue, improve the client experience,
            cut costs, and increase productivity by utilizing our platform.
          </p>
        </div>

        <div className="flex flex-col items-start w-[530px]">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-b border-[#3f4e5b] data-[state=open]:border-b-0"
              >
                <AccordionTrigger className="flex items-center justify-between py-5 hover:no-underline group [&[data-state=open]>svg]:rotate-90">
                  <span className="text-left font-[number:var(--body-large-font-weight)] text-white text-[length:var(--body-large-font-size)] leading-[var(--body-large-line-height)] font-body-large tracking-[var(--body-large-letter-spacing)] [font-style:var(--body-large-font-style)] pr-4">
                    {item.question}
                  </span>
                  <ChevronRightIcon className="w-[22px] h-3.5 shrink-0 transition-transform duration-200" />
                </AccordionTrigger>
                {item.answer && (
                  <AccordionContent className="pb-5">
                    <div className="border-b border-[#3f4e5b] pb-5">
                      <p className="font-[number:var(--description-font-weight)] text-white text-[length:var(--description-font-size)] leading-[var(--description-line-height)] font-description tracking-[var(--description-letter-spacing)] [font-style:var(--description-font-style)]">
                        {item.answer}
                      </p>
                    </div>
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
