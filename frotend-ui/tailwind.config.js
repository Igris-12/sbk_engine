// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        // These names can be whatever you like
        'dark-bg': '#0A122A',       // Dark blue background (from the original mock-up, if you want to use it instead of the image)
        'nasa-blue': '#1a202c',     // A darker blue for general UI elements
        'nasa-light-gray': '#E0E0E0', // Light text/icon color
        'nasa-gray': '#808080',     // Medium gray for subtle text
        'nasa-dark-gray': '#333A4D', // Darker gray for borders/separators
        'nasa-accent-cyan': '#00BCD4', // The bright cyan accent
        'nasa-secondary-blue': '#2C3A50', // For cards/backgrounds within the main area
        'nasa-sidebar-bg': '#1E2538', // For the sidebar background
        'nasa-border': '#334155', // A subtle border color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Set Inter as the default sans-serif font
      },
    },
  },
  plugins: [],
};