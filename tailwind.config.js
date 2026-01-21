/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bolt-blue-lighter': '#F5F9FF',
        'bolt-blue-light': '#E6F3FF',
        'bolt-blue-medium': '#DCE8FF',
        'bolt-blue-dark': '#B3D9FF',
        'bolt-accent-blue': '#4A90E2',
        'bolt-accent-light-blue': '#6BA3E8',
        'bolt-dark-blue': '#1A365D',
        'dark-primary': '#0A0E1A',
        'dark-secondary': '#1A1F2E',
        'glass-blue': 'rgba(74, 144, 226, 0.1)',
        'glass-blue-border': 'rgba(74, 144, 226, 0.2)',
        'neon-blue': '#00D4FF',
        'electric-blue': '#1E90FF',
      },
      boxShadow: {
        'soft': '0 8px 16px rgba(0, 0, 0, 0.08)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'neon': '0 0 20px rgba(0, 212, 255, 0.3)',
        'glow': '0 0 40px rgba(30, 144, 255, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.8s ease-out',
        'fade-in': 'fade-in 1s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};