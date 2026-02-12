import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Credentials } from '@/components/Credentials';
import { Solution } from '@/components/Solution';
import { HowItWorks } from '@/components/HowItWorks';
import { Offer } from '@/components/Offer';
import { FAQ } from '@/components/FAQ';
import { SocialProof } from '@/components/SocialProof';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import Link from 'next/link';
import { ArrowRight, Check, TrendingUp, Users, Clock, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Airbnb Management in Kärnten | Professionelle Verwaltung',
  description: 'Professionelles Airbnb Management für Ferienwohnungen in Kärnten. Bis zu 28% mehr Umsatz durch Listing-Optimierung, dynamisches Pricing & 24/7 Gästeservice.',
  alternates: {
    canonical: 'https://hostgains.at/airbnb-management',
  },
  openGraph: {
    title: 'Airbnb Management Kärnten | hostgains',
    description: 'Maximiere deine Airbnb-Einnahmen am Wörthersee. Full-Service Management ohne Fixkosten.',
    url: 'https://hostgains.at/airbnb-management',
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Airbnb Management Kärnten',
  serviceType: 'Airbnb Property Management',
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
  areaServed: [
    { '@type': 'City', name: 'Klagenfurt am Wörthersee' },
    { '@type': 'City', name: 'Velden am Wörthersee' },
    { '@type': 'City', name: 'Pörtschach am Wörthersee' },
    { '@type': 'State', name: 'Kärnten' },
  ],
  description: 'Professionelles Airbnb Management für Ferienwohnungen in Kärnten. Listing-Optimierung, dynamisches Pricing, 24/7 Gästebetreuung.',
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
      name: 'Airbnb Management',
      item: 'https://hostgains.at/airbnb-management',
    },
  ],
};

const benefits = [
  {
    icon: TrendingUp,
    title: 'Bis zu 28% mehr Umsatz',
    description: 'Durch professionelle Optimierung und dynamisches Pricing',
  },
  {
    icon: Users,
    title: '24/7 Gästebetreuung',
    description: 'Schnelle Antworten in Deutsch und Englisch, rund um die Uhr',
  },
  {
    icon: Clock,
    title: 'Null Aufwand für dich',
    description: 'Wir kümmern uns um alles – von der Buchung bis zur Reinigung',
  },
  {
    icon: Shield,
    title: 'Kein Risiko',
    description: '100% performance-basiert, keine Fixkosten oder Einrichtungsgebühren',
  },
];

export default function AirbnbManagementPage() {
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
        <section className="bg-hostgains pt-28 pb-16 sm:pt-36 sm:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <nav className="text-sm text-white/60 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li>/</li>
                <li className="text-white">Airbnb Management</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-display leading-tight">
                Airbnb Management <br />
                <span className="text-sand">in Kärnten</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl">
                <strong>hostgains</strong> ist dein lokaler Partner für professionelles Airbnb-Management
                am Wörthersee. Wir maximieren deine Einnahmen – du lehnst dich zurück.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/analyse"
                  className="inline-flex items-center justify-center gap-2 bg-sand hover:bg-sand-light text-hostgains font-bold px-8 py-4 rounded-xl transition-all hover:scale-[1.02]"
                >
                  Kostenlose Potenzialanalyse
                  <ArrowRight size={20} />
                </Link>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all"
                >
                  So funktioniert's
                </a>
              </div>

              {/* Benefits Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="w-10 h-10 rounded-lg bg-sand/20 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-sand" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-white/60 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <main id="main-content">
          {/* Solution Section */}
          <Solution />

          {/* How It Works */}
          <HowItWorks />

          {/* Credentials - Services */}
          <Credentials />

          {/* Social Proof */}
          <SocialProof />

          {/* FAQ */}
          <FAQ />

          {/* Offer */}
          <Offer />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
