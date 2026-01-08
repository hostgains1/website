import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const trustIndicators = [
    "Keine Fixkosten",
    "24/7 Gästebetreuung",
    "Lokales Team aus Kärnten"
  ];

  return (
    <header
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="hostgains - Professionelle Kurzzeitvermietung und Airbnb Management in Kärnten"
    >
      {/* Background Image - Ferienwohnung am Wörthersee */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-woerthersee.jpg')`
        }}
        role="img"
        aria-label="Panoramablick auf den Wörthersee in Kärnten – ideale Region für Kurzzeitvermietung und Ferienwohnungen"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-hostgains/85 via-hostgains/75 to-hostgains/90" />
      </div>

      {/* Geometric Accent Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg className="absolute top-0 right-0 w-1/2 h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-white" />
          <line x1="20" y1="100" x2="100" y2="20" stroke="currentColor" strokeWidth="0.3" className="text-white" />
        </svg>
        <motion.div
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 1, rotate: 45 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-20 right-20 w-64 h-64 border border-white/10 hidden lg:block"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 45 }}
          animate={{ opacity: 1, rotate: 45 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-40 left-10 w-32 h-32 border border-white/5 hidden lg:block"
        />
      </div>

      <div className="container relative z-10 px-5 sm:px-6 md:px-8 pt-20 sm:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-5 sm:mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sand rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-white/90 font-medium tracking-wide">
              Klagenfurt & Umgebung
            </span>
          </motion.div>

          {/* Main Headline - H1 mit Haupt-Keywords */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.2] sm:leading-tight mb-5 sm:mb-6"
          >
            <span className="block sm:inline">Kurzzeitvermietung</span>
            <span className="hidden sm:inline"> </span>
            <span className="block sm:inline">Kärnten:</span>
            <br className="hidden sm:block" />
            <span className="block mt-1 sm:mt-0 text-white/90">Deine Ferienwohnung,</span>
            <span className="inline-block mt-2 sm:mt-0 text-[#314a43] bg-sand px-2 sm:px-3 py-0.5 rounded">
              unser Management.
            </span>
          </motion.h1>

          {/* Subheadline - LLM-optimiert, zitierfähig */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2"
          >
            <strong>hostgains</strong> ist dein lokaler Partner für professionelles Airbnb- und Booking.com-Management am Wörthersee.
            Wir steigern deine Auslastung um bis zu 28% – du genießt passive Einnahmen ohne Aufwand.
          </motion.p>

          {/* CTA Buttons - mit beschreibenden Anchor-Texten */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            <Link
              to="/analyse"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-sand hover:bg-sand-light text-[#314a43] font-bold text-base sm:text-lg py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg shadow-black/20 transition-all hover:scale-[1.02] hover:shadow-xl w-full sm:w-auto"
              title="Kostenlose Potenzialanalyse für deine Ferienwohnung in Kärnten"
            >
              Kostenlose Potenzialanalyse
              <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 text-white/90 hover:text-white font-medium py-3 px-5 sm:px-6 rounded-xl border border-white/30 hover:border-white/50 hover:bg-white/5 transition-all text-sm sm:text-base w-full sm:w-auto"
              title="Erfahre, wie Kurzzeitvermietung mit hostgains funktioniert"
            >
              So funktioniert's
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 mb-8 sm:mb-12"
          >
            {trustIndicators.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-white/80">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-sand" />
                <span className="text-xs sm:text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator - hidden on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="hidden sm:block"
          >
            <a
              href="#problem"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest">Mehr erfahren</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Diagonal Cut */}
      <div
        className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-24 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />
    </header>
  );
};
