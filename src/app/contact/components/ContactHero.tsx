import React from 'react';

export default function ContactHero() {
  return (
    <section
      className="section-canvas"
      style={{ paddingTop: '160px', paddingBottom: '60px' }}
      aria-label="Contact Hero"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="text-display text-graphite mb-6">
            Let&apos;s talk about what you&apos;re building.
          </h1>
          <p className="font-inter text-steel leading-relaxed" style={{ fontSize: '17px' }}>
            Fill in the form and we will respond within 48 hours with a tailored proposal - or just
            an honest answer if it&apos;s not the right fit.
          </p>
        </div>
      </div>
    </section>
  );
}
