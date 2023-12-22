/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Serif', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        xs: '325px',
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1280px',
      },
      colors: {
        black: {
          main: '#000000',
          light: '#676767',
        },
        white: {
          main: '#FFFFFF',
          off: '#B0B0B0',
          dark: '#EFEFEF',
        },
        success: {
          main: '#25A18E',
        },
      },
    },
  },
  plugins: [],
};
