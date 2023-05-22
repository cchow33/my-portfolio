/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Spectral", "serif"],
        poppins: ["Poppins", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        gray: {
          dark: "#9ca3af",
          light: "#f3f4f6",
        },
      },

      screens: {
        xs: "200px",
        sm: "320px",
        md: "640px",
        lg: "768px",
        xl: "991px",
      },
    },
  },
  plugins: [],
};
