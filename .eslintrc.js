module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: `babel-eslint`,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    strict: 0,
    "no-console": `warn`,
    quotes: [`warn`, `backtick`],
    "no-unused-vars": [1],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [`.js`, `.jsx`],
      },
    ],
    "prettier/prettier": `warn`,
  },
  extends: [
    `eslint:recommended`,
    `plugin:react/recommended`,
    `plugin:jsx-a11y/recommended`,
  ],
  plugins: [`prettier`, `jsx-a11y`],
  settings: {
    react: {
      version: `detect`,
    },
  },
}
