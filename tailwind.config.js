/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        concert: ['Concert One', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        kalam: ['Kalam', 'sans-serif'],
        playwriteAU: ['Playwrite AU NSW', 'sans-serif'],
        playwriteBE: ['Playwrite BE VLG', 'sans-serif'],
        shantell: ['Shantell Sans', 'sans-serif'],
        yanone: ['Yanone Kaffeesatz', 'sans-serif'],
      }
    }
  },
  darkMode: 'class',
  plugins: [],
}
