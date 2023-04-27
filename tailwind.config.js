module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'header-bg': '#303030',
        'warning': '#FFC726',
        'square-border': 'rgba(255, 255, 255, 0.2)',
        'blue': '#36A0EB',
        'blue-bg': 'rgba(54, 160, 235, 0.4)',
        'pink': '#FF87A1',
        'pink-bg': 'rgba(255, 135, 161, 0.4)',
        'dark-row-bg': '#464646',
        'row-hover-bg': 'rgba(255, 199, 38, 0.1)',
        'dark-row-border': 'rgba(255, 255, 255, 0.5)',
        'muted': '#AEAEAE',
      },
      fontFamily: {
        'sans': 'Open Sans',
        'montserrat': 'Montserrat',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}