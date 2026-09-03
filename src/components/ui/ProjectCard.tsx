import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Badge from '@/components/ui/Badge';

interface ProjectCardProps {
    slug: string;
    title: string;
    industry: string;
    services: string[];
    outcome: string;
    image: string;
    imageAlt: string;
    size?: 'large' | 'medium' | 'small';
}

export default function ProjectCard({
    slug,
    title,
    industry,
    services,
    outcome,
    image,
    imageAlt,
    size = 'medium',
}: ProjectCardProps) {
    const aspectClass =
        size === 'large' ? 'aspect-[16/7]' : size === 'small' ? 'aspect-[4/3]' : 'aspect-[4/3]';

    return (
        <Link
            href={`/work/${slug}`}
            className="project-card group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-orange"
        >
            <div className={`image-wrapper ${aspectClass} rounded-lg overflow-hidden mb-5`}>
                <AppImage
                    src={image}
                    alt={imageAlt}
                    fill
                    className="project-card-img object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="eyebrow">{industry}</span>
                    </div>
                    <h3
                        className="font-polysans text-graphite mb-2 group-hover:text-ember-orange transition-colors"
                        style={{ fontSize: '20px', letterSpacing: '-0.02em', fontWeight: 400 }}
                    >
                        {title}
                    </h3>
                    <div className="flex gap-2 flex-wrap mb-3">
                        {services.slice(0, 2).map((s) => (
                            <Badge key={s} variant="default">{s}</Badge>
                        ))}
                    </div>
                    <p className="text-ember-orange font-inter font-medium text-sm">{outcome}</p>
                </div>
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center border border-mist rounded-full group-hover:border-graphite group-hover:bg-graphite group-hover:text-white transition-all duration-200 mt-1">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </div>
        </Link>
    );
}