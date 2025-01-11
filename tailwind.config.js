/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderColor:{
        'primary':'rgb(54, 94, 196)'
      }
    },
    fontFamily:{'heiro-font':'Kanit', 'About':'Londrina','menuLine':'Kanit'}
  },
  base:"/deploy-github/",
  plugins: [],
}

