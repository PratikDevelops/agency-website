'use client';

import React, { useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    desc: 'Understand your business goals, users and constraints before touching a design tool.',
  },
  {
    number: '02',
    title: 'Define',
    desc: 'Scope, architecture and a clear project brief so everyone knows what we are building and why.',
  },
  {
    number: '03',
    title: 'Design',
    desc: 'Visual systems, components and prototypes reviewed with stakeholders before development begins.',
  },
  {
    number: '04',
    title: 'Build',
    desc: 'Clean, tested code with regular milestone reviews and a staging environment throughout.',
  },
  {
    number: '05',
    title: 'Launch',
    desc: 'Deployment, monitoring and handover documentation so your team can operate independently.',
  },
  {
    number: '06',
    title: 'Grow',
    desc: 'Post-launch analytics, iteration and ongoing support to keep improving after you ship.',
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef?.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll<HTMLElement>('.reveal').forEach((r, i) => {
              setTimeout(() => r.classList.add('visible'), i * 80);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer?.observe(el);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-canvas section-spacing" aria-label="Our Process">
      <div className="container-page">
        <div className="reveal mb-12">
          <p className="eyebrow mb-4">Our Process</p>
          <h2 className="text-heading-lg text-graphite max-w-xl">
            From first conversation to measurable results.
          </h2>
        </div>

        {/* Desktop: horizontal */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-0 border border-mist rounded-lg overflow-hidden">
          {steps?.map((step, i) => (
            <div
              key={step?.number}
              className={`reveal p-6 flex flex-col gap-3 ${i < steps?.length - 1 ? 'border-r border-mist' : ''} section-canvas hover:bg-ash transition-colors duration-200`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="font-inter text-ember-orange text-xs font-medium">
                {step?.number}
              </span>
              <h3
                className="font-polysans text-graphite"
                style={{ fontSize: '16px', letterSpacing: '-0.02em', fontWeight: 400 }}
              >
                {step?.title}
              </h3>
              <p className="font-inter text-slate text-sm leading-relaxed">{step?.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="lg:hidden flex flex-col border border-mist rounded-lg overflow-hidden">
          {steps?.map((step, i) => (
            <div
              key={step?.number}
              className={`reveal p-6 flex gap-5 items-start ${i < steps?.length - 1 ? 'border-b border-mist' : ''} section-canvas`}
            >
              <span className="font-inter text-ember-orange text-sm font-medium flex-shrink-0 w-8">
                {step?.number}
              </span>
              <div>
                <h3
                  className="font-polysans text-graphite mb-2"
                  style={{ fontSize: '16px', letterSpacing: '-0.02em', fontWeight: 400 }}
                >
                  {step?.title}
                </h3>
                <p className="font-inter text-slate text-sm leading-relaxed">{step?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
