/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          pink: '#c14552',
          yellow: '#fbc218',
          teal: '#63D2A1',
          black: '#0b0b0b',
          border: '#232323',
        },
      },
    },
  },
  plugins: [],
};
