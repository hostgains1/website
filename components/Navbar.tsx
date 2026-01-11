import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isBlogPage = location.pathname.startsWith('/blog');

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
  }, [location]);

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
    fixed top-0 left-0 right-0 z-40 transition-all duration-300
    ${isScrolled || !isHomePage
      ? 'bg-white shadow-md py-3'
      : 'bg-transparent py-4 sm:py-6'
    }
  `;

  const linkClasses = `
    font-medium transition-colors
    ${isScrolled || !isHomePage
      ? 'text-gray-700 hover:text-hostgains'
      : 'text-white/90 hover:text-white'
    }
  `;

  const ctaClasses = `
    group inline-flex items-center justify-center gap-2 font-bold text-sm sm:text-base py-2.5 px-5 sm:py-3 sm:px-6 rounded-xl transition-all hover:scale-[1.02]
    ${isScrolled || !isHomePage
      ? 'bg-hostgains hover:bg-hostgains-dark text-white shadow-lg'
      : 'bg-sand hover:bg-sand-light text-[#314a43]'
    }
  `;

  return (
    <>
      <nav className={navbarClasses} role="navigation" aria-label="Hauptnavigation">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24 max-w-[1920px]">
          <div className="flex items-center justify-between">
            {/* Logo - Fixed width for balance */}
            <div className="flex-1 flex justify-start">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (isHomePage) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    window.location.href = '/';
                  }
                }}
                className="relative z-50 cursor-pointer"
                aria-label="hostgains - Zum Seitenanfang"
              >
                <img
                  src="/logo.png"
                  alt="hostgains"
                  className={`h-10 sm:h-12 w-auto transition-all duration-300 ${
                    isScrolled || !isHomePage ? '' : 'brightness-0 invert'
                  }`}
                />
              </a>
            </div>

            {/* Desktop Navigation - Centered (hidden on blog pages) */}
            {!isBlogPage && (
              <div className="hidden lg:flex items-center justify-center gap-8">
                {navLinks.map((link) =>
                  link.href.startsWith('/') ? (
                    <Link
                      key={link.href}
                      to={link.href}
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
              <Link to="/analyse" className={ctaClasses}>
                Kostenlose Analyse
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
                <Link to="/analyse" className={ctaClasses}>
                  Kostenlose Analyse
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                {/* Navigation Links */}
                <nav className="flex-1">
                  <ul className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {link.href.startsWith('/') ? (
                          <Link
                            to={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block py-4 text-xl font-medium text-gray-900 hover:text-hostgains border-b border-gray-100 transition-colors"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="block py-4 text-xl font-medium text-gray-900 hover:text-hostgains border-b border-gray-100 transition-colors"
                          >
                            {link.label}
                          </a>
                        )}
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6"
                >
                  <Link
                    to="/analyse"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-3 w-full bg-hostgains hover:bg-hostgains-dark text-white font-bold text-lg py-4 px-6 rounded-xl shadow-lg transition-all"
                  >
                    Kostenlose Analyse
                    <ArrowRight size={20} />
                  </Link>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="pt-8 text-center text-sm text-gray-500"
                >
                  <p>Fragen? Ruf uns an:</p>
                  <a href="tel:+4367762180829" className="text-hostgains font-medium">
                    +43 677 62180829
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
