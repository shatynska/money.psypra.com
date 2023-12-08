module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    '@feature-sliced',
    '@feature-sliced/eslint-config/rules/import-order/experimental',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'src/shared/api/generated'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'error',
  },
};
