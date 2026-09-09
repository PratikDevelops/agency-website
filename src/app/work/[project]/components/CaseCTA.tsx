import React from 'react';
import Button from '@/components/ui/Button';

interface CaseCTAProps {
  title: string;
  industry: string;
}

export default function CaseCTA({ title, industry }: CaseCTAProps) {
  return (
    <section className="bg-graphite section-spacing">
      <div className="container-page">
        <div className="rounded-lg p-12 lg:p-20 relative overflow-hidden noise-overlay">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-lg">
              <p className="eyebrow mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Next Project
              </p>
              <h2
                className="font-polysans text-white mb-4"
                style={{
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  fontWeight: 400,
                }}
              >
                Have a similar challenge? Let&apos;s talk.
              </h2>
              <p
                className="font-inter leading-relaxed"
                style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)' }}
              >
                If your business has a problem like {title}&apos;s - across the{' '}
                {industry.toLowerCase()} space or anywhere else - we&apos;ll come back within 48
                hours with a clear plan.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Button
                href="/contact"
                variant="primary"
                className="bg-white text-graphite border-white hover:opacity-90"
              >
                Start a Conversation
              </Button>
              <Button
                href="/work"
                variant="ghost"
                className="border-white/30 text-white hover:bg-white hover:text-graphite"
              >
                View All Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
