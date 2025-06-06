// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#E5194C',
        'custom-purple': '#A32385',
      },
    },
  },
  plugins: [],
};
