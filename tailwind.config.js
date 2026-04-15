/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'auri-bg': '#ffffff',
        'auri-card': '#f9fafb',
        'auri-offset': '#f9fcff',
        'auri-blue': '#4285f4',
        'auri-text': '#111827',
        'auri-muted': '#4b5563',
        'auri-border': '#e5e7eb',
      },
      fontFamily: {
        michroma: ['Michroma', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
