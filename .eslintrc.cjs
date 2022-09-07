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
    'no-static-element-interactions': 0,
    'click-events-have-key-events': 0,
    'tailwindcss/classnames-order': 0,
    'react/button-has-type': 0,
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
