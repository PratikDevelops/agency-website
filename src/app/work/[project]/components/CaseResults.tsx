'use client';

import React from 'react';
import { useReveal } from '@/hooks/useReveal';

interface CaseResultsProps {
  results: string[];
  context: string;
  /** 'metrics' = large numeric stats (verified figures only). 'qualitative' = delivered-scope statements. */
  style?: 'metrics' | 'qualitative';
}

export default function CaseResults({ results, context, style = 'metrics' }: CaseResultsProps) {
  const ref = useReveal();
  const qualitative = style === 'qualitative';

  if (!results.length) return null;

  return (
    <section className="bg-graphite section-spacing noise-overlay relative overflow-hidden">
      <div className="container-page">
        <div ref={ref} className="reveal">
          <p className="eyebrow mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>
            The Results
          </p>
          <h2
            className="font-polysans text-white"
            style={{
              fontSize: 'clamp(28px, 3vw, 40px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            {qualitative ? 'What we delivered.' : 'Measured, not guessed.'}
          </h2>

          {qualitative ? (
            /* Numbered delivered-scope rows - honest outcomes, no invented metrics */
            <div className="mt-12 border-t border-white/10">
              {results.map((result, i) => (
                <div
                  key={result}
                  className="flex items-baseline gap-6 py-5 border-b border-white/10"
                >
                  <span
                    className="font-inter flex-shrink-0"
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.08em',
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.4)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p
                    className="font-polysans text-white"
                    style={{
                      fontSize: 'clamp(20px, 2.2vw, 28px)',
                      letterSpacing: '-0.02em',
                      lineHeight: 1.3,
                    }}
                  >
                    {result}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
              {results.map((result) => (
                <p
                  key={result}
                  className="font-polysans text-white leading-none"
                  style={{ fontSize: 'clamp(40px, 5vw, 68px)', letterSpacing: '-0.03em' }}
                >
                  {result}
                </p>
              ))}
            </div>
          )}

          <p
            className="font-inter leading-relaxed max-w-2xl mt-10"
            style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)' }}
          >
            {context}
          </p>
        </div>
      </div>
    </section>
  );
}
