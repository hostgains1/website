import { BlogPost } from '../types/blog';

// Blog posts data - Add new articles here
export const blogPosts: BlogPost[] = [
  {
    slug: 'kurzzeitvermietung-kaernten-marktanalyse-2025',
    title: 'Kurzzeitvermietung in Kärnten: Was die Zahlen wirklich zeigen',
    description: 'Datenbasierte Analyse des Kurzzeitvermietungsmarkts in Kärnten 2025. Auslastungsraten, Durchschnittspreise und saisonale Muster am Wörthersee und Umgebung.',
    excerpt: 'Der Markt für Kurzzeitvermietung in Kärnten hat sich in den letzten Jahren stark verändert. Eine Analyse aktueller Buchungsdaten zeigt, welche Faktoren tatsächlich über Erfolg oder Misserfolg entscheiden.',
    content: `
<p>Zwischen gefühlter Wahrheit und tatsächlicher Marktlage liegen Welten. Die Zahlen erzählen eine andere Geschichte als die Schlagzeilen.</p>

<h2 id="ausgangslage">Die Ausgangslage</h2>

<p>Kärnten verzeichnete 2024 rund <strong>8,2 Millionen Übernachtungen</strong>. Davon entfallen etwa 12% auf Kurzzeitvermietungen über Plattformen wie Airbnb und Booking.com.</p>

<p>Ein Anteil, der seit 2019 um 340% gewachsen ist.</p>

<p><em>Das klingt nach einem Boom.</em></p>

<p>Während die Anzahl der Inserate am Wörthersee zwischen 2021 und 2024 um 67% stieg, blieb die Gesamtnachfrage nahezu konstant.</p>

<p>Das Ergebnis: Der durchschnittliche Jahresumsatz pro Objekt ist um <strong>23% gesunken</strong>.</p>

<h2 id="saisonalitaet">Das Saisonproblem</h2>

<p><strong>Juni bis August</strong> generieren 58% des Jahresumsatzes.</p>

<p><strong>Dezember bis Februar</strong> tragen 8% bei.</p>

<p>Die restlichen sechs Monate teilen sich die übrigen 34%.</p>

<p>Was dabei oft übersehen wird:</p>

<p><em>Die Nebensaison bestimmt, ob sich ein Objekt rechnet.</em></p>

<p>Eine 60m²-Wohnung in Pörtschach erzielt im Juli durchschnittlich 4.200 € Umsatz. Im November sind es 380 €.</p>

<p>Die Fixkosten laufen weiter.</p>

<h2 id="preisdynamik">Preiskorridore nach Mikrostandort</h2>

<p><strong>Erste Seereihe Wörthersee:</strong> 185–320 € pro Nacht</p>

<p><strong>Klagenfurt Innenstadt:</strong> 75–120 € pro Nacht</p>

<p><strong>Ländliche Gebiete:</strong> 55–85 € pro Nacht</p>

<p>Interessant ist die Korrelation zwischen Preis und Auslastung.</p>

<p>Objekte im mittleren Segment (90–140 €) erreichen die höchste Jahresauslastung: <strong>62%</strong>.</p>

<p>Premium-Objekte über 200 € kommen auf 41%.</p>

<p><em>Höherer Preis bedeutet nicht automatisch höheren Gesamtumsatz.</em></p>

<h2 id="regulierung">Regulatorischer Rahmen</h2>

<p>Kärnten hat 2023 die Meldepflichten verschärft. Jeder Gast muss innerhalb von 24 Stunden elektronisch bei der Gemeinde gemeldet werden.</p>

<p>Die Ortstaxe: bis zu <strong>3 € pro Person und Nacht</strong>.</p>

<p>Steuerlich gelten folgende Eckpunkte:</p>

<p>Einkünfte unterliegen der Einkommenssteuer. Beherbergungsleistungen werden mit 10% USt besteuert. Die Kleinunternehmerregelung greift bis 35.000 € Jahresumsatz.</p>

<p>Eine Gewerbeanmeldung ist erforderlich, sobald die Vermietung regelmäßig und mit Gewinnerzielungsabsicht erfolgt.</p>

<p><em>Die Grenze ist fließend.</em></p>

<h3 id="erfolgsfaktoren">Was die Top-Performer gemeinsam haben</h3>

<p>Eine Analyse der Top-10%-Objekte nach Jahresumsatz zeigt wiederkehrende Muster:</p>

<p><strong>Professionelle Fotografie</strong> – 34% mehr Buchungsanfragen. Die Investition von 300–500 € amortisiert sich in Monaten.</p>

<p><strong>Dynamische Preisgestaltung</strong> – 28% höhere Umsätze gegenüber Festpreisen.</p>

<p><strong>Schnelle Reaktionszeiten</strong> – Antworten innerhalb einer Stunde erhöhen die Buchungswahrscheinlichkeit um 40%.</p>

<p><strong>Konsistente Bewertungen</strong> – Objekte mit mehr als 20 Bewertungen und einem Schnitt über 4,7 Sternen erzielen 45% höhere Tagespreise.</p>

<h2 id="ausblick">Die Konsolidierung</h2>

<p>Der Markt bereinigt sich. Unprofessionell geführte Objekte verlieren Anteile an optimierte Inserate.</p>

<p>Gleichzeitig verschiebt sich die Nachfrage.</p>

<p><em>Workation</em> und Remote Work treiben die Nachfrage nach längeren Aufenthalten. 2–4 Wochen statt 3–5 Nächte.</p>

<p>Objekte mit schnellem WLAN, dediziertem Arbeitsplatz und flexiblen Check-in-Zeiten profitieren überproportional.</p>

<p><em>Der Markt belohnt Anpassungsfähigkeit.</em></p>
    `,
    author: {
      name: 'Julian Ograjensek',
      role: 'Mitgründer & Geschäftsführer',
      avatar: '/Julian.png',
    },
    publishedAt: '2025-01-08',
    updatedAt: '2025-01-08',
    category: 'Marktanalyse',
    tags: ['Kurzzeitvermietung', 'Kärnten', 'Wörthersee', 'Marktdaten'],
    featuredImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    featuredImageAlt: 'Moderne Ferienwohnung mit Seeblick in Kärnten',
    readingTime: 6,
    tableOfContents: [
      { id: 'ausgangslage', text: 'Die Ausgangslage', level: 2 },
      { id: 'saisonalitaet', text: 'Das Saisonproblem', level: 2 },
      { id: 'preisdynamik', text: 'Preiskorridore nach Mikrostandort', level: 2 },
      { id: 'regulierung', text: 'Regulatorischer Rahmen', level: 2 },
      { id: 'erfolgsfaktoren', text: 'Was die Top-Performer gemeinsam haben', level: 3 },
      { id: 'ausblick', text: 'Die Konsolidierung', level: 2 },
    ],
  },
  {
    slug: 'airbnb-inserat-amateur-vs-profi',
    title: 'Airbnb-Inserate: Der Unterschied zwischen Amateur und Profi',
    description: 'Warum manche Airbnb-Inserate 90% Auslastung erreichen und andere bei 30% stagnieren. Eine Gegenüberstellung der Herangehensweisen.',
    excerpt: 'Zwei Wohnungen im selben Haus. Ähnliche Ausstattung. Eine ist ausgebucht, die andere steht leer. Der Unterschied liegt nicht im Objekt – sondern im Inserat.',
    content: `
<p>Zwei Wohnungen im selben Haus. Ähnliche Ausstattung. Eine ist ausgebucht, die andere steht leer. Der Unterschied liegt im Detail.</p>

<h2 id="der-titel">Der Titel</h2>

<p><strong>Amateur:</strong> „Schöne Wohnung in Klagenfurt, zentral gelegen"</p>

<p><strong>Profi:</strong> „Altbau-Loft mit Bergblick | 5 Min zum See | Tiefgarage"</p>

<p>Der erste beschreibt. Der zweite positioniert.</p>

<p>Der Profi-Titel enthält drei konkrete Vorteile. Der Amateur-Titel könnte auf jede zweite Wohnung zutreffen.</p>

<p>Airbnb zeigt etwa <strong>20 Zeichen</strong> in der Listenansicht.</p>

<p><em>Was in diesen 20 Zeichen steht, entscheidet über Klick oder Scroll.</em></p>

<h2 id="die-fotos">Die Fotos</h2>

<p>Amateur-Fotos erkennt man sofort: Handybilder bei schlechtem Licht. Ungemachte Betten. Weitwinkel, der Räume verzerrt.</p>

<p>Profi-Fotos folgen einer Logik:</p>

<p><strong>Titelbild:</strong> Der stärkste Vorteil. Ausblick, Terrasse, ein designstarkes Detail. Nicht das Wohnzimmer, weil man damit anfängt.</p>

<p><strong>Bildreihenfolge:</strong> Schlafzimmer, Küche, Bad, Umgebung. Diese Sequenz entspricht der mentalen Checkliste der Gäste.</p>

<p><strong>Licht:</strong> Tageslicht zwischen 10 und 14 Uhr. Keine Kunstlichtatmosphäre.</p>

<p>Die Investition in einen Fotografen – 300 bis 500 € – amortisiert sich nach 2 bis 3 zusätzlichen Buchungen.</p>

<h2 id="die-beschreibung">Die Beschreibung</h2>

<p><strong>Amateur:</strong> „Die Wohnung hat 2 Zimmer, eine Küche, ein Bad, WLAN und einen Parkplatz."</p>

<p><strong>Profi:</strong> „Morgens der Blick auf die Karawanken. Der Wörthersee in fünf Minuten zu Fuß. Abends der Sonnenuntergang vom Balkon."</p>

<p>Beide beschreiben dasselbe Objekt.</p>

<p>Die zweite Variante erzeugt Bilder.</p>

<p><em>Entscheidungen werden emotional getroffen und rational begründet.</em></p>

<h3 id="beschreibung-struktur">Aufbau einer funktionierenden Beschreibung</h3>

<p><strong>Eröffnung:</strong> Warum dieses Objekt besonders ist</p>

<p><strong>Highlights:</strong> 3 bis 5 konkrete Vorteile</p>

<p><strong>Praktisches:</strong> Ausstattung, Schlafmöglichkeiten</p>

<p><strong>Umgebung:</strong> Was sich vor Ort erleben lässt</p>

<p><strong>Logistik:</strong> Anreise, Parken, Check-in</p>

<h2 id="die-preisgestaltung">Die Preisgestaltung</h2>

<p>Amateure setzen einen Preis, der fair erscheint, und lassen ihn Monate unverändert.</p>

<p>Der richtige Preis ändert sich täglich.</p>

<p>Am Wörthersee kann dieselbe Nacht 75 € oder 220 € wert sein.</p>

<p>Die Variablen:</p>

<p><strong>Wochentag</strong> – Freitage und Samstage bringen 25 bis 40% mehr</p>

<p><strong>Saison</strong> – Juli ist dreimal so viel wert wie November</p>

<p><strong>Events</strong> – GTI-Treffen oder Ironman vervierfachen die Nachfrage</p>

<p><strong>Vorlaufzeit</strong> – Last-Minute erfordert andere Preise als 60 Tage Vorlauf</p>

<p><em>Dynamisches Pricing ist der Unterschied zwischen 20 und 35% mehr Jahresumsatz.</em></p>

<h2 id="die-kommunikation">Die Kommunikation</h2>

<p>Amateure antworten, wenn Zeit ist.</p>

<p>Jede Stunde Verzögerung senkt die Konversionsrate um etwa <strong>10%</strong>.</p>

<p>Aber es geht nicht nur um Geschwindigkeit.</p>

<p>Ein Gast fragt: „Gibt es einen Parkplatz?"</p>

<p><strong>Amateur:</strong> „Ja, es gibt einen Parkplatz."</p>

<p><strong>Profi:</strong> „Ja, ein kostenloser Tiefgaragenstellplatz ist inklusive. Die Einfahrt ist über die Hauptstraße erreichbar. Die Einfahrtshöhe beträgt 2,10 m."</p>

<p><em>Die zweite Antwort beantwortet Folgefragen, bevor sie gestellt werden.</em></p>

<h2 id="das-ergebnis">Der Unterschied in Zahlen</h2>

<p>Dieselbe Wohnung, professionell optimiert, erzielt <strong>40 bis 60% mehr Umsatz</strong>.</p>

<p>Bei 20.000 € Jahresumsatz sind das 8.000 bis 12.000 € Differenz.</p>

<p>Der Unterschied ist nicht Talent.</p>

<p><em>Es ist Methodik.</em></p>
    `,
    author: {
      name: 'Mario Brenner',
      role: 'Mitgründer & Geschäftsführer',
      avatar: '/Mario.png',
    },
    publishedAt: '2025-01-05',
    category: 'Optimierung',
    tags: ['Airbnb', 'Inserat', 'Optimierung', 'Buchungen'],
    featuredImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    featuredImageAlt: 'Einladend gestaltete Ferienwohnung mit modernem Design',
    readingTime: 7,
    tableOfContents: [
      { id: 'der-titel', text: 'Der Titel', level: 2 },
      { id: 'die-fotos', text: 'Die Fotos', level: 2 },
      { id: 'die-beschreibung', text: 'Die Beschreibung', level: 2 },
      { id: 'beschreibung-struktur', text: 'Aufbau einer Beschreibung', level: 3 },
      { id: 'die-preisgestaltung', text: 'Die Preisgestaltung', level: 2 },
      { id: 'die-kommunikation', text: 'Die Kommunikation', level: 2 },
      { id: 'das-ergebnis', text: 'Der Unterschied in Zahlen', level: 2 },
    ],
  },
  {
    slug: 'dynamisches-pricing-mythen-realitaet',
    title: 'Dynamisches Pricing: Fünf Mythen, die Vermieter Geld kosten',
    description: 'Warum viele Vermieter bei der Preisgestaltung falsch liegen. Eine Analyse verbreiteter Irrtümer über dynamisches Pricing bei Ferienwohnungen.',
    excerpt: 'Dynamisches Pricing klingt nach Wissenschaft. In der Praxis scheitern viele Vermieter an grundlegenden Denkfehlern. Eine Bestandsaufnahme.',
    content: `
<p>Intuitive Annahmen führen in die Irre. Eine Analyse zeigt, welche Denkfehler am meisten Geld kosten.</p>

<h2 id="mythos-1">Höhere Preise = weniger Buchungen</h2>

<p>Diese Logik erscheint unumstößlich.</p>

<p>Eine Analyse von 1.200 Ferienwohnungen zeigt: Objekte, die in der Hochsaison 40 bis 60% aufschlagen, erreichen <strong>keine niedrigere Auslastung</strong> als jene mit 10 bis 20% Aufschlag.</p>

<p>Der Grund:</p>

<p><em>In der Hochsaison ist Verfügbarkeit das Problem, nicht der Preis.</em></p>

<p>Wer am Wörthersee im Juli 95 € anbietet, während vergleichbare Objekte 180 € verlangen, bekommt sofort Buchungen. Aber eben nur zu 95 €.</p>

<p>Die Nachfrage hätte auch 160 € getragen.</p>

<p>Volle Auslastung bei halbem Umsatz.</p>

<h2 id="mythos-2">Niedrige Preise bringen Nebensaison-Buchungen</h2>

<p>Dieser Irrtum kostet am meisten.</p>

<p>Im November liegt die Nachfrage am Wörthersee bei etwa <strong>15% des Juli-Niveaus</strong>.</p>

<p>Wer den Preis um 50% senkt, erreicht nicht 50% mehr Buchungen. Die Nachfrage bleibt konstant – sie ist nicht vorhanden.</p>

<p>Was stattdessen passiert: Die wenigen Buchungen erfolgen zu Preisen, die die Kosten kaum decken.</p>

<p><em>Ein leeres Objekt kostet weniger als ein Gast, der 45 € zahlt, während Reinigung und Wäsche 50 € kosten.</em></p>

<h2 id="mythos-3">Der Algorithmus macht die Arbeit</h2>

<p>Tools wie Pricelabs oder Beyond Pricing sind mächtig. Aber sie sind nur so gut wie ihre Konfiguration.</p>

<p>Häufiger Fehler: Standardeinstellungen übernehmen und optimale Ergebnisse erwarten.</p>

<p>Jedes Objekt braucht individuelle Anpassungen.</p>

<p>Ein Objekt in erster Seereihe hat andere Preiskorridore als eine Wohnung drei Straßen weiter. Der Algorithmus kennt diese Unterschiede nicht automatisch.</p>

<p><em>Er muss trainiert werden.</em></p>

<h2 id="mythos-4">Einmal einrichten, dann läuft es</h2>

<p>Der Markt verändert sich ständig.</p>

<p>Neue Mitbewerber. Angekündigte oder abgesagte Events. Wetterverhältnisse. Wirtschaftliche Faktoren.</p>

<p>Dynamisches Pricing bedeutet: <strong>wöchentliche Überprüfung.</strong></p>

<p>Die relevanten Fragen:</p>

<p>Wie entwickelt sich die Auslastung im Vergleich zum Vorjahr?</p>

<p>Welche Preise setzen die Top-3-Mitbewerber an?</p>

<p>Gibt es lokale Events, die der Algorithmus nicht kennt?</p>

<p><em>Wer diese Fragen nicht stellt, optimiert blind.</em></p>

<h2 id="mythos-5">Airbnb Smart Pricing reicht</h2>

<p>Die kostenlose Preisempfehlung ist besser als nichts. Aber systematisch konservativ.</p>

<p>Airbnb optimiert auf Buchungen, nicht auf Umsatz.</p>

<p>Die Plattform verdient an jeder Transaktion – egal zu welchem Preis. Ein Interesse an Preismaximierung hat sie nicht.</p>

<p>Vergleichsdaten: Smart Pricing empfiehlt <strong>15 bis 25% niedrigere Preise</strong> als spezialisierte Tools.</p>

<p>Bei 30.000 € Jahresumsatz: 4.500 bis 7.500 € Differenz.</p>

<p>Spezialisierte Tools kosten 15 bis 30 € pro Monat.</p>

<h3 id="was-funktioniert">Die Methodik</h3>

<p><strong>Basispreis definieren</strong> – Was ist das Objekt in einer durchschnittlichen Woche der Zwischensaison wert?</p>

<p><strong>Saisonale Multiplikatoren</strong> – Hochsaison +50 bis +100%, Nebensaison -10 bis -30%</p>

<p><strong>Event-Kalender pflegen</strong> – Lokale Großveranstaltungen identifizieren, Aufschläge manuell einpflegen</p>

<p><strong>Wöchentlich überprüfen</strong> – Auslastung tracken, Preise anpassen, Mitbewerber beobachten</p>

<p>Aufwand: 30 bis 60 Minuten pro Woche.</p>

<p>Ertrag: <strong>20 bis 40% mehr Jahresumsatz.</strong></p>
    `,
    author: {
      name: 'Julian Ograjensek',
      role: 'Mitgründer & Geschäftsführer',
      avatar: '/Julian.png',
    },
    publishedAt: '2024-12-28',
    category: 'Preisgestaltung',
    tags: ['Pricing', 'Revenue Management', 'Strategie', 'Umsatz'],
    featuredImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    featuredImageAlt: 'Analytics Dashboard mit Preisdiagrammen',
    readingTime: 7,
    tableOfContents: [
      { id: 'mythos-1', text: 'Höhere Preise = weniger Buchungen', level: 2 },
      { id: 'mythos-2', text: 'Niedrige Preise bringen Nebensaison-Buchungen', level: 2 },
      { id: 'mythos-3', text: 'Der Algorithmus macht die Arbeit', level: 2 },
      { id: 'mythos-4', text: 'Einmal einrichten, dann läuft es', level: 2 },
      { id: 'mythos-5', text: 'Airbnb Smart Pricing reicht', level: 2 },
      { id: 'was-funktioniert', text: 'Die Methodik', level: 3 },
    ],
  },
  {
    slug: 'gaestekommunikation-denkfehler',
    title: 'Gästekommunikation: Warum schnelle Antworten nicht reichen',
    description: 'Die meisten Vermieter verstehen Gästekommunikation als Reaktion. Ein Perspektivwechsel zeigt, warum das zu kurz gedacht ist.',
    excerpt: 'Schnelle Antworten sind gut. Aber sie lösen nicht das eigentliche Problem. Eine Analyse zeigt, wo Kommunikation wirklich scheitert.',
    content: `
<p>90% der negativen Bewertungen entstehen durch Kommunikationsprobleme. Nicht durch langsame Antworten – sondern durch die falschen.</p>

<h2 id="das-problem">Der Denkfehler</h2>

<p>Kommunikation als <strong>Reaktion</strong>. Ein Gast fragt, man antwortet. Fertig.</p>

<p>Das setzt voraus, dass Gäste die richtigen Fragen stellen.</p>

<p><em>Tun sie nicht.</em></p>

<p>Ein Gast fragt: „Wo kann ich parken?"</p>

<p>Er fragt nicht nach der Einfahrtshöhe der Tiefgarage. Nicht nach der Anfahrtsroute. Nicht nach E-Auto-Ladestationen.</p>

<p>Er weiß nicht, was er nicht weiß.</p>

<p>Bei der Ankunft stellt er fest: Sein SUV passt nicht. Er muss einen Parkplatz suchen. Es regnet.</p>

<p><strong>Die Bewertung später:</strong> „Parkplatzsituation unklar."</p>

<h2 id="der-perspektivwechsel">Der Wechsel</h2>

<p>Professionelle Kommunikation ist nicht reaktiv.</p>

<p>Sie ist <strong>antizipativ</strong>.</p>

<p>Informationen liefern, bevor sie angefragt werden. Probleme lösen, bevor sie entstehen. Erwartungen managen, bevor Enttäuschung eintritt.</p>

<p>Drei Tage vor Anreise erhält der Gast eine Nachricht. Keine Frage, ob er noch etwas braucht – sondern konkrete Informationen:</p>

<p>Check-in-Anleitung mit Fotos. Parkplatzdetails inklusive Maße. WLAN-Zugangsdaten. Restaurant-Empfehlungen. Notfallkontakt.</p>

<p><em>Der Gast muss nicht fragen. Er fühlt sich betreut.</em></p>

<h2 id="die-timeline">Die kritischen Momente</h2>

<p>Kommunikation ist nicht gleichmäßig wichtig.</p>

<p><strong>Nach der Buchung</strong> – Innerhalb von 2 Stunden eine persönliche Bestätigung. Keine Template-Mail.</p>

<p><strong>3 Tage vor Anreise</strong> – Die operative Information. Alles für einen reibungslosen Check-in.</p>

<p><strong>Am Check-in-Tag</strong> – Eine kurze Nachricht am Morgen. Präsenz zeigen.</p>

<p><strong>2 Stunden nach Check-in</strong> – Die wichtigste Nachricht: „Alles in Ordnung?"</p>

<p><em>Diese eine Nachricht verhindert mehr negative Bewertungen als alle anderen zusammen.</em></p>

<p><strong>Am Morgen des Check-outs</strong> – Freundliche Erinnerung mit praktischen Details.</p>

<p><strong>24 Stunden nach Check-out</strong> – Ein Dank. Keine Bewertungsaufforderung.</p>

<h2 id="schwierige-situationen">Wenn etwas schiefgeht</h2>

<p>Probleme passieren. Heizung fällt aus. WLAN funktioniert nicht. Nachbar feiert laut.</p>

<p>Der häufigste Fehler: <strong>Defensiv werden.</strong></p>

<p>„Das ist noch nie passiert."</p>

<p>„Normalerweise funktioniert das."</p>

<p>„Da kann ich leider nichts machen."</p>

<p>Jeder dieser Sätze verschlimmert die Situation.</p>

<h3 id="reaktion-schema">Das bessere Schema</h3>

<p><strong>Anerkennen</strong> – „Das ist ärgerlich. Ich verstehe die Frustration."</p>

<p><strong>Lösen</strong> – „Ich schicke sofort jemanden." Oder: „Ich organisiere einen Heizlüfter."</p>

<p><strong>Kompensieren</strong> – Eine Flasche Wein. Ein Restaurant-Gutschein. Teilrückerstattung.</p>

<p><strong>Nachfassen</strong> – Zwei Stunden später: „Ist jetzt alles in Ordnung?"</p>

<p><em>Gäste erinnern sich nicht daran, dass etwas schiefging – sondern daran, wie damit umgegangen wurde.</em></p>

<h2 id="die-grenzen">Die Grenzen der Automatisierung</h2>

<p>Buchungsbestätigungen, Check-in-Anleitungen, Check-out-Erinnerungen – all das kann automatisiert werden.</p>

<p>Spezifische Fragen erfordern spezifische Antworten.</p>

<p>Probleme erfordern menschliche Reaktion.</p>

<p>Beschwerden erfordern Empathie.</p>

<p><em>Automatisierung für Routine. Persönliche Kommunikation für alles andere.</em></p>

<p>Das erklärt, warum professionell gemanagte Objekte konsistent bessere Bewertungen erhalten.</p>

<p>Nicht weil sie schöner sind.</p>

<p>Weil die Kommunikation stimmt.</p>
    `,
    author: {
      name: 'Mario Brenner',
      role: 'Mitgründer & Geschäftsführer',
      avatar: '/Mario.png',
    },
    publishedAt: '2024-12-20',
    category: 'Gästebetreuung',
    tags: ['Kommunikation', 'Bewertungen', 'Gästeservice', 'Qualität'],
    featuredImage: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80',
    featuredImageAlt: 'Gastgeber begrüßt Gäste herzlich',
    readingTime: 7,
    tableOfContents: [
      { id: 'das-problem', text: 'Der Denkfehler', level: 2 },
      { id: 'der-perspektivwechsel', text: 'Der Wechsel', level: 2 },
      { id: 'die-timeline', text: 'Die kritischen Momente', level: 2 },
      { id: 'schwierige-situationen', text: 'Wenn etwas schiefgeht', level: 2 },
      { id: 'reaktion-schema', text: 'Das bessere Schema', level: 3 },
      { id: 'die-grenzen', text: 'Die Grenzen der Automatisierung', level: 2 },
    ],
  },
  {
    slug: 'ferienwohnung-einrichten-framework',
    title: 'Ferienwohnung einrichten: Ein Framework für Entscheidungen',
    description: 'Einrichtungsentscheidungen für Ferienwohnungen folgen anderen Regeln als für Privatwohnungen. Ein systematischer Ansatz für bessere Ergebnisse.',
    excerpt: 'Die meisten Einrichtungsfehler entstehen, weil Vermieter wie Bewohner denken. Eine Ferienwohnung hat andere Anforderungen.',
    content: `
<p>Geschmack ist subjektiv. Die Faktoren, die zu Buchungen und guten Bewertungen führen, sind messbar.</p>

<h2 id="das-framework">Der Drei-Filter-Test</h2>

<p>Jede Einrichtungsentscheidung durchläuft drei Fragen:</p>

<p><strong>Fotogenität</strong> – Wie sieht es auf Bildern aus?</p>

<p><strong>Funktionalität</strong> – Wie gut funktioniert es bei wechselnden Gästen?</p>

<p><strong>Wartbarkeit</strong> – Wie aufwändig ist Reinigung, Reparatur, Ersatz?</p>

<p>Ein Beispiel: Weißes Ledersofa.</p>

<p>Fotogen? Ja. Funktional? Bedingt – empfindlich. Wartbar? Nein – jeder Fleck ein Drama.</p>

<p>Bessere Wahl: Graues Stoffsofa mit abnehmbaren, waschbaren Bezügen.</p>

<p><em>Das Framework zwingt zu rationalem Denken, wo Intuition in die Irre führt.</em></p>

<h2 id="prioritaeten">Die Hierarchie</h2>

<p>Nicht alles ist gleich wichtig.</p>

<h3 id="deal-breaker">Deal-Breaker</h3>

<p><strong>Matratzenqualität</strong> – Wer schlecht schläft, hinterlässt schlechte Bewertungen. 400 bis 800 € pro Bett. Nicht verhandelbar.</p>

<p><strong>Nassbereiche</strong> – Bad und Küche werden kritisch inspiziert. Alte Fugen, verkalkte Armaturen: sofortiger Vertrauensverlust.</p>

<p><strong>WLAN</strong> – Mindestens 50 Mbit/s. Speedtest-Ergebnis im Inserat angeben.</p>

<h3 id="differenzierung">Differenzierung</h3>

<p><strong>Bettwäsche</strong> – Weiß, Baumwolle, mindestens 200 Thread Count</p>

<p><strong>Kaffeemaschine</strong> – Kapsel oder Vollautomat. Filterkaffee wirkt veraltet.</p>

<p><strong>Verdunklung</strong> – Blickdichte Vorhänge oder Rollläden im Schlafzimmer</p>

<h3 id="details">Details</h3>

<p>Dekoration, Pflanzen, Kunstwerke. Wichtig für Fotos, weniger für Bewertungen. Hier kann gespart werden.</p>

<h2 id="farbkonzept">Farbe als Strategie</h2>

<p>Neutralität ist keine Feigheit.</p>

<p>Weiße Wände, beige oder graue Böden, natürliche Holztöne. Diese Basis funktioniert für 90% der Gäste.</p>

<p>Sie lenkt nicht ab. Sie polarisiert nicht. Sie altert nicht.</p>

<p><em>Akzente setzen, aber gezielt.</em></p>

<p>Textilien sind der Ort für Farbe. Kissen, Decken, Teppiche. Sie können ausgetauscht werden, wenn Trends sich ändern.</p>

<p>Wandfarben nicht.</p>

<p><strong>Funktioniert:</strong> Grüntöne, Blau, Terrakotta</p>

<p><strong>Riskant:</strong> Rot, Schwarz, knallige Töne</p>

<h2 id="die-fotofrage">Bevor etwas gekauft wird</h2>

<p>Räume wirken auf Bildern kleiner, dunkler, voller.</p>

<p>Was im Laden beeindruckt, kann in der Wohnung erdrückend wirken.</p>

<p><strong>Weniger ist mehr</strong> – Jedes Objekt braucht Raum zum Atmen</p>

<p><strong>Symmetrie beruhigt</strong> – Zwei Nachttische, zwei Lampen, symmetrische Kissen</p>

<p><strong>Sichtlinien freihalten</strong> – Der Blick soll durch den Raum wandern können</p>

<p><strong>Tageslicht nutzen</strong> – Wo steht die Sonne? Bei der Einrichtung bedenken.</p>

<h2 id="wartung">Materialwahl für Dauerbetrieb</h2>

<p>Eine Ferienwohnung erlebt in einem Jahr, was eine Privatwohnung in zehn Jahren erlebt.</p>

<p><strong>Böden</strong> – Fliesen oder hochwertiges Vinyl. Kein Echtholzparkett, kein billiges Laminat.</p>

<p><strong>Oberflächen</strong> – Quarz oder Granit. Kein Holz – nimmt Gerüche auf.</p>

<p><strong>Textilien</strong> – Alles muss bei 60°C waschbar sein.</p>

<p><strong>Geräte</strong> – Markenqualität bei Waschmaschine, Spülmaschine, Kaffeemaschine. Der Wasserkocher darf billig sein – er ist leicht ersetzbar.</p>

<p><em>Wer so denkt, trifft bessere Entscheidungen.</em></p>
    `,
    author: {
      name: 'Julian Ograjensek',
      role: 'Mitgründer & Geschäftsführer',
      avatar: '/Julian.png',
    },
    publishedAt: '2024-12-15',
    category: 'Einrichtung',
    tags: ['Einrichtung', 'Design', 'Möbel', 'Ausstattung'],
    featuredImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    featuredImageAlt: 'Stilvoll eingerichtetes Wohnzimmer einer Ferienwohnung',
    readingTime: 7,
    tableOfContents: [
      { id: 'das-framework', text: 'Der Drei-Filter-Test', level: 2 },
      { id: 'prioritaeten', text: 'Die Hierarchie', level: 2 },
      { id: 'deal-breaker', text: 'Deal-Breaker', level: 3 },
      { id: 'differenzierung', text: 'Differenzierung', level: 3 },
      { id: 'details', text: 'Details', level: 3 },
      { id: 'farbkonzept', text: 'Farbe als Strategie', level: 2 },
      { id: 'die-fotofrage', text: 'Bevor etwas gekauft wird', level: 2 },
      { id: 'wartung', text: 'Materialwahl für Dauerbetrieb', level: 2 },
    ],
  },
];

// Export helper to get all posts sorted by date
export const getAllPosts = () => {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

// Export helper to get a single post by slug
export const getPostBySlug = (slug: string) => {
  return blogPosts.find((post) => post.slug === slug);
};

// Export helper to get latest posts
export const getLatestPosts = (count: number = 3) => {
  return getAllPosts().slice(0, count);
};
