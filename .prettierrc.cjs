// eslint-disable-next-line no-undef
module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  // Stop autoloading in Prettier v2
  // This is a warning in Prettier v3
  // but you can safely ignore it
  pluginSearchDirs: [],

  overrides: [
    // Only load `prettier-plugin-tailwindcss` when scanning the app dir
    // This _should_ work so long as `msw-auto-mock` doesn't run prettier on any files in `src/*`
    {
      files: ['src/*'],
      options: {
        plugins: ['prettier-plugin-tailwindcss'],
      },
    },
  ],
};
