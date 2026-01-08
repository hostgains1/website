import { AlertCircle, Clock, TrendingDown, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Leerer Kalender",
    description: "Ihre Wohnung steht leer, während andere ausgebucht sind. Potenzielle Einnahmen verschwinden – Tag für Tag."
  },
  {
    icon: Clock,
    title: "Endloser Aufwand",
    description: "Gästekommunikation, Reinigung, Schlüsselübergabe... Alles bleibt an Ihnen hängen. Zeit, die Sie nicht haben."
  },
  {
    icon: HelpCircle,
    title: "Chaos statt System",
    description: "Verschiedene Plattformen, unklare Prozesse, kein Überblick. Es fühlt sich an wie ein Nebenjob."
  },
  {
    icon: AlertCircle,
    title: "Zu wenig Umsatz",
    description: "Der Aufwand steht in keinem Verhältnis zum Ertrag. So macht Vermieten keinen Spaß."
  }
];

const ProblemSection = () => {
  return (
    <section id="problem" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Geometric Overlay */}
      <div className="geo-overlay" />
      
      <div className="container relative z-10 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-display font-semibold uppercase tracking-[0.2em] text-primary bg-primary/10 rounded-full">
              Das Problem
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Kommt Ihnen das
              <span className="text-gradient"> bekannt</span> vor?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Als Eigentümer einer Ferienwohnung kennen Sie diese Herausforderungen nur zu gut.
            </p>
          </div>

          {/* Problem Cards - Diagonal Layout */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`floating-card group bg-card rounded-2xl p-8 border border-border/50 ${
                  index % 2 === 1 ? "md:translate-y-8" : ""
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-destructive/10 text-destructive group-hover:bg-destructive group-hover:text-destructive-foreground transition-colors duration-300">
                    <problem.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-body">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Emotional Hook */}
          <div className="mt-16 text-center">
            <p className="text-xl md:text-2xl font-display font-medium text-foreground">
              Das muss nicht so sein.
              <span className="text-primary"> Es geht auch anders.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Diagonal Transition */}
      <div className="absolute -bottom-1 left-0 w-full h-24">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="hsl(var(--primary))" points="0,100 100,0 100,100" />
        </svg>
      </div>
    </section>
  );
};

export default ProblemSection;
