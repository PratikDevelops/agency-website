'use client';

import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { useReveal } from '@/hooks/useReveal';
import { CaseImage } from '@/data/projects';

interface CaseChallengeProps {
  challenge: string;
  image?: CaseImage;
}

export default function CaseChallenge({ challenge, image }: CaseChallengeProps) {
  const labelRef = useReveal();
  const textRef = useReveal();
  const imageRef = useReveal();

  return (
    <section className="section-ash section-spacing">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div ref={labelRef} className="reveal lg:col-span-4">
            <p className="eyebrow mb-4">The Challenge</p>
            <span
              className="font-inter text-ember-orange"
              style={{ fontSize: '48px', lineHeight: 1 }}
            >
              01
            </span>
          </div>
          <div ref={textRef} className="reveal reveal-delay-1 lg:col-span-8">
            <p
              className="font-inter text-graphite leading-relaxed"
              style={{ fontSize: 'clamp(20px, 2vw, 26px)', lineHeight: 1.45 }}
            >
              {challenge}
            </p>
            {image && (
              <figure ref={imageRef} className="reveal reveal-delay-2 mt-10">
                <div className="image-wrapper aspect-[4/3] rounded-lg overflow-hidden">
                  <AppImage
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {image.caption && (
                  <figcaption className="text-slate font-inter text-sm mt-3 leading-relaxed">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
