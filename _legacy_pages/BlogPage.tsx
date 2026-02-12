import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BlogCard } from '../components/BlogCard';
import { getAllPosts } from '../data/blogPosts';
import { getCategories, filterByCategory, searchPosts, paginatePosts } from '../utils/blog';

const POSTS_PER_PAGE = 9;

export const BlogPage: React.FC = () => {
  const allPosts = useMemo(() => getAllPosts(), []);
  const categories = useMemo(() => getCategories(allPosts), [allPosts]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  // Filter posts
  const filteredPosts = useMemo(() => {
    let result = allPosts;

    if (searchQuery) {
      result = searchPosts(result, searchQuery);
    }

    if (selectedCategory) {
      result = filterByCategory(result, selectedCategory);
    }

    return result;
  }, [allPosts, searchQuery, selectedCategory]);

  // Paginate filtered posts
  const { posts: paginatedPosts, totalPages } = useMemo(
    () => paginatePosts(filteredPosts, currentPage, POSTS_PER_PAGE),
    [filteredPosts, currentPage]
  );

  // Reset page when filters change
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setCurrentPage(1);
  };

  const hasActiveFilters = searchQuery || selectedCategory;

  // Featured post (first post when no filters)
  const featuredPost = !hasActiveFilters && currentPage === 1 ? paginatedPosts[0] : null;
  const gridPosts = featuredPost ? paginatedPosts.slice(1) : paginatedPosts;

  return (
    <>
      <SEO
        title="Blog | Tipps für Kurzzeitvermietung & Airbnb"
        description="Expertenwissen zu Kurzzeitvermietung, Airbnb-Optimierung, dynamisches Pricing und Gästebetreuung. Praxistipps für mehr Buchungen und höhere Umsätze."
        canonical="https://hostgains.at/blog"
        ogType="website"
      />

      {/* Article List Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'hostgains Blog',
            description: 'Expertenwissen zu Kurzzeitvermietung und Ferienwohnung-Management',
            url: 'https://hostgains.at/blog',
            publisher: {
              '@type': 'Organization',
              name: 'hostgains',
              logo: {
                '@type': 'ImageObject',
                url: 'https://hostgains.at/logo.png',
              },
            },
            blogPost: allPosts.slice(0, 10).map((post) => ({
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.description,
              url: `https://hostgains.at/blog/${post.slug}`,
              datePublished: post.publishedAt,
              author: {
                '@type': 'Person',
                name: post.author.name,
              },
            })),
          }),
        }}
      />

      <div className="min-h-screen bg-sand-light">
        <Navbar />

        {/* Hero Section */}
        <section className="bg-hostgains pt-24 pb-12 sm:pt-32 sm:pb-16">
          <div className="container mx-auto px-4 sm:px-6">
            <Breadcrumbs items={[{ label: 'Blog' }]} variant="dark" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Der hostgains Blog
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl">
              Expertenwissen rund um Kurzzeitvermietung, Airbnb-Optimierung und
              Ferienwohnung-Management in Kärnten.
            </p>
          </div>
        </section>

        <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-grow max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Artikel durchsuchen..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-sand-dark bg-white focus:outline-none focus:ring-2 focus:ring-hostgains/20 focus:border-hostgains transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="sm:hidden flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-xl border border-sand-dark"
            >
              <Filter size={18} />
              <span>Filter</span>
              {selectedCategory && (
                <span className="w-5 h-5 bg-hostgains text-white text-xs rounded-full flex items-center justify-center">
                  1
                </span>
              )}
            </button>
          </div>

          {/* Filters */}
          <AnimatePresence>
            {(showFilters || window.innerWidth >= 640) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mb-8 overflow-hidden sm:!h-auto sm:!opacity-100"
              >
                {/* Categories */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Kategorien</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleCategoryChange(null)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                        !selectedCategory
                          ? 'bg-hostgains text-white'
                          : 'bg-white text-gray-700 hover:bg-sand border border-sand-dark'
                      }`}
                    >
                      Alle
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat.slug}
                        onClick={() => handleCategoryChange(cat.name)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                          selectedCategory === cat.name
                            ? 'bg-hostgains text-white'
                            : 'bg-white text-gray-700 hover:bg-sand border border-sand-dark'
                        }`}
                      >
                        {cat.name} ({cat.count})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-sm text-hostgains hover:underline flex items-center gap-1"
                  >
                    <X size={14} />
                    Filter zurücksetzen
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Info */}
          <div className="mb-6 text-gray-600">
            {filteredPosts.length === allPosts.length ? (
              <span>{allPosts.length} Artikel</span>
            ) : (
              <span>
                {filteredPosts.length} von {allPosts.length} Artikeln
              </span>
            )}
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-8">
              <BlogCard post={featuredPost} featured />
            </div>
          )}

          {/* Post Grid */}
          {gridPosts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 mb-4">
                Keine Artikel gefunden. Versuche andere Suchbegriffe oder Filter.
              </p>
              <button
                onClick={clearFilters}
                className="text-hostgains font-medium hover:underline"
              >
                Alle Artikel anzeigen
              </button>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="flex justify-center gap-2 mt-12" aria-label="Pagination">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-white border border-sand-dark text-gray-700 hover:bg-sand disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Zurück
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    currentPage === page
                      ? 'bg-hostgains text-white'
                      : 'bg-white border border-sand-dark text-gray-700 hover:bg-sand'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-white border border-sand-dark text-gray-700 hover:bg-sand disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Weiter
              </button>
            </nav>
          )}

          {/* Newsletter CTA */}
          <section className="mt-16 bg-hostgains rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Keine Tipps mehr verpassen
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Erhalte die neuesten Artikel und exklusive Tipps zur Kurzzeitvermietung
              direkt in dein Postfach.
            </p>
            <Link
              to="/analyse"
              className="inline-flex items-center gap-2 bg-sand hover:bg-sand-light text-hostgains font-bold px-6 py-3 rounded-xl transition-all hover:scale-[1.02]"
            >
              Kostenlose Analyse anfordern
              <ArrowRight size={18} />
            </Link>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};
