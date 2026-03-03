import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';

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
      <div className="absolute inset-0">
        <Image
          src="/hero-woerthersee.webp"
          alt="Panoramablick auf den Wörthersee in Kärnten – ideale Region für Kurzzeitvermietung und Ferienwohnungen"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-hostgains/85 via-hostgains/75 to-hostgains/90" />
      </div>

      {/* Geometric Accent Lines - CSS only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg className="absolute top-0 right-0 w-1/2 h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-white" />
          <line x1="20" y1="100" x2="100" y2="20" stroke="currentColor" strokeWidth="0.3" className="text-white" />
        </svg>
        <div className="absolute top-20 right-20 w-64 h-64 border border-white/10 hidden lg:block rotate-45 animate-fade-in animation-delay-300" />
        <div className="absolute bottom-40 left-10 w-32 h-32 border border-white/5 hidden lg:block rotate-45 animate-fade-in animation-delay-400" />
      </div>

      <div className="container relative z-10 px-5 sm:px-6 md:px-8 pt-20 sm:pt-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline - H1 mit Haupt-Keywords */}
          <h1 className="font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.15] sm:leading-tight mb-5 sm:mb-6 animate-fade-in">
            <span className="block">Kurzzeitvermietung Kärnten:</span>
            <span className="block mt-2 sm:mt-1 text-white/90">Deine Ferienwohnung,</span>
            <span className="inline-block mt-2 sm:mt-1 text-[#314a43] bg-sand px-3 py-1 rounded">
              unser Management.
            </span>
          </h1>

          {/* Subheadline - LLM-optimiert, zitierfähig */}
          <p className="text-sm sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2 animate-fade-in animation-delay-100">
            <strong>hostgains</strong> ist dein lokaler Partner für professionelles Airbnb- und Booking.com-Management am Wörthersee.
            Wir steigern deine Auslastung um bis zu 28% – du genießt passive Einnahmen ohne Aufwand.
          </p>

          {/* CTA Buttons - mit beschreibenden Anchor-Texten */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in animation-delay-200">
            <Link
              href="/analyse"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-sand hover:bg-sand-light text-[#314a43] font-bold text-base sm:text-lg py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg shadow-black/20 transition-all hover:scale-[1.02] hover:shadow-xl w-full sm:w-auto"
              title="Jetzt Potenzial deiner Ferienwohnung in Kärnten checken"
            >
              Jetzt Potenzial checken
              <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 text-white/90 hover:text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl border border-white/30 hover:border-white/50 hover:bg-white/10 transition-all text-sm sm:text-base"
              title="Erfahre, wie Kurzzeitvermietung mit hostgains funktioniert"
            >
              So funktioniert's
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 md:gap-8 mb-8 sm:mb-12 animate-fade-in animation-delay-300">
            {trustIndicators.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-white/80">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-sand" />
                <span className="text-xs sm:text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Scroll Indicator - hidden on mobile */}
          <div className="hidden sm:block animate-fade-in animation-delay-400">
            <a
              href="#problem"
              className="inline-flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest">Mehr erfahren</span>
              <ChevronDown className="w-5 h-5 animate-bounce" />
            </a>
          </div>
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
