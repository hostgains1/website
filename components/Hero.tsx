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


      <div className="container relative z-10 px-4 sm:px-6 md:px-8 pt-24 sm:pt-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline - H1 mit Haupt-Keywords */}
          <h1 className="font-display text-[1.75rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.15] sm:leading-tight mb-4 sm:mb-6 animate-fade-in">
            <span className="hidden sm:block">Kurzzeitvermietung Kärnten:</span>
            <span className="block sm:mt-1 text-white/90">Deine Ferienwohnung,</span>
            <span className="inline-block mt-1 sm:mt-1 text-[#314a43] bg-sand px-3 py-1 rounded">
              unser Management.
            </span>
          </h1>

          {/* Subheadline - Kompakt mit Highlight */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed px-2 animate-fade-in animation-delay-100">
            Bis zu <strong className="text-sand">28% mehr Auslastung</strong> – <strong>ohne Aufwand</strong>. Wir managen deine <strong>Ferienwohnung am Wörthersee</strong> komplett – von <strong>Inserat</strong> bis <strong>Gästekommunikation</strong>.
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
              className="inline-flex items-center justify-center gap-2 text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl border-2 border-white/40 hover:border-white/70 hover:bg-white/10 transition-all text-sm sm:text-base backdrop-blur-sm"
              title="Erfahre, wie Kurzzeitvermietung mit hostgains funktioniert"
            >
              So funktioniert's
            </a>
          </div>

          {/* Trust Indicators - horizontal scrollable on mobile */}
          <div className="flex flex-row flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-6 md:gap-8 mb-6 sm:mb-12 overflow-x-auto pb-2 sm:pb-0 -mx-5 px-5 sm:mx-0 sm:px-0 animate-fade-in animation-delay-300 scrollbar-hide">
            {trustIndicators.map((item, index) => (
              <div key={index} className="flex items-center gap-1.5 sm:gap-2 text-white/90 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 sm:px-4 sm:py-2 whitespace-nowrap shrink-0">
                <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sand" />
                <span className="text-xs sm:text-sm font-medium">{item}</span>
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
