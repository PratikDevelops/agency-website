'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { useReveal } from '@/hooks/useReveal';
import { ArticleBlock } from '@/data/articles';

interface ArticleBodyProps {
  body: ArticleBlock[];
}

export default function ArticleBody({ body }: ArticleBodyProps) {
  const ref = useReveal();

  return (
    <section className="section-canvas section-spacing">
      <div className="container-page">
        <div
          ref={ref}
          className="reveal max-w-2xl mx-auto flex flex-col gap-7"
          style={{ fontSize: '17px', lineHeight: 1.7 }}
        >
          {body.map((block, i) => {
            switch (block.type) {
              case 'paragraph':
                return (
                  <p key={i} className="text-steel font-inter leading-relaxed">
                    {block.text}
                  </p>
                );
              case 'heading':
                return (
                  <h2
                    key={i}
                    className="font-polysans text-graphite"
                    style={{ fontSize: 'clamp(22px, 2.4vw, 30px)', letterSpacing: '-0.02em' }}
                  >
                    {block.text}
                  </h2>
                );
              case 'quote':
                return (
                  <blockquote
                    key={i}
                    className="border-l-2 border-ember-orange pl-6 font-polysans text-graphite"
                    style={{
                      fontSize: 'clamp(20px, 2.2vw, 28px)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.35,
                    }}
                  >
                    {block.text}
                    {block.attribution && (
                      <footer className="text-slate font-inter mt-3" style={{ fontSize: '14px' }}>
                        - {block.attribution}
                      </footer>
                    )}
                  </blockquote>
                );
              case 'list':
                return (
                  <ul key={i} className="flex flex-col gap-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className="flex-shrink-0 mt-1 text-ember-orange"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M2 7l3.5 3.5L12 3"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="text-steel font-inter leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              case 'image':
                return (
                  <figure key={i} className="flex flex-col gap-3">
                    <div className="image-wrapper aspect-[16/9] rounded-lg overflow-hidden">
                      <AppImage
                        src={block.src}
                        alt={block.alt}
                        fill
                        className="object-cover w-full h-full"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                    </div>
                    {block.caption && (
                      <figcaption className="text-slate font-inter text-sm leading-relaxed">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </section>
  );
}
