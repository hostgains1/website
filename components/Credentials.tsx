'use client';
import React from 'react';
import Image from 'next/image';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { Camera, Tag, Share2, Headset, Search, Linkedin, ArrowRight, MapPin, LucideIcon, SprayCan } from 'lucide-react';
import { badgeFadeIn, headingFadeIn, textFadeIn, cardAnimation, smoothViewTransition } from '@/lib/animations';
import Link from 'next/link';

export const Credentials: React.FC = () => {
  // Team mit E-A-T-optimierten Beschreibungen
  const team = [
    {
      name: "Mario Brenner",
      role: "Mitgründer & Geschäftsführer",
      mobileRole: "Experte für digitales Marketing und Plattform-Optimierung",
      image: "/Mario.webp",
      description: "Experte für digitales Marketing und Plattform-Optimierung. Verantwortlich für Listing-SEO und Conversion-Optimierung auf Airbnb und Booking.com.",
      linkedin: "https://www.linkedin.com/in/mariobrenner",
      expertise: "Marketing & Sichtbarkeit"
    },
    {
      name: "Julian Ograjensek",
      role: "Mitgründer & Geschäftsführer",
      mobileRole: "Spezialist für Prozessoptimierung und Automatisierung",
      image: "/Julian.webp",
      description: "Spezialist für Prozessoptimierung und Automatisierung. Verantwortlich für Channel Management, dynamisches Pricing und operative Abläufe.",
      linkedin: "https://www.linkedin.com/in/julian-ograjensek-171721287",
      expertise: "Operations & Technologie"
    }
  ];

  const features = [
    {
      icon: Camera,
      title: "Inserat Optimierung",
      desc: "Wir erstellen professionelle Fotos und überzeugende Texte für Airbnb und Booking.com — damit dein Inserat mehr Buchungen bekommt.",
      dark: false
    },
    {
      icon: Tag,
      title: "Dynamisches Pricing",
      desc: "Wir passen den Preis deiner Ferienwohnung täglich an Nachfrage, Events am Wörthersee und Saison an — so verdienst du mehr.",
      dark: false,
      blogLink: "/blog/dynamisches-pricing-mythen-realitaet"
    },
    {
      icon: Share2,
      title: "Auf allen Plattformen",
      desc: "Deine Wohnung ist auf Airbnb, Booking.com, VRBO und weiteren Portalen sichtbar — alles synchronisiert, keine Doppelbuchungen.",
      dark: false
    },
    {
      icon: Headset,
      title: "24/7 Gästebetreuung",
      desc: "Wir beantworten Anfragen rund um die Uhr, kümmern uns um Check-in und lösen Probleme — auch nachts um 3 Uhr.",
      dark: false
    },
    {
      icon: SprayCan,
      title: "Reinigung & Wäscheservice",
      desc: "Wir koordinieren Reinigung und Wäsche nach jedem Gast. Regelmäßige Check-ups stellen sicher, dass alles in Ordnung ist.",
      dark: false
    },
    {
      icon: Search,
      title: "Bessere Platzierung",
      desc: "Wir optimieren dein Inserat so, dass es weiter oben in den Suchergebnissen erscheint — mehr Sichtbarkeit, mehr Buchungen.",
      dark: false
    }
  ];

  return (
    <Section
      className="bg-sand-light py-12 sm:py-20 md:py-32"
      aria-labelledby="credentials-heading"
    >
      <article className="container mx-auto px-4 sm:px-6">
        {/* E-A-T Header: Expertise, Authority, Trust */}
        <header className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <motion.div
            {...badgeFadeIn}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 rounded-full bg-hostgains/10 backdrop-blur-sm border border-hostgains/20"
          >
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-hostgains" aria-hidden="true" />
            <span className="text-[10px] sm:text-xs md:text-sm text-hostgains font-medium">Lokale Expertise in Kärnten</span>
          </motion.div>
          <motion.h2
            {...headingFadeIn}
            id="credentials-heading"
            className="font-display text-[2rem] sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight"
          >
            Die einzigen <span className="text-hostgains-light">Profis</span> am Wörthersee
          </motion.h2>
          {/* LLM-zitierfähiger Absatz über hostgains */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-2 sm:mb-4">
            <strong>hostgains ist dein spezialisierter Dienstleister</strong> für Kurzzeitvermietung in Kärnten.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed hidden sm:block">
            Wir kombinieren lokale Marktkenntnis mit moderner Technologie: Dynamisches Pricing, Multi-Plattform-Vertrieb und 24/7 Gästeservice sorgen für maximale Auslastung bei minimalem Aufwand für dich.
          </p>
        </header>

        {/* Team Section */}
        <div className="mb-10 sm:mb-16 md:mb-24">
          <div className="flex flex-row justify-center items-start gap-4 sm:gap-12 lg:gap-16">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.2
                }}
                className="text-center group"
              >
                <div className="relative mb-5 sm:mb-6 w-fit mx-auto">
                  <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl transition-shadow duration-300 relative">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role} bei hostgains`}
                      fill
                      sizes="(max-width: 640px) 128px, (max-width: 1024px) 192px, 224px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-9 h-9 sm:w-12 sm:h-12 bg-hostgains rounded-full flex items-center justify-center shadow-lg text-white hover:scale-110 transition-transform"
                    aria-label={`${member.name} auf LinkedIn`}
                  >
                    <Linkedin size={16} className="sm:w-5 sm:h-5" />
                  </a>
                </div>
                <h3 className="font-display text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1">
                  {member.name}
                </h3>
                <p className="text-hostgains font-medium text-xs mb-1.5 sm:hidden">
                  {member.mobileRole}
                </p>
                <p className="text-hostgains font-medium text-sm md:text-base mb-2 hidden sm:block">
                  {member.role}
                </p>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-[280px] sm:max-w-xs mx-auto leading-relaxed hidden sm:block">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <ul
          id="leistungen"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-8 scroll-mt-24 lg:grid-rows-2 lg:auto-rows-fr"
          role="list"
          aria-label="hostgains Kurzzeitvermietung Services in Klagenfurt"
        >
          {features.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1
              }}
              className={`p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl md:rounded-3xl transition-all duration-300 h-full flex flex-col ${
                item.dark
                  ? 'bg-hostgains text-white shadow-xl hover:-translate-y-2'
                  : 'bg-white border border-sand-dark shadow-sm hover:shadow-xl hover:border-hostgains/20'
              }`}
            >
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 md:mb-8 ${
                  item.dark
                    ? 'bg-white/10 text-white'
                    : 'bg-sand text-hostgains'
                }`}
                aria-hidden="true"
              >
                <item.icon size={20} strokeWidth={item.dark ? 2 : 2.5} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
              </div>
              <h3 className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-display mb-2 sm:mb-3 md:mb-4 ${item.dark ? 'text-white' : 'text-gray-900'}`}>
                {item.title}
              </h3>
              <p className={`leading-relaxed text-sm sm:text-base flex-grow ${item.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                {item.desc}
              </p>
              {item.blogLink && (
                <Link
                  href={item.blogLink}
                  className={`inline-flex items-center gap-1.5 text-sm font-medium mt-4 group ${
                    item.dark
                      ? 'text-sand hover:text-white'
                      : 'text-hostgains hover:text-hostgains-dark'
                  }`}
                >
                  Mehr erfahren
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </motion.li>
          ))}
        </ul>

        {/* Link zu allen Leistungen */}
        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-hostgains hover:text-hostgains-light font-medium group"
          >
            Alle Leistungen im Detail
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </article>
    </Section>
  );
};
