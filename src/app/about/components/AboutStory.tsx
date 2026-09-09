'use client';

import React from 'react';
import { useReveal } from '@/hooks/useReveal';

export default function AboutStory() {
  const labelRef = useReveal();
  const textRef = useReveal();

  return (
    <section className="section-canvas section-spacing" aria-label="Our Story">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div ref={labelRef} className="reveal lg:col-span-4">
            <p className="eyebrow mb-4">Our Story</p>
            <h2 className="text-heading-lg text-graphite max-w-xs">
              One team, from first question to post-launch growth.
            </h2>
          </div>
          <div ref={textRef} className="reveal reveal-delay-1 lg:col-span-8">
            <div className="flex flex-col gap-6">
              <p className="font-inter text-graphite leading-relaxed" style={{ fontSize: '17px' }}>
                AgencyStudio started with a simple frustration: businesses were being served by
                agencies that handed projects between departments - strategy over here, design over
                there, engineering somewhere else - and the handoffs were where quality and time
                disappeared.
              </p>
              <p className="font-inter text-steel leading-relaxed" style={{ fontSize: '16px' }}>
                We built the studio the other way around. Strategy, design, technology and growth
                sit under one roof, and the people who help shape your project are the same people
                who design it and ship it. Decisions get made faster, context survives the journey,
                and the work has one point of view instead of four.
              </p>
              <p className="font-inter text-steel leading-relaxed" style={{ fontSize: '16px' }}>
                We stay deliberately small enough that the senior people you meet are the senior
                people doing the work - and experienced enough that we have seen most problems
                before and know what they actually cost to fix.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
