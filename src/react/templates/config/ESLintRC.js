exports.template = () => {
	return `{
  "parserOptions": {
      "ecmaVersion": 8,
      "sourceType": "module",
      "ecmaFeatures": {
          "impliedStrict": true,
          "jsx": true
      }
  },
  "env": {
      "browser": true,
      "node": true
  },
  "rules": {
      "semi": "error",
      "no-extra-semi": "error",
      "no-invalid-regexp": "error",
      "no-unreachable": "error",
      "valid-jsdoc": "error",
      "eqeqeq": "error",
      "no-empty-function": "error",
      "no-invalid-this": "error",
      "no-multi-str": "error",
      "no-redeclare": "error",
      "array-element-newline": "error",
      "array-bracket-spacing": "error",
      "camelcase": "error",
      "capitalized-comments": "error",
      "indent": ["error", "tab"],
      "jsx-quotes": "error",
      "key-spacing": "error",
      "keyword-spacing": "error",
      "spaced-comment": "error",
      "constructor-super": "error",
      "no-duplicate-imports": "error",
      "no-this-before-super": "error"
  }
}`;
};
