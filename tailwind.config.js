/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/**/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
