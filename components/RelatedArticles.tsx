import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { BlogPost } from '../types/blog';
import { formatDate } from '../utils/blog';

interface RelatedArticlesProps {
  posts: BlogPost[];
  currentSlug: string;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ posts, currentSlug }) => {
  // Filter out current post and limit to 3
  const relatedPosts = posts.filter((post) => post.slug !== currentSlug).slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-sand-dark">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Das könnte dich auch interessieren</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <article
            key={post.slug}
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <Link to={`/blog/${post.slug}`}>
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.featuredImage}
                  alt={post.featuredImageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <Calendar size={12} />
                  <span>{formatDate(post.publishedAt)}</span>
                  <span className="text-hostgains">•</span>
                  <span>{post.category}</span>
                </div>

                <h3 className="font-bold text-gray-900 group-hover:text-hostgains transition-colors line-clamp-2 mb-3">
                  {post.title}
                </h3>

                <div className="flex items-center gap-1 text-hostgains text-sm font-medium group-hover:gap-2 transition-all">
                  <span>Lesen</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Link to all articles */}
      <div className="text-center mt-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-hostgains font-semibold hover:gap-3 transition-all"
        >
          Alle Artikel ansehen
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};
