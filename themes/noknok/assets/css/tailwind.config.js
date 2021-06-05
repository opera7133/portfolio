const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'media'
}
