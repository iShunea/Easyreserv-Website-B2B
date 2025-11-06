import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/Container";
import { useTranslation } from "@/hooks/useTranslation";

export const CallToActionSection = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col w-full items-center justify-center gap-2.5 px-4 md:px-20 py-12 bg-white">
      <Container>
        <div className="col-span-12 flex flex-col items-start gap-2.5 w-full">
          <Card className="w-full rounded-[20px] border-0 bg-[linear-gradient(19deg,rgba(254,152,0,1)_0%,rgba(254,187,1,0.5)_100%)]">
            <CardContent className="flex flex-col items-start justify-center gap-8 px-8 py-12">
              <div className="flex flex-col items-start gap-4 w-full">
                <h2 className="w-full [font-family:'Onest',Helvetica] font-extrabold text-white text-4xl tracking-[0] leading-10">
                  {t('pricing_page.cta.title')}
                </h2>

                <p className="w-full [font-family:'Onest',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                  {t('pricing_page.cta.description')}
                </p>
              </div>

              <Button className="h-auto bg-white hover:bg-white/90 text-[#2d2c65] px-6 py-4 rounded-[5px]" data-testid="button-get-started">
                <span className="[font-family:'Onest',Helvetica] font-bold text-base text-center tracking-[0] leading-5">
                  {t('pricing_page.cta.cta')}
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};
