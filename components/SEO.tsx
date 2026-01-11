import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage = 'https://hostgains.at/og-image.jpg',
  ogImageAlt = 'hostgains - Kurzzeitvermietung Kärnten',
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
  noindex = false,
}) => {
  const fullTitle = title.includes('hostgains') ? title : `${title} | hostgains`;
  const siteUrl = 'https://hostgains.at';
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : siteUrl);

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper to update or create meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Helper to update or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Basic meta tags
    setMetaTag('description', description);
    setMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');

    // Canonical
    setLinkTag('canonical', canonicalUrl);

    // Open Graph
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:image:alt', ogImageAlt, true);
    setMetaTag('og:site_name', 'hostgains', true);
    setMetaTag('og:locale', 'de_AT', true);

    // Twitter Card
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Article-specific meta tags
    if (ogType === 'article') {
      if (publishedTime) {
        setMetaTag('article:published_time', publishedTime, true);
      }
      if (modifiedTime) {
        setMetaTag('article:modified_time', modifiedTime, true);
      }
      if (author) {
        setMetaTag('article:author', author, true);
      }
      if (section) {
        setMetaTag('article:section', section, true);
      }
      if (tags && tags.length > 0) {
        tags.forEach((tag, index) => {
          setMetaTag(`article:tag:${index}`, tag, true);
        });
      }
    }

    // Cleanup function
    return () => {
      // Reset to default title on unmount (optional)
    };
  }, [fullTitle, description, canonicalUrl, ogImage, ogImageAlt, ogType, publishedTime, modifiedTime, author, section, tags, noindex]);

  return null;
};
