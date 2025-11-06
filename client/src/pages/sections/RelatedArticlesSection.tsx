import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { BlogArticle } from "@/lib/blogApi";

interface RelatedArticlesSectionProps {
  relatedArticles: BlogArticle[];
}

export const RelatedArticlesSection = ({ relatedArticles }: RelatedArticlesSectionProps): JSX.Element | null => {
  if (!relatedArticles || relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="flex flex-col w-full items-start gap-10 px-4 md:px-[10%] py-16 bg-[#f8f9fa]">
      <h2 className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-[56px] tracking-[0] leading-normal">
        Continuă să citești
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
        {relatedArticles.map((article) => (
          <Link key={article.slug} to={`/blog/${article.slug}`}>
            <Card className="flex flex-col border-0 shadow-none cursor-pointer hover:shadow-lg transition-shadow" data-testid={`card-related-${article.slug}`}>
              <CardContent className="flex flex-col items-center justify-center gap-2.5 p-0">
                <img
                  className="w-full h-60 rounded-[5px] object-cover"
                  alt={article.title}
                  src={article.image}
                />

                <div className="flex flex-col items-start gap-4 w-full">
                  <h3 className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-xl tracking-[0] leading-[28px]">
                    {article.title}
                  </h3>
                </div>

                <div className="flex items-center gap-5 w-full">
                  <time className="[font-family:'Onest',Helvetica] font-normal text-[#909090] text-base tracking-[0] leading-normal">
                    {article.displayDate}
                  </time>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
