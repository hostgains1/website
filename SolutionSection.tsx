import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Camera, TrendingUp, Brush, Globe, Headphones, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Listing-Optimierung",
    description: "Professionelle Fotos, psychologisch wirksame Texte & SEO"
  },
  {
    icon: TrendingUp,
    title: "Dynamisches Pricing",
    description: "Preisoptimierung & Wettbewerbsanalyse in Echtzeit"
  },
  {
    icon: Brush,
    title: "Reinigung & Instandhaltung",
    description: "Koordination & Qualitätssicherung nach höchsten Standards"
  },
  {
    icon: Globe,
    title: "Multiplattform-Vermarktung",
    description: "Airbnb, Booking.com & weitere Kanäle gleichzeitig"
  },
  {
    icon: Headphones,
    title: "24/7 Gästebetreuung",
    description: "Kommunikation, Check-in/out & Support rund um die Uhr"
  }
];

const benefits = [
  "Mehr Buchungen durch optimierte Inserate",
  "Höhere Preise durch intelligentes Pricing",
  "Null Stress durch Full-Service Management",
  "Keine Fixkosten – nur Provision bei Erfolg"
];

const SolutionSection = () => {
  return (
    <section id="leistungen" className="relative py-24 md:py-32 bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container relative z-10 px-6 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-primary-foreground/90 font-medium">Unsere Lösung</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground leading-tight mb-6">
            Lehnen Sie sich zurück –
            <span className="text-accent"> wir kümmern uns um alles.</span>
          </h2>

          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto font-body">
            Hostgains übernimmt das komplette Management Ihrer Ferienwohnung. 
            Sie behalten die Kontrolle – wir übernehmen die Arbeit.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-display font-semibold text-primary-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-primary-foreground/70 font-body">
                {service.description}
              </p>
            </div>
          ))}
          
          {/* Highlight Card */}
          <div className="p-6 rounded-2xl bg-accent/20 border border-accent/30 flex flex-col justify-center">
            <h3 className="text-lg font-display font-semibold text-primary-foreground mb-4">
              Ihre Vorteile:
            </h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-primary-foreground/90">
                  <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-primary-foreground/60 font-medium">Gästebetreuung</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">5+</div>
            <div className="text-sm text-primary-foreground/60 font-medium">Plattformen</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2">0€</div>
            <div className="text-sm text-primary-foreground/60 font-medium">Fixkosten</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
            <a href="#kontakt">
              Kostenlose Beratung starten
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom Diagonal Cut */}
      <div className="absolute -bottom-1 left-0 w-full h-24">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="hsl(var(--background))" points="0,0 100,100 0,100" />
        </svg>
      </div>
    </section>
  );
};

export default SolutionSection;
