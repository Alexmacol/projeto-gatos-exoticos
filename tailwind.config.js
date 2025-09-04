/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1080px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        stone: {
          100: "#f3e6d8",
          600: "#5f574e",
          900: "#302d2c",
        },
        rose: {
          50: "#ffcff0",
        },
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        "young-serif": ["Young Serif", "serif"],
      },
    },
  },
  plugins: [],
};
