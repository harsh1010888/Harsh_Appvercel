/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#ff7a1a',
          'orange-dark': '#cc5f06',
          'orange-light': '#ffe3cc',
        },
        surface: {
          light: '#ffffff',
          subtle: '#f7f7f7',
          border: '#e3e3e3',
        },
        ink: {
          DEFAULT: '#121212',
          light: '#333333',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'Inter', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(0,0,0,0.05)',
      },
    },
  },
  plugins: [],
};
