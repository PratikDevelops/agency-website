import React from 'react';

const contactDetails = [
  {
    label: 'Email',
    value: 'hello@agencystudio.com',
    href: 'mailto:hello@agencystudio.com',
  },
  {
    label: 'Phone',
    value: '+1 (415) 882-4490',
    href: 'tel:+14158824490',
  },
  {
    label: 'Location',
    value: 'San Francisco, CA',
    href: null,
  },
  {
    label: 'Availability',
    value: 'Mon-Fri, 9am-6pm PT',
    href: null,
  },
];

const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Dribbble', href: 'https://dribbble.com', icon: 'dribbble' },
];

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2
          className="font-polysans text-graphite mb-6"
          style={{ fontSize: '24px', letterSpacing: '-0.02em', fontWeight: 400 }}
        >
          Get in touch
        </h2>
        <div className="flex flex-col gap-0 border border-mist rounded-lg overflow-hidden">
          {contactDetails?.map((item, i) => (
            <div
              key={item?.label}
              className={`flex items-start justify-between gap-4 p-5 bg-canvas-white ${i < contactDetails?.length - 1 ? 'border-b border-mist' : ''}`}
            >
              <span className="font-inter text-slate text-sm flex-shrink-0">{item?.label}</span>
              {item?.href ? (
                <a
                  href={item?.href}
                  className="font-inter text-graphite text-sm text-right hover:text-ember-orange transition-colors"
                >
                  {item?.value}
                </a>
              ) : (
                <span className="font-inter text-graphite text-sm text-right">{item?.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Book a call */}
      <div className="asymmetric-card p-8">
        <p
          className="font-polysans text-graphite mb-2"
          style={{ fontSize: '18px', letterSpacing: '-0.02em', fontWeight: 400 }}
        >
          Prefer a call?
        </p>
        <p className="font-inter text-steel text-sm leading-relaxed mb-6">
          Book a free 30-minute conversation to talk through your project with a member of our team.
        </p>
        <a
          href="mailto:hello@agencystudio.com?subject=Book a 30-minute call"
          className="link-arrow"
        >
          Book a 30-minute conversation
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* Social links */}
      <div>
        <p className="eyebrow mb-4">Follow us</p>
        <div className="flex items-center gap-3">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-mist rounded-sm hover:border-graphite hover:bg-graphite hover:text-white text-graphite transition-all duration-200"
            aria-label="Twitter"
          >
            <svg
              width="14"
              height="14"
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
            className="w-10 h-10 flex items-center justify-center border border-mist rounded-sm hover:border-graphite hover:bg-graphite hover:text-white text-graphite transition-all duration-200"
            aria-label="LinkedIn"
          >
            <svg
              width="14"
              height="14"
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
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-mist rounded-sm hover:border-graphite hover:bg-graphite hover:text-white text-graphite transition-all duration-200"
            aria-label="Dribbble"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
