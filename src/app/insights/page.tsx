import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import InsightsHero from '@/app/insights/components/InsightsHero';
import InsightsIndex from '@/app/insights/components/InsightsIndex';

export const metadata: Metadata = {
  title: 'Insights - AgencyStudio',
  description:
    'Notes on building, designing and growing digital products - written by the AgencyStudio team from real client work.',
  openGraph: {
    title: 'Insights - AgencyStudio',
    description: 'Notes on building, designing and growing.',
  },
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main>
        <InsightsHero />
        <InsightsIndex />
      </main>
      <Footer />
    </>
  );
}
