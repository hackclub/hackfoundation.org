module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      fraunces: '"Fraunces", system-ui, Roboto, sans-serif',
      'phantom-sans': '"Phantom Sans"'
    }
  },
  variants: {
    extend: {
      cursor: ["hover"]
    },
  },
  plugins: [],
  options: {
    safelist: {
      greedy: ["/safe$/"],
    },
  },
}
