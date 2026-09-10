import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PricingHero from '@/app/pricing/components/PricingHero';
import PricingPlans from '@/app/pricing/components/PricingPlans';
import PricingStack from '@/app/pricing/components/PricingStack';
import PricingAssurance from '@/app/pricing/components/PricingAssurance';
import PricingFAQ from '@/app/pricing/components/PricingFAQ';
import FinalCTA from '@/app/components/FinalCTA';

export const metadata: Metadata = {
  title: 'Pricing - AgencyStudio',
  description:
    'Clear packages, flexible scope and honest quotes. Starter, Growth and Enterprise plans plus custom stacks across web, apps, design, SEO and marketing.',
  openGraph: {
    title: 'Pricing - AgencyStudio',
    description: 'Clear packages. Flexible scope. No unnecessary complexity.',
  },
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingHero />
        <PricingPlans />
        <PricingStack />
        <PricingAssurance />
        <PricingFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
