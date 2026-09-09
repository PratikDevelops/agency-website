'use client';

import React from 'react';
import { useReveal } from '@/hooks/useReveal';

interface CaseApproachProps {
  steps: Array<{ heading: string; body: string }>;
}

export default function CaseApproach({ steps }: CaseApproachProps) {
  const ref = useReveal();

  if (!steps.length) return null;

  return (
    <section className="section-canvas section-spacing">
      <div className="container-page">
        <div ref={ref} className="reveal mb-14">
          <p className="eyebrow mb-4">The Approach</p>
          <h2 className="text-heading-lg text-graphite max-w-xl">
            The strategy and reasoning behind the work.
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-mist border-t border-mist">
          {steps.map((step, i) => (
            <div
              key={step.heading}
              className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
            >
              <span
                className="font-inter text-ember-orange md:col-span-2"
                style={{ fontSize: '12px', letterSpacing: '0.1em', fontWeight: 600 }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3
                className="font-polysans text-graphite md:col-span-5"
                style={{ fontSize: 'clamp(20px, 2vw, 26px)', letterSpacing: '-0.02em' }}
              >
                {step.heading}
              </h3>
              <p
                className="font-inter text-steel leading-relaxed md:col-span-5"
                style={{ fontSize: '15px' }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
