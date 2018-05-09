module.exports = {
  extends: [
    'standard',
    'standard-react'
  ],
  parser: 'babel-eslint',
  env: {
    mocha: true
  },
  rules: {
    'no-console': 'error',
    'react/no-unused-props': 'off',
    'key-spacing': ['error', {mode: 'strict'}],
    'object-curly-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'max-len': ['error', {code: 120}]
  }
}
