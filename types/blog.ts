export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  featuredImage: string;
  featuredImageAlt: string;
  readingTime: number;
  tableOfContents: TableOfContentsItem[];
}

export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
  count: number;
}

export interface BlogPageMeta {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
}
