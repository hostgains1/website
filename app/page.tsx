import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Partners } from '@/components/Partners';
import { Problem } from '@/components/Problem';
import { Solution } from '@/components/Solution';
import { HowItWorks } from '@/components/HowItWorks';
import { Credentials } from '@/components/Credentials';
import { Guarantee } from '@/components/Guarantee';
import { SocialProof } from '@/components/SocialProof';
import { FAQ } from '@/components/FAQ';
import { Offer } from '@/components/Offer';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Navbar } from '@/components/Navbar';
import { HomePageClient } from './HomePageClient';

export const metadata: Metadata = {
  title: 'Kurzzeitvermietung Kärnten | Airbnb Management Wörthersee | hostgains',
  description: 'Professionelles Ferienwohnung-Management in Kärnten. hostgains steigert deine Auslastung um bis zu 28% – ohne Aufwand. Full-Service für Airbnb & Booking.com.',
  alternates: {
    canonical: 'https://hostgains.at/',
  },
  openGraph: {
    title: 'hostgains | Professionelle Kurzzeitvermietung am Wörthersee',
    description: 'Verdiene bis zu 28% mehr mit deiner Ferienwohnung. Full-Service Management für Airbnb, Booking.com & mehr. Lokales Team aus Klagenfurt.',
    url: 'https://hostgains.at/',
    type: 'website',
  },
};

// FAQ Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist Kurzzeitvermietung-Management?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kurzzeitvermietung-Management bezeichnet die professionelle Verwaltung von Ferienunterkünften auf Buchungsplattformen wie Airbnb und Booking.com. Der Service umfasst Inseratserstellung, Preisoptimierung, Gästekommunikation, Reinigungskoordination und Check-in-Management. Eigentümer können so passive Einnahmen erzielen, ohne sich selbst um die tägliche Vermietung kümmern zu müssen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet die Kurzzeitvermietung mit hostgains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'hostgains arbeitet zu 100% performance-basiert. Es gibt keine Fixkosten oder Einrichtungsgebühren. Eigentümer zahlen nur eine transparente Umsatzbeteiligung, wenn tatsächlich Buchungen generiert werden. Dieses Modell minimiert das Risiko für Eigentümer vollständig.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie steigert hostgains die Auslastung einer Ferienwohnung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'hostgains steigert die Auslastung durch einen kombinierten Ansatz: Professionelle Fotos und psychologisch optimierte Inseratstexte erhöhen die Buchungsrate. Dynamisches Pricing passt die Preise täglich an Nachfrage, Saison und lokale Events an. Multi-Plattform-Präsenz auf Airbnb, Booking.com und VRBO maximiert die Reichweite. Im Durchschnitt erzielen Kunden 28% mehr Umsatz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Regionen betreut hostgains in Österreich?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'hostgains ist spezialisiert auf Kärnten, insbesondere die Wörthersee-Region. Betreut werden Ferienwohnungen in Klagenfurt am Wörthersee, Velden, Pörtschach, Maria Wörth und Krumpendorf. Das lokale Team kennt den regionalen Markt und die saisonalen Besonderheiten der Tourismusregion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist dynamisches Pricing bei Ferienwohnungen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dynamisches Pricing ist eine automatisierte Preisstrategie, die Übernachtungspreise täglich an die aktuelle Marktsituation anpasst. Faktoren wie Nachfrage, Wochentag, Saison, lokale Events und Wettbewerbspreise werden berücksichtigt. Dadurch werden Preise in der Hochsaison maximiert und Leerstände in der Nebensaison reduziert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Muss ich mich bei hostgains noch um Gäste und Reinigung kümmern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. hostgains bietet Full-Service-Management: 24/7 Gästekommunikation in Deutsch und Englisch, professioneller Check-in/Check-out, Koordination des lokalen Reinigungsteams und Qualitätskontrolle nach jedem Gast. Eigentümer müssen sich um nichts kümmern und erhalten monatliche transparente Abrechnungen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist ein Channel Manager bei Kurzzeitvermietung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein Channel Manager ist eine Software, die Kalender und Buchungen über mehrere Plattformen synchronisiert. Wenn eine Buchung auf Airbnb eingeht, werden die Daten automatisch auf Booking.com, VRBO und anderen Portalen aktualisiert. Dies verhindert Doppelbuchungen und maximiert die Sichtbarkeit der Ferienunterkunft.',
      },
    },
  ],
};

// Service Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Kurzzeitvermietung Management',
  provider: {
    '@type': 'LocalBusiness',
    name: 'hostgains',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Klagenfurt am Wörthersee und Umgebung',
  },
  description: 'Full-Service Kurzzeitvermietung für Ferienwohnungen. Inklusive Listing-Optimierung, dynamisches Pricing, 24/7 Gästekommunikation, Reinigungskoordination und mehr.',
  offers: {
    '@type': 'Offer',
    name: 'Sorglos-Paket',
    description: '100% Performance-basiertes Full-Service Management für deine Ferienwohnung',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Keine Fixkosten - nur Umsatzbeteiligung bei Erfolg',
    },
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <HomePageClient />
    </>
  );
}
