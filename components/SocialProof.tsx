'use client';
import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { Quote, ArrowRight, Home, TrendingUp, Star } from 'lucide-react';
import Link from 'next/link';

export const SocialProof: React.FC = () => {
  const stats = [
    {
      icon: Home,
      value: "47+",
      label: "Betreute Wohnungen"
    },
    {
      icon: TrendingUp,
      value: "28%",
      label: "Mehr Umsatz im Schnitt"
    },
    {
      icon: Star,
      value: "4.9",
      label: "Durchschnittliche Bewertung"
    }
  ];

  const testimonials = [
    {
      quote: "Ich wollte meine Wohnung in Waidmannsdorf schon verkaufen, weil mich die ständige Putzerei genervt hat. hostgains hat übernommen. Letzten Monat hatte ich 25% mehr Umsatz als jemals zuvor – und ich war nicht einmal dort.",
      name: "Markus W.",
      role: "Eigentümer, Klagenfurt",
      rating: 5
    },
    {
      quote: "Endlich eine Firma, die modern denkt. Kein Papierkram, schnelle Überweisungen und das Team ist wirklich auf Zack. Fühlt sich an wie ein Upgrade von der Holzklasse in die Business Class.",
      name: "Sabine K.",
      role: "Investor, Velden am Wörthersee",
      rating: 5
    },
    {
      quote: "Ich hatte Angst vor versteckten Kosten und komplizierten Verträgen. Bei hostgains ist alles transparent. Ich sehe genau, was reinkommt und was rausgeht. Das schafft Vertrauen.",
      name: "Thomas R.",
      role: "Eigentümer, Pörtschach",
      rating: 5
    }
  ];

  return (
    <Section
      className="bg-sand py-12 sm:py-20 md:py-32 border-y border-sand-dark"
      aria-labelledby="testimonials-heading"
    >
      <article className="container mx-auto px-4 sm:px-6">
        {/* Trust Stats - Pyramid Layout on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14 md:mb-20 max-w-3xl mx-auto"
        >
          {/* Mobile: Pyramid layout */}
          <div className="flex flex-col items-center gap-6 sm:hidden">
            {/* Top stat (center) */}
            {(() => {
              const TopIcon = stats[0].icon;
              return (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-hostgains/10 mb-2">
                    <TopIcon className="w-7 h-7 text-hostgains" />
                  </div>
                  <p className="text-4xl font-display font-bold text-hostgains-dark">
                    {stats[0].value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 leading-tight">
                    {stats[0].label}
                  </p>
                </div>
              );
            })()}
            {/* Bottom two stats */}
            <div className="flex justify-center gap-8">
              {stats.slice(1).map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-hostgains/10 mb-2">
                    <stat.icon className="w-7 h-7 text-hostgains" />
                  </div>
                  <p className="text-4xl font-display font-bold text-hostgains-dark">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Desktop: Grid layout */}
          <div className="hidden sm:grid grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-hostgains/10 mb-3">
                  <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-hostgains" />
                </div>
                <p className="text-3xl md:text-4xl font-display font-bold text-hostgains-dark">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-gray-500 mt-1 leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <header className="text-center mb-6 sm:mb-10 md:mb-16">
          <h2
            id="testimonials-heading"
            className="text-[2rem] sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hostgains-dark"
          >
            Das sagen unsere <span className="text-hostgains-light">Kunden</span>
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Echte Erfahrungen von Ferienwohnungs-Eigentümern aus Kärnten
          </p>
        </header>

        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-16"
          role="list"
          aria-label="Kundenbewertungen von hostgains Kurzzeitvermietung"
        >
          {testimonials.map((testimonial, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl border border-sand-dark shadow-sm hover:shadow-md transition-shadow"
            >
              <figure>
                <Quote
                  className="text-hostgains-light mb-3 sm:mb-5 md:mb-6 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                  fill="currentColor"
                  aria-hidden="true"
                />

                <blockquote className="text-sm sm:text-base text-gray-600 italic mb-4 sm:mb-6 md:mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <figcaption>
                  <cite className="font-bold text-gray-900 text-sm sm:text-base md:text-lg not-italic">{testimonial.name}</cite>
                  <p className="text-[11px] sm:text-xs md:text-sm text-gray-500">{testimonial.role}</p>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </ul>

        <div className="text-center">
          <Link
            href="/analyse"
            className="inline-flex items-center justify-center gap-2 bg-hostgains hover:bg-hostgains-dark text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl transition-all w-full sm:w-auto min-h-[48px] sm:min-h-[56px] text-sm sm:text-base"
          >
            Auch so entspannt vermieten <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
          </Link>
        </div>
      </article>
    </Section>
  );
};
