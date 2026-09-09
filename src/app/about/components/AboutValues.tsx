'use client';

import React from 'react';
import { useReveal } from '@/hooks/useReveal';

const values = [
  {
    number: '01',
    title: 'Think Clearly',
    body: 'Most projects are not solved by more complexity. We start by defining the real problem, writing it down, and letting the clearest path win - even when that path is less work than we could have billed.',
  },
  {
    number: '02',
    title: 'Build Properly',
    body: 'Craft matters at every layer: a brand that holds up at 30mm, a page that loads in under a second, copy that says the right thing. Good work compounds; shortcuts get rebuilt.',
  },
  {
    number: '03',
    title: 'Stay Accountable',
    body: 'We are measured by your outcomes, not our deliverables. Every engagement has defined goals, honest reporting and a team that owns the result - including when something is not working.',
  },
];

export default function AboutValues() {
  const ref = useReveal();

  return (
    <section className="section-ash section-spacing" aria-label="Our Principles">
      <div className="container-page">
        <div ref={ref} className="reveal mb-14">
          <p className="eyebrow mb-4">How We Work</p>
          <h2 className="text-heading-lg text-graphite max-w-xl">
            Three principles behind every project.
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-mist border-t border-mist">
          {values.map((value) => (
            <div
              key={value.title}
              className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
            >
              <span
                className="font-inter text-ember-orange md:col-span-2"
                style={{ fontSize: '12px', letterSpacing: '0.1em', fontWeight: 600 }}
              >
                {value.number}
              </span>
              <h3
                className="font-polysans text-graphite md:col-span-4"
                style={{ fontSize: 'clamp(20px, 2vw, 26px)', letterSpacing: '-0.02em' }}
              >
                {value.title}
              </h3>
              <p
                className="font-inter text-steel leading-relaxed md:col-span-6"
                style={{ fontSize: '15px' }}
              >
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
