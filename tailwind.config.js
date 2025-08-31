/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-color': '#fdf6e3',
        'card-background': '#fffaf0',
        'text-color': '#5d4037',
        'header-footer-bg': '#d2b48c',
        'button-bg': '#a1887f',
        'button-hover-bg': '#8d6e63',
        'button-active-bg': '#795548',
        'accent-primary': '#ff6b6b',
        'accent-secondary': '#4ecdc4',
        'accent-tertiary': '#45b7d1',
        'warm-orange': '#ffb347',
        'soft-purple': '#a29bfe',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-soft': 'bounce 2s infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 20px rgba(255, 107, 107, 0.4)',
        'glow-blue': '0 0 20px rgba(69, 183, 209, 0.4)',
        'card': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'button': '0 4px 12px -2px rgba(161, 136, 127, 0.3), 0 2px 8px -2px rgba(93, 64, 55, 0.2)',
        'button-hover': '0 8px 20px -4px rgba(141, 110, 99, 0.4), 0 4px 12px -2px rgba(93, 64, 55, 0.25)',
      }
    },
  },
  plugins: [],
}
