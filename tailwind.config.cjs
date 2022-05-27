const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        waves: "wave 15s infinite linear"
      },
      fontFamily: {
        main: ['Zen Kaku Gothic Antique', ...defaultTheme.fontFamily.sans],
        futura: ['futura-pt', 'Zen Kaku Gothic Antique', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('tailwindcss-brand-colors')],
};
