'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, Check, X, ChevronDown, Play } from 'lucide-react';

type QuizStep = 'idle' | 'q1' | 'q2' | 'calendly';

const FOUNDERS = [
  { name: 'Julian Ograjensek', role: 'Mitgründer & Geschäftsführer', img: '/Julian hohe auflösung.png' },
  { name: 'Mario Brenner',     role: 'Mitgründer & Geschäftsführer', img: '/Mario hohe auflösung.png' },
];

const Q1_OPTIONS = [
  { value: 'ja',          label: 'Ja, ich vermiete bereits' },
  { value: 'gelegentlich',label: 'Gelegentlich / selten' },
  { value: 'nein',        label: 'Noch nicht, plane es' },
];

const Q2_OPTIONS = [
  { value: 'einnahmen', label: 'Mehr Einnahmen' },
  { value: 'aufwand',   label: 'Weniger Aufwand' },
  { value: 'beides',    label: 'Beides' },
];

const FAQ_ITEMS = [
  { q: 'Was kostet das?',
    a: 'Keine Fixkosten, keine Einrichtungsgebühr. Wir verdienen nur eine Umsatzbeteiligung – und zwar nur dann, wenn du auch verdienst.' },
  { q: 'Muss ich selbst etwas tun?',
    a: 'Nein. Du weiht uns einmalig kurz ein, wir übernehmen den Rest. Keine Gästeanfragen, kein Check-in-Stress, keine Preisrecherche.' },
  { q: 'Ich bin schon auf Airbnb aktiv. Lohnt sich das trotzdem?',
    a: 'Umso besser. Wir optimieren dein bestehendes Inserat, passen die Preise an und können innerhalb weniger Wochen loslegen.' },
  { q: 'In welchen Regionen arbeitet ihr?',
    a: 'Wir sind auf Kärnten spezialisiert – vor allem die Wörthersee-Region: Klagenfurt, Velden, Pörtschach, Maria Wörth und Umgebung.' },
  { q: 'Worauf verpflichte ich mich?',
    a: 'Auf gar nichts. Das Erstgespräch ist kostenlos und unverbindlich. Du entscheidest danach in Ruhe.' },
];

const STATS = [
  { stat: '+28 %', sub: 'mehr Umsatz', desc: 'im ersten Jahr im Schnitt' },
  { stat: '0 €',   sub: 'Fixkosten',   desc: 'wir verdienen nur wenn du verdienst' },
  { stat: '0 h',   sub: 'Aufwand',     desc: 'wir übernehmen alles für dich' },
];

export function ErstgespraechClient() {
  const [quizStep, setQuizStep] = useState<QuizStep>('idle');
  const [animKey, setAnimKey] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const quizRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  /* ── Calendly postMessage redirect ── */
  const onCalendly = useCallback((e: MessageEvent) => {
    if (e.data?.event === 'calendly.event_scheduled') {
      window.location.href = '/erstgespräch-danke';
    }
  }, []);
  useEffect(() => {
    window.addEventListener('message', onCalendly);
    return () => window.removeEventListener('message', onCalendly);
  }, [onCalendly]);

  /* ── Calendly script lazy load ── */
  useEffect(() => {
    if (quizStep !== 'calendly') return;
    if (document.getElementById('calendly-widget-script')) return;
    const s = document.createElement('script');
    s.id = 'calendly-widget-script';
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    s.async = true;
    document.head.appendChild(s);
  }, [quizStep]);

  /* ── Video autoplay (browser blocks sound autoplay — overlay handles it) ── */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().then(() => setVideoPlaying(true)).catch(() => setVideoPlaying(false));
  }, []);

  const handleVideoPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().then(() => setVideoPlaying(true));
  };

  /* ── Quiz helpers ── */
  const scrollToQuiz = () => {
    quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => { setAnimKey(k => k + 1); setQuizStep('q1'); }, 500);
  };
  const goTo = (next: QuizStep) => {
    setAnimKey(k => k + 1);
    setQuizStep(next);
    if (next !== 'idle') setTimeout(() => quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  };

  const progress = quizStep === 'q1' ? 33 : quizStep === 'q2' ? 66 : quizStep === 'calendly' ? 100 : 0;

  return (
    <div className="bg-[#F8F7F5] min-h-screen font-sans antialiased" style={{ maxWidth: '480px', margin: '0 auto' }}>

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-white/60 px-5 py-3 flex items-center justify-between shadow-[0_1px_0_rgba(0,0,0,0.04)]">
        <Link href="/">
          <Image src="/logo.png" alt="hostgains" width={88} height={32} className="h-7 w-auto" priority />
        </Link>
        <button
          onClick={scrollToQuiz}
          className="bg-hostgains text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-hostgains-dark transition-colors shadow-[0_2px_8px_rgba(49,74,67,0.25)]"
        >
          Termin buchen
        </button>
      </nav>

      {/* ══════════════════════════════════════
          HERO – centered, glass badge, video
      ══════════════════════════════════════ */}
      <section className="px-5 pt-10 pb-6 text-center">

        {/* Glass badge */}
        <div className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.14em] uppercase text-hostgains bg-white/80 backdrop-blur-md border border-hostgains/12 px-3.5 py-2 rounded-full mb-6 shadow-[0_2px_12px_rgba(49,74,67,0.07),inset_0_1px_0_rgba(255,255,255,1)]">
          <span className="w-1.5 h-1.5 rounded-full bg-hostgains" aria-hidden="true" />
          Ferienwohnungen in Kärnten
        </div>

        {/* H1 */}
        <h1 className="text-[2.2rem] font-black leading-[1.1] tracking-[-0.02em] text-gray-950 mb-4">
          Mehr raus aus deiner<br />
          <span className="text-hostgains">Ferienwohnung.</span>
        </h1>

        {/* Sub */}
        <p className="text-[1rem] text-gray-500 leading-relaxed mx-auto" style={{ maxWidth: '320px' }}>
          Wir übernehmen Inserate, Gäste und Preise — du bekommst monatlich mehr auf dein Konto.
        </p>
      </section>

      {/* Video card */}
      <div className="px-5">
        <div
          className="relative w-full rounded-3xl overflow-hidden bg-gray-900 shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
          style={{ aspectRatio: '4/5', maxHeight: '74svh' }}
        >
          <video
            ref={videoRef}
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/hero-woerthersee.jpg"
          >
            <source src="/Website%20Video.mp4" type="video/mp4" />
          </video>

          {/* Play overlay – appears when autoplay is blocked */}
          {!videoPlaying && (
            <button
              onClick={handleVideoPlay}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/30 backdrop-blur-[2px]"
              aria-label="Video abspielen"
            >
              <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-[0_8px_40px_rgba(0,0,0,0.25)] active:scale-95 transition-transform">
                <Play size={28} className="text-gray-950 translate-x-0.5" fill="currentColor" strokeWidth={0} />
              </div>
              <span className="text-white/90 text-sm font-semibold tracking-wide drop-shadow">Mit Ton abspielen</span>
            </button>
          )}

          {/* Bottom gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" aria-hidden="true" />
        </div>
      </div>

      {/* CTA below video */}
      <div className="px-5 pt-5 pb-8 text-center">
        <button
          onClick={scrollToQuiz}
          className="w-full flex items-center justify-center gap-2.5 bg-gray-950 hover:bg-gray-800 text-white font-bold text-[1rem] py-4 rounded-2xl transition-colors active:scale-[0.98] shadow-[0_4px_24px_rgba(0,0,0,0.16)]"
        >
          Kostenloses Erstgespräch buchen
          <ArrowRight size={18} strokeWidth={2.5} />
        </button>
        <p className="text-[11px] text-gray-400 mt-3 tracking-wide">
          Kostenlos · 20 Minuten · unverbindlich
        </p>
      </div>

      {/* ══════════════════════════════════════
          PROMISE – Glass stat cards
      ══════════════════════════════════════ */}
      <section className="px-5 py-12">
        <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-hostgains mb-3">Was sich ändert</p>
        <h2 className="text-[1.55rem] font-extrabold leading-tight tracking-[-0.01em] text-gray-950 mb-8">
          Unsere Kunden verdienen im Schnitt <span className="text-hostgains">28 % mehr.</span>
        </h2>

        <div className="grid grid-cols-3 gap-2.5">
          {STATS.map(({ stat, sub, desc }) => (
            <div
              key={stat}
              className="bg-white/80 backdrop-blur-md border border-white rounded-2xl py-5 px-2 text-center shadow-[0_2px_16px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)]"
            >
              <p className="text-[1.6rem] font-black text-hostgains leading-none mb-1.5 tabular-nums tracking-tight">{stat}</p>
              <p className="text-[0.65rem] font-bold text-gray-700 uppercase tracking-wider leading-tight mb-0.5">{sub}</p>
              <p className="text-[0.6rem] text-gray-400 leading-tight hidden sm:block">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          PAIN
      ══════════════════════════════════════ */}
      <section className="mx-5 mb-12">
        <div className="bg-white/80 backdrop-blur-md border border-white rounded-3xl px-5 py-8 shadow-[0_2px_16px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)]">
          <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-hostgains mb-4">Kommt dir das bekannt vor?</p>
          <h2 className="text-[1.3rem] font-extrabold leading-snug tracking-tight text-gray-950 mb-6">
            Viele Eigentümer lassen jeden Monat Geld liegen – ohne es zu wissen.
          </h2>
          <ul className="space-y-3.5">
            {[
              'Meine Buchungsrate könnte besser sein.',
              'Ich bin mir nicht sicher ob mein Preis stimmt.',
              'Die Gästekommunikation kostet mich zu viel Zeit.',
              'Ich weiß nicht welche Plattform wirklich was bringt.',
              'Andere holen sicher mehr raus als ich.',
            ].map((pain) => (
              <li key={pain} className="flex items-start gap-3.5">
                <div className="mt-0.5 w-5 h-5 flex-shrink-0 rounded border-2 border-gray-200 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]" aria-hidden="true" />
                <span className="text-gray-600 text-[0.9375rem] leading-snug">{pain}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-400 text-sm mt-6 leading-relaxed italic">
            Wenn du bei 2 oder mehr Punkten nickst – dann ist dieses Gespräch genau das Richtige für dich.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHO IS THIS FOR
      ══════════════════════════════════════ */}
      <section className="px-5 py-12 border-t border-white/60">
        <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-hostgains mb-4">Für wen ist das?</p>
        <h2 className="text-[1.3rem] font-extrabold leading-snug tracking-tight text-gray-950 mb-7">
          hostgains passt zu dir, wenn&nbsp;…
        </h2>
        <ul className="space-y-3.5 mb-8">
          {[
            'Du eine Ferienwohnung in Kärnten besitzt oder planst.',
            'Du mehr Einnahmen willst, ohne mehr Zeit zu investieren.',
            'Du keine Lust auf Gästekommunikation, Preisrecherche und Koordination hast.',
            'Du ein transparentes, risikofreies Modell suchst – keine Fixkosten.',
          ].map((p) => (
            <li key={p} className="flex items-start gap-3.5">
              <div className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-full bg-hostgains/10 flex items-center justify-center">
                <Check size={11} className="text-hostgains" strokeWidth={3} />
              </div>
              <span className="text-gray-700 text-[0.9375rem] leading-snug">{p}</span>
            </li>
          ))}
        </ul>

        <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl px-4 py-4 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Nicht für dich, wenn</p>
          <ul className="space-y-2.5">
            {[
              'Du außerhalb Kärntens vermietest.',
              'Du keine Optimierung an deiner Vermietung zulassen willst.',
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <X size={14} className="text-gray-300 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                <span className="text-gray-400 text-sm leading-snug">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PLAN – dark
      ══════════════════════════════════════ */}
      <section className="mx-5 mb-12 rounded-3xl bg-gray-950 px-6 py-10 shadow-[0_8px_40px_rgba(0,0,0,0.14)]">
        <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-hostgains-light mb-4">So läuft es ab</p>
        <h2 className="text-[1.45rem] font-extrabold leading-snug tracking-tight text-white mb-10">
          Von Erstgespräch zu mehr Umsatz — in 3 Schritten.
        </h2>

        <div className="space-y-0">
          {[
            { num: '01', title: 'Kostenloses Gespräch (20 Min)', text: 'Wir schauen gemeinsam an, was in deiner Situation möglich ist. Keine Verpflichtung.' },
            { num: '02', title: 'Setup (2–3 Wochen)',            text: 'Inserat-Optimierung, dynamische Preise, Gästebetreuung – wir starten sofort.' },
            { num: '03', title: 'Monatlich mehr auf deinem Konto', text: 'Transparente Abrechnung. Du lehnst dich zurück, wir arbeiten.' },
          ].map((step, i) => (
            <div key={step.num} className="flex gap-5 pb-9 last:pb-0 relative">
              {i < 2 && (
                <div className="absolute left-[19px] top-10 bottom-0 w-px bg-white/10" aria-hidden="true" />
              )}
              <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center flex-shrink-0 bg-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <span className="text-[10px] font-bold text-white/40 tracking-widest">{step.num}</span>
              </div>
              <div className="pt-1">
                <p className="font-bold text-white text-[0.9375rem] mb-1.5 leading-snug">{step.title}</p>
                <p className="text-white/45 text-sm leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROOF – Founders + Case Study + Quote
      ══════════════════════════════════════ */}
      <section className="px-5 py-12 border-t border-white/60">
        <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-hostgains mb-5">Wer wir sind</p>

        {/* Founder cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {FOUNDERS.map((f) => (
            <div key={f.name}>
              <div
                className="relative w-full rounded-2xl overflow-hidden bg-gray-100 mb-3 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                style={{ aspectRatio: '3/4' }}
              >
                <Image
                  src={f.img}
                  alt={f.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 480px) 45vw, 200px"
                />
              </div>
              <p className="font-bold text-gray-950 text-[0.9375rem] leading-snug">{f.name}</p>
              <p className="text-hostgains text-xs font-semibold mt-0.5 leading-snug">{f.role}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-[0.9375rem] leading-relaxed mb-10">
          Wir haben hostgains 2024 gegründet, weil wir selbst gesehen haben wie viel Potenzial Ferienwohnungen in Kärnten haben – und wie selten es wirklich ausgeschöpft wird.
        </p>

        {/* Case study */}
        <div className="bg-white/80 backdrop-blur-md border border-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.07)] mb-6">
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <Image
              src="/Seeblick Apartment am Wörthersee.jpeg"
              alt="Seeblick Apartment Velden"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-white font-bold text-sm">Seeblick Apartment, Velden</p>
              <p className="text-white/60 text-xs">2-Zimmer · 65 m²</p>
            </div>
          </div>

          <div className="p-5">
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="text-center bg-gray-50 rounded-2xl py-5">
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-2">Vorher</p>
                <p className="text-[1.9rem] font-black text-gray-300 leading-none tabular-nums">1.850</p>
                <p className="text-[10px] text-gray-300 mt-1.5">€/Mo · 63 % Auslastung</p>
              </div>
              <div className="text-center bg-hostgains/6 border border-hostgains/12 rounded-2xl py-5">
                <p className="text-[9px] text-hostgains font-bold uppercase tracking-wider mb-2">Mit hostgains</p>
                <p className="text-[1.9rem] font-black text-hostgains leading-none tabular-nums">2.400</p>
                <p className="text-[10px] text-hostgains/50 mt-1.5">€/Mo · 82 % Auslastung</p>
              </div>
            </div>
            <div className="bg-gray-950 rounded-2xl py-3.5 text-center shadow-[0_2px_12px_rgba(0,0,0,0.12)]">
              <p className="text-white font-bold text-sm tracking-wide">+550 € mehr pro Monat</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="relative bg-white/80 backdrop-blur-md border border-white rounded-3xl px-5 pt-8 pb-5 shadow-[0_2px_16px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.9)]">
          <span className="absolute -top-4 left-5 text-6xl text-gray-200 font-serif leading-none select-none" aria-hidden="true">&ldquo;</span>
          <p className="text-gray-600 text-[0.9375rem] leading-relaxed mb-5 italic">
            Ich hätte nicht gedacht, dass so viel mehr möglich ist. hostgains hat alles übernommen – ich muss mich um nichts kümmern und habe trotzdem mehr auf dem Konto.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-hostgains/10 flex items-center justify-center flex-shrink-0 border border-hostgains/15">
              <span className="text-hostgains font-bold text-sm">S</span>
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">Sandra M.</p>
              <p className="text-gray-400 text-xs">Velden am Wörthersee</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PICTURE – Zukunftsbild
      ══════════════════════════════════════ */}
      <section className="mx-5 mb-12 rounded-3xl bg-hostgains px-6 py-10 shadow-[0_8px_40px_rgba(49,74,67,0.2)]">
        <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/40 mb-4">Stell dir vor</p>
        <h2 className="text-[1.45rem] font-extrabold leading-snug tracking-tight text-white mb-4">
          Du öffnest dein Handy und siehst: neue Buchung.
        </h2>
        <p className="text-white/60 text-[0.9375rem] leading-relaxed">
          Keine Anfragen beantworten. Kein Stress mit Check-in. Kein Preisvergleich. Nur der monatliche Eingang auf deinem Konto.
        </p>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section className="px-5 py-12 border-t border-white/60">
        <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-hostgains mb-4">FAQ</p>
        <h2 className="text-[1.3rem] font-extrabold leading-snug tracking-tight text-gray-950 mb-7">
          Die häufigsten Fragen – ehrlich beantwortet.
        </h2>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-200 shadow-[0_1px_4px_rgba(0,0,0,0.03)] ${
                openFaq === i
                  ? 'border-hostgains/20 bg-white/90 shadow-[0_2px_12px_rgba(49,74,67,0.07)]'
                  : 'border-white bg-white/70'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-4 py-4 text-left"
              >
                <span className="font-semibold text-gray-900 text-[0.9375rem] leading-snug pr-2">{item.q}</span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180 text-hostgains' : 'text-gray-300'}`}
                />
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

      {/* ══════════════════════════════════════
          QUIZ + BOOKING
      ══════════════════════════════════════ */}
      <section
        ref={quizRef}
        id="termin"
        className="px-5 pt-2 pb-8 border-t border-white/60"
        style={{ scrollMarginTop: '56px' }}
      >
        <div className="pt-10">
          <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-hostgains mb-4">Jetzt loslegen</p>

          {/* Idle */}
          {quizStep === 'idle' && (
            <div key="idle" style={{ animation: 'fadeIn 0.3s ease-out' }}>
              <h2 className="text-[1.55rem] font-extrabold leading-tight tracking-tight text-gray-950 mb-3">
                Bereit? Dann lass uns kurz sprechen.
              </h2>
              <p className="text-gray-500 text-[0.9375rem] mb-8 leading-relaxed">
                2 kurze Fragen, dann wählst du deinen Wunschtermin. Dauert 60 Sekunden.
              </p>
              <button
                onClick={() => goTo('q1')}
                className="w-full flex items-center justify-center gap-2.5 bg-gray-950 hover:bg-gray-800 text-white font-bold text-[1rem] py-4 rounded-2xl transition-colors active:scale-[0.98] shadow-[0_4px_24px_rgba(0,0,0,0.14)]"
              >
                Jetzt Termin buchen
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
              <p className="text-gray-400 text-[11px] text-center mt-3">Kostenlos · 20 Minuten · unverbindlich</p>
            </div>
          )}

          {/* Progress bar */}
          {quizStep !== 'idle' && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">
                  {quizStep === 'q1' && 'Frage 1 von 2'}
                  {quizStep === 'q2' && 'Frage 2 von 2'}
                  {quizStep === 'calendly' && 'Wähle deinen Termin'}
                </span>
                <span className="text-xs font-bold text-gray-600 tabular-nums">{progress} %</span>
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
              <h3 className="text-[1.15rem] font-extrabold text-gray-950 mb-6 leading-snug">
                Vermietest du deine Wohnung bereits?
              </h3>
              <div className="space-y-2.5">
                {Q1_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => goTo('q2')}
                    className="w-full text-left px-4 py-4 rounded-2xl border-2 border-white bg-white/80 hover:border-hostgains hover:bg-white active:scale-[0.98] transition-all font-semibold text-gray-800 text-[0.9375rem] shadow-[0_1px_8px_rgba(0,0,0,0.05)] backdrop-blur-sm"
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
              <h3 className="text-[1.15rem] font-extrabold text-gray-950 mb-6 leading-snug">
                Was ist dir am wichtigsten?
              </h3>
              <div className="space-y-2.5">
                {Q2_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => goTo('calendly')}
                    className="w-full text-left px-4 py-4 rounded-2xl border-2 border-white bg-white/80 hover:border-hostgains hover:bg-white active:scale-[0.98] transition-all font-semibold text-gray-800 text-[0.9375rem] shadow-[0_1px_8px_rgba(0,0,0,0.05)] backdrop-blur-sm"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => goTo('q1')}
                className="mt-5 flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ArrowLeft size={12} /> Zurück
              </button>
            </div>
          )}

          {/* Calendly */}
          {quizStep === 'calendly' && (
            <div key={animKey} style={{ animation: 'fadeIn 0.3s ease-out' }}>
              <h3 className="text-[1.15rem] font-extrabold text-gray-950 mb-1 leading-snug">
                Wähle deinen Wunschtermin.
              </h3>
              <p className="text-gray-400 text-sm mb-6">Kostenlos · 20 Minuten · unverbindlich</p>
              <div
                className="calendly-inline-widget rounded-2xl overflow-hidden border border-white shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
                data-url="https://calendly.com/hostgains/potentialanalyse?hide_event_type_details=1&hide_gdpr_banner=1"
                style={{ minWidth: '280px', height: '680px' }}
              />
              <button
                type="button"
                onClick={() => goTo('q2')}
                className="mt-4 flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ArrowLeft size={12} /> Zurück
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── STICKY BOTTOM BAR ── */}
      {quizStep === 'idle' && (
        <div
          className="fixed bottom-0 z-20 bg-white/80 backdrop-blur-md border-t border-white/60 p-4 shadow-[0_-4px_24px_rgba(0,0,0,0.07)]"
          style={{ maxWidth: '480px', left: '50%', transform: 'translateX(-50%)', width: '100%' }}
        >
          <button
            onClick={scrollToQuiz}
            className="w-full flex items-center justify-center gap-2 bg-gray-950 text-white font-bold text-sm py-3.5 rounded-2xl transition-colors active:scale-[0.98] shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
          >
            Kostenloses Erstgespräch buchen
            <ArrowRight size={15} strokeWidth={2.5} />
          </button>
        </div>
      )}

      {/* ── FOOTER ── */}
      <footer
        className="px-5 py-6 text-center border-t border-white/60"
        style={{ paddingBottom: quizStep === 'idle' ? '88px' : '24px' }}
      >
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
