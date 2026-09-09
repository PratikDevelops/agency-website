'use client';

import React, { useEffect, useRef, useState } from 'react';

const principles = [
  {
    value: '9',
    suffix: '',
    label: 'Digital Disciplines',
    sub: 'Development, design, SEO, marketing and automation under one roof',
  },
  {
    value: '1',
    suffix: '',
    label: 'Team, Brief to Launch',
    sub: 'The people who scope the work are the people who ship it',
  },
  {
    value: '0',
    suffix: '',
    label: 'Agency Handoffs',
    sub: 'No relaying, no gaps - one point of view from start to finish',
  },
];

export default function ResultsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef?.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer?.observe(el);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-ash section-spacing" aria-label="How We Operate">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-mist border border-mist rounded-lg overflow-hidden">
          {principles?.map((stat, i) => (
            <div
              key={stat?.label}
              className="section-canvas p-8 lg:p-12 flex flex-col gap-2"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * 100}ms`,
              }}
            >
              <p
                className="font-polysans text-graphite"
                style={{
                  fontSize: 'clamp(48px, 6vw, 80px)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.04em',
                  fontWeight: 400,
                }}
              >
                {stat?.value}
                <span className="text-ember-orange">{stat?.suffix}</span>
              </p>
              <p
                className="font-polysans text-graphite mt-3"
                style={{ fontSize: '16px', letterSpacing: '-0.02em', fontWeight: 400 }}
              >
                {stat?.label}
              </p>
              <p className="font-inter text-slate text-sm">{stat?.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
