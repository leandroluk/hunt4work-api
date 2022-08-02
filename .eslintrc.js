module.exports = {
  'env': {
    'es2021': true,
    'node': true,
  },
  'extends': ['google', 'plugin:sonarjs/recommended'],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': ['@typescript-eslint', 'sonarjs'],
  'rules': {
    'object-curly-spacing': 'off',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'new-cap': 'off',
  },
};
