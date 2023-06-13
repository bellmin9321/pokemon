module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint', 'simple-import-sort'],
  rules: {
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};