/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  mode: "jit",
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    // typography: (theme) => ({}),
    fontFamily: {
      display: ["Spectral", "serif"],
    },
    colors: {
      gray: {
        dark: "#9ca3af", // bg-gray-400
        light: "#f3f4f6", // bg-gray-100
      }
    },
    screens:{
      // @media (min-width: 640px, 768px, 1024px, 1280px)
      'sm': '300px',
      'md': '640px',
      'lg': '768px',
      'xl': '991px'
    }
  },
},
  plugins: [
  ],
}
