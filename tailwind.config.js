/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.js.ts',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      sans: ['Quicksand'],
      heading: ['Inter'],
    },
    extend: {
      colors: {
        primary: '#342B8E',
        secondary: '#53be82',
        danger: '#EF3061',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}