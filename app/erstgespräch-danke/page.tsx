import type { Metadata } from 'next';
import Script from 'next/script';
import { DankeClient } from './DankeClient';

export const metadata: Metadata = {
  title: 'Termin bestätigt | hostgains',
  description: 'Dein kostenloses Erstgespräch mit hostgains ist bestätigt.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const PIXEL_ID = '1784388989201175';

export default function ErstgespraechDankePage() {
  return (
    <>
      {/* Meta Pixel – fires PageView + Schedule on this page */}
      <Script id="meta-pixel-danke" strategy="afterInteractive">{`
        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
        fbq('init','${PIXEL_ID}');
        fbq('track','PageView');
        fbq('track','Schedule');
      `}</Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      <DankeClient />
    </>
  );
}
