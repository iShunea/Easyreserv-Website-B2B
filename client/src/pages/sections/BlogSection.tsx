import { useState, useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";
import { Search, FileText } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { blogApi, type BlogCategory, type BlogArticle } from "@/lib/blogApi";

type Category = "all" | BlogCategory;

export const BlogSection = (): JSX.Element => {
  const { t, language } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [allArticles, setAllArticles] = useState<BlogArticle[]>([]);
  const perPage = 9;

  const categories: Category[] = ["all", "use_case", "news", "updates", "entertainment"];

  // Fetch featured article
  const { data: featuredData, isLoading: featuredLoading } = useQuery({
    queryKey: ['/api/blog/featured', language],
    queryFn: () => blogApi.getFeaturedArticle(language),
    enabled: false,
  });

  // Fetch articles list
  const { data: articlesData, isLoading: articlesLoading, error } = useQuery({
    queryKey: ['/api/blog/articles', currentPage, perPage, selectedCategory, language],
    queryFn: () => blogApi.getArticles({
      page: currentPage,
      perPage,
      category: selectedCategory === "all" ? undefined : selectedCategory,
      lang: language
    }),
    enabled: false,
  });

  // Accumulate articles when new page is loaded
  useEffect(() => {
    if (articlesData?.articles) {
      setAllArticles(prev => {
        if (currentPage === 1) {
          return articlesData.articles;
        }
        // Merge new articles, avoiding duplicates
        const existingIds = new Set(prev.map(a => a.id));
        const newArticles = articlesData.articles.filter(a => !existingIds.has(a.id));
        return [...prev, ...newArticles];
      });
    }
  }, [articlesData, currentPage]);

  // Reset articles when category or language changes
  useEffect(() => {
    setAllArticles([]);
    setCurrentPage(1);
  }, [selectedCategory, language]);

  const filteredAndSortedArticles = useMemo(() => {
    if (!allArticles.length) return [];

    let filtered = allArticles.filter((article) => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });

    filtered.sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
      } else {
        return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
      }
    });

    return filtered;
  }, [allArticles, searchTerm, sortOrder]);

  const hasMoreArticles = articlesData ? (currentPage * perPage) < articlesData.total : false;

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  const featuredArticle = featuredData?.article;

  return (
    <section className="flex flex-col w-full items-center gap-6 px-4 md:px-[10%] py-16">
      <h1 className="w-full [font-family:'Onest',Helvetica] font-bold text-[#282828] text-4xl md:text-[56px] text-center tracking-[0] leading-normal">
        {t('blog_page.title')}
      </h1>

      <div className="w-full flex flex-col gap-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder={t('blog_page.search_placeholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 h-12 bg-white border border-gray-200 rounded-lg focus-visible:ring-1 focus-visible:ring-[#2d2c65]"
            data-testid="input-search-blog"
          />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category
                    ? "bg-[#2d2c65] text-white hover:bg-[#2d2c65]/90"
                    : "bg-white text-[#282828] border-gray-200 hover:bg-gray-50"
                } rounded-full px-4 py-2 h-auto`}
                data-testid={`button-category-${category}`}
              >
                <span className="[font-family:'Onest',Helvetica] font-medium text-sm">
                  {t(`blog_page.categories.${category}`)}
                </span>
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              onClick={() => setSortOrder("newest")}
              variant={sortOrder === "newest" ? "default" : "outline"}
              className={`${
                sortOrder === "newest"
                  ? "bg-[#2d2c65] text-white hover:bg-[#2d2c65]/90"
                  : "bg-white text-[#282828] border-gray-200 hover:bg-gray-50"
              } rounded-lg px-4 py-2 h-auto`}
              data-testid="button-sort-newest"
            >
              <span className="[font-family:'Onest',Helvetica] font-medium text-sm">
                {t('blog_page.sort.newest')}
              </span>
            </Button>
            <Button
              onClick={() => setSortOrder("oldest")}
              variant={sortOrder === "oldest" ? "default" : "outline"}
              className={`${
                sortOrder === "oldest"
                  ? "bg-[#2d2c65] text-white hover:bg-[#2d2c65]/90"
                  : "bg-white text-[#282828] border-gray-200 hover:bg-gray-50"
              } rounded-lg px-4 py-2 h-auto`}
              data-testid="button-sort-oldest"
            >
              <span className="[font-family:'Onest',Helvetica] font-medium text-sm">
                {t('blog_page.sort.oldest')}
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Article Section */}
      <div className="w-full">
        <h2 className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-xl mb-4 text-center">
          {t('blog_page.featured_article')}
        </h2>
        {featuredLoading ? (
          <Card className="w-full border-0 shadow-none">
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="flex flex-col items-start gap-4 flex-1 w-full">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-5 w-32" />
                </div>
                <Skeleton className="flex-1 w-full lg:w-auto h-64 lg:h-[355px] rounded-[5px]" />
              </div>
            </CardContent>
          </Card>
        ) : featuredArticle ? (
          <Link to={`/blog/${featuredArticle.slug}`}>
            <Card className="w-full border-0 shadow-none cursor-pointer hover:shadow-lg transition-shadow" data-testid="card-featured-article">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col lg:flex-row items-center gap-6">
                  <div className="flex flex-col items-start justify-center gap-4 flex-1">
                    <div className="flex flex-col items-start gap-4 w-full">
                      <span className="inline-block px-3 py-1 bg-[#2d2c65] text-white rounded-full text-xs font-medium">
                        {t(`blog_page.categories.${featuredArticle.category}`)}
                      </span>
                      <h3 className="[font-family:'Onest',Helvetica] text-[#282828] text-2xl md:text-[32px] leading-normal font-semibold tracking-[0]">
                        {featuredArticle.title}
                      </h3>
                    </div>

                    <p className="[font-family:'Onest',Helvetica] text-[#909090] leading-normal font-normal text-base tracking-[0]">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="flex items-center gap-5">
                      <time className="[font-family:'Onest',Helvetica] text-[#282828] leading-normal font-normal text-base tracking-[0]">
                        {featuredArticle.displayDate}
                      </time>
                    </div>
                  </div>

                  <img
                    className="flex-1 w-full lg:w-auto h-64 lg:h-[355px] rounded-[5px] object-cover"
                    alt="Featured article"
                    src={featuredArticle.image}
                  />
                </div>
              </CardContent>
            </Card>
          </Link>
        ) : null}
      </div>

      {/* No Articles Yet State */}
      {error && (
        <div className="w-full flex flex-col items-center justify-center gap-4 py-16">
          <FileText className="w-16 h-16 text-[#2d2c65] opacity-30" />
          <p className="text-center text-[#282828] [font-family:'Onest',Helvetica] font-medium text-lg">
            {t('blog_page.no_articles_yet')}
          </p>
        </div>
      )}

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {filteredAndSortedArticles.map((article) => (
          <Link key={article.id} to={`/blog/${article.slug}`}>
            <Card className="h-full border-0 shadow-none cursor-pointer hover:shadow-lg transition-shadow" data-testid={`card-article-${article.slug}`}>
              <CardContent className="p-4 flex flex-col gap-2.5 h-full">
                <img
                  className="w-full h-60 rounded-[5px] object-cover"
                  alt={article.title}
                  src={article.image}
                />

                <div className="flex flex-col items-start gap-4 flex-1">
                  <span className="inline-block px-3 py-1 bg-[#2d2c65] text-white rounded-full text-xs font-medium">
                    {t(`blog_page.categories.${article.category}`)}
                  </span>
                  <h3 className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-xl tracking-[0] leading-[28px]">
                    {article.title}
                  </h3>
                </div>

                <div className="flex items-center gap-5 mt-auto">
                  <time className="[font-family:'Onest',Helvetica] font-normal text-[#909090] text-base tracking-[0] leading-normal">
                    {article.displayDate}
                  </time>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}

        {/* Loading more articles */}
        {articlesLoading && currentPage > 1 && (
          <>
            {[...Array(3)].map((_, index) => (
              <Card key={`skeleton-${index}`} className="border-0 shadow-none">
                <CardContent className="p-4 flex flex-col gap-2.5">
                  <Skeleton className="w-full h-60 rounded-[5px]" />
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-7 w-full" />
                  <Skeleton className="h-5 w-32" />
                </CardContent>
              </Card>
            ))}
          </>
        )}
      </div>

      {filteredAndSortedArticles.length === 0 && !articlesLoading && !error && (
        <p className="text-center text-gray-500 py-8">
          {t('blog_page.no_results')}
        </p>
      )}

      {hasMoreArticles && !articlesLoading && (
        <Button 
          onClick={handleLoadMore}
          className="h-auto bg-[#2d2c65] hover:bg-[#2d2c65]/90 rounded-[5px] px-6 py-4" 
          data-testid="button-load-more"
        >
          <span className="[font-family:'Onest',Helvetica] font-bold text-white text-base text-center tracking-[0] leading-5">
            {t('blog_page.load_more')}
          </span>
        </Button>
      )}
    </section>
  );
};
