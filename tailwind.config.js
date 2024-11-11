/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f1f1f1",
        secondary: "#157846",
        accent: "#fed100",
        background: "#000",
        foreground: "#fff",
        error: "#D41F4A",
      },
    },
  },
  plugins: [],
};

