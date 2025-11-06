import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { FooterSection } from "./sections/FooterSection";
import { BlogArticleSection } from "./sections/BlogArticleSection";
import { RelatedArticlesSection } from "./sections/RelatedArticlesSection";
import { NavigationSection } from "./sections/NavigationSection";
import { blogApi } from "@/lib/blogApi";
import NotFound from "@/pages/not-found";
import { SEO } from "@/components/SEO";
import { getBlogArticleSEO } from "@/lib/seo-config";
import { useLanguage } from "@/contexts/LanguageContext";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BlogArticle = (): JSX.Element => {
  const params = useParams<{ slug: string }>();
  const { language } = useLanguage();
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['/api/blog/articles', params.slug, language],
    queryFn: () => blogApi.getArticleBySlug(params.slug, language),
    enabled: !!params.slug
  });

  const article = data?.article;

  if (isLoading) {
    return (
      <div className="relative w-full bg-white overflow-hidden">
        <NavigationSection />
        <div className="flex w-full items-start px-4 md:px-0">
          <div className="flex flex-col items-start justify-center gap-8 w-full max-w-[1080px] mx-auto py-12">
            <div className="flex flex-col items-start gap-5 w-full">
              <Skeleton className="h-12 w-3/4" />
              <div className="flex items-center gap-6">
                <Skeleton className="h-7 w-7 rounded-full" />
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-32" />
              </div>
            </div>
            <Skeleton className="w-full h-64 md:h-[462px] rounded-[10px]" />
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-60 w-full" />
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  if (error || !article) {
    return <NotFound />;
  }

  return (
    <div className="relative w-full bg-white overflow-hidden">
      <SEO 
        {...getBlogArticleSEO(
          article.title,
          article.excerpt,
          article.slug,
          article.author.name,
          article.publishedAt,
          article.image
        )} 
        language={language}
      />
      <NavigationSection />
      <BlogArticleSection article={article} />
      {article.relatedArticles && article.relatedArticles.length > 0 && (
        <RelatedArticlesSection relatedArticles={article.relatedArticles} />
      )}
      <FooterSection />
    </div>
  );
};
