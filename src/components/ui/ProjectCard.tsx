import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Badge from '@/components/ui/Badge';

interface ProjectCardProps {
  slug: string;
  title: string;
  industry: string;
  services: string[];
  outcome: string;
  image?: string;
  imageAlt?: string;
  /** Platform / technology detail shown next to the industry. */
  platform?: string;
  /** Live production URL - rendered as an external link when present. */
  liveUrl?: string;
  /** Short factual description, used as the typographic tile text. */
  description?: string;
  size?: 'large' | 'medium' | 'small';
}

export default function ProjectCard({
  slug,
  title,
  industry,
  services,
  outcome,
  image,
  imageAlt,
  platform,
  liveUrl,
  description,
  size = 'medium',
}: ProjectCardProps) {
  const aspectClass = size === 'large' ? 'aspect-[16/9] md:aspect-[16/7]' : 'aspect-[4/3]';

  return (
    <article className="project-card group relative flex flex-col">
      {image ? (
        <Link
          href={`/work/${slug}`}
          aria-label={`${title} case study`}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-orange rounded-lg"
        >
          <div className={`image-wrapper ${aspectClass} rounded-lg overflow-hidden mb-5`}>
            <AppImage
              src={image}
              alt={imageAlt ?? `${title} - project imagery`}
              fill
              className="project-card-img object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Link>
      ) : (
        /* Typographic tile - used when no genuine project imagery exists */
        <Link
          href={`/work/${slug}`}
          aria-label={`${title} case study`}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-orange rounded-lg"
        >
          <div
            className={`${aspectClass} rounded-lg overflow-hidden mb-5 bg-graphite noise-overlay relative p-6 md:p-8 flex flex-col justify-between`}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {platform ?? industry}
              </span>
              <span
                className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-white/20 rounded-full font-polysans text-white text-xs"
                style={{ letterSpacing: '0.04em' }}
                aria-hidden="true"
              >
                {title.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <p
              className="font-polysans text-white"
              style={{
                fontSize: size === 'large' ? 'clamp(22px, 2.4vw, 32px)' : '20px',
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
              }}
            >
              {description ?? title}
            </p>
          </div>
        </Link>
      )}

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="eyebrow">{industry}</span>
            {platform && <span className="text-slate font-inter text-sm">· {platform}</span>}
          </div>
          <h3 className="mb-2">
            <Link
              href={`/work/${slug}`}
              className="font-polysans text-graphite group-hover:text-ember-orange transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-orange rounded-sm"
              style={{ fontSize: '20px', letterSpacing: '-0.02em', fontWeight: 400 }}
            >
              {title}
            </Link>
          </h3>
          <div className="flex gap-2 flex-wrap mb-3">
            {services.slice(0, 2).map((s) => (
              <Badge key={s} variant="default">
                {s}
              </Badge>
            ))}
          </div>
          <p className="text-ember-orange font-inter font-medium text-sm">{outcome}</p>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-2 font-inter text-sm text-steel hover:text-graphite transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-orange rounded-sm"
            >
              Visit live site
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
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
        <Link
          href={`/work/${slug}`}
          aria-label={`Read the ${title} case study`}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-mist rounded-full group-hover:border-graphite group-hover:bg-graphite group-hover:text-white transition-all duration-200 mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-orange"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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
    </article>
  );
}
