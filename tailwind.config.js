/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        hide: -1,
        auto: "auto",
        base: 0,
        docked: 10,
        dropdown: 1000,
        header: 1100,
        banner: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800,
      },
      lineHeight: {
        header: "5rem",
      },
      colors: {
        bg: "#f7f8f8",
        subInfo: "#989EA6",
        primary: "#6BA3DB",
        border: "#E3E5E6",
        text: "#2F3235",
      },
      minWidth: {
        sidebar: "18rem",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
