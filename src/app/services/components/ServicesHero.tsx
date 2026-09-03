import React from 'react';

export default function ServicesHero() {
    return (
        <section
            className="section-canvas"
            style={{ paddingTop: '160px', paddingBottom: '80px' }}
            aria- label="Services Hero"
        >
            <div className="container-page">
                <div className="max-w-3xl">
                    <p className="eyebrow mb-6">Our Services</p>
                    <h1 className="text-display text-graphite mb-8">
                        Everything you need to build, launch and grow.
                    </h1>
                    <p className="font-inter text-steel leading-relaxed max-w-xl" style={{ fontSize: '18px' }}>
                        Nine digital disciplines. One focused team. From the first strategy session to post-launch growth - we handle every part of the digital stack so you don't have to manage multiple agencies.
                    </p>
                </div>
            </div>
        </section>
    );
}