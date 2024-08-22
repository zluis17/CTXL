/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Usar la clase 'dark' para el modo oscuro
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000',
        'dark-text': '#ffffff',
        'light-bg': '#ffffff',
        'light-text': '#000000',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      borderColor: ['dark'],
    },
  },
  plugins: [],
};
