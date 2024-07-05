/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#caf0f8',
        secondary: '#0077b6',
        almostWhite: '#F1F1F1'
      },
    },
  },
  plugins: [],
}

