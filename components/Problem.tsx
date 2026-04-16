'use client';
import React from 'react';
import { Section } from './Section';
import { Clock4, Layers, BadgePercent, ArrowRight, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Problem: React.FC = () => {
  // Häufige Herausforderungen bei der Ferienwohnungs-Vermietung - LLM-optimiert
  const painPoints = [
    {
      icon: AlertCircle,
      title: "Niedrige Auslastung",
      desc: "Viele Ferienwohnungen in Kärnten erreichen nur 40-50% Auslastung. Ohne professionelle Vermarktung und dynamisches Pricing bleiben Buchungen aus."
    },
    {
      icon: Clock4,
      title: "Zeitaufwändige Selbstverwaltung",
      desc: "Gästekommunikation, Schlüsselübergabe und Reinigungskoordination kosten Eigentümer durchschnittlich 10-15 Stunden pro Woche. Professionelles Management löst das."
    },
    {
      icon: Layers,
      title: "Fehlende Multi-Plattform-Präsenz",
      desc: "Wer nur auf Airbnb inseriert, verpasst bis zu 40% potentieller Buchungen von Booking.com, VRBO und anderen Kanälen."
    },
    {
      icon: BadgePercent,
      title: "Suboptimale Preisgestaltung",
      desc: "Konstante Preise ohne dynamisches Pricing bedeuten: In der Hochsaison wird Geld verschenkt, in der Nebensaison steht die Wohnung leer."
    }
  ];

  return (
    <Section
      id="problem"
      className="relative bg-sand-light pt-12 pb-24 sm:pt-20 sm:pb-32 md:pt-32 md:pb-40 overflow-hidden -scroll-mt-20"
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

      <article className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8" aria-labelledby="problem-heading">
        <div className="max-w-6xl mx-auto">
          {/* Section Header - SEO & LLM optimiert */}
          <header className="text-center mb-8 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 rounded-full bg-hostgains/10 backdrop-blur-sm border border-hostgains/20"
            >
              <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-hostgains" aria-hidden="true" />
              <span className="text-[10px] sm:text-xs md:text-sm text-hostgains font-medium">Herausforderungen</span>
            </motion.div>
            <motion.h2
              id="problem-heading"
              initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-display text-[2rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-hostgains-dark mb-4 sm:mb-6 leading-tight"
            >
              Warum viele Ferienwohnungen
              <span className="text-hostgains-light"> unter Potenzial</span> bleiben
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Die Selbstverwaltung einer Ferienimmobilie ist komplex. Ohne professionelles Management verschenken Eigentümer oft erhebliches Einnahmepotenzial.
            </motion.p>
          </header>

          {/* Problem Cards - Single column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {painPoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.12
                }}
                className={`group relative bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:border-hostgains/30 transition-all duration-500 overflow-hidden ${
                  i % 2 === 1 ? "md:translate-y-6 lg:translate-y-8" : ""
                }`}
              >
                {/* Shiny gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/20 to-transparent opacity-60 pointer-events-none" />
                {/* Top shine effect */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                {/* Corner highlight */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-hostgains/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-start gap-3 sm:gap-4 md:gap-5">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-50 to-red-100/80 text-red-500 group-hover:from-red-500 group-hover:to-red-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-red-500/25">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-display font-bold text-gray-900 mb-1.5 sm:mb-2 group-hover:text-hostgains transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Transition zur Lösung */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 sm:mt-14 md:mt-16 text-center"
          >
            <p className="text-base sm:text-xl md:text-2xl font-display font-medium text-gray-900 mb-5 sm:mb-8 leading-snug">
              <strong>Die gute Nachricht:</strong> Wir lösen diese Probleme.
            </p>
            <Link
              href="/analyse"
              className="inline-flex items-center justify-center gap-2 bg-hostgains hover:bg-hostgains-dark text-white font-semibold py-2.5 px-5 sm:py-3 sm:px-6 rounded-lg sm:rounded-xl transition-all hover:scale-[1.02] text-sm"
              title="Erfahre, wie hostgains deine Ferienwohnung professionell verwaltet"
            >
              Management entdecken <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </article>

      {/* Diagonal Transition to Next Section */}
      <div className="absolute -bottom-1 left-0 w-full h-12 sm:h-16 md:h-24" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon fill="#314A43" points="0,100 100,0 100,100" />
        </svg>
      </div>
    </Section>
  );
};
