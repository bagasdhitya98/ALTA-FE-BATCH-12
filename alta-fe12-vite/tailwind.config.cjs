/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "alta-blue": "#2563eb",
        "alta-amber": "#d97706",
      },
    },
  },
  plugins: [require("daisyui")],
};
