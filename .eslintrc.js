module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  root: true,
  rules: {
    "comma-dangle": ["error", "only-multiline"],
    "max-len": ["error", 120],
    "quotes": ["error", "double"],
    "quote-props": ["error", "consistent"],
    "react/function-component-definition": ["error", { "namedComponents": "arrow-function" }],
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
  },
};
