// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#326d6d',
        secondary: '#ebcbcb',
        light: '#f7f7f7',
        dark: '#333333',
        beige: '#f4efe9',
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        title: ['Quicksand', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
