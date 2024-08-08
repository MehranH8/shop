/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    fontFamily: {
      sans: ["IRANSansX", ...defaultTheme.fontFamily.sans],
      yekan: ["IRANYekanX", ...defaultTheme.fontFamily.serif],
    },
    extend: {},
  },
  plugins: [],
})

