import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { MiniSocialProof } from '@/components/MiniSocialProof';
import { UnterseitenFAQ, leistungenFAQs } from '@/components/UnterseitenFAQ';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Camera,
  TrendingUp,
  MessageCircle,
  SprayCan,
  Share2,
  Search,
  Star,
  FileText,
  CheckCircle2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Unsere Leistungen | Kurzzeitvermietung Full-Service Kärnten',
  description: 'Full-Service Kurzzeitvermietung in Kärnten: Listing-Optimierung, dynamisches Pricing, 24/7 Gästebetreuung, Reinigungskoordination, Multi-Plattform-Vertrieb. Performance-basiert ohne Fixkosten.',
  alternates: {
    canonical: 'https://www.hostgains.at/leistungen',
  },
  openGraph: {
    title: 'Unsere Leistungen | hostgains Kurzzeitvermietung',
    description: 'Full-Service Ferienwohnung-Management: Von der Inseratserstellung bis zur Reinigung. Alles aus einer Hand, 100% performance-basiert.',
    url: 'https://www.hostgains.at/leistungen',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kurzzeitvermietung Full-Service Management',
  serviceType: 'Property Management',
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
  areaServed: {
    '@type': 'State',
    name: 'Kärnten',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Kurzzeitvermietung Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Listing-Optimierung',
          description: 'Professionelle Fotos und psychologisch optimierte Inseratstexte für maximale Buchungsrate',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dynamisches Pricing',
          description: 'KI-gestützte Preisoptimierung basierend auf Nachfrage, Saison und Events',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24/7 Gästebetreuung',
          description: 'Rund-um-die-Uhr Kommunikation in Deutsch und Englisch',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Reinigungskoordination',
          description: 'Koordination lokaler Reinigungsteams mit Qualitätskontrolle',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Multi-Plattform-Vertrieb',
          description: 'Synchronisierte Präsenz auf Airbnb, Booking.com und weiteren Plattformen',
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.hostgains.at/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Leistungen',
      item: 'https://www.hostgains.at/leistungen',
    },
  ],
};

const services = [
  {
    id: 'listing',
    icon: Camera,
    title: 'Listing-Optimierung',
    description: 'Der erste Eindruck entscheidet. Ein optimiertes Inserat erzielt 40 bis 60 Prozent mehr Buchungen als ein durchschnittliches. Wir erstellen professionelle Fotos, die deine Ferienwohnung im besten Licht zeigen, und schreiben Texte, die verkaufen statt beschreiben.',
    details: [
      'Professionelle Immobilienfotografie',
      'Psychologisch optimierte Inseratstexte',
      'SEO-optimierte Titel für bessere Sichtbarkeit',
      'Strategische Positionierung im Markt',
    ],
    blogLink: '/blog/airbnb-inserat-amateur-vs-profi',
    blogText: 'Mehr über Inseratsoptimierung',
  },
  {
    id: 'pricing',
    icon: TrendingUp,
    title: 'Dynamisches Pricing',
    description: 'Der richtige Preis ändert sich täglich. Dieselbe Nacht kann 75 Euro oder 220 Euro wert sein – abhängig von Wochentag, Saison, lokalen Events und Mitbewerberverhalten. Wir passen die Preise deiner Ferienwohnung täglich an, um den maximalen Umsatz zu erzielen.',
    details: [
      'Tägliche Preisanpassung per Algorithmus',
      'Berücksichtigung lokaler Events',
      'Saisonale Optimierung',
      'Mitbewerber-Monitoring',
    ],
    blogLink: '/blog/dynamisches-pricing-mythen-realitaet',
    blogText: 'Mehr über dynamisches Pricing',
  },
  {
    id: 'gaeste',
    icon: MessageCircle,
    title: '24/7 Gästekommunikation',
    description: 'Schnelle Antworten erhöhen die Buchungswahrscheinlichkeit um 40 Prozent. Wir beantworten Anfragen rund um die Uhr – auch nachts um 3 Uhr – in Deutsch und Englisch. Aber es geht nicht nur um Geschwindigkeit: Professionelle Kommunikation antizipiert Fragen, bevor sie gestellt werden.',
    details: [
      'Antwortzeit unter einer Stunde',
      'Proaktive Check-in-Informationen',
      'Problemlösung vor Ort',
      'Mehrsprachiger Support',
    ],
    blogLink: '/blog/gaestekommunikation-denkfehler',
    blogText: 'Mehr über Gästekommunikation',
  },
  {
    id: 'reinigung',
    icon: SprayCan,
    image: '/reinigung.png',
    title: 'Reinigung & Qualitätskontrolle',
    description: '38 Prozent aller negativen Bewertungen erwähnen Sauberkeit. Reinigung ist kein Kostenfaktor – sie ist ein kritischer Geschäftsprozess. Wir koordinieren zuverlässige Reinigungsteams und führen Qualitätskontrollen nach jedem Gast durch, damit deine Wohnung auch nach 100 Gästen wie neu aussieht.',
    details: [
      'Koordination lokaler Reinigungsteams',
      'Qualitätskontrolle nach jedem Aufenthalt',
      'Wäscheservice und Bestandsmanagement',
      'Fotodokumentation bei jedem Wechsel',
    ],
    blogLink: '/blog/reinigung-ferienwohnung-erfolgsfaktor',
    blogText: 'Mehr über Reinigungsmanagement',
  },
  {
    id: 'multichannel',
    icon: Share2,
    title: 'Multi-Plattform-Vertrieb',
    description: 'Airbnb allein reicht nicht. Wir platzieren deine Ferienwohnung synchronisiert auf allen relevanten Plattformen: Airbnb, Booking.com, VRBO und spezialisierten Nischenportalen. Ein zentraler Kalender verhindert Doppelbuchungen und maximiert die Sichtbarkeit.',
    details: [
      'Präsenz auf 5+ Buchungsplattformen',
      'Zentrales Channel Management',
      'Automatische Kalender-Synchronisation',
      'Keine Doppelbuchungen',
    ],
  },
  {
    id: 'seo',
    icon: Search,
    title: 'Plattform-SEO',
    description: 'Die meisten Buchungen gehen an Inserate auf der ersten Seite. Wir wissen, wie der Airbnb- und Booking.com-Algorithmus funktioniert, und optimieren dein Inserat gezielt für bessere Rankings. Gezielte Keywords, optimale Antwortzeiten und strategische Preisgestaltung sorgen dafür, dass deine Ferienwohnung gesehen wird.',
    details: [
      'Algorithmus-optimierte Inserate',
      'Keyword-Recherche und -Integration',
      'Ranking-Monitoring',
      'Kontinuierliche Optimierung',
    ],
  },
  {
    id: 'bewertungen',
    icon: Star,
    title: 'Bewertungsmanagement',
    description: 'Objekte über 4,7 Sternen erzielen bis zu 45 Prozent höhere Preise. Wir arbeiten systematisch an der Bewertungsstrategie: proaktive Problemlösung verhindert negative Bewertungen, freundliche Nachverfolgung ermutigt zufriedene Gäste zur Rezension.',
    details: [
      'Proaktive Problemlösung',
      'Systematische Nachverfolgung',
      'Krisenmanagement bei Beschwerden',
      'Bewertungsanalyse und Optimierung',
    ],
  },
  {
    id: 'reporting',
    icon: FileText,
    title: 'Reporting & Transparenz',
    description: 'Du weißt jederzeit, wie deine Ferienwohnung performt. Monatliche Berichte zeigen alle relevanten Kennzahlen: Umsatz, Auslastung, Durchschnittspreis, Bewertungsentwicklung. Volle Transparenz über jeden Aspekt der Vermietung.',
    details: [
      'Monatliche Performance-Berichte',
      'Detaillierte Umsatzaufschlüsselung',
      'Vergleich zum Vormonat',
      'Markt-Benchmarking',
    ],
  },
];

export default function LeistungenPage() {
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
              src="/hero-woerthersee.webp"
              alt="Ferienwohnung am Wörthersee"
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
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-white">Leistungen</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 font-display">
              Unsere <span className="text-sand">Leistungen</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Full-Service Kurzzeitvermietung für Ferienwohnungen in Kärnten.
              Von der Inseratserstellung bis zur Reinigung – wir übernehmen alles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/analyse"
                className="inline-flex items-center justify-center gap-2 bg-sand hover:bg-white text-hostgains font-bold px-8 py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg"
              >
                Kostenlose Analyse anfordern
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/airbnb-management"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all"
              >
                Mehr über unser Management
              </Link>
            </div>
          </div>
        </section>

        <main id="main-content">
          {/* Introduction Section */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-display">
                  Warum Full-Service Management?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Die Vermietung einer Ferienwohnung klingt nach passivem Einkommen. Die Realität:
                  Preise täglich anpassen, Anfragen um Mitternacht beantworten, Reinigungsteams
                  koordinieren, Gästebeschwerden lösen. Die meisten Eigentümer investieren 8 bis 15
                  Stunden pro Woche – und verschenken trotzdem 20 bis 40 Prozent ihres möglichen Umsatzes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  hostgains übernimmt den kompletten operativen Betrieb deiner Ferienwohnung.
                  Du behältst die Kontrolle über dein Objekt und die strategischen Entscheidungen.
                  Wir liefern das Know-how, die Systeme und die tägliche Arbeit.
                </p>
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 sm:py-20 bg-sand-light">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
                    Alle Leistungen im Überblick
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Acht Kernleistungen, die zusammen ein professionelles Vermietungsmanagement ergeben.
                    Jede einzelne trägt zum Erfolg deiner Ferienwohnung bei.
                  </p>
                </div>

                <div className="space-y-8">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      id={service.id}
                      className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 scroll-mt-32"
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-xl bg-hostgains/10 flex items-center justify-center overflow-hidden">
                            {service.image ? (
                              <Image src={service.image} alt={service.title} width={56} height={56} className="w-full h-full object-cover" />
                            ) : (
                              <service.icon className="w-7 h-7 text-hostgains" />
                            )}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 font-display">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-4">
                            {service.description}
                          </p>
                          <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                            {service.details.map((detail, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                <CheckCircle2 className="w-4 h-4 text-hostgains flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                          {service.blogLink && (
                            <Link
                              href={service.blogLink}
                              className="inline-flex items-center gap-1 text-hostgains hover:underline font-medium text-sm"
                            >
                              {service.blogText}
                              <ArrowRight size={14} />
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
                    Was du erwarten kannst
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Messbare Ergebnisse statt leerer Versprechen. Die Kombination aller Leistungen
                    führt bei den meisten Objekten zu deutlichen Verbesserungen.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
                  <div className="bg-sand-light rounded-2xl p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-hostgains mb-2">20-40%</div>
                    <div className="text-sm text-gray-600 font-medium">Umsatzsteigerung</div>
                  </div>
                  <div className="bg-sand-light rounded-2xl p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-hostgains mb-2">60-75%</div>
                    <div className="text-sm text-gray-600 font-medium">Jahresauslastung</div>
                  </div>
                  <div className="bg-sand-light rounded-2xl p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-hostgains mb-2">4,8</div>
                    <div className="text-sm text-gray-600 font-medium">Durchschnittsbewertung</div>
                  </div>
                  <div className="bg-sand-light rounded-2xl p-6 text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-hostgains mb-2">&lt;1h</div>
                    <div className="text-sm text-gray-600 font-medium">Aufwand pro Monat</div>
                  </div>
                </div>

                <div className="bg-sand-light rounded-2xl p-6 sm:p-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Diese Zahlen basieren auf der Erfahrung mit vergleichbaren Objekten in Kärnten.
                    Die tatsächlichen Ergebnisse hängen von Lage, Ausstattung und Marktsituation ab.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Ob sich professionelles Management für dein Objekt rechnet, zeigt die{' '}
                    <Link href="/analyse" className="text-hostgains hover:underline font-medium">
                      kostenlose Potenzialanalyse
                    </Link>. Du erfährst, welcher Umsatz realistisch ist und welche Optimierungen
                    den größten Unterschied machen würden.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mini Social Proof */}
          <MiniSocialProof
            title="Das erreichen wir gemeinsam"
            subtitle="Echte Ergebnisse aus Kärnten"
            className="bg-sand-light"
          />

          {/* Pricing Section */}
          <section className="py-16 sm:py-20 bg-hostgains text-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 font-display">
                  Performance-basiert: Du zahlst nur, wenn du verdienst
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Keine Fixkosten, keine Einrichtungsgebühren, keine versteckten Kosten.
                  Die Provision beträgt 18% des Nettoumsatzes. Wenn du nichts verdienst,
                  zahlen wir drauf – nicht du.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/analyse"
                    className="inline-flex items-center justify-center gap-2 bg-sand hover:bg-white text-hostgains font-bold px-8 py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg"
                  >
                    Kostenlose Analyse anfordern
                    <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/airbnb-management"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all"
                  >
                    Mehr über unser Management
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Teaser */}
          <section className="py-16 sm:py-20 bg-sand-light">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 font-display">
                  Mehr zum Thema Kurzzeitvermietung
                </h2>
                <p className="text-gray-600 mb-8">
                  Im Blog teilen wir Expertenwissen zu Marktanalysen, Pricing-Strategien und Best Practices
                  für erfolgreiche Kurzzeitvermietung in Kärnten.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/blog/lohnt-sich-airbnb-kaernten-2026"
                    className="bg-white px-5 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-hostgains hover:shadow-md transition-all"
                  >
                    Lohnt sich Airbnb in Kärnten 2026?
                  </Link>
                  <Link
                    href="/blog/nebensaison-ferienwohnung-kaernten"
                    className="bg-white px-5 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-hostgains hover:shadow-md transition-all"
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

          {/* FAQ Section */}
          <UnterseitenFAQ
            title="Häufige Fragen zu unseren Leistungen"
            subtitle="Was Eigentümer wissen möchten"
            faqs={leistungenFAQs}
            className="bg-white"
          />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
