'use client';

import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    company: string;
    service: string;
    budget: string;
    details: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    details?: string;
}

const serviceOptions = [
    'Web Development',
    'App Development',
    'SEO',
    'Graphic Design',
    'UI/UX Design',
    'Video Editing',
    'Ad Marketing',
    'Social Media Management',
    'Automation',
    'Multiple services',
    'Not sure yet',
];

const budgetOptions = [
    'Under $5,000',
    '$5,000 – $10,000',
    '$10,000 – $25,000',
    '$25,000 – $50,000',
    '$50,000+',
    'Ongoing retainer',
];

const inputClass =
    'w-full bg-canvas-white border border-mist px-4 py-3 font-inter text-graphite placeholder-slate focus:outline-none focus:border-graphite transition-colors duration-200 rounded-sm text-sm';

const labelClass = 'block font-inter text-graphite font-medium text-sm mb-2';

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        details: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const validate = (): FormErrors => {
        const errs: FormErrors = {};
        if (!formData.name.trim()) errs.name = 'Name is required.';
        if (!formData.email.trim()) {
            errs.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errs.email = 'Please enter a valid email address.';
        }
        if (!formData.details.trim()) errs.details = 'Please tell us a bit about your project.';
        return errs;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setStatus('submitting');
        // Simulate submission
        await new Promise((res) => setTimeout(res, 1200));
        setStatus('success');
    };

    if (status === 'success') {
        return (
            <div className="bg-canvas-white border border-mist rounded-lg p-12 text-center">
                <div className="w-12 h-12 rounded-full bg-ash flex items-center justify-center mx-auto mb-6">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l4 4 8-8" stroke="var(--color-ember-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <h3 className="font-polysans text-graphite mb-3" style={{ fontSize: '22px', letterSpacing: '-0.02em', fontWeight: 400 }}>
                    Message received.
                </h3>
                <p className="font-inter text-steel text-sm leading-relaxed max-w-sm mx-auto">
                    Thanks for reaching out. We will review your project brief and respond within 48 hours.
                </p>
            </div>
        );
    }

    return (
        <div>
            <h2 className="font-polysans text-graphite mb-8" style={{ fontSize: '24px', letterSpacing: '-0.02em', fontWeight: 400 }}>
                Project Inquiry
            </h2>
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6" aria-label="Project inquiry form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="name" className={labelClass}>Name *</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`${inputClass} ${errors.name ? 'border-red-400' : ''}`}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                    {errors.name && (
                        <p id="name-error" className="font-inter text-red-500 text-xs mt-1" role="alert">{errors.name}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="email" className={labelClass}>Email *</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={`${inputClass} ${errors.email ? 'border-red-400' : ''}`}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        />
                    {errors.email && (
                        <p id="email-error" className="font-inter text-red-500 text-xs mt-1" role="alert">{errors.email}</p>
                    )}
                </div>
            </div>

            <div>
                <label htmlFor="company" className={labelClass}>Company</label>
                <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name (optional)"
                    className={inputClass}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="service" className={labelClass}>Service</label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={inputClass}
                    >
                        <option value="">Select a service</option>
                        {serviceOptions.map((s) => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="budget" className={labelClass}>Budget</label>
                    <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={inputClass}
                    >
                        <option value="">Select a budget range</option>
                        {budgetOptions.map((b) => (
                            <option key={b} value={b}>{b}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="details" className={labelClass}>Project Details *</label>
                <textarea
                    id="details"
                    name="details"
                    rows={5}
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Tell us about your project - what you're building, your goals and any relevant context."
                    className={`${inputClass} resize-none ${errors.details ? 'border-red-400' : ''}`}
                    aria-describedby={errors.details ? 'details-error' : undefined}
                    />
                {errors.details && (
                    <p id="details-error" className="font-inter text-red-500 text-xs mt-1" role="alert">{errors.details}</p>
                )}
            </div>

            <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary justify-center w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {status === 'submitting' ? 'Sending...' : 'Send Project Inquiry'}
                {status !== 'submitting' && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </button>
        </form>
        </div >
    );
}