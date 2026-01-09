import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-sand pt-12 sm:pt-16 pb-6 sm:pb-8"
      role="contentinfo"
      aria-label="hostgains Fußbereich mit Kontaktinformationen"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12 lg:mb-16">

          {/* Company Info - E-A-T optimiert */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="mb-1 block"
              aria-label="hostgains - Kurzzeitvermietung Kärnten - Startseite"
            >
              <img src="/logo.png" alt="hostgains" className="h-8 sm:h-10 w-auto -ml-2" />
            </Link>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3">
              <strong>hostgains</strong> ist dein lokaler Partner für professionelle Kurzzeitvermietung in Kärnten.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              Full-Service Ferienwohnung-Management für Airbnb, Booking.com und VRBO am Wörthersee. Dynamisches Pricing, 24/7 Gästebetreuung und transparente Abrechnung.
            </p>
          </div>

          {/* Contact Info */}
          <nav aria-label="Kontaktinformationen">
            <h2 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Kontakt</h2>
            <address className="not-italic">
              <ul className="text-gray-600 text-xs sm:text-sm space-y-2.5" role="list">
                <li className="flex items-center gap-2.5">
                  <MapPin size={16} className="shrink-0 text-hostgains" aria-hidden="true" />
                  <span className="whitespace-nowrap">
                    Klagenfurt, Österreich
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={16} className="shrink-0 text-hostgains" aria-hidden="true" />
                  <a
                    href="mailto:info@hostgains.at"
                    className="hover:text-hostgains transition-colors"
                    aria-label="E-Mail an hostgains senden: info@hostgains.at"
                  >
                    info@hostgains.at
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={16} className="shrink-0 text-hostgains" aria-hidden="true" />
                  <a
                    href="tel:+4367762180829"
                    className="hover:text-hostgains transition-colors"
                    aria-label="hostgains anrufen: +43 677 62180829"
                  >
                    +43 677 62180829
                  </a>
                </li>
              </ul>
            </address>
          </nav>

          {/* Legal Links */}
          <nav aria-label="Rechtliche Informationen">
            <h2 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Rechtliches</h2>
            <ul className="space-y-1.5 sm:space-y-2 text-gray-600 text-xs sm:text-sm" role="list">
              <li>
                <Link
                  to="/impressum"
                  className="hover:text-hostgains transition-colors inline-block py-1 min-h-[44px] flex items-center"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  to="/datenschutz"
                  className="hover:text-hostgains transition-colors inline-block py-1 min-h-[44px] flex items-center"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Media */}
          <nav aria-label="Social Media Links">
            <h2 className="font-bold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Social Media</h2>
            <ul className="flex gap-3 sm:gap-4" role="list">
              <li>
                <a
                  href="https://www.instagram.com/hostgains/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-sand-dark flex items-center justify-center text-gray-600 hover:bg-hostgains hover:text-white transition-colors min-w-[44px] min-h-[44px]"
                  aria-label="hostgains auf Instagram folgen"
                >
                  <Instagram size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/hostgains.at"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-sand-dark flex items-center justify-center text-gray-600 hover:bg-hostgains hover:text-white transition-colors min-w-[44px] min-h-[44px]"
                  aria-label="hostgains auf Facebook folgen"
                >
                  <Facebook size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/hostgains"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-sand-dark flex items-center justify-center text-gray-600 hover:bg-hostgains hover:text-white transition-colors min-w-[44px] min-h-[44px]"
                  aria-label="hostgains auf LinkedIn folgen"
                >
                  <Linkedin size={18} className="sm:w-5 sm:h-5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sand-dark pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-gray-400 text-[10px] sm:text-xs text-center sm:text-left">
            © {currentYear} hostgains. Alle Rechte vorbehalten. Kurzzeitvermietung Klagenfurt & Wörthersee.
          </p>
          <p className="text-gray-400 text-[10px] sm:text-xs">
            <span className="font-medium">Vermietung, die läuft.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
