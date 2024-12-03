module.exports = {
  extends: 'expo',
  ignorePatterns: ['/node_modules/*', '/.expo/*', "babel.config.js", "metro.config.js", "webpack.config.js"],

  rules: {
    "semi": ["error", "never"],
    "quotes": ["error", "single"],
        'no-unused-vars': ["warn", { argsIgnorePattern: "^_" }],
    'no-magic-numbers': 'error',
    "react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }],
    "no-console": "warn", 
    "no-debugger": "warn",
    "eqeqeq": "error",
  }
};
