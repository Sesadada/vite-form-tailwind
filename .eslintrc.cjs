module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'tailwindcss'],
  rules: {
    'react/function-component-definition': [
      0,
      {
        namedComponents: 'function-declaration',
      },
    ],

    'react/react-in-jsx-scope': 0,
    'spaced-comment': 0,
    'no-unused-vars': 'warn',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
};
