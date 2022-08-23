/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      spacing: {
        '110': '35rem',
        '125': '50rem'
      },
      'backgroundImage': {
        'bgimage': "url('/images/imbg.webp')",
      }
    },
  },
  plugins: [],
}
