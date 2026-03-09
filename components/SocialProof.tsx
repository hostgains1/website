'use client';
import React from 'react';
import Image from 'next/image';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin, Calendar, Euro } from 'lucide-react';
import Link from 'next/link';

export const SocialProof: React.FC = () => {
  const caseStudies = [
    {
      title: "Seeblick-Apartment Velden",
      location: "Velden am Wörthersee",
      image: "/Seeblick.jpg",
      type: "2-Zimmer Apartment, 65m²",
      before: {
        occupancy: "63%",
        revenue: "1.850€",
        rating: "4.2"
      },
      after: {
        occupancy: "82%",
        revenue: "2.400€",
        rating: "4.9"
      }
    },
    {
      title: "City-Apartment Klagenfurt",
      location: "Klagenfurt Zentrum",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=500&fit=crop",
      type: "3-Zimmer Wohnung, 85m²",
      before: {
        occupancy: "43%",
        revenue: "2.100€",
        rating: "4.0"
      },
      after: {
        occupancy: "61%",
        revenue: "2.980€",
        rating: "4.8"
      }
    }
  ];

  return (
    <Section
      className="bg-sand py-12 sm:py-20 md:py-32 border-y border-sand-dark"
      aria-labelledby="case-studies-heading"
    >
      <article className="container mx-auto px-4 sm:px-6">
        <header className="text-center mb-6 sm:mb-10 md:mb-16">
          <h2
            id="case-studies-heading"
            className="text-[2rem] sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hostgains-dark"
          >
            Keine leeren <span className="text-hostgains-light">Versprechen</span>
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Während andere reden, liefern wir echte Ergebnisse. Zwei Beispiele aus dem Portfolio – mit konkreten Zahlen vor und nach der Übernahme.
          </p>
        </header>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-16">
          {caseStudies.map((study, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-sand-dark shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Apartment Image */}
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image
                  src={study.image}
                  alt={`${study.title} - Ferienwohnung in ${study.location}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-1">
                    {study.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-white/80 text-xs sm:text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{study.location}</span>
                    <span className="mx-1.5">•</span>
                    <span>{study.type}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                {/* Before/After Comparison */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {/* Before */}
                  <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4">
                    <p className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 sm:mb-3">Vorher</p>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                          <span className="text-[11px] sm:text-xs text-gray-500">Auslastung</span>
                        </div>
                        <span className="text-sm sm:text-base font-bold text-gray-600">{study.before.occupancy}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Euro className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                          <span className="text-[11px] sm:text-xs text-gray-500"><span className="sm:hidden">Umsatz</span><span className="hidden sm:inline">Umsatz/Monat</span></span>
                        </div>
                        <span className="text-sm sm:text-base font-bold text-gray-600">{study.before.revenue}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                          <span className="text-[11px] sm:text-xs text-gray-500">Bewertung</span>
                        </div>
                        <span className="text-sm sm:text-base font-bold text-gray-600">{study.before.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-hostgains/5 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-hostgains/20">
                    <p className="text-[10px] sm:text-xs font-semibold text-hostgains uppercase tracking-wider mb-2 sm:mb-3">Mit uns</p>
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-hostgains" />
                          <span className="text-[11px] sm:text-xs text-gray-600">Auslastung</span>
                        </div>
                        <span className="text-sm sm:text-base font-bold text-hostgains">{study.after.occupancy}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Euro className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-hostgains" />
                          <span className="text-[11px] sm:text-xs text-gray-600"><span className="sm:hidden">Umsatz</span><span className="hidden sm:inline">Umsatz/Monat</span></span>
                        </div>
                        <span className="text-sm sm:text-base font-bold text-hostgains">{study.after.revenue}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-hostgains" />
                          <span className="text-[11px] sm:text-xs text-gray-600">Bewertung</span>
                        </div>
                        <span className="text-sm sm:text-base font-bold text-hostgains">{study.after.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

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
