'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Platform data for easier management
const platforms = [
  {
    name: 'Airbnb',
    type: 'svg',
    svg: (
      <svg viewBox="0 0 448 512" className="w-8 h-8 sm:w-10 sm:h-10" fill="#FF5A5F">
        <path d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"/>
      </svg>
    )
  },
  {
    name: 'Booking.com',
    type: 'text',
    text: 'Booking.com',
    color: '#003580'
  },
  {
    name: 'e-domizil',
    type: 'image',
    src: '/35269.png'
  },
  {
    name: 'Austria Booking',
    type: 'image',
    src: '/austriabooking.at-Logo-V2-dark.png.webp'
  },
  {
    name: 'Feratel',
    type: 'image',
    src: '/logo-feratel-grau_60a668ef31c572092708e5ae_1623329937.png'
  }
];

export const Partners: React.FC = () => {
  return (
    <section
      className="bg-white py-10 sm:py-14 relative overflow-hidden"
      aria-label="Unsere Plattform-Partner"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, #314A43 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-6 sm:gap-8"
        >
          {/* Title with accent line */}
          <div className="flex items-center justify-center gap-4 text-center w-full">
            <div className="hidden sm:block w-12 h-[2px] bg-gradient-to-r from-transparent to-hostgains/30" />
            <p className="text-base sm:text-lg text-hostgains font-semibold text-center mx-auto">
              Deine Wohnung auf allen Plattformen
            </p>
            <div className="hidden sm:block w-12 h-[2px] bg-gradient-to-l from-transparent to-hostgains/30" />
          </div>

          {/* Animated Marquee */}
          <div className="w-full overflow-hidden relative">
            {/* Gradient Fade Left */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            {/* Gradient Fade Right */}
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex animate-marquee hover:[animation-play-state:paused]">
              {/* First set of logos */}
              {platforms.map((platform, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-4 sm:mx-8"
                >
                  <div className="group flex items-center justify-center h-16 sm:h-20 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-gray-50/80 hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
                    {platform.type === 'svg' ? (
                      <div className="group-hover:scale-110 transition-transform">
                        {platform.svg}
                      </div>
                    ) : platform.type === 'text' ? (
                      <span
                        className="font-bold text-lg sm:text-xl tracking-tight whitespace-nowrap group-hover:scale-105 transition-transform"
                        style={{ color: platform.color }}
                      >
                        {platform.text}
                      </span>
                    ) : (
                      <Image
                        src={platform.src!}
                        alt={platform.name}
                        width={140}
                        height={50}
                        className="h-8 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform"
                      />
                    )}
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {platforms.map((platform, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-4 sm:mx-8"
                >
                  <div className="group flex items-center justify-center h-16 sm:h-20 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-gray-50/80 hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
                    {platform.type === 'svg' ? (
                      <div className="group-hover:scale-110 transition-transform">
                        {platform.svg}
                      </div>
                    ) : platform.type === 'text' ? (
                      <span
                        className="font-bold text-lg sm:text-xl tracking-tight whitespace-nowrap group-hover:scale-105 transition-transform"
                        style={{ color: platform.color }}
                      >
                        {platform.text}
                      </span>
                    ) : (
                      <Image
                        src={platform.src!}
                        alt={platform.name}
                        width={140}
                        height={50}
                        className="h-8 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
