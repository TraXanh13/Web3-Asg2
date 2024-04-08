/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        'barlow-condensed': ["Barlow Condensed"],
        'montserrat': ["Montserrat"]
      },
    },
    
  },
  plugins: [require('tailwindcss-animated')],
}

