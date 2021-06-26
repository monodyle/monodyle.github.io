module.exports = {
  purge: ["./**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: false,
  theme: {
    colors: {
      transparent: "transparent",
      dark: {
        DEFAULT: "#403F4B",
        muted: "#676674",
      },
      light: {
        DEFAULT: "#FFFFFF",
        muted: "#F8F8F8",
      },
      middle: "#ADAAB6",
      gray: "#F0F0F0",
    },
    fontFamily: {
      mono: "iA Writer Duospace, monospace, monospace",
      serif: "serif",
      display: "Dela Gothic One, display",
    },
    extend: {
      cursor: {
        none: "none",
      },
    },
  },
};
