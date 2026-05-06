'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface UnterseitenFAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
}

const FAQItemComponent: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-sand-dark last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-4 sm:py-5 flex items-start sm:items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base font-semibold text-gray-900 pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-sand flex items-center justify-center"
        >
          <ChevronDown size={14} className="text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 sm:pb-5 text-gray-600 text-sm leading-relaxed pr-10">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const UnterseitenFAQ: React.FC<UnterseitenFAQProps> = ({
  title = "Häufig gestellte Fragen",
  subtitle,
  faqs,
  className = ""
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`py-12 sm:py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1.5 bg-hostgains/5 text-hostgains px-3 py-1.5 rounded-full mb-3">
              <HelpCircle size={14} />
              <span className="text-xs font-semibold">FAQ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-600 text-sm sm:text-base">
                {subtitle}
              </p>
            )}
          </div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-4 sm:p-6 border border-sand-dark"
          >
            {faqs.map((faq, i) => (
              <FAQItemComponent
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>

          {/* WhatsApp CTA */}
          <p className="text-center mt-6 text-gray-500 text-sm">
            Noch Fragen?{' '}
            <a
              href="https://wa.me/4367762180829?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zur%20Ferienvermietung."
              target="_blank"
              rel="noopener noreferrer"
              className="text-hostgains font-semibold hover:underline"
            >
              Schreib uns auf WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

// Vordefinierte FAQ-Sets für verschiedene Seiten
export const leistungenFAQs: FAQItem[] = [
  {
    question: "Was genau macht hostgains für mich?",
    answer: "hostgains übernimmt die komplette Vermietung deiner Ferienwohnung: Wir erstellen professionelle Inserate, optimieren täglich die Preise, beantworten Gästeanfragen rund um die Uhr, koordinieren Reinigung und Check-in/Check-out. Du musst dich um nichts kümmern und erhältst monatliche Auszahlungen."
  },
  {
    question: "Wie funktioniert die Abrechnung?",
    answer: "Wir arbeiten rein performance-basiert. Das bedeutet: Keine Fixkosten, keine Einrichtungsgebühr. Du zahlst nur eine prozentuale Beteiligung an den tatsächlichen Buchungseinnahmen. Die genaue Beteiligung wird individuell vereinbart."
  },
  {
    question: "Wie schnell bin ich online?",
    answer: "Nach dem Erstgespräch und der Potenzialanalyse kann deine Ferienwohnung innerhalb von 1-2 Wochen auf allen Plattformen live sein. In dieser Zeit erstellen wir professionelle Fotos und richten alle Systeme ein."
  },
  {
    question: "Kann ich meine Wohnung selbst nutzen?",
    answer: "Ja, jederzeit. Du kannst Zeiträume für die eigene Nutzung blockieren. Das System wird entsprechend angepasst und die Daten in allen Portalen gesperrt."
  },
  {
    question: "Wie wird die Qualität der Reinigung sichergestellt?",
    answer: "Wir arbeiten mit professionellen lokalen Reinigungsteams nach Hotel-Standard. Nach jeder Reinigung erfolgt eine Qualitätskontrolle. Bei Problemen sind wir sofort zur Stelle."
  }
];

export const ferienvermietungKaerntenFAQs: FAQItem[] = [
  {
    question: "Brauche ich eine Genehmigung für Ferienvermietung in Kärnten?",
    answer: "Eine spezielle Bewilligung für private Ferienvermietung gibt es in Kärnten meist nicht – aber es gibt Meldepflichten: Ortstaxe bei der Gemeinde anmelden, Gäste melderechtlich erfassen und Einnahmen beim Finanzamt erklären. Wer in einer Eigentumswohnung vermietet, sollte außerdem prüfen, ob die Hausordnung oder der Wohnungseigentumsvertrag Kurzzeitvermietung erlaubt."
  },
  {
    question: "Wie viele Nächte pro Jahr kann ich in Kärnten realistisch vermieten?",
    answer: "Das hängt stark vom Standort ab. Eine gut ausgestattete Wohnung am Wörthersee erzielt im Sommer 85–95% Auslastung, im Frühling und Herbst 40–60%, im Winter deutlich weniger. Im Jahresschnitt sind 100–160 vermietete Nächte realistisch – mehr mit aktivem Management und Mehrkanalansprache."
  },
  {
    question: "Was ist besser: Ferienvermietung oder Langzeitmiete?",
    answer: "Ferienvermietung erzielt in der Hochsaison deutlich höhere Nachtpreise, erfordert aber mehr Aufwand und ist stärker saisonabhängig. Langzeitmiete ist stabiler und passiver. In der Wörthersee-Region übersteigen die Einnahmen aus Ferienvermietung bei professionellem Management die Langzeitmietrendite häufig um 40–80% – aber nur wenn die Auslastung stimmt."
  },
  {
    question: "Eignet sich meine Wohnung für Ferienvermietung?",
    answer: "Entscheidend sind: Lage (Seenähe, Ortszentrum, Erreichbarkeit), Ausstattung (vollständige Küche, stabiles WLAN, gutes Bett), Zustand und Fotos. Eine Wohnung muss kein Luxusobjekt sein – aber sie muss in Fotos und Realität übereinstimmen. Gäste bestrafen Enttäuschungen sofort mit schlechten Bewertungen."
  },
  {
    question: "Kann ich als Eigentümer selbst entscheiden, wann ich meine Wohnung vermiete?",
    answer: "Ja. Du kannst jederzeit Zeiträume für die eigene Nutzung oder Renovierungen sperren. Das gilt auch bei professionellem Management – du behältst die Kontrolle über deinen Kalender und die Vermietungszeiträume."
  },
];

export const airbnbManagementKaerntenFAQs: FAQItem[] = [
  {
    question: "Warum ist Kärnten ein guter Standort für Kurzzeitvermietung?",
    answer: "Kärnten, insbesondere die Wörthersee-Region, ist eine der beliebtesten Tourismusdestinationen Österreichs. Die Kombination aus Seen, Bergen und mildem Klima sorgt für ganzjährige Nachfrage. Lokale Events wie das GTI-Treffen oder Seefeste bringen zusätzliche Buchungsspitzen."
  },
  {
    question: "Kennt ihr den lokalen Markt in Kärnten?",
    answer: "Ja, unser Team ist in Kärnten ansässig und kennt den regionalen Tourismusmarkt genau. Wir wissen, wann Events stattfinden, wie sich die Saisons entwickeln und welche Preise der Markt verträgt. Dieses lokale Wissen fließt in unsere Preis- und Marketingstrategie ein."
  },
  {
    question: "Welche Orte in Kärnten betreut ihr?",
    answer: "Wir betreuen Ferienwohnungen in der gesamten Wörthersee-Region: Klagenfurt, Velden, Pörtschach, Maria Wörth, Krumpendorf und umliegende Gemeinden. Auch andere Standorte in Kärnten sind nach Absprache möglich."
  },
  {
    question: "Wie funktioniert das mit der Kurtaxe in Kärnten?",
    answer: "Die Ortstaxe in Kärnten wird automatisch an die Gäste weitergegeben und ordnungsgemäß an die Gemeinde abgeführt. Wir kümmern uns um die komplette Abwicklung und Dokumentation."
  }
];
