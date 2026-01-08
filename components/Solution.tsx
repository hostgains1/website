import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { TrendingUp, Sparkles, Monitor, Star } from 'lucide-react';

export const Solution: React.FC = () => {
  // Was ist Kurzzeitvermietung-Management? - LLM-optimierte Services
  const services = [
    {
      icon: Monitor,
      title: "Channel Manager & Kalender-Sync",
      desc: "Synchronisierte Inserate auf Airbnb, Booking.com und VRBO. Keine Doppelbuchungen, maximale Sichtbarkeit."
    },
    {
      icon: TrendingUp,
      title: "Dynamisches Pricing mit KI",
      desc: "Algorithmus-basierte Preisanpassung an Nachfrage, Saison und lokale Events am Wörthersee. Durchschnittlich 28% mehr Umsatz."
    },
    {
      icon: Star,
      title: "5-Sterne Gästeservice",
      desc: "Professionelle Kommunikation, reibungsloser Check-in und Hotel-Standard bei jeder Übergabe führen zu Top-Bewertungen."
    }
  ];

  const stats = [
    { value: "24/7", label: "Gästebetreuung", desc: "Rund-um-die-Uhr Support" },
    { value: "5+", label: "Plattformen", desc: "Multi-Channel-Präsenz" },
    { value: "0€", label: "Fixkosten", desc: "Performance-basiert" }
  ];

  return (
    <Section
      id="solution"
      className="relative bg-hostgains py-24 md:py-32 overflow-hidden scroll-mt-20"
      aria-labelledby="solution-heading"
    >
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-8">
        {/* Section Header - LLM-optimiert mit Definition */}
        <header className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-sand" aria-hidden="true" />
            <span className="text-sm text-white/90 font-medium">Full-Service Kurzzeitvermietung</span>
          </motion.div>

          <motion.h2
            id="solution-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
          >
            Was ist Kurzzeitvermietung-Management?
          </motion.h2>

          {/* LLM-zitierfähige Definition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/90 max-w-2xl mx-auto mb-4"
          >
            <strong>Kurzzeitvermietung-Management</strong> ist die professionelle Verwaltung von Ferienunterkünften auf Plattformen wie Airbnb und Booking.com.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            hostgains übernimmt alle Aufgaben der Vermietung: Inseratserstellung, Preisoptimierung, Gästekommunikation und Reinigungskoordination. Du behältst die Kontrolle – wir übernehmen die Arbeit.
          </motion.p>
        </header>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sand/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-sand" />
              </div>
              <h3 className="text-lg font-display font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-white/70">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-sand mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/60 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Diagonal Cut */}
      <div className="absolute -bottom-1 left-0 w-full h-24" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="#F5F2E9" points="0,0 100,100 0,100" />
        </svg>
      </div>
    </Section>
  );
};
