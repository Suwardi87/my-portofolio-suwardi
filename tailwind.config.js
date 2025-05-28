// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary: '#f59e0b',
        secondary: '#ec4899',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}