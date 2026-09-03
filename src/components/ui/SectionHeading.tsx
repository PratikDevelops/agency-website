import React from 'react';

interface SectionHeadingProps {
    eyebrow?: string;
    headline: string;
    subtext?: string;
    align?: 'left' | 'center';
    className?: string;
}

export default function SectionHeading({
    eyebrow,
    headline,
    subtext,
    align = 'left',
    className = '',
}: SectionHeadingProps) {
    const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

    return (
        <div className={`flex flex-col gap-4 ${alignClass} ${className}`}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 className="text-heading-lg text-graphite max-w-2xl">{headline}</h2>
            {subtext && (
                <p className="text-steel font-inter leading-relaxed max-w-xl" style={{ fontSize: '16px' }}>
                    {subtext}
                </p>
            )}
        </div>
    );
}