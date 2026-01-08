import React from 'react';
import { Hero } from '../components/Hero';
import { Partners } from '../components/Partners';
import { Problem } from '../components/Problem';
import { Solution } from '../components/Solution';
import { HowItWorks } from '../components/HowItWorks';
import { Credentials } from '../components/Credentials';
import { Guarantee } from '../components/Guarantee';
import { SocialProof } from '../components/SocialProof';
import { FAQ } from '../components/FAQ';
import { Offer } from '../components/Offer';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { motion, useScroll, useSpring } from 'framer-motion';

export const HomePage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="font-sans text-gray-900 bg-white overflow-x-hidden">
      {/* Scroll Progress Bar - Accessibility: aria-hidden as decorative */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-hostgains z-50 origin-left"
        style={{ scaleX }}
        aria-hidden="true"
        role="presentation"
      />

      {/* Main Content Area with semantic HTML */}
      <main id="main-content" role="main">
        {/* Hero Section - Primary landing area */}
        <Hero />

        {/* Partners Section - Platform logos */}
        <Partners />

        {/* Problem Section - Pain points identification */}
        <Problem />

        {/* Solution Section - Value proposition */}
        <Solution />

        {/* How It Works Section - Process steps */}
        <HowItWorks />

        {/* Credentials Section - Services and expertise */}
        <Credentials />

        {/* Guarantee Section - Risk reversal */}
        <Guarantee />

        {/* Social Proof Section - Testimonials */}
        <SocialProof />

        {/* FAQ Section - Common questions */}
        <FAQ />

        {/* Offer Section - Service package */}
        <Offer />
      </main>

      {/* Footer with contact and legal info */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};
