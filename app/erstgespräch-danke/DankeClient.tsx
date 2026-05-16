'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Calendar, MessageCircle, TrendingUp } from 'lucide-react';

const NEXT_STEPS = [
  {
    icon: Calendar,
    title: 'Termin bestätigt',
    text: 'Du erhältst sofort eine Bestätigungs-E-Mail mit allen Details zu deinem Termin.',
  },
  {
    icon: MessageCircle,
    title: 'Wir melden uns kurz vorher',
    text: 'Ca. 15 Minuten vor dem Gespräch schicken wir dir den Video-Link per E-Mail.',
  },
  {
    icon: TrendingUp,
    title: 'Dein persönlicher Plan',
    text: 'Im Gespräch analysieren wir gemeinsam dein Potenzial und zeigen dir konkrete nächste Schritte.',
  },
];

declare global {
  interface Window {
    fbq?: (cmd: string, event: string, params?: Record<string, unknown>) => void;
  }
}

export function DankeClient() {
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', 'Schedule');
    }
  }, []);

  return (
    <div className="min-h-screen bg-sand-light flex flex-col">
      {/* Header */}
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

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-lg">
          {/* Success card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 text-center" style={{ animation: 'fadeIn 0.4s ease-out' }}>
            {/* Checkmark */}
            <div className="w-20 h-20 bg-hostgains/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-hostgains" size={40} />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-snug">
              Termin erfolgreich gebucht!
            </h1>
            <p className="text-gray-500 text-base sm:text-lg mb-8 leading-relaxed">
              Wir freuen uns auf das Gespräch mit dir. Schau kurz in deinen Posteingang – dort findest du alle Details.
            </p>

            {/* What happens next */}
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

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-hostgains hover:bg-hostgains-dark text-white font-semibold py-3 px-6 rounded-xl transition-all text-sm w-full"
            >
              Zurück zur Startseite
            </Link>
          </div>

          {/* Trust note */}
          <p className="text-center text-xs text-gray-400 mt-4">
            Fragen? Schreib uns unter{' '}
            <a href="mailto:info@hostgains.at" className="text-hostgains hover:underline">
              info@hostgains.at
            </a>
          </p>
        </div>
      </main>

      {/* Mini footer */}
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
