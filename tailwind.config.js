/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'technical-grey': '#4A5568',
        'silver-black': '#1A202C',
        'fuschia-pink': '#FF1493',
        'silver': '#C0C0C0',
      },
      borderRadius: {
        '3d': '1rem',
      },
    },
  },
  plugins: [],
}