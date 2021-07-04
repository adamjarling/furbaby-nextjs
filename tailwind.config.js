const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Anton", "sans-serif"],
      serif: ["Courier", "serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "texture-pattern": "url('public/images/bg-animal.jpg')",
      }),
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("tailwind-hamburgers"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
