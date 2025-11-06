import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BlogArticle } from "@/lib/blogApi";
import DOMPurify from "isomorphic-dompurify";

interface BlogArticleSectionProps {
  article: BlogArticle;
}

export const BlogArticleSection = ({ article }: BlogArticleSectionProps): JSX.Element => {
  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400');
  };

  const shareOnInstagram = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link-ul a fost copiat! Poți să-l lipești acum pe Instagram.');
  };

  return (
    <article className="flex w-full items-start px-4 md:px-0">
      <div className="flex flex-col items-start justify-center gap-8 w-full max-w-[1080px] mx-auto py-12">
        <div className="items-center gap-8 flex flex-col w-full">
          <header className="flex flex-col items-start gap-5 w-full">
            <div className="flex flex-col items-start gap-4 w-full">
              <h1 className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-3xl md:text-5xl tracking-[0] leading-[1.2]">
                {article.title}
              </h1>
            </div>

            <div className="inline-flex items-center gap-6">
              <div className="inline-flex items-center gap-2">
                <Avatar className="w-7 h-7">
                  <AvatarImage
                    src={article.author.avatar}
                    alt={article.author.name}
                  />
                  <AvatarFallback>{article.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>

                <span className="[font-family:'Onest',Helvetica] font-medium text-[#909090] text-sm tracking-[0] leading-normal whitespace-nowrap">
                  {article.author.name}
                </span>
              </div>

              <time className="[font-family:'Onest',Helvetica] font-normal text-[#909090] text-sm tracking-[0] leading-normal whitespace-nowrap">
                {article.displayDate}
              </time>

              {article.readTime && (
                <span className="[font-family:'Onest',Helvetica] font-normal text-[#909090] text-sm tracking-[0] leading-normal whitespace-nowrap">
                  {article.readTime}
                </span>
              )}
            </div>
          </header>

          <img
            className="w-full h-64 md:h-[462px] rounded-[10px] object-cover"
            alt="Featured article image"
            src={article.image}
          />

          {/* Content from backend comes as HTML - sanitized for security */}
          {article.content && (
            <div 
              className="w-full [font-family:'Onest',Helvetica] font-normal text-[#282828] text-lg tracking-[0] leading-[1.8] prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.content) }}
            />
          )}

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 w-full">
              {article.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Author Bio */}
        {article.author.bio && (
          <section className="flex items-start gap-4 p-6 w-full bg-[#f8f9fa] rounded-xl">
            <Avatar className="w-16 h-16">
              <AvatarImage
                src={article.author.avatar}
                alt={article.author.name}
              />
              <AvatarFallback>{article.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="[font-family:'Onest',Helvetica] font-semibold text-[#282828] text-lg">
                {article.author.name}
              </h3>
              <p className="[font-family:'Onest',Helvetica] font-normal text-[#909090] text-base">
                {article.author.bio}
              </p>
            </div>
          </section>
        )}

        <footer className="inline-flex items-center gap-8 flex-wrap">
          <span className="[font-family:'Onest',Helvetica] font-bold text-[#282828] text-xl tracking-[0] leading-normal">
            Distribuie pe:
          </span>

          <div className="flex items-center gap-4">
            <button 
              onClick={shareOnFacebook}
              className="hover:opacity-70 transition-opacity cursor-pointer"
              aria-label="Distribuie pe Facebook"
              data-testid="button-share-facebook"
            >
              <img
                className="w-10 h-10 object-contain"
                alt="Distribuie pe Facebook"
                src="/figmaAssets/fb.svg"
              />
            </button>

            <button 
              onClick={shareOnLinkedIn}
              className="hover:opacity-70 transition-opacity cursor-pointer"
              aria-label="Distribuie pe LinkedIn"
              data-testid="button-share-linkedin"
            >
              <img
                className="w-10 h-10 object-contain"
                alt="Distribuie pe LinkedIn"
                src="/figmaAssets/Linkedin.svg"
              />
            </button>

            <button 
              onClick={shareOnInstagram}
              className="hover:opacity-70 transition-opacity cursor-pointer"
              aria-label="Distribuie pe Instagram"
              data-testid="button-share-instagram"
            >
              <img
                className="w-10 h-10 object-contain"
                alt="Distribuie pe Instagram"
                src="/figmaAssets/insta.svg"
              />
            </button>
          </div>
        </footer>
      </div>
    </article>
  );
};
