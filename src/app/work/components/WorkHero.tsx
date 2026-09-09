import React from 'react';

export default function WorkHero() {
  return (
    <section
      className="section-canvas"
      style={{ paddingTop: '160px', paddingBottom: '80px' }}
      aria-label="Work Hero"
    >
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">Our Work</p>
          <h1 className="text-display text-graphite mb-8">
            Projects designed to solve real problems.
          </h1>
          <p
            className="font-inter text-steel leading-relaxed max-w-xl"
            style={{ fontSize: '18px' }}
          >
            A selection of our live builds - storefronts, service platforms and product
            applications. Every project listed is real, and where a build is public, we link to it.
          </p>
        </div>
      </div>
    </section>
  );
}
