import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-woerthersee.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      </div>

      {/* Geometric Accent Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 right-0 w-1/2 h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line x1="0" y1="100" x2="100" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-primary-foreground" />
          <line x1="20" y1="100" x2="100" y2="20" stroke="currentColor" strokeWidth="0.3" className="text-primary-foreground" />
        </svg>
        <div className="absolute top-20 right-20 w-64 h-64 border border-primary-foreground/10 rotate-45 animate-float hidden md:block" />
      </div>

      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 animate-fade-in">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-soft" />
            <span className="text-sm text-primary-foreground/90 font-medium tracking-wide">
              Klagenfurt am Wörthersee
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-in animation-delay-100">
            Ihre Ferienwohnung.
            <br />
            <span className="relative inline-block">
              Unser
              <span className="relative ml-3">
                Management.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 8 Q 50 0, 100 8" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in animation-delay-200 font-body">
            Wir steigern Ihre Auslastung, maximieren Ihren Umsatz – 
            und Sie? Genießen einfach die Ergebnisse.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#kontakt">
                Kostenlose Beratung
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#leistungen">
                Unsere Leistungen
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mt-12 animate-fade-in animation-delay-400">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Keine Fixkosten</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">24/7 Betreuung</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">100% Regional</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#problem" className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors">
          <span className="text-xs uppercase tracking-widest">Mehr erfahren</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>

      {/* Bottom Diagonal Cut */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-background" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }} />
    </section>
  );
};

export default HeroSection;
