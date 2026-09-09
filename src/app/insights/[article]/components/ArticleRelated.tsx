'use client';

import React from 'react';
import { articles } from '@/data/articles';
import ArticleCard from '@/components/ui/ArticleCard';
import { useReveal } from '@/hooks/useReveal';

interface ArticleRelatedProps {
  currentSlug: string;
  relatedSlugs: string[];
}

export default function ArticleRelated({ currentSlug, relatedSlugs }: ArticleRelatedProps) {
  const ref = useReveal();

  const related = relatedSlugs
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter((a) => a && a.slug !== currentSlug)
    .slice(0, 3);

  if (!related.length) return null;

  return (
    <section className="section-ash section-spacing">
      <div className="container-page">
        <div ref={ref} className="reveal mb-12">
          <p className="eyebrow mb-4">Keep Reading</p>
          <h2 className="text-heading-lg text-graphite max-w-lg">Related articles.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((article) => (
            <ArticleCard
              key={article.slug}
              slug={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              category={article.category}
              date={article.date}
              readingTime={article.readingTime}
              image={article.image}
              imageAlt={article.imageAlt}
              size="small"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
