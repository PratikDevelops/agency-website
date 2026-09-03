'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function FinalCTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = sectionRef?.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        el.querySelectorAll<HTMLElement>('.reveal').forEach((r, i) => {
                            setTimeout(() => r.classList.add('visible'), i * 100);
                        });
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );
        observer?.observe(el);
        return () => observer?.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="section-canvas section-spacing" aria- label="Contact CTA">
            <div className="container-page">
                <div className="bg-graphite rounded-lg p-12 lg:p-20 relative overflow-hidden noise-overlay">
                    {/* Subtle ambient element */}
                    <div
                        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
                        style={{ background: 'radial-gradient(circle, rgba(255,104,44,0.08) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
                    />
                    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
                        <div className="reveal max-w-lg">
                            <h2
                                className="font-polysans text-white mb-4"
                                style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, letterSpacing: '-0.02em', fontWeight: 400 }}
                            >
                                Have a project in mind? Let's build it.
                            </h2>
                            <p className="font-inter leading-relaxed" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)' }}>
                                Tell us what you are building and we will put together a proposal within 48 hours. No commitment required.
                            </p>
                        </div>
                        <div className="reveal reveal-delay-1 flex flex-col sm:flex-row gap-3 flex-shrink-0">
                            <Link
                                href="/contact"
                                className="btn-primary"
                                style={{ backgroundColor: 'white', color: 'var(--color-graphite)', borderColor: 'white' }}
                            >
                                Start a Project
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <Link
                                href="/work"
                                className="btn-ghost"
                                style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}
                            >
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}