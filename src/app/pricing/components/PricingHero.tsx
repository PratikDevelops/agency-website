import React from 'react';

export default function PricingHero() {
  return (
    <section
      className="section-canvas"
      style={{ paddingTop: '160px', paddingBottom: '80px' }}
      aria-label="Pricing Hero"
    >
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">Pricing</p>
          <h1 className="text-display text-graphite mb-8">
            Clear packages. Flexible scope. No unnecessary complexity.
          </h1>
          <p
            className="font-inter text-steel leading-relaxed max-w-xl"
            style={{ fontSize: '18px' }}
          >
            Every project is different, so every quote is scoped honestly. These packages are the
            starting point - the plan below shows how we think, and the custom quote handles
            everything else.
          </p>
        </div>
      </div>
    </section>
  );
}
