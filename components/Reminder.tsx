import React from 'react';

export const Reminder: React.FC = () => {
  return (
    <div className="bg-sand-light py-16 border-b border-sand-dark">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <p className="font-serif text-2xl italic text-gray-700 leading-relaxed">
          "Stell dir vor: Du öffnest dein Handy, siehst neue Buchungen, und legst es lächelnd wieder weg. 
          Kein Stress. Keine Anrufe. Einfach nur Returns. Das ist das Ziel."
        </p>
        <div className="mt-6">
          <span className="font-bold text-hostgains uppercase tracking-wide text-sm">Das hostgains Versprechen</span>
        </div>
      </div>
    </div>
  );
};