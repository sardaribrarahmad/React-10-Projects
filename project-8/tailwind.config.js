/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '456': '1200px', // Add your custom width value here
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