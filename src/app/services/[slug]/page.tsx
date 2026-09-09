import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import ServicePageTemplate from './components/ServicePageTemplate';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.metaTitle || `${service.title} - AgencyStudio`,
    description: service.metaDescription || service.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: service.metaTitle || `${service.title} - AgencyStudio`,
      description: service.shortDescription,
      ...(service.heroImage
        ? { images: [{ url: service.heroImage, width: 1200, height: 630 }] }
        : {}),
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <ServicePageTemplate service={service} relatedProjectSlugs={service.relatedProjects ?? []} />
  );
}
