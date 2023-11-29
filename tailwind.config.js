/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#262626",
        secondaryWhite: "#FFFFFF",
        thirth: "#988877",
        forth: "#9A8A78",
      },
    },
  },
  plugins: [],
};
