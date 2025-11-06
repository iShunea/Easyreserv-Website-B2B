import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

export const MainContentSection = (): JSX.Element => {
  const sections = [
    {
      title: "Research Your Destination",
      content:
        "Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.",
    },
    {
      title: "Plan Your Itinerary",
      content:
        "While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.\n\nVitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.",
    },
    {
      title: "Pack Lightly and Smartly",
      content:
        "Packing can be a daunting task, but with some careful planning and smart choices, you can pack light and efficiently. Start by making a packing list and sticking to it, focusing on versatile and comfortable clothing that can be mixed and matched. Invest in quality luggage and packing organizers to maximize space and minimize wrinkles.",
    },
    {
      title: "Stay Safe and Healthy",
      content:
        "Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy. This includes researching any required vaccinations or medications, staying hydrated, washing your hands frequently, and using sunscreen and insect repellent. It's also essential to keep your valuables safe and secure and to be aware of your surroundings at all times.",
    },
    {
      title: "Immerse Yourself in the Local Culture",
      content:
        "One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.",
    },
    {
      title: "Capture Memories",
      content:
        "Finally, don't forget to capture memories of your journey. Whether it's through photographs, journaling, or souvenirs, preserving the moments and experiences of your travels can bring joy and nostalgia for years to come. However, it's also essential to be present in the moment and not let technology distract you from the beauty of your surroundings.",
    },
  ];

  return (
    <article className="flex w-full items-start">
      <div className="flex flex-col items-start justify-center gap-8 w-full">
        <div className="items-center gap-8 flex flex-col w-full">
          <header className="flex flex-col items-start gap-5 w-full">
            <div className="flex flex-col items-start gap-4 w-full">
              <h1 className="text-[length:var(--heading-h1-semibold-font-size)] leading-[var(--heading-h1-semibold-line-height)] w-full font-heading-h1-semibold font-[number:var(--heading-h1-semibold-font-weight)] text-[#282828] tracking-[var(--heading-h1-semibold-letter-spacing)] [font-style:var(--heading-h1-semibold-font-style)]">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h1>
            </div>

            <div className="inline-flex items-center gap-6">
              <div className="inline-flex items-center gap-2">
                <Avatar className="w-7 h-7">
                  <AvatarImage
                    src="/figmaAssets/image-2.png"
                    alt="Tracey Wilson"
                  />
                  <AvatarFallback>TW</AvatarFallback>
                </Avatar>

                <span className="font-body-b5-medium font-[number:var(--body-b5-medium-font-weight)] text-secondary-500 text-[length:var(--body-b5-medium-font-size)] tracking-[var(--body-b5-medium-letter-spacing)] leading-[var(--body-b5-medium-line-height)] whitespace-nowrap [font-style:var(--body-b5-medium-font-style)]">
                  Tracey Wilson
                </span>
              </div>

              <time className="text-secondary-500 text-[length:var(--body-b5-regular-font-size)] leading-[var(--body-b5-regular-line-height)] whitespace-nowrap font-body-b5-regular font-[number:var(--body-b5-regular-font-weight)] tracking-[var(--body-b5-regular-letter-spacing)] [font-style:var(--body-b5-regular-font-style)]">
                August 20, 2024
              </time>
            </div>
          </header>

          <img
            className="w-full h-[462px] rounded-[10px] object-cover"
            alt="Featured article image"
            src="/figmaAssets/image.png"
          />

          <div className="flex items-start w-full">
            <p className="flex-1 font-article-lg-regular font-[number:var(--article-lg-regular-font-weight)] text-[#282828] text-[length:var(--article-lg-regular-font-size)] tracking-[var(--article-lg-regular-letter-spacing)] leading-[var(--article-lg-regular-line-height)] [font-style:var(--article-lg-regular-font-style)]">
              Traveling is an enriching experience that opens up new horizons,
              exposes us to different cultures, and creates memories that last a
              lifetime. However, traveling can also be stressful and
              overwhelming, especially if you don't plan and prepare adequately.
              In this blog article, we'll explore tips and tricks for a
              memorable journey and how to make the most of your travels.
              <br />
              <br />
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </p>
          </div>

          {sections.slice(0, 2).map((section, index) => (
            <section
              key={index}
              className="flex-col gap-4 flex items-start w-full"
            >
              <h2 className="text-[length:var(--heading-h3-semibold-font-size)] leading-[var(--heading-h3-semibold-line-height)] w-full font-heading-h3-semibold font-[number:var(--heading-h3-semibold-font-weight)] text-[#282828] tracking-[var(--heading-h3-semibold-letter-spacing)] [font-style:var(--heading-h3-semibold-font-style)]">
                {section.title}
              </h2>

              <p className="w-full font-article-lg-regular font-[number:var(--article-lg-regular-font-weight)] text-[#282828] text-[length:var(--article-lg-regular-font-size)] tracking-[var(--article-lg-regular-letter-spacing)] leading-[var(--article-lg-regular-line-height)] [font-style:var(--article-lg-regular-font-style)]">
                {section.content.split("\n\n").map((paragraph, pIndex) => (
                  <span key={pIndex}>
                    {paragraph}
                    {pIndex < section.content.split("\n\n").length - 1 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                  </span>
                ))}
              </p>
            </section>
          ))}

          <blockquote className="flex items-center gap-8 p-8 w-full bg-secondary-50 rounded-xl border-l-4 [border-left-style:solid] border-[#e8e8ea]">
            <p className="flex-1 font-article-quote-regular font-[number:var(--article-quote-regular-font-weight)] [font-style:var(--article-quote-regular-font-style)] text-[#282828] text-[length:var(--article-quote-regular-font-size)] tracking-[var(--article-quote-regular-letter-spacing)] leading-[var(--article-quote-regular-line-height)]">
              " Traveling can expose you to new environments and potential
              health risks, so it's crucial to take precautions to stay safe and
              healthy. "
            </p>
          </blockquote>

          <img
            className="w-full h-[462px] rounded-[10px] object-cover"
            alt="Article content image"
            src="/figmaAssets/image-1.png"
          />

          {sections.slice(2).map((section, index) => (
            <section
              key={index + 2}
              className="flex-col gap-4 flex items-start w-full"
            >
              <h2 className="text-[length:var(--heading-h3-semibold-font-size)] leading-[var(--heading-h3-semibold-line-height)] w-full font-heading-h3-semibold font-[number:var(--heading-h3-semibold-font-weight)] text-[#282828] tracking-[var(--heading-h3-semibold-letter-spacing)] [font-style:var(--heading-h3-semibold-font-style)]">
                {section.title}
              </h2>

              <p className="w-full font-article-lg-regular font-[number:var(--article-lg-regular-font-weight)] text-[#282828] text-[length:var(--article-lg-regular-font-size)] tracking-[var(--article-lg-regular-letter-spacing)] leading-[var(--article-lg-regular-line-height)] [font-style:var(--article-lg-regular-font-style)]">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        <section className="items-start gap-12 flex flex-col w-full">
          <div className="flex-col gap-4 flex items-start w-full">
            <h2 className="text-[length:var(--heading-h3-semibold-font-size)] leading-[var(--heading-h3-semibold-line-height)] w-full font-heading-h3-semibold font-[number:var(--heading-h3-semibold-font-weight)] text-[#282828] tracking-[var(--heading-h3-semibold-letter-spacing)] [font-style:var(--heading-h3-semibold-font-style)]">
              Conclusion:
            </h2>

            <p className="w-full font-article-lg-regular font-[number:var(--article-lg-regular-font-weight)] text-[#282828] text-[length:var(--article-lg-regular-font-size)] tracking-[var(--article-lg-regular-letter-spacing)] leading-[var(--article-lg-regular-line-height)] [font-style:var(--article-lg-regular-font-style)]">
              Traveling is an art form that requires a blend of planning,
              preparation, and spontaneity. By following these tips and tricks,
              you can make the most of your journey and create memories that
              last a lifetime. So pack your bags, embrace the adventure, and
              enjoy the ride.
            </p>
          </div>
        </section>

        <footer className="inline-flex items-start justify-center gap-8">
          <span className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-[normal]">
            Share on
          </span>

          <img
            className="flex-[0_0_auto]"
            alt="Social media sharing icons"
            src="/figmaAssets/frame-2147223550.svg"
          />
        </footer>
      </div>
    </article>
  );
};
