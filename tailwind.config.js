/** @type {import('tailwindcss').Config} */
const forms = require('@tailwindcss/forms');
const ui = require('daisyui');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  plugins: [forms, ui],
};

