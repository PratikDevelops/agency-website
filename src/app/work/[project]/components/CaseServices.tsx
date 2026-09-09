'use client';

import React from 'react';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import { services } from '@/data/services';

interface CaseServicesProps {
  services: string[];
}

export default function CaseServices({ services: names }: CaseServicesProps) {
  const labelRef = useReveal();
  const listRef = useReveal();

  if (!names.length) return null;

  return (
    <section className="section-ash section-spacing">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div ref={labelRef} className="reveal lg:col-span-4">
            <p className="eyebrow mb-4">Services Used</p>
            <h2 className="text-heading-lg text-graphite max-w-xs">
              The disciplines behind this project.
            </h2>
          </div>
          <div ref={listRef} className="reveal reveal-delay-1 lg:col-span-8">
            <ul className="flex flex-col border-t border-mist">
              {names.map((name, i) => {
                const known = services.find((s) => s.title === name);
                const rowKey = (
                  <span className="flex items-center gap-4">
                    <span
                      className="font-inter text-slate"
                      style={{ fontSize: '11px', letterSpacing: '0.08em', fontWeight: 500 }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="font-polysans text-graphite group-hover:text-ember-orange transition-colors"
                      style={{ fontSize: '18px', letterSpacing: '-0.02em' }}
                    >
                      {name}
                    </span>
                  </span>
                );
                return (
                  <li key={name} className="border-b border-mist">
                    {known ? (
                      <Link
                        href={`/services/${known.slug}`}
                        className="group flex items-center justify-between gap-4 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-orange"
                      >
                        {rowKey}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
                        >
                          <path
                            d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    ) : (
                      /* Platform / technology detail - no service route exists, so no fake link */
                      <div className="flex items-center justify-between gap-4 py-5">
                        {rowKey}
                        <span
                          className="font-inter text-slate uppercase"
                          style={{ fontSize: '11px', letterSpacing: '0.08em', fontWeight: 500 }}
                        >
                          Platform
                        </span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
