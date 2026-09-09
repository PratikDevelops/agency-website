import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ServiceHero from './ServiceHero';
import ServiceOverview from './ServiceOverview';
import ServiceDeliverables from './ServiceDeliverables';
import ServiceProcess from './ServiceProcess';
import ServiceRelatedWork from './ServiceRelatedWork';
import ServicePricing from './ServicePricing';
import ServiceResults from './ServiceResults';
import ServiceFAQ from './ServiceFAQ';
import ServiceCTA from './ServiceCTA';
import { ServiceData } from '@/data/services';
import { projects } from '@/data/services';

interface ServicePageTemplateProps {
  service: ServiceData;
  /** Slugs of projects to feature in Related Work (2-3 recommended) */
  relatedProjectSlugs?: string[];
}

export default function ServicePageTemplate({
  service,
  relatedProjectSlugs = [],
}: ServicePageTemplateProps) {
  // Only render Related Work when the service has genuinely mapped projects.
  // No generic fallback - an unrelated project on a service page is worse
  // than no section (the section hides itself when the list is empty).
  const relatedProjects = relatedProjectSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects;

  return (
    <>
      <Navbar />
      <main>
        <ServiceHero
          number={service.number}
          title={service.title}
          eyebrow={service.eyebrow}
          headline={service.heroHeadline}
          description={service.heroDescription}
          heroImage={service.heroImage}
          heroImageAlt={service.heroImageAlt}
        />

        <ServiceOverview intro={service.intro} whatWeDo={service.whatWeDo} />

        {service.deliverables.length > 0 && (
          <ServiceDeliverables deliverables={service.deliverables} />
        )}

        {service.process.length > 0 && <ServiceProcess steps={service.process} />}

        {relatedProjects.length > 0 && <ServiceRelatedWork projects={relatedProjects} />}

        {service.pricing.length > 0 && (
          <ServicePricing packages={service.pricing} serviceTitle={service.title} />
        )}

        <ServiceResults results={service.results} />

        {service.faq.length > 0 && <ServiceFAQ items={service.faq} />}

        <ServiceCTA serviceTitle={service.title} />
      </main>
      <Footer />
    </>
  );
}
