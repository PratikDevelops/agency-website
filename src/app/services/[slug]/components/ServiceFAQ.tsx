'use client';

import React from 'react';
import Accordion from '@/components/ui/Accordion';
import { useReveal } from '@/hooks/useReveal';

interface ServiceFAQProps {
  items: Array<{ question: string; answer: string }>;
}

export default function ServiceFAQ({ items }: ServiceFAQProps) {
  const ref = useReveal();

  return (
    <section ref={ref} className="section-ash section-spacing">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="reveal lg:col-span-4">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-heading-lg text-graphite">Common questions answered.</h2>
          </div>
          <div className="lg:col-span-8 reveal reveal-delay-1">
            <Accordion items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}
