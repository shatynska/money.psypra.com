module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    '@feature-sliced',
    '@feature-sliced/eslint-config/rules/import-order/experimental',
    'plugin:storybook/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  ignorePatterns: [
    'build',
    '.eslintrc.cjs',
    'tailwind.config.ts',
    'vite.config.ts',
    'vitest.config.ts',
    'kubb.config.js',
    'postcss.config.js',
    'src/shared/api/generated',
    'notes',
    'public/mockServiceWorker.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'Latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/require-default-props': [
      'warn',
      {
        functions: 'defaultArguments',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.config*',
          '**/*.test.*',
          '**/*.spec.*',
          '**/*.stories.*',
          '**/msw/**',
          '**/mock*/**',
          '**/vitest*',
        ],
      },
    ],
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
};
