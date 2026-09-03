import React from 'react';

const trustItems = [
    'Fintech Startups',
    'E-commerce Brands',
    'Healthcare Platforms',
    'SaaS Companies',
    'Consumer Goods',
    'Professional Services',
    'Logistics Networks',
    'Media & Publishing',
];

export default function TrustStrip() {
    return (
        <section className="section-ash py-10 border-t border-b border-mist">
            <div className="container-page">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
                    <p className="eyebrow flex-shrink-0">Trusted by ambitious businesses</p>
                    <div className="flex items-center gap-6 flex-wrap">
                        {trustItems?.map((item) => (
                            <span key={item} className="text-slate font-inter text-sm whitespace-nowrap">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}