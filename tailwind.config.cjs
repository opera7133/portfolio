const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['Zen Kaku Gothic Antique', ...defaultTheme.fontFamily.sans],
        futura: ['Futura PT', 'Zen Kaku Gothic Antique', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [require('tailwindcss-brand-colors')],
};
