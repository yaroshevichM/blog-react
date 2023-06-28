/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "background-blue": "#17161B",
        "red-primary": "#FF006B",
        "red-end": "#DD005D",
        "light-grey": "#D9D9D9"
      }
    }
  },
  plugins: []
}
