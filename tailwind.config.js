/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            colors: {
                graphite: { DEFAULT: 'var(--color-graphite)' },
                'canvas-white': { DEFAULT: 'var(--color-canvas-white)' },
                ash: { DEFAULT: 'var(--color-ash)' },
                fog: { DEFAULT: 'var(--color-fog)' },
                ivory: { DEFAULT: 'var(--color-ivory)' },
                steel: { DEFAULT: 'var(--color-steel)' },
                slate: { DEFAULT: 'var(--color-slate)' },
                mist: { DEFAULT: 'var(--color-mist)' },
                'ember-orange': { DEFAULT: 'var(--color-ember-orange)' },
                brass: { DEFAULT: 'var(--color-brass)' },
                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'var(--primary-foreground)',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'var(--secondary-foreground)',
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                    foreground: 'var(--accent-foreground)',
                },
                muted: {
                    DEFAULT: 'var(--muted)',
                    foreground: 'var(--muted-foreground)',
                },
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                border: 'var(--border)',
                card: {
                    DEFAULT: 'var(--card)',
                    foreground: 'var(--card-foreground)',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                polysans: ['var(--font-polysans)', 'sans-serif'],
            },
            borderRadius: {
                sm: 'var(--radius-sm)',
                DEFAULT: 'var(--radius-lg)',
                lg: 'var(--radius-lg)',
                xl: 'var(--radius-xl)',
                '2xl': 'var(--radius-2xl)',
                full: 'var(--radius-full)',
                tags: 'var(--radius-tags)',
                buttons: 'var(--radius-buttons)',
                'nav-pills': 'var(--radius-nav-pills)',
            },
            letterSpacing: {
                tightest: '-0.05em',
                tighter: '-0.02em',
                widest: '0.1em',
            },
            maxWidth: {
                page: '1200px',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(24px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
            animation: {
                'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'fade-in': 'fadeIn 0.5s ease forwards',
                'slide-in': 'slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};