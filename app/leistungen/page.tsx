import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Credentials } from '@/components/Credentials';
import { Solution } from '@/components/Solution';
import { HowItWorks } from '@/components/HowItWorks';
import { Offer } from '@/components/Offer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Unsere Leistungen | Kurzzeitvermietung Full-Service',
  description: 'Full-Service Kurzzeitvermietung in Kärnten: Listing-Optimierung, dynamisches Pricing, 24/7 Gästebetreuung, Reinigungskoordination. Performance-basiert ohne Fixkosten.',
  alternates: {
    canonical: 'https://hostgains.at/leistungen',
  },
  openGraph: {
    title: 'Unsere Leistungen | hostgains Kurzzeitvermietung',
    description: 'Full-Service Ferienwohnung-Management: Von der Inseratserstellung bis zur Reinigung. Alles aus einer Hand, 100% performance-basiert.',
    url: 'https://hostgains.at/leistungen',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kurzzeitvermietung Full-Service Management',
  serviceType: 'Property Management',
  provider: {
    '@type': 'LocalBusiness',
    name: 'hostgains',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Klagenfurt am Wörthersee',
      addressRegion: 'Kärnten',
      addressCountry: 'AT',
    },
  },
  areaServed: {
    '@type': 'State',
    name: 'Kärnten',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Kurzzeitvermietung Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Listing-Optimierung',
          description: 'Professionelle Fotos und psychologisch optimierte Inseratstexte für maximale Buchungsrate',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dynamisches Pricing',
          description: 'KI-gestützte Preisoptimierung basierend auf Nachfrage, Saison und Events',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '24/7 Gästebetreuung',
          description: 'Rund-um-die-Uhr Kommunikation in Deutsch und Englisch',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Reinigungskoordination',
          description: 'Koordination lokaler Reinigungsteams mit Qualitätskontrolle',
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://hostgains.at/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Leistungen',
      item: 'https://hostgains.at/leistungen',
    },
  ],
};

export default function LeistungenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-sand-light">
        <Navbar />

        {/* Hero Section */}
        <section className="bg-hostgains pt-28 pb-16 sm:pt-36 sm:pb-24">
          <div className="container mx-auto px-4 sm:px-6">
            <nav className="text-sm text-white/60 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li>/</li>
                <li className="text-white">Leistungen</li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Unsere <span className="text-sand">Leistungen</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mb-8">
              Full-Service Kurzzeitvermietung für Ferienwohnungen in Kärnten.
              Wir übernehmen alles – du genießt die Einnahmen.
            </p>
            <Link
              href="/analyse"
              className="inline-flex items-center gap-2 bg-sand hover:bg-sand-light text-hostgains font-bold px-8 py-4 rounded-xl transition-all hover:scale-[1.02]"
            >
              Kostenlose Analyse anfordern
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>

        <main id="main-content">
          {/* Solution Section - What is Kurzzeitvermietung Management */}
          <Solution />

          {/* How It Works */}
          <HowItWorks />

          {/* Credentials - Detailed Services */}
          <Credentials />

          {/* Offer Section */}
          <Offer />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
