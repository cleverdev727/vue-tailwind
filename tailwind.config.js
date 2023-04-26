module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'header-bg': '#303030',
        'warning': '#FFC726',
        'square-border': 'rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        'sans': 'Open Sans'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}