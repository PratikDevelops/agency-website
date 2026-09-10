'use client';

import React from 'react';
import { useReveal } from '@/hooks/useReveal';

interface Deliverable {
  name: string;
  description: string;
}

interface ServiceDeliverablesProps {
  deliverables: Deliverable[];
}

export default function ServiceDeliverables({ deliverables }: ServiceDeliverablesProps) {
  const ref = useReveal();

  return (
    <section ref={ref} className="section-ash section-spacing">
      <div className="container-page">
        <div className="reveal mb-12">
          <p className="eyebrow mb-4">WHAT&apos;S INCLUDED</p>
          <h2 className="text-heading-lg text-graphite max-w-xl">
            Everything required to ship the project properly.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-mist border border-mist">
          {deliverables.map((item, i) => (
            <div
              key={item.name}
              className="bg-ash p-8 flex flex-col gap-3 reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span
                className="font-inter text-slate"
                style={{ fontSize: '11px', letterSpacing: '0.08em', fontWeight: 500 }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className="font-polysans text-graphite"
                style={{ fontSize: '18px', letterSpacing: '-0.02em' }}
              >
                {item.name}
              </h3>
              <p className="text-steel font-inter leading-relaxed" style={{ fontSize: '14px' }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
