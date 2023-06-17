/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        header: 1100,
      },
      lineHeight: {
        header: "5rem",
      },
      colors: {
        bg: "#f7f8f8",
        subInfo: "#989EA6",
        primary: "#6BA3DB",
      },
      minWidth: {
        sidebar: "18rem",
      },
    },
  },
  plugins: [],
};
