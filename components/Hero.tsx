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

      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <span className="w-2 h-2 bg-sand rounded-full animate-pulse" />
            <span className="text-sm text-white/90 font-medium tracking-wide">
              Klagenfurt & Umgebung
            </span>
          </motion.div>

          {/* Main Headline - H1 mit Haupt-Keywords */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Kurzzeitvermietung Kärnten:
            <br />
            <span className="text-white/90">Deine Ferienwohnung,</span>
            <br />
            <span className="relative inline-block text-[#314a43] bg-sand px-3 rounded">
              unser Management.
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#314a43]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 8 Q 50 0, 100 8" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </motion.h1>

          {/* Subheadline - LLM-optimiert, zitierfähig */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            <strong>hostgains</strong> ist dein lokaler Partner für professionelles Airbnb- und Booking.com-Management am Wörthersee.
            Wir steigern deine Auslastung um bis zu 28% – du genießt passive Einnahmen ohne Aufwand.
          </motion.p>

          {/* CTA Buttons - mit beschreibenden Anchor-Texten */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Link
              to="/analyse"
              className="group inline-flex items-center justify-center gap-3 bg-sand hover:bg-sand-light text-[#314a43] font-bold text-lg py-4 px-8 rounded-xl shadow-lg shadow-black/20 transition-all hover:scale-[1.02] hover:shadow-xl"
              title="Kostenlose Potenzialanalyse für deine Ferienwohnung in Kärnten"
            >
              Kostenlose Potenzialanalyse
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 text-white/90 hover:text-white font-medium py-3 px-6 rounded-xl border border-white/30 hover:border-white/50 hover:bg-white/5 transition-all"
              title="Erfahre, wie Kurzzeitvermietung mit hostgains funktioniert"
            >
              So funktioniert Kurzzeitvermietung
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-12"
          >
            {trustIndicators.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-white/80">
                <Check className="w-5 h-5 text-sand" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator - moved higher */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
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
        className="absolute bottom-0 left-0 w-full h-24 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        aria-hidden="true"
      />
    </header>
  );
};
