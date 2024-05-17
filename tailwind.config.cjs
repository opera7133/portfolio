const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        waves: "wave 15s infinite linear"
      },
      fontFamily: {
        sans: ['Zen Kaku Gothic Antique', ...defaultTheme.fontFamily.sans],
        futura: ['futura-pt', 'Zen Kaku Gothic Antique', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-brand-colors')],
};
