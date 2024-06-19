/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'card676': '676px',
        // => @media (min-width: 1280px) { ... }

        'custom879': '996px',
        // => @media (min-width: 923px) { ... }
        'custom500': '500px',
        // => @media (min-width: 923px) { ... }

      },
    },
  },
  plugins: [],
  darkMode: "class"
}
