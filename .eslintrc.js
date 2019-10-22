module.exports = {
  parser: 'babel-eslint',
  rules: {
    strict: 0,
    'linebreak-style': ['error', 'unix'],
  },
  plugins: [
    'svelte3',
  ],
  extends: ['google']
};