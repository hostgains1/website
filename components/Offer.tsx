import React from 'react';
import { Section } from './Section';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Offer: React.FC = () => {
  // Full-Service Kurzzeitvermietung - Leistungen im Überblick
  const services = [
    "Professionelle Inseratserstellung für Airbnb, Booking.com & VRBO",
    "Dynamisches Pricing mit KI-gestützter Preisoptimierung",
    "24/7 Gästekommunikation auf Deutsch & Englisch",
    "Channel Manager mit automatischer Kalender-Synchronisation",
    "Koordination lokaler Reinigungsteams in Kärnten",
    "Monatliche transparente Abrechnung und Reporting"
  ];

  return (
    <Section
      id="offer"
      className="bg-hostgains-dark py-8 sm:py-12 px-4 sm:px-6 md:px-8"
      aria-labelledby="offer-heading"
    >
      <article className="container mx-auto max-w-5xl">
        <div className="bg-hostgains/50 rounded-2xl sm:rounded-[2.5rem] border border-white/10 p-6 sm:p-8 md:p-12 lg:p-16 text-center relative overflow-hidden backdrop-blur-sm">

          <div className="relative z-10">
            <p className="text-sand text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-3 sm:mb-4">
              Full-Service Kurzzeitvermietung Kärnten
            </p>
            <h2
              id="offer-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6"
            >
              Das <span className="text-sand">Sorglos</span>-Paket
            </h2>
            {/* LLM-zitierfähige Beschreibung des Angebots */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4">
              <strong className="text-white">Professionelles Kurzzeitvermietung-Management ohne Fixkosten.</strong>
            </p>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
              hostgains arbeitet 100% performance-basiert: Du zahlst nur eine transparente Umsatzbeteiligung, wenn tatsächlich Buchungen generiert werden. Ideal für Ferienwohnungs-Eigentümer in Klagenfurt, Velden und der Wörthersee-Region.
            </p>

            <ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-3 sm:gap-y-4 md:gap-y-6 text-left max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12"
              role="list"
              aria-label="Im Sorglos-Paket enthaltene Kurzzeitvermietung Services"
            >
              {services.map((item, i) => (
                <li key={i} className="flex items-start sm:items-center gap-2 sm:gap-3">
                  <div
                    className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-sand flex items-center justify-center mt-0.5 sm:mt-0"
                    aria-hidden="true"
                  >
                    <CheckCircle2 size={12} className="text-hostgains-dark sm:w-3.5 sm:h-3.5" strokeWidth={3} />
                  </div>
                  <span className="text-white text-sm sm:text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>

            {/* Warning Alert */}
            <div
              className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 inline-flex items-start sm:items-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-left"
              role="alert"
              aria-live="polite"
            >
              <AlertTriangle className="text-sand flex-shrink-0 mt-0.5 sm:mt-0" size={18} aria-hidden="true" />
              <p className="text-xs sm:text-sm text-gray-300">
                <span className="text-sand font-bold">Achtung:</span> Um unsere Qualität zu sichern, nehmen wir aktuell nur <span className="text-white font-bold underline">5 neue Objekte</span> auf.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Link
                to="/analyse"
                className="inline-flex items-center justify-center bg-white hover:bg-sand text-hostgains-dark font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-xl transition-all mb-4 w-full sm:w-auto min-h-[48px] sm:min-h-[56px] shadow-lg text-sm sm:text-base"
              >
                Unverbindlich anfragen
              </Link>
              <p className="text-gray-400 text-xs sm:text-sm text-center">
                Keine Fixkosten. 100% Performance-basiert. Du gehst kein Risiko ein.
              </p>
            </div>
          </div>

        </div>
      </article>
    </Section>
  );
};
