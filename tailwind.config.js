/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'BookA': ['BookA', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'AF-bleu': {
          900: '#0494b4',
          700: '#0097b2',
          500: '#0f9fb6',
          300: '#5ebbcd',
          100: '#7accd5',
        },
        'AF-gray': {
          900: '#4e4e4e',
          700: '#686868',
          500: '#848484',
          300: '#e6eff1',
          100: '#f4f4f4',
        },
      },
    },
    
  },
  plugins: [],
}