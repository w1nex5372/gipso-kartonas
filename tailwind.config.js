/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        "50vh": "50vh",
      },
      colors: {
        primaryBlack: "#262626",
        secondaryWhite: "#FFFFFF",
        thirth: "#988877",
        forth: "#9A8A78",
      },
      spacing: {
        sm: "640px", // Change this value to your desired small spacing
      },
    },
  },
  plugins: [],
};
