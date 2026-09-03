'use client';

import { useEffect, useRef } from 'react';

export function useReveal(threshold = 0.1) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref?.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold, rootMargin: '0px 0px -40px 0px' }
        );

        const revealEls = el?.querySelectorAll<HTMLElement>('.reveal');
        if (el?.classList?.contains('reveal')) observer?.observe(el);
        revealEls?.forEach((r) => observer?.observe(r));

        return () => observer?.disconnect();
    }, [threshold]);

    return ref;
}