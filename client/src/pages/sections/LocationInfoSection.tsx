import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const locationData = [
  {
    country: "Moldova",
    address: "Strada Sarmizegetusa 53, Chișinău",
    hours: "Luni – Vineri, 09:00 – 18:00",
    phone: "+373 (78) 113 378",
    image: "/figmaAssets/image.png",
  },
  {
    country: "România",
    message: "În curând vom fi disponibili și în România",
    image: "/figmaAssets/image-1.png",
  },
];

export const LocationInfoSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row items-stretch gap-6">
        {locationData.map((location, index) => (
          <Card
            key={index}
            className="relative flex-1 h-[360px] overflow-hidden rounded-[10px] border-0"
          >
            <CardContent className="relative w-full h-full p-0">
              <img
                className="absolute w-full h-full top-0 left-0 object-cover z-0"
                alt={`${location.country} office`}
                src={location.image}
              />

              <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.56)_100%)]" />

              <div className="absolute left-10 bottom-10 z-[2] inline-flex flex-col items-start shadow-[0px_4px_200px_#000000]">
                <h3 className="[font-family:'Onest',Helvetica] text-brandsnowy text-xl leading-[30px] font-medium tracking-[0]">
                  {location.country}
                </h3>

                {location.message ? (
                  <p className="w-[280px] font-normal text-brandsnowy [font-family:'Onest',Helvetica] text-base tracking-[0] leading-6">
                    {location.message}
                  </p>
                ) : (
                  <>
                    <p className="w-[280px] font-normal text-brandsnowy [font-family:'Onest',Helvetica] text-base tracking-[0] leading-6">
                      {location.address}
                      <br />
                      {location.hours}
                    </p>

                    {location.phone && (
                      <a
                        href={`tel:${location.phone.replace(/\s/g, "")}`}
                        className="bg-[linear-gradient(226deg,rgba(251,223,6,1)_0%,rgba(254,183,0,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-medium [font-family:'Onest',Helvetica] text-base tracking-[0] leading-6"
                      >
                        {location.phone}
                      </a>
                    )}
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
