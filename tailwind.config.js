/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      colors: {
        veryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
        desaturatedDarkBlue: 'hsl(214, 17%, 51%)',
        grayishBlue: 'hsl(212, 23%, 69%)',
        lightGrayishBlue: 'hsl(210, 46%, 95%)',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
