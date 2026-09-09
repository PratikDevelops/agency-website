'use client';

import React, { useEffect, useRef } from 'react';
import Accordion from '@/components/ui/Accordion';

const faqs = [
  {
    question: 'What type of projects do you take?',
    answer:
      'We work with ambitious businesses across all industries - from early-stage startups launching their first product to established companies rebuilding outdated digital infrastructure. Our sweet spot is projects where strategy, design and technical execution need to work together.',
  },
  {
    question: 'How does the process work?',
    answer:
      'Every engagement starts with a discovery session where we map your goals, users and constraints. From there we define scope, architecture and timeline before any design or development begins. You get regular milestone reviews, a staging environment throughout, and full documentation on handover.',
  },
  {
    question: 'Can I combine multiple services?',
    answer:
      'Yes - and this is one of our core advantages. Because all nine disciplines are under one roof, combining web development with SEO, or branding with UI/UX design, is straightforward. You get one brief, one team, one point of contact.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'A focused marketing site takes 4-6 weeks. A web application or e-commerce platform typically runs 8-16 weeks. A full brand identity plus website can be 10-14 weeks. We give you a detailed timeline in the scoping phase before any work begins.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer:
      'All projects include a post-launch support period. We also offer monthly retainers for teams that need continuous development, content updates, SEO monitoring or marketing management after the initial engagement.',
  },
  {
    question: 'How do you price projects?',
    answer:
      'Most projects are priced as fixed-scope engagements after a thorough discovery session. For longer-term work we offer monthly retainers. We publish starting prices as a guide - final pricing reflects the specific scope, complexity and timeline of your project.',
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef?.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.querySelectorAll<HTMLElement>('.reveal').forEach((r, i) => {
              setTimeout(() => r.classList.add('visible'), i * 80);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer?.observe(el);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-ash section-spacing" aria-label="FAQ">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 reveal">
            <p className="eyebrow mb-4">Common Questions</p>
            <h2 className="text-heading-lg text-graphite">Answers before you ask.</h2>
            <p className="font-inter text-slate text-sm leading-relaxed mt-4">
              Still have questions? Send us a message and we will respond within one business day.
            </p>
          </div>
          <div className="lg:col-span-8 reveal reveal-delay-1">
            <Accordion items={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
