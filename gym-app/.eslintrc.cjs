// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'unused-imports', 'eslint-plugin-import', 'eslint-plugin-react'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    indent: ['error', 2, { SwitchCase: 1 }],
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed'],
    'jsx-quotes': ['error', 'prefer-double'],
    semi: ['error', 'never'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ],
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    'react/prop-types': 0,
    'react/display-name': 0,
    'object-curly-spacing': [2, 'always'],
    'no-multi-spaces': 'error',
    'key-spacing': ['error', { afterColon: true }],
    'react/destructuring-assignment': ['error', 'always'],
    'react/jsx-curly-newline': ['error', 'consistent'],
    'react/jsx-curly-spacing': ['error', { when: 'never' }],
    'react/jsx-indent': ['error', 2, { checkAttributes: true }],
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'allow'
      }
    ],
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/sort-default-props': 'error',
    'react/jsx-sort-props': 'error'
  }
}
