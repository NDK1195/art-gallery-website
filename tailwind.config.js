/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "serif"],
        "big-shoulders-display": ["Big Shoulders Display", "serif"],
      },
      colors: {
        "#D5966C": "#D5966C",
        "#151515": "#151515",
        "#444444": "#444444",
      },
    },
  },
  plugins: [],
};
