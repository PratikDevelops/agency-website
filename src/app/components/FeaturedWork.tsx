'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { projects } from '@/data/services';
import ProjectCard from '@/components/ui/ProjectCard';

export default function FeaturedWork() {
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
      { threshold: 0.05 }
    );
    observer?.observe(el);
    return () => observer?.disconnect();
  }, []);

  const [featured, ...rest] = projects ?? [];

  return (
    <section ref={sectionRef} className="section-canvas section-spacing" aria-label="Selected Work">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="reveal">
            <p className="eyebrow mb-4">Selected Work</p>
            <h2 className="text-heading-lg text-graphite max-w-lg">
              Work built around real business goals.
            </h2>
          </div>
          <Link href="/work" className="reveal link-arrow text-sm flex-shrink-0">
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

        {/* Featured large project */}
        <div className="reveal mb-6">
          <ProjectCard
            slug={featured?.slug}
            title={featured?.title}
            industry={featured?.industry}
            services={featured?.services}
            outcome={featured?.outcome}
            image={featured?.image}
            imageAlt={featured?.imageAlt}
            platform={featured?.platform}
            liveUrl={featured?.liveUrl}
            description={featured?.description}
            size="large"
          />
        </div>

        {/* Two smaller projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rest?.slice(0, 2)?.map((project, i) => (
            <div key={project?.slug} className={`reveal reveal-delay-${i + 1}`}>
              <ProjectCard
                slug={project?.slug}
                title={project?.title}
                industry={project?.industry}
                services={project?.services}
                outcome={project?.outcome}
                image={project?.image}
                imageAlt={project?.imageAlt}
                platform={project?.platform}
                liveUrl={project?.liveUrl}
                description={project?.description}
                size="small"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
