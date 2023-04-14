/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    backgroundSize: {
      '30vw': '30vw',
    },
    extend: {
      backgroundImage: {
        'ilustra-01': "url('/src/assets/ilustra-01.svg')",
        'ilustra-02': "url('/src/assets/ilustra-02.svg')",
      },
      colors: {
        zinc: {
          100: '#F8F8FF',
          200: '#F4F4FF',
          300: '#EAEAEA',
          400: '#858793',
          500: '#7C7C8A',
        },
        violet: {
          500: '#6246EA',
          700: '#5236D0',
        },
        'dark': '#121214',
        'salmon': '#E45858',
      },
    },
  },
  plugins: [],
}
