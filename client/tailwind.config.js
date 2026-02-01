/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: "#22a45d",
        secondary: "#64db68ff",
        background: "#f7f9f8",
        txt: "#1f2933",
        error: "#d64545",
        gold: "#ffd700"
      },
      fontFamily:{
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Poppins", "system-ui", "sans-serif"]
      }
    },
  },
  plugins: [],
}
