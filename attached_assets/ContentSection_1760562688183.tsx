import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const policyItems = [
  { label: "Privacy Policy", highlighted: false },
  { label: "Cookies Policy", highlighted: false },
  { label: "Terms and Conditions", highlighted: true },
];

const articles = [
  {
    number: "Art. 1",
    content: `Physiological respiration involves the mechanisms that ensure that the composition of the functional residual capacity is kept constant, and equilibrates with the gases dissolved in the pulmonary capillary blood, and thus throughout the body. Thus, in precise usage, the words breathing and ventilation are hyponyms, not synonyms, of respiration; but this prescription is not consistently followed, even by most health care providers, because the term respiratory rate (RR) is a well-established term in health care, even though it would need to be consistently replaced with ventilation rate if the precise usage were to be followed.

The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed within this chamber during the Neolithic period, representing at least nine or ten individuals.

Physical space is often conceived in three linear dimensions, although modern physicists usually consider it, with time, to be part of a boundless four-dimensional continuum known as spacetime. The concept of space is considered to be of fundamental importance to an understanding of the physical universe. However, disagreement continues between philosophers over whether it is itself an entity, a relationship between entities, or part of a conceptual framework.

In the eighteenth century the German philosopher Immanuel Kant developed a theory of knowledge in which knowledge about space can be both a priori and synthetic. According to Kant, knowledge about space is synthetic, in that statements about space are not simply true by virtue of the meaning of the words in the statement. In his work, Kant rejected the view that space must be either a substance or relation. Instead he came to the conclusion that space and time are not discovered by humans to be objective features of the world, but imposed by us as part of a framework for organizing experience.`,
  },
  {
    number: "Art. 2",
    content: `Maxwell's equations – the foundation of classical electromagnetism – describe light as a wave that moves with a characteristic velocity. The modern view is that light needs no medium of transmission, but Maxwell and his contemporaries were convinced that light waves were propagated in a medium, analogous to sound propagating in air, and ripples propagating on the surface of a pond. This hypothetical medium was called the luminiferous aether, at rest relative to the "fixed stars" and through which the Earth moves. Fresnel's partial ether dragging hypothesis ruled out the measurement of first-order (v/c) effects, and although observations of second-order effects (v2/c2) were possible in principle, Maxwell thought they were too small to be detected with then-current technology.`,
  },
];

export const ContentSection = (): JSX.Element => {
  return (
    <section className="flex items-start gap-[35px] px-0 py-[100px]">
      <Card className="w-[403px] bg-white rounded-[30px] shadow-[0px_2px_15px_#63636333]">
        <CardContent className="p-[29px]">
          <div className="flex flex-col gap-[54px]">
            <h2 className="[font-family:'Inter',Helvetica] font-semibold text-[#282828] text-[40px] tracking-[0] leading-[44px]">
              Policies
            </h2>

            <nav className="flex flex-col gap-2">
              {policyItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`h-auto w-full justify-center p-2.5 rounded-[15px] ${
                    item.highlighted
                      ? "bg-[linear-gradient(40deg,rgba(254,152,0,0.1)_0%,rgba(254,187,1,0.1)_100%)]"
                      : ""
                  }`}
                >
                  <span className="[font-family:'Inter',Helvetica] font-medium text-[#282828] text-base tracking-[0] leading-[22px] px-0 py-[5px]">
                    {item.label}
                  </span>
                </Button>
              ))}
            </nav>
          </div>
        </CardContent>
      </Card>

      <main className="flex flex-col w-[842px] gap-2">
        <h1 className="[font-family:'Inter',Helvetica] font-medium text-[#282828] text-[56px] text-center tracking-[0] leading-[67.2px]">
          Terms and Conditions
        </h1>

        <div className="flex flex-col pt-10 bg-brandsnowy">
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#909090] text-lg tracking-[0] leading-[27px]">
            For athletes, high altitude produces two contradictory effects on
            performance. For explosive events the reduction in atmospheric
            pressure means there is less resistance from the atmosphere and the
            athlete's performance will generally be better at high altitude.
          </p>

          {articles.map((article, index) => (
            <div key={index}>
              <div className="pt-10 pb-4">
                <h3 className="[font-family:'Inter',Helvetica] font-medium text-brandcharcoal text-4xl tracking-[0] leading-[46.8px]">
                  {article.number}
                </h3>
              </div>

              <p className="[font-family:'Inter',Helvetica] font-normal text-brandcharcoal text-lg tracking-[0] leading-[31.5px] whitespace-pre-line">
                {article.content}
              </p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};
