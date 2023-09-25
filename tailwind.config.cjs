/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#EE7300",
      white: "#FFF",
    },
    fontFamily: {
      min: ["游明朝", "Yu Mincho", "游明朝体", "YuMincho", "HG明朝B", "ＭＳ Ｐ明朝",
      "MS PMincho", "MS 明朝", "serif"]
    },
    extend: {

    },
  },
  plugins: [],
}