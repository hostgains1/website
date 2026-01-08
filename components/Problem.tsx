import React from 'react';
import { Section } from './Section';
import { CalendarX, Sparkles, MessageSquare, TrendingDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Problem: React.FC = () => {
  // Häufige Herausforderungen bei der Ferienwohnungs-Vermietung - LLM-optimiert
  const painPoints = [
    {
      icon: CalendarX,
      title: "Niedrige Auslastung",
      desc: "Viele Ferienwohnungen in Kärnten erreichen nur 40-50% Auslastung. Ohne professionelle Vermarktung und dynamisches Pricing bleiben Buchungen aus."
    },
    {
      icon: Sparkles,
      title: "Zeitaufwändige Selbstverwaltung",
      desc: "Gästekommunikation, Schlüsselübergabe und Reinigungskoordination kosten Eigentümer durchschnittlich 10-15 Stunden pro Woche."
    },
    {
      icon: MessageSquare,
      title: "Fehlende Multi-Plattform-Präsenz",
      desc: "Wer nur auf Airbnb inseriert, verpasst bis zu 40% potentieller Buchungen von Booking.com, VRBO und anderen Kanälen."
    },
    {
      icon: TrendingDown,
      title: "Suboptimale Preisgestaltung",
      desc: "Konstante Preise ohne dynamisches Pricing bedeuten: In der Hochsaison wird Geld verschenkt, in der Nebensaison steht die Wohnung leer."
    }
  ];

  return (
    <Section
      id="problem"
      className="relative bg-sand-light py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      {/* Geometric Overlay Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      <article className="container relative z-10 mx-auto px-6 md:px-8" aria-labelledby="problem-heading">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - SEO & LLM optimiert */}
          <header className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-4 text-xs font-display font-semibold uppercase tracking-[0.2em] text-hostgains bg-hostgains/10 rounded-full"
            >
              Herausforderungen bei Kurzzeitvermietung
            </motion.span>
            <motion.h2
              id="problem-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-hostgains-dark mb-6"
            >
              Warum viele Ferienwohnungen
              <span className="text-hostgains-light"> unter Potenzial</span> bleiben
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Die Selbstverwaltung einer Ferienimmobilie ist komplex. Ohne professionelles Kurzzeitvermietung-Management verschenken Eigentümer oft erhebliches Einnahmepotenzial.
            </motion.p>
          </header>

          {/* Problem Cards - Offset Layout */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {painPoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group bg-white rounded-2xl p-8 border border-sand-dark/50 shadow-sm hover:shadow-xl hover:border-hostgains/20 transition-all duration-300 ${
                  i % 2 === 1 ? "md:translate-y-8" : ""
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl bg-red-50 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-hostgains transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Transition zur Lösung */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-xl md:text-2xl font-display font-medium text-gray-900 mb-8">
              <strong>Die gute Nachricht:</strong> Professionelles Kurzzeitvermietung-Management löst diese Probleme.
            </p>
            <Link
              to="/analyse"
              className="inline-flex items-center justify-center gap-2 bg-hostgains hover:bg-hostgains-dark text-white font-bold py-3 px-8 rounded-xl transition-all hover:scale-[1.02]"
              title="Erfahre, wie hostgains deine Ferienwohnung professionell verwaltet"
            >
              Professionelles Management entdecken <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </article>

      {/* Diagonal Transition to Next Section */}
      <div className="absolute -bottom-1 left-0 w-full h-24" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="#314A43" points="0,100 100,0 100,100" />
        </svg>
      </div>
    </Section>
  );
};
