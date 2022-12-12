/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1080px",
        "2xl": "1294px",
        "3xl": "1422px",
        "4xl": "2048px"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
        inter : ["Inter", "sans-serif"],
      },
      colors: {
        darkgray: "#707070",
        semigray: "#A0A0A0",
        gray: "#C6C6C6",
        laci: "#4162BE",
        faint: "#919CB7",
        extraFaint: "#5C6069",
        back: {
          DEFAULT: "#181A20",
          "front": "#23242E",
          "extra-front": "#414453"
        },
        gain: {
          DEFAULT: "#3D9D7B",
          "dark": "#183C2F"
        },
        notr: {
          DEFAULT: "#808080"
        }
      },
    },
  },
  plugins: [],
};
