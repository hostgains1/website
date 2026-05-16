'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

type Step = 'q1' | 'q2' | 'calendly';

const Q1_OPTIONS = [
  { value: 'ja_aktiv', emoji: '✅', label: 'Ja, aktiv auf Airbnb / Booking.com' },
  { value: 'gelegentlich', emoji: '🔄', label: 'Gelegentlich / selten' },
  { value: 'noch_nicht', emoji: '🚀', label: 'Noch nicht, plane es' },
];

const Q2_OPTIONS = [
  { value: 'mehr_einnahmen', emoji: '💶', label: 'Mehr Einnahmen erzielen' },
  { value: 'weniger_aufwand', emoji: '⏱️', label: 'Weniger Aufwand haben' },
  { value: 'beides', emoji: '🎯', label: 'Beides – Einnahmen & Entspannung' },
];

export function ErstgespraechClient() {
  const [step, setStep] = useState<Step>('q1');
  const [animKey, setAnimKey] = useState(0);

  const goTo = (next: Step) => {
    setStep(next);
    setAnimKey(k => k + 1);
  };

  // Dynamically load Calendly widget script
  useEffect(() => {
    if (step !== 'calendly') return;
    if (document.getElementById('calendly-widget-script')) return;
    const script = document.createElement('script');
    script.id = 'calendly-widget-script';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
  }, [step]);

  // Listen for Calendly booking → redirect to danke page
  const handleCalendlyMessage = useCallback((e: MessageEvent) => {
    if (e.data?.event === 'calendly.event_scheduled') {
      window.location.href = '/erstgespräch-danke';
    }
  }, []);

  useEffect(() => {
    window.addEventListener('message', handleCalendlyMessage);
    return () => window.removeEventListener('message', handleCalendlyMessage);
  }, [handleCalendlyMessage]);

  const progress = step === 'q1' ? 33 : step === 'q2' ? 66 : 100;

  return (
    <div className="min-h-screen bg-sand-light flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-sand-dark sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
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
          <span className="text-xs font-medium text-hostgains bg-hostgains/10 rounded-full px-3 py-1.5 whitespace-nowrap">
            Kostenlos &amp; unverbindlich
          </span>
        </div>
      </header>

      {/* Progress bar */}
      <div className="h-1 bg-sand-dark" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
        <div
          className="h-full bg-hostgains transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10 sm:py-14">

        {/* Step Q1 */}
        {step === 'q1' && (
          <div key={animKey} className="w-full max-w-lg" style={{ animation: 'fadeIn 0.25s ease-out' }}>
            <p className="text-xs font-semibold text-hostgains uppercase tracking-widest text-center mb-5">
              Frage 1 von 2
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 leading-snug">
              Vermietest du deine Wohnung bereits auf Airbnb oder Booking.com?
            </h1>
            <div className="space-y-3">
              {Q1_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => goTo('q2')}
                  className="w-full flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-sand-dark hover:border-hostgains hover:bg-hostgains/5 active:scale-[0.98] transition-all text-left group min-h-[72px]"
                >
                  <span className="text-2xl flex-shrink-0">{opt.emoji}</span>
                  <span className="font-semibold text-gray-900 group-hover:text-hostgains text-base sm:text-lg transition-colors leading-snug">
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step Q2 */}
        {step === 'q2' && (
          <div key={animKey} className="w-full max-w-lg" style={{ animation: 'fadeIn 0.25s ease-out' }}>
            <p className="text-xs font-semibold text-hostgains uppercase tracking-widest text-center mb-5">
              Frage 2 von 2
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8 leading-snug">
              Was ist dir bei der Vermietung am wichtigsten?
            </h1>
            <div className="space-y-3">
              {Q2_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => goTo('calendly')}
                  className="w-full flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-sand-dark hover:border-hostgains hover:bg-hostgains/5 active:scale-[0.98] transition-all text-left group min-h-[72px]"
                >
                  <span className="text-2xl flex-shrink-0">{opt.emoji}</span>
                  <span className="font-semibold text-gray-900 group-hover:text-hostgains text-base sm:text-lg transition-colors leading-snug">
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo('q1')}
              className="mt-6 flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors mx-auto"
            >
              <ArrowLeft size={14} />
              Zurück
            </button>
          </div>
        )}

        {/* Step Calendly */}
        {step === 'calendly' && (
          <div key={animKey} className="w-full max-w-2xl" style={{ animation: 'fadeIn 0.3s ease-out' }}>
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-hostgains/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" role="img" aria-label="Party">🎉</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 leading-snug">
                Wähle deinen Wunschtermin
              </h2>
              <p className="text-gray-500 text-sm sm:text-base">
                Kostenloses Gespräch · 20 Minuten · unverbindlich
              </p>
            </div>

            <div
              className="calendly-inline-widget rounded-2xl overflow-hidden shadow-xl bg-white"
              data-url="https://calendly.com/hostgains/potentialanalyse?hide_event_type_details=1&hide_gdpr_banner=1"
              style={{ minWidth: '320px', height: '700px' }}
            />

            <button
              type="button"
              onClick={() => goTo('q2')}
              className="mt-4 flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors mx-auto"
            >
              <ArrowLeft size={14} />
              Zurück
            </button>
          </div>
        )}
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
