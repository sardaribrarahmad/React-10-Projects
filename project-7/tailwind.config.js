/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "#797E82",
        yellow: "#FFEAAE",
        purpule:"#5F00D9",
        red:"#D01C28",
        customGray: '#323334',

        darkyellow:"#FCCA3F",
      },
      width: {
        '456': '700px', // Add your custom width value here
        '100': '640px', // Add your custom width value here
      },

      height:{
        "100": '100vh',
        "50": '70vh',

      }
    },
  },
  plugins: [],
}