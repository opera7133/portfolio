const production = !process.env.ROLLUP_WATCH;
module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.svelte',
      './src/**/*.html',
    ],
    enabled: production,
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: [
        'Avenir',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'Hiragino Sans',
        'ヒラギノ角ゴシック',
        'メイリオ',
        'Meiryo',
        'YuGothic',
        'Yu Gothic',
        'ＭＳ Ｐゴシック',
        'MS PGothic',
        'sans-serif'
      ]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
