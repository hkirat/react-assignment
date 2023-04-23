/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/pages/**/*.jsx',
    './src/components/**/*.jsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

