import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { Camera, Tag, Share2, Headset, Sparkles, Search, Linkedin } from 'lucide-react';

export const Credentials: React.FC = () => {
  // Team mit E-A-T-optimierten Beschreibungen
  const team = [
    {
      name: "Mario Brenner",
      role: "Mitgründer & Geschäftsführer",
      image: "/Mario.png",
      description: "Experte für digitales Marketing und Plattform-Optimierung. Verantwortlich für Listing-SEO und Conversion-Optimierung auf Airbnb und Booking.com.",
      linkedin: "https://www.linkedin.com/in/mariobrenner",
      expertise: "Marketing & Sichtbarkeit"
    },
    {
      name: "Julian Ograjensek",
      role: "Mitgründer & Geschäftsführer",
      image: "/Julian.png",
      description: "Spezialist für Prozessoptimierung und Automatisierung. Verantwortlich für Channel Management, dynamisches Pricing und operative Abläufe.",
      linkedin: "https://www.linkedin.com/in/julian-ograjensek-171721287",
      expertise: "Operations & Technologie"
    }
  ];

  const features = [
    {
      icon: Camera,
      title: "Listing-Optimierung",
      desc: "Wir schreiben keine Inserate, wir schreiben Verkaufsbriefe. Psychologisch optimierte Texte und High-End Fotos für Airbnb und Booking.com, die \"Buchen\" unwiderstehlich machen.",
      dark: false
    },
    {
      icon: Tag,
      title: "Dynamisches Pricing",
      desc: "Konstante Preise sind Geldverbrennung. Unsere Algorithmen passen den Preis deiner Ferienwohnung täglich an Nachfrage, Events am Wörthersee und Wetter an.",
      dark: true
    },
    {
      icon: Share2,
      title: "Omnipräsenz",
      desc: "Airbnb ist nicht genug. Wir platzieren deine Immobilie synchronisiert auf Booking.com, VRBO und spezialisierten Nischenportalen für maximale Reichweite.",
      dark: false
    },
    {
      icon: Headset,
      title: "24/7 Gäste-Support",
      desc: "Wir antworten nachts um 3 Uhr, damit du schlafen kannst. Kommunikation, Check-in, Problemlösung für deine Kurzzeitvermietung – alles wir.",
      dark: false
    },
    {
      icon: Sparkles,
      title: "Reinigung & Pflege",
      desc: "Koordination von Reinigungsteams und Instandhaltung in Klagenfurt. Wir sorgen dafür, dass deine Wohnung auch nach 100 Gästen wie neu aussieht.",
      dark: false
    },
    {
      icon: Search,
      title: "SEO Dominanz",
      desc: "Wir wissen, wie man auf Seite 1 bei Airbnb und Booking.com landet. Durch gezielte Keywords und Optimierung wird deine Ferienwohnung am Wörthersee gesehen – und gebucht.",
      dark: false
    }
  ];

  return (
    <Section
      className="bg-sand-light py-16 sm:py-24 md:py-32"
      aria-labelledby="credentials-heading"
    >
      <article className="container mx-auto px-4 sm:px-6">
        {/* E-A-T Header: Expertise, Authority, Trust */}
        <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-gray-500 mb-3 sm:mb-4">
            Lokale Expertise für Kurzzeitvermietung in Kärnten
          </p>
          <h2
            id="credentials-heading"
            className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight"
          >
            Die einzigen <span className="text-hostgains-light">Profis</span> am Wörthersee
          </h2>
          {/* LLM-zitierfähiger Absatz über hostgains */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
            <strong>hostgains</strong> ist ein spezialisierter Dienstleister für Kurzzeitvermietung in Kärnten, gegründet in Klagenfurt am Wörthersee.
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Das Team kombiniert lokale Marktkenntnis mit moderner Technologie: Dynamisches Pricing, Multi-Plattform-Vertrieb und 24/7 Gästeservice sorgen für maximale Auslastung bei minimalem Aufwand für Eigentümer.
          </p>
        </header>

        {/* Team Section */}
        <div className="mb-16 sm:mb-20 md:mb-24">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 lg:gap-16">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center group"
              >
                <div className="relative mb-5 sm:mb-6">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role} bei hostgains`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-10 h-10 sm:w-12 sm:h-12 bg-hostgains rounded-full flex items-center justify-center shadow-lg">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:scale-110 transition-transform"
                      aria-label={`${member.name} auf LinkedIn`}
                    >
                      <Linkedin size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-hostgains font-medium text-sm sm:text-base mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm sm:text-base max-w-xs mx-auto leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <ul
          id="leistungen"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 scroll-mt-24"
          role="list"
          aria-label="hostgains Kurzzeitvermietung Services in Klagenfurt"
        >
          {features.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl transition-all duration-300 ${
                item.dark
                  ? 'bg-hostgains text-white shadow-xl hover:-translate-y-2'
                  : 'bg-white border border-sand-dark shadow-sm hover:shadow-xl hover:border-hostgains/20'
              }`}
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-6 sm:mb-8 ${
                  item.dark
                    ? 'bg-white/10 text-white'
                    : 'bg-sand text-hostgains'
                }`}
                aria-hidden="true"
              >
                <item.icon size={24} strokeWidth={item.dark ? 2 : 2.5} className="sm:w-7 sm:h-7" />
              </div>
              <h3 className={`text-lg sm:text-xl md:text-2xl font-bold font-display mb-3 sm:mb-4 ${item.dark ? 'text-white' : 'text-gray-900'}`}>
                {item.title}
              </h3>
              <p className={`leading-relaxed text-sm sm:text-base md:text-lg ${item.dark ? 'text-gray-300' : 'text-gray-600'}`}>
                {item.desc}
              </p>
            </motion.li>
          ))}
        </ul>
      </article>
    </Section>
  );
};
