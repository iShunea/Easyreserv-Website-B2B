const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://easyreserv-website-b-2-b-backen.replit.app';

export type BlogCategory = "use_case" | "news" | "updates" | "entertainment";

export interface BlogAuthor {
  name: string;
  avatar: string;
  bio?: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  category: BlogCategory;
  author: BlogAuthor;
  publishedAt: string;
  displayDate: string;
  featured: boolean;
  content?: string;
  readTime?: string;
  tags?: string[];
  relatedArticles?: BlogArticle[];
}

export interface BlogListResponse {
  articles: BlogArticle[];
  total: number;
  page: number;
  perPage: number;
}

export interface BlogArticleResponse {
  article: BlogArticle;
}

export interface BlogFeaturedResponse {
  article: BlogArticle;
}

export const blogApi = {
  async getArticles(params?: {
    page?: number;
    perPage?: number;
    category?: BlogCategory;
    featured?: boolean;
    lang?: string;
  }): Promise<BlogListResponse> {
    const queryParams = new URLSearchParams();
    
    if (params?.page) queryParams.append('page', params.page.toString());
    if (params?.perPage) queryParams.append('perPage', params.perPage.toString());
    if (params?.category) queryParams.append('category', params.category);
    if (params?.featured !== undefined) queryParams.append('featured', params.featured.toString());
    if (params?.lang) queryParams.append('lang', params.lang);

    const url = `${BACKEND_URL}/api/blog/articles${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.statusText}`);
    }
    
    return response.json();
  },

  async getArticleBySlug(slug: string, lang?: string): Promise<BlogArticleResponse> {
    const queryParams = new URLSearchParams();
    if (lang) queryParams.append('lang', lang);
    
    const url = `${BACKEND_URL}/api/blog/articles/${slug}${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch article: ${response.statusText}`);
    }
    
    return response.json();
  },

  async getFeaturedArticle(lang?: string): Promise<BlogFeaturedResponse> {
    const queryParams = new URLSearchParams();
    if (lang) queryParams.append('lang', lang);
    
    const url = `${BACKEND_URL}/api/blog/featured${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch featured article: ${response.statusText}`);
    }
    
    return response.json();
  }
};
