'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const plans = [
    {
        name: 'Starter',
        tagline: 'Focused projects with clear scope.',
        price: 'From $4,800',
        features: ['Up to 8 pages', 'Responsive design', 'CMS integration', 'Basic analytics', '30-day support'],
        popular: false,
    },
    {
        name: 'Growth',
        tagline: 'For businesses ready to scale their digital presence.',
        price: 'From $9,500',
        features: ['Up to 20 pages', 'Custom design system', 'E-commerce or web app', 'API integrations', 'Performance optimization', '60-day support'],
        popular: true,
    },
    {
        name: 'Enterprise',
        tagline: 'Complex digital ecosystems with full team support.',
        price: 'From $22,000',
        features: ['Unlimited scope', 'Full product team', 'Custom architecture', 'Ongoing retainer option', 'Priority support'],
        popular: false,
    },
];

export default function PricingPreview() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = sectionRef?.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        el.querySelectorAll<HTMLElement>('.reveal').forEach((r, i) => {
                            setTimeout(() => r.classList.add('visible'), i * 80);
                        });
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );
        observer?.observe(el);
        return () => observer?.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="section-canvas section-spacing" aria- label="Pricing">
            <div className="container-page">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                    <div className="reveal">
                        <p className="eyebrow mb-4">Investment</p>
                        <h2 className="text-heading-lg text-graphite max-w-md">
                            Predictable pricing for every stage of growth.
                        </h2>
                    </div>
                    <Link href="/pricing" className="reveal link-arrow text-sm flex-shrink-0">
                        Compare Packages
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {plans?.map((plan, i) => (
                        <div
                            key={plan?.name}
                            className={`reveal p-8 rounded-lg flex flex-col gap-6 relative ${plan?.popular ? 'bg-graphite text-white' : 'bg-ash'
                                }`}
                            style={{ transitionDelay: `${i * 80}ms` }}
                        >
                            {plan?.popular && (
                                <span
                                    className="absolute top-4 right-4 font-inter text-xs font-medium px-3 py-1 rounded-full"
                                    style={{ backgroundColor: 'var(--color-ember-orange)', color: 'white' }}
                                >
                                    Most Popular
                                </span>
                            )}
                            <div>
                                <p
                                    className={`font-polysans mb-2 ${plan?.popular ? 'text-white' : 'text-graphite'}`}
                                    style={{ fontSize: '20px', letterSpacing: '-0.02em', fontWeight: 400 }}
                                >
                                    {plan?.name}
                                </p>
                                <p className={`font-inter text-sm ${plan?.popular ? 'text-white opacity-70' : 'text-slate'}`}>
                                    {plan?.tagline}
                                </p>
                            </div>
                            <p
                                className={`font-polysans ${plan?.popular ? 'text-white' : 'text-graphite'}`}
                                style={{ fontSize: '32px', letterSpacing: '-0.03em', fontWeight: 400 }}
                            >
                                {plan?.price}
                            </p>
                            <ul className="flex flex-col gap-3 flex-1">
                                {plan?.features?.map((f) => (
                                    <li key={f} className="flex items-start gap-2">
                                        <span className={`mt-1 flex-shrink-0 ${plan?.popular ? 'text-ember-orange' : 'text-ember-orange'}`}>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                        <span className={`font-inter text-sm ${plan?.popular ? 'text-white opacity-80' : 'text-steel'}`}>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/contact"
                                className={plan?.popular ? 'btn-ghost' : 'btn-primary'}
                                style={plan?.popular ? { borderColor: 'rgba(255,255,255,0.3)', color: 'white' } : {}}
                            >
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}