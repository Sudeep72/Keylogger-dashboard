/** @type {import('tailwindcss').Config} */
const forms = require('@tailwindcss/forms');
const ui = require('daisyui');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif'],
    },
  },
  darkMode: 'media',
  plugins: [forms, ui],
  daisyui: {
    themes: ["night"],
  },
};