/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        '.src//app/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', // Use class-based dark mode
    theme: {
        extend: {
            colors: {
                // Optional: Define custom colors if needed
            },
        },
    },
    plugins: [],
  };