module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/standard', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-return-assign': 'off',
    semi: ['error', 'always'],
    'comma-dangle': 0,
    'space-before-function-paren': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
