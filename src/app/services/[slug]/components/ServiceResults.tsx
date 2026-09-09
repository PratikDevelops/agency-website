'use client';

import React from 'react';
import { useReveal } from '@/hooks/useReveal';

interface ServiceResultsProps {
  results: Array<{ value: string; label: string }>;
}

export default function ServiceResults({ results }: ServiceResultsProps) {
  const ref = useReveal();

  if (!results.length) return null;

  return (
    <section className="bg-graphite section-spacing noise-overlay relative overflow-hidden">
      <div className="container-page">
        <div ref={ref} className="reveal">
          <p className="eyebrow mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>
            OUTCOMES
          </p>
          <h2
            className="font-polysans text-white"
            style={{
              fontSize: 'clamp(28px, 3vw, 40px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            Results we stand behind.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {results.map((result) => (
              <div key={result.label} className="flex flex-col gap-3">
                <p
                  className="font-polysans text-white leading-none"
                  style={{ fontSize: 'clamp(40px, 5vw, 68px)', letterSpacing: '-0.03em' }}
                >
                  {result.value}
                </p>
                <p
                  className="font-inter leading-relaxed"
                  style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)' }}
                >
                  {result.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
