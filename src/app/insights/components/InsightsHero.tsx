import React from 'react';

export default function InsightsHero() {
  return (
    <section
      className="section-canvas"
      style={{ paddingTop: '160px', paddingBottom: '80px' }}
      aria-label="Insights Hero"
    >
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">Insights</p>
          <h1 className="text-display text-graphite mb-8">
            Notes on building, designing and growing.
          </h1>
          <p
            className="font-inter text-steel leading-relaxed max-w-xl"
            style={{ fontSize: '18px' }}
          >
            What we are learning from client work - written properly, so it is worth your time. No
            recycled lists, no vanity metrics.
          </p>
        </div>
      </div>
    </section>
  );
}
