import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'ember' | 'brass';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variantClass =
    variant === 'ember' ? 'tag-ember' : variant === 'brass' ? 'bg-ivory text-brass' : 'tag';

  return <span className={`tag ${variantClass} ${className}`}>{children}</span>;
}
