/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        grey: "#5A5959",
        yellow: "#FFEAAE",
        purpule:"#5F00D9",
        red:"#D01C28",
        customGray: '#323334',

        darkyellow:"#FCCA3F",
      },
    },
  },
  plugins: [],
}