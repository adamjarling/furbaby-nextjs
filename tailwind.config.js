const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: true, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Courier", "serif"],
      display: ["Poppins", "sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "texture-pattern": "url('public/images/bg-animal.jpg')",
      }),
      colors: {
        "fur-yellow": "#cdab45",
        "fur-pink": "#ec1384",
        "fur-blue": "#0a91c7",
      },
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
