'use client';

import React from 'react';
import Accordion from '@/components/ui/Accordion';
import SectionHeading from '@/components/ui/SectionHeading';
import { useReveal } from '@/hooks/useReveal';

const faq = [
  {
    question: 'How are your prices calculated?',
    answer:
      'Every price starts from the package, then is scoped against the actual work: number of pages or flows, integrations, content volume and the timeline you need. The quote you receive is the number we work to.',
  },
  {
    question: 'What is included in every engagement?',
    answer:
      'Strategy, design, build, quality assurance and launch support are always included. You also get a named project team, a shared timeline and reporting you can track - no black boxes.',
  },
  {
    question: 'Do the packages include ongoing support?',
    answer:
      'Every project includes a post-launch support window (30-60 days depending on package). After that, most clients move to a simple monthly retainer so the work keeps improving.',
  },
  {
    question: 'Can I combine a package with a retainer?',
    answer:
      'Yes - and most clients eventually do. A project builds the platform; a retainer keeps it growing: content, SEO, iterations, monitoring and maintenance.',
  },
];

export default function PricingFAQ() {
  const ref = useReveal();

  return (
    <section className="section-canvas section-spacing">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div ref={ref} className="reveal lg:col-span-4">
            <SectionHeading eyebrow="FAQ" headline="Questions about pricing, answered." />
          </div>
          <div className="lg:col-span-8 reveal reveal-delay-1">
            <Accordion items={faq} />
          </div>
        </div>
      </div>
    </section>
  );
}
