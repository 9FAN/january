module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  },
  extends: ['prettier/react', 'prettier/standard'],
  parserOptions: {
    ecmaVersion: 6
  }
}
