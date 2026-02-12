import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Informationen zu hostgains - Kurzzeitvermietung Management in Kärnten.',
  alternates: {
    canonical: 'https://hostgains.at/impressum',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ImpressumPage() {
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
            Impressum
          </h1>

          <div className="prose prose-gray max-w-none">
            {/* Angaben gemäß § 5 ECG */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Angaben gemäß § 5 ECG:
              </h2>
              <address className="not-italic text-gray-700 leading-relaxed">
                <p className="font-semibold text-gray-900 mb-2">Mario Brenner</p>
                <div className="flex items-start gap-2 mb-1">
                  <MapPin size={16} className="mt-1 shrink-0 text-hostgains" />
                  <span>
                    Drautalstraße 48<br />
                    9061 Klagenfurt am Wörthersee<br />
                    Österreich
                  </span>
                </div>
              </address>
            </section>

            {/* Kontakt */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Kontakt:
              </h2>
              <div className="space-y-2 text-gray-700">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="shrink-0 text-hostgains" />
                  <a href="tel:+4367762180829" className="hover:text-hostgains transition-colors">
                    +43 677 62180829
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="shrink-0 text-hostgains" />
                  <a href="mailto:info@hostgains.at" className="hover:text-hostgains transition-colors">
                    info@hostgains.at
                  </a>
                </div>
              </div>
            </section>

            {/* Haftungsausschluss */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Haftungsausschluss (Disclaimer)
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Haftung für Inhalte
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wir sind als Diensteanbieter für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Gemäß § 18 Abs. 1 ECG sind wir als Diensteanbieter jedoch nicht verpflichtet, von uns übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Haftung für Links
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Urheberrecht
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
