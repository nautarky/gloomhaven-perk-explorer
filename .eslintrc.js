module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "standard-with-typescript",
    "next/core-web-vitals",
    "airbnb",
    "airbnb/hooks",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["tsconfig.json"],
  },
  plugins: ["react"],
  rules: {
    "comma-dangle": ["error", "only-multiline"],
    "max-len": ["error", 120],
    "quotes": ["error", "double"],
    "quote-props": ["error", "consistent"]
  },
};
