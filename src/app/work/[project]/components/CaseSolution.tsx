'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { useReveal } from '@/hooks/useReveal';
import { CaseImage } from '@/data/projects';

interface CaseSolutionProps {
  items: Array<{ heading: string; body: string }>;
  images?: CaseImage[];
}

export default function CaseSolution({ items, images }: CaseSolutionProps) {
  const labelRef = useReveal();
  const listRef = useReveal();
  const imageRef = useReveal();

  if (!items.length) return null;

  return (
    <section className="section-ash section-spacing">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div ref={labelRef} className="reveal lg:col-span-4">
            <p className="eyebrow mb-4">The Solution</p>
            <span
              className="font-inter text-ember-orange"
              style={{ fontSize: '48px', lineHeight: 1 }}
            >
              03
            </span>
          </div>
          <div ref={listRef} className="reveal reveal-delay-1 lg:col-span-8">
            <div className="flex flex-col gap-8">
              {items.map((item) => (
                <div key={item.heading} className="flex flex-col gap-2">
                  <h3
                    className="font-polysans text-graphite"
                    style={{ fontSize: '20px', letterSpacing: '-0.02em' }}
                  >
                    {item.heading}
                  </h3>
                  <p className="font-inter text-steel leading-relaxed" style={{ fontSize: '15px' }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {images && images.length > 0 && (
          <div ref={imageRef} className="reveal mt-12">
            <div className="flex flex-col gap-8">
              {images.map((img) => (
                <figure key={img.src + img.alt} className="flex flex-col gap-3">
                  <div className="image-wrapper aspect-[16/9] rounded-lg overflow-hidden">
                    <AppImage
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                  {img.caption && (
                    <figcaption className="text-slate font-inter text-sm leading-relaxed">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
