'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { services } from '@/data/services';

export default function ServicesGrid() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = sectionRef?.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll<HTMLElement>('.reveal').forEach((r, i) => {
                            setTimeout(() => r.classList.add('visible'), i * 60);
                        });
                    }
                });
            },
            { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
        );

        el?.querySelectorAll<HTMLElement>('.service-row')?.forEach((row) => observer?.observe(row));
        return () => observer?.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="section-ash section-spacing" aria- label="All Services">
            <div className="container-page">
                <div className="flex flex-col gap-0 border border-mist rounded-lg overflow-hidden">
                    {services?.map((service, i) => {
                        const isEven = i % 2 === 0;
                        const hasImage = !!service?.heroImage;

                        return (
                            <div
                                key={service?.slug}
                                className={`service-row grid grid-cols-1 ${hasImage ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} ${i < services?.length - 1 ? 'border-b border-mist' : ''}`}
                            >
                    {/* Text side */}
                    <div
                        className={`reveal p-8 lg:p-12 flex flex-col justify-between section-canvas ${hasImage && !isEven ? 'lg:order-2' : ''
                            }`}
                    >
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="font-inter text-slate text-sm">{service?.number}</span>
                                <span className="divider-h flex-1" style={{ maxWidth: '40px' }} />
                            </div>
                            <h2
                                className="font-polysans text-graphite mb-4"
                                style={{ fontSize: 'clamp(24px, 2.5vw, 32px)', letterSpacing: '-0.02em', fontWeight: 400 }}
                            >
                                {service?.title}
                            </h2>
                            <p className="font-inter text-steel leading-relaxed mb-6" style={{ fontSize: '15px' }}>
                                {service?.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {service?.capabilities?.slice(0, 4)?.map((cap) => (
                                    <span key={cap} className="tag">{cap}</span>
                                ))}
                                {service?.capabilities?.length > 4 && (
                                    <span className="tag text-slate">+{service?.capabilities?.length - 4} more</span>
                                )}
                            </div>
                        </div>
                        <Link href={`/services/${service?.slug}`} className="link-arrow">
                            View Service
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>

                    {/* Image side */}
                    {hasImage && (
                        <div
                            className={`reveal reveal-delay-1 ${!isEven ? 'lg:order-1' : ''} bg-ash`}
                            style={{ minHeight: '280px' }}
                        >
                            <div className="image-wrapper w-full h-full" style={{ minHeight: '280px' }}>
                                <AppImage
                                    src={service?.heroImage}
                                    alt={service?.heroImageAlt}
                                    fill
                                    className="object-cover w-full h-full"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    )}

                    {/* No image - data/capabilities panel */}
                    {!hasImage && (
                        <div className="hidden lg:block" />
                    )}
                </div>
                );
                    })}
            </div>
        </div>
        </section >
    );
}