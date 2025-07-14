/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "neon-green": "#39ff14",
        "neon-blue": "#00eaff",
        "neon-pink": "#ff2eea"
      },
    },
  },
  plugins: [],
};
