import React, { useMemo, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2, Linkedin, Twitter, Facebook, Link2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TableOfContents } from '../components/TableOfContents';
import { RelatedArticles } from '../components/RelatedArticles';
import { getPostBySlug, getAllPosts } from '../data/blogPosts';
import { formatDate, formatDateISO, getRelatedPosts } from '../utils/blog';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = useMemo(() => (slug ? getPostBySlug(slug) : null), [slug]);
  const allPosts = useMemo(() => getAllPosts(), []);
  const relatedPosts = useMemo(
    () => (post ? getRelatedPosts(post, allPosts, 3) : []),
    [post, allPosts]
  );

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // 404 handling
  if (!post) {
    return (
      <div className="min-h-screen bg-sand-light flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-hostgains mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Artikel nicht gefunden</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-hostgains text-white px-6 py-3 rounded-xl hover:bg-hostgains-dark transition-colors"
          >
            <ArrowLeft size={18} />
            Zurück zum Blog
          </Link>
        </div>
      </div>
    );
  }

  const articleUrl = `https://hostgains.at/blog/${post.slug}`;

  // Share functions
  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`,
      '_blank'
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(post.title)}`,
      '_blank'
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`,
      '_blank'
    );
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      alert('Link kopiert!');
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Article Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.featuredImage,
    datePublished: formatDateISO(post.publishedAt),
    dateModified: post.updatedAt ? formatDateISO(post.updatedAt) : formatDateISO(post.publishedAt),
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'hostgains',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hostgains.at/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    wordCount: post.content.split(/\s+/).length,
    url: articleUrl,
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        canonical={articleUrl}
        ogImage={post.featuredImage}
        ogImageAlt={post.featuredImageAlt}
        ogType="article"
        publishedTime={formatDateISO(post.publishedAt)}
        modifiedTime={post.updatedAt ? formatDateISO(post.updatedAt) : undefined}
        author={post.author.name}
        section={post.category}
        tags={post.tags}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-sand-light">
        <Navbar />

        <article>
          {/* Header */}
          <header className="bg-hostgains pt-24 pb-8 sm:pt-32 sm:pb-12">
            <div className="container mx-auto px-4 sm:px-6">
              <Breadcrumbs
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: post.category, href: `/blog?category=${encodeURIComponent(post.category)}` },
                  { label: post.title },
                ]}
                variant="dark"
              />

              {/* Category Tag */}
              <span className="inline-block bg-sand/20 text-sand text-sm font-medium px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white/80">
                {/* Author */}
                <div className="flex items-center gap-3">
                  {post.author.avatar ? (
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-sand/20 flex items-center justify-center">
                      <User size={20} />
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-white">{post.author.name}</p>
                    <p className="text-sm text-white/60">{post.author.role}</p>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                </div>

                {/* Reading Time */}
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{post.readingTime} Min. Lesezeit</span>
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="container mx-auto px-4 sm:px-6 -mt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={post.featuredImage}
                alt={post.featuredImageAlt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Content Grid */}
          <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="grid lg:grid-cols-[1fr_280px] gap-8 lg:gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {/* Article Content */}
                <div
                  className="blog-content prose prose-lg max-w-none prose-a:text-hostgains prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-sand-dark">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        to={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="px-3 py-1.5 bg-sand hover:bg-sand-dark text-gray-700 rounded-full text-sm transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <div className="mt-8 p-6 bg-white rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <Share2 size={18} className="text-gray-600" />
                      <span className="font-medium text-gray-900">Artikel teilen</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={shareOnLinkedIn}
                        className="w-10 h-10 rounded-full bg-sand hover:bg-[#0077B5] hover:text-white text-gray-600 flex items-center justify-center transition-colors"
                        aria-label="Auf LinkedIn teilen"
                      >
                        <Linkedin size={18} />
                      </button>
                      <button
                        onClick={shareOnTwitter}
                        className="w-10 h-10 rounded-full bg-sand hover:bg-[#1DA1F2] hover:text-white text-gray-600 flex items-center justify-center transition-colors"
                        aria-label="Auf Twitter teilen"
                      >
                        <Twitter size={18} />
                      </button>
                      <button
                        onClick={shareOnFacebook}
                        className="w-10 h-10 rounded-full bg-sand hover:bg-[#1877F2] hover:text-white text-gray-600 flex items-center justify-center transition-colors"
                        aria-label="Auf Facebook teilen"
                      >
                        <Facebook size={18} />
                      </button>
                      <button
                        onClick={copyLink}
                        className="w-10 h-10 rounded-full bg-sand hover:bg-hostgains hover:text-white text-gray-600 flex items-center justify-center transition-colors"
                        aria-label="Link kopieren"
                      >
                        <Link2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Author Box */}
                <div className="mt-8 p-6 bg-white rounded-xl">
                  <div className="flex items-start gap-4">
                    {post.author.avatar ? (
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-sand flex items-center justify-center">
                        <User size={24} className="text-gray-600" />
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-gray-900">{post.author.name}</p>
                      <p className="text-sm text-gray-500 mb-2">{post.author.role}</p>
                      <p className="text-gray-600 text-sm">
                        hostgains ist dein Partner für professionelle Kurzzeitvermietung in Kärnten.
                        Wir helfen Eigentümern, mehr aus ihrer Ferienwohnung herauszuholen.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Related Articles */}
                <RelatedArticles posts={relatedPosts} currentSlug={post.slug} />
              </motion.div>

              {/* Sidebar */}
              <aside className="lg:order-last">
                <div className="lg:sticky lg:top-24 space-y-6">
                  {/* Table of Contents */}
                  <TableOfContents items={post.tableOfContents} />

                  {/* CTA Box */}
                  <div className="bg-hostgains rounded-xl p-5 text-white">
                    <h3 className="font-bold text-lg mb-2">Kostenlose Analyse</h3>
                    <p className="text-white/80 text-sm mb-4">
                      Erfahre, wie viel du mit deiner Ferienwohnung verdienen könntest.
                    </p>
                    <Link
                      to="/analyse"
                      className="block w-full bg-sand hover:bg-sand-light text-hostgains font-bold text-center py-3 rounded-lg transition-colors"
                    >
                      Jetzt starten
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
};
