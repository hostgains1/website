import type { Metadata } from 'next';
import { AnalyseDankeClient } from './AnalyseDankeClient';

export const metadata: Metadata = {
  title: 'Anfrage erhalten | hostgains',
  description: 'Vielen Dank für deine Anfrage. Wir senden dir die Einschätzung innerhalb von 24 Stunden per E-Mail.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AnalyseDankePage() {
  return <AnalyseDankeClient />;
}
