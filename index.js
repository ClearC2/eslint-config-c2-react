module.exports = {
  extends: [
    'standard',
    'standard-react'
  ],
  parser: 'babel-eslint',
  globals: {
    describe: false,
    beforeEach: false,
    afterEach: false,
    it: false
  },
  rules: {
    'no-console': 'error'
  }
}
