'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Calendar } from 'lucide-react';

export function AnalyseDankeClient() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ event: 'lead_form_submit' });
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

      <main className="flex-1 px-4 py-8 sm:py-12">
        <div className="w-full max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center" style={{ animation: 'fadeIn 0.4s ease-out' }}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <CheckCircle2 className="text-hostgains flex-shrink-0" size={28} />
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                Vielen Dank!
              </h1>
            </div>
            <p className="text-gray-500 text-sm sm:text-base">
              Wir senden dir deine persönliche Einschätzung innerhalb von 24 Stunden per E-Mail — mit konkreten Empfehlungen für mehr Auslastung und Umsatz.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mt-4">
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-3 rounded-full bg-hostgains/10 border border-hostgains/20">
                <Calendar className="w-3 h-3 text-hostgains" aria-hidden="true" />
                <span className="text-[11px] text-hostgains font-semibold uppercase tracking-wide">Kostenloses Strategiegespräch</span>
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 leading-snug">
                Dein Potenzial persönlich besprechen?
              </h2>
              <p className="text-gray-500 text-sm">
                In 20 Minuten analysieren wir gemeinsam deine Situation und zeigen dir konkrete nächste Schritte — unverbindlich, per Video-Call.
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
