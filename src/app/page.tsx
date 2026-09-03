import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/app/components/HeroSection';
import TrustStrip from '@/app/components/TrustStrip';
import StudioIntro from '@/app/components/StudioIntro';
import CapabilitiesSection from '@/app/components/CapabilitiesSection';
import FeaturedWork from '@/app/components/FeaturedWork';
import ResultsSection from '@/app/components/ResultsSection';
import ProcessSection from '@/app/components/ProcessSection';
import TestimonialSection from '@/app/components/TestimonialSection';
import PricingPreview from '@/app/components/PricingPreview';
import FAQSection from '@/app/components/FAQSection';
import FinalCTA from '@/app/components/FinalCTA';

export const metadata: Metadata = {
    title: 'AgencyStudio - We Build Digital Experiences That Move Businesses Forward',
    description: 'AgencyStudio is a digital product studio providing web development, app development, SEO, design and marketing for ambitious businesses.',
    openGraph: {
        title: 'AgencyStudio - Digital Product Studio',
        description: 'Strategy, design, technology and growth - working as one team.',
        images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
    },
};

export default function HomePage() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <TrustStrip />
                <StudioIntro />
                <CapabilitiesSection />
                <FeaturedWork />
                <ResultsSection />
                <ProcessSection />
                <TestimonialSection />
                <PricingPreview />
                <FAQSection />
                <FinalCTA />
            </main>
            <Footer />
        </>
    );
}