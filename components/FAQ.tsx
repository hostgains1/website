'use client';
import React, { useState } from 'react';
import { Section } from './Section';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-sand-dark last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 sm:py-6 flex items-start sm:items-center justify-between gap-4 text-left min-h-[44px]"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-sand flex items-center justify-center"
        >
          <ChevronDown size={16} className="text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, filter: "blur(4px)" }}
            animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
            exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 sm:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed pr-10">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // LLM-optimierte FAQs mit zitierfähigen Antworten
  const faqs = [
    {
      question: "Was ist Kurzzeitvermietung-Management und wie funktioniert es?",
      answer: "Kurzzeitvermietung-Management bezeichnet die professionelle Verwaltung von Ferienunterkünften auf Buchungsplattformen wie Airbnb und Booking.com. Der Service umfasst typischerweise: Erstellung und Optimierung der Inserate, dynamische Preisgestaltung, Gästekommunikation, Check-in/Check-out-Koordination und Reinigungsmanagement. Eigentümer erzielen so passive Einnahmen, ohne sich selbst um die tägliche Vermietung kümmern zu müssen."
    },
    {
      question: "Was kostet der Kurzzeitvermietung-Service von hostgains?",
      answer: "hostgains arbeitet zu 100% performance-basiert. Das bedeutet: Es gibt keine Fixkosten oder Einrichtungsgebühren. Eigentümer zahlen nur eine transparente Umsatzbeteiligung, wenn tatsächlich Buchungen generiert werden. Die genaue Beteiligung wird individuell festgelegt und hängt von Faktoren wie Lage und Ausstattung ab. Dieses Modell eliminiert das finanzielle Risiko für Eigentümer vollständig."
    },
    {
      question: "Was ist dynamisches Pricing und wie steigert es den Umsatz?",
      answer: "Dynamisches Pricing ist eine automatisierte Preisstrategie, die Übernachtungspreise täglich an die aktuelle Marktsituation anpasst. Faktoren wie Wochentag, Saison, lokale Events (z.B. GTI-Treffen am Wörthersee), Wetterlage und Wettbewerbspreise werden berücksichtigt. Im Vergleich zu statischen Preisen erzielen Ferienwohnungen mit dynamischem Pricing durchschnittlich 20-30% mehr Jahresumsatz."
    },
    {
      question: "Kann ich meine Ferienwohnung selbst noch nutzen?",
      answer: "Ja. Bei professionellem Kurzzeitvermietung-Management können Eigentümer jederzeit Zeiträume für die eigene Nutzung blockieren. Das System wird entsprechend angepasst und die Daten werden in allen Buchungsportalen gesperrt. Viele Eigentümer nutzen ihre Ferienwohnung in der Nebensaison selbst und vermieten sie in der Hauptsaison professionell."
    },
    {
      question: "Wie funktioniert ein Channel Manager bei der Kurzzeitvermietung?",
      answer: "Ein Channel Manager synchronisiert automatisch Verfügbarkeit, Preise und Buchungen über mehrere Buchungsplattformen hinweg. Wenn eine Buchung auf Airbnb eingeht, werden die entsprechenden Daten sofort auf Booking.com, VRBO und anderen Portalen aktualisiert. Dies verhindert Doppelbuchungen und maximiert die Sichtbarkeit der Ferienunterkunft auf allen relevanten Kanälen."
    },
    {
      question: "Wer kümmert sich bei hostgains um Reinigung und Gästebetreuung?",
      answer: "hostgains koordiniert professionelle lokale Reinigungsteams in Klagenfurt und der Wörthersee-Region. Nach jedem Gast erfolgt eine gründliche Reinigung nach Hotel-Standard mit Qualitätskontrolle. Die 24/7 Gästekommunikation erfolgt in Deutsch und Englisch durch das hostgains-Team. Eigentümer müssen sich um keinen operativen Aspekt der Vermietung kümmern."
    },
    {
      question: "Wie schnell kann eine Ferienwohnung bei hostgains live gehen?",
      answer: "Nach dem Erstgespräch und der Potenzialanalyse können Ferienwohnungen innerhalb von 1-2 Wochen auf allen relevanten Plattformen live gehen. In dieser Zeit werden professionelle Fotos erstellt, Inserate optimiert und alle technischen Systeme (Channel Manager, Pricing-Tool, Gästekommunikation) eingerichtet. Bei bereits bestehenden Inseraten ist der Übergang oft noch schneller möglich."
    },
    {
      question: "Welche Regionen betreut hostgains in Österreich?",
      answer: "hostgains ist spezialisiert auf Kärnten, insbesondere die Wörthersee-Region. Betreut werden Ferienwohnungen in Klagenfurt am Wörthersee, Velden, Pörtschach, Maria Wörth, Krumpendorf und umliegenden Gemeinden. Das lokale Team kennt den regionalen Tourismusmarkt, saisonale Schwankungen und lokale Events, die die Nachfrage beeinflussen."
    }
  ];

  return (
    <Section
      id="faq"
      className="bg-sand-light py-12 sm:py-20 md:py-32"
      aria-labelledby="faq-heading"
    >
      <article className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <header className="text-center mb-6 sm:mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/70 backdrop-blur-md border border-white/80 text-hostgains px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4 shadow-[0_2px_16px_rgba(49,74,67,0.06),inset_0_1px_0_rgba(255,255,255,0.95)]"
          >
            <HelpCircle size={14} className="sm:w-4 sm:h-4" aria-hidden="true" />
            <span className="text-[10px] sm:text-xs md:text-sm font-semibold">FAQ</span>
          </motion.div>
          <motion.h2
            id="faq-heading"
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-display text-[1.5rem] sm:text-2xl md:text-4xl lg:text-5xl font-bold text-hostgains-dark leading-tight"
          >
            Häufige Fragen zur <span className="text-hostgains-light">Vermietung</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Antworten auf die wichtigsten Fragen rund um Kurzzeitvermietung und Airbnb Management in Kärnten.
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 border border-sand-dark"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-8 text-gray-500 text-sm sm:text-base"
        >
          Noch Fragen? {' '}
          <a
            href="https://wa.me/4367762180829?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zur%20Ferienvermietung."
            target="_blank"
            rel="noopener noreferrer"
            className="text-hostgains font-semibold hover:underline"
          >
            Schreib uns auf WhatsApp
          </a>
        </motion.p>
      </article>
    </Section>
  );
};
