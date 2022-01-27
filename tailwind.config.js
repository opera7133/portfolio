const production = !process.env.ROLLUP_WATCH;
module.exports = {
  content: ["./src/**/*.svelte", "./src/**/*.html"],
  theme: {
    fontFamily: {
      sans: [
        "Poppins",
        "Noto Sans JP",
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
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { transform: "translateY(70px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
