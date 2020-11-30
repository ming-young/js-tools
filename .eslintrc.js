module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    '@typescript-eslint',
    'vue'
  ],
  extends: [
    // ts检查
    "eslint:recommended",
    'plugin:vue/recommended'
    // "plugin:@typescript-eslint/recommended",
    // 注释
    // 'plugin:@shinho-sh/comments/all',
    // eslint standard
    // 'standard'
  ],
  rules: {
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "always",
      "asyncArrow": "always"
    }],
    "no-console": "off"
  }
}
