'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Send, MapPin, Home, Building2, Hotel, Users, CheckCircle2, X, User, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface FormData {
  standort: string;
  immobilienart: string;
  auslastung: string;
  zeitaufwand: string;
  herausforderung: string;
  name: string;
  email: string;
  telefon: string;
}

const TOTAL_QUESTIONS = 5;

export function AnalyseFormClient() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [datenschutzAccepted, setDatenschutzAccepted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    standort: '',
    immobilienart: '',
    auslastung: '',
    zeitaufwand: '',
    herausforderung: '',
    name: '',
    email: '',
    telefon: '',
  });

  const progress = showContactForm ? 100 : Math.round((currentStep / TOTAL_QUESTIONS) * 85);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceedQuestion = () => {
    switch (currentStep) {
      case 1: return formData.standort.trim().length > 0;
      case 2: return formData.immobilienart !== '';
      case 3: return formData.auslastung !== '';
      case 4: return formData.zeitaufwand !== '';
      case 5: return formData.herausforderung !== '';
      default: return false;
    }
  };

  const canSubmitContact = () => {
    return (
      formData.name.trim().length > 0 &&
      formData.email.trim().length > 0 &&
      formData.telefon.trim().length > 0 &&
      datenschutzAccepted
    );
  };

  const handleNext = () => {
    if (currentStep < TOTAL_QUESTIONS && canProceedQuestion()) {
      setCurrentStep(prev => prev + 1);
    } else if (currentStep === TOTAL_QUESTIONS && canProceedQuestion()) {
      setShowContactForm(true);
    }
  };

  const handleBack = () => {
    if (showContactForm) {
      setShowContactForm(false);
    } else if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!canSubmitContact()) return;

    setIsSubmitting(true);
    try {
      // Convert values to labels for webhook
      const immobilienLabel = immobilienOptions.find(o => o.value === formData.immobilienart)?.label || formData.immobilienart;
      const auslastungLabel = auslastungOptions.find(o => o.value === formData.auslastung)?.label || formData.auslastung;
      const zeitaufwandLabel = zeitaufwandOptions.find(o => o.value === formData.zeitaufwand)?.label || formData.zeitaufwand;
      const herausforderungLabel = herausforderungOptions.find(o => o.value === formData.herausforderung)?.label || formData.herausforderung;

      await fetch('https://hook.eu1.make.com/qpd0soetmzp6ou3j1kvuqmu0j9ny8o0e', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          standort: formData.standort,
          immobilienart: immobilienLabel,
          auslastung: auslastungLabel,
          zeitaufwand: zeitaufwandLabel,
          herausforderung: herausforderungLabel,
          name: formData.name,
          email: formData.email,
          telefon: formData.telefon,
          source: 'auslastungsanalyse',
          timestamp: new Date().toISOString(),
        }),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (showContactForm && canSubmitContact()) {
        handleSubmit();
      } else if (!showContactForm && canProceedQuestion()) {
        handleNext();
      }
    }
  };

  const immobilienOptions = [
    { value: 'ferienwohnung', label: 'Ferienwohnung', icon: Hotel },
    { value: 'ferienhaus', label: 'Ferienhaus', icon: Home },
    { value: 'apartment', label: 'Apartment im Mehrparteienhaus', icon: Building2 },
    { value: 'mehrere', label: 'Mehrere Einheiten', icon: Users },
  ];

  const auslastungOptions = [
    { value: 'unter40', label: 'weniger als 40 %' },
    { value: '40-60', label: '40–60 %' },
    { value: '60-80', label: '60–80 %' },
    { value: 'ueber80', label: 'mehr als 80 %' },
  ];

  const zeitaufwandOptions = [
    { value: 'kaum', label: 'Kaum Zeit' },
    { value: '1-3h', label: '1–3 Stunden pro Woche' },
    { value: 'mehrere', label: 'Mehrere Stunden pro Woche' },
    { value: 'viel', label: 'Sehr viel / fast täglich' },
  ];

  const herausforderungOptions = [
    { value: 'buchungen', label: 'Zu wenig Buchungen' },
    { value: 'preis', label: 'Zu niedriger Preis / Umsatz' },
    { value: 'aufwand', label: 'Zu viel Aufwand' },
    { value: 'unsicherheit', label: 'Unsicherheit bei Plattformen & Abläufen' },
  ];

  const inputClasses = "w-full bg-white border-2 border-sand-dark rounded-xl py-4 px-5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-hostgains focus:border-hostgains transition-all text-lg";

  const optionClasses = (isSelected: boolean) => `
    w-full p-5 rounded-xl border-2 transition-all cursor-pointer text-left
    ${isSelected
      ? 'border-hostgains bg-hostgains/5 text-gray-900 ring-2 ring-hostgains/20'
      : 'border-sand-dark bg-white text-gray-700 hover:border-hostgains/50 hover:bg-sand-light'
    }
  `;

  const renderQuestion = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-2 flex items-center gap-3">
                <MapPin className="text-hostgains flex-shrink-0" size={28} />
                Wo befindet sich deine Ferienimmobilie?
              </h2>
              <p className="text-gray-500">Stadt, Region oder Adresse</p>
            </div>
            <input
              type="text"
              placeholder="z.B. Klagenfurt, Wörthersee, Kärnten..."
              value={formData.standort}
              onChange={(e) => updateFormData('standort', e.target.value)}
              onKeyDown={handleKeyDown}
              className={inputClasses}
              autoFocus
            />
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-2 flex items-center gap-3">
                <Home className="text-hostgains flex-shrink-0" size={28} />
                Um welche Art von Immobilie handelt es sich?
              </h2>
              <p className="text-gray-500">Wähle die passende Option.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {immobilienOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateFormData('immobilienart', option.value)}
                    className={optionClasses(formData.immobilienart === option.value)}
                  >
                    <div className="flex items-center gap-4">
                      <Icon size={24} className={formData.immobilienart === option.value ? 'text-hostgains' : 'text-gray-400'} />
                      <span className="font-medium">{option.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-2">
                Wie hoch ist deine aktuelle Auslastung (geschätzt)?
              </h2>
              <p className="text-gray-500">Eine grobe Schätzung genügt.</p>
            </div>
            <div className="space-y-3">
              {auslastungOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateFormData('auslastung', option.value)}
                  className={optionClasses(formData.auslastung === option.value)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      formData.auslastung === option.value
                        ? 'border-hostgains bg-hostgains'
                        : 'border-gray-300'
                    }`}>
                      {formData.auslastung === option.value && (
                        <CheckCircle2 size={16} className="text-white" />
                      )}
                    </div>
                    <span className="font-medium text-lg">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-2">
                Wie viel Zeit investierst du aktuell selbst in die Vermietung?
              </h2>
              <p className="text-gray-500">Wähle die Option, die am besten passt.</p>
            </div>
            <div className="space-y-3">
              {zeitaufwandOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateFormData('zeitaufwand', option.value)}
                  className={optionClasses(formData.zeitaufwand === option.value)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      formData.zeitaufwand === option.value
                        ? 'border-hostgains bg-hostgains'
                        : 'border-gray-300'
                    }`}>
                      {formData.zeitaufwand === option.value && (
                        <CheckCircle2 size={16} className="text-white" />
                      )}
                    </div>
                    <span className="font-medium text-lg">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-2">
                Was ist aktuell deine größte Herausforderung?
              </h2>
              <p className="text-gray-500">Wähle die wichtigste Option.</p>
            </div>
            <div className="space-y-3">
              {herausforderungOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateFormData('herausforderung', option.value)}
                  className={optionClasses(formData.herausforderung === option.value)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      formData.herausforderung === option.value
                        ? 'border-hostgains bg-hostgains'
                        : 'border-gray-300'
                    }`}>
                      {formData.herausforderung === option.value && (
                        <CheckCircle2 size={16} className="text-white" />
                      )}
                    </div>
                    <span className="font-medium text-lg">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const renderContactForm = () => {
    const contactInputClasses = "w-full bg-white border-2 border-sand-dark rounded-xl py-4 px-5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-hostgains focus:border-hostgains transition-all text-lg pl-14";

    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-3">
            Wohin dürfen wir dir die Einschätzung senden?
          </h2>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input
              type="text"
              placeholder="Dein Name"
              value={formData.name}
              onChange={(e) => updateFormData('name', e.target.value)}
              onKeyDown={handleKeyDown}
              className={contactInputClasses}
              autoFocus
              autoComplete="name"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input
              type="email"
              placeholder="Deine E-Mail"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              onKeyDown={handleKeyDown}
              className={contactInputClasses}
              autoComplete="email"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input
              type="tel"
              placeholder="Deine Telefonnummer"
              value={formData.telefon}
              onChange={(e) => updateFormData('telefon', e.target.value)}
              onKeyDown={handleKeyDown}
              className={contactInputClasses}
              autoComplete="tel"
            />
          </div>
        </div>

        <p className="text-sm text-gray-500 text-center mt-6">
          Wir senden dir eine kurze Einschätzung per E-Mail. Keine Verpflichtung, kein Verkaufsgespräch.
        </p>

        <label className="flex items-start gap-3 cursor-pointer mt-6">
          <div className="relative flex-shrink-0 mt-0.5">
            <input
              type="checkbox"
              checked={datenschutzAccepted}
              onChange={(e) => setDatenschutzAccepted(e.target.checked)}
              className="sr-only"
            />
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
              datenschutzAccepted
                ? 'bg-hostgains border-hostgains'
                : 'bg-white border-gray-300'
            }`}>
              {datenschutzAccepted && (
                <CheckCircle2 size={14} className="text-white" />
              )}
            </div>
          </div>
          <span className="text-sm text-gray-600 leading-relaxed">
            Ich bin damit einverstanden, dass meine Daten zum Zwecke der Bearbeitung der Anfrage gespeichert und weiterverarbeitet werden. Weitere Informationen finden Sie in unserer{' '}
            <Link href="/datenschutz" className="text-hostgains hover:underline">
              Datenschutzbestimmung
            </Link>.
          </span>
        </label>
      </div>
    );
  };

  const renderSuccessMessage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12"
    >
      <div className="w-20 h-20 bg-hostgains/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 size={40} className="text-hostgains" />
      </div>
      <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">
        Vielen Dank{formData.name ? `, ${formData.name.split(' ')[0]}` : ''}!
      </h2>
      <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
        Wir haben deine Angaben erhalten und senden dir die Einschätzung innerhalb von 24 Stunden per E-Mail.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-hostgains font-medium hover:underline"
      >
        Zurück zur Startseite
      </Link>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-sand-light flex flex-col">
      <header className="bg-white border-b border-sand-dark">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="block">
            <Image src="/logo.png" alt="hostgains" width={120} height={48} className="h-10 sm:h-12 w-auto" />
          </Link>
          <Link
            href="/"
            className="p-2 hover:bg-sand rounded-full transition-colors"
            aria-label="Schließen"
          >
            <X size={24} className="text-gray-500" />
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-xl">
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-10"
            >
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">
                    {showContactForm ? 'Kontaktdaten' : `Frage ${currentStep} von ${TOTAL_QUESTIONS}`}
                  </span>
                  <span className="text-sm font-bold text-gray-900">
                    {progress}%
                  </span>
                </div>
                <div className="w-full h-2 bg-sand rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-hostgains rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </div>
              </div>

              <div className="min-h-[360px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={showContactForm ? 'contact' : currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {showContactForm ? renderContactForm() : renderQuestion()}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex gap-4 mt-8">
                {(currentStep > 1 || showContactForm) && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-sand-dark text-gray-600 hover:bg-sand transition-all font-medium"
                  >
                    <ArrowLeft size={20} />
                    Zurück
                  </button>
                )}

                {!showContactForm ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canProceedQuestion()}
                    className={`flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                      canProceedQuestion()
                        ? 'bg-hostgains hover:bg-hostgains-dark text-white shadow-lg'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Weiter
                    <ArrowRight size={20} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={!canSubmitContact() || isSubmitting}
                    className={`flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                      canSubmitContact() && !isSubmitting
                        ? 'bg-hostgains hover:bg-hostgains-dark text-white shadow-lg'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        Einschätzung anfordern
                        <Send size={20} />
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">
              {renderSuccessMessage()}
            </div>
          )}

          {!isSubmitted && (
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-hostgains rounded-full"></span>
                100% kostenlos
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-hostgains rounded-full"></span>
                Unverbindlich
              </span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
