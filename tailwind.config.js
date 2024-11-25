/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customHue: {
          lightest: '#CED6DB',
          lighter: '#91A3B6',
          light: '#5F6F92',
          DEFAULT: '#37406E', 
          dark: '#1A1A4A',
          darker: '#0C0726',
          darkest: '#000001',
        },
      },
    },
  },
  plugins: [],
};