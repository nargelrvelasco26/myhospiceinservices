/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hospice: {
          green: '#3d5c3a',
          'green-dark': '#2a4027',
          gold: '#b4862b',
          cream: '#f4f3ea',
          'card-green': '#eef1e8',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
}
