'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { useReveal } from '@/hooks/useReveal';

const stacks = [
  {
    name: 'Web + SEO',
    description:
      'A site built to rank from day one - design, development and organic strategy in one engagement.',
    range: 'From ₹1,20,000',
  },
  {
    name: 'Web + Automation',
    description:
      'Launch the site and automate the operations behind it - lead capture, CRM sync and reporting dashboards.',
    range: 'From ₹90,000',
  },
  {
    name: 'Branding + UI/UX',
    description:
      'Identity, product design and a design system that keeps every touchpoint consistent.',
    range: 'From ₹75,000',
  },
  {
    name: 'SEO + Content',
    description:
      'Technical foundation, editorial engine and authority building as a single compounding program.',
    range: 'From ₹35,000/mo',
  },
  {
    name: 'Paid + Social + Video',
    description:
      'Creative, channels and community in one acquisition engine for launch and beyond.',
    range: 'From ₹30,000/mo',
  },
];

export default function PricingStack() {
  const ref = useReveal();

  return (
    <section className="section-ash section-spacing">
      <div className="container-page">
        <div ref={ref} className="reveal mb-12">
          <SectionHeading
            eyebrow="Build Your Own Stack"
            headline="Combine disciplines into one engagement."
            subtext="Most projects need more than one discipline. These are common combinations - tell us your mix and we will scope it as one team, not three agencies."
          />
        </div>

        <ul className="flex flex-col border-t border-mist">
          {stacks.map((stack, i) => (
            <li key={stack.name} className="border-b border-mist">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 py-7">
                <div className="flex items-start gap-5">
                  <span
                    className="flex-shrink-0 font-inter text-slate"
                    style={{ fontSize: '11px', letterSpacing: '0.08em', fontWeight: 500 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3
                      className="font-polysans text-graphite"
                      style={{ fontSize: '19px', letterSpacing: '-0.02em' }}
                    >
                      {stack.name}
                    </h3>
                    <p
                      className="font-inter text-steel leading-relaxed mt-1"
                      style={{ fontSize: '14px' }}
                    >
                      {stack.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span
                    className="font-polysans text-graphite"
                    style={{ fontSize: '18px', letterSpacing: '-0.02em' }}
                  >
                    {stack.range}
                  </span>
                  <Button href="/contact" variant="text-arrow">
                    Discuss this stack
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 bg-graphite rounded-lg p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-lg">
            <h2
              className="font-polysans text-white"
              style={{ fontSize: 'clamp(24px, 2.5vw, 32px)', letterSpacing: '-0.02em' }}
            >
              Need something we have not listed?
            </h2>
            <p
              className="font-inter mt-3 leading-relaxed"
              style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)' }}
            >
              Tell us the problem you are solving, not the tools you want. We will come back with a
              scope and a price you can actually plan around.
            </p>
          </div>
          <Button
            href="/contact"
            variant="primary"
            className="bg-ember-orange border-ember-orange text-white hover:opacity-90 flex-shrink-0"
          >
            Request a Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
