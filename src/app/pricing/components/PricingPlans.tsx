'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import SectionHeading from '@/components/ui/SectionHeading';
import { useReveal } from '@/hooks/useReveal';

interface Plan {
  name: string;
  ideal: string;
  price: string;
  deliverables: string[];
  timeline: string;
  support: string;
  popular?: boolean;
}

const plans: Plan[] = [
  {
    name: 'Starter',
    ideal:
      'Focused projects with a clear, single objective - a marketing site, a core landing-page flow or a one-off brand refresh.',
    price: 'From $4,800',
    deliverables: ['Up to 8 pages', 'Responsive design', 'CMS integration', 'Basic analytics'],
    timeline: '4-6 weeks',
    support: '30-day post-launch',
  },
  {
    name: 'Growth',
    ideal:
      'Businesses ready to scale their digital presence across web, SEO and design in one engagement.',
    price: 'From $9,500',
    deliverables: [
      'Up to 20 pages',
      'Custom design system',
      'E-commerce or web app',
      'API integrations',
      'Performance optimization',
    ],
    timeline: '8-12 weeks',
    support: '60-day post-launch',
    popular: true,
  },
  {
    name: 'Enterprise',
    ideal:
      'Complex digital ecosystems - product platforms, multi-market rollouts and teams that need ongoing delivery capacity.',
    price: 'From $22,000',
    deliverables: [
      'Unlimited scope',
      'Full product team',
      'Custom architecture',
      'Ongoing retainer option',
      'Priority support',
    ],
    timeline: '12-20 weeks',
    support: 'Dedicated contact',
  },
];

export default function PricingPlans() {
  const ref = useReveal();

  return (
    <section className="section-canvas section-spacing">
      <div className="container-page">
        <div ref={ref} className="reveal mb-12">
          <SectionHeading
            eyebrow="Packages"
            headline="Three starting points, one way of working."
            subtext="Choose the shape that fits, then we scope the detail together. Every package includes strategy, design, build and launch support."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal flex flex-col p-8 border ${
                plan.popular ? 'border-graphite bg-graphite text-white' : 'border-mist bg-canvas'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.popular && (
                <span
                  className="inline-block mb-4 font-inter font-medium text-ember-orange"
                  style={{ fontSize: '11px', letterSpacing: '0.1em' }}
                >
                  MOST POPULAR
                </span>
              )}
              <h3
                className={`font-polysans mb-1 ${plan.popular ? 'text-white' : 'text-graphite'}`}
                style={{ fontSize: '22px', letterSpacing: '-0.02em' }}
              >
                {plan.name}
              </h3>
              <p
                className={`font-polysans mt-6 ${plan.popular ? 'text-white' : 'text-graphite'}`}
                style={{ fontSize: '28px', letterSpacing: '-0.02em' }}
              >
                {plan.price}
              </p>

              <div className="mt-7">
                <p
                  className="eyebrow mb-2"
                  style={plan.popular ? { color: 'rgba(255,255,255,0.5)' } : {}}
                >
                  Ideal for
                </p>
                <p
                  className={`font-inter leading-relaxed ${plan.popular ? 'text-white/70' : 'text-steel'}`}
                  style={{ fontSize: '14px' }}
                >
                  {plan.ideal}
                </p>
              </div>

              <div className="mt-7">
                <p
                  className="eyebrow mb-2"
                  style={plan.popular ? { color: 'rgba(255,255,255,0.5)' } : {}}
                >
                  What&apos;s included
                </p>
                <ul className="flex flex-col gap-3">
                  {plan.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <svg
                        className="flex-shrink-0 mt-0.5 text-ember-orange"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M2 7l3.5 3.5L12 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className={`font-inter leading-snug ${plan.popular ? 'text-white/80' : 'text-steel'}`}
                        style={{ fontSize: '14px' }}
                      >
                        {d}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex items-center justify-between">
                <span
                  className="text-slate font-inter text-xs uppercase"
                  style={plan.popular ? { color: 'rgba(255,255,255,0.5)' } : {}}
                >
                  Timeline
                </span>
                <span
                  className={`font-inter ${plan.popular ? 'text-white/80' : 'text-steel'}`}
                  style={{ fontSize: '14px', fontWeight: 500 }}
                >
                  {plan.timeline}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span
                  className="text-slate font-inter text-xs uppercase"
                  style={plan.popular ? { color: 'rgba(255,255,255,0.5)' } : {}}
                >
                  Support
                </span>
                <span
                  className={`font-inter ${plan.popular ? 'text-white/80' : 'text-steel'}`}
                  style={{ fontSize: '14px', fontWeight: 500 }}
                >
                  {plan.support}
                </span>
              </div>

              <div className="mt-8">
                <Button
                  href="/contact"
                  variant={plan.popular ? 'ghost' : 'primary'}
                  className={
                    plan.popular ? 'border-white text-white hover:bg-white hover:text-graphite' : ''
                  }
                >
                  Start with {plan.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
