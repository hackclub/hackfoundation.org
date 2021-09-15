module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: { body: ['"Phantom Sans"'] },
    extend: {},
  },
  variants: {
    extend: {
      cursor: ["hover"],
    },
  },
  plugins: [],
  options: {
    safelist: {
      greedy: ["/safe$/"],
    },
  },
};
