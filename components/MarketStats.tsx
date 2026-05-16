'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Section } from './Section';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { AlertCircle, Layers, BadgePercent, SprayCan, MessageSquare, TrendingUp, ArrowRight, Plus, Minus, Sparkles } from 'lucide-react';
import Link from 'next/link';

// Counter Animation Hook
const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startOnView || !isInView || hasStarted.current) return;
    hasStarted.current = true;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Easing function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, isInView, startOnView]);

  return { count, ref };
};

// Counter Component
const AnimatedNumber: React.FC<{ value: string; label: string }> = ({ value, label }) => {
  // Parse the number from the value string
  const numericMatch = value.match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0].replace('.', '')) : 0;
  const prefix = value.match(/^[^\d]*/)?.[0] || '';
  const suffix = value.match(/[^\d]*$/)?.[0] || '';

  const { count, ref } = useCountUp(numericValue, 1800);

  // Format the number back with dots for thousands
  const formatNumber = (num: number) => {
    return num.toLocaleString('de-DE');
  };

  return (
    <div ref={ref} className="flex-1 text-center py-5 sm:py-6 px-4 sm:px-8">
      <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-hostgains-dark mb-1">
        {prefix}{formatNumber(count)}{suffix}
      </div>
      <div className="text-xs sm:text-sm text-gray-500">
        {label}
      </div>
    </div>
  );
};

export const MarketStats: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  // Statistiken für Kärnten
  const stats = [
    { value: "35.600+", label: "Übernachtungen täglich" },
    { value: "178€", label: "Ø Preis pro Nacht" },
    { value: "38%", label: "erreichen optimale Auslastung" }
  ];

  // Herausforderungen
  const challenges = [
    {
      icon: AlertCircle,
      title: "Niedrige Auslastung",
      desc: "Viele Ferienwohnungen in Kärnten erreichen nur 40-50% Auslastung. Ohne professionelle Vermarktung und dynamisches Pricing bleiben Buchungen aus."
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

  // Accordion-Aufgaben für "Mehr Umsatz weniger Aufwand" - SEO-optimiert
  const tasks = [
    {
      icon: SprayCan,
      title: "Reinigungskoordination",
      desc: "Professionelle Reinigung deiner Ferienwohnung nach jedem Gast – koordiniert durch unser lokales Team in Kärnten. Wir organisieren Qualitätschecks nach Hotel-Standard, Wäschewechsel mit frischer Bettwäsche und Handtüchern, sowie das Nachfüllen aller Verbrauchsmaterialien. Die Reinigungspartner sind geprüft und versichert. So erhält jeder Gast eine makellose Unterkunft – ohne dass du dich um Organisation oder Terminplanung kümmern musst."
    },
    {
      icon: MessageSquare,
      title: "Gästekommunikation",
      desc: "Rund-um-die-Uhr Erreichbarkeit für deine Gäste auf Airbnb, Booking.com und allen Plattformen. Unser Team beantwortet Anfragen schnell und professionell – von der ersten Buchungsanfrage über detaillierte Check-in-Instruktionen bis zur Abreise. Mehrsprachige Betreuung in Deutsch, Englisch und Italienisch sorgt für zufriedene internationale Gäste. Das Ergebnis: bessere Bewertungen und mehr Wiederbuchungen für deine Ferienunterkunft in Kärnten."
    },
    {
      icon: TrendingUp,
      title: "Preisoptimierung",
      desc: "Dynamisches Pricing für maximalen Ertrag deiner Ferienwohnung am Wörthersee, Faaker See oder in ganz Kärnten. Unsere Algorithmen analysieren Nachfrage, Saisonalität, lokale Events wie den Villacher Kirchtag oder Ironman Austria, und Wettbewerberpreise in Echtzeit. In der Hochsaison maximieren wir deine Einnahmen, in der Nebensaison sichern wir Buchungen durch strategische Preisanpassung. Durchschnittlich 28% mehr Umsatz gegenüber statischer Preisgestaltung."
    }
  ];

  return (
    <>
      {/* Statistik-Sektion mit beigem Hintergrund */}
      <Section
        id="market-stats"
        className="relative bg-sand-light pt-16 pb-24 sm:pt-20 sm:pb-28 md:pt-28 md:pb-36 overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)",
              backgroundSize: "32px 32px"
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8">
          {/* Einleitender Text */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Mit über <strong className="text-hostgains">13 Millionen Übernachtungen pro Jahr</strong> ist Kärnten eine der beliebtesten Urlaubsregionen Österreichs.
              Doch die meisten Vermieter schöpfen das Potenzial ihrer Ferienwohnung nicht aus.
            </p>
          </motion.div>

          {/* Statistik-Zahlen mit Counter-Animation */}
          <div className="flex flex-col sm:flex-row items-stretch justify-center max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <AnimatedNumber value={stat.value} label={stat.label} />
                {index < stats.length - 1 && (
                  <div className="hidden sm:block w-px self-stretch my-3 bg-hostgains/15" />
                )}
                {index < stats.length - 1 && (
                  <div className="sm:hidden w-32 h-px mx-auto bg-hostgains/15" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Herausforderungs-Kacheln mit echtem Glaseffekt */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto mb-10 sm:mb-14">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.12
                }}
                className="group bg-white/30 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-white/50 shadow-[0_8px_32px_rgba(49,74,67,0.08)] hover:shadow-[0_16px_48px_rgba(49,74,67,0.12)] hover:bg-white/40 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-white/60 backdrop-blur-sm border border-white/40">
                    <challenge.icon className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-hostgains" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-display font-semibold text-gray-900 mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {challenge.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-5 sm:mb-6 leading-snug">
              <strong className="text-gray-900">Die gute Nachricht:</strong> Wir lösen diese Herausforderungen.
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

        {/* Diagonal Transition to Green Section */}
        <div className="absolute -bottom-1 left-0 w-full h-12 sm:h-16 md:h-24" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="#314A43" points="0,100 100,0 100,100" />
          </svg>
        </div>
      </Section>

      {/* Mehr Umsatz weniger Aufwand - Grüne Sektion */}
      <Section
        id="solution"
        className="relative bg-hostgains pt-16 pb-20 sm:pt-20 sm:pb-28 md:pt-28 md:pb-36 overflow-hidden"
        aria-labelledby="solution-heading"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-8">
          {/* Header */}
          <header className="text-center mb-10 sm:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 rounded-full bg-white/12 backdrop-blur-md border border-white/25 shadow-[0_2px_16px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.3)]"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-sand" aria-hidden="true" />
              <span className="text-[10px] sm:text-xs md:text-sm text-white/90 font-medium">Die Lösung</span>
            </motion.div>
            <motion.h2
              id="solution-heading"
              initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-display text-[2rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6"
            >
              Mehr Umsatz, weniger Aufwand
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed"
            >
              Wir bieten professionelles <strong>Kurzzeitvermietungs-Management</strong> für Ferienunterkünfte auf Plattformen wie Airbnb und Booking.com an:
              <br /><br />
              Dabei übernehmen wir alle Aufgaben rund um die Vermietung – von der Inseratserstellung über die Preisoptimierung bis hin zur Gästekommunikation und Reinigungskoordination – und sorgen dafür, dass alles reibungslos läuft.
            </motion.p>
          </header>

          {/* Accordion-Kacheln - Breiter */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-white/20 shadow-lg overflow-hidden mb-10 sm:mb-14">
            {tasks.map((task, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index * 0.12
                }}
                className={index !== 0 ? 'border-t border-white/10' : ''}
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full px-6 sm:px-10 py-5 sm:py-6 text-left transition-all duration-300 hover:bg-white/5"
                  aria-expanded={openAccordion === index}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 sm:gap-5">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                        <task.icon className="w-6 h-6 sm:w-7 sm:h-7 text-sand" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-base sm:text-lg font-display font-semibold text-white">
                        {task.title}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      {openAccordion === index ? (
                        <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-sand" strokeWidth={1.5} />
                      ) : (
                        <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-sand" strokeWidth={1.5} />
                      )}
                    </div>
                  </div>

                  <AnimatePresence>
                    {openAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, filter: "blur(4px)" }}
                        animate={{ height: 'auto', opacity: 1, filter: "blur(0px)" }}
                        exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 sm:mt-5 pl-14 sm:pl-[68px] pr-4 text-sm sm:text-base text-white/80 leading-relaxed">
                          {task.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>

          {/* CTA Link zu Airbnb Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/airbnb-management"
              className="inline-flex items-center gap-2 text-sand hover:text-white font-medium group"
            >
              Wieso professionelles Management?
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Diagonal Transition to Beige Section */}
        <div className="absolute -bottom-1 left-0 w-full h-12 sm:h-16 md:h-24" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="#F5F2E9" points="0,0 100,100 0,100" />
          </svg>
        </div>
      </Section>
    </>
  );
};
