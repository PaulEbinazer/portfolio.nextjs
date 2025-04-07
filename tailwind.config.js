const { Outfit } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightHover:'#fcf4ff',
        darkHover:'#2a004a',
        darkTheme:'#11001F',
      },
      fontFamily:{
        Outfit:["Outfit","sans-serif"],
        Ovo:["Ovo","serif"]
      },
      boxShadow:{
         'black':'4px 4px 0 #000',
         'white':'4px 4px 0 #fff',
      }
    },
  },
  darkMode:'selector',
  plugins: [],
};
