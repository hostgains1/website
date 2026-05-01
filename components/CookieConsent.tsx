'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

const CONSENT_KEY = 'hg_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    } else {
      setAnalyticsAllowed(stored === 'accepted');
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setAnalyticsAllowed(true);
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  }

  return (
    <>
      {analyticsAllowed && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-BCRZ04MX0E"
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BCRZ04MX0E', { anonymize_ip: true });
          `}</Script>
        </>
      )}

      {visible && (
        <div
          role="dialog"
          aria-label="Cookie-Einstellungen"
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-sand-dark shadow-lg"
        >
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-gray-700 flex-1">
              Wir verwenden Google Analytics, um zu verstehen, wie Besucher unsere Website nutzen.
              Die Daten werden anonymisiert erhoben. Mehr dazu in unserer{' '}
              <a
                href="/datenschutzrichtlinien"
                className="underline text-hostgains hover:text-hostgains-dark"
              >
                Datenschutzerklärung
              </a>
              .
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={decline}
                className="px-4 py-2 text-sm rounded-md border border-gray-300 text-gray-600 hover:bg-sand-light transition-colors"
              >
                Ablehnen
              </button>
              <button
                onClick={accept}
                className="px-4 py-2 text-sm rounded-md bg-hostgains text-white hover:bg-hostgains-dark transition-colors"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
