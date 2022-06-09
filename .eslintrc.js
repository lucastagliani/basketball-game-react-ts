module.exports = {
  root: true,
  extends: ['eslint:recommended', 'airbnb', 'airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    semi: ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],
    'unused-imports': 0,
    'no-unused-vars': 0,
    'max-len': 2,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
}
