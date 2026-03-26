import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { MiniSocialProof } from '@/components/MiniSocialProof';
import {
  ArrowRight,
  ChevronDown,
  Camera,
  BarChart3,
  TrendingUp,
  MessageCircle,
  Sparkles,
  Star,
  FileText,
  Clock,
  Briefcase,
  Home,
  Building2,
  Search,
  Target,
  Settings,
  Headphones,
  PieChart
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wieso professionelles Management? | Hostgains',
  description: 'Warum sich professionelles Kurzzeitvermietung-Management lohnt. Mehr Umsatz, weniger Aufwand, bessere Bewertungen. Full-Service für Ferienwohnungen.',
  alternates: {
    canonical: 'https://hostgains.at/airbnb-management',
  },
  openGraph: {
    title: 'Wieso professionelles Management? | Hostgains',
    description: 'Erfahre, warum sich professionelles Management für deine Ferienwohnung lohnt. Mehr Umsatz bei weniger Aufwand.',
    url: 'https://hostgains.at/airbnb-management',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Professionelles Kurzzeitvermietung Management',
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
  areaServed: {
    '@type': 'Country',
    name: 'Österreich',
  },
  description: 'Professionelles Management für Ferienwohnungen. Inseratsoptimierung, dynamisches Pricing, 24/7 Gästebetreuung und Reinigungskoordination.',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hostgains.at/' },
    { '@type': 'ListItem', position: 2, name: 'Professionelles Management', item: 'https://hostgains.at/airbnb-management' },
  ],
};

const faqItems = [
  {
    question: 'Was kostet professionelles Management?',
    answer: 'hostgains arbeitet performance-basiert. Die Provision liegt bei 18% des Nettoumsatzes. Es gibt keine Fixkosten, keine Einrichtungsgebühren und keine versteckten Kosten. Du zahlst nur, wenn du verdienst.',
  },
  {
    question: 'Wie viel Zeit spart professionelles Management?',
    answer: 'Die meisten Eigentümer investieren 8 bis 15 Stunden pro Woche in ihre Ferienwohnung: Anfragen beantworten, Preise anpassen, Reinigung koordinieren, Probleme lösen. Mit professionellem Management sinkt dieser Aufwand auf unter eine Stunde pro Monat.',
  },
  {
    question: 'Lohnt sich Kurzzeitvermietung noch?',
    answer: 'Ja, aber der Markt hat sich verändert. Die Anzahl der Inserate ist in vielen Regionen stark gestiegen, während die durchschnittlichen Umsätze pro Objekt gesunken sind. Professionell geführte Objekte performen überdurchschnittlich, weil sie bei Pricing, Fotografie und Kommunikation optimiert sind.',
  },
  {
    question: 'Gibt es Mindestlaufzeiten oder Kündigungsfristen?',
    answer: 'Die Mindestlaufzeit beträgt 3 Monate. Danach ist der Vertrag monatlich kündbar mit 30 Tagen Frist. Wir setzen auf Leistung, nicht auf lange Bindungen.',
  },
  {
    question: 'Wie funktioniert die Abrechnung?',
    answer: 'Du erhältst monatlich eine detaillierte Abrechnung. Der Umsatz wird direkt auf dein Konto ausgezahlt, die Provision wird separat in Rechnung gestellt. Alle Buchungen, Preise und Gebühren sind transparent einsehbar.',
  },
  {
    question: 'Wer entscheidet über den Preis meiner Wohnung?',
    answer: 'Du gibst einen Mindestpreis vor, der nie unterschritten wird. Darüber hinaus optimieren wir dynamisch basierend auf Nachfrage, Saison, Events und Mitbewerberpreisen. Du behältst die Kontrolle, wir liefern die Daten.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const services = [
  {
    icon: Camera,
    title: 'Inseratsoptimierung',
    description: 'Professionelle Fotografie, psychologisch optimierte Texte und strategische Positionierung. Ein optimiertes Inserat erzielt 40 bis 60 Prozent mehr Buchungen.',
  },
  {
    icon: BarChart3,
    title: 'Marktanalyse',
    description: 'Wir analysieren den lokalen Markt, identifizieren Mitbewerber und bestimmen den optimalen Preiskorridor. Entscheidungen basieren auf Daten.',
  },
  {
    icon: TrendingUp,
    title: 'Dynamisches Pricing',
    description: 'Tägliche Preisanpassung basierend auf Nachfrage, Saison, lokalen Events und Mitbewerberverhalten. Der Unterschied zwischen 60 und 80 Prozent Auslastung.',
  },
  {
    icon: MessageCircle,
    title: 'Gästekommunikation',
    description: '24/7 erreichbar, in Deutsch und Englisch. Schnelle Antworten erhöhen die Buchungswahrscheinlichkeit um 40 Prozent.',
  },
  {
    icon: Sparkles,
    title: 'Reinigung & Koordination',
    description: 'Zuverlässige Reinigungsteams, Qualitätskontrollen nach jedem Gast, Wäscheservice und Nachfüllen von Verbrauchsmaterialien.',
  },
  {
    icon: Star,
    title: 'Bewertungsmanagement',
    description: 'Systematische Nachverfolgung und proaktive Problemlösung. Objekte über 4,7 Sternen erzielen bis zu 45 Prozent höhere Preise.',
  },
  {
    icon: FileText,
    title: 'Reporting & Analyse',
    description: 'Monatliche Berichte mit allen relevanten Kennzahlen: Umsatz, Auslastung, Durchschnittspreis, Bewertungsentwicklung.',
  },
];

const processSteps = [
  {
    icon: Search,
    number: '01',
    title: 'Analyse',
    description: 'Kostenlose Potenzialanalyse deines Objekts. Bewertung von Lage, Ausstattung, Preisgestaltung und Marktpositionierung. Du erhältst eine realistische Einschätzung des erreichbaren Jahresumsatzes.',
  },
  {
    icon: Target,
    number: '02',
    title: 'Strategie',
    description: 'Individuelle Strategie basierend auf der Analyse. Zielgruppe, Positionierung, Mindestpreise, Mindestaufenthalt – diese Entscheidungen treffen wir gemeinsam.',
  },
  {
    icon: Settings,
    number: '03',
    title: 'Optimierung',
    description: 'Überarbeitung des Inserats: professionelle Fotos, neue Texte, optimierte Titel. Bei Bedarf Empfehlungen zur Ausstattung für bessere Bewertungen.',
  },
  {
    icon: Headphones,
    number: '04',
    title: 'Operative Betreuung',
    description: 'Täglicher Betrieb: Anfragen, Buchungen, Preise, Reinigung, Probleme. Du wirst nur bei strategischen Entscheidungen kontaktiert.',
  },
  {
    icon: PieChart,
    number: '05',
    title: 'Reporting',
    description: 'Monatlicher Bericht: Umsatz, Auslastung, Tagespreis, Bewertungen, Vergleich zum Vormonat. Volle Transparenz über jeden Aspekt.',
  },
];

const targetGroups = [
  {
    icon: Clock,
    title: 'Eigentümer mit wenig Zeit',
    description: 'Die Wohnung soll Einnahmen generieren, aber nicht zum zweiten Job werden. Du hast Beruf, Familie oder andere Prioritäten.',
  },
  {
    icon: Briefcase,
    title: 'Kapitalanleger',
    description: 'Die Immobilie ist ein Investment. Du willst maximale Rendite bei minimalem Aufwand. Professionelles Management optimiert beides.',
  },
  {
    icon: Home,
    title: 'Ferienwohnungsbesitzer',
    description: 'Du nutzt die Wohnung selbst nur wenige Wochen im Jahr. Den Rest der Zeit soll sie Einnahmen bringen.',
  },
  {
    icon: Building2,
    title: 'Investoren mit mehreren Objekten',
    description: 'Mit jedem zusätzlichen Objekt steigt der Verwaltungsaufwand überproportional. Ab zwei Objekten wird Management wirtschaftlich sinnvoll.',
  },
];

const results = [
  { value: '20-40%', label: 'Umsatzsteigerung' },
  { value: '60-75%', label: 'Jahresauslastung' },
  { value: '4,8', label: 'Durchschnittsbewertung' },
  { value: '<1h', label: 'Aufwand pro Monat' },
];

export default function AirbnbManagementPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-sand-light">
        <Navbar />

        {/* Hero Section */}
        <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/airbnb manegement kärnten.jpg"
              alt="Professionelles Kurzzeitvermietung Management"
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
                <li className="text-white">Professionelles Management</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 font-display">
              Wieso professionelles Management?
            </h1>
            <p className="text-xl sm:text-2xl text-sand font-medium mb-6">
              Mehr Umsatz. Weniger Aufwand. Null Stress.
            </p>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Die Vermietung einer Ferienwohnung klingt nach passivem Einkommen –
              bis man merkt, wie viel Arbeit wirklich dahintersteckt.
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
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all"
              >
                Leistungen entdecken
              </a>
            </div>
          </div>
        </section>

        <main id="main-content">
          {/* Introduction */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto">
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
                  Der Aufwand für professionelle Kurzzeitvermietung wird unterschätzt.
                  Eigentümer starten mit Optimismus und enden mit Erschöpfung. Die Buchungen
                  laufen, aber der Stress auch. Urlaub wird unmöglich, weil immer jemand
                  ein- oder auscheckt.
                </p>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
                  Gleichzeitig bleiben Einnahmen auf der Strecke. Falsche Preise in der
                  Hochsaison, leere Wochen in der Nebensaison, mittelmäßige Bewertungen,
                  weil die Kommunikation nicht stimmt. Die meisten Eigentümer verschenken
                  20 bis 40 Prozent ihres möglichen Umsatzes – ohne es zu wissen.
                </p>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                  Airbnb Management bedeutet: Wir übernehmen den operativen Betrieb
                  deiner Ferienwohnung. Du behältst die Kontrolle über dein Objekt und
                  die strategischen Entscheidungen. Wir liefern das Know-how, die Systeme
                  und die tägliche Arbeit.
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-16 sm:py-20 bg-sand-light">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
                    Was umfasst professionelles Airbnb Management?
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Full-Service Betreuung für deine Ferienwohnung – von der Optimierung bis zum täglichen Betrieb.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                    >
                      <div className="w-12 h-12 rounded-xl bg-hostgains/10 flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-hostgains" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{service.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-10 text-center text-gray-600">
                  Eine detaillierte Übersicht aller Leistungen findest du auf unserer{' '}
                  <Link href="/leistungen" className="text-hostgains hover:underline font-medium">
                    Leistungsseite
                  </Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
                    So funktioniert unser Airbnb Management
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Von der ersten Analyse bis zum laufenden Betrieb – ein klarer Prozess für maximale Ergebnisse.
                  </p>
                </div>

                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div
                      key={index}
                      className="flex gap-6 items-start bg-sand-light rounded-2xl p-6 sm:p-8"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-2xl bg-hostgains flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{step.number}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <step.icon className="w-5 h-5 text-hostgains" />
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Professional Management Section */}
          <section className="py-16 sm:py-20 bg-hostgains text-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 font-display">
                  Was viele Eigentümer unterschätzen
                  <span className="block text-sand text-xl sm:text-2xl mt-2 font-normal">Die versteckten Kosten der Selbstvermietung</span>
                </h2>

                <div className="space-y-6 text-white/90 text-lg leading-relaxed">
                  <p>
                    Die meisten Eigentümer rechnen mit 2-3 Stunden Aufwand pro Woche.
                    Die Realität: 8 bis 15 Stunden. Anfragen beantworten, Preise anpassen,
                    Kalender synchronisieren, Reinigung koordinieren, Check-ins managen,
                    Probleme lösen – und das oft zu unmöglichen Zeiten.
                  </p>

                  <p>
                    Der finanzielle Verlust ist noch größer. Ohne dynamisches Pricing
                    verschenken Eigentümer 20 bis 40 Prozent ihres möglichen Umsatzes.
                    Zu niedrige Preise in der Hochsaison, zu hohe in der Nebensaison,
                    verpasste Events – Geld, das auf dem Tisch liegen bleibt.
                  </p>

                  <p>
                    Dazu kommen mittelmäßige Bewertungen, weil die Kommunikation nicht
                    stimmt. Langsame Antwortzeiten, fehlende Informationen, ungelöste
                    Probleme – alles Faktoren, die Rankings und Buchungsraten drücken.
                  </p>

                  <p className="text-white font-medium">
                    Professionelles Management löst diese Probleme systematisch.
                    Automatisierte Prozesse, erprobte Systeme, spezialisiertes Know-how.
                    Du behältst die Kontrolle über dein Objekt – wir liefern die Ergebnisse.
                  </p>

                  <p className="text-sand italic">
                    Der wahre Luxus ist nicht die Immobilie selbst, sondern die Zeit,
                    die du zurückgewinnst.
                  </p>
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
                    Welche Ergebnisse sind realistisch?
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Wir versprechen keine Wunder. Was wir versprechen: messbare Verbesserungen gegenüber dem Status quo.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
                  {results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-sand-light rounded-2xl p-6 text-center"
                    >
                      <div className="text-3xl sm:text-4xl font-bold text-hostgains mb-2">
                        {result.value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-sand-light rounded-2xl p-6 sm:p-8 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Umsatzsteigerung von 20 bis 40 Prozent</strong> –
                    Die Kombination aus optimierten Inseraten, dynamischem Pricing
                    und professioneller Kommunikation führt bei den meisten Objekten
                    zu deutlichen Mehreinnahmen.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Höhere Auslastung</strong> –
                    Professionell geführte Objekte erreichen 60 bis 75 Prozent
                    Jahresauslastung. Der Durchschnitt liegt bei unter 50 Prozent.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Bessere Bewertungen</strong> –
                    Konsistente Kommunikation und proaktive Problemlösung führen
                    zu zufriedeneren Gästen. Durchschnittlich 4,8 von 5 Sternen.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">Weniger Aufwand</strong> –
                    Statt 8 bis 15 Stunden pro Woche investierst du unter eine
                    Stunde pro Monat.
                  </p>
                </div>

                <p className="mt-8 text-center text-gray-600">
                  Ob sich das für dein Objekt rechnet, zeigt die{' '}
                  <Link href="/analyse" className="text-hostgains hover:underline font-medium">
                    kostenlose Potenzialanalyse
                  </Link>.
                  Ohne Verpflichtung, ohne Verkaufsdruck.
                </p>
              </div>
            </div>
          </section>

          {/* Mini Social Proof */}
          <MiniSocialProof
            title="Echte Ergebnisse"
            subtitle="So entwickeln sich Ferienwohnungen unter professionellem Management"
            className="bg-sand-light"
          />

          {/* Target Groups */}
          <section className="py-16 sm:py-20 bg-sand-light">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
                    Für wen lohnt sich Airbnb Management?
                  </h2>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {targetGroups.map((group, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-sm flex gap-4"
                    >
                      <div className="w-12 h-12 rounded-xl bg-sand flex items-center justify-center flex-shrink-0">
                        <group.icon className="w-6 h-6 text-hostgains" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{group.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{group.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-center text-gray-600 max-w-2xl mx-auto">
                  Weniger sinnvoll ist Airbnb Management für Eigentümer, die ihre Wohnung
                  selbst häufig nutzen oder nur gelegentlich vermieten wollen. In diesen
                  Fällen übersteigt die Provision den Nutzen.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
                    Häufige Fragen zum Airbnb Management
                  </h2>
                </div>

                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <details
                      key={index}
                      className="group bg-sand-light rounded-2xl overflow-hidden"
                    >
                      <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-gray-900 hover:bg-sand transition-colors">
                        <span className="pr-4">{item.question}</span>
                        <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                      </summary>
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        <p>{item.answer}</p>
                      </div>
                    </details>
                  ))}
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
                  Im Blog teilen wir Expertenwissen zu Marktentwicklungen, Pricing-Strategien und Best Practices
                  für erfolgreiche Kurzzeitvermietung.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/blog/dynamisches-pricing-mythen-realitaet"
                    className="bg-white px-5 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-hostgains hover:shadow-md transition-all"
                  >
                    Dynamisches Pricing erklärt
                  </Link>
                  <Link
                    href="/blog/gaestekommunikation-denkfehler"
                    className="bg-white px-5 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-hostgains hover:shadow-md transition-all"
                  >
                    Gästekommunikation
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
                  Lass uns über dein Objekt sprechen
                </h2>
                <p className="text-white/80 mb-10 text-lg">
                  In der kostenlosen Potenzialanalyse erfährst du, welcher Umsatz
                  mit deiner Ferienwohnung realistisch ist und welche Optimierungen
                  den größten Unterschied machen.
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
