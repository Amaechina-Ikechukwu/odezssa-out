const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        text: "#9C9C9C",
        grad: "#A3A3A3",
        black: '#000000',
        red: {
          light: "#CEA1A1",
          dark: "#009eeb",
        },
        blue: {
          light: "#6FEEFF",

          dark: "#ff16d1",
        },
      },
      backgroundImage: {
        "odes-img": "url('/src/imgs/odes.png')",
      },
      keyframes: {
        wiggle: {
          "0, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in ",
        bounce: "bounce 0.2s ease-in ",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
