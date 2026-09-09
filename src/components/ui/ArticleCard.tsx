import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Badge from '@/components/ui/Badge';

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  image?: string;
  imageAlt?: string;
  size?: 'large' | 'small';
}

export default function ArticleCard({
  slug,
  title,
  excerpt,
  category,
  date,
  readingTime,
  image,
  imageAlt,
  size = 'small',
}: ArticleCardProps) {
  const aspectClass = size === 'large' ? 'aspect-[16/7]' : 'aspect-[4/3]';
  const titleSize = size === 'large' ? 'clamp(24px, 2.5vw, 32px)' : '18px';

  return (
    <Link
      href={`/insights/${slug}`}
      className="project-card group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-orange"
    >
      {image ? (
        <div className={`image-wrapper ${aspectClass} rounded-lg overflow-hidden mb-5`}>
          <AppImage
            src={image}
            alt={imageAlt ?? `${title} - article imagery`}
            fill
            className="project-card-img object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ) : (
        /* Typographic tile - used when no genuine article imagery exists */
        <div
          className={`${aspectClass} rounded-lg overflow-hidden mb-5 bg-graphite noise-overlay relative p-6 md:p-8 flex flex-col justify-between`}
        >
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.45)' }}>
            {category}
          </span>
          <p
            className="font-polysans text-white line-clamp-3"
            style={{
              fontSize: size === 'large' ? 'clamp(20px, 2.2vw, 28px)' : '17px',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
            }}
          >
            {excerpt}
          </p>
        </div>
      )}
      <div className="flex items-center gap-2 flex-wrap mb-3">
        <Badge variant="default">{category}</Badge>
        <span className="text-slate font-inter" style={{ fontSize: '12px' }}>
          {date}
        </span>
        <span className="text-slate font-inter" style={{ fontSize: '12px' }}>
          ·
        </span>
        <span className="text-slate font-inter" style={{ fontSize: '12px' }}>
          {readingTime}
        </span>
      </div>
      <h3
        className="font-polysans text-graphite mb-2 group-hover:text-ember-orange transition-colors"
        style={{ fontSize: titleSize, letterSpacing: '-0.02em', fontWeight: 400 }}
      >
        {title}
      </h3>
      <p
        className="text-steel font-inter leading-relaxed line-clamp-2 mb-4"
        style={{ fontSize: '14px' }}
      >
        {excerpt}
      </p>
      <span className="link-arrow text-graphite font-polysans">
        Read Article
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
