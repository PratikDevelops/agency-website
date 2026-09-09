import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WorkHero from '@/app/work/components/WorkHero';
import WorkGrid from '@/app/work/components/WorkGrid';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Work - AgencyStudio',
  description:
    'Selected web and application builds - live storefronts, service platforms and product apps. Real projects, with links to the live sites where they are public.',
  openGraph: {
    title: 'Work - AgencyStudio',
    description: 'Projects designed to solve real problems.',
    ...(projects[0]?.image
      ? { images: [{ url: projects[0].image, width: 1200, height: 630 }] }
      : {}),
  },
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <WorkHero />
        <WorkGrid />
      </main>
      <Footer />
    </>
  );
}
