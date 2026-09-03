'use client';

import React, { useEffect, useRef } from 'react';

export default function TestimonialSection() {
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
        <section ref={sectionRef} className="section-ash section-spacing" aria- label="Testimonial">
            <div className="container-page">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <div className="lg:col-span-7">
                        <div className="reveal mb-8">
                            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="text-mist">
                                <path d="M0 24V14.4C0 6.4 5.12 1.6 15.36 0l1.28 2.4C10.88 3.6 7.68 6.4 7.04 10.4H13.44V24H0ZM18.56 24V14.4C18.56 6.4 23.68 1.6 33.92 0l1.28 2.4C29.44 3.6 26.24 6.4 25.6 10.4H32V24H18.56Z" fill="currentColor" />
                            </svg>
                        </div>
                        <blockquote
                            className="reveal font-polysans text-graphite mb-8"
                            style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', lineHeight: 1.25, letterSpacing: '-0.02em', fontWeight: 400 }}
                        >
                            AgencyStudio didn't just build our platform - they understood what we were trying to achieve commercially. The site launched on time, converted better than our old one from day one, and the team was genuinely easy to work with throughout.
                        </blockquote>
                        <div className="reveal flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-ivory flex items-center justify-center flex-shrink-0">
                                <span className="font-polysans text-graphite text-sm" style={{ letterSpacing: '-0.02em' }}>SR</span>
                            </div>
                            <div>
                                <p className="font-polysans text-graphite" style={{ fontSize: '15px', letterSpacing: '-0.02em', fontWeight: 400 }}>
                                    Sarah Reynolds
                                </p>
                                <p className="font-inter text-slate text-sm">CEO, Finora · Web Development</p>
                            </div>
                            <div className="ml-auto">
                                <span className="tag-ember tag text-xs font-medium">+42% leads</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 hidden lg:block">
                        <div className="asymmetric-card p-8">
                            <p className="eyebrow mb-6">Result</p>
                            <div className="space-y-5">
                                {[
                                    { metric: '+42%', label: 'Qualified Leads' },
                                    { metric: '2.4×', label: 'Conversion Rate' },
                                    { metric: '38%', label: 'Faster Load Time' },
                                ]?.map((item) => (
                                    <div key={item?.label} className="flex items-baseline justify-between border-b border-mist pb-4 last:border-0 last:pb-0">
                                        <span className="font-inter text-slate text-sm">{item?.label}</span>
                                        <span
                                            className="font-polysans text-graphite"
                                            style={{ fontSize: '28px', letterSpacing: '-0.03em', fontWeight: 400 }}
                                        >
                                            {item?.metric}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}