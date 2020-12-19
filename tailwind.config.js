module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'g-blue': "#423FF2",
        'g-red': "#F25F3F",
        'g-blue-light': "#3FBCF2",
        'g-black': "#0F0F0F",
        'purple-heart': '#6441A4', // it's name is Purple Heart <33
        'g-gray': '#ebebeb',
        'g-purple': "#B93FF2",
        'g-green': "#78F23F",
        'g-discord-hover': "#7d98f6"
      },
      fontFamily: {
        'rubik': "Rubik, Arial, sans-serif",
        'bangers': "Bangers, Arial, sans-serif",
        'slab': "Roboto Slab, Times New Roman, serif",
        'roboto': "Roboto, Arial, sans-serif",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-brand-colors'),
    require('tailwindcss-important')(),
  ],
}
