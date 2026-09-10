'use client';

import React from 'react';
import { useReveal } from '@/hooks/useReveal';

interface ServiceOverviewProps {
  intro: string[];
  whatWeDo: Array<{ name: string; description: string }>;
}

export default function ServiceOverview({ intro, whatWeDo }: ServiceOverviewProps) {
  const ref = useReveal();

  if (!intro.length && !whatWeDo.length) return null;

  return (
    <section ref={ref} className="section-canvas section-spacing" style={{ paddingTop: '0' }}>
      <div className="container-page">
        <div className="reveal mb-14">
          <p className="eyebrow mb-4">OVERVIEW</p>
          <h2 className="text-heading-lg text-graphite max-w-xl">
            Start with the problem, not the deliverable.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 flex flex-col gap-6">
            {intro.map((paragraph, i) => (
              <p
                key={i}
                className={`font-inter leading-relaxed ${i === 0 ? 'text-graphite' : 'text-steel'}`}
                style={{ fontSize: i === 0 ? '18px' : '16px' }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {whatWeDo.length > 0 && (
            <div className="lg:col-span-7 flex flex-col divide-y divide-mist border-t border-mist">
              {whatWeDo.map((item, i) => (
                <div key={item.name} className="py-7 flex gap-6 items-start">
                  <span
                    className="flex-shrink-0 font-inter text-ember-orange pt-1"
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.1em',
                      fontWeight: 600,
                      minWidth: '28px',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3
                      className="font-polysans text-graphite mb-2"
                      style={{ fontSize: '17px', letterSpacing: '-0.02em' }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-steel font-inter leading-relaxed"
                      style={{ fontSize: '14px' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
