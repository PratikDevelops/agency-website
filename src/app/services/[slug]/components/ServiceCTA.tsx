'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { useReveal } from '@/hooks/useReveal';

interface ServiceCTAProps {
  serviceTitle: string;
}

export default function ServiceCTA({ serviceTitle }: ServiceCTAProps) {
  const ref = useReveal();

  return (
    <section className="bg-graphite section-spacing">
      <div className="container-page">
        <div
          ref={ref}
          className="reveal flex flex-col md:flex-row items-start md:items-end justify-between gap-10"
        >
          <div className="max-w-xl">
            <p className="eyebrow mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>
              START A PROJECT
            </p>
            <h2
              className="font-polysans text-white"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              Ready to build something better?
            </h2>
            <p
              className="font-inter mt-4 leading-relaxed"
              style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)' }}
            >
              Tell us about your {serviceTitle.toLowerCase()} project and we&apos;ll come back with
              a clear plan and honest timeline.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Button
              href="/contact"
              variant="primary"
              className="bg-ember-orange border-ember-orange text-white hover:opacity-90"
            >
              Start Your Project
            </Button>
            <Button
              href="/work"
              variant="ghost"
              className="border-white/30 text-white hover:bg-white hover:text-graphite"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
