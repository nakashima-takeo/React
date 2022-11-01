module.exports = {
  "env": {
    "browser": true,
    "jquery": true,
    "commonjs": true,
    "es2021": true,
    "node": true,
  },
  "extends": "eslint:recommended",
  "overrides": [
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
  },
  "rules": {
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-unused-vars": [
      "error",
      {
        "vars" : "all",
        "args": "none"
      }
    ],
    "no-console": [
      "off"
    ]
  },
};
