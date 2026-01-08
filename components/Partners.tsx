import React from 'react';
import { motion } from 'framer-motion';

export const Partners: React.FC = () => {
  return (
    <section
      className="bg-white py-12 sm:py-16 relative overflow-hidden"
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
          className="flex flex-col items-center justify-center gap-8"
        >
          {/* Title with accent line */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block w-12 h-[2px] bg-gradient-to-r from-transparent to-hostgains/30" />
            <p className="text-sm sm:text-base text-hostgains font-semibold uppercase tracking-[0.15em]">
              Deine Wohnung auf allen Plattformen
            </p>
            <div className="hidden sm:block w-12 h-[2px] bg-gradient-to-l from-transparent to-hostgains/30" />
          </div>

          {/* Platform Logos */}
          <div className="flex items-center justify-center gap-8 sm:gap-16 flex-wrap">
            {/* Airbnb Logo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group flex flex-col items-center gap-2 text-gray-400 hover:text-[#FF5A5F] transition-all duration-300"
              aria-label="Airbnb Partner"
            >
              <div className="p-4 rounded-2xl bg-gray-50 group-hover:bg-[#FF5A5F]/5 group-hover:shadow-lg transition-all duration-300">
                <svg
                  viewBox="0 0 448 512"
                  className="w-10 h-10 sm:w-12 sm:h-12"
                  fill="currentColor"
                >
                  <path d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"/>
                </svg>
              </div>
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Airbnb</span>
            </motion.div>

            {/* Booking.com Logo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group flex flex-col items-center gap-2 text-gray-400 hover:text-[#003580] transition-all duration-300"
              aria-label="Booking.com Partner"
            >
              <div className="p-4 rounded-2xl bg-gray-50 group-hover:bg-[#003580]/5 group-hover:shadow-lg transition-all duration-300">
                <span className="font-bold text-xl sm:text-2xl tracking-tight block">
                  Booking<span className="text-[#003580]">.com</span>
                </span>
              </div>
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Booking.com</span>
            </motion.div>

            {/* VRBO Logo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group flex flex-col items-center gap-2 text-gray-400 hover:text-[#3D67B2] transition-all duration-300"
              aria-label="VRBO Partner"
            >
              <div className="p-4 rounded-2xl bg-gray-50 group-hover:bg-[#3D67B2]/5 group-hover:shadow-lg transition-all duration-300">
                <span className="font-bold text-xl sm:text-2xl tracking-tight uppercase">
                  vrbo
                </span>
              </div>
              <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">VRBO</span>
            </motion.div>

            {/* + More indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="p-4 rounded-2xl bg-hostgains/5 border-2 border-dashed border-hostgains/20">
                <span className="font-bold text-xl sm:text-2xl text-hostgains">+5</span>
              </div>
              <span className="text-xs font-medium text-gray-500">weitere</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
