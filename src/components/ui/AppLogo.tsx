'use client';

import React, { memo, useMemo } from 'react';
import AppImage from './AppImage';

interface AppLogoProps {
  /** Optional image source. Omitted → typographic monogram mark (no broken img). */
  src?: string;
  size?: number;
  className?: string;
  onClick?: () => void;
}

const AppLogo = memo(function AppLogo({ src, size = 40, className = '', onClick }: AppLogoProps) {
  const containerClassName = useMemo(() => {
    const classes = ['flex items-center'];
    if (onClick) classes.push('cursor-pointer hover:opacity-80 transition-opacity');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [onClick, className]);

  if (!src) {
    /* Text-based mark - a monogram tile using design tokens. Used when no logo asset
       exists, so the brand renders without a broken <img>. */
    return (
      <div
        className={containerClassName}
        onClick={onClick}
        style={{ width: size, height: size, flexShrink: 0 }}
        aria-label="AgencyStudio"
        role="img"
      >
        <span
          className="flex items-center justify-center w-full h-full bg-graphite rounded-lg text-white font-polysans select-none"
          style={{ fontSize: Math.round(size * 0.52), lineHeight: 1, fontWeight: 500 }}
          aria-hidden="true"
        >
          A
        </span>
      </div>
    );
  }

  return (
    <div className={containerClassName} onClick={onClick}>
      <AppImage
        src={src}
        alt="AgencyStudio logo"
        width={size}
        height={size}
        className="flex-shrink-0"
        priority
        unoptimized={src.endsWith('.svg')}
      />
    </div>
  );
});

AppLogo.displayName = 'AppLogo';

export default AppLogo;
