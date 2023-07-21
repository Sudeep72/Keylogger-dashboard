/** 
 * @type {import('tailwindcss').Config}
 *
*/

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  darkMode: 'media',
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui')
  ],
  daisyui: {
    themes: ["night"],
  },
};