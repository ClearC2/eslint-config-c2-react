module.exports = {
  extends: [
    'standard',
    'standard-jsx',
    'standard-react'
  ],
  plugins: [
    'react-hooks'
  ],
  parser: '@babel/eslint-parser',
  env: {
    mocha: true,
    jest: true
  },
  rules: {
    'no-console': 'error',
    'react/no-unused-prop-types': 'off',
    'key-spacing': ['error', {mode: 'strict'}],
    'object-curly-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'max-len': ['error', {code: 120, ignoreComments: true}],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/no-did-update-set-state': 'off',
    'react/jsx-fragments': 'off',
    'react/jsx-no-bind': ['error', {allowFunctions:  true, allowArrowFunctions: true}],
    'multiline-ternary': 'off',
    'react/jsx-handler-names': 'off'
  },
  globals: {
    FormData: false,
    describe: false,
    before: false,
    beforeEach: false,
    it: false
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
