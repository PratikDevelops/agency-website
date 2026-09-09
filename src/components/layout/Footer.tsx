import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { services } from '@/data/services';

const footerLinks = {
  services: services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  company: [
    { label: 'Work', href: '/work' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
    { label: 'Insights', href: '/insights' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="section-ash border-t border-mist">
      <div className="container-page py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-mist">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-orange w-fit"
            >
              <AppLogo size={28} />
              <span
                className="font-polysans text-graphite"
                style={{ fontSize: '16px', letterSpacing: '-0.02em' }}
              >
                AgencyStudio
              </span>
            </Link>
            <p className="text-steel text-sm leading-relaxed max-w-xs font-inter">
              Strategy, design, technology and growth - working as one team for ambitious
              businesses.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="mailto:hello@agencystudio.com"
                className="text-slate text-sm hover:text-graphite transition-colors font-inter"
              >
                hello@agencystudio.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="eyebrow mb-4">Services</p>
            <ul className="flex flex-col gap-3">
              {footerLinks?.services?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    className="text-steel text-sm hover:text-graphite transition-colors font-inter"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="eyebrow mb-4">Company</p>
            <ul className="flex flex-col gap-3">
              {footerLinks?.company?.map((link) => (
                <li key={link?.label}>
                  <Link
                    href={link?.href}
                    className="text-steel text-sm hover:text-graphite transition-colors font-inter"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8">
          <p className="text-slate text-sm font-inter">© 2026 AgencyStudio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-slate text-sm hover:text-graphite transition-colors font-inter"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-slate text-sm hover:text-graphite transition-colors font-inter"
            >
              Terms
            </Link>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-graphite transition-colors"
                aria-label="Twitter"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-graphite transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
