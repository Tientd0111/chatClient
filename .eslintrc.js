module.exports = {
   extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
   plugins: ['react', 'react-hooks', 'prettier'],
   rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
   },
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 2021,
      sourceType: 'module',
   },
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   settings: {
      react: {
         version: 'detect',
      },
   },
}
