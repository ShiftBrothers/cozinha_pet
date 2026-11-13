/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#004ea1',
          blueLight: '#e6f0fa',
          blueDark: '#003a78',
          red: '#da1f26',
          redLight: '#feecee',
          redDark: '#b0191f',
          sage: '#7C9A8E',
          sageLight: '#E8F0EC',
          sageDark: '#5B7A6E',
          earth: '#8B7355',
          earthLight: '#F5F0EB',
          cream: '#FAF7F2',
        },
        neutral: {
          50: '#fdfbf7',
          100: '#f7f2ea',
          200: '#ede5d8',
          800: '#1a2332',
          900: '#001a35',
        }
      },
      fontFamily: {
        sans: ['Roboto Slab', 'serif'],
        serif: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [],
}

