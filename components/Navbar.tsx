'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Das Problem', href: '#market-stats' },
  { label: 'Die Lösung', href: '#solution' },
  { label: 'So funktioniert\'s', href: '#how-it-works' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // pathname can be null before the router hydrates on the client — default to true to prevent logo flash
  const isHomePage = pathname == null ? true : pathname === '/';
  const isBlogPage = pathname?.startsWith('/blog') ?? false;

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

  // Navbar outer wrapper: fixed position, full width, centered container
  const navbarClasses = `
    fixed left-0 right-0 z-40 transition-all duration-300 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 top-2
  `;

  // Inner container: max-width constraint, auto margins for centering
  // Height uses CSS variables for consistency
  const navbarInnerClasses = `
    max-w-[1350px] mx-auto rounded-xl sm:rounded-2xl border border-white/20 transition-all duration-300
    h-14 lg:h-16
    ${isScrolled || !isHomePage
      ? 'bg-white/90 backdrop-blur-lg shadow-lg'
      : 'bg-white/20 backdrop-blur-lg shadow-lg'
    }
  `;

  // Navigation links: fixed text sizes, no shrinking
  const linkClasses = `
    font-medium transition-colors whitespace-nowrap shrink-0
    text-sm xl:text-base
    flex items-center h-14 lg:h-16
    ${isScrolled || !isHomePage
      ? 'text-gray-700 hover:text-hostgains'
      : 'text-white hover:text-white/80'
    }
  `;

  // CTA button: fixed sizes across breakpoints, no scaling down
  const ctaClasses = `
    group inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all hover:scale-[1.02] shrink-0 whitespace-nowrap
    text-sm py-2.5 px-4 xl:py-3 xl:px-6 xl:text-base
    ${isScrolled || !isHomePage
      ? 'bg-hostgains hover:bg-hostgains-dark text-white shadow-lg'
      : 'bg-sand hover:bg-sand-light text-hostgains'
    }
  `;

  return (
    <>
      <nav className={navbarClasses} role="navigation" aria-label="Hauptnavigation">
        <div className={navbarInnerClasses}>
          {/* Main flex container: 3-column layout for true centering
              - Left column (flex-1): Logo, left-aligned
              - Center column (shrink-0): Navigation, truly centered
              - Right column (flex-1): CTA, right-aligned
              The flex-1 columns ensure equal space on both sides */}
          <div className="flex items-center justify-between h-full px-3 sm:px-4 md:px-5 lg:px-8">
            {/* Left column - Logo container (flex-1 for equal spacing) */}
            <div className="flex-1 flex items-center justify-start min-w-0">
              <Link
                href="/"
                className="relative z-50 cursor-pointer shrink-0"
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
                  className={`h-9 md:h-10 lg:h-12 w-auto transition-[filter] duration-300 ${
                    isScrolled || !isHomePage ? '' : 'brightness-0 invert'
                  }`}
                  priority
                />
              </Link>
            </div>

            {/* Center column - Navigation (shrink-0 to stay fixed size, truly centered) */}
            {!isBlogPage && (
              <nav className="hidden lg:flex items-center justify-center gap-3 xl:gap-5 2xl:gap-8 shrink-0">
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
              </nav>
            )}

            {/* Right column - CTA container (flex-1 for equal spacing, content right-aligned) */}
            <div className={`flex-1 hidden lg:flex items-center justify-end min-w-0 ${isBlogPage ? '' : ''}`}>
              <Link href="/analyse" className={ctaClasses}>
                <span className="hidden lg:inline">Jetzt Potenzial checken</span>
                <span className="lg:hidden">Potenzial checken</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />
              </Link>
            </div>

            {/* Mobile Menu Button - visible below lg breakpoint (hidden on blog pages) */}
            {!isBlogPage && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden relative z-50 p-2 rounded-lg transition-colors shrink-0 ${
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

            {/* Mobile CTA (shown on blog pages below lg breakpoint) */}
            {isBlogPage && (
              <div className="lg:hidden shrink-0">
                <Link href="/analyse" className={ctaClasses}>
                  <span className="hidden sm:inline">Jetzt Potenzial checken</span>
                  <span className="sm:hidden">Analyse</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Glasmorphism Style (visible below lg) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-hostgains/40 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel - Extended Navbar Style */}
          <div className="absolute left-3 right-3 top-[44px] sm:top-[56px] bg-white/20 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl animate-fade-in">
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
                  width={120}
                  height={48}
                  className="h-9 w-auto brightness-0 invert"
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
