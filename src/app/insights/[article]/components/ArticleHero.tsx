'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Badge from '@/components/ui/Badge';
import { useReveal } from '@/hooks/useReveal';
import { ArticleData } from '@/data/articles';

interface ArticleHeroProps {
  article: ArticleData;
}

export default function ArticleHero({ article }: ArticleHeroProps) {
  const textRef = useReveal();
  const imageRef = useReveal();

  return (
    <section className="section-canvas section-spacing-lg pt-32 md:pt-36">
      <div className="container-page">
        <div ref={textRef} className="reveal">
          <div className="flex items-center gap-2 flex-wrap mb-6">
            <Badge variant="default">{article.category}</Badge>
            <span className="text-slate font-inter" style={{ fontSize: '13px' }}>
              {article.date}
            </span>
            <span className="text-slate font-inter" style={{ fontSize: '13px' }}>
              ·
            </span>
            <span className="text-slate font-inter" style={{ fontSize: '13px' }}>
              {article.readingTime}
            </span>
          </div>
          <h1 className="text-display text-graphite mb-8">{article.title}</h1>
          <p
            className="text-steel font-inter leading-relaxed max-w-2xl"
            style={{ fontSize: '16px' }}
          >
            {article.excerpt}
          </p>
          <p className="text-slate font-inter mt-8" style={{ fontSize: '14px' }}>
            By {article.author} - {article.authorRole}
          </p>
        </div>

        <div ref={imageRef} className="reveal reveal-delay-1 mt-12">
          {article.image ? (
            <div className="image-wrapper aspect-[16/9] rounded-lg overflow-hidden">
              <AppImage
                src={article.image}
                alt={article.imageAlt ?? `${article.title} - article imagery`}
                fill
                className="object-cover w-full h-full"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
          ) : (
            /* Typographic band - used when no genuine article imagery exists */
            <div className="bg-graphite rounded-lg overflow-hidden noise-overlay relative p-10 md:p-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Category
                </p>
                <p
                  className="font-polysans text-white"
                  style={{
                    fontSize: 'clamp(28px, 3.5vw, 48px)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1.05,
                  }}
                >
                  {article.category}
                </p>
              </div>
              <p
                className="font-inter"
                style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}
              >
                {article.date} · {article.readingTime}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
