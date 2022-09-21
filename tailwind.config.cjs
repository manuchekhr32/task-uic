/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,ts,js}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#F5F5F7',
        'primary': '#2E5BFF',
        'dark-blue': '#28293D',
        'black': '#1D1D1F',
        'light-purple': '#E0E7FF'
      },
      boxShadow: {
        'my-sm': '0 5px 40px 0 rgba(0, 0, 0, 0.03)'
      }
    },
  },
  plugins: [],
}
