import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Mail, Phone, MapPin, Shield } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Datenschutzrichtlinien',
  description: 'Datenschutzrichtlinien von hostgains - Informationen zum Umgang mit Ihren personenbezogenen Daten gemäß DSGVO und österreichischem Datenschutzrecht.',
  alternates: {
    canonical: 'https://www.hostgains.at/datenschutzrichtlinien',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function DatenschutzrichtlinienPage() {
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
          <div className="flex items-center gap-3 mb-6">
            <Shield className="text-hostgains" size={32} />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900">
              Datenschutzrichtlinien
            </h1>
          </div>

          <p className="text-gray-500 mb-8">Stand: März 2026</p>

          <div className="prose prose-gray max-w-none space-y-10">
            {/* 1. Verantwortlicher */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                1. Verantwortlicher
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
              </p>
              <address className="not-italic text-gray-700 leading-relaxed mb-4 bg-sand-light p-4 rounded-xl">
                <p className="font-semibold text-gray-900">hostgains e.U.</p>
                <p className="text-gray-700">Inhaber: Julian Ograjensek</p>
                <div className="flex items-start gap-2 mt-3">
                  <MapPin size={16} className="mt-1 shrink-0 text-hostgains" />
                  <span>
                    Waldebene 44<br />
                    9125 Kühnsdorf<br />
                    Österreich
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <Phone size={16} className="shrink-0 text-hostgains" />
                  <a href="tel:+4367762180829" className="hover:text-hostgains transition-colors">
                    +43 677 62180829
                  </a>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <Mail size={16} className="shrink-0 text-hostgains" />
                  <a href="mailto:info@hostgains.at" className="hover:text-hostgains transition-colors">
                    info@hostgains.at
                  </a>
                </div>
              </address>
            </section>

            {/* 2. Überblick */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                2. Überblick über die Datenverarbeitung
              </h2>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Welche Daten erfassen wir?
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wir erfassen Daten, die Sie uns freiwillig mitteilen (z.B. über unser Kontaktformular), sowie technische Daten, die automatisch beim Besuch unserer Website erhoben werden.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Wofür nutzen wir Ihre Daten?
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Zur Beantwortung Ihrer Anfragen</li>
                <li>Zur Bereitstellung unserer Dienstleistungen</li>
                <li>Zur Verbesserung unserer Website</li>
                <li>Zur Erfüllung gesetzlicher Pflichten</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Welche Rechte haben Sie?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten. Details finden Sie in Abschnitt 10.
              </p>
            </section>

            {/* 3. Hosting */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                3. Hosting und technische Infrastruktur
              </h2>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Vercel
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unsere Website wird bei <strong>Vercel Inc.</strong> (340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet. Beim Aufruf unserer Website werden durch den Hosting-Anbieter automatisch Informationen erfasst und in sogenannten Server-Log-Dateien gespeichert:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Übertragene Datenmenge</li>
                <li>Browsertyp und -version</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL (zuvor besuchte Seite)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren und effizienten Bereitstellung der Website).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Datenübermittlung in Drittländer:</strong> Vercel verarbeitet Daten auch in den USA. Die Übermittlung erfolgt auf Grundlage von Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO) und dem EU-US Data Privacy Framework.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-hostgains hover:underline">Vercel Datenschutzerklärung</a>
              </p>
            </section>

            {/* 4. Analyse Tools */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                4. Analyse-Tools und Statistiken
              </h2>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Vercel Analytics
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wir nutzen <strong>Vercel Analytics</strong>, einen datenschutzfreundlichen Webanalysedienst von Vercel Inc.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                <p className="text-green-800 font-medium mb-2">Datenschutzfreundlich:</p>
                <ul className="list-disc list-inside text-green-700 space-y-1">
                  <li>Keine Cookies erforderlich</li>
                  <li>Keine Speicherung personenbezogener Daten</li>
                  <li>Keine Tracking-Profile</li>
                  <li>Vollständig anonymisierte Statistiken</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Analyse des Nutzerverhaltens zur Optimierung unserer Website).
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
                Vercel Speed Insights
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Zusätzlich nutzen wir <strong>Vercel Speed Insights</strong> zur Messung der Ladezeiten unserer Website. Auch dieser Dienst arbeitet ohne Cookies und speichert keine personenbezogenen Daten.
              </p>
            </section>

            {/* 5. Kontaktformular */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                5. Kontaktformular und Anfragen
              </h2>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Analyse-Formular
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wenn Sie unser Analyse-Formular auf der Website nutzen, werden folgende Daten erhoben:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>Vor- und Nachname</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer</li>
                <li>Angaben zu Ihrer Immobilie (Standort, Art, Auslastung)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage und Erstellung einer individuellen Einschätzung für Ihre Ferienimmobilie.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen auf Anfrage der betroffenen Person).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Speicherdauer:</strong> Ihre Daten werden gelöscht, sobald Ihre Anfrage abschließend bearbeitet wurde, es sei denn, gesetzliche Aufbewahrungspflichten stehen dem entgegen.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
                Auftragsverarbeiter: Make (Celonis)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Zur Verarbeitung von Formularanfragen nutzen wir den Automatisierungsdienst <strong>Make</strong> (ehemals Integromat), betrieben von Celonis SE. Die Datenverarbeitung erfolgt auf EU-Servern (eu1.make.com).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Weitere Informationen: <a href="https://www.make.com/en/privacy-notice" target="_blank" rel="noopener noreferrer" className="text-hostgains hover:underline">Make Datenschutzerklärung</a>
              </p>
            </section>

            {/* 6. Kommunikationskanäle */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                6. Kommunikationskanäle
              </h2>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                E-Mail-Kontakt
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben einschließlich der von Ihnen angegebenen Kontaktdaten zur Bearbeitung der Anfrage und für mögliche Anschlussfragen bei uns gespeichert.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
                WhatsApp
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Auf unserer Website befindet sich ein WhatsApp-Button, der Sie zu WhatsApp weiterleitet. WhatsApp wird von <strong>Meta Platforms Ireland Limited</strong> betrieben.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wenn Sie diesen Button nutzen, verlassen Sie unsere Website und kommunizieren direkt über WhatsApp. Dabei gelten die Datenschutzbestimmungen von Meta/WhatsApp.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Hinweis:</strong> WhatsApp überträgt Daten in die USA. Die Übermittlung erfolgt auf Grundlage von Standardvertragsklauseln.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Weitere Informationen: <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" className="text-hostgains hover:underline">WhatsApp Datenschutzrichtlinie</a>
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-6">
                Telefonkontakt
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Bei telefonischem Kontakt werden Ihre Telefonnummer und ggf. Gesprächsinhalte zur Bearbeitung Ihres Anliegens verarbeitet. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </section>

            {/* 7. Social Media */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                7. Social-Media-Verlinkungen
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Auf unserer Website befinden sich Links zu unseren Profilen auf folgenden sozialen Netzwerken:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Instagram</strong> (Meta Platforms Ireland Limited)</li>
                <li><strong>Facebook</strong> (Meta Platforms Ireland Limited)</li>
                <li><strong>LinkedIn</strong> (LinkedIn Ireland Unlimited Company)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Es handelt sich um einfache Verlinkungen (keine Social-Media-Plugins). Beim Klick auf diese Links verlassen Sie unsere Website. Erst dann werden Daten an die jeweiligen Anbieter übertragen.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Präsentation unseres Unternehmens in sozialen Medien).
              </p>
            </section>

            {/* 8. Cookies */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                8. Cookies und Speichertechnologien
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                <p className="text-blue-800 font-medium mb-2">Information:</p>
                <p className="text-blue-700">
                  Unsere Website verwendet <strong>keine Tracking-Cookies</strong> und keine Cookies, die einer Einwilligung bedürfen.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Es werden ausschließlich technisch notwendige Cookies verwendet, die für den Betrieb der Website erforderlich sind (z.B. Session-Cookies). Diese werden nach Ende Ihrer Browser-Sitzung automatisch gelöscht.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Rechtsgrundlage:</strong> § 165 Abs. 3 TKG 2021 (technisch notwendige Cookies sind ohne Einwilligung zulässig).
              </p>
            </section>

            {/* 9. Datensicherheit */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                9. Datensicherheit
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unsere Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulation, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen.
              </p>
            </section>

            {/* 10. Ihre Rechte */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                10. Ihre Rechte als betroffene Person
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nach der DSGVO stehen Ihnen folgende Rechte zu:
              </p>

              <div className="space-y-4">
                <div className="bg-sand-light p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-1">Auskunftsrecht (Art. 15 DSGVO)</h3>
                  <p className="text-gray-700 text-sm">Sie können Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten verlangen.</p>
                </div>

                <div className="bg-sand-light p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-1">Berichtigungsrecht (Art. 16 DSGVO)</h3>
                  <p className="text-gray-700 text-sm">Sie können die Berichtigung unrichtiger Daten verlangen.</p>
                </div>

                <div className="bg-sand-light p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-1">Löschungsrecht (Art. 17 DSGVO)</h3>
                  <p className="text-gray-700 text-sm">Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
                </div>

                <div className="bg-sand-light p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-1">Einschränkung der Verarbeitung (Art. 18 DSGVO)</h3>
                  <p className="text-gray-700 text-sm">Sie können die Einschränkung der Verarbeitung Ihrer Daten verlangen.</p>
                </div>

                <div className="bg-sand-light p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-1">Datenübertragbarkeit (Art. 20 DSGVO)</h3>
                  <p className="text-gray-700 text-sm">Sie können verlangen, dass wir Ihnen Ihre Daten in einem gängigen, maschinenlesbaren Format übermitteln.</p>
                </div>

                <div className="bg-sand-light p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-1">Widerspruchsrecht (Art. 21 DSGVO)</h3>
                  <p className="text-gray-700 text-sm">Sie können der Verarbeitung Ihrer Daten widersprechen, soweit diese auf berechtigtem Interesse basiert.</p>
                </div>

                <div className="bg-sand-light p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-1">Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</h3>
                  <p className="text-gray-700 text-sm">Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mt-4">
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href="mailto:info@hostgains.at" className="text-hostgains hover:underline">info@hostgains.at</a>
              </p>
            </section>

            {/* 11. Beschwerderecht */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                11. Beschwerderecht bei der Aufsichtsbehörde
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt, haben Sie das Recht, eine Beschwerde bei einer Aufsichtsbehörde einzureichen.
              </p>
              <address className="not-italic text-gray-700 leading-relaxed bg-sand-light p-4 rounded-xl">
                <p className="font-semibold text-gray-900">Österreichische Datenschutzbehörde</p>
                <p>Barichgasse 40-42</p>
                <p>1030 Wien</p>
                <p className="mt-2">
                  <strong>Tel.:</strong> +43 1 52 152-0<br />
                  <strong>E-Mail:</strong> <a href="mailto:dsb@dsb.gv.at" className="text-hostgains hover:underline">dsb@dsb.gv.at</a><br />
                  <strong>Website:</strong> <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="text-hostgains hover:underline">www.dsb.gv.at</a>
                </p>
              </address>
            </section>

            {/* 12. Speicherdauer */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                12. Speicherdauer
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist oder wie es die gesetzlichen Aufbewahrungspflichten vorsehen:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Kontaktanfragen:</strong> Bis zur abschließenden Bearbeitung, danach 3 Jahre (Verjährungsfristen)</li>
                <li><strong>Vertragsdaten:</strong> 7 Jahre (steuerrechtliche Aufbewahrungspflicht gemäß BAO)</li>
                <li><strong>Server-Logs:</strong> Maximal 30 Tage</li>
              </ul>
            </section>

            {/* 13. Änderungen */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                13. Änderungen dieser Datenschutzrichtlinien
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Wir behalten uns vor, diese Datenschutzrichtlinien anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen unserer Dienstleistungen anzupassen. Die jeweils aktuelle Version finden Sie stets auf dieser Seite.
              </p>
            </section>

            {/* Rechtsgrundlagen-Übersicht */}
            <section className="pt-6 border-t border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Übersicht: Rechtsgrundlagen
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-gray-700">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 pr-4 font-semibold">Verarbeitung</th>
                      <th className="text-left py-2 font-semibold">Rechtsgrundlage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-2 pr-4">Hosting/Server-Logs</td>
                      <td className="py-2">Art. 6 Abs. 1 lit. f DSGVO</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Vercel Analytics</td>
                      <td className="py-2">Art. 6 Abs. 1 lit. f DSGVO</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Kontaktformular</td>
                      <td className="py-2">Art. 6 Abs. 1 lit. b DSGVO</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">E-Mail-Kontakt</td>
                      <td className="py-2">Art. 6 Abs. 1 lit. b DSGVO</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Technische Cookies</td>
                      <td className="py-2">§ 165 Abs. 3 TKG 2021</td>
                    </tr>
                  </tbody>
                </table>
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
