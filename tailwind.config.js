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
      backgroundImage: {
        "image-grid-1-mobile": "url('../assets/mobile/image-grid-1@2x.jpg')",
        "image-grid-2-mobile": "url('../assets/mobile/image-grid-2@2x.jpg')",
        "image-grid-3-mobile": "url('../assets/mobile/image-grid-3@2x.jpg')",
        "image-grid-1-tablet": "url('../assets/tablet/image-grid-1@2x.jpg')",
        "image-grid-2-tablet": "url('../assets/tablet/image-grid-2@2x.jpg')",
        "image-grid-3-tablet": "url('../assets/tablet/image-grid-3@2x.jpg')",
        "image-grid-1-desktop": "url('../assets/desktop/image-grid-1@2x.jpg')",
        "image-grid-2-desktop": "url('../assets/desktop/image-grid-2@2x.jpg')",
        "image-grid-3-desktop": "url('../assets/desktop/image-grid-3@2x.jpg')",
        "image-hero-mobile": "url('../assets/mobile/image-hero@2x.jpg')",
        "image-hero-tablet": "url('../assets/tablet/image-hero@2x.jpg')",
        "image-hero-desktop": "url('../assets/desktop/image-hero@2x.jpg')",
      },
    },
  },
  plugins: [],
};
