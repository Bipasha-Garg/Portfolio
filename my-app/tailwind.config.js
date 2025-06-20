/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}', // Fixed path: './src' and single slash
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