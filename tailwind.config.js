/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Update this to match your project structure
  ],
  theme: {
    extend: {
      colors: {
        primaryBackground: "#212222",
        secondaryBackground: "#2f3030",
        primaryColor: "#0de042c9",
        greyDark: "#7d8792",
        headingColor: "#2d2e2e",
        sliver: "#bac8d3",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

