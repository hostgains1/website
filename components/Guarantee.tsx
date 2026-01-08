import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { ShieldCheck, Percent, Clock, FileCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Guarantee: React.FC = () => {
  const guarantees = [
    {
      icon: Percent,
      title: "Keine Fixkosten",
      desc: "Du zahlst nur bei Erfolg"
    },
    {
      icon: Clock,
      title: "Monatlich kündbar",
      desc: "Nach 3 Monaten Mindestlaufzeit"
    },
    {
      icon: FileCheck,
      title: "Volle Transparenz",
      desc: "Detaillierte monatliche Abrechnung"
    }
  ];

  return (
    <Section
      className="bg-gradient-to-br from-hostgains to-hostgains-dark py-16 sm:py-20 md:py-24 text-white"
      aria-labelledby="guarantee-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-sand" />
            </div>
            <h2
              id="guarantee-heading"
              className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            >
              Unsere Performance-Garantie
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Wir verdienen nur Geld, wenn du Geld verdienst. Unser Erfolg ist direkt an deinen Umsatz gekoppelt. Keine versteckten Kosten, die dich belasten, wenn die Wohnung leer steht.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
          >
            {guarantees.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-sand/20 mb-3 sm:mb-4">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-sand" />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 sm:mt-10 text-center"
          >
            <Link
              to="/analyse"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-sand text-hostgains-dark font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-xl transition-all min-h-[48px] sm:min-h-[56px] shadow-lg text-sm sm:text-base"
            >
              Risikofrei starten <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
