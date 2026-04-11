import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Navbar } from '@/components/Navbar';
import { getAllPosts } from '@/data/blogPosts';
import { formatDate } from '@/utils/blog';

export const metadata: Metadata = {
  title: 'Blog | Kurzzeitvermietung Tipps & Insights',
  description: 'Expertenwissen für Ferienwohnungs-Eigentümer: Marktanalysen, Pricing-Strategien, Optimierungstipps und Best Practices für erfolgreiche Kurzzeitvermietung in Kärnten.',
  alternates: {
    canonical: 'https://www.hostgains.at/blog',
  },
  openGraph: {
    title: 'Blog | hostgains Kurzzeitvermietung',
    description: 'Expertenwissen für Ferienwohnungs-Eigentümer in Kärnten.',
    url: 'https://www.hostgains.at/blog',
    type: 'website',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.hostgains.at/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://www.hostgains.at/blog',
    },
  ],
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-sand-light">
        <Navbar />

        {/* Hero Section */}
        <section className="bg-hostgains pt-28 pb-16 sm:pt-36 sm:pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            <nav className="text-sm text-white/60 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li>/</li>
                <li className="text-white">Blog</li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-display">
              Blog
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Expertenwissen für Ferienwohnungs-Eigentümer: Marktanalysen, Pricing-Strategien und Best Practices.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <main id="main-content" className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    {/* Featured Image */}
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.featuredImageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-hostgains text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-hostgains transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {formatDate(post.publishedAt)}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {post.readingTime} Min.
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
