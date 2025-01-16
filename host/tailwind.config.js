/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "../collection-manager/**/*.{js,jsx,ts,tsx}",
    "../analytics/**/*.{js,jsx,ts,tsx}",
    "../request-builder/**/*.{js,jsx,ts,tsx}",
    "../response-viewer/**/*.{js,jsx,ts,tsx}",
    "../shared/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}