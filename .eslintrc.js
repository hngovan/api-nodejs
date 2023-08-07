module.exports = {
  root: true,
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'prettier'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // enable additional rules
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],

    // override configuration set by extending "eslint:recommended"
    'no-empty': 'error',
    'no-cond-assign': ['error', 'always'],

    // disable rules from base configurations
    'for-direction': 'error'
  }
}