'use client';

import React from 'react';
import { useReveal } from '@/hooks/useReveal';

const assurances = [
  {
    title: 'Fixed quote',
    description:
      'The number we scope is the number we work to. No surprise invoices, no hourly meter running in the background.',
  },
  {
    title: 'Named project team',
    description:
      'One lead, one shared timeline and reporting you can track - you always know who is doing what and when it ships.',
  },
  {
    title: 'Post-launch window',
    description:
      '30-60 days of support included on every package, with monitoring watching the site from launch day.',
  },
];

export default function PricingAssurance() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="bg-graphite section-spacing noise-overlay relative overflow-hidden"
    >
      <div className="container-page">
        <div className="reveal">
          <p className="eyebrow mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>
            EVERY ENGAGEMENT
          </p>
          <h2
            className="font-polysans text-white max-w-xl"
            style={{
              fontSize: 'clamp(28px, 3vw, 40px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            What you get on every project.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {assurances.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <h3
                  className="font-polysans text-ember-orange"
                  style={{ fontSize: '17px', letterSpacing: '-0.02em' }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-inter leading-relaxed"
                  style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)' }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
