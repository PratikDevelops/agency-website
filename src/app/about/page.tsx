import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutHero from '@/app/about/components/AboutHero';
import AboutStory from '@/app/about/components/AboutStory';
import AboutValues from '@/app/about/components/AboutValues';
import AboutTeam from '@/app/about/components/AboutTeam';
import FinalCTA from '@/app/components/FinalCTA';

export const metadata: Metadata = {
  title: 'About - AgencyStudio',
  description:
    'AgencyStudio is a digital product studio with strategy, design, technology and growth in one team. Meet the people behind the work.',
  openGraph: {
    title: 'About - AgencyStudio',
    description: 'We bring strategy, design and technology into one team.',
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutTeam />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
