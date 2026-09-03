import React from 'react';
import type { Metadata } from 'next';
import { services } from '@/data/services';
import ServicePageTemplate from '../[slug]/components/ServicePageTemplate';

const service = services.find((s) => s.slug === 'web-development')!;

export const metadata: Metadata = {
    title: 'Web Development - AgencyStudio',
    description:
        'We build fast, scalable web experiences - from marketing sites to complex web applications - designed around your business goals and your users.',
    openGraph: {
        title: 'Web Development - AgencyStudio',
        description:
            'Web experiences engineered for performance. Marketing websites, e-commerce, web applications and more.',
        images: [{ url: service.heroImage || '/assets/images/app_logo.png', width: 1200, height: 630 }],
    },
};

export default function WebDevelopmentPage() {
    return (
        <ServicePageTemplate
            service={service}
            relatedProjectSlugs={['finora', 'grove-health', 'clearpath']}
        />
    );
}
