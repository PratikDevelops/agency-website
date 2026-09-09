import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServicesHero from '@/app/services/components/ServicesHero';
import ServicesGrid from '@/app/services/components/ServicesGrid';
import ServicesCTA from '@/app/services/components/ServicesCTA';

export const metadata: Metadata = {
  title: 'Services - AgencyStudio',
  description:
    'Nine digital disciplines under one roof - web development, app development, SEO, graphic design, UI/UX, video editing, ad marketing, social media and automation.',
  openGraph: {
    title: 'Services - AgencyStudio',
    description: 'Everything you need to build, launch and grow.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
