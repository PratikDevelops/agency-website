'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { useReveal } from '@/hooks/useReveal';

interface PricingPackage {
  name: string;
  tagline: string;
  price: string;
  features: string[];
  popular?: boolean;
}

interface ServicePricingProps {
  packages: PricingPackage[];
  serviceTitle: string;
}

export default function ServicePricing({ packages, serviceTitle }: ServicePricingProps) {
  const ref = useReveal();

  return (
    <section ref={ref} className="section-canvas section-spacing">
      <div className="container-page">
        <div className="reveal mb-12">
          <p className="eyebrow mb-4">PRICING</p>
          <h2 className="text-heading-lg text-graphite max-w-xl">
            Clear packages. Flexible scope.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`reveal flex flex-col p-8 border ${
                pkg.popular ? 'border-graphite bg-graphite text-white' : 'border-mist bg-canvas'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {pkg.popular && (
                <span
                  className="inline-block mb-4 font-inter font-medium text-ember-orange"
                  style={{ fontSize: '11px', letterSpacing: '0.1em' }}
                >
                  MOST POPULAR
                </span>
              )}
              <h3
                className={`font-polysans mb-1 ${pkg.popular ? 'text-white' : 'text-graphite'}`}
                style={{ fontSize: '22px', letterSpacing: '-0.02em' }}
              >
                {pkg.name}
              </h3>
              <p
                className={`font-inter mb-6 ${pkg.popular ? 'text-white/60' : 'text-slate'}`}
                style={{ fontSize: '13px' }}
              >
                {pkg.tagline}
              </p>
              <p
                className={`font-polysans mb-8 ${pkg.popular ? 'text-white' : 'text-graphite'}`}
                style={{ fontSize: '28px', letterSpacing: '-0.02em' }}
              >
                {pkg.price}
              </p>

              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg
                      className={`flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-ember-orange' : 'text-ember-orange'}`}
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
                      className={`font-inter leading-snug ${pkg.popular ? 'text-white/80' : 'text-steel'}`}
                      style={{ fontSize: '14px' }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="/contact"
                variant={pkg.popular ? 'ghost' : 'primary'}
                className={
                  pkg.popular ? 'border-white text-white hover:bg-white hover:text-graphite' : ''
                }
              >
                Start with {pkg.name}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-slate font-inter mt-8 text-center" style={{ fontSize: '13px' }}>
          Need something custom?{' '}
          <a href="/contact" className="text-graphite underline underline-offset-2">
            Request a tailored quote →
          </a>
        </p>
      </div>
    </section>
  );
}
