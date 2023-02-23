/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'ilustra-01': "url('/src/assets/ilustra-01.svg')",
        'ilustra-02': "url('/src/assets/ilustra-02.svg')",
      }
    },
  },
  plugins: [],
}
