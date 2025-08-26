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
      }
    },
  },
  plugins: [],
}
