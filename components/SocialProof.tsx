'use client';
import React from 'react';
import Image from 'next/image';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin, Euro, BarChart3, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const SocialProof: React.FC = () => {
  const caseStudies = [
    {
      title: "Seeblick Apartment",
      location: "Velden am Wörthersee",
      image: "/Seeblick Apartment am Wörthersee.jpeg",
      type: "2-Zimmer · 65m²",
      improvementOccupancy: "+19%",
      before: { occupancy: 63, revenue: "1.850€", rating: 4.2 },
      after:  { occupancy: 82, revenue: "2.400€", rating: 4.9 },
    },
    {
      title: "City-Apartment Klagenfurt",
      location: "Klagenfurt Zentrum",
      image: "/city aprtment klagenfurt.jpg",
      type: "3-Zimmer · 85m²",
      improvementOccupancy: "+18%",
      before: { occupancy: 43, revenue: "2.100€", rating: 4.0 },
      after:  { occupancy: 61, revenue: "2.980€", rating: 4.8 },
    },
  ];

  return (
    <Section
      className="bg-sand py-12 sm:py-20 md:py-32 border-y border-sand-dark"
      aria-labelledby="case-studies-heading"
    >
      <article className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <header className="text-center mb-8 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 rounded-full bg-white/70 backdrop-blur-md border border-white/80 shadow-[0_2px_16px_rgba(49,74,67,0.06),inset_0_1px_0_rgba(255,255,255,0.95)]"
          >
            <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-hostgains" aria-hidden="true" />
            <span className="text-[10px] sm:text-xs md:text-sm text-hostgains font-medium">Case Studies aus Kärnten</span>
          </motion.div>
          <h2
            id="case-studies-heading"
            className="text-[2rem] sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hostgains-dark"
          >
            Messbare <span className="text-hostgains-light">Ergebnisse</span>
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Konkrete Zahlen aus Kärnten – Auslastung, Umsatz und Bewertung im direkten Vergleich.
          </p>
        </header>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 mb-8 sm:mb-12">
          {caseStudies.map((study, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              className="bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden border border-white/80 shadow-[0_8px_32px_rgba(49,74,67,0.08)] hover:shadow-[0_16px_48px_rgba(49,74,67,0.14)] transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56">
                <Image
                  src={study.image}
                  alt={`${study.title} – Ferienwohnung in ${study.location}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Improvement badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-hostgains text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {study.improvementOccupancy} Auslastung
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-1">
                    {study.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-white/75 text-xs">
                    <MapPin className="w-3 h-3" />
                    <span>{study.location}</span>
                    <span className="mx-1">·</span>
                    <span>{study.type}</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="p-4 sm:p-6 space-y-3">
                {/* Auslastung bar */}
                <div>
                  <div className="flex justify-between items-center text-xs mb-1.5">
                    <span className="text-gray-500 font-medium">Auslastung</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">{study.before.occupancy}%</span>
                      <ArrowRight className="w-3 h-3 text-gray-400" />
                      <span className="text-hostgains font-bold text-sm">{study.after.occupancy}%</span>
                    </div>
                  </div>
                  <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                    {/* Before bar */}
                    <div
                      className="absolute left-0 top-0 h-full bg-gray-300 rounded-full transition-all"
                      style={{ width: `${study.before.occupancy}%` }}
                    />
                    {/* After bar */}
                    <div
                      className="absolute left-0 top-0 h-full bg-hostgains rounded-full transition-all"
                      style={{ width: `${study.after.occupancy}%` }}
                    />
                  </div>
                </div>

                {/* Umsatz & Bewertung row */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="bg-sand-light rounded-xl p-3">
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-1">
                      <Euro className="w-3 h-3" />
                      <span>Umsatz/Monat</span>
                    </div>
                    <div className="flex items-end gap-1.5">
                      <span className="text-gray-400 text-xs line-through">{study.before.revenue}</span>
                      <span className="text-hostgains font-bold text-base">{study.after.revenue}</span>
                    </div>
                  </div>
                  <div className="bg-sand-light rounded-xl p-3">
                    <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-1">
                      <Star className="w-3 h-3" />
                      <span>Bewertung</span>
                    </div>
                    <div className="flex items-end gap-1.5">
                      <span className="text-gray-400 text-xs line-through">{study.before.rating}</span>
                      <span className="text-hostgains font-bold text-base">{study.after.rating} ★</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
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
