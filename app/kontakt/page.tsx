import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, Phone, MessageCircle, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kontakt | hostgains Kurzzeitvermietung Kärnten',
  description: 'Kontaktiere das hostgains Team. Wir sind für dich da — per E-Mail, Telefon oder WhatsApp. Für eine Potenzialanalyse deiner Ferienwohnung nutze unser Analyseformular.',
  alternates: {
    canonical: 'https://www.hostgains.at/kontakt',
  },
  openGraph: {
    title: 'Kontakt | hostgains',
    description: 'Kontaktiere das hostgains Team für Fragen rund um Kurzzeitvermietung in Kärnten.',
    url: 'https://www.hostgains.at/kontakt',
    type: 'website',
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
      item: 'https://www.hostgains.at/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Kontakt',
      item: 'https://www.hostgains.at/kontakt',
    },
  ],
};

const team = [
  {
    name: 'Mario Brenner',
    specialty: 'Marketing',
    image: '/Mario-original.png',
    linkedin: 'https://www.linkedin.com/in/mariobrenner',
  },
  {
    name: 'Julian Ograjensek',
    specialty: 'Management',
    image: '/Julian-original.png',
    linkedin: 'https://www.linkedin.com/in/julian-ograjensek-171721287',
  },
];

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-sand-light">
        <Navbar />

        {/* Hero Section */}
        <section className="bg-hostgains pt-28 pb-16 sm:pt-36 sm:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <nav className="text-sm text-white/60 mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li>/</li>
                <li className="text-white">Kontakt</li>
              </ol>
            </nav>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Kontakt
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mb-4">
              Du hast Fragen zur Kurzzeitvermietung oder möchtest wissen, ob deine Ferienwohnung für unser Management geeignet ist?
            </p>
            <p className="text-lg text-white/70 max-w-2xl">
              Wir sind für dich da – per E-Mail, Telefon oder WhatsApp. Für eine unverbindliche Potenzialanalyse nutze unser Analyseformular.
            </p>
          </div>
        </section>

        <main id="main-content">
          {/* Team & Contact Section */}
          <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">

                {/* Team */}
                <div className="text-center mb-10 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">
                    Deine Ansprechpartner
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Lokales Team aus Kärnten. Persönlicher Kontakt. Immer erreichbar.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-20 lg:gap-28 mb-16 sm:mb-20">
                  {team.map((member, i) => (
                    <div key={i} className="text-center group">
                      <div className="relative mb-6 w-fit mx-auto">
                        <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-sand shadow-xl group-hover:shadow-2xl transition-shadow relative">
                          <Image
                            src={member.image}
                            alt={`${member.name} bei hostgains`}
                            fill
                            sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                            className="object-cover"
                          />
                        </div>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute bottom-2 right-2 w-12 h-12 bg-hostgains rounded-full flex items-center justify-center shadow-lg text-white hover:scale-110 transition-transform"
                          aria-label={`${member.name} auf LinkedIn`}
                        >
                          <Linkedin size={22} />
                        </a>
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-hostgains text-base sm:text-lg font-medium mt-1">
                        {member.specialty}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Contact Options */}
                <div className="grid sm:grid-cols-3 gap-6 mb-16">
                  <a
                    href="mailto:info@hostgains.at"
                    className="bg-sand-light rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group"
                  >
                    <div className="w-14 h-14 rounded-full bg-hostgains/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-hostgains/20 transition-colors">
                      <Mail className="w-6 h-6 text-hostgains" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">E-Mail</h3>
                    <p className="text-hostgains font-medium">info@hostgains.at</p>
                  </a>

                  <a
                    href="tel:+4367762180829"
                    className="bg-sand-light rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group"
                  >
                    <div className="w-14 h-14 rounded-full bg-hostgains/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-hostgains/20 transition-colors">
                      <Phone className="w-6 h-6 text-hostgains" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                    <p className="text-hostgains font-medium">+43 677 62180829</p>
                  </a>

                  <a
                    href="https://wa.me/4367762180829"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-sand-light rounded-2xl p-6 text-center hover:shadow-lg transition-shadow group"
                  >
                    <div className="w-14 h-14 rounded-full bg-hostgains/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-hostgains/20 transition-colors">
                      <MessageCircle className="w-6 h-6 text-hostgains" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-hostgains font-medium">Direkt schreiben</p>
                  </a>
                </div>

                {/* CTA to Analyse */}
                <div className="bg-hostgains rounded-2xl p-8 sm:p-12 text-center text-white">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-display">
                    Potenzialanalyse für deine Ferienwohnung
                  </h2>
                  <p className="text-white/80 mb-8 max-w-xl mx-auto">
                    Du möchtest wissen, was mit deiner Ferienwohnung möglich ist?
                    Nutze unsere kostenlose Potenzialanalyse — unverbindlich und ohne Verpflichtung.
                  </p>
                  <Link
                    href="/analyse"
                    className="inline-flex items-center gap-2 bg-sand hover:bg-white text-hostgains font-bold px-8 py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg"
                  >
                    Kostenlose Analyse anfordern
                    <ArrowRight size={20} />
                  </Link>
                </div>

              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
