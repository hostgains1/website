import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Airbnb Management in Kärnten | Hostgains',
  description: 'Professionelles Airbnb Management in Kärnten. Wir optimieren Preis, Auslastung und Gästekommunikation für Eigentümer.',
  alternates: {
    canonical: 'https://hostgains.at/airbnb-management',
  },
  openGraph: {
    title: 'Airbnb Management Kärnten | Hostgains',
    description: 'Strategisches Kurzzeitvermietungs-Management für Eigentümer in Kärnten.',
    url: 'https://hostgains.at/airbnb-management',
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
    { '@type': 'City', name: 'Klagenfurt am Wörthersee' },
    { '@type': 'City', name: 'Velden am Wörthersee' },
    { '@type': 'City', name: 'Pörtschach am Wörthersee' },
    { '@type': 'City', name: 'Villach' },
    { '@type': 'State', name: 'Kärnten' },
  ],
  description: 'Professionelles Airbnb Management für Ferienwohnungen in Kärnten. Inseratsoptimierung, dynamisches Pricing, 24/7 Gästebetreuung und Reinigungskoordination.',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hostgains.at/' },
    { '@type': 'ListItem', position: 2, name: 'Airbnb Management', item: 'https://hostgains.at/airbnb-management' },
  ],
};

const faqItems = [
  {
    question: 'Was kostet Airbnb Management in Kärnten?',
    answer: 'hostgains arbeitet performance-basiert. Die Provision liegt bei 18% des Nettoumsatzes. Es gibt keine Fixkosten, keine Einrichtungsgebühren und keine versteckten Kosten. Du zahlst nur, wenn du verdienst.',
  },
  {
    question: 'Wie viel Zeit spart professionelles Management?',
    answer: 'Die meisten Eigentümer investieren 8 bis 15 Stunden pro Woche in ihre Ferienwohnung: Anfragen beantworten, Preise anpassen, Reinigung koordinieren, Probleme lösen. Mit professionellem Management sinkt dieser Aufwand auf unter eine Stunde pro Monat.',
  },
  {
    question: 'Lohnt sich Airbnb in Kärnten noch?',
    answer: 'Ja, aber der Markt hat sich verändert. Die Anzahl der Inserate am Wörthersee ist seit 2021 um 67% gestiegen. Gleichzeitig sind die durchschnittlichen Umsätze pro Objekt um 23% gesunken. Professionell geführte Objekte performen überdurchschnittlich, weil sie bei Pricing, Fotografie und Kommunikation optimiert sind.',
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
        <section className="bg-hostgains pt-28 pb-16 sm:pt-36 sm:pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            <nav className="text-sm text-white/60 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li>/</li>
                <li className="text-white">Airbnb Management</li>
              </ol>
            </nav>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-display leading-tight max-w-4xl">
              Airbnb Management in Kärnten – Professionelle Betreuung für Eigentümer
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mb-8">
              Eine Ferienwohnung zu vermieten klingt nach passivem Einkommen. Die Realität:
              Preise täglich anpassen, Anfragen um Mitternacht beantworten, Reinigungsteams
              koordinieren, Gästebeschwerden lösen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/analyse"
                className="inline-flex items-center justify-center gap-2 bg-sand hover:bg-sand-light text-hostgains font-bold px-8 py-4 rounded-xl transition-all hover:scale-[1.02]"
              >
                Kostenlose Potenzialanalyse
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        <main id="main-content">
          {/* Introduction */}
          <section className="py-12 sm:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto prose prose-lg">
                <p>
                  Der Aufwand für professionelle Kurzzeitvermietung wird unterschätzt.
                  Eigentümer starten mit Optimismus und enden mit Erschöpfung. Die Buchungen
                  laufen, aber der Stress auch. Urlaub wird unmöglich, weil immer jemand
                  ein- oder auscheckt.
                </p>
                <p>
                  Gleichzeitig bleiben Einnahmen auf der Strecke. Falsche Preise in der
                  Hochsaison, leere Wochen in der Nebensaison, mittelmäßige Bewertungen,
                  weil die Kommunikation nicht stimmt. Die meisten Eigentümer verschenken
                  20 bis 40 Prozent ihres möglichen Umsatzes – ohne es zu wissen.
                </p>
                <p>
                  Airbnb Management bedeutet: Wir übernehmen den operativen Betrieb
                  deiner Ferienwohnung. Du behältst die Kontrolle über dein Objekt und
                  die strategischen Entscheidungen. Wir liefern das Know-how, die Systeme
                  und die tägliche Arbeit.
                </p>
              </div>
            </div>
          </section>

          {/* Was umfasst professionelles Airbnb Management */}
          <section className="py-12 sm:py-16 bg-sand-light">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 font-display">
                  Was umfasst professionelles Airbnb Management?
                </h2>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">Inseratsoptimierung</h3>
                    <p className="text-gray-600">
                      Professionelle Fotografie, psychologisch optimierte Texte und strategische
                      Positionierung. Ein{' '}
                      <Link href="/blog/airbnb-inserat-amateur-vs-profi" className="text-hostgains hover:underline">
                        optimiertes Inserat
                      </Link>{' '}
                      erzielt 40 bis 60 Prozent mehr Buchungen als ein durchschnittliches.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">Marktanalyse</h3>
                    <p className="text-gray-600">
                      Wir analysieren den lokalen Markt, identifizieren Mitbewerber und bestimmen
                      den optimalen Preiskorridor für dein Objekt. Entscheidungen basieren auf
                      Daten, nicht auf Bauchgefühl.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">Dynamisches Pricing</h3>
                    <p className="text-gray-600">
                      Die{' '}
                      <Link href="/blog/dynamisches-pricing-mythen-realitaet" className="text-hostgains hover:underline">
                        richtige Preisstrategie
                      </Link>{' '}
                      macht den Unterschied zwischen 60 und 80 Prozent Auslastung.
                      Wir passen Preise täglich an – basierend auf Nachfrage, Saison,
                      lokalen Events und Mitbewerberverhalten.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">Gästekommunikation</h3>
                    <p className="text-gray-600">
                      24/7 erreichbar, in Deutsch und Englisch. Schnelle Antworten erhöhen
                      die Buchungswahrscheinlichkeit um 40 Prozent. Wir übernehmen den
                      gesamten Gästekontakt von der Anfrage bis zur Bewertung.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">Reinigung und Koordination</h3>
                    <p className="text-gray-600">
                      Zuverlässige Reinigungsteams, Qualitätskontrollen nach jedem Gast,
                      Wäscheservice und Nachfüllen von Verbrauchsmaterialien. Der operative
                      Betrieb läuft reibungslos – ohne dein Zutun.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">Bewertungsmanagement</h3>
                    <p className="text-gray-600">
                      Systematische Nachverfolgung, proaktive Problemlösung und strategisches
                      Timing bei Bewertungsanfragen. Objekte mit einem Schnitt über 4,7 Sternen
                      erzielen bis zu 45 Prozent höhere Preise.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">Reporting und Performance-Analyse</h3>
                    <p className="text-gray-600">
                      Monatliche Berichte mit allen relevanten Kennzahlen: Umsatz, Auslastung,
                      Durchschnittspreis, Bewertungsentwicklung. Transparenz über jeden Aspekt
                      deiner Vermietung.
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-gray-600">
                  Eine detaillierte Übersicht aller Leistungen findest du auf unserer{' '}
                  <Link href="/leistungen" className="text-hostgains hover:underline font-medium">
                    Leistungsseite
                  </Link>.
                </p>
              </div>
            </div>
          </section>

          {/* So funktioniert unser Airbnb Management */}
          <section className="py-12 sm:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 font-display">
                  So funktioniert unser Airbnb Management
                </h2>

                <div className="space-y-8">
                  <div className="border-l-4 border-hostgains pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">1. Analyse</h3>
                    <p className="text-gray-600">
                      Wir beginnen mit einer kostenlosen Potenzialanalyse deines Objekts.
                      Dabei bewerten wir Lage, Ausstattung, aktuelle Preisgestaltung und
                      Marktpositionierung. Du erhältst eine realistische Einschätzung des
                      erreichbaren Jahresumsatzes und der notwendigen Optimierungen. Diese
                      Analyse ist unverbindlich und bildet die Basis für unsere Zusammenarbeit.
                    </p>
                  </div>

                  <div className="border-l-4 border-hostgains pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">2. Strategie</h3>
                    <p className="text-gray-600">
                      Basierend auf der Analyse entwickeln wir eine individuelle Strategie.
                      Welche Zielgruppe sprechen wir an? Wie positionieren wir das Objekt?
                      Welche Mindestpreise gelten? Wie viele Nächte Mindestaufenthalt?
                      Diese Entscheidungen treffen wir gemeinsam – du behältst die Kontrolle
                      über die strategische Ausrichtung.
                    </p>
                  </div>

                  <div className="border-l-4 border-hostgains pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">3. Optimierung</h3>
                    <p className="text-gray-600">
                      Wir überarbeiten das Inserat von Grund auf: professionelle Fotos,
                      neue Texte, optimierte Titel. Falls nötig, geben wir Empfehlungen
                      zur Ausstattung. Kleine Investitionen – eine bessere Kaffeemaschine,
                      neue Bettwäsche, Verdunklungsvorhänge – können die Bewertungen und
                      damit die Preise erheblich verbessern.
                    </p>
                  </div>

                  <div className="border-l-4 border-hostgains pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">4. Operative Betreuung</h3>
                    <p className="text-gray-600">
                      Sobald das Inserat live ist, übernehmen wir den täglichen Betrieb.
                      Anfragen beantworten, Buchungen bestätigen, Preise anpassen,
                      Reinigung koordinieren, Probleme lösen. Du wirst nur kontaktiert,
                      wenn strategische Entscheidungen anstehen oder außergewöhnliche
                      Situationen auftreten. Der Alltag läuft ohne dich.
                    </p>
                  </div>

                  <div className="border-l-4 border-hostgains pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">5. Reporting</h3>
                    <p className="text-gray-600">
                      Jeden Monat erhältst du einen detaillierten Bericht: Umsatz,
                      Auslastung, durchschnittlicher Tagespreis, Bewertungsentwicklung,
                      Vergleich zum Vormonat und Vorjahr. Du siehst genau, was funktioniert
                      und wo wir optimieren. Transparenz ist keine Option, sondern Standard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Airbnb Management in Kärnten – Der lokale Vorteil */}
          <section className="py-12 sm:py-16 bg-sand-light">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 font-display">
                  Airbnb Management in Kärnten – Der lokale Vorteil
                </h2>

                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    Kärnten ist kein einheitlicher Markt. Die Nachfrage am Wörthersee
                    unterscheidet sich fundamental von Villach oder dem Drautal.
                    Saisonale Schwankungen sind extremer als in den meisten anderen
                    Regionen Österreichs.
                  </p>

                  <p>
                    Die Sommermonate Juni bis August generieren fast 60 Prozent des
                    Jahresumsatzes. Die Wintersaison trägt unter 10 Prozent bei –
                    anders als in Tirol oder Salzburg gibt es keinen klassischen
                    Skitourismus, der die kalten Monate trägt.
                  </p>

                  <p>
                    Diese Saisonalität erfordert eine angepasste Strategie. Maximale
                    Preise im Sommer, gezielte Aktionen in der Nebensaison, spezielle
                    Angebote für Langzeitgäste im Winter. Wer den Kärntner Markt nicht
                    kennt, optimiert an der Realität vorbei.
                  </p>

                  <p>
                    hostgains ist in Klagenfurt am Wörthersee ansässig. Wir kennen die
                    lokalen Events – vom GTI-Treffen bis zum Ironman – und wissen, wann
                    die Preise verdreifacht werden können. Wir kennen die Reinigungsteams,
                    die zuverlässig arbeiten. Wir kennen die Handwerker, die schnell
                    reagieren, wenn etwas kaputtgeht.
                  </p>

                  <p>
                    Dieser lokale Vorteil lässt sich nicht durch Algorithmen ersetzen.
                    Er entsteht durch Präsenz, Erfahrung und Beziehungen vor Ort.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Welche Ergebnisse sind realistisch */}
          <section className="py-12 sm:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 font-display">
                  Welche Ergebnisse sind realistisch?
                </h2>

                <div className="prose prose-lg max-w-none text-gray-600">
                  <p>
                    Wir versprechen keine Wunder. Was wir versprechen: messbare
                    Verbesserungen gegenüber dem Status quo.
                  </p>

                  <p>
                    <strong>Umsatzsteigerung von 20 bis 40 Prozent</strong> –
                    Die Kombination aus optimierten Inseraten, dynamischem Pricing
                    und professioneller Kommunikation führt bei den meisten Objekten
                    zu deutlichen Mehreinnahmen. Bei stark unteroptimierten Objekten
                    sind auch höhere Steigerungen möglich.
                  </p>

                  <p>
                    <strong>Höhere Auslastung</strong> –
                    Professionell geführte Objekte erreichen 60 bis 75 Prozent
                    Jahresauslastung. Der Durchschnitt in Kärnten liegt bei unter
                    50 Prozent. Die Differenz entsteht durch bessere Sichtbarkeit,
                    schnellere Reaktionszeiten und optimierte Preise.
                  </p>

                  <p>
                    <strong>Bessere Bewertungen</strong> –
                    Konsistente Kommunikation und proaktive Problemlösung führen
                    zu zufriedeneren Gästen. Objekte unter unserer Verwaltung
                    erreichen durchschnittlich 4,8 von 5 Sternen.
                  </p>

                  <p>
                    <strong>Weniger Aufwand</strong> –
                    Statt 8 bis 15 Stunden pro Woche investierst du unter eine
                    Stunde pro Monat. Die gesparte Zeit hat einen Wert, der über
                    die Provision hinausgeht.
                  </p>

                  <p>
                    Ob sich das für dein Objekt rechnet, zeigt die{' '}
                    <Link href="/analyse" className="text-hostgains hover:underline font-medium">
                      kostenlose Potenzialanalyse
                    </Link>.
                    Ohne Verpflichtung, ohne Verkaufsdruck.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Für wen lohnt sich Airbnb Management */}
          <section className="py-12 sm:py-16 bg-sand-light">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 font-display">
                  Für wen lohnt sich Airbnb Management?
                </h2>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">Eigentümer mit wenig Zeit</h3>
                    <p className="text-gray-600 text-sm">
                      Die Wohnung soll Einnahmen generieren, aber nicht zum zweiten Job
                      werden. Du hast Beruf, Familie oder andere Prioritäten.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">Kapitalanleger</h3>
                    <p className="text-gray-600 text-sm">
                      Die Immobilie ist ein Investment. Du willst maximale Rendite bei
                      minimalem Aufwand. Professionelles Management optimiert beides.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">Ferienwohnungsbesitzer</h3>
                    <p className="text-gray-600 text-sm">
                      Du nutzt die Wohnung selbst nur wenige Wochen im Jahr. Den Rest
                      der Zeit soll sie Einnahmen bringen – ohne dass du dich kümmern musst.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">Investoren mit mehreren Objekten</h3>
                    <p className="text-gray-600 text-sm">
                      Mit jedem zusätzlichen Objekt steigt der Verwaltungsaufwand
                      überproportional. Ab zwei Objekten wird professionelles Management
                      fast immer wirtschaftlich sinnvoll.
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-gray-600">
                  Weniger sinnvoll ist Airbnb Management für Eigentümer, die ihre Wohnung
                  selbst häufig nutzen oder nur gelegentlich vermieten wollen. In diesen
                  Fällen übersteigt die Provision den Nutzen.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 sm:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 font-display">
                  Häufige Fragen zum Airbnb Management
                </h2>

                <div className="space-y-4">
                  {faqItems.map((item, index) => (
                    <details
                      key={index}
                      className="group bg-sand-light rounded-xl overflow-hidden"
                    >
                      <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-gray-900 hover:bg-sand transition-colors">
                        <span>{item.question}</span>
                        <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-6 pb-6 text-gray-600">
                        <p>{item.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 sm:py-20 bg-hostgains">
            <div className="container mx-auto px-4 sm:px-6 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">
                  Lass uns über dein Objekt sprechen
                </h2>
                <p className="text-white/80 mb-8">
                  In der kostenlosen Potenzialanalyse erfährst du, welcher Umsatz
                  mit deiner Ferienwohnung realistisch ist und welche Optimierungen
                  den größten Unterschied machen.
                </p>
                <Link
                  href="/analyse"
                  className="inline-flex items-center justify-center gap-2 bg-sand hover:bg-sand-light text-hostgains font-bold px-8 py-4 rounded-xl transition-all hover:scale-[1.02]"
                >
                  Kostenlose Analyse anfordern
                  <ArrowRight size={20} />
                </Link>
                <p className="text-white/60 text-sm mt-4">
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
