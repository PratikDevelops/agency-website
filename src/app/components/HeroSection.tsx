'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HeroSection() {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = heroRef?.current;
        if (!el) return;
        const items = el?.querySelectorAll<HTMLElement>('.hero-reveal');
        items?.forEach((item, i) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100 + i * 120);
        });
    }, []);

    return (
        <section
            ref={heroRef}
            className="section-canvas section-spacing-lg relative overflow-hidden"
            style={{ paddingTop: '160px', minHeight: '88vh', display: 'flex', alignItems: 'center' }}
            aria- label="Hero"
        >
            {/* Background texture */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.025]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="container-page w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left: Typography */}
                    <div className="lg:col-span-7">
                        <div
                            className="hero-reveal mb-6"
                            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
                        >
                            <span className="eyebrow">Digital Studio</span>
                        </div>

                        <h1
                            className="hero-reveal text-display text-graphite mb-8"
                            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
                        >
                            We build digital<br />
                            experiences that<br />
                            <span className="text-steel">move businesses</span><br />
                            forward.
                        </h1>

                        <p
                            className="hero-reveal font-inter text-steel leading-relaxed mb-10 max-w-lg"
                            style={{ fontSize: '17px', opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
                        >
                            AgencyStudio brings together strategy, design, technology and growth into one focused team - so you can build, launch and grow without switching agencies.
                        </p>

                        <div
                            className="hero-reveal flex flex-col sm:flex-row gap-3 mb-10"
                            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
                        >
                            <Link href="/contact" className="btn-primary">
                                Start a Project
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                            <Link href="/work" className="btn-ghost">
                                Explore Our Work
                            </Link>
                        </div>

                        <div
                            className="hero-reveal flex items-center gap-2 flex-wrap"
                            style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
                        >
                            <span className="text-slate font-inter text-sm">50+ Projects</span>
                            <span className="text-mist font-inter">·</span>
                            <span className="text-slate font-inter text-sm">98% Satisfaction</span>
                            <span className="text-mist font-inter">·</span>
                            <span className="text-slate font-inter text-sm">5+ Years Experience</span>
                        </div>
                    </div>

                    {/* Right: Stats card composition */}
                    <div
                        className="hero-reveal lg:col-span-5 hidden lg:flex flex-col gap-4"
                        style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)' }}
                    >
                        {/* Featured stat card */}
                        <div className="asymmetric-card p-10 flex flex-col gap-2">
                            <p className="eyebrow">Projects Delivered</p>
                            <p
                                className="font-polysans text-graphite"
                                style={{ fontSize: '72px', lineHeight: 0.85, letterSpacing: '-0.04em', fontWeight: 400 }}
                            >
                                50<span className="text-ember-orange">+</span>
                            </p>
                            <p className="text-steel font-inter text-sm mt-2">Across web, apps, design, SEO and marketing</p>
                        </div>

                        {/* Two small cards */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-ivory p-6 rounded-lg">
                                <p className="eyebrow mb-2">Satisfaction</p>
                                <p
                                    className="font-polysans text-graphite"
                                    style={{ fontSize: '36px', lineHeight: 1, letterSpacing: '-0.03em', fontWeight: 400 }}
                                >
                                    98<span className="text-ember-orange">%</span>
                                </p>
                            </div>
                            <div className="bg-ash p-6 rounded-lg">
                                <p className="eyebrow mb-2">Disciplines</p>
                                <p
                                    className="font-polysans text-graphite"
                                    style={{ fontSize: '36px', lineHeight: 1, letterSpacing: '-0.03em', fontWeight: 400 }}
                                >
                                    9
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}