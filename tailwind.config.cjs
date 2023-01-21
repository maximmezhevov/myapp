/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      // height: {
      //   'test': '759px',
      //   'test': '559px',
      // },
      // minHeight: {
      //   '83': '83.333%',
      // },
      // maxHeight: {
      //   '83': '83.333%',
      // }
      transitionProperty: {
        'theme': 'color, background-color',
        'border': 'border-color',
        'borderColors': 'border-color',
        'color': 'color',
        'height': 'height, maxHeight',
        'svg1': 'stroke, transform,',
        'inputColors': 'background-color, border-color',
        'bgColors': 'background-color'
      }
      
    },
  },
  plugins: [],
}
