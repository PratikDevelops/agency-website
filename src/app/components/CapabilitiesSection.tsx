'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { services } from '@/data/services';

export default function CapabilitiesSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = sectionRef?.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        el.querySelectorAll<HTMLElement>('.reveal').forEach((r, i) => {
                            setTimeout(() => r.classList.add('visible'), i * 60);
                        });
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.05 }
        );
        observer?.observe(el);
        return () => observer?.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="section-ash section-spacing" aria- label="Capabilities">
            <div className="container-page">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
                    <div className="reveal">
                        <p className="eyebrow mb-4">Capabilities</p>
                        <h2 className="text-heading-lg text-graphite max-w-xl">
                            Everything required to build, launch and grow.
                        </h2>
                    </div>
                    <Link href="/services" className="reveal link-arrow text-sm flex-shrink-0">
                        Explore All Services
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                {/* Featured service - Web Development */}
                <div className="reveal mb-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-mist rounded-lg overflow-hidden">
                        <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between section-canvas">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="font-inter text-slate text-sm" style={{ fontVariantNumeric: 'tabular-nums' }}>01</span>
                                    <span className="tag">Featured</span>
                                </div>
                                <h3
                                    className="font-polysans text-graphite mb-4"
                                    style={{ fontSize: 'clamp(24px, 2.5vw, 32px)', letterSpacing: '-0.02em', fontWeight: 400 }}
                                >
                                    Web Development
                                </h3>
                                <p className="font-inter text-steel leading-relaxed mb-6" style={{ fontSize: '15px' }}>
                                    Websites, platforms and web applications built for performance, conversion and scale. From marketing sites to complex SaaS products.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {['Marketing Sites', 'E-commerce', 'Web Apps', 'CMS', 'Performance']?.map((cap) => (
                                        <span key={cap} className="tag">{cap}</span>
                                    ))}
                                </div>
                            </div>
                            <Link href="/services/web-development" className="link-arrow">
                                View Service
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                        <div className="lg:col-span-5 bg-ivory p-8 lg:p-12 flex flex-col justify-center">
                            <div className="space-y-4">
                                {['Next.js & React', 'TypeScript', 'Headless CMS', 'Core Web Vitals', 'API Integration']?.map((tech, i) => (
                                    <div key={tech} className="flex items-center gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-ember-orange flex-shrink-0" />
                                        <span className="font-inter text-steel text-sm">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-mist border border-mist rounded-lg overflow-hidden">
                    {services?.slice(1)?.map((service, i) => (
                        <div key={service?.slug} className="reveal section-canvas p-6 flex flex-col gap-3 hover:bg-ash transition-colors duration-200">
                            <div className="flex items-start justify-between">
                                <span className="font-inter text-slate text-xs">{service?.number}</span>
                            </div>
                            <h3
                                className="font-polysans text-graphite"
                                style={{ fontSize: '16px', letterSpacing: '-0.02em', fontWeight: 400 }}
                            >
                                {service?.title}
                            </h3>
                            <p className="font-inter text-slate text-sm leading-relaxed flex-1">
                                {service?.shortDescription}
                            </p>
                            <Link href={`/services/${service?.slug}`} className="link-arrow text-sm mt-2">
                                Learn more
                                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                                    <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}