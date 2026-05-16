'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, Check, TrendingUp, Clock, Euro, ChevronDown } from 'lucide-react';

type QuizStep = 'idle' | 'q1' | 'q2' | 'calendly';

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

const STATS = [
  { icon: TrendingUp, value: '+28 %', label: 'mehr Umsatz im Schnitt' },
  { icon: Euro, value: '0 €', label: 'Fixkosten – nur Erfolgsanteil' },
  { icon: Clock, value: '24/7', label: 'Gästebetreuung durch uns' },
];

const STEPS = [
  {
    num: '01',
    title: 'Kostenloses Erstgespräch',
    text: 'Wir analysieren gemeinsam das Potenzial deiner Wohnung – unverbindlich und in 20 Minuten.',
  },
  {
    num: '02',
    title: 'Wir übernehmen alles',
    text: 'Inserate, dynamische Preise, Gästekommunikation, Reinigung – du musst dich um nichts kümmern.',
  },
  {
    num: '03',
    title: 'Du verdienst mehr',
    text: 'Transparente Monatsabrechnung. Keine Fixkosten. Du zahlst nur, wenn wir Buchungen generieren.',
  },
];

export function ErstgespraechClient() {
  const [quizStep, setQuizStep] = useState<QuizStep>('idle');
  const [animKey, setAnimKey] = useState(0);
  const quizRef = useRef<HTMLDivElement>(null);

  const scrollToQuiz = () => {
    quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => setQuizStep('q1'), 400);
  };

  const goTo = (next: QuizStep) => {
    setAnimKey(k => k + 1);
    setQuizStep(next);
  };

  // Load Calendly script only when needed
  useEffect(() => {
    if (quizStep !== 'calendly') return;
    if (document.getElementById('calendly-widget-script')) return;
    const script = document.createElement('script');
    script.id = 'calendly-widget-script';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
  }, [quizStep]);

  // Scroll to quiz top when step changes
  useEffect(() => {
    if (quizStep !== 'idle') {
      quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [quizStep]);

  // postMessage listener: Calendly booking → redirect to danke page
  const handleCalendlyMessage = useCallback((e: MessageEvent) => {
    if (e.data?.event === 'calendly.event_scheduled') {
      window.location.href = '/erstgespräch-danke';
    }
  }, []);

  useEffect(() => {
    window.addEventListener('message', handleCalendlyMessage);
    return () => window.removeEventListener('message', handleCalendlyMessage);
  }, [handleCalendlyMessage]);

  const progress = quizStep === 'q1' ? 33 : quizStep === 'q2' ? 66 : quizStep === 'calendly' ? 100 : 0;

  return (
    <div className="min-h-screen bg-sand-light flex flex-col font-sans">

      {/* ── HEADER ── */}
      <header className="bg-white border-b border-sand-dark sticky top-0 z-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link href="/" aria-label="hostgains Startseite">
            <Image src="/logo.png" alt="hostgains" width={100} height={40} className="h-8 w-auto" priority />
          </Link>
          <span className="hidden sm:block text-xs font-medium text-hostgains bg-hostgains/10 rounded-full px-3 py-1.5">
            Kostenlos &amp; unverbindlich
          </span>
          <button
            onClick={scrollToQuiz}
            className="sm:hidden text-xs font-semibold bg-hostgains text-white rounded-full px-4 py-2 hover:bg-hostgains-dark transition-colors"
          >
            Termin buchen
          </button>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="bg-hostgains relative overflow-hidden">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
          aria-hidden="true"
        />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 pt-14 pb-20 sm:pt-20 sm:pb-28 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-sand tracking-wide uppercase">Für Ferienwohnungsbesitzer in Kärnten</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Deine Ferienwohnung verdient{' '}
            <span className="text-sand">mehr.</span>
            <br className="hidden sm:block" />
            {' '}Ohne dass du mehr tun musst.
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            hostgains übernimmt alles – Inserate, Gäste, Preise, Reinigung.
            Du lehnst dich zurück und bekommst monatlich deine Abrechnung.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Keine Fixkosten', '24/7 Gästeservice', 'Lokales Team Kärnten'].map(t => (
              <div key={t} className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1.5">
                <Check size={12} className="text-sand flex-shrink-0" />
                <span className="text-xs font-medium text-white/90">{t}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={scrollToQuiz}
            className="inline-flex items-center justify-center gap-2.5 bg-sand hover:bg-sand-light text-hostgains-dark font-bold text-base sm:text-lg py-4 px-8 rounded-xl shadow-lg shadow-black/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Kostenloses Erstgespräch buchen
            <ArrowRight size={18} />
          </button>

          <p className="text-white/50 text-xs mt-4">20 Minuten · unverbindlich · kostenlos</p>

          {/* Scroll cue */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <ChevronDown size={22} className="text-white/30 animate-bounce" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white border-b border-sand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-3 gap-4 sm:gap-8">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={value} className="text-center">
              <Icon size={22} className="text-hostgains mx-auto mb-2" aria-hidden="true" />
              <p className="text-2xl sm:text-3xl font-bold text-hostgains-dark leading-none">{value}</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-sand-light py-14 sm:py-20 border-b border-sand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-hostgains uppercase tracking-widest mb-2">So einfach geht's</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">In 3 Schritten zu mehr Umsatz</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {STEPS.map(step => (
              <div key={step.num} className="relative">
                {/* Step connector line (desktop only) */}
                <div className="flex sm:flex-col items-start gap-4 sm:gap-3">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-hostgains flex items-center justify-center text-white font-bold text-sm">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-base">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="bg-white py-14 sm:py-20 border-b border-sand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold text-hostgains uppercase tracking-widest mb-2">Echte Ergebnisse</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Was unsere Kunden erzielen</h2>
          </div>

          {/* Case study card */}
          <div className="bg-sand-light rounded-2xl p-6 sm:p-8 max-w-xl mx-auto">
            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-hostgains/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp size={18} className="text-hostgains" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Seeblick Apartment am Wörthersee</p>
                <p className="text-sm text-gray-500">Velden · 2-Zimmer, 65 m²</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-gray-100 rounded-xl p-4 text-center">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Vorher</p>
                <p className="text-2xl font-bold text-gray-500">1.850 €</p>
                <p className="text-xs text-gray-400 mt-1">pro Monat</p>
                <p className="text-sm font-semibold text-gray-400 mt-2">63 % Auslastung</p>
              </div>
              <div className="bg-hostgains/5 border border-hostgains/20 rounded-xl p-4 text-center">
                <p className="text-[10px] font-semibold text-hostgains uppercase tracking-wider mb-2">Mit hostgains</p>
                <p className="text-2xl font-bold text-hostgains">2.400 €</p>
                <p className="text-xs text-gray-400 mt-1">pro Monat</p>
                <p className="text-sm font-semibold text-hostgains mt-2">82 % Auslastung</p>
              </div>
            </div>

            <div className="text-center bg-hostgains rounded-xl py-3 px-4">
              <p className="text-white font-bold text-sm">
                +550 € mehr pro Monat · +19 % mehr Auslastung
              </p>
            </div>
          </div>

          {/* Short testimonial */}
          <blockquote className="mt-8 text-center max-w-md mx-auto">
            <p className="text-gray-600 text-sm sm:text-base italic leading-relaxed">
              „Ich hätte nicht gedacht, dass so viel mehr möglich ist. hostgains hat alles übernommen – ich muss mich um nichts kümmern."
            </p>
            <footer className="mt-3 text-xs text-gray-400 font-medium">— Sandra M., Velden am Wörthersee</footer>
          </blockquote>
        </div>
      </section>

      {/* ── QUIZ / BOOKING SECTION ── */}
      <section
        ref={quizRef}
        className="bg-sand-light py-14 sm:py-20"
        id="quiz"
        style={{ scrollMarginTop: '64px' }}
      >
        <div className="max-w-xl mx-auto px-4 sm:px-6">

          {/* Section header */}
          {quizStep === 'idle' && (
            <div className="text-center mb-10" style={{ animation: 'fadeIn 0.3s ease-out' }}>
              <p className="text-xs font-semibold text-hostgains uppercase tracking-widest mb-2">Jetzt loslegen</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                Buche dein kostenloses Erstgespräch
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mb-8">
                2 kurze Fragen, dann wählst du deinen Wunschtermin.
              </p>
              <button
                onClick={() => goTo('q1')}
                className="inline-flex items-center justify-center gap-2.5 bg-hostgains hover:bg-hostgains-dark text-white font-bold text-base sm:text-lg py-4 px-8 rounded-xl shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Jetzt starten
                <ArrowRight size={18} />
              </button>
              <p className="text-gray-400 text-xs mt-3">20 Minuten · unverbindlich · kostenlos</p>
            </div>
          )}

          {/* Progress bar (quiz active) */}
          {quizStep !== 'idle' && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-400">
                  {quizStep === 'q1' && 'Frage 1 von 2'}
                  {quizStep === 'q2' && 'Frage 2 von 2'}
                  {quizStep === 'calendly' && 'Wähle deinen Termin'}
                </span>
                <span className="text-xs font-bold text-gray-700">{progress}%</span>
              </div>
              <div className="h-1.5 bg-sand-dark rounded-full overflow-hidden">
                <div
                  className="h-full bg-hostgains rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Q1 */}
          {quizStep === 'q1' && (
            <div key={animKey} style={{ animation: 'fadeIn 0.25s ease-out' }}>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 leading-snug">
                Vermietest du deine Wohnung bereits auf Airbnb oder Booking.com?
              </h3>
              <div className="space-y-3">
                {Q1_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => goTo('q2')}
                    className="w-full flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-sand-dark hover:border-hostgains hover:bg-hostgains/5 active:scale-[0.98] transition-all text-left group min-h-[72px]"
                  >
                    <span className="text-2xl flex-shrink-0">{opt.emoji}</span>
                    <span className="font-semibold text-gray-900 group-hover:text-hostgains text-base transition-colors leading-snug">
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Q2 */}
          {quizStep === 'q2' && (
            <div key={animKey} style={{ animation: 'fadeIn 0.25s ease-out' }}>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 leading-snug">
                Was ist dir bei der Vermietung am wichtigsten?
              </h3>
              <div className="space-y-3">
                {Q2_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => goTo('calendly')}
                    className="w-full flex items-center gap-4 p-5 bg-white rounded-2xl border-2 border-sand-dark hover:border-hostgains hover:bg-hostgains/5 active:scale-[0.98] transition-all text-left group min-h-[72px]"
                  >
                    <span className="text-2xl flex-shrink-0">{opt.emoji}</span>
                    <span className="font-semibold text-gray-900 group-hover:text-hostgains text-base transition-colors leading-snug">
                      {opt.label}
                    </span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => goTo('q1')}
                className="mt-5 flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ArrowLeft size={14} /> Zurück
              </button>
            </div>
          )}

          {/* Calendly */}
          {quizStep === 'calendly' && (
            <div key={animKey} style={{ animation: 'fadeIn 0.3s ease-out' }}>
              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-hostgains/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl" role="img" aria-label="Kalender">📅</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Wähle deinen Wunschtermin
                </h3>
                <p className="text-gray-500 text-sm">Kostenlos · 20 Minuten · unverbindlich</p>
              </div>
              <div
                className="calendly-inline-widget rounded-2xl overflow-hidden shadow-xl bg-white"
                data-url="https://calendly.com/hostgains/potentialanalyse?hide_event_type_details=1&hide_gdpr_banner=1"
                style={{ minWidth: '320px', height: '700px' }}
              />
              <button
                type="button"
                onClick={() => goTo('q2')}
                className="mt-4 flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ArrowLeft size={14} /> Zurück
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ── MINI FOOTER ── */}
      <footer className="py-5 text-center border-t border-sand-dark bg-white">
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
