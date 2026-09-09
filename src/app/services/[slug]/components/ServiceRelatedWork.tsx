'use client';

import React from 'react';
import Link from 'next/link';
import ProjectCard from '@/components/ui/ProjectCard';
import { useReveal } from '@/hooks/useReveal';
import { ProjectData } from '@/data/projects';

interface ServiceRelatedWorkProps {
  projects: ProjectData[];
}

export default function ServiceRelatedWork({ projects }: ServiceRelatedWorkProps) {
  const ref = useReveal();

  if (!projects.length) return null;

  return (
    <section className="section-ash section-spacing">
      <div className="container-page">
        <div ref={ref} className="reveal flex items-end justify-between gap-6 mb-12 flex-wrap">
          <div>
            <p className="eyebrow mb-4">RELATED WORK</p>
            <h2 className="text-heading-lg text-graphite max-w-lg">
              Projects that show what&apos;s possible.
            </h2>
          </div>
          <Link
            href="/work"
            className="link-arrow text-graphite font-polysans hidden sm:inline-flex"
          >
            View All Work
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div
          className={`grid gap-6 ${
            projects.length === 1
              ? 'grid-cols-1'
              : projects.length === 2
                ? 'grid-cols-1 md:grid-cols-2'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {projects.map((project, i) => (
            <div key={project.slug} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <ProjectCard
                slug={project.slug}
                title={project.title}
                industry={project.industry}
                services={project.services}
                outcome={project.outcome}
                image={project.image}
                imageAlt={project.imageAlt}
                platform={project.platform}
                liveUrl={project.liveUrl}
                description={project.description}
                size={projects.length === 1 ? 'large' : 'medium'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
