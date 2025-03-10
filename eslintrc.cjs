const { browser, es2020 } = require("globals");
const { root } = require("postcss");

module.exports = {
    root: true,
    env: { browser: true, es2020: true},
    extends: [
        'eslint:reommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',

    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
    settings: {react:{version:'18.2'}},
    plugins: ['react-refresh'],
    rules: {
        'react/prop-types': 'off',
        'react/jsx-no-target-blank': 'off',
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
}