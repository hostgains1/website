import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Send, User, Mail, Building2, Home, Hotel, Store, CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FormData {
  name: string;
  kontakt: string;
  immobilienart: string;
  vermietungsstatus: string;
  ziele: string;
}

const TOTAL_STEPS = 5;

export const QuizPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    kontakt: '',
    immobilienart: '',
    vermietungsstatus: '',
    ziele: '',
  });

  const progress = Math.round((currentStep / TOTAL_STEPS) * 100);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return formData.name.trim().length > 0;
      case 2: return formData.kontakt.trim().length > 0;
      case 3: return formData.immobilienart !== '';
      case 4: return formData.vermietungsstatus !== '';
      case 5: return formData.ziele !== '';
      default: return false;
    }
  };

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS && canProceed()) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;

    setIsSubmitting(true);
    try {
      await fetch('https://hook.eu1.make.com/qpd0soetmzp6ou3j1kvuqmu0j9ny8o0e', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'quiz-page',
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
    if (e.key === 'Enter' && canProceed()) {
      e.preventDefault();
      if (currentStep === TOTAL_STEPS) {
        handleSubmit();
      } else {
        handleNext();
      }
    }
  };

  const immobilienOptions = [
    { value: 'wohnung', label: 'Wohnung', icon: Building2 },
    { value: 'ferienwohnung', label: 'Ferienwohnung', icon: Hotel },
    { value: 'haus', label: 'Haus', icon: Home },
    { value: 'gewerbe', label: 'Gewerbeobjekt', icon: Store },
  ];

  const vermietungsOptions = [
    { value: 'vermietet', label: 'Wird derzeit vermietet' },
    { value: 'leer', label: 'Steht leer' },
    { value: 'teilweise', label: 'Teilweise vermietet' },
    { value: 'kurzfristig', label: 'Kurzfristig vermietbar' },
  ];

  const zieleOptions = [
    { value: 'vollstaendig', label: 'Vollständiges Management inkl. Reinigung & Instandhaltung' },
    { value: 'listing', label: 'Nur Listing & Buchungen optimieren' },
    { value: 'pricing', label: 'Preismanagement / dynamisches Pricing' },
    { value: 'beratung', label: 'Beratung / Tipps für eigene Vermietung' },
  ];

  const renderStep = () => {
    const inputClasses = "w-full bg-white border-2 border-sand-dark rounded-xl py-4 px-5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-hostgains focus:border-hostgains transition-all text-lg";

    const optionClasses = (isSelected: boolean) => `
      w-full p-5 rounded-xl border-2 transition-all cursor-pointer text-left
      ${isSelected
        ? 'border-hostgains bg-hostgains/5 text-gray-900'
        : 'border-sand-dark bg-white text-gray-700 hover:border-hostgains/50 hover:bg-sand-light'
      }
    `;

    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-2">
                Wie heißt du?
              </h2>
              <p className="text-gray-500">Damit wir dich persönlich ansprechen können.</p>
            </div>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-900/50" size={24} />
              <input
                type="text"
                placeholder="Dein Name"
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                onKeyDown={handleKeyDown}
                className={`${inputClasses} pl-14`}
                autoFocus
                autoComplete="name"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-2">
                Wie erreichen wir dich?
              </h2>
              <p className="text-gray-500">E-Mail oder Telefon – wie du möchtest.</p>
            </div>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-900/50" size={24} />
              <input
                type="text"
                placeholder="E-Mail oder Telefonnummer"
                value={formData.kontakt}
                onChange={(e) => updateFormData('kontakt', e.target.value)}
                onKeyDown={handleKeyDown}
                className={`${inputClasses} pl-14`}
                autoFocus
                autoComplete="email"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-2">
                Um welche Art von Immobilie handelt es sich?
              </h2>
              <p className="text-gray-500">Wähle die passende Option.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {immobilienOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => updateFormData('immobilienart', option.value)}
                    className={optionClasses(formData.immobilienart === option.value)}
                  >
                    <div className="flex flex-col items-center gap-3 py-2">
                      <Icon size={32} className={formData.immobilienart === option.value ? 'text-gray-900' : 'text-gray-400'} />
                      <span className="font-medium text-center">{option.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-2">
                Aktueller Vermietungsstatus?
              </h2>
              <p className="text-gray-500">Wie ist die aktuelle Situation deiner Immobilie?</p>
            </div>
            <div className="space-y-3">
              {vermietungsOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateFormData('vermietungsstatus', option.value)}
                  className={optionClasses(formData.vermietungsstatus === option.value)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      formData.vermietungsstatus === option.value
                        ? 'border-hostgains bg-hostgains'
                        : 'border-gray-300'
                    }`}>
                      {formData.vermietungsstatus === option.value && (
                        <CheckCircle2 size={16} className="text-white" />
                      )}
                    </div>
                    <span className="font-medium">{option.label}</span>
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
                Was erwartest du dir?
              </h2>
              <p className="text-gray-500">Wähle die Option, die am besten zu dir passt.</p>
            </div>
            <div className="space-y-3">
              {zieleOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => updateFormData('ziele', option.value)}
                  className={optionClasses(formData.ziele === option.value)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      formData.ziele === option.value
                        ? 'border-hostgains bg-hostgains'
                        : 'border-gray-300'
                    }`}>
                      {formData.ziele === option.value && (
                        <CheckCircle2 size={16} className="text-white" />
                      )}
                    </div>
                    <span className="font-medium leading-tight">{option.label}</span>
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

  const renderSuccessMessage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12"
    >
      <div className="w-20 h-20 bg-hostgains/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 size={40} className="text-gray-900" />
      </div>
      <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">
        Vielen Dank, {formData.name}!
      </h2>
      <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
        Wir haben deine Anfrage erhalten und melden uns innerhalb von 24 Stunden bei dir.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-gray-900 font-medium hover:underline"
      >
        Zurück zur Startseite
      </Link>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-sand-light flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-sand-dark">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="block">
            <img src="/logo.png" alt="hostgains" className="h-10 sm:h-12 w-auto" />
          </Link>
          <Link
            to="/"
            className="p-2 hover:bg-sand rounded-full transition-colors"
            aria-label="Schließen"
          >
            <X size={24} className="text-gray-500" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-xl">
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-10"
            >
              {/* Progress Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">
                    Frage {currentStep} von {TOTAL_STEPS}
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

              {/* Form Steps */}
              <div className="min-h-[320px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {renderStep()}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl border-2 border-sand-dark text-gray-600 hover:bg-sand transition-all font-medium"
                  >
                    <ArrowLeft size={20} />
                    Zurück
                  </button>
                )}

                {currentStep < TOTAL_STEPS ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className={`flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                      canProceed()
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
                    disabled={!canProceed() || isSubmitting}
                    className={`flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all ${
                      canProceed() && !isSubmitting
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
                        Absenden
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

          {/* Trust Indicators */}
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
        </div>
      </main>
    </div>
  );
};
