export default {
  content: ['./index.html', './src/**/*.{vue,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Avenir Next', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        clay: '#b86f52',
        ink: '#24312d',
        paper: '#f6f1e8',
        moss: '#52765f',
        ochre: '#c8a24f'
      }
    }
  },
  plugins: []
};
