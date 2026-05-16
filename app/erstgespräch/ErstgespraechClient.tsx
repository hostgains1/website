'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, Check, X } from 'lucide-react';

type QuizStep = 'idle' | 'q1' | 'q2' | 'calendly';

const Q1_OPTIONS = [
  { value: 'ja', label: 'Ja, ich vermiete bereits' },
  { value: 'gelegentlich', label: 'Gelegentlich / selten' },
  { value: 'nein', label: 'Noch nicht, plane es' },
];

const Q2_OPTIONS = [
  { value: 'einnahmen', label: 'Mehr Einnahmen' },
  { value: 'aufwand', label: 'Weniger Aufwand' },
  { value: 'beides', label: 'Beides' },
];

const FAQ_ITEMS = [
  {
    q: 'Was kostet das?',
    a: 'Keine Fixkosten, keine Einrichtungsgebühr. Wir verdienen nur eine Umsatzbeteiligung – und zwar nur dann, wenn du auch verdienst.',
  },
  {
    q: 'Muss ich selbst etwas tun?',
    a: 'Nein. Du weiht uns einmalig kurz ein, wir übernehmen den Rest. Keine Gästeanfragen, kein Check-in-Stress, keine Preisrecherche.',
  },
  {
    q: 'Ich bin schon auf Airbnb aktiv. Lohnt sich das trotzdem?',
    a: 'Umso besser. Wir optimieren dein bestehendes Inserat, passen die Preise an und können innerhalb weniger Wochen loslegen.',
  },
  {
    q: 'In welchen Regionen arbeitet ihr?',
    a: 'Wir sind auf Kärnten spezialisiert – vor allem die Wörthersee-Region: Klagenfurt, Velden, Pörtschach, Maria Wörth und Umgebung.',
  },
  {
    q: 'Worauf verpflichte ich mich?',
    a: 'Auf gar nichts. Das Erstgespräch ist kostenlos und unverbindlich. Du entscheidest danach in Ruhe.',
  },
];

export function ErstgespraechClient() {
  const [quizStep, setQuizStep] = useState<QuizStep>('idle');
  const [animKey, setAnimKey] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const quizRef = useRef<HTMLDivElement>(null);

  const scrollToQuiz = () => {
    quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      setAnimKey(k => k + 1);
      setQuizStep('q1');
    }, 500);
  };

  const goTo = (next: QuizStep) => {
    setAnimKey(k => k + 1);
    setQuizStep(next);
    if (next !== 'idle') {
      setTimeout(() => quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    }
  };

  useEffect(() => {
    if (quizStep !== 'calendly') return;
    if (document.getElementById('calendly-widget-script')) return;
    const script = document.createElement('script');
    script.id = 'calendly-widget-script';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
  }, [quizStep]);

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
    <div className="bg-white min-h-screen font-sans text-gray-900">

      {/* ── HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="flex items-center justify-between px-5 py-3 max-w-lg mx-auto">
          <Link href="/" aria-label="hostgains">
            <Image src="/logo.png" alt="hostgains" width={90} height={36} className="h-7 w-auto" priority />
          </Link>
          <button
            onClick={scrollToQuiz}
            className="text-xs font-semibold bg-hostgains text-white rounded-full px-4 py-2 hover:bg-hostgains-dark transition-colors"
          >
            Termin buchen
          </button>
        </div>
      </header>

      {/* ── ABOVE THE FOLD ── */}
      <section className="pt-14">
        {/* Video */}
        <div className="relative w-full bg-gray-900" style={{ aspectRatio: '9/16', maxHeight: '85svh' }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/hero-woerthersee.jpg"
          >
            <source src="/Fertiges%20Video%20f%C3%BCr%20Website.mp4" type="video/mp4" />
          </video>
          {/* Dark gradient at bottom for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Headline over video */}
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-8">
            <h1 className="text-3xl font-bold text-white leading-tight mb-3">
              Mehr raus aus deiner Ferienwohnung.
            </h1>
            <p className="text-white/85 text-base leading-relaxed mb-5">
              Wir übernehmen Inserate, Gäste und Preise. Du bekommst monatlich mehr auf dein Konto – ohne Fixkosten.
            </p>
            <button
              onClick={scrollToQuiz}
              className="w-full flex items-center justify-center gap-2 bg-white text-hostgains-dark font-bold text-base py-4 rounded-xl shadow-lg active:scale-[0.98] transition-transform"
            >
              Kostenloses Erstgespräch buchen
              <ArrowRight size={18} />
            </button>
            <p className="text-white/55 text-xs text-center mt-2.5">
              Kostenlos · 20 Minuten · unverbindlich
            </p>
          </div>
        </div>
      </section>

      {/* ── PROMISE ── */}
      <section className="px-5 py-10 max-w-lg mx-auto">
        <p className="text-xs font-semibold text-hostgains uppercase tracking-widest mb-4">Was sich ändert</p>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
          Unsere Kunden verdienen im Schnitt 28 % mehr – ohne einen Finger zu rühren.
        </h2>
        <div className="space-y-4">
          {[
            { stat: '+28 %', label: 'mehr Umsatz im ersten Jahr' },
            { stat: '0 €', label: 'Fixkosten – wir verdienen nur, wenn du verdienst' },
            { stat: '0 h', label: 'Aufwand für dich – wir übernehmen alles' },
          ].map(({ stat, label }) => (
            <div key={stat} className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0">
              <span className="text-2xl font-bold text-hostgains w-20 flex-shrink-0">{stat}</span>
              <span className="text-gray-600 text-sm leading-snug">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PAIN ── */}
      <section className="px-5 py-10 bg-gray-50 max-w-lg mx-auto rounded-2xl mx-4 mb-2">
        <p className="text-xs font-semibold text-hostgains uppercase tracking-widest mb-4">Kommt dir das bekannt vor?</p>
        <h2 className="text-xl font-bold text-gray-900 mb-6 leading-tight">
          Viele Eigentümer lassen jeden Monat Geld liegen – ohne es zu wissen.
        </h2>
        <ul className="space-y-3">
          {[
            'Meine Buchungsrate könnte besser sein.',
            'Ich bin mir nicht sicher ob mein Preis stimmt.',
            'Die Gästekommunikation kostet mich zu viel Zeit.',
            'Ich weiß nicht welche Plattform wirklich was bringt.',
            'Ich habe das Gefühl, andere holen mehr raus als ich.',
          ].map((pain) => (
            <li key={pain} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded border-2 border-gray-300 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 text-sm leading-relaxed">{pain}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-500 text-sm mt-6 italic">
          Wenn du bei 2 oder mehr Punkten nickst – dann ist dieses Gespräch genau das Richtige für dich.
        </p>
      </section>

      {/* ── WHO IS THIS FOR (5 W's) ── */}
      <section className="px-5 py-10 max-w-lg mx-auto">
        <p className="text-xs font-semibold text-hostgains uppercase tracking-widest mb-4">Für wen ist das?</p>
        <h2 className="text-xl font-bold text-gray-900 mb-6 leading-tight">
          hostgains ist das Richtige für dich, wenn...
        </h2>
        <ul className="space-y-3 mb-6">
          {[
            'Du eine Ferienwohnung in Kärnten besitzt oder planst.',
            'Du mehr Einnahmen willst, ohne mehr Zeit zu investieren.',
            'Du keine Lust mehr auf Gästekommunikation, Preisrecherche und Koordination hast.',
            'Du ein transparentes, risikofreies Modell suchst – keine Fixkosten.',
          ].map((point) => (
            <li key={point} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-hostgains/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={12} className="text-hostgains" />
              </div>
              <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        {/* Not for */}
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Nicht für dich, wenn</p>
          <ul className="space-y-2">
            {[
              'Du außerhalb Kärntens vermietest.',
              'Du keine Änderungen an deiner Vermietung zulassen willst.',
            ].map((point) => (
              <li key={point} className="flex items-start gap-3">
                <X size={14} className="text-gray-300 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PLAN (3 Schritte) ── */}
      <section className="px-5 py-10 bg-hostgains max-w-lg mx-auto">
        <p className="text-xs font-semibold text-sand/70 uppercase tracking-widest mb-4">So läuft es ab</p>
        <h2 className="text-xl font-bold text-white mb-8 leading-tight">
          Von Erstgespräch zu mehr Umsatz – in 3 Schritten.
        </h2>
        <div className="space-y-6">
          {[
            {
              num: '1',
              title: 'Gespräch (20 Min)',
              text: 'Wir schauen uns gemeinsam an, was in deiner Situation möglich ist. Keine Verpflichtung.',
            },
            {
              num: '2',
              title: 'Setup (2–3 Wochen)',
              text: 'Wir optimieren dein Inserat, richten Preisstrategien ein und übernehmen ab sofort die Gästebetreuung.',
            },
            {
              num: '3',
              title: 'Mehr auf deinem Konto',
              text: 'Du bekommst monatlich eine transparente Abrechnung. Mehr Einnahmen, kein Aufwand.',
            },
          ].map((step) => (
            <div key={step.num} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white font-bold text-sm">{step.num}</span>
              </div>
              <div>
                <p className="font-bold text-white mb-1">{step.title}</p>
                <p className="text-white/70 text-sm leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROOF STACK ── */}
      <section className="px-5 py-10 max-w-lg mx-auto">
        <p className="text-xs font-semibold text-hostgains uppercase tracking-widest mb-4">Wer wir sind</p>

        {/* Founders */}
        <div className="flex gap-3 mb-5">
          <div className="flex-1 rounded-2xl overflow-hidden bg-gray-100 aspect-square relative">
            <Image
              src="/Julian hohe auflösung.png"
              alt="Julian Ograjensek, Mitgründer hostgains"
              fill
              className="object-cover object-top"
              sizes="50vw"
            />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden bg-gray-100 aspect-square relative">
            <Image
              src="/Mario hohe auflösung.png"
              alt="Mario Brenner, Mitgründer hostgains"
              fill
              className="object-cover object-top"
              sizes="50vw"
            />
          </div>
        </div>
        <p className="text-xs text-gray-400 text-center mb-6">Julian & Mario – Gründer von hostgains, Klagenfurt</p>

        <p className="text-gray-700 text-base leading-relaxed mb-8">
          Wir haben hostgains 2024 gegründet, weil wir selbst gesehen haben wie viel Potenzial Ferienwohnungen in Kärnten haben – und wie selten es wirklich ausgeschöpft wird. Wir wollten ein Modell, das für Eigentümer fair ist: kein Risiko, kein Fixkostenberg, nur Ergebnisse.
        </p>

        {/* Case Study */}
        <div className="border border-gray-100 rounded-2xl overflow-hidden mb-6">
          <div className="relative h-40">
            <Image
              src="/Seeblick Apartment am Wörthersee.jpeg"
              alt="Seeblick Apartment Velden"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-3 left-4">
              <p className="text-white font-bold text-sm">Seeblick Apartment, Velden</p>
              <p className="text-white/70 text-xs">2-Zimmer · 65 m²</p>
            </div>
          </div>
          <div className="p-4 grid grid-cols-2 gap-3">
            <div className="text-center">
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-1">Vorher</p>
              <p className="text-xl font-bold text-gray-400">1.850 €</p>
              <p className="text-xs text-gray-300">63 % Auslastung</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-hostgains font-semibold uppercase tracking-wider mb-1">Mit hostgains</p>
              <p className="text-xl font-bold text-hostgains">2.400 €</p>
              <p className="text-xs text-hostgains/60">82 % Auslastung</p>
            </div>
          </div>
          <div className="px-4 pb-4">
            <div className="bg-hostgains/5 rounded-xl px-4 py-2.5 text-center">
              <p className="text-hostgains font-bold text-sm">+550 € mehr pro Monat</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <blockquote className="bg-gray-50 rounded-2xl p-5">
          <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
            „Ich hätte nicht gedacht, dass so viel mehr möglich ist. hostgains hat alles übernommen – ich muss mich um nichts kümmern und habe trotzdem mehr auf dem Konto."
          </p>
          <footer className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-hostgains/10 flex items-center justify-center">
              <span className="text-hostgains font-bold text-xs">S</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">Sandra M.</p>
              <p className="text-xs text-gray-400">Velden am Wörthersee</p>
            </div>
          </footer>
        </blockquote>
      </section>

      {/* ── PICTURE (Zukunftsbild) ── */}
      <section className="px-5 py-10 bg-gray-50 max-w-lg mx-auto">
        <p className="text-xs font-semibold text-hostgains uppercase tracking-widest mb-4">Stell dir vor</p>
        <p className="text-xl font-bold text-gray-900 leading-snug mb-4">
          Du öffnest dein Handy und siehst: neue Buchung.
        </p>
        <p className="text-gray-600 text-base leading-relaxed">
          Keine Anfragen beantworten. Kein Stress mit Check-in oder Reinigung. Kein Preis-Recherchieren. Nur der monatliche Eingang auf deinem Konto – und die Gewissheit, dass sich jemand wirklich darum kümmert.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section className="px-5 py-10 max-w-lg mx-auto">
        <p className="text-xs font-semibold text-hostgains uppercase tracking-widest mb-4">FAQ</p>
        <h2 className="text-xl font-bold text-gray-900 mb-6 leading-tight">
          Die häufigsten Fragen – ehrlich beantwortet.
        </h2>
        <div className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-4 py-4 text-left"
              >
                <span className="font-semibold text-gray-900 text-sm leading-snug">{item.q}</span>
                <span className="text-gray-300 flex-shrink-0 text-lg leading-none font-light">
                  {openFaq === i ? '−' : '+'}
                </span>
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4">
                  <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── QUIZ / BOOKING CTA ── */}
      <section
        ref={quizRef}
        className="px-5 py-10 max-w-lg mx-auto"
        id="termin"
        style={{ scrollMarginTop: '56px' }}
      >
        <div className="border-t border-gray-100 pt-10">
          <p className="text-xs font-semibold text-hostgains uppercase tracking-widest mb-4">Jetzt loslegen</p>

          {/* Idle state */}
          {quizStep === 'idle' && (
            <div key="idle" style={{ animation: 'fadeIn 0.3s ease-out' }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                Bereit? Dann lass uns kurz sprechen.
              </h2>
              <p className="text-gray-500 text-sm mb-7 leading-relaxed">
                2 kurze Fragen, dann wählst du deinen Wunschtermin. Dauert 60 Sekunden.
              </p>
              <button
                onClick={() => goTo('q1')}
                className="w-full flex items-center justify-center gap-2 bg-hostgains hover:bg-hostgains-dark text-white font-bold text-base py-4 rounded-xl transition-colors active:scale-[0.98] shadow-lg shadow-hostgains/20"
              >
                Jetzt Termin buchen
                <ArrowRight size={18} />
              </button>
              <p className="text-gray-400 text-xs text-center mt-3">Kostenlos · 20 Minuten · unverbindlich</p>
            </div>
          )}

          {/* Progress bar */}
          {quizStep !== 'idle' && (
            <div className="mb-7">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-gray-400">
                  {quizStep === 'q1' && 'Frage 1 von 2'}
                  {quizStep === 'q2' && 'Frage 2 von 2'}
                  {quizStep === 'calendly' && 'Wähle deinen Termin'}
                </span>
                <span className="text-xs font-semibold text-gray-600">{progress} %</span>
              </div>
              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-hostgains rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Q1 */}
          {quizStep === 'q1' && (
            <div key={animKey} style={{ animation: 'fadeIn 0.2s ease-out' }}>
              <h3 className="text-lg font-bold text-gray-900 mb-5 leading-snug">
                Vermietest du deine Wohnung bereits?
              </h3>
              <div className="space-y-2.5">
                {Q1_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => goTo('q2')}
                    className="w-full text-left px-4 py-4 rounded-xl border-2 border-gray-100 hover:border-hostgains hover:bg-hostgains/3 active:scale-[0.98] transition-all font-medium text-gray-700 text-sm"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Q2 */}
          {quizStep === 'q2' && (
            <div key={animKey} style={{ animation: 'fadeIn 0.2s ease-out' }}>
              <h3 className="text-lg font-bold text-gray-900 mb-5 leading-snug">
                Was ist dir am wichtigsten?
              </h3>
              <div className="space-y-2.5">
                {Q2_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => goTo('calendly')}
                    className="w-full text-left px-4 py-4 rounded-xl border-2 border-gray-100 hover:border-hostgains hover:bg-hostgains/3 active:scale-[0.98] transition-all font-medium text-gray-700 text-sm"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => goTo('q1')}
                className="mt-5 flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-500 transition-colors"
              >
                <ArrowLeft size={12} /> Zurück
              </button>
            </div>
          )}

          {/* Calendly */}
          {quizStep === 'calendly' && (
            <div key={animKey} style={{ animation: 'fadeIn 0.3s ease-out' }}>
              <h3 className="text-lg font-bold text-gray-900 mb-1 leading-snug">
                Wähle deinen Wunschtermin.
              </h3>
              <p className="text-gray-400 text-sm mb-5">Kostenlos · 20 Minuten · unverbindlich</p>
              <div
                className="calendly-inline-widget rounded-2xl overflow-hidden border border-gray-100"
                data-url="https://calendly.com/hostgains/potentialanalyse?hide_event_type_details=1&hide_gdpr_banner=1"
                style={{ minWidth: '280px', height: '680px' }}
              />
              <button
                type="button"
                onClick={() => goTo('q2')}
                className="mt-4 flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-500 transition-colors"
              >
                <ArrowLeft size={12} /> Zurück
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── STICKY BOTTOM CTA (Mobile) ── */}
      {quizStep === 'idle' && (
        <div className="fixed bottom-0 left-0 right-0 z-20 bg-white border-t border-gray-100 px-5 py-3 max-w-lg mx-auto">
          <button
            onClick={scrollToQuiz}
            className="w-full flex items-center justify-center gap-2 bg-hostgains text-white font-bold text-sm py-3.5 rounded-xl transition-colors active:scale-[0.98] shadow-lg shadow-hostgains/20"
          >
            Kostenloses Erstgespräch buchen
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* ── FOOTER ── */}
      <footer className="px-5 py-8 text-center border-t border-gray-100 bg-white" style={{ paddingBottom: quizStep === 'idle' ? '80px' : '32px' }}>
        <p className="text-xs text-gray-300">
          <Link href="/impressum" className="hover:text-gray-500 transition-colors">Impressum</Link>
          <span className="mx-2">·</span>
          <Link href="/datenschutzrichtlinien" className="hover:text-gray-500 transition-colors">Datenschutz</Link>
          <span className="mx-2">·</span>
          <span>© {new Date().getFullYear()} hostgains</span>
        </p>
      </footer>
    </div>
  );
}
