module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'react-app',
    'react-app/jest',
    'airbnb',
    'airbnb-typescript',
  ],
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
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  parser: '@typescript-eslint/parser',
}
