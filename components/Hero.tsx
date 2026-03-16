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
      className="relative min-h-svh flex flex-col overflow-hidden"
      role="banner"
      aria-label="hostgains - Professionelle Kurzzeitvermietung und Airbnb Management in Kärnten"
    >
      {/* Background Video - Drohnenflug über den Wörthersee */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          poster="/hero-woerthersee.webp"
          style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
        >
          <source src="/wörthersee loop.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay - abgeschwächt für mehr Bild-Wirkung */}
        <div className="absolute inset-0 bg-gradient-to-b from-hostgains/70 via-hostgains/50 to-hostgains/80" />
      </div>

      {/* Spacer to account for fixed header (marquee + navbar)
          Uses CSS variable --hero-offset defined in globals.css
          This prevents content from being hidden behind the fixed header */}
      <div
        className="shrink-0 relative z-10"
        style={{ height: 'var(--hero-offset)' }}
        aria-hidden="true"
      />

      {/* Main hero content - flexes to fill remaining space and centers content */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-4 sm:px-6 md:px-8 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline - H1 mit Haupt-Keywords */}
          <h1 className="font-display text-[2.25rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1] sm:leading-tight mb-3 sm:mb-6 animate-fade-in">
            <span className="hidden sm:block">Kurzzeitvermietung Kärnten:</span>
            <span className="block sm:mt-1 text-white/90">Deine Ferienwohnung,</span>
            {/* Mobile: einzelne Wörter mit Highlight, Desktop: ein Block */}
            <span className="hidden sm:inline-block mt-1 text-[#314a43] bg-sand px-3 py-1 rounded">
              unser Management.
            </span>
            <span className="sm:hidden flex flex-col items-center mt-0.5">
              <span className="text-[#314a43] bg-sand px-2 py-0.5 rounded-t-md">unser</span>
              <span className="text-[#314a43] bg-sand px-2 py-0.5 rounded-b-md">Management.</span>
            </span>
          </h1>

          {/* Subheadline - Kompakt mit Highlight */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-4 sm:mb-10 leading-snug sm:leading-relaxed px-2 animate-fade-in animation-delay-100">
            Bis zu <strong className="text-sand">28% mehr Auslastung</strong> – <strong>ohne Aufwand</strong>. Wir managen deine <strong>Ferienwohnung</strong> komplett – von <strong>Inserat</strong> bis <strong>Gästekommunikation</strong>.
          </p>

          {/* CTA Buttons - mit beschreibenden Anchor-Texten */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-8 animate-fade-in animation-delay-200">
            <Link
              href="/analyse"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-sand hover:bg-sand-light text-[#314a43] font-bold text-sm sm:text-lg py-3 sm:py-4 px-6 sm:px-8 rounded-xl shadow-lg shadow-black/20 transition-all hover:scale-[1.02] hover:shadow-xl w-full sm:w-auto"
              title="Jetzt Potenzial deiner Ferienwohnung in Kärnten checken"
            >
              Jetzt Potenzial checken
              <ArrowRight size={16} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-xl border-2 border-white/40 hover:border-white/70 hover:bg-white/10 transition-all text-xs sm:text-base backdrop-blur-sm"
              title="Erfahre, wie Kurzzeitvermietung mit hostgains funktioniert"
            >
              So funktioniert's
            </a>
          </div>

          {/* Trust Indicators - Pyramid layout on mobile, horizontal on desktop */}
          <div className="sm:hidden flex flex-col items-center gap-1.5 mb-4 animate-fade-in animation-delay-300">
            <div className="flex items-center justify-center gap-2">
              {trustIndicators.slice(0, 2).map((item, index) => (
                <div key={index} className="flex items-center gap-1.5 text-white/90 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 whitespace-nowrap">
                  <Check className="w-3.5 h-3.5 text-sand" />
                  <span className="text-xs font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-white/90 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 whitespace-nowrap">
              <Check className="w-3.5 h-3.5 text-sand" />
              <span className="text-xs font-medium">{trustIndicators[2]}</span>
            </div>
          </div>
          {/* Desktop Trust Indicators */}
          <div className="hidden sm:flex flex-row flex-wrap items-center justify-center gap-6 md:gap-8 mb-12 animate-fade-in animation-delay-300">
            {trustIndicators.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 whitespace-nowrap">
                <Check className="w-4 h-4 text-sand" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Scroll Indicator - jetzt auch auf Mobile */}
          <div className="animate-fade-in animation-delay-400">
            <a
              href="#problem"
              className="inline-flex flex-col items-center gap-1 sm:gap-2 text-white/60 hover:text-white/80 transition-colors"
            >
              <span className="text-[10px] sm:text-xs uppercase tracking-widest">Mehr erfahren</span>
              <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
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
