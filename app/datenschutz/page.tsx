import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von hostgains - Informationen zum Umgang mit Ihren personenbezogenen Daten.',
  alternates: {
    canonical: 'https://hostgains.at/datenschutz',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-sand-dark sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="block">
              <Image src="/logo.png" alt="hostgains" width={120} height={48} className="h-10 sm:h-12 w-auto" />
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 hover:text-hostgains transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              <span>Zurück zur Startseite</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-8">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-gray max-w-none space-y-10">
            {/* 1. Datenschutz auf einen Blick */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                1. Datenschutz auf einen Blick
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Allgemeine Hinweise
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Datenerfassung auf dieser Website
                  </h3>

                  <h4 className="font-medium text-gray-900 mt-4 mb-2">
                    Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                  </p>

                  <h4 className="font-medium text-gray-900 mt-4 mb-2">
                    Wie erfassen wir Ihre Daten?
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Hosting */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                2. Hosting
              </h2>

              <p className="text-gray-700 leading-relaxed mb-4">
                Wir hosten die Inhalte unserer Website bei Vercel Inc.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Vercel
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
              </p>
            </section>

            {/* 3. Allgemeine Hinweise und Pflichtinformationen */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                3. Allgemeine Hinweise und Pflichtinformationen
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Datenschutz
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Hinweis zur verantwortlichen Stelle
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                  </p>
                  <address className="not-italic text-gray-700 leading-relaxed mb-4">
                    <p className="font-semibold text-gray-900">Mario Brenner</p>
                    <div className="flex items-start gap-2 mt-2">
                      <MapPin size={16} className="mt-1 shrink-0 text-hostgains" />
                      <span>
                        Drautalstraße 48<br />
                        9061 Klagenfurt am Wörthersee<br />
                        Österreich
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Phone size={16} className="shrink-0 text-hostgains" />
                      <a href="tel:+4367762180829" className="hover:text-hostgains transition-colors">
                        +43 677 62180829
                      </a>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Mail size={16} className="shrink-0 text-hostgains" />
                      <a href="mailto:info@hostgains.at" className="hover:text-hostgains transition-colors">
                        info@hostgains.at
                      </a>
                    </div>
                  </address>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Speicherdauer
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Widerruf Ihrer Einwilligung zur Datenverarbeitung
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Beschwerderecht bei der zuständigen Aufsichtsbehörde
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde in Österreich ist die Österreichische Datenschutzbehörde.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Recht auf Datenübertragbarkeit
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Auskunft, Berichtigung und Löschung
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Analyse-Tools */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                4. Analyse-Tools
              </h2>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Vercel Analytics
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Diese Website nutzt Vercel Analytics, einen Webanalysedienst der Vercel Inc. Vercel Analytics verwendet keine Cookies und speichert keine personenbezogenen Daten. Die Analyse erfolgt auf Grundlage anonymisierter Daten.
                </p>
              </div>
            </section>

            {/* Source */}
            <section className="pt-6 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                Quelle:{' '}
                <a
                  href="https://www.e-recht24.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-hostgains hover:underline"
                >
                  https://www.e-recht24.de
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
