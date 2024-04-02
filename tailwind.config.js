/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'safelist.txt'],
  theme: {

    extend: {    fontFamily: {
      'sans': ['Helvetica Neue', "Inter", "Helvetica", ]
    },},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

