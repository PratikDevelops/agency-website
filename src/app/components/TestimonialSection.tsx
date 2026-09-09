'use client';

import React, { useEffect, useRef } from 'react';

const commitments = [
  {
    label: 'One team',
    body: 'Strategy, design, development and growth sit in the same room. The people who scope your project are the people who build it.',
  },
  {
    label: 'Senior hands',
    body: 'No junior bench learning on your budget. The work is done by people who have shipped it before and know what it costs to get wrong.',
  },
  {
    label: 'Evidence over claims',
    body: 'We would rather show you a live build than a flattering number. Our portfolio links to the real thing wherever it is public.',
  },
];

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef?.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll<HTMLElement>('.reveal').forEach((r, i) => {
              setTimeout(() => r.classList.add('visible'), i * 100);
            });
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
    <section ref={sectionRef} className="section-ash section-spacing" aria-label="How We Work">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="reveal mb-8">
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="text-mist">
                <path
                  d="M0 24V14.4C0 6.4 5.12 1.6 15.36 0l1.28 2.4C10.88 3.6 7.68 6.4 7.04 10.4H13.44V24H0ZM18.56 24V14.4C18.56 6.4 23.68 1.6 33.92 0l1.28 2.4C29.44 3.6 26.24 6.4 25.6 10.4H32V24H18.56Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2
              className="reveal font-polysans text-graphite mb-6"
              style={{
                fontSize: 'clamp(24px, 2.6vw, 34px)',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                fontWeight: 400,
              }}
            >
              What working with us is actually like.
            </h2>
            <p
              className="reveal font-inter text-steel leading-relaxed"
              style={{ fontSize: '16px' }}
            >
              No account managers relaying messages, no stats we cannot back up. The portfolio above
              is the proof - every project listed is real, and the builds that are public are
              linked.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="flex flex-col border-t border-mist">
              {commitments.map((item, i) => (
                <li key={item.label} className="reveal border-b border-mist">
                  <div className="flex items-baseline gap-6 py-6">
                    <span
                      className="font-inter text-slate flex-shrink-0"
                      style={{ fontSize: '11px', letterSpacing: '0.08em', fontWeight: 500 }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p
                        className="font-polysans text-graphite mb-1"
                        style={{ fontSize: '18px', letterSpacing: '-0.02em', fontWeight: 400 }}
                      >
                        {item.label}
                      </p>
                      <p className="font-inter text-steel text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
