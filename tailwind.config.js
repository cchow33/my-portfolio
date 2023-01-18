/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Spectral", "serif"],
    },
    screens:{
      // @media (m479in-width: 640px, 768px, 1024px, 1280px)
      'sm': '300px',
      'md': 'px',
      'lg': '768px',
      'xl': '991px'
    }
  },
  plugins: [],
}
