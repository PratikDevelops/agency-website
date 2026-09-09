'use client';

import React, { useEffect, useRef } from 'react';

export default function StudioIntro() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef?.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll<HTMLElement>('.reveal').forEach((r) => r.classList.add('visible'));
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
    <section
      ref={sectionRef}
      className="section-canvas section-spacing"
      aria-label="Studio Introduction"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div className="lg:col-span-5 reveal">
            <p className="eyebrow mb-6">The Studio</p>
            <h2
              className="font-polysans text-graphite"
              style={{
                fontSize: 'clamp(32px, 3.5vw, 48px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                fontWeight: 400,
              }}
            >
              Strategy, design, technology and growth - working as one team.
            </h2>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <p
              className="reveal reveal-delay-1 font-inter text-steel leading-relaxed"
              style={{ fontSize: '17px' }}
            >
              Most businesses outgrow their digital setup before they realize it. The website that
              launched the company no longer converts. The app that worked at 1,000 users breaks at
              10,000. The marketing that drove early growth stops scaling.
            </p>
            <p
              className="reveal reveal-delay-2 font-inter text-steel leading-relaxed"
              style={{ fontSize: '17px' }}
            >
              AgencyStudio exists to solve this. We bring together every digital discipline -
              development, design, SEO, marketing, automation - under one roof, working from a
              single brief. No handoff problems. No gaps between teams. Just clear thinking and
              strong execution.
            </p>

            {/* Three principles */}
            <div className="reveal reveal-delay-3 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-mist">
              {[
                {
                  label: 'Strategy',
                  desc: 'Start with the business problem, not the deliverable.',
                },
                { label: 'Execution', desc: 'Design, development and marketing work in parallel.' },
                { label: 'Growth', desc: 'Measure, improve and keep moving after launch.' },
              ]?.map((item) => (
                <div key={item?.label}>
                  <p
                    className="font-polysans text-graphite mb-2"
                    style={{ fontSize: '15px', letterSpacing: '-0.02em', fontWeight: 400 }}
                  >
                    {item?.label}
                  </p>
                  <p className="font-inter text-slate text-sm leading-relaxed">{item?.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
