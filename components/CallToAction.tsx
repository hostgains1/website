import React, { useEffect } from 'react';
import { Section } from './Section';
import { CheckCircle } from 'lucide-react';

export const CallToAction: React.FC = () => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Calendly event listener for webhook
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        // Send data to Make.com webhook
        fetch('https://hook.eu1.make.com/3zxqiaao8xwkumfuprnfymh92p9rd82l', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            event: e.data.event,
            payload: e.data.payload,
            timestamp: new Date().toISOString(),
          }),
        }).catch((error) => {
          console.error('Webhook error:', error);
        });
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, []);

  const benefits = [
    { text: "Kostenlos & unverbindlich", highlight: false },
    { text: "Erste Einschätzung deiner Ferienwohnung", highlight: false },
    { text: "Klare Antworten statt Verkaufsgespräch", highlight: false }
  ];

  return (
    <Section
      id="calendly"
      className="bg-sand-light py-10 sm:py-16 md:py-24"
      aria-labelledby="cta-heading"
    >
      <article className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-xl sm:rounded-2xl md:rounded-[2rem] border border-sand-dark p-4 sm:p-6 md:p-12 shadow-xl shadow-sand/50 flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 items-start">

          {/* Text Side */}
          <div className="w-full lg:w-2/5 text-left">
            <h2
              id="cta-heading"
              className="font-display text-[1.5rem] sm:text-2xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-5 md:mb-6 leading-tight"
            >
              Schluss mit Leerstand. <br/>
              <span className="text-hostgains-light">Starte jetzt durch.</span>
            </h2>
            <p className="text-sm text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              Wähle direkt einen Termin für deine kostenlose Erstberatung. Wir lernen deine Ferienwohnung kennen und klären, ob hostgains dich unterstützen kann.
            </p>
            <ul className="space-y-2 sm:space-y-3 hidden sm:block" role="list" aria-label="Vorteile der kostenlosen Potenzialanalyse">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="text-hostgains w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" aria-hidden="true" />
                  <span className={`text-xs sm:text-sm ${benefit.highlight ? 'text-gray-900 font-medium' : 'text-gray-700'}`}>
                    {benefit.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Calendly Widget Side */}
          <div className="w-full lg:w-3/5 bg-sand-light rounded-lg sm:rounded-xl md:rounded-2xl shadow-sm border border-sand-dark overflow-hidden">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/hostgains/potentialanalyse?hide_gdpr_banner=1&primary_color=314A43"
              style={{ minWidth: '280px', height: '550px' }}
            />
          </div>

        </div>
      </article>
    </Section>
  );
};
