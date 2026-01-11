import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, variant = 'light' }) => {
  const isDark = variant === 'dark';

  // Generate JSON-LD structured data for breadcrumbs
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://hostgains.at/',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.href && { item: `https://hostgains.at${item.href}` }),
      })),
    ],
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className={`flex items-center flex-wrap gap-1 text-sm ${isDark ? 'text-white/70' : 'text-gray-500'}`}>
          <li className="flex items-center">
            <Link
              to="/"
              className={`flex items-center transition-colors ${isDark ? 'hover:text-white' : 'hover:text-hostgains'}`}
              aria-label="Zur Startseite"
            >
              <Home size={14} className="mr-1" />
              <span className="sr-only sm:not-sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight size={14} className={`mx-1 ${isDark ? 'text-white/50' : 'text-gray-400'}`} aria-hidden="true" />
              {item.href && index < items.length - 1 ? (
                <Link
                  to={item.href}
                  className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-hostgains'}`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-700'}`} aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};
