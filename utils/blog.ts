import { BlogPost, TableOfContentsItem, BlogCategory } from '../types/blog';

// Generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// Calculate reading time (German: ~200 words per minute)
export function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

// Extract table of contents from HTML content
export function extractTableOfContents(content: string): TableOfContentsItem[] {
  const headingRegex = /<h([2-3])[^>]*id="([^"]*)"[^>]*>([^<]*)<\/h[2-3]>/g;
  const toc: TableOfContentsItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    toc.push({
      level: parseInt(match[1]),
      id: match[2],
      text: match[3].replace(/<[^>]*>/g, ''),
    });
  }

  return toc;
}

// Format date for display (German format)
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('de-AT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// Format date for schema.org (ISO 8601)
export function formatDateISO(dateString: string): string {
  return new Date(dateString).toISOString();
}

// Get unique categories from posts
export function getCategories(posts: BlogPost[]): BlogCategory[] {
  const categoryMap = new Map<string, { name: string; count: number }>();

  posts.forEach((post) => {
    const existing = categoryMap.get(post.category);
    if (existing) {
      existing.count++;
    } else {
      categoryMap.set(post.category, { name: post.category, count: 1 });
    }
  });

  return Array.from(categoryMap.entries()).map(([slug, data]) => ({
    slug: generateSlug(data.name),
    name: data.name,
    description: `Artikel zum Thema ${data.name}`,
    count: data.count,
  }));
}

// Get unique tags from posts
export function getAllTags(posts: BlogPost[]): string[] {
  const tags = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags).sort();
}

// Filter posts by category
export function filterByCategory(posts: BlogPost[], category: string): BlogPost[] {
  return posts.filter(
    (post) => generateSlug(post.category) === category || post.category === category
  );
}

// Filter posts by tag
export function filterByTag(posts: BlogPost[], tag: string): BlogPost[] {
  return posts.filter((post) =>
    post.tags.some((t) => generateSlug(t) === tag || t === tag)
  );
}

// Get related posts (by category and tags)
export function getRelatedPosts(
  currentPost: BlogPost,
  allPosts: BlogPost[],
  limit: number = 3
): BlogPost[] {
  const otherPosts = allPosts.filter((post) => post.slug !== currentPost.slug);

  // Score posts by relevance
  const scored = otherPosts.map((post) => {
    let score = 0;
    // Same category: +3 points
    if (post.category === currentPost.category) score += 3;
    // Matching tags: +1 point each
    post.tags.forEach((tag) => {
      if (currentPost.tags.includes(tag)) score += 1;
    });
    return { post, score };
  });

  // Sort by score and return top posts
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

// Paginate posts
export function paginatePosts(
  posts: BlogPost[],
  page: number,
  perPage: number = 9
): { posts: BlogPost[]; totalPages: number } {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return {
    posts: posts.slice(start, end),
    totalPages: Math.ceil(posts.length / perPage),
  };
}

// Sort posts by date (newest first)
export function sortByDate(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

// Search posts by query
export function searchPosts(posts: BlogPost[], query: string): BlogPost[] {
  const lowerQuery = query.toLowerCase();
  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.description.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

// Add IDs to headings in content for TOC
export function addHeadingIds(content: string): string {
  let counter = 0;
  return content.replace(/<h([2-3])>([^<]*)<\/h[2-3]>/g, (match, level, text) => {
    const id = generateSlug(text) || `heading-${counter++}`;
    return `<h${level} id="${id}">${text}</h${level}>`;
  });
}
