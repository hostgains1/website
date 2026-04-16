'use client';

import dynamic from 'next/dynamic';
import { Hero } from '@/components/Hero';
import { Partners } from '@/components/Partners';
import { MarketStats } from '@/components/MarketStats';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

// Lazy load below-the-fold components
const HowItWorks = dynamic(() => import('@/components/HowItWorks').then(mod => ({ default: mod.HowItWorks })), { ssr: true });
const Credentials = dynamic(() => import('@/components/Credentials').then(mod => ({ default: mod.Credentials })), { ssr: true });
const SocialProof = dynamic(() => import('@/components/SocialProof').then(mod => ({ default: mod.SocialProof })), { ssr: true });
const FAQ = dynamic(() => import('@/components/FAQ').then(mod => ({ default: mod.FAQ })), { ssr: true });
const LatestArticles = dynamic(() => import('@/components/LatestArticles').then(mod => ({ default: mod.LatestArticles })), { ssr: true });
const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton').then(mod => ({ default: mod.WhatsAppButton })), { ssr: false });

export function HomePageClient() {
  return (
    <div className="font-sans text-gray-900 bg-white overflow-x-hidden">

      <Navbar />

      {/* Main Content Area with semantic HTML */}
      <main id="main-content" role="main">
        {/* Hero Section - Primary landing area */}
        <Hero />

        {/* Partners Section - Platform logos */}
        <Partners />

        {/* Market Stats, Challenges & Solution Section - Kärnten statistics, pain points and our services */}
        <MarketStats />

        {/* How It Works Section - Process steps */}
        <HowItWorks />

        {/* Credentials Section - Services and expertise */}
        <Credentials />

        {/* Case Studies Section */}
        <SocialProof />

        {/* FAQ Section - Common questions */}
        <FAQ />

        {/* Latest Articles Section */}
        <LatestArticles />
      </main>

      {/* Footer with contact and legal info */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
