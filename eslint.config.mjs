import fabulator from 'eslint-config-fabulator';

export default [
  { ignores: ['node_modules/', 'package-lock.json', 'CHANGELOG.md'] },
  ...fabulator,
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' },
  },
];
