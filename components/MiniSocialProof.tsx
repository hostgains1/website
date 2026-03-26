'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, MapPin, Calendar, Euro, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CaseStudy {
  title: string;
  location: string;
  image: string;
  type: string;
  region?: 'woerthersee' | 'klagenfurt' | 'kaernten';
  before: {
    occupancy: string;
    revenue: string;
    rating: string;
  };
  after: {
    occupancy: string;
    revenue: string;
    rating: string;
  };
}

interface MiniSocialProofProps {
  title?: string;
  subtitle?: string;
  region?: 'woerthersee' | 'klagenfurt' | 'kaernten';
  maxItems?: 1 | 2;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
}

const allCaseStudies: CaseStudy[] = [
  {
    title: "Seeblick Apartment am Wörthersee",
    location: "Velden am Wörthersee",
    image: "/Seeblick Apartment am Wörthersee.jpeg",
    type: "2-Zimmer Apartment, 65m²",
    region: 'woerthersee',
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
    image: "/city aprtment klagenfurt.jpg",
    type: "3-Zimmer Wohnung, 85m²",
    region: 'klagenfurt',
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

export const MiniSocialProof: React.FC<MiniSocialProofProps> = ({
  title = "Das erreichen wir gemeinsam",
  subtitle,
  region,
  maxItems = 2,
  showCTA = true,
  ctaText = "Kostenlose Analyse anfordern",
  ctaLink = "/analyse",
  className = ""
}) => {
  // Filter case studies by region if specified
  let caseStudies = region
    ? allCaseStudies.filter(study => study.region === region || region === 'kaernten')
    : allCaseStudies;

  // Limit to maxItems
  caseStudies = caseStudies.slice(0, maxItems);

  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-600 text-sm sm:text-base">
                {subtitle}
              </p>
            )}
          </div>

          {/* Case Studies */}
          <div className={`grid gap-6 mb-8 ${maxItems === 1 ? 'max-w-lg mx-auto' : 'sm:grid-cols-2'}`}>
            {caseStudies.map((study, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-sand-dark shadow-sm"
              >
                {/* Image */}
                <div className="relative h-40 sm:h-48">
                  <Image
                    src={study.image}
                    alt={`${study.title} - Ferienwohnung in ${study.location}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-base sm:text-lg font-display font-bold text-white mb-0.5">
                      {study.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-white/80 text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{study.location}</span>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {/* Before */}
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Vorher</p>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] text-gray-500">Auslastung</span>
                          <span className="text-sm font-bold text-gray-600">{study.before.occupancy}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] text-gray-500">Umsatz</span>
                          <span className="text-sm font-bold text-gray-600">{study.before.revenue}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] text-gray-500">Bewertung</span>
                          <span className="text-sm font-bold text-gray-600">{study.before.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* After */}
                    <div className="bg-hostgains/5 rounded-lg p-3 border border-hostgains/20">
                      <p className="text-[10px] font-semibold text-hostgains uppercase tracking-wider mb-2">Mit uns</p>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] text-gray-600">Auslastung</span>
                          <span className="text-sm font-bold text-hostgains">{study.after.occupancy}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] text-gray-600">Umsatz</span>
                          <span className="text-sm font-bold text-hostgains">{study.after.revenue}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] text-gray-600">Bewertung</span>
                          <span className="text-sm font-bold text-hostgains">{study.after.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* CTA */}
          {showCTA && (
            <div className="text-center">
              <Link
                href={ctaLink}
                className="inline-flex items-center gap-2 bg-hostgains hover:bg-hostgains-dark text-white font-bold py-3 px-6 rounded-xl transition-all"
              >
                {ctaText}
                <ArrowRight size={18} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
