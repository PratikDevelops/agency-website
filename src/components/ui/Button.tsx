import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    variant?: 'primary' | 'ghost' | 'text-arrow';
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    external?: boolean;
}

export default function Button({
    variant = 'primary',
    href,
    onClick,
    children,
    className = '',
    type = 'button',
    disabled = false,
    external = false,
}: ButtonProps) {
    const baseClass =
        variant === 'primary'
            ? `btn-primary ${className}`
            : variant === 'ghost'
                ? `btn-ghost ${className}`
                : `link-arrow ${className}`;

    if (href) {
        if (external) {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass}>
                    {children}
                </a>
            );
        }
        return (
            <Link href={href} className={baseClass}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={baseClass}>
            {children}
        </button>
    );
}