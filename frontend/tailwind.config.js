/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff4d4d",
        dark: "#111111",
        card: "#1b1b1b",
      },
    },
  },
  plugins: [],
}