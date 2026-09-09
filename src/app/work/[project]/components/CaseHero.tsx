'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Badge from '@/components/ui/Badge';
import { useReveal } from '@/hooks/useReveal';
import { ProjectData } from '@/data/projects';

interface CaseHeroProps {
  project: ProjectData;
}

export default function CaseHero({ project }: CaseHeroProps) {
  const textRef = useReveal();
  const imageRef = useReveal();

  return (
    <section className="section-canvas section-spacing-lg pt-32 md:pt-36">
      <div className="container-page">
        <div ref={textRef} className="reveal max-w-3xl">
          <p className="eyebrow mb-6">Case Study / {project.category.toUpperCase()}</p>
          <h1 className="text-display text-graphite mb-6">{project.title}</h1>
          <p
            className="font-inter text-steel text-lg leading-relaxed max-w-2xl mb-8"
            style={{ fontSize: '18px' }}
          >
            {project.description} {project.outcome}.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">{project.industry}</Badge>
            {project.services.map((s) => (
              <Badge key={s} variant="default">
                {s}
              </Badge>
            ))}
          </div>
        </div>

        <div ref={imageRef} className="reveal reveal-delay-1 mt-12">
          {project.image ? (
            <div className="image-wrapper aspect-[16/9] rounded-lg overflow-hidden">
              <AppImage
                src={project.image}
                alt={project.imageAlt ?? `${project.title} - project imagery`}
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
          ) : (
            /* Typographic hero band - used when no genuine project imagery exists */
            <div className="bg-graphite rounded-lg overflow-hidden noise-overlay relative p-10 md:p-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Platform
                </p>
                <p
                  className="font-polysans text-white"
                  style={{
                    fontSize: 'clamp(28px, 3.5vw, 48px)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.05,
                  }}
                >
                  {project.platform ?? project.category}
                </p>
              </div>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-inter text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-orange rounded-sm"
                  style={{ fontSize: '15px' }}
                >
                  View live site
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path
                      d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
        {project.image && project.liveUrl && (
          <div className="mt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-inter text-steel hover:text-graphite transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-orange rounded-sm"
              style={{ fontSize: '15px' }}
            >
              View live site
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
