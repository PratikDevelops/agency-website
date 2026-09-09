import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import CasePageTemplate from './components/CasePageTemplate';

export async function generateStaticParams() {
  return projects.map((p) => ({ project: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ project: string }>;
}): Promise<Metadata> {
  const { project: slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} Case Study - AgencyStudio`,
    description: `${project.title}: ${project.description} ${project.outcome}.`,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: `${project.title} - AgencyStudio Case Study`,
      description: `${project.description}${
        (project.results ?? []).length ? ` ${(project.results ?? []).slice(0, 2).join(' · ')}.` : ''
      }`,
      ...(project.image ? { images: [{ url: project.image, width: 1200, height: 630 }] } : {}),
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ project: string }> }) {
  const { project: slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return <CasePageTemplate project={project} />;
}
