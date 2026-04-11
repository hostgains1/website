import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'AGB',
  description: 'Allgemeine Geschäftsbedingungen (AGB) der hostgains Airbnb Management & Marketing Agentur.',
  alternates: {
    canonical: 'https://www.hostgains.at/agb',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function AGBPage() {
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
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-8">
            Allgemeine Geschäftsbedingungen (AGB)
          </h1>

          <div className="prose prose-gray max-w-none">
            {/* 1. Geltung, Vertragsabschluss */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                1. Geltung, Vertragsabschluss
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>1.1</strong> Die Airbnb Management & Marketing Agentur hostgains (Werbeagentur Mario Brenner) (im Folgenden „Agentur" und/oder „hostgains") erbringt ihre Leistungen ausschließlich auf der Grundlage der nachfolgenden Allgemeinen Geschäftsbedingungen (AGB). Diese gelten für alle Rechtsbeziehungen zwischen der Agentur und dem Kunden, selbst wenn nicht ausdrücklich auf sie Bezug genommen wird. Die AGB sind ausschließlich für Rechtsbeziehung mit Unternehmern anwendbar, sohin B2B.
                </p>
                <p>
                  <strong>1.2</strong> Maßgeblich ist jeweils die zum Zeitpunkt des Vertragsschlusses gültige Fassung. Abweichungen von diesen sowie sonstige ergänzende Vereinbarungen mit dem Kunden sind nur wirksam, wenn sie von der Agentur schriftlich bestätigt werden.
                </p>
                <p>
                  <strong>1.3</strong> Allfällige Geschäftsbedingungen des Kunden werden, selbst bei Kenntnis, nicht akzeptiert, sofern nicht im Einzelfall ausdrücklich und schriftlich anderes vereinbart wird. AGB des Kunden widerspricht die Agentur ausdrücklich. Eines weiteren Widerspruchs gegen AGB des Kunden durch die Agentur bedarf es nicht.
                </p>
                <p>
                  <strong>1.4</strong> Änderungen der AGB werden dem Kunden bekannt gegeben und gelten als vereinbart, wenn der Kunde den geänderten AGB nicht schriftlich binnen 14 Tagen widerspricht; auf die Bedeutung des Schweigens sowie auf die konkret geänderten Klauseln wird der Kunde in der Verständigung ausdrücklich hingewiesen. Diese Zustimmungsfiktion gilt nicht für die Änderung wesentlicher Leistungsinhalte und Entgelte.
                </p>
                <p>
                  <strong>1.5</strong> Sollten einzelne Bestimmungen dieser Allgemeinen Geschäftsbedingungen unwirksam sein, so berührt dies die Verbindlichkeit der übrigen Bestimmungen und der unter ihrer Zugrundelegung geschlossenen Verträge nicht. Die unwirksame Bestimmung ist durch eine wirksame, die dem Sinn und Zweck am nächsten kommt, zu ersetzen.
                </p>
                <p>
                  <strong>1.6</strong> Die Angebote der Agentur sind freibleibend und unverbindlich.
                </p>
              </div>
            </section>

            {/* 2. Buchungs- und Plattformkanäle */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                2. Buchungs- und Plattformkanäle
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Die Agentur weist den Kunden ausdrücklich darauf hin, dass Anbieter von Online-Buchungsplattformen und Vermittlung (z.B. Airbnb, Booking.com, Vrbo, Expedia oder vergleichbare Plattformen – im Folgenden „Plattformen") eigene Nutzungsbedingungen haben.
                </p>
                <p>Diese Plattformen behalten sich vor:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Inserate abzulehnen oder zu entfernen</li>
                  <li>Accounts zu sperren</li>
                  <li>Inhalte zu ändern oder einzuschränken</li>
                  <li>Rankings oder Sichtbarkeit zu verändern</li>
                </ul>
                <p>Die Agentur hat keinen Einfluss auf Entscheidungen dieser Plattformen.</p>
                <p>Auch bei Einhaltung aller Richtlinien kann es vorkommen, dass:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Inserate vorübergehend deaktiviert werden</li>
                  <li>Inhalte entfernt werden</li>
                  <li>Accounts eingeschränkt werden</li>
                </ul>
                <p>
                  Der Kunde erkennt mit Auftragserteilung an, dass diese Plattformbedingungen maßgeblich für die Vermarktung der Unterkunft sind.
                </p>
                <p>
                  Die Agentur bemüht sich nach bestem Wissen, alle Plattformrichtlinien einzuhalten. Eine Garantie für die dauerhafte Sichtbarkeit oder Verfügbarkeit von Inseraten kann jedoch nicht übernommen werden.
                </p>
              </div>
            </section>

            {/* 3. Konzept- und Ideenschutz */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                3. Konzept- und Ideenschutz
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Hat der potentielle Kunde die Agentur vorab bereits eingeladen, ein Konzept zu erstellen, und kommt die Agentur dieser Einladung noch vor Abschluss des Hauptvertrages nach, so gilt nachstehende Regelung:
                </p>
                <p>
                  <strong>3.1</strong> Bereits durch die Einladung und die Annahme der Einladung durch die Agentur treten der potentielle Kunde und die Agentur in ein Vertragsverhältnis („Pitching-Vertrag"). Auch diesem Vertrag liegen die AGB zu Grunde.
                </p>
                <p>
                  <strong>3.2</strong> Der potentielle Kunde anerkennt, dass die Agentur bereits mit der Konzepterarbeitung kostenintensive Vorleistungen erbringt, obwohl er selbst noch keine Leistungspflichten übernommen hat.
                </p>
                <p>
                  <strong>3.3</strong> Das Konzept untersteht in seinen sprachlichen und grafischen Teilen, soweit diese Werkhöhe erreichen, dem Schutz des Urheberrechtsgesetzes. Eine Nutzung und Bearbeitung dieser Teile ohne Zustimmung der Agentur ist dem potentiellen Kunden schon aufgrund des Urheberrechtsgesetzes nicht gestattet.
                </p>
                <p>
                  <strong>3.4</strong> Das Konzept enthält darüber hinaus werberelevante Ideen, die keine Werkhöhe erreichen und damit nicht den Schutz des Urheberrechtsgesetzes genießen. Diese Ideen stehen am Anfang jedes Schaffensprozesses und können als der zündende Funke alles später Hervorgebrachte und somit als Ursprung der Vermarktungsstrategie definiert werden. Daher sind jene Elemente des Konzeptes geschützt, die eigenartig sind und der Vermarktungsstrategie ihre charakteristische Prägung geben. Als Idee im Sinne dieser Vereinbarung werden insbesondere Werbeschlagwörter, Werbetexte, Grafiken und Illustrationen, Werbemittel usw. angesehen, auch wenn sie keine Werkhöhe erreichen.
                </p>
                <p>
                  <strong>3.5</strong> Der potentielle Kunde verpflichtet sich, es zu unterlassen, diese von der Agentur im Rahmen des Konzeptes präsentierten kreativen Werbeideen außerhalb des Korrektivs eines später abzuschließenden Hauptvertrages wirtschaftlich zu verwerten bzw. verwerten zu lassen oder zu nutzen bzw. nutzen zu lassen.
                </p>
                <p>
                  <strong>3.6</strong> Sofern der potentielle Kunde der Meinung ist, dass ihm von der Agentur Ideen präsentiert wurden, auf die er bereits vor der Präsentation gekommen ist, so hat er dies der Agentur binnen 14 Tagen nach dem Tag der Präsentation per E-Mail unter Anführung von Beweismitteln, die eine zeitliche Zuordnung erlauben, bekannt zu geben.
                </p>
                <p>
                  <strong>3.7</strong> Im gegenteiligen Fall gehen die Vertragsparteien davon aus, dass die Agentur dem potentiellen Kunden eine für ihn neue Idee präsentiert hat. Wird die Idee vom Kunden verwendet, so ist davon auszugehen, dass die Agentur dabei verdienstlich wurde.
                </p>
                <p>
                  <strong>3.8</strong> Der potentielle Kunde kann sich von seinen Verpflichtungen aus diesem Punkt durch Zahlung einer angemessenen Entschädigung, welche sich nach dem Einzelfall berechnet, zuzüglich 20 % Umsatzsteuer befreien. Die Befreiung tritt erst nach vollständigem Eingang der Zahlung der Entschädigung bei der Agentur ein.
                </p>
              </div>
            </section>

            {/* 4. Leistungsumfang */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                4. Leistungsumfang, Auftragsabwicklung und Mitwirkungspflichten des Kunden
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>4.1</strong> Der Umfang der zu erbringenden Leistungen ergibt sich aus der Leistungsbeschreibung im Agenturvertrag oder einer allfälligen Auftragsbestätigung durch die Agentur, sowie dem allfälligen Briefingprotokoll („Angebotsunterlagen"). Nachträgliche Änderungen des Leistungsinhaltes bedürfen der schriftlichen Bestätigung. Innerhalb des vom Kunden vorgegebenen Rahmens besteht bei der Erfüllung des Auftrages Gestaltungsfreiheit der Agentur.
                </p>
                <p>
                  <strong>4.2</strong> Alle Leistungen der Agentur (insbesondere alle Vorentwürfe, Skizzen, Reinzeichnungen, Kopien und elektronische Dateien) sind vom Kunden zu überprüfen und von ihm binnen drei Werktagen ab Eingang beim Kunden freizugeben. Nach Verstreichen dieser Frist ohne Rückmeldung des Kunden gelten sie als vom Kunden genehmigt.
                </p>
                <p>
                  <strong>4.3</strong> Der Kunde wird der Agentur zeitgerecht und vollständig alle Informationen und Unterlagen zugänglich machen, die für die Erbringung der Leistung erforderlich sind. Er wird sie von allen Umständen informieren, die für die Durchführung des Auftrages von Bedeutung sind, auch wenn diese erst während der Durchführung des Auftrages bekannt werden. Der Kunde trägt den Aufwand, der dadurch entsteht, dass Arbeiten infolge seiner unrichtigen, unvollständigen oder nachträglich geänderten Angaben von der Agentur wiederholt werden müssen oder verzögert werden.
                </p>
                <p>
                  <strong>4.4</strong> Der Kunde verpflichtet sich, die für die Durchführung des Auftrages zur Verfügung gestellten Unterlagen (Fotos, Logos etc.) auf allfällige Urheber-, Marken-, Kennzeichenrechte oder sonstige Rechte Dritter zu prüfen (Rechteklärung) und garantiert, dass die Unterlagen frei von Rechten Dritter sind und daher für den angestrebten Zweck eingesetzt werden können. Die Agentur haftet im Falle bloß leichter Fahrlässigkeit oder nach Erfüllung ihrer Warnpflicht – jedenfalls im Innenverhältnis zum Kunden – nicht wegen einer Verletzung derartiger Rechte Dritter durch zur Verfügung gestellte Unterlagen. Wird die Agentur wegen einer solchen Rechtsverletzung von einem Dritten in Anspruch genommen, so hält der Kunde die Agentur schad- und klaglos; er hat ihr sämtliche Nachteile zu ersetzen, die ihr durch eine Inanspruchnahme Dritter entstehen, insbesondere die Kosten einer angemessenen rechtlichen Vertretung. Der Kunde verpflichtet sich, die Agentur bei der Abwehr von allfälligen Ansprüchen Dritter zu unterstützen und stellt der Agentur hierfür unaufgefordert sämtliche Unterlagen zur Verfügung.
                </p>
              </div>
            </section>

            {/* 5. Fremdleistungen */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                5. Fremdleistungen / Beauftragung Dritter
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>5.1</strong> Die Agentur ist nach freiem Ermessen berechtigt, die Leistung selbst auszuführen, sich bei der Erbringung von vertragsgegenständlichen Leistungen sachkundiger Dritter als Erfüllungsgehilfen zu bedienen und/oder derartige Leistungen zu substituieren („Fremdleistung").
                </p>
                <p>
                  <strong>5.2</strong> Die Beauftragung von Dritten im Rahmen einer Fremdleistung erfolgt entweder im eigenen Namen oder im Namen des Kunden, letztere nach vorheriger Information an den Kunden. Die Agentur wird diesen Dritten sorgfältig auswählen und darauf achten, dass dieser über die erforderliche fachliche Qualifikation verfügt.
                </p>
                <p>
                  <strong>5.3</strong> In Verpflichtungen gegenüber Dritten, die dem Kunden namhaft gemacht wurden und die über die Vertragslaufzeit hinausgehen, hat der Kunde einzutreten. Das gilt ausdrücklich auch im Falle einer Kündigung des Agenturvertrages aus wichtigem Grund.
                </p>
              </div>
            </section>

            {/* 6. Termine */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                6. Termine
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>6.1</strong> Angegebene Leistungsziele, Liefer- oder Leistungsfristen gelten, sofern nicht ausdrücklich als verbindlich vereinbart, nur als annähernd und unverbindlich. Die tatsächliche Leistungserbringung kann durch technische Gegebenheiten, die Verfügbarkeit interner und externer Ressourcen einschließlich personeller Kapazitäten sowie die zeitgerechte Mitwirkung des Auftraggebers beeinflusst werden. Darüber hinaus können unvorhergesehene organisatorische, infrastrukturelle oder marktbedingte Entwicklungen zu Verzögerungen führen, auf die die Agentur keinen oder nur eingeschränkten Einfluss hat. Diese Umstände begründen keine Pflichtverletzung der Agentur. Verbindliche Terminabsprachen sind schriftlich festzuhalten bzw. von der Agentur schriftlich zu bestätigen.
                </p>
                <p>
                  <strong>6.2</strong> Verzögert sich die Lieferung/Leistung der Agentur aus Gründen, die sie nicht zu vertreten hat, wie z.B. Ereignisse höherer Gewalt und andere unvorhersehbare, mit zumutbaren Mitteln nicht abwendbare Ereignisse, ruhen die Leistungsverpflichtungen für die Dauer und im Umfang des Hindernisses und verlängern sich die Fristen entsprechend. Sofern solche Verzögerungen mehr als zwei Monate andauern, sind der Kunde und die Agentur berechtigt, vom Vertrag zurückzutreten.
                </p>
                <p>
                  <strong>6.3</strong> Befindet sich die Agentur in Verzug, so kann der Kunde vom Vertrag nur zurücktreten, nachdem er der Agentur schriftlich eine angemessene Nachfrist von mindestens 14 Tagen gesetzt hat und diese fruchtlos verstrichen ist. Schadensersatzansprüche des Kunden wegen Nichterfüllung oder Verzug sind ausgeschlossen, ausgenommen bei Nachweis von Vorsatz oder grober Fahrlässigkeit.
                </p>
              </div>
            </section>

            {/* 7. Vorzeitige Vertragsauflösung */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                7. Vorzeitige Vertragsauflösung
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>7.1</strong> Die Agentur ist berechtigt, den Vertrag aus wichtigen Gründen mit sofortiger Wirkung aufzulösen. Ein wichtiger Grund liegt insbesondere vor, wenn
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>a) die Ausführung der Leistung aus Gründen, die der Kunde zu vertreten hat, unmöglich wird oder trotz Setzung einer Nachfrist von 14 Tagen weiter verzögert wird;</li>
                  <li>b) der Kunde fortgesetzt, trotz schriftlicher Abmahnung mit einer Nachfristsetzung von 14 Tagen, gegen wesentliche Verpflichtungen aus diesem Vertrag, wie z.B. Zahlung eines fällig gestellten Betrages oder Mitwirkungspflichten, verstößt;</li>
                  <li>c) berechtigte Bedenken hinsichtlich der Bonität des Kunden bestehen und dieser auf Begehren der Agentur weder Vorauszahlungen leistet noch vor Leistung der Agentur eine taugliche Sicherheit leistet.</li>
                </ul>
                <p>
                  <strong>7.2</strong> Der Kunde ist berechtigt, den Vertrag aus wichtigen Gründen ohne Nachfristsetzung aufzulösen. Ein wichtiger Grund liegt insbesondere dann vor, wenn die Agentur fortgesetzt, trotz schriftlicher Abmahnung mit einer angemessenen Nachfrist von mindestens 14 Tagen zur Behebung des Vertragsverstoßes gegen wesentliche Bestimmungen aus diesem Vertrag verstößt.
                </p>
              </div>
            </section>

            {/* 8. Honorar */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                8. Honorar
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>8.1</strong> Wenn nichts anderes vereinbart ist, entsteht der Honoraranspruch der Agentur für jede einzelne Leistung nach Auftragserteilung.
                </p>
                <p>
                  <strong>8.2</strong> Das Honorar versteht sich als Netto-Honorar zuzüglich der Umsatzsteuer in gesetzlicher Höhe. Mangels Vereinbarung im Einzelfall hat die Agentur für die erbrachten Leistungen und die Überlassung der urheber- und kennzeichenrechtlichen Nutzungsrechte Anspruch auf Honorar in der marktüblichen Höhe.
                </p>
                <p>
                  <strong>8.3</strong> Alle Leistungen der Agentur, die nicht ausdrücklich durch das vereinbarte Honorar abgegolten sind, werden gesondert entlohnt. Alle der Agentur erwachsenden Barauslagen sind vom Kunden zu ersetzen.
                </p>
                <p>
                  <strong>8.4</strong> Kostenvoranschläge der Agentur sind unverbindlich. Wenn abzusehen ist, dass die tatsächlichen Kosten die von der Agentur schriftlich veranschlagten um mehr als 15 % übersteigen, wird die Agentur den Kunden auf die höheren Kosten hinweisen. Die Kostenüberschreitung gilt als vom Kunden genehmigt, wenn der Kunde nicht binnen drei Werktagen nach diesem Hinweis schriftlich widerspricht und gleichzeitig kostengünstigere Alternativen bekannt gibt. Handelt es sich um eine Kostenüberschreitung bis 15 % ist eine gesonderte Verständigung nicht erforderlich. Diese Kostenvoranschlagsüberschreitung gilt vom Auftraggeber von vornherein als genehmigt.
                </p>
                <p>
                  <strong>8.5</strong> Wenn der Kunde in Auftrag gegebene Arbeiten ohne Einbindung der Agentur – unbeschadet der sonstigen Betreuung durch diese – einseitig ändert oder abbricht, hat er der Agentur die bis dahin erbrachten Leistungen entsprechend der Honorarvereinbarung zu vergüten und alle angefallenen Kosten zu erstatten. Sofern der Abbruch nicht durch eine grob fahrlässige oder vorsätzliche Pflichtverletzung der Agentur begründet ist, hat der Kunde der Agentur darüber hinaus das gesamte für diesen Auftrag vereinbarte Honorar (Provision) zu erstatten, wobei die Anrechnungsvergütung des § 1168 ABGB ausgeschlossen wird. Weiters ist die Agentur bezüglich allfälliger Ansprüche Dritter, insbesondere von Auftragnehmern der Agentur, schad- und klaglos zu stellen. Mit der Bezahlung des Entgelts erwirbt der Kunde an bereits erbrachten Arbeiten keinerlei Nutzungsrechte; nicht ausgeführte Konzepte, Entwürfe und sonstige Unterlagen sind vielmehr unverzüglich der Agentur zurückzustellen.
                </p>
              </div>
            </section>

            {/* 9. Zahlung */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                9. Zahlung
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>9.1</strong> Das Honorar ist sofort mit Rechnungserhalt und ohne Abzug zur Zahlung fällig, sofern nicht im Einzelfall besondere Zahlungsbedingungen schriftlich vereinbart werden. Dies gilt auch für die Weiterverrechnung sämtlicher Barauslagen und sonstiger Aufwendungen. Die von der Agentur gelieferte Ware bleibt bis zur vollständigen Bezahlung des Entgelts einschließlich aller Nebenverbindlichkeiten im Eigentum der Agentur.
                </p>
                <p>
                  <strong>9.2</strong> Bei Zahlungsverzug des Kunden gelten die gesetzlichen Verzugszinsen in der für Unternehmergeschäfte geltenden Höhe. Des Weiteren verpflichtet sich der Kunde für den Fall des Zahlungsverzugs, der Agentur die entstehenden Mahn- und Inkassospesen, soweit sie zur zweckentsprechenden Rechtsverfolgung notwendig sind, zu ersetzen. Dies umfasst jedenfalls die Kosten zweier Mahnschreiben in marktüblicher Höhe von derzeit mindestens € 20,00 je Mahnung sowie eines Mahnschreibens eines mit der Eintreibung beauftragten Rechtsanwalts. Die Geltendmachung weitergehender Rechte und Forderungen bleibt davon unberührt.
                </p>
                <p>
                  <strong>9.3</strong> Im Falle des Zahlungsverzuges des Kunden kann die Agentur sämtliche, im Rahmen anderer mit dem Kunden abgeschlossener Verträge, erbrachten Leistungen und Teilleistungen sofort fällig stellen.
                </p>
                <p>
                  <strong>9.4</strong> Weiters ist die Agentur nicht verpflichtet, weitere Leistungen bis zur Begleichung des aushaftenden Betrages zu erbringen (Zurückbehaltungsrecht). Die Verpflichtung zur Entgeltzahlung bleibt davon unberührt.
                </p>
                <p>
                  <strong>9.5</strong> Wurde die Bezahlung in Raten vereinbart, so behält sich die Agentur für den Fall der nicht fristgerechten Zahlung von Teilbeträgen oder Nebenforderungen das Recht vor, die sofortige Bezahlung der gesamten noch offenen Schuld zu fordern (Terminverlust).
                </p>
                <p>
                  <strong>9.6</strong> Der Kunde ist nicht berechtigt, mit eigenen Forderungen gegen Forderungen der Agentur aufzurechnen, außer die Forderung des Kunden wurde von der Agentur schriftlich anerkannt oder gerichtlich festgestellt.
                </p>
              </div>
            </section>

            {/* 10. Eigentumsrecht und Urheberrecht */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                10. Eigentumsrecht und Urheberrecht
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>10.1</strong> Alle Leistungen der Agentur, einschließlich jener aus Präsentationen (z.B. Anregungen, Ideen, Skizzen, Vorentwürfe, Reinzeichnungen, Konzepte), auch einzelne Teile daraus, bleiben ebenso wie die einzelnen Werkstücke und Originale im Eigentum der Agentur und können von der Agentur jederzeit – insbesondere bei Beendigung des Vertragsverhältnisses – zurückverlangt werden. Der Kunde erwirbt durch Zahlung des Honorars das Recht der Nutzung für den vereinbarten Verwendungszweck. Der Erwerb von Nutzungs- und Verwertungsrechten an Leistungen der Agentur setzt in jedem Fall die vollständige Bezahlung der von der Agentur dafür in Rechnung gestellten Honorare voraus. Nutzt der Kunde bereits vor diesem Zeitpunkt die Leistungen der Agentur, so beruht diese Nutzung auf einem jederzeit widerrufbaren Leihverhältnis.
                </p>
                <p>
                  <strong>10.2</strong> Änderungen bzw. Bearbeitungen von Leistungen der Agentur, wie insbesondere deren Weiterentwicklung durch den Kunden oder durch für diesen tätige Dritte, sind nur mit ausdrücklicher Zustimmung der Agentur und – soweit die Leistungen urheberrechtlich geschützt sind – des Urhebers zulässig. Die Herausgabe aller sogenannten „offenen Dateien" wird damit ausdrücklich nicht Vertragsbestandteil. Die Agentur ist dazu nicht verpflichtet. D.h. ohne vertragliche Abtretung der Nutzungsrechte auch für „elektronische Arbeiten" hat der Auftraggeber keinen Rechtsanspruch darauf.
                </p>
                <p>
                  <strong>10.3</strong> Für die Nutzung von Leistungen der Agentur, die über den ursprünglich vereinbarten Zweck und Nutzungsumfang hinausgeht, ist – unabhängig davon, ob diese Leistung urheberrechtlich geschützt ist – die Zustimmung der Agentur erforderlich. Dafür steht der Agentur und dem Urheber eine gesonderte angemessene Vergütung zu.
                </p>
                <p>
                  <strong>10.4</strong> Für die Nutzung von Leistungen der Agentur bzw. von Werbemitteln, für die die Agentur konzeptionelle oder gestalterische Vorlagen erarbeitet hat, ist nach Ablauf des Agenturvertrages unabhängig davon, ob diese Leistung urheberrechtlich geschützt ist oder nicht, ebenfalls die Zustimmung der Agentur notwendig.
                </p>
                <p>
                  <strong>10.5</strong> Für Nutzungen gemäß Abs 4. steht der Agentur im 1. Jahr nach Vertragsende ein Anspruch auf die volle im abgelaufenen Vertrag vereinbarte Agenturvergütung zu. Im 2. bzw. 3. Jahr nach Ablauf des Vertrages jeweils ein Viertel der im Vertrag vereinbarten Vergütung. Ab dem 4. Jahr nach Vertragsende ist keine Agenturvergütung mehr zu zahlen.
                </p>
                <p>
                  <strong>10.6</strong> Der Kunde haftet der Agentur für jede widerrechtliche Nutzung in doppelter Höhe des für diese Nutzung angemessenen Honorars.
                </p>
              </div>
            </section>

            {/* 11. Referenznennung */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                11. Referenznennung
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>11.1</strong> Die Agentur ist berechtigt, auf allen Werbemitteln und bei allen Werbemaßnahmen auf die Agentur und allenfalls auf den Urheber hinzuweisen, ohne dass dem Kunden dafür ein Entgeltanspruch zusteht.
                </p>
                <p>
                  <strong>11.2</strong> Die Agentur ist vorbehaltlich des jederzeit möglichen, schriftlichen Widerrufs des Kunden dazu berechtigt, auf eigenen Werbeträgern und insbesondere auf ihrer Internet-Website mit Namen und Firmenlogo sowie der Arbeit auf die zum Kunden bestehende oder vormalige Geschäftsbeziehung hinzuweisen (Referenzhinweis).
                </p>
              </div>
            </section>

            {/* 12. Gewährleistung */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                12. Gewährleistung
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>12.1</strong> Der Kunde hat allfällige Mängel unverzüglich, jedenfalls innerhalb von acht Tagen nach Lieferung/Leistung durch die Agentur, verdeckte Mängel innerhalb von acht Tagen nach Erkennen derselben, schriftlich unter Beschreibung des Mangels anzuzeigen; andernfalls gilt eine allfällige Abweichung der Leistung als genehmigt. In diesem Fall ist die Geltendmachung von Gewährleistungs- und Schadenersatzansprüchen sowie das Recht auf Irrtumsanfechtung aufgrund von Mängeln ausgeschlossen.
                </p>
                <p>
                  <strong>12.2</strong> Im Fall berechtigter und rechtzeitiger Mängelrüge steht dem Kunden das Recht auf Verbesserung oder Austausch der Lieferung/Leistung durch die Agentur zu. Die Agentur wird die Mängel in angemessener Frist beheben, wobei der Kunde der Agentur alle zur Untersuchung und Mängelbehebung erforderlichen Maßnahmen ermöglicht. Die Agentur ist berechtigt, die Verbesserung der Leistung zu verweigern, wenn diese unmöglich oder für die Agentur mit einem unverhältnismäßig hohen Aufwand verbunden ist. In diesem Fall stehen dem Kunden die gesetzlichen Wandlungs- oder Minderungsrechte zu. Im Fall der Verbesserung obliegt es dem Auftraggeber, die Übermittlung der mangelhaften (körperlichen) Sache auf seine Kosten durchzuführen.
                </p>
                <p>
                  <strong>12.3</strong> Es obliegt auch dem Auftraggeber, die Überprüfung der Leistung auf ihre rechtliche, insbesondere wettbewerbs-, marken-, urheber- und verwaltungsrechtliche Zulässigkeit durchzuführen. Die Agentur ist nur zu einer Grobprüfung der rechtlichen Zulässigkeit verpflichtet. Die Agentur haftet im Falle leichter Fahrlässigkeit oder nach Erfüllung einer allfälligen Warnpflicht gegenüber dem Kunden nicht für die rechtliche Zulässigkeit von Inhalten, wenn diese vom Kunden vorgegeben oder genehmigt wurden.
                </p>
                <p>
                  <strong>12.4</strong> Die Gewährleistungsfrist beträgt sechs Monate ab Lieferung/Leistung. Der Kunde ist nicht berechtigt, Zahlungen wegen Bemängelungen zurückzuhalten. Die Vermutungsregelung des § 924 ABGB wird ausgeschlossen.
                </p>
              </div>
            </section>

            {/* 13. Haftung */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                13. Haftung
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>13.1</strong> In Fällen leichter Fahrlässigkeit ist eine Haftung der Agentur und die ihrer Angestellten, Auftragnehmer oder sonstigen Erfüllungsgehilfen („Leute") für Sach- oder Vermögensschäden des Kunden ausgeschlossen, gleichgültig ob es sich um unmittelbare oder mittelbare Schäden, entgangenen Gewinn, Folgeschäden, Schäden wegen Verzugs, Buchungsausfälle, Rankingveränderungen, Entscheidungen von Buchungsplattformen, Unmöglichkeit, positiver Forderungsverletzung, Verschuldens bei Vertragsabschluss, wegen mangelhafter oder unvollständiger Leistung handelt. Das Vorliegen von grober Fahrlässigkeit hat der Geschädigte zu beweisen. Soweit die Haftung der Agentur ausgeschlossen oder beschränkt ist, gilt dies auch für die persönliche Haftung ihrer „Leute".
                </p>
                <p>
                  <strong>13.2</strong> Jegliche Haftung der Agentur für Ansprüche, die auf Grund der von der Agentur erbrachten Leistung (z.B. Werbemaßnahme) gegen den Kunden erhoben werden, wird ausdrücklich ausgeschlossen, wenn die Agentur ihrer Hinweispflicht nachgekommen ist oder eine solche für sie nicht erkennbar war, wobei leichte Fahrlässigkeit nicht schadet. Insbesondere haftet die Agentur nicht für Prozesskosten, eigene Anwaltskosten des Kunden oder Kosten von Urteilsveröffentlichungen sowie für allfällige Schadenersatzforderungen oder sonstige Ansprüche Dritter. Der Kunde hat die Agentur diesbezüglich schad- und klaglos zu halten.
                </p>
                <p>
                  <strong>13.3</strong> Schadensersatzansprüche des Kunden verfallen in sechs Monaten ab Kenntnis des Schadens; jedenfalls aber nach drei Jahren ab der Verletzungshandlung der Agentur. Schadenersatzansprüche sind der Höhe nach mit dem Netto-Auftragswert begrenzt.
                </p>
              </div>
            </section>

            {/* 14. Anwendbares Recht */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                14. Anwendbares Recht
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Der Vertrag und alle daraus abgeleiteten wechselseitigen Rechte und Pflichten sowie Ansprüche zwischen der Agentur und dem Kunden unterliegen dem österreichischen materiellen Recht unter Ausschluss seiner Verweisungsnormen und unter Ausschluss des UN-Kaufrechts.
                </p>
              </div>
            </section>

            {/* 15. Gerichtsstand */}
            <section className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                15. Gerichtsstand
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <strong>15.1</strong> Erfüllungsort ist der Sitz der Agentur. Bei Versand geht die Gefahr auf den Kunden über, sobald die Agentur die Ware dem von ihr gewählten Beförderungsunternehmen übergeben hat.
                </p>
                <p>
                  <strong>15.2</strong> Als Gerichtsstand für alle sich zwischen der Agentur und dem Kunden ergebenden Rechtsstreitigkeiten im Zusammenhang mit diesem Vertragsverhältnis wird das für den Sitz der Agentur sachlich zuständige Gericht vereinbart. Ungeachtet dessen ist die Agentur berechtigt, den Kunden an seinem allgemeinen Gerichtsstand zu klagen.
                </p>
                <p>
                  <strong>15.3</strong> Soweit in diesem Vertrag auf natürliche Personen bezogene Bezeichnungen nur in männlicher Form angeführt sind, beziehen sie sich auf Frauen und Männer in gleicher Weise. Bei der Anwendung der Bezeichnung auf bestimmte natürliche Personen ist die jeweils geschlechtsspezifische Form zu verwenden.
                </p>
              </div>
            </section>

            {/* Stand */}
            <section className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                Stand: 11. März 2026
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
