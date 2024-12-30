/** @type {import('tailwindcss').Config} */
import tailwindAnimated from 'tailwindcss-animated'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        rubik: ['Rubik Vinyl', 'sans-serif'],
        afacad: ['Afacad Flux', 'sans-serif'],
      },
    },
  },
  plugins: [tailwindAnimated],
}
