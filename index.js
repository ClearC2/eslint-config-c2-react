module.exports = {
  extends: [
    'standard',
    'standard-react',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'react-hooks'
  ],
  parser: 'babel-eslint',
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
    'react/no-did-update-set-state': 'off'
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
