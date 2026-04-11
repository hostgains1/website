import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { MiniSocialProof } from '@/components/MiniSocialProof';
import { UnterseitenFAQ, airbnbManagementKaerntenFAQs } from '@/components/UnterseitenFAQ';
import {
  ArrowRight,
  MapPin,
  Sun,
  Snowflake,
  Calendar,
  Users,
  TrendingUp,
  Mountain,
  Waves,
  Building2,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Airbnb Management in Kärnten | Wörthersee, Villach & Region',
  description: 'Lokales Airbnb Management in Kärnten: Wörthersee, Villach, Klagenfurt. Wir kennen den Markt, die Saisons und die Events. Professionelle Kurzzeitvermietung vor Ort.',
  alternates: {
    canonical: 'https://www.hostgains.at/airbnb-management-kaernten',
  },
  openGraph: {
    title: 'Airbnb Management Kärnten | hostgains',
    description: 'Professionelle Kurzzeitvermietung in Kärnten. Lokale Expertise für Wörthersee, Villach und die Region.',
    url: 'https://www.hostgains.at/airbnb-management-kaernten',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Airbnb Management Kärnten',
  serviceType: 'Kurzzeitvermietung Management',
  provider: {
    '@type': 'LocalBusiness',
    name: 'hostgains',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Drautalstraße 48',
      addressLocality: 'Klagenfurt am Wörthersee',
      postalCode: '9061',
      addressRegion: 'Kärnten',
      addressCountry: 'AT',
    },
  },
  areaServed: [
    { '@type': 'State', name: 'Kärnten' },
    { '@type': 'City', name: 'Klagenfurt am Wörthersee' },
    { '@type': 'City', name: 'Villach' },
    { '@type': 'City', name: 'Velden am Wörthersee' },
    { '@type': 'City', name: 'Pörtschach am Wörthersee' },
    { '@type': 'City', name: 'Maria Wörth' },
    { '@type': 'City', name: 'Krumpendorf' },
  ],
  description: 'Lokales Airbnb Management für Ferienwohnungen in Kärnten. Spezialisiert auf Wörthersee-Region, Villach und Umgebung.',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.hostgains.at/' },
    { '@type': 'ListItem', position: 2, name: 'Airbnb Management', item: 'https://www.hostgains.at/airbnb-management' },
    { '@type': 'ListItem', position: 3, name: 'Kärnten', item: 'https://www.hostgains.at/airbnb-management-kaernten' },
  ],
};

const destinations = [
  {
    icon: Waves,
    name: 'Wörthersee',
    description: 'Kärntens Premium-Destination. Velden, Pörtschach, Maria Wörth und Krumpendorf ziehen im Sommer ein zahlungskräftiges Publikum an. Durchschnittliche Nachtpreise liegen 40 bis 60 Prozent über dem Kärntner Schnitt.',
    highlights: ['Premium-Preissegment', 'Starke Sommersaison', 'Events: GTI-Treffen, Ironman', 'Anspruchsvolle Gäste'],
  },
  {
    icon: Building2,
    name: 'Villach',
    description: 'Kärntens zweitgrößte Stadt verbindet Städtetrip mit Naturerlebnis. Die Nähe zu Italien, die Therme Warmbad und die gute Erreichbarkeit machen Villach zum ganzjährigen Ziel für verschiedene Zielgruppen.',
    highlights: ['Ganzjährige Nachfrage', 'Thermentourismus', 'Alpen-Adria-Durchreisende', 'Städtereisen'],
  },
  {
    icon: Mountain,
    name: 'Klagenfurt & Umgebung',
    description: 'Die Landeshauptstadt bietet die beste Kombination aus urbaner Infrastruktur und Seezugang. Geschäftsreisende unter der Woche, Touristen am Wochenende – und im Sommer Badeurlauber.',
    highlights: ['Business-Reisende', 'Kulturveranstaltungen', 'Flughafennähe', 'Diverse Zielgruppen'],
  },
];

const seasonData = [
  {
    icon: Sun,
    season: 'Hochsaison (Juni – August)',
    share: '55–60%',
    description: 'Die Sommermonate generieren den Großteil des Jahresumsatzes. Maximale Preise sind möglich, die Nachfrage übersteigt oft das Angebot. Mindestaufenthalte von 3 bis 7 Nächten sind durchsetzbar.',
    strategy: 'Premium-Pricing, strenge Mindestaufenthalte, frühzeitige Buchungsannahme',
  },
  {
    icon: Calendar,
    season: 'Nebensaison (April – Mai, September – Oktober)',
    share: '25–30%',
    description: 'Frühling und Herbst bringen weniger Touristen, aber konstante Nachfrage von Geschäftsreisenden und Eventbesuchern. Die Preise müssen flexibler sein.',
    strategy: 'Moderate Preise, flexible Buchungsbedingungen, gezielte Wochenend-Angebote',
  },
  {
    icon: Snowflake,
    season: 'Wintersaison (November – März)',
    share: '10–15%',
    description: 'Anders als in Tirol oder Salzburg gibt es keinen klassischen Skitourismus. Der Winter erfordert kreative Strategien: Langzeitmieter, Monteure, Thermenbesucher.',
    strategy: 'Langzeit-Rabatte, Monatsmieten, Kooperationen mit lokalen Arbeitgebern',
  },
];

const localAdvantages = [
  {
    title: 'Vor-Ort-Präsenz',
    description: 'Wir sind in Klagenfurt am Wörthersee ansässig. Bei Problemen sind wir innerhalb von 30 Minuten vor Ort – nicht in einem Call-Center in einer anderen Zeitzone.',
  },
  {
    title: 'Lokales Netzwerk',
    description: 'Zuverlässige Reinigungsteams, schnelle Handwerker, bewährte Dienstleister. Diese Kontakte entstehen über Jahre, nicht über Google-Suchen.',
  },
  {
    title: 'Event-Wissen',
    description: 'Vom GTI-Treffen bis zum Ironman, vom Altstadtzauber bis zur Seebühne – wir wissen, wann die Preise verdreifacht werden können und wann Zurückhaltung angesagt ist.',
  },
  {
    title: 'Marktkenntnis',
    description: 'Jeder Ort hat seine Eigenheiten. Was in Velden funktioniert, scheitert in Villach. Wir kennen die lokalen Unterschiede und passen die Strategie entsprechend an.',
  },
];

export default function AirbnbManagementKaerntenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-sand-light">
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/ferienwohnung vermieten Kärnten.jpg"
              alt="Ferienwohnung vermieten in Kärnten"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-hostgains/90 via-hostgains/80 to-hostgains/90" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center py-24 sm:py-32">
            <nav className="text-sm text-white/60 mb-6 flex justify-center" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 flex-wrap justify-center">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li><Link href="/airbnb-management" className="hover:text-white transition-colors">Airbnb Management</Link></li>
                <li>/</li>
                <li className="text-white">Kärnten</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 font-display">
              Kurzzeitvermietung in Kärnten
            </h1>
            <p className="text-xl sm:text-2xl text-sand font-medium mb-6">
              Wörthersee · Villach · Klagenfurt
            </p>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Lokale Expertise für deinen Erfolg. Wir kennen den Markt, die Saisons und die Events – weil wir hier leben und arbeiten.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/analyse"
                className="inline-flex items-center justify-center gap-2 bg-sand hover:bg-white text-hostgains font-bold px-8 py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg"
              >
                Kostenlose Potenzialanalyse
                <ArrowRight size={20} />
              </Link>
              <a
                href="#destinations"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all"
              >
                Regionen entdecken
              </a>
            </div>
          </div>
        </section>

        <main id="main-content">
          {/* Kärnten Introduction */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-display">
                  Warum Kärnten für Kurzzeitvermietung?
                </h2>

                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Kärnten zählt zu den beliebtesten Urlaubsregionen Österreichs. Die Kombination aus Bergen, Seen und mildem Klima zieht jährlich Millionen Besucher an. Der Wörthersee ist Österreichs wärmster Badesee, Villach verbindet Alpen und Adria, und die gesamte Region bietet von Wandern über Radfahren bis Thermenurlaub ein breites Freizeitangebot.
                  </p>

                  <p>
                    Für Eigentümer von Ferienwohnungen bedeutet das: ein attraktiver Markt mit stabiler Nachfrage. Allerdings ist Kärnten auch ein Markt mit starker Saisonalität und wachsendem Wettbewerb. Die Anzahl der Kurzzeitvermietungsinserate am Wörthersee ist seit 2021 um 67 Prozent gestiegen, während die durchschnittlichen Umsätze pro Objekt um 23 Prozent gesunken sind.
                  </p>

                  <p className="text-gray-700 font-medium">
                    In diesem Umfeld macht professionelles Management den Unterschied. Wer den lokalen Markt versteht, die Saisons richtig einschätzt und die Preisstrategie entsprechend anpasst, kann auch heute noch überdurchschnittliche Ergebnisse erzielen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Destinations Section */}
          <section id="destinations" className="py-16 sm:py-20 bg-sand-light">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
                    Top-Destinationen in Kärnten
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Jede Region hat ihre Eigenheiten. Die Strategie muss zum Standort passen.
                  </p>
                </div>

                <div className="space-y-6">
                  {destinations.map((destination, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-xl bg-hostgains/10 flex items-center justify-center">
                            <destination.icon className="w-7 h-7 text-hostgains" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-display">
                            {destination.name}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {destination.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {destination.highlights.map((highlight, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center gap-1 text-sm bg-sand px-3 py-1 rounded-full text-gray-700"
                              >
                                <CheckCircle2 className="w-3 h-3 text-hostgains" />
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Season Analysis */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
                    Saisonanalyse: Wann verdient man in Kärnten?
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Die Saisonalität in Kärnten ist ausgeprägter als in den meisten anderen österreichischen Regionen. Das erfordert eine angepasste Strategie.
                  </p>
                </div>

                <div className="space-y-6">
                  {seasonData.map((season, index) => (
                    <div
                      key={index}
                      className="bg-sand-light rounded-2xl p-6 sm:p-8"
                    >
                      <div className="flex flex-col sm:flex-row gap-6">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-12 h-12 rounded-xl bg-hostgains flex items-center justify-center flex-shrink-0">
                            <season.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <h3 className="text-lg font-bold text-gray-900">{season.season}</h3>
                              <span className="bg-hostgains text-white text-sm font-semibold px-3 py-1 rounded-full">
                                {season.share} Jahresumsatz
                              </span>
                            </div>
                            <p className="text-gray-600 leading-relaxed mb-3">
                              {season.description}
                            </p>
                            <p className="text-sm text-gray-700">
                              <strong>Strategie:</strong> {season.strategy}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 bg-hostgains/5 rounded-2xl p-6 sm:p-8 border border-hostgains/10">
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Fazit:</strong> Die extreme Saisonalität in Kärnten erfordert eine differenzierte Strategie. Wer im Sommer maximiert und im Winter kreativ wird, kann trotz schwacher Wintermonate ein attraktives Jahresergebnis erzielen. Professionelles Management macht den Unterschied zwischen 40 und 65 Prozent Jahresauslastung.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Local Advantages */}
          <section className="py-16 sm:py-20 bg-hostgains text-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 font-display">
                    Der lokale Vorteil
                  </h2>
                  <p className="text-white/80 max-w-2xl mx-auto">
                    Management aus der Ferne funktioniert – bis zum ersten Problem. Dann zählt, wer vor Ort ist.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {localAdvantages.map((advantage, index) => (
                    <div
                      key={index}
                      className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin className="w-5 h-5 text-sand" />
                        <h3 className="font-bold text-white text-lg">{advantage.title}</h3>
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-10 text-center text-sand italic text-lg">
                  Dieser lokale Vorteil lässt sich nicht durch Algorithmen ersetzen. Er entsteht durch Präsenz, Erfahrung und Beziehungen vor Ort.
                </p>
              </div>
            </div>
          </section>

          {/* Tourism Stats */}
          <section className="py-16 sm:py-20 bg-sand-light">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-display text-center">
                  Kärntner Tourismus in Zahlen
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
                  <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                    <div className="text-3xl sm:text-4xl font-bold text-hostgains mb-2">13,5 Mio</div>
                    <div className="text-sm text-gray-600">Nächtigungen pro Jahr</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                    <div className="text-3xl sm:text-4xl font-bold text-hostgains mb-2">2,9 Mio</div>
                    <div className="text-sm text-gray-600">Gästeankünfte</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                    <div className="text-3xl sm:text-4xl font-bold text-hostgains mb-2">4,7 Tage</div>
                    <div className="text-sm text-gray-600">Durchschnittliche Aufenthaltsdauer</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
                    <div className="text-3xl sm:text-4xl font-bold text-hostgains mb-2">67%</div>
                    <div className="text-sm text-gray-600">Deutsche Gäste</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm">
                  <p className="text-gray-700 leading-relaxed">
                    Kärnten lebt vom Tourismus. Die Region zählt zu den Top-5-Destinationen Österreichs und zieht besonders deutsche Gäste an. Für Kurzzeitvermietung bedeutet das: ein stabiler Quellmarkt mit klaren Präferenzen. Deutsche Gäste buchen früh, bleiben länger und erwarten hohe Standards. Wer diese Erwartungen erfüllt, kann mit treuen Stammgästen rechnen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mini Social Proof */}
          <MiniSocialProof
            title="Ergebnisse aus Kärnten"
            subtitle="So entwickeln sich Ferienwohnungen unter unserem Management"
            region="kaernten"
            className="bg-white"
          />

          {/* FAQ Section */}
          <UnterseitenFAQ
            title="Häufige Fragen zu Kärnten"
            subtitle="Was Eigentümer über den regionalen Markt wissen möchten"
            faqs={airbnbManagementKaerntenFAQs}
            className="bg-sand-light"
          />

          {/* Blog Teaser */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-display">
                  Mehr zum Thema Kurzzeitvermietung in Kärnten
                </h2>
                <p className="text-gray-600 mb-8">
                  Im Blog teilen wir regionale Insights und Strategien für erfolgreiche Vermietung in Kärnten.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/blog/lohnt-sich-airbnb-kaernten-2026"
                    className="bg-sand-light px-5 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-hostgains hover:shadow-md transition-all"
                  >
                    Lohnt sich Airbnb in Kärnten 2026?
                  </Link>
                  <Link
                    href="/blog/nebensaison-ferienwohnung-kaernten"
                    className="bg-sand-light px-5 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-hostgains hover:shadow-md transition-all"
                  >
                    Nebensaison-Strategien
                  </Link>
                  <Link
                    href="/blog"
                    className="bg-hostgains px-5 py-3 rounded-xl text-sm font-medium text-white hover:bg-hostgains-light transition-all"
                  >
                    Alle Blogartikel
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 sm:py-24 bg-hostgains relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              />
            </div>

            <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 font-display">
                  Deine Ferienwohnung in Kärnten?
                </h2>
                <p className="text-white/80 mb-10 text-lg">
                  In der kostenlosen Potenzialanalyse erfährst du, was dein Objekt am Kärntner Markt realistisch erzielen kann. Mit konkreten Zahlen, nicht mit Versprechungen.
                </p>
                <Link
                  href="/analyse"
                  className="inline-flex items-center justify-center gap-2 bg-sand hover:bg-white text-hostgains font-bold px-10 py-5 rounded-xl transition-all hover:scale-[1.02] shadow-lg text-lg"
                >
                  Kostenlose Analyse anfordern
                  <ArrowRight size={22} />
                </Link>
                <p className="text-white/60 text-sm mt-6">
                  Unverbindlich. Keine versteckten Kosten.
                </p>

                <div className="mt-10 pt-10 border-t border-white/20">
                  <p className="text-white/70 mb-4">Mehr erfahren:</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link
                      href="/airbnb-management"
                      className="text-sand hover:text-white transition-colors underline"
                    >
                      Allgemeines Airbnb Management
                    </Link>
                    <Link
                      href="/leistungen"
                      className="text-sand hover:text-white transition-colors underline"
                    >
                      Alle Leistungen im Detail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
