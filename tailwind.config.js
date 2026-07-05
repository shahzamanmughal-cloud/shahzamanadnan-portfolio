/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ---- Core token system -------------------------------------
        // Blueprint-black base, surgical-steel surfaces, scalpel-red accent.
        ink: {
          DEFAULT: '#0a0a0b',
          50: '#f4f4f5',
          100: '#e4e4e6',
          200: '#c6c6ca',
          300: '#9c9ca3',
          400: '#6f6f78',
          500: '#4a4a52',
          600: '#333338',
          700: '#232326',
          800: '#17171a',
          900: '#0f0f11',
          950: '#0a0a0b',
        },
        paper: {
          DEFAULT: '#f5f5f2',
          dim: '#c9c9c4',
        },
        scalpel: {
          DEFAULT: '#d4293b',
          bright: '#ff3b4e',
          deep: '#8f1424',
          glow: 'rgba(255, 59, 78, 0.35)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'blueprint-grid':
          'linear-gradient(rgba(245,245,242,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,242,0.045) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(circle at center, rgba(212,41,59,0.16) 0%, transparent 70%)',
      },
      backgroundSize: {
        grid: '44px 44px',
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 59, 78, 0.25)',
        'glow-lg': '0 0 80px rgba(255, 59, 78, 0.3)',
        card: '0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 40px -20px rgba(0,0,0,0.6)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: 0.6 },
          '100%': { transform: 'scale(1.6)', opacity: 0 },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scan-line': 'scan-line 3s linear infinite',
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 30s linear infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
