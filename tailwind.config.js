import { Colors } from "./constants/Colors"; // Make sure this is correct
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        ...Colors.colors,
      },
      // fontFamily: {
      //   sans: ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [],
};
