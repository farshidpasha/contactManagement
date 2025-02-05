/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        primary: '0 0 2px 0 rgba(0, 0, 0, 0.3)',
        primaryFocus: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
