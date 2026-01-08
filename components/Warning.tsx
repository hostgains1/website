import React from 'react';

export const Warning: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <div className="inline-block border border-red-500/50 text-red-400 px-4 py-1 rounded mb-4 text-sm font-bold uppercase">
          Achtung
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Warte nicht zu lange.
        </h3>
        <p className="text-lg">
          Jeder Tag, an dem deine Wohnung leer steht oder schlecht gemanagt wird, kostet dich bares Geld. 
          Die Konkurrenz in Kärnten schläft nicht. Sichere dir jetzt deinen Wettbewerbsvorteil.
        </p>
      </div>
    </div>
  );
};