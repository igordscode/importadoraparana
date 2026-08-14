/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          dark: '#080C14',
          card: '#0F172A',
          border: '#1E293B',
          amber: '#F59E0B',
          amberDark: '#D97706',
          cyan: '#06B6D4',
          emerald: '#10B981',
          danger: '#EF4444'
        },
        ip: {
          blue: '#0A52CC',
          blueDark: '#0039A6',
          navy: '#081C42',
          navyDark: '#051028',
          teal: '#00A88F',
          purple: '#6B21A8',
          gptw: '#FFC72C',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
