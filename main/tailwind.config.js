/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Adjust based on your project structure
    './public/index.html',         // Include your HTML files if necessary
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50', // Custom green for the tree planting theme
        secondary: '#8BC34A',
        earthy: '#A0522D',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Set default fonts
        heading: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'leaf-pattern': "url('/path-to-your-leaf-pattern-image.png')", // Example for adding background image
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
