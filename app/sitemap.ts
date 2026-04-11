import { MetadataRoute } from 'next';
import { getAllPosts } from '@/data/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  // WICHTIG: www.hostgains.at ist die kanonische Domain (konsistent mit metadataBase in layout.tsx)
  const baseUrl = 'https://www.hostgains.at';

  // Static pages - Prioritäten für optimale Sitelinks:
  // 1.0 = Homepage
  // 0.9 = Hauptseiten (Leistungen, Airbnb Management)
  // 0.8 = Wichtige Seiten (Blog, Kontakt, Analyse)
  // Ausgeschlossen: /impressum, /datenschutzrichtlinien, /agb (noindex)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/airbnb-management`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/analyse`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamic blog posts
  const posts = getAllPosts();
  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}
