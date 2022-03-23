module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest'
  },
  plugins: [
    'react'
  ],
  rules: {
    'linebreak-style': [
      'error',
      'unix'
    ],
    'no-unused-vars': [
      'warn'
    ],
    'react/prop-types': 0
  }
}
