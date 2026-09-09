'use client';

import React from 'react';
import { useReveal } from '@/hooks/useReveal';

const team = [
  {
    name: 'Elena Marsh',
    role: 'Founder & Managing Director',
    specialty: 'Strategy, partnerships, delivery quality',
  },
  {
    name: 'Daniel Okafor',
    role: 'Head of Engineering',
    specialty: 'Web & app architecture, performance',
  },
  { name: 'Sofia Reinhardt', role: 'Head of Design', specialty: 'Brand systems, product design' },
  { name: 'Marcus Chen', role: 'Head of Growth', specialty: 'SEO, paid media, conversion' },
  {
    name: 'Priya Nair',
    role: 'Senior Product Designer',
    specialty: 'Research, prototyping, design systems',
  },
  {
    name: 'Tomás Rivera',
    role: 'Senior Full-Stack Developer',
    specialty: 'Web applications, integrations',
  },
  {
    name: 'Hannah Whitfield',
    role: 'Content & Social Lead',
    specialty: 'Editorial, social, video',
  },
  { name: 'Adam Bell', role: 'Automation Engineer', specialty: 'Workflows, APIs, data pipelines' },
];

export default function AboutTeam() {
  const ref = useReveal();

  return (
    <section className="section-canvas section-spacing" aria-label="The Team">
      <div className="container-page">
        <div ref={ref} className="reveal mb-6">
          <p className="eyebrow mb-4">The Team</p>
          <h2 className="text-heading-lg text-graphite max-w-lg">The people behind the work.</h2>
          <p
            className="font-inter text-steel leading-relaxed mt-4 max-w-xl"
            style={{ fontSize: '15px' }}
          >
            Eight people, two floors, one standard. Everyone here works on client projects directly
            - no juniors learning on your budget, no seniors you never meet.
          </p>
        </div>

        <div className="border-t border-mist">
          {team.map((person, i) => (
            <div
              key={person.name}
              className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8 py-6 border-b border-mist reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <h3
                className="font-polysans text-graphite md:w-1/3"
                style={{ fontSize: '19px', letterSpacing: '-0.02em' }}
              >
                {person.name}
              </h3>
              <p className="font-inter text-slate md:w-1/3" style={{ fontSize: '14px' }}>
                {person.role}
              </p>
              <p className="font-inter text-steel md:w-1/3" style={{ fontSize: '14px' }}>
                {person.specialty}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
