import React from 'react';
import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="section-canvas section-spacing" aria-label="Services CTA">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center border-t border-mist pt-16">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Ready to start?</p>
            <h2 className="text-heading-lg text-graphite mb-4 max-w-xl">
              Not sure which services you need? Let&apos;s figure it out together.
            </h2>
            <p
              className="font-inter text-steel leading-relaxed max-w-lg"
              style={{ fontSize: '16px' }}
            >
              Most projects combine two or more disciplines. Tell us what you are trying to achieve
              and we will put together a tailored recommendation - no commitment required.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link href="/contact" className="btn-primary">
              Start a Project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="/work" className="btn-ghost">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
