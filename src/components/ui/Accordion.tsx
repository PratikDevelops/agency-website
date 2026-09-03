'use client';

import React, { useState, useRef } from 'react';

interface AccordionItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: AccordionItem[];
    className?: string;
}

function AccordionSingle({ item, isOpen, onToggle }: { item: AccordionItem; isOpen: boolean; onToggle: () => void }) {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="border-b border-mist">
            <button
                className="w-full flex items-center justify-between py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-orange group"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <span
                    className="font-polysans text-graphite pr-8"
                    style={{ fontSize: '16px', letterSpacing: '-0.02em', fontWeight: 400 }}
                >
                    {item.question}
                </span>
                <span
                    className={`flex-shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </span>
            </button>
            <div
                className="accordion-content"
                style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight ?? 400}px` : '0', opacity: isOpen ? 1 : 0 }}
            >
                <div ref={contentRef} className="pb-5">
                    <p className="text-steel font-inter leading-relaxed" style={{ fontSize: '15px' }}>
                        {item.answer}
                    </p>
                </div>
            </div>
        </div >
    );
}

export default function Accordion({ items, className = '' }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className={`border-t border-mist ${className}`}>
            {items.map((item, i) => (
                <AccordionSingle
                    key={i}
                    item={item}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
            ))}
        </div>
    );
}