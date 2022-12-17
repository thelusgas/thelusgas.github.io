module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'no-nested-ternary': 'off',
    'no-array-index-key': 'off',
    'no-void': ['error', {
      allowAsStatement: true
    }],
    'react-hooks/exhaustive-deps': 'off'
  },
  overrides: [{
    files: ['*.stories.tsx'],
    rules: {
      'import/no-default-export': 'off',
      'react/function-component-definition': ['error', {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }],
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: true
      }],
      'no-alert': 'off'
    }
  }]
};