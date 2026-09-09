'use client';

import React from 'react';
import { useReveal } from '@/hooks/useReveal';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  steps: ProcessStep[];
}

export default function ServiceProcess({ steps }: ServiceProcessProps) {
  const ref = useReveal();

  return (
    <section className="section-canvas section-spacing">
      <div className="container-page">
        <div ref={ref} className="reveal mb-14">
          <p className="eyebrow mb-4">THE PROCESS</p>
          <h2 className="text-heading-lg text-graphite max-w-xl">
            How we take your project from brief to launch.
          </h2>
        </div>

        {/* Desktop: horizontal step row */}
        <div className="hidden md:grid grid-cols-6 gap-0 border-t border-mist">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`pt-8 pr-6 reveal ${i < steps.length - 1 ? 'border-r border-mist' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span
                className="block font-inter text-ember-orange mb-4"
                style={{ fontSize: '11px', letterSpacing: '0.1em', fontWeight: 600 }}
              >
                {s.step}
              </span>
              <h3
                className="font-polysans text-graphite mb-3"
                style={{ fontSize: '17px', letterSpacing: '-0.02em' }}
              >
                {s.title}
              </h3>
              <p className="text-steel font-inter leading-relaxed" style={{ fontSize: '13px' }}>
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden flex flex-col divide-y divide-mist border-t border-mist">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="py-7 flex gap-6 reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span
                className="flex-shrink-0 font-inter text-ember-orange pt-1"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  minWidth: '28px',
                }}
              >
                {s.step}
              </span>
              <div>
                <h3
                  className="font-polysans text-graphite mb-2"
                  style={{ fontSize: '17px', letterSpacing: '-0.02em' }}
                >
                  {s.title}
                </h3>
                <p className="text-steel font-inter leading-relaxed" style={{ fontSize: '14px' }}>
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
