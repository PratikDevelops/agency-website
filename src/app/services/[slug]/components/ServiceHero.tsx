'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import Button from '@/components/ui/Button';
import { useReveal } from '@/hooks/useReveal';

interface ServiceHeroProps {
  number: string;
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  heroImage?: string;
  heroImageAlt?: string;
}

export default function ServiceHero({
  number,
  title,
  eyebrow,
  headline,
  description,
  heroImage,
  heroImageAlt,
}: ServiceHeroProps) {
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section className="section-canvas section-spacing-lg pt-32 md:pt-40">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div ref={leftRef} className="reveal">
            <p className="eyebrow mb-5">
              {number} / {eyebrow.toUpperCase()}
            </p>
            <h1 className="text-display text-graphite mb-6 leading-none">{headline}</h1>
            <p
              className="text-steel font-inter leading-relaxed mb-10 max-w-lg"
              style={{ fontSize: '17px' }}
            >
              {description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact" variant="primary">
                Start a {title} Project
              </Button>
              <Button href="/work" variant="ghost">
                View Related Work
              </Button>
            </div>
          </div>

          {/* Right: image */}
          {heroImage && (
            <div ref={rightRef} className="reveal reveal-delay-2">
              <div className="image-wrapper aspect-[4/3] rounded-lg overflow-hidden">
                <AppImage
                  src={heroImage}
                  alt={heroImageAlt || `${title} service`}
                  fill
                  className="object-cover w-full h-full"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
