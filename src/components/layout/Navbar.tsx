'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Insights', href: '/insights' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'
                    }`}
                style={{ backgroundColor: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none', borderBottom: scrolled ? '1px solid var(--color-mist)' : 'none' }}
            >
                <div className="container-page">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-orange">
                            <AppLogo size={32} />
                            <span
                                className="font-polysans text-graphite"
                                style={{ fontSize: '18px', letterSpacing: '-0.02em', fontWeight: 400 }}
                            >
                                AgencyStudio
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden lg:flex items-center">
                            <div className="nav-pill flex items-center gap-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`font-polysans px-4 py-2 transition-all duration-200 rounded-full text-sm ${isActive(link.href)
                                            ? 'bg-graphite text-white' : 'text-graphite hover:bg-white'
                                            }`}
                                        style={{ letterSpacing: '-0.02em', fontWeight: 400 }}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </nav>

                        {/* CTA + Mobile Toggle */}
                        <div className="flex items-center gap-3">
                            <Link href="/contact" className="btn-primary hidden sm:inline-flex text-sm">
                                Start a Project
                            </Link>
                            <button
                                className="lg:hidden flex flex-col gap-1.5 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-orange"
                                onClick={() => setMobileOpen(!mobileOpen)}
                                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                                aria-expanded={mobileOpen}
                            >
                                <span
                                    className={`block h-px w-6 bg-graphite transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`}
                                />
                                <span
                                    className={`block h-px w-4 bg-graphite transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
                                />
                                <span
                                    className={`block h-px w-6 bg-graphite transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </header >

            {/* Mobile Menu Overlay */}
            {
                mobileOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-canvas-white flex flex-col"
                        style={{ paddingTop: '80px' }}
                    >
                        <div className="container-page flex-1 flex flex-col py-8">
                            <nav className="flex flex-col gap-1">
                                {navLinks.map((link, i) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`font-polysans text-2xl py-4 border-b border-mist transition-colors ${isActive(link.href) ? 'text-ember-orange' : 'text-graphite hover:text-steel'
                                            }`}
                                        style={{ letterSpacing: '-0.02em', fontWeight: 400, animationDelay: `${i * 60}ms` }}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                            <div className="mt-8">
                                <Link href="/contact" className="btn-primary w-full justify-center">
                                    Start a Project
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}