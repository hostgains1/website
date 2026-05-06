import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { MiniSocialProof } from '@/components/MiniSocialProof';
import { UnterseitenFAQ, ferienvermietungKaerntenFAQs } from '@/components/UnterseitenFAQ';
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Home,
  Star,
  Wifi,
  Camera,
  Euro,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ferienvermietung Kärnten | Leitfaden für Eigentümer | hostgains',
  description: 'Ferienvermietung in Kärnten starten: Wann lohnt es sich, welche Wohnungen eignen sich, was erwarten Gäste, und wann ist Langzeitmiete besser? Der ehrliche Überblick für Eigentümer.',
  alternates: {
    canonical: 'https://www.hostgains.at/ferienvermietung-kaernten',
  },
  openGraph: {
    title: 'Ferienvermietung Kärnten | hostgains',
    description: 'Eignet sich meine Wohnung für Ferienvermietung? Was verdiene ich realistisch? Der Leitfaden für Eigentümer in Kärnten.',
    url: 'https://www.hostgains.at/ferienvermietung-kaernten',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ferienvermietung Kärnten',
  serviceType: 'Ferienvermietung Management',
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
  areaServed: { '@type': 'State', name: 'Kärnten' },
  description: 'Professionelle Ferienvermietung in Kärnten – Full-Service Management für Eigentümer. Einstiegsberatung, Potenzialanalyse und komplette Verwaltung.',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.hostgains.at/' },
    { '@type': 'ListItem', position: 2, name: 'Ferienvermietung Kärnten', item: 'https://www.hostgains.at/ferienvermietung-kaernten' },
  ],
};

const suitabilityChecklist = [
  { label: 'Vollständige Küche (Herd, Kühlschrank, Geschirr)', ok: true },
  { label: 'Stabiles WLAN (mind. 25 Mbit/s)', ok: true },
  { label: 'Sauberes Bad mit ausreichend Ablagefläche', ok: true },
  { label: 'Bequemes Bett mit hochwertiger Bettwäsche', ok: true },
  { label: 'Parkplatz oder ÖPNV-Nähe', ok: true },
  { label: 'Kein dauerhafter Eigenbedarf in der Hochsaison', ok: true },
  { label: 'Zustand: keine sichtbaren Mängel auf Fotos', ok: true },
];

const commonMistakes = [
  {
    title: 'Zu niedrige Preise aus Unsicherheit',
    description: 'Viele Einsteiger setzen den Preis vorsichtig niedrig an. Das Ergebnis: mehr Buchungen, aber weniger Einnahmen – und Gäste, die das Objekt beanspruchen wie ein Budget-Hotel. Richtiges Pricing beginnt mit Marktanalyse, nicht mit Bauchgefühl.',
  },
  {
    title: 'Schlechte Fotos trotz gutem Objekt',
    description: 'Das Inserat entscheidet in 3 Sekunden. Dunkle Smartphone-Aufnahmen verlieren gegen professionelle Fotos, selbst wenn die Wohnung besser ist. Fotos sind keine Kür, sie sind das wichtigste Verkaufsinstrument.',
  },
  {
    title: 'Zu langsame Antwortzeiten',
    description: 'Airbnb und Booking.com bewerten die Antwortzeit. Wer länger als 1–2 Stunden braucht, verliert Buchungsanfragen an schnellere Anbieter. Gästebetreuung ist Arbeit – täglich, auch am Wochenende.',
  },
  {
    title: 'Nur eine Plattform nutzen',
    description: 'Nur auf Airbnb zu setzen verschenkt 30–40% des möglichen Buchungsvolumens. Booking.com erreicht andere Zielgruppen, besonders aus Deutschland und den Niederlanden. Multi-Kanal-Präsenz ist kein Nice-to-have.',
  },
  {
    title: 'Reinigung unterschätzen',
    description: 'Zwischen Gast-Abreise und nächster Ankunft bleiben oft nur 3–4 Stunden. Reinigung auf Hotel-Standard in dieser Zeit ist anspruchsvoll. Wer das selbst macht, merkt schnell: es kostet Freizeit, Nerven und bei Mängeln schlechte Bewertungen.',
  },
];

const guestExpectations = [
  {
    icon: Wifi,
    title: 'Schnelles WLAN',
    description: 'Kein Verhandlungspunkt. Langsames Internet führt zuverlässig zu schlechten Bewertungen – egal wie schön die Aussicht ist.',
  },
  {
    icon: Home,
    title: 'Sauberkeit auf Hotel-Niveau',
    description: 'Gäste vergleichen deine Wohnung nicht mit privaten Standards, sondern mit Hotels. Ein Haar im Bad oder eine vergessene Tasse genügt für eine 3-Sterne-Bewertung.',
  },
  {
    icon: Star,
    title: 'Fotos entsprechen der Realität',
    description: 'Übererwartungen sind das größte Risiko. Wenn das Objekt auf Fotos größer oder moderner wirkt als in der Realität, ist die Enttäuschung unvermeidbar.',
  },
  {
    icon: Clock,
    title: 'Klare Kommunikation',
    description: 'Anreiseinformationen, Check-in-Erklärung, Ansprechpartner bei Problemen. Gäste wollen wissen, was sie erwartet – und nicht rätseln müssen.',
  },
  {
    icon: Camera,
    title: 'Lokale Empfehlungen',
    description: 'Die besten Restaurants, Badestellen, Ausflugsziele. Gäste, die gute Tipps bekommen, hinterlassen bessere Bewertungen. Ein gutes Gästebuch macht den Unterschied.',
  },
];

const comparisonData = [
  { criterion: 'Einnahmen in der Hochsaison', ferienvermietung: 'Deutlich höher', langzeitmiete: 'Fixiert' },
  { criterion: 'Auslastungsrisiko im Winter', ferienvermietung: 'Saisonal schwach', langzeitmiete: 'Kein Risiko' },
  { criterion: 'Eigenbedarf möglich', ferienvermietung: 'Ja, jederzeit', langzeitmiete: 'Nein' },
  { criterion: 'Verwaltungsaufwand', ferienvermietung: 'Hoch (oder ausgelagert)', langzeitmiete: 'Minimal' },
  { criterion: 'Objektzustand kontrollierbar', ferienvermietung: 'Regelmäßig', langzeitmiete: 'Nur bei Auszug' },
  { criterion: 'Mietausfallrisiko', ferienvermietung: 'Verteilt über viele Gäste', langzeitmiete: 'Konzentriert auf einen Mieter' },
];

export default function FerienvermietungKaerntenPage() {
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

        {/* Hero */}
        <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/hero-woerthersee.jpg"
              alt="Ferienvermietung in Kärnten – Wörthersee mit Blick auf die Berge"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-hostgains/90 via-hostgains/80 to-hostgains/90" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center py-24 sm:py-32">
            <nav className="text-sm text-white/60 mb-6 flex justify-center" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 flex-wrap justify-center">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-white">Ferienvermietung Kärnten</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 font-display">
              Ferienvermietung in Kärnten
            </h1>
            <p className="text-xl sm:text-2xl text-sand font-medium mb-6">
              Der ehrliche Leitfaden für Eigentümer
            </p>

            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Lohnt es sich wirklich? Eignet sich deine Wohnung? Was erwarten Gäste – und wann ist Langzeitmiete die bessere Wahl?
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
                href="#eignung"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all"
              >
                Eignung prüfen
              </a>
            </div>
          </div>
        </section>

        <main id="main-content">

          {/* Einleitung */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-display">
                  Ferienvermietung in Kärnten – was dahintersteckt
                </h2>
                <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Viele Eigentümer in Kärnten denken darüber nach, ihre Wohnung kurzfristig zu vermieten. Die Idee ist verlockend: In der Hochsaison sind Zimmer am Wörthersee knapp, die Preise hoch, die Nachfrage groß.
                  </p>
                  <p>
                    Was dabei oft unterschätzt wird: Ferienvermietung ist kein Selbstläufer. Ein Inserat hochzuladen reicht nicht. Wer dauerhaft gute Ergebnisse erzielen will, braucht richtige Preise, professionelle Fotos, schnelle Kommunikation und zuverlässige Reinigung – konsequent, auch in der Nebensaison.
                  </p>
                  <p className="font-medium text-gray-800">
                    Dieser Leitfaden beantwortet die Fragen, die sich Eigentümer stellen, bevor sie die erste Buchung annehmen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Eignung der Wohnung */}
          <section id="eignung" className="py-16 sm:py-20 bg-sand-light">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
                    Eignet sich meine Wohnung?
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Nicht jede Immobilie ist für Ferienvermietung geeignet. Das Wichtigste ist nicht die Größe – sondern die Ausstattung und der Zustand.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Das braucht deine Wohnung
                    </h3>
                    <ul className="space-y-3">
                      {suitabilityChecklist.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      Was die Vermietung erschwert
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Hausordnung oder WEG-Vertrag verbietet Kurzzeitvermietung',
                        'Kein separater Eingang oder Schlüsselbox möglich',
                        'Starke Lärmbelastung (Straße, Nachbarn)',
                        'Objekt benötigt dringende Renovierung',
                        'Schlechte Fotos und keine Möglichkeit für Profifotografie',
                        'Eigentümer dauerhaft im Sommer selbst anwesend',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                          <XCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-hostgains/5 border border-hostgains/15 rounded-2xl p-5 sm:p-6 flex gap-4">
                  <AlertTriangle className="w-5 h-5 text-hostgains mt-0.5 shrink-0" />
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Wichtig bei Wohnungseigentum:</strong> Vor dem Start unbedingt prüfen, ob die Eigentümergemeinschaft oder der Wohnungseigentumsvertrag Kurzzeitvermietung erlaubt. Ein Verbot ist in vielen Kärntner Anlagen vorhanden und wird zunehmend durchgesetzt.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Ferienvermietung vs. Langzeitmiete */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
                    Ferienvermietung oder Langzeitmiete?
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Die ehrliche Gegenüberstellung – ohne Hochglanzversprechen.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-hostgains text-white">
                        <th className="text-left p-4 font-semibold rounded-tl-2xl">Kriterium</th>
                        <th className="text-center p-4 font-semibold">Ferienvermietung</th>
                        <th className="text-center p-4 font-semibold rounded-tr-2xl">Langzeitmiete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonData.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-sand-light'}>
                          <td className="p-4 text-gray-700 font-medium">{row.criterion}</td>
                          <td className="p-4 text-center text-gray-600">{row.ferienvermietung}</td>
                          <td className="p-4 text-center text-gray-600">{row.langzeitmiete}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 bg-sand-light rounded-2xl p-6 sm:p-8">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Wann lohnt Ferienvermietung in Kärnten?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    In der Wörthersee-Region übersteigen die Einnahmen aus professionell geführter Ferienvermietung die Langzeitmietrendite bei guter Auslastung um <strong className="text-gray-800">40–80 Prozent</strong>. Das gilt besonders für Objekte mit Seenähe oder besonderer Lage. In Lagen mit schwacher Tourismus-Nachfrage kann Langzeitmiete die risikoärmere Wahl sein.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    Eine kostenlose Potenzialanalyse zeigt dir, was dein konkretes Objekt realistisch erzielen kann – mit echten Zahlen aus dem Kärntner Markt.
                  </p>
                  <Link
                    href="/analyse"
                    className="inline-flex items-center gap-2 mt-5 bg-hostgains text-white font-semibold px-6 py-3 rounded-xl hover:bg-hostgains/90 transition-all"
                  >
                    Potenzial berechnen lassen
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Häufige Fehler */}
          <section className="py-16 sm:py-20 bg-sand-light">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
                    Die 5 häufigsten Fehler beim Einstieg
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Die meisten Einsteiger machen dieselben Fehler. Wer sie kennt, vermeidet sie.
                  </p>
                </div>

                <div className="space-y-4">
                  {commonMistakes.map((mistake, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-gray-100 flex gap-5">
                      <div className="w-8 h-8 rounded-full bg-hostgains/10 text-hostgains font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{mistake.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{mistake.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Was Gäste erwarten */}
          <section className="py-16 sm:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
                    Was Gäste in Kärnten wirklich erwarten
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Kärntner Gäste kommen zum Erholen. Ihre Toleranz für Mängel ist gering – weil der Urlaub begrenzt ist.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {guestExpectations.map((item, i) => (
                    <div key={i} className="bg-sand-light rounded-2xl p-5 sm:p-6">
                      <div className="w-10 h-10 rounded-xl bg-hostgains flex items-center justify-center mb-4">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 bg-hostgains text-white rounded-2xl p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <Euro className="w-6 h-6 text-sand shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-white text-lg mb-2">Das kostet schlechte Bewertungen wirklich</h3>
                      <p className="text-white/80 leading-relaxed text-sm">
                        Eine schlechte Bewertung senkt das Ranking in der Plattform-Suche dauerhaft. Bei Airbnb entscheiden die ersten 10 Bewertungen über die langfristige Sichtbarkeit. Ein schlechter Start ist schwer zu korrigieren – deshalb zählt die Qualität von Beginn an.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Selbst oder mit Management */}
          <section className="py-16 sm:py-20 bg-sand-light">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
                    Selbst verwalten – oder auslagern?
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Beide Wege funktionieren. Die Frage ist, welcher zu deiner Situation passt.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-gray-900 text-lg mb-4">Selbstverwaltung sinnvoll wenn …</h3>
                    <ul className="space-y-3">
                      {[
                        'Du vor Ort lebst und schnell erreichbar bist',
                        'Du nur wenige Wochen pro Jahr vermieten willst',
                        'Du Zeit und Interesse an der Gästebetreuung hast',
                        'Dein Objekt einfach zu reinigen ist',
                        'Du in der Niedrigsaison nicht vermieten willst',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-hostgains/5 rounded-2xl p-6 sm:p-8 border border-hostgains/15">
                    <h3 className="font-bold text-gray-900 text-lg mb-4">Professionelles Management sinnvoll wenn …</h3>
                    <ul className="space-y-3">
                      {[
                        'Du nicht dauerhaft in Kärnten wohnst',
                        'Du maximale Auslastung und Einnahmen willst',
                        'Du keine Zeit für tägliche Gästekommunikation hast',
                        'Du mehrere Objekte verwaltest',
                        'Du dich um nichts kümmern möchtest',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-hostgains mt-0.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/airbnb-management-kaernten"
                      className="inline-flex items-center gap-2 mt-6 text-hostgains font-semibold text-sm hover:underline"
                    >
                      Wie professionelles Management in Kärnten funktioniert
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Social Proof */}
          <MiniSocialProof
            title="Ergebnisse aus der Praxis"
            subtitle="Was Eigentümer in Kärnten mit professioneller Verwaltung erreichen"
            region="kaernten"
            className="bg-white"
          />

          {/* FAQ */}
          <UnterseitenFAQ
            title="Häufige Fragen zur Ferienvermietung in Kärnten"
            subtitle="Antworten auf die Fragen, die Eigentümer vor dem Start beschäftigen"
            faqs={ferienvermietungKaerntenFAQs}
            className="bg-sand-light"
          />

          {/* CTA */}
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
                  Was ist deine Wohnung wert?
                </h2>
                <p className="text-white/80 mb-10 text-lg leading-relaxed">
                  In der kostenlosen Potenzialanalyse siehst du mit konkreten Zahlen, was dein Objekt auf dem Kärntner Markt realistisch erzielen kann. Unverbindlich und ohne Verkaufsgespräch.
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
                  <p className="text-white/70 mb-4">Mehr zum Thema:</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/airbnb-management-kaernten" className="text-sand hover:text-white transition-colors underline">
                      Airbnb Management Kärnten
                    </Link>
                    <Link href="/leistungen" className="text-sand hover:text-white transition-colors underline">
                      Alle Leistungen im Detail
                    </Link>
                    <Link href="/blog/ferienvermietung-kaernten-leitfaden" className="text-sand hover:text-white transition-colors underline">
                      Leitfaden im Blog lesen
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
