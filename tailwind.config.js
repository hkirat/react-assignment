/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      colors: {
        'custom-blue': '#3366FF', // You can use any valid CSS color value here
        'bg-dk': '#1b1b1a',
        'bg-li': '#282828',
        'bg-exli' : '#363637',
      },
    },
  },
  plugins: [],
}

