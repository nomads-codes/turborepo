module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // https://fontjoy.com
      lato: ["Lato", "sans-serif"], // Heading
      rubik: ["Rubik", "sans-serif"], // Sub heading
      andika: ["Andika", "sans-serif"], // Content
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
