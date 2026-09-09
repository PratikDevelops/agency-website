import React from 'react';

export default function AboutHero() {
  return (
    <section
      className="section-canvas"
      style={{ paddingTop: '160px', paddingBottom: '80px' }}
      aria-label="About Hero"
    >
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6">About</p>
          <h1 className="text-display text-graphite mb-8">
            We bring strategy, design and technology into one team.
          </h1>
          <p
            className="font-inter text-steel leading-relaxed max-w-xl"
            style={{ fontSize: '18px' }}
          >
            No handoffs between departments, no account-manager telephone game, no work that
            disappears into a review process. One studio, one team, one standard.
          </p>
        </div>
      </div>
    </section>
  );
}
