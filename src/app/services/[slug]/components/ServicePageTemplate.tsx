import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceHero from './ServiceHero';
import ServiceDeliverables from './ServiceDeliverables';
import ServiceProcess from './ServiceProcess';
import ServiceRelatedWork from './ServiceRelatedWork';
import ServicePricing from './ServicePricing';
import ServiceFAQ from './ServiceFAQ';
import ServiceCTA from './ServiceCTA';
import { ServiceData } from '@/data/services';
import { projects } from '@/data/services';

interface ServicePageTemplateProps {
    service: ServiceData;
    /** Slugs of projects to feature in Related Work (2–3 recommended) */
    relatedProjectSlugs?: string[];
}

export default function ServicePageTemplate({
    service,
    relatedProjectSlugs = [],
}: ServicePageTemplateProps) {
    const relatedProjects = relatedProjectSlugs.length
        ? relatedProjectSlugs
            .map((slug) => projects.find((p) => p.slug === slug))
            .filter(Boolean) as typeof projects
        : projects.slice(0, 2);

    return (
        <>
            <Navbar />
            <main>
                <ServiceHero
                    number={service.number}
                    title={service.title}
                    description={service.description}
                    heroImage={service.heroImage}
                    heroImageAlt={service.heroImageAlt}
                    slug={service.slug}
                />

                {service.deliverables.length > 0 && (
                    <ServiceDeliverables deliverables={service.deliverables} />
                )}

                {service.process.length > 0 && (
                    <ServiceProcess steps={service.process} />
                )}

                {relatedProjects.length > 0 && (
                    <ServiceRelatedWork projects={relatedProjects} />
                )}

                {service.pricing.length > 0 && (
                    <ServicePricing packages={service.pricing} serviceTitle={service.title} />
                )}

                {service.faq.length > 0 && (
                    <ServiceFAQ items={service.faq} />
                )}

                <ServiceCTA serviceTitle={service.title} />
            </main>
            <Footer />
        </>
    );
}
