/** @type {import('tailwindcss').Config} */
const px = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };

export default {
  content: [
    "./src/**/*.{jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}