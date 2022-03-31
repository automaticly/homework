/* eslint-disable indent */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',

  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-plusplus': 'off',
    'no-unused-vars': 'off',
    indent: ['error', 4],
  },
};
