'use client';
import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { Phone, Search, KeyRound, TrendingUp, ArrowRight, ShieldCheck, Percent, Clock, FileCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const HowItWorks: React.FC = () => {
  // Der Prozess bei Kurzzeitvermietung-Management - LLM-optimiert
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Kostenloses Erstgespräch",
      desc: "In einem kostenlosen Gespräch, analysieren wir deine Ferienimmobilie und finden heraus, ob wir zueinander passen."
    },
    {
      number: "02",
      icon: Search,
      title: "Markt- & Potenzialanalyse",
      desc: "Wir schauen uns den lokalen Markt sowie deine Wettbewerber an und entwickeln daraus eine Strategie."
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
      className="bg-sand-light py-12 sm:py-20 md:py-32"
      aria-labelledby="how-it-works-heading"
    >
      <article className="container mx-auto px-4 sm:px-6">
        <header className="text-center mb-8 sm:mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-hostgains/5 border border-hostgains/20 rounded-full px-4 py-1.5 mb-4 sm:mb-6"
          >
            <span className="text-hostgains text-[10px] sm:text-xs font-bold tracking-[0.12em] sm:tracking-[0.15em] uppercase">
              So funktioniert's
            </span>
          </motion.div>
          <motion.h2
            id="how-it-works-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[2rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-hostgains-dark leading-tight"
          >
            So übernehmen wir deine{' '}
            <span className="text-hostgains-light">Ferienwohnung</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Maximale Auslastung, optimierte Preise, zufriedene Gäste und null Stress für dich – so einfach geht's.
          </motion.p>
        </header>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-hostgains/50 via-hostgains/30 to-hostgains/10 sm:-translate-x-px" aria-hidden="true" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-start gap-4 sm:gap-8 mb-8 sm:mb-12 last:mb-0 ${
                i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 z-10">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-hostgains border-4 border-sand-light flex items-center justify-center shadow-lg shadow-hostgains/20">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-sand" />
                </div>
              </div>

              {/* Content Card */}
              <div className={`ml-16 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'}`}>
                <div className="bg-white border border-sand-dark rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 hover:border-hostgains/30 hover:shadow-lg transition-all duration-300">
                  <div className={`flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 ${i % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-sand text-hostgains flex items-center justify-center flex-shrink-0">
                      <step.icon size={22} strokeWidth={1.5} className="sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-4xl sm:text-5xl font-display font-bold text-hostgains/10">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 font-display">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>

        {/* Performance-Garantie Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-hostgains to-hostgains-dark rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-white mb-8 sm:mb-12"
        >
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-sm mb-4 sm:mb-6">
              <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-sand" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Unsere Performance-Garantie
            </h3>
            <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
              Wir verdienen nur Geld, wenn du Geld verdienst. Unser Erfolg ist direkt an deinen Umsatz gekoppelt.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:bg-white/10 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-sand/20 mb-3 sm:mb-4">
                <Percent className="w-6 h-6 sm:w-7 sm:h-7 text-sand" />
              </div>
              <h4 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2">Keine Fixkosten</h4>
              <p className="text-xs sm:text-sm text-white/70">Du zahlst nur bei Erfolg</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:bg-white/10 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-sand/20 mb-3 sm:mb-4">
                <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-sand" />
              </div>
              <h4 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2">24/7 erreichbar</h4>
              <p className="text-xs sm:text-sm text-white/70">Rund um die Uhr für dich und deine Gäste da</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:bg-white/10 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-sand/20 mb-3 sm:mb-4">
                <FileCheck className="w-6 h-6 sm:w-7 sm:h-7 text-sand" />
              </div>
              <h4 className="text-base sm:text-lg font-bold mb-1.5 sm:mb-2">Volle Transparenz</h4>
              <p className="text-xs sm:text-sm text-white/70">Detaillierte monatliche Abrechnung</p>
            </div>
          </div>

          {/* Partner Logos - subtle */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10">
            <p className="text-[10px] sm:text-xs text-white/50 text-center mb-5 uppercase tracking-wider">
              In Zusammenarbeit mit
            </p>
            <div className="flex items-center justify-center gap-8 sm:gap-14">
              <Image
                src="/partners/reinigung.jpg"
                alt="Professioneller Reinigungsservice für Ferienwohnungen in Kärnten"
                width={80}
                height={64}
                className="h-12 sm:h-16 w-auto object-contain rounded-lg"
              />
              <Image
                src="/partners/growfocus.avif"
                alt="Growfocus - Digitale Marketing Agentur für Kurzzeitvermietung"
                width={80}
                height={64}
                className="h-12 sm:h-16 w-auto object-contain mix-blend-screen"
              />
              <Image
                src="/partners/hotelscale.png"
                alt="Hotelscale - Revenue Management Software für Ferienwohnungen"
                width={80}
                height={64}
                className="h-12 sm:h-16 w-auto object-contain mix-blend-screen rounded-lg"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/analyse"
            className="inline-flex items-center justify-center gap-2 bg-hostgains hover:bg-hostgains-dark text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl transition-all w-full sm:w-auto min-h-[48px] sm:min-h-[56px]"
            title="Starte jetzt mit der kostenlosen Potenzialanalyse für deine Ferienwohnung"
          >
            Risikofrei starten <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
          </Link>
        </motion.div>
      </article>
    </Section>
  );
};
