import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Navbar } from '@/components/Navbar';
import { getAllPosts, getPostBySlug } from '@/data/blogPosts';
import { formatDate, formatDateISO, getRelatedPosts } from '@/utils/blog';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Artikel nicht gefunden',
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://www.hostgains.at/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.hostgains.at/blog/${post.slug}`,
      type: 'article',
      publishedTime: formatDateISO(post.publishedAt),
      modifiedTime: post.updatedAt ? formatDateISO(post.updatedAt) : undefined,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          alt: post.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.featuredImage],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = getRelatedPosts(post, allPosts, 3);

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
        url: 'https://www.hostgains.at/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.hostgains.at/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.hostgains.at/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.hostgains.at/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.hostgains.at/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-sand-light">
        <Navbar />

        {/* Hero Section */}
        <section className="bg-hostgains pt-28 pb-12 sm:pt-36 sm:pb-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl lg:max-w-6xl">
            <nav className="text-sm text-white/60 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li>/</li>
                <li className="text-white truncate max-w-[200px]">{post.title}</li>
              </ol>
            </nav>

            <span className="inline-block bg-sand text-hostgains text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-display leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <span className="font-medium text-white">{post.author.name}</span>
                  <span className="block text-xs text-white/60">{post.author.role}</span>
                </div>
              </div>
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {post.readingTime} Min. Lesezeit
              </span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl lg:max-w-6xl -mt-8">
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <main id="main-content" className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl lg:max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Table of Contents - Sidebar */}
              {post.tableOfContents && post.tableOfContents.length > 0 && (
                <aside className="lg:w-64 lg:flex-shrink-0">
                  <div className="lg:sticky lg:top-24 bg-white rounded-xl p-6 shadow-sm">
                    <h2 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
                      Inhalt
                    </h2>
                    <nav>
                      <ul className="space-y-2 text-sm">
                        {post.tableOfContents.map((item) => (
                          <li key={item.id} className={item.level === 3 ? 'ml-4' : ''}>
                            <a
                              href={`#${item.id}`}
                              className="text-gray-600 hover:text-hostgains transition-colors block py-1"
                            >
                              {item.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </aside>
              )}

              {/* Article Body */}
              <article className="flex-1 bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg">
                <div
                  className="blog-content prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-sand text-hostgains text-sm px-4 py-1.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <section className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Weitere Artikel</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={relatedPost.featuredImage}
                          alt={relatedPost.featuredImageAlt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs font-bold text-hostgains">{relatedPost.category}</span>
                        <h3 className="font-bold text-gray-900 mt-1 line-clamp-2 group-hover:text-hostgains transition-colors">
                          {relatedPost.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-hostgains font-medium hover:underline"
              >
                <ArrowLeft size={18} />
                Zurück zur Übersicht
              </Link>
            </div>
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
