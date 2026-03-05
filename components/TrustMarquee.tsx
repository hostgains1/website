'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, Home } from 'lucide-react';

const trustItems = [
  { icon: Phone, text: '+43 677 62180829' },
  { icon: Mail, text: 'info@hostgains.at' },
  { icon: Clock, text: '24/7 Gästebetreuung' },
  { icon: Home, text: '+20 erfolgreich verwaltete Objekte' },
];

export const TrustMarquee: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 bg-hostgains text-white overflow-hidden transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="relative flex">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-hostgains to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-hostgains to-transparent z-10" />

        {/* Scrolling content - two identical sets for seamless loop */}
        <div className="flex animate-marquee-infinite">
          {[0, 1].map((setIndex) => (
            <div key={setIndex} className="flex shrink-0">
              {trustItems.map((item, index) => (
                <div
                  key={`${setIndex}-${index}`}
                  className="flex items-center gap-3 px-12 py-3 text-base whitespace-nowrap"
                >
                  <item.icon className="w-4 h-4 text-sand" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex animate-marquee-infinite">
          {[0, 1].map((setIndex) => (
            <div key={setIndex} className="flex shrink-0">
              {trustItems.map((item, index) => (
                <div
                  key={`${setIndex}-${index}`}
                  className="flex items-center gap-3 px-12 py-3 text-base whitespace-nowrap"
                >
                  <item.icon className="w-4 h-4 text-sand" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
