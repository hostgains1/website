'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Mail, Clock, Calendar } from 'lucide-react';

const NEXT_STEPS = [
  {
    icon: Mail,
    title: 'E-Mail kommt',
    text: 'Du erhältst deine persönliche Auslastungseinschätzung innerhalb von 24 Stunden per E-Mail.',
  },
  {
    icon: Clock,
    title: 'Konkrete Empfehlungen',
    text: 'Wir analysieren deine Angaben und zeigen dir, wo du ansetzen kannst.',
  },
];

export function AnalyseDankeClient() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: 'lead_form_submit' });
    }
  }, []);

  useEffect(() => {
    if (document.getElementById('calendly-widget-script')) return;
    const s = document.createElement('script');
    s.id = 'calendly-widget-script';
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return (
    <div className="min-h-screen bg-sand-light flex flex-col">
      <header className="bg-white border-b border-sand-dark">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-3">
          <Link href="/" aria-label="hostgains Startseite">
            <Image
              src="/logo.png"
              alt="hostgains"
              width={100}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>
        </div>
      </header>

      <main className="flex-1 px-4 py-12 sm:py-16">
        <div className="w-full max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 text-center" style={{ animation: 'fadeIn 0.4s ease-out' }}>
            <div className="w-20 h-20 bg-hostgains/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-hostgains" size={40} />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-snug">
              Vielen Dank!
            </h1>
            <p className="text-gray-500 text-base sm:text-lg mb-8 leading-relaxed">
              Wir haben deine Angaben erhalten und senden dir die Einschätzung innerhalb von 24 Stunden per E-Mail.
            </p>

            <div className="text-left space-y-5 mb-8">
              {NEXT_STEPS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-hostgains/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} className="text-hostgains" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed mt-0.5">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 mt-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-4 rounded-full bg-hostgains/10 border border-hostgains/20">
                <Calendar className="w-3 h-3 text-hostgains" aria-hidden="true" />
                <span className="text-[11px] text-hostgains font-semibold uppercase tracking-wide">Bonus</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 leading-snug">
                Sichere dir gleich dein kostenloses Strategiegespräch
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                20 Minuten · unverbindlich · per Video-Call
              </p>
            </div>

            <div
              className="calendly-inline-widget rounded-2xl overflow-hidden border border-sand-dark shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
              data-url="https://calendly.com/hostgains/potentialanalyse?hide_event_type_details=1&hide_gdpr_banner=1"
              style={{ minWidth: '280px', height: '680px' }}
            />
          </div>

          <div className="text-center mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-500 text-sm hover:text-gray-700 transition-colors"
            >
              Zurück zur Startseite
            </Link>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            Fragen? Schreib uns unter{' '}
            <a href="mailto:info@hostgains.at" className="text-hostgains hover:underline">
              info@hostgains.at
            </a>
          </p>
        </div>
      </main>

      <footer className="py-4 text-center border-t border-sand-dark bg-white">
        <p className="text-xs text-gray-400">
          <Link href="/impressum" className="hover:text-gray-600 transition-colors">Impressum</Link>
          <span className="mx-2">·</span>
          <Link href="/datenschutzrichtlinien" className="hover:text-gray-600 transition-colors">Datenschutz</Link>
          <span className="mx-2">·</span>
          <span>© {new Date().getFullYear()} hostgains</span>
        </p>
      </footer>
    </div>
  );
}
