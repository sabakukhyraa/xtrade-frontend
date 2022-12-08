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
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
      },
      colors: {
        darkgray: "#707070",
        gray: "#C6C6C6",
        laci: "#4162BE",
        faint: "#919CB7",
        extraFaint: "#5C6069",
        back: {
          DEFAULT: "#181A20",
          "front": "#23242E"
        }
      },
    },
  },
  plugins: [],
};
