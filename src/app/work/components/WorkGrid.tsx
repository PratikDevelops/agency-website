'use client';

import React, { useState } from 'react';
import { projects, projectCategories } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';

const filters = ['All', ...projectCategories];

function chunk<T>(items: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size));
  }
  return out;
}

export default function WorkGrid() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  const [featured, ...rest] = filtered;
  const rows = featured ? chunk(rest, 2) : [];

  return (
    <section className="section-ash section-spacing" aria-label="Project Grid">
      <div className="container-page">
        {/* Filter row - horizontal scroll on mobile, never page-level overflow */}
        <div className="flex items-center gap-4 mb-8 md:mb-12">
          <span className="eyebrow flex-shrink-0">Filter</span>
          <div
            className="overflow-x-auto py-2 flex-1 min-w-0"
            style={{ scrollbarWidth: 'none' }}
            role="group"
            aria-label="Filter projects by discipline"
          >
            <div className="flex gap-2 snap-x snap-start [&::-webkit-scrollbar]:hidden">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  aria-pressed={active === f}
                  className={`snap-start flex-shrink-0 rounded-full px-4 py-2 font-inter text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-orange ${
                    active === f
                      ? 'bg-graphite text-white'
                      : 'border border-mist text-graphite hover:bg-ash'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-slate font-inter text-sm mb-8" role="status">
          {filtered.length} {filtered.length === 1 ? 'project' : 'projects'} shown
        </p>

        {featured ? (
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Featured large project - full editorial treatment */}
            <ProjectCard
              slug={featured.slug}
              title={featured.title}
              industry={featured.industry}
              services={featured.services}
              outcome={featured.outcome}
              image={featured.image}
              imageAlt={featured.imageAlt}
              platform={featured.platform}
              liveUrl={featured.liveUrl}
              description={featured.description}
              size="large"
            />

            {/* Paired smaller projects; a single leftover spans the row */}
            {rows.map((row, i) => {
              const single = row.length === 1;
              return (
                <div
                  key={i}
                  className={single ? 'grid grid-cols-1' : 'grid grid-cols-1 sm:grid-cols-2 gap-6'}
                >
                  {row.map((p) => (
                    <ProjectCard
                      key={p.slug}
                      slug={p.slug}
                      title={p.title}
                      industry={p.industry}
                      services={p.services}
                      outcome={p.outcome}
                      image={p.image}
                      imageAlt={p.imageAlt}
                      platform={p.platform}
                      liveUrl={p.liveUrl}
                      description={p.description}
                      size={single ? 'large' : 'small'}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-steel font-inter leading-relaxed" style={{ fontSize: '16px' }}>
            No projects in this category yet - check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
