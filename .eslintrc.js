module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: ["xo", "prettier"],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "capitalized-comments": "off",
    "new-cap": "off",
    "no-unused-vars": "warn",
  },
};
