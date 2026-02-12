import type { Metadata } from 'next';
import { AnalyseFormClient } from './AnalyseFormClient';

export const metadata: Metadata = {
  title: 'Kostenlose Potenzialanalyse | Ferienwohnung Kärnten',
  description: 'Erhalte eine kostenlose Einschätzung für deine Ferienwohnung in Kärnten. Finde heraus, wie viel mehr Umsatz du mit professionellem Management erzielen kannst.',
  alternates: {
    canonical: 'https://hostgains.at/analyse',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Kostenlose Potenzialanalyse | hostgains',
    description: 'Finde heraus, wie viel mehr Umsatz du mit deiner Ferienwohnung in Kärnten erzielen kannst. Kostenlos & unverbindlich.',
    url: 'https://hostgains.at/analyse',
    type: 'website',
  },
};

export default function AnalysePage() {
  return <AnalyseFormClient />;
}
