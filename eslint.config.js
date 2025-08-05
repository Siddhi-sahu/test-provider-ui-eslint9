import js from '@eslint/js';
import next from 'eslint-config-next';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));
const reactVersion = packageJson.dependencies.react;

export default [
  {
    ignores: ['node_modules', 'out', '.next', 'static', 'package.json', 'package-lock.json', 'nodemon.json', 'lib/'],
  },
  js.configs.recommended,
  ...next(),
  {
    languageOptions: {
      parser: '@babel/eslint-parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
      },
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        globalThis: 'readonly',
      },
    },
    settings: {
      react: {
        version: reactVersion,
      },
    },
    plugins: {
      react: require('eslint-plugin-react'),
    },
    rules: {
      '@next/next/no-img-element': 'off',
      'react-hooks/rules-of-hooks': 'warn',
      'react-hooks/exhaustive-deps': 'off',
      'jsx-a11y/alt-text': 'off',
      'valid-typeof': 'warn',
      'array-bracket-spacing': ['error', 'never'],
      'comma-style': ['error'],
      'jsx-quotes': ['error', 'prefer-double'],
      'block-scoped-var': 'error',
      'keyword-spacing': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'block-spacing': 'error',
      'brace-style': ['error', '1tbs'],
      indent: [
        'error',
        2,
        {
          FunctionExpression: { parameters: 'first' },
          FunctionDeclaration: { parameters: 'first' },
          MemberExpression: 1,
          SwitchCase: 1,
          outerIIFEBody: 0,
          VariableDeclarator: { var: 2, let: 2, const: 3 },
          ignoredNodes: ['TemplateLiteral'],
        },
      ],
      'react/react-in-jsx-scope': 'off',
      'no-undef': 'error',
      'react/jsx-uses-vars': 2,
      'react/jsx-no-undef': 'error',
      'no-console': 0,
      'no-unused-vars': 'error',
      'react/jsx-key': 'warn',
      'no-dupe-keys': 'error',
      'react/jsx-filename-extension': [
        1,
        {
          extensions: ['.js', '.jsx'],
        },
      ],
      'react/prop-types': 'off',
    },
  },
];
