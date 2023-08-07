/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      fontFamily: {
        'abc': ["Roboto", "sans-serif"],
        'space': ['Space Grotesk','sans-serif'],
      },
    },
  },
  plugins: [],
}

