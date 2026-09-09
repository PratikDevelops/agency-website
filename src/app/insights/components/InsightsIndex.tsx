'use client';

import React, { useState } from 'react';
import { articles, articleCategories } from '@/data/articles';
import ArticleCard from '@/components/ui/ArticleCard';

export default function InsightsIndex() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? articles : articles.filter((a) => a.category === active);

  const [featured, ...rest] = filtered;

  return (
    <>
      {/* Filter row - horizontal scroll on mobile */}
      <section
        className="section-canvas"
        style={{ paddingBottom: '60px' }}
        aria-label="Article filters"
      >
        <div className="container-page">
          <div className="flex items-center gap-4">
            <span className="eyebrow flex-shrink-0">Browse</span>
            <div
              className="overflow-x-auto py-2 flex-1 min-w-0"
              style={{ scrollbarWidth: 'none' }}
              role="group"
              aria-label="Filter articles by category"
            >
              <div className="flex gap-2 snap-x snap-start [&::-webkit-scrollbar]:hidden">
                {articleCategories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setActive(c)}
                    aria-pressed={active === c}
                    className={`snap-start flex-shrink-0 rounded-full px-4 py-2 font-inter text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-orange ${
                      active === c
                        ? 'bg-graphite text-white'
                        : 'border border-mist text-graphite hover:bg-ash'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-ash section-spacing" aria-label="Articles">
        <div className="container-page">
          {featured && (
            <div className="mb-14">
              <ArticleCard
                slug={featured.slug}
                title={featured.title}
                excerpt={featured.excerpt}
                category={featured.category}
                date={featured.date}
                readingTime={featured.readingTime}
                image={featured.image}
                imageAlt={featured.imageAlt}
                size="large"
              />
            </div>
          )}

          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((article) => (
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
          )}

          {!featured && (
            <p className="text-steel font-inter leading-relaxed" style={{ fontSize: '16px' }}>
              No articles in this category yet - check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
