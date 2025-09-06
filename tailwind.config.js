module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#f5fbe7",
          100: "#E1E9C9",
          200: "#d3ea9d",
          300: "#c0e078",
          400: "#adc654",
          500: "#8fa31e",
          600: "#75811a",
          700: "#5b6015",
          800: "#404010",
          900: "#26200a",
        },
      },
    },
  },
  plugins: [],
};
