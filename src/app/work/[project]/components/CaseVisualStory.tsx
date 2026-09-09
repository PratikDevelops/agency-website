'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { useReveal } from '@/hooks/useReveal';
import { CaseImage } from '@/data/projects';

interface CaseVisualStoryProps {
  images: CaseImage[];
}

export default function CaseVisualStory({ images }: CaseVisualStoryProps) {
  const ref = useReveal();

  if (!images.length) return null;

  return (
    <section className="section-canvas section-spacing">
      <div className="container-page">
        <div ref={ref} className="reveal mb-12">
          <p className="eyebrow mb-4">Visual Story</p>
          <h2 className="text-heading-lg text-graphite max-w-lg">The work, closer up.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img) => (
            <figure key={img.src + img.alt} className="reveal flex flex-col gap-3">
              <div className="image-wrapper aspect-[4/3] rounded-lg overflow-hidden">
                <AppImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
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
    </section>
  );
}
