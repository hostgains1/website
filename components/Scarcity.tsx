import React from 'react';
import { AlertCircle } from 'lucide-react';

export const Scarcity: React.FC = () => {
  return (
    <div className="bg-hostgains-dark text-white py-4 border-y border-white/10">
      <div className="container mx-auto px-6 flex justify-center items-center gap-3">
        <AlertCircle className="text-sand animate-pulse" size={20} />
        <p className="font-medium text-sm md:text-base text-center">
          <span className="text-sand font-bold">Limitierte Kapazität:</span> Um unsere Qualität zu halten, nehmen wir aktuell nur noch 3 neue Objekte pro Monat auf.
        </p>
      </div>
    </div>
  );
};