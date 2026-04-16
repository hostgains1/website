'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { badgeFadeIn, headingFadeIn } from '@/lib/animations';

export const ContactSection: React.FC = () => {
  return (
    <Section
      className="bg-white py-16 sm:py-24 md:py-32"
      aria-labelledby="contact-section-heading"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-10 sm:mb-14">
            <motion.div
              {...badgeFadeIn}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 rounded-full bg-hostgains/10 backdrop-blur-sm border border-hostgains/20"
            >
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-hostgains" aria-hidden="true" />
              <span className="text-[10px] sm:text-xs md:text-sm text-hostgains font-medium">Wir freuen uns auf dich</span>
            </motion.div>
            <motion.h2
              {...headingFadeIn}
              id="contact-section-heading"
              className="font-display text-[2rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight"
            >
              Lass uns <span className="text-hostgains-light">reden</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
              className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto"
            >
              Ob du nur eine kurze Frage hast oder wissen willst, was mit deiner Wohnung möglich ist — melde dich einfach. Wir beißen nicht.
            </motion.p>
          </header>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.15 }}
            className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14"
          >
            <a
              href="mailto:info@hostgains.at"
              className="bg-sand-light rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-hostgains/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-hostgains/20 transition-colors">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-hostgains" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">E-Mail</h3>
              <p className="text-hostgains font-medium text-sm sm:text-base">info@hostgains.at</p>
            </a>

            <a
              href="tel:+4367762180829"
              className="bg-sand-light rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-hostgains/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-hostgains/20 transition-colors">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-hostgains" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Telefon</h3>
              <p className="text-hostgains font-medium text-sm sm:text-base">+43 677 62180829</p>
            </a>

            <a
              href="https://wa.me/4367762180829"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sand-light rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-hostgains/10 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-hostgains/20 transition-colors">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-hostgains" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">WhatsApp</h3>
              <p className="text-hostgains font-medium text-sm sm:text-base">Direkt schreiben</p>
            </a>
          </motion.div>

          {/* CTA to Analyse */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.2 }}
            className="bg-hostgains rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 text-center text-white"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 font-display">
              Potenzialanalyse für deine Ferienwohnung
            </h3>
            <p className="text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
              Du möchtest wissen, was mit deiner Ferienwohnung möglich ist? Nutze unsere kostenlose Potenzialanalyse — unverbindlich und ohne Verpflichtung.
            </p>
            <Link
              href="/analyse"
              className="inline-flex items-center gap-2 bg-sand hover:bg-white text-hostgains font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg text-sm sm:text-base"
            >
              Kostenlose Analyse anfordern
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
