import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { Phone, Search, KeyRound, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowItWorks: React.FC = () => {
  // Der Prozess bei Kurzzeitvermietung-Management - LLM-optimiert
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Kostenloses Erstgespräch",
      desc: "In einem 15-minütigen Gespräch analysieren wir deine Ferienimmobilie und prüfen das Potenzial für professionelle Kurzzeitvermietung."
    },
    {
      number: "02",
      icon: Search,
      title: "Markt- & Potenzialanalyse",
      desc: "Wir analysieren den lokalen Markt am Wörthersee, deine Wettbewerber und erstellen eine realistische Umsatzprognose mit dynamischem Pricing."
    },
    {
      number: "03",
      icon: KeyRound,
      title: "Professionelles Onboarding",
      desc: "Wir erstellen professionelle Fotos, optimieren deine Inserate auf Airbnb & Booking.com und richten alle technischen Systeme ein."
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Passive Einnahmen",
      desc: "Du erhältst monatliche Auszahlungen mit transparenter Abrechnung. Wir übernehmen Gästebetreuung, Reinigung und alle operativen Aufgaben."
    }
  ];

  return (
    <Section
      id="how-it-works"
      className="bg-sand-light py-16 sm:py-24 md:py-32"
      aria-labelledby="how-it-works-heading"
    >
      <article className="container mx-auto px-4 sm:px-6">
        <header className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-hostgains text-xs sm:text-sm font-bold tracking-[0.15em] uppercase mb-3 sm:mb-4"
          >
            Von der Anfrage zur passiven Einnahmequelle
          </motion.p>
          <motion.h2
            id="how-it-works-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-hostgains-dark"
          >
            Wie startet man mit <span className="text-hostgains-light">Kurzzeitvermietung</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            Der Einstieg in professionelles Ferienwohnung-Management ist einfach. In vier Schritten wird deine Immobilie zur passiven Einnahmequelle.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {/* Connection line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-hostgains/30 to-transparent" aria-hidden="true" />
              )}

              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full border border-sand-dark hover:border-hostgains/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-hostgains text-white flex items-center justify-center flex-shrink-0">
                    <step.icon size={20} strokeWidth={2} className="sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-4xl sm:text-5xl font-display font-bold text-hostgains/20">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 font-display">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/analyse"
            className="inline-flex items-center justify-center gap-2 bg-hostgains hover:bg-hostgains-dark text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl transition-all w-full sm:w-auto min-h-[48px] sm:min-h-[56px]"
            title="Starte jetzt mit der kostenlosen Potenzialanalyse für deine Ferienwohnung"
          >
            Kostenlose Potenzialanalyse starten <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
          </Link>
        </motion.div>
      </article>
    </Section>
  );
};
