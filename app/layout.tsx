import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Manrope, Outfit } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-manrope',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-outfit',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#314a43',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hostgains.at'),
  title: {
    default: 'Kurzzeitvermietung Kärnten | Airbnb Management Wörthersee | hostgains',
    template: '%s | hostgains',
  },
  description: 'Professionelles Ferienwohnung-Management in Kärnten. hostgains steigert deine Auslastung um bis zu 28% – ohne Aufwand. Full-Service für Airbnb & Booking.com.',
  authors: [{ name: 'hostgains GmbH' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://www.hostgains.at',
    languages: {
      'de-AT': 'https://www.hostgains.at',
      'de': 'https://www.hostgains.at',
      'x-default': 'https://www.hostgains.at',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    url: 'https://www.hostgains.at',
    siteName: 'hostgains',
    title: 'hostgains | Professionelle Kurzzeitvermietung am Wörthersee',
    description: 'Verdiene bis zu 28% mehr mit deiner Ferienwohnung. Full-Service Management für Airbnb, Booking.com & mehr. Lokales Team aus Klagenfurt. Kostenlose Analyse!',
    images: [
      {
        url: '/hero-woerthersee.jpg',
        width: 1200,
        height: 630,
        alt: 'hostgains - Kurzzeitvermietung Klagenfurt am Wörthersee - Luxuriöse Ferienwohnung mit Seeblick',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hostgains | Kurzzeitvermietung Klagenfurt & Wörthersee',
    description: 'Professionelles Ferienwohnung-Management. Bis zu 27% mehr Umsatz. Full-Service für Airbnb & Booking.com. Lokales Team aus Klagenfurt.',
    images: ['/hero-woerthersee.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'geo.region': 'AT-2',
    'geo.placename': 'Klagenfurt am Wörthersee',
    'geo.position': '46.6364;14.3122',
    'ICBM': '46.6364, 14.3122',
  },
};

// Organization Schema
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.hostgains.at/#organization',
  name: 'hostgains',
  legalName: 'hostgains',
  alternateName: ['hostgains Kurzzeitvermietung', 'hostgains Ferienwohnung Management'],
  description: 'hostgains ist ein spezialisierter Dienstleister für Kurzzeitvermietung und Ferienwohnung-Management in Kärnten. Das Unternehmen übernimmt die vollständige Verwaltung von Ferienimmobilien auf Plattformen wie Airbnb und Booking.com – inklusive Gästebetreuung, Reinigung und dynamischer Preisgestaltung.',
  url: 'https://www.hostgains.at',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.hostgains.at/Logo echt.png',
    width: 200,
    height: 60,
  },
  image: 'https://www.hostgains.at/hero-woerthersee.jpg',
  telephone: '+43-677-62180829',
  email: 'info@hostgains.at',
  foundingDate: '2024',
  foundingLocation: {
    '@type': 'Place',
    name: 'Klagenfurt am Wörthersee, Kärnten, Österreich',
  },
  founder: [
    {
      '@type': 'Person',
      name: 'Mario Brenner',
      jobTitle: 'Mitgründer & Geschäftsführer',
    },
    {
      '@type': 'Person',
      name: 'Julian Ograjensek',
      jobTitle: 'Mitgründer & Geschäftsführer',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Drautalstraße 48',
    addressLocality: 'Klagenfurt am Wörthersee',
    addressRegion: 'Kärnten',
    postalCode: '9061',
    addressCountry: 'AT',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Klagenfurt am Wörthersee',
      containedInPlace: { '@type': 'State', name: 'Kärnten' },
    },
    { '@type': 'City', name: 'Velden am Wörthersee' },
    { '@type': 'City', name: 'Pörtschach am Wörthersee' },
    { '@type': 'City', name: 'Maria Wörth' },
    {
      '@type': 'State',
      name: 'Kärnten',
      containedInPlace: { '@type': 'Country', name: 'Österreich' },
    },
  ],
  knowsAbout: [
    'Kurzzeitvermietung',
    'Ferienwohnung Management',
    'Airbnb Management',
    'Booking.com Verwaltung',
    'Dynamic Pricing',
    'Channel Manager',
    'Vacation Rental Management',
    'Property Management',
    'Gästebetreuung',
    'Ferienimmobilien Österreich',
  ],
  sameAs: [
    'https://www.instagram.com/hostgains',
    'https://www.facebook.com/hostgains.at',
    'https://www.linkedin.com/company/hostgains',
  ],
};

// LocalBusiness Schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.hostgains.at/#localbusiness',
  name: 'hostgains - Kurzzeitvermietung Management Kärnten',
  alternateName: 'hostgains Ferienwohnung Service',
  description: 'Kurzzeitvermietung-Management ist die professionelle Verwaltung von Ferienwohnungen auf Buchungsplattformen. hostgains bietet Full-Service für Eigentümer in Kärnten: Von der Inseratserstellung über dynamisches Pricing bis zur 24/7 Gästebetreuung.',
  url: 'https://www.hostgains.at',
  logo: 'https://www.hostgains.at/Logo echt.png',
  image: 'https://www.hostgains.at/hero-woerthersee.jpg',
  telephone: '+43-677-62180829',
  email: 'info@hostgains.at',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Drautalstraße 48',
    addressLocality: 'Klagenfurt am Wörthersee',
    addressRegion: 'Kärnten',
    postalCode: '9061',
    addressCountry: 'AT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.6364,
    longitude: 14.3122,
  },
  areaServed: [
    { '@type': 'City', name: 'Klagenfurt am Wörthersee' },
    { '@type': 'City', name: 'Velden am Wörthersee' },
    { '@type': 'City', name: 'Pörtschach am Wörthersee' },
    { '@type': 'City', name: 'Maria Wörth' },
    { '@type': 'City', name: 'Krumpendorf' },
    { '@type': 'State', name: 'Kärnten' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Kurzzeitvermietung Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Airbnb Management Kärnten',
          description: 'Vollständige Verwaltung deines Airbnb-Inserats inklusive Optimierung, Preisgestaltung und Gästebetreuung',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Booking.com Verwaltung',
          description: 'Professionelles Listing-Management auf Booking.com mit Kalender-Synchronisation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dynamisches Pricing',
          description: 'KI-gestützte Preisoptimierung basierend auf Nachfrage, Saison und lokalen Events',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24/7 Gästebetreuung',
          description: 'Rund-um-die-Uhr Kommunikation mit Gästen in Deutsch und Englisch',
        },
      },
    ],
  },
  priceRange: 'Erfolgsbasiert',
  paymentAccepted: 'Banküberweisung',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
    description: '24/7 Gästebetreuung',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de-AT">
      <head>
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${manrope.variable} ${outfit.variable} font-sans bg-sand-light text-gray-900 antialiased selection:bg-hostgains selection:text-white`}>
        {/* Skip Navigation Link for Accessibility */}
        <a href="#main-content" className="skip-link">
          Zum Hauptinhalt springen
        </a>

        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
