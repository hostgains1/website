import React from 'react';
import { Section } from './Section';
import { Camera, TrendingUp, Sparkles, Globe, MessageSquare } from 'lucide-react';

const benefits = [
  {
    title: "Listing-Optimierung",
    desc: "Airbnb-Texte mit psychologischer Wirkung, professionelle Fotos & SEO. Wir sorgen dafür, dass dein Inserat geklickt wird.",
    icon: Camera
  },
  {
    title: "Dynamisches Pricing",
    desc: "Schluss mit Bauchgefühl. Wir analysieren den Markt in Echtzeit und passen Preise täglich an – für maximalen Umsatz.",
    icon: TrendingUp
  },
  {
    title: "Reinigung & Pflege",
    desc: "Koordination, Qualitätskontrolle und Instandhaltung. Deine Wohnung bleibt dauerhaft in Top-Zustand.",
    icon: Sparkles
  },
  {
    title: "Multiplattform",
    desc: "Nicht nur Airbnb. Wir listen dich auf Booking.com und weiteren relevanten Portalen für maximale Sichtbarkeit.",
    icon: Globe
  },
  {
    title: "24/7 Gäste-Support",
    desc: "Vom Check-in bis zur Abreise: Wir sind der Concierge für deine Gäste. Freundlich, schnell, professionell.",
    icon: MessageSquare
  }
];

export const Benefits: React.FC = () => {
  return (
    <Section diagonal="top" className="bg-hostgains relative text-white pb-40 md:pb-48 pt-32 md:pt-48">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-sand font-bold uppercase tracking-widest mb-4">Leistungen</h2>
          <h3 className="font-display text-4xl font-bold mb-6">Unser Full-Service Paket</h3>
          <p className="text-xl text-gray-300 max-w-2xl">
            Du lehnst dich zurück. Wir erledigen den Rest. Hier ist, was du bekommst:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="glass p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
              <div className="w-12 h-12 bg-sand/20 rounded-lg flex items-center justify-center mb-6 text-sand">
                <b.icon size={24} />
              </div>
              <h4 className="text-2xl font-display font-bold mb-4">{b.title}</h4>
              <p className="text-gray-300 leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
          
          {/* Last card is a summary */}
          <div className="bg-white text-hostgains p-8 rounded-2xl flex flex-col justify-center items-start">
             <h4 className="text-2xl font-display font-bold mb-4">Und vieles mehr...</h4>
             <p className="text-gray-600 mb-6">
               Individuelle Reporting, Steuer-Vorbereitung, Schlüsselübergabe.
             </p>
             <button className="text-hostgains font-bold underline decoration-2 underline-offset-4 hover:text-hostgains-light">
               Alle Details im Gespräch →
             </button>
          </div>
        </div>
      </div>
    </Section>
  );
};