'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Das Problem', href: '#problem' },
  { label: 'Die Lösung', href: '#solution' },
  { label: 'So funktioniert\'s', href: '#how-it-works' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isBlogPage = pathname.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();

      if (!isHomePage) {
        // Navigate to home page first, then scroll
        window.location.href = '/' + href;
        return;
      }

      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    } else {
      // For regular links like /blog, just close mobile menu
      setIsMobileMenuOpen(false);
    }
  };

  const navbarClasses = `
    fixed left-3 right-3 sm:left-12 sm:right-12 lg:left-24 lg:right-24 xl:left-36 xl:right-36 2xl:left-48 2xl:right-48 z-40 transition-all duration-300 rounded-xl sm:rounded-2xl border border-white/20
    ${isScrolled || !isHomePage
      ? 'top-2 sm:top-3 bg-white/90 backdrop-blur-lg shadow-lg py-1.5 sm:py-3'
      : 'top-[56px] sm:top-[60px] bg-white/20 backdrop-blur-lg shadow-lg py-1.5 sm:py-3'
    }
  `;

  const linkClasses = `
    font-medium transition-colors
    ${isScrolled || !isHomePage
      ? 'text-gray-700 hover:text-hostgains'
      : 'text-white hover:text-white/80'
    }
  `;

  const ctaClasses = `
    group inline-flex items-center justify-center gap-2 font-bold text-sm sm:text-base py-2.5 px-5 sm:py-3 sm:px-6 rounded-xl transition-all hover:scale-[1.02]
    ${isScrolled || !isHomePage
      ? 'bg-hostgains hover:bg-hostgains-dark text-white shadow-lg'
      : 'bg-sand hover:bg-sand-light text-hostgains'
    }
  `;

  return (
    <>
      <nav className={navbarClasses} role="navigation" aria-label="Hauptnavigation">
        <div className="w-full mx-auto px-3 sm:px-8 lg:px-10 flex items-center">
          <div className="flex items-center justify-between">
            {/* Logo - Fixed width for balance */}
            <div className="flex-1 flex justify-start">
              <Link
                href="/"
                className="relative z-50 cursor-pointer"
                aria-label="hostgains - Zum Seitenanfang"
                onClick={(e) => {
                  if (isHomePage) {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                <Image
                  src="/logo.png"
                  alt="hostgains"
                  width={120}
                  height={48}
                  className={`h-9 sm:h-12 w-auto transition-all duration-300 ${
                    isScrolled || !isHomePage ? '' : 'brightness-0 invert'
                  }`}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation - Centered (hidden on blog pages) */}
            {!isBlogPage && (
              <div className="hidden lg:flex items-center justify-center gap-8">
                {navLinks.map((link) =>
                  link.href.startsWith('/') ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={linkClasses}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={linkClasses}
                    >
                      {link.label}
                    </a>
                  )
                )}
              </div>
            )}

            {/* Desktop CTA - Fixed width for balance */}
            <div className={`hidden lg:flex flex-1 justify-end ${isBlogPage ? '' : ''}`}>
              <Link href="/analyse" className={ctaClasses}>
                Jetzt Potenzial checken
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button (hidden on blog pages) */}
            {!isBlogPage && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden relative z-50 p-2 rounded-lg transition-colors ${
                  isMobileMenuOpen
                    ? 'text-gray-900'
                    : isScrolled || !isHomePage
                      ? 'text-gray-900 hover:bg-gray-100'
                      : 'text-white hover:bg-white/10'
                }`}
                aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            )}

            {/* Mobile CTA (shown on blog pages instead of menu button) */}
            {isBlogPage && (
              <div className="lg:hidden">
                <Link href="/analyse" className={ctaClasses}>
                  Jetzt Potenzial checken
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Glasmorphism Style */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-hostgains/40 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel - Extended Navbar Style */}
          <div className="absolute left-3 right-3 top-[56px] bg-white/20 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl animate-fade-in">
            {/* Header with Logo and Close */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="cursor-pointer"
              >
                <Image
                  src="/logo.png"
                  alt="hostgains"
                  width={100}
                  height={40}
                  className="h-7 w-auto brightness-0 invert"
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Menü schließen"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links - Centered */}
            <nav className="py-4">
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-3 text-center text-base font-medium text-white hover:bg-white/10 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="block py-3 text-center text-base font-medium text-white hover:bg-white/10 transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile CTA */}
            <div className="px-4 pb-3">
              <Link
                href="/analyse"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-sand hover:bg-sand-light text-hostgains font-bold text-sm py-3 px-4 rounded-xl shadow-lg transition-all"
              >
                Jetzt Potenzial checken
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Contact Info */}
            <div className="px-4 pb-4 text-center">
              <a href="tel:+4367762180829" className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                +43 677 62180829
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
