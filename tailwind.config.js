const production = !process.env.ROLLUP_WATCH;
module.exports = {
  content: ["./src/**/*.svelte", "./src/**/*.html"],
  theme: {
    fontFamily: {
      body: [
        "Avenir",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "Hiragino Sans",
        "ヒラギノ角ゴシック",
        "メイリオ",
        "Meiryo",
        "YuGothic",
        "Yu Gothic",
        "ＭＳ Ｐゴシック",
        "MS PGothic",
        "sans-serif",
      ],
    },
  },
  plugins: [],
};
