/**
 * ESLint configuration file.
 *
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 *
 * @import { ParserOptions } from '@typescript-eslint/parser'
 */
import eslint from '@eslint/js';
// import pluginJSDoc from 'eslint-plugin-jsdoc';
import pluginPromise from 'eslint-plugin-promise';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const ignores = [
    '**/.vscode',
    '.yarn/**/*',
    '**/*.config.js',
    '**/assets/**/*',
    '**/dist/**/*',
    '**/public/**/*',
    'dev/**/*',
    '**/.next/**/*',
    '**/node_modules/**/*',
];

export default defineConfig([
    //https://eslint.org/docs/latest/rules
    eslint.configs.recommended,
    //https://typescript-eslint.io/packages/typescript-eslint/
    tseslint.configs.recommended,
    // tseslint.configs.recommendedTypeChecked,
    tseslint.configs.stylistic,
    //https://github.com/gajus/eslint-plugin-jsdoc?tab=readme-ov-file#eslint-plugin-jsdoc
    // pluginJSDoc.configs['flat/recommended-typescript'],
    pluginPromise.configs['flat/recommended'],
    pluginReact.configs.flat['jsx-runtime'],
    pluginReactHooks.configs.flat.recommended,

    {
        files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
        //https://eslint.org/docs/latest/use/configure/language-options#specifying-javascript-options
        languageOptions: {
            //https://eslint.org/docs/latest/use/configure/language-options#predefined-global-variables
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.serviceworker,
                google: 'readonly',
            },
            ecmaVersion: 'latest',
            /**
             * @type {ParserOptions}
             * @see https://eslint.org/docs/latest/use/configure/language-options#specifying-parser-options
             * @see https://typescript-eslint.io/packages/parser#configuration
             */
            parserOptions: {
                ecmaFeatures: { impliedStrict: true, jsx: true, modules: true },
                ecmaVersion: 'latest',
                jsDocParsingMode: 'all',
                jsxPragma: null,
                projectService: true,
                projectFolderIgnoreList: ignores,
                tsconfigRootDir: import.meta.dirname,
            },
        },

        settings: {
            next: { rootDir: 'mission-control/' },
            react: { version: 'detect' },
        },

        rules: {
            //https://eslint.org/docs/latest/rules
            'default-case': 'error',
            'default-case-last': 'error',
            eqeqeq: 'warn',
            'max-depth': ['warn', 5],
            'no-alert': 'error',
            'no-invalid-this': 'warn',
            'no-lonely-if': 'warn',
            'no-unused-vars': 'off',
            'no-useless-concat': 'warn',
            'no-var': 'warn',
            'prefer-const': 'warn',

            'jsdoc/tag-lines': [0, 'always', { applyToEndTag: false, count: 0 }],

            //@typescript-eslint/recommended
            '@typescript-eslint/ban-ts-comment': 'warn',
            'no-array-constructor': 'off',
            '@typescript-eslint/no-array-constructor': 'warn',
            '@typescript-eslint/no-empty-object-type': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-require-imports': 'off',
            'no-unused-expressions': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            'no-unused-vars': 'off',
            /** @see https://typescript-eslint.io/rules/no-unused-vars/ */
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'all',
                    argsIgnorePattern: '^_',
                    caughtErrors: 'all',
                    caughtErrorsIgnorePattern: '^_',
                    destructuredArrayIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    ignoreRestSiblings: true,
                },
            ],
            '@typescript-eslint/prefer-as-const': 'warn',

            //@typescript-eslint/stylistic
            '@typescript-eslint/adjacent-overload-signatures': 'warn',
            '@typescript-eslint/array-type': 'warn',
            '@typescript-eslint/ban-tslint-comment': 'warn',
            '@typescript-eslint/class-literal-property-style': 'warn',
            '@typescript-eslint/consistent-generic-constructors': 'warn',
            '@typescript-eslint/consistent-indexed-object-style': 'warn',
            '@typescript-eslint/consistent-type-assertions': 'warn',
            '@typescript-eslint/consistent-type-definitions': 'warn',
            '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
            'no-empty-function': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-inferrable-types': 'warn',
            '@typescript-eslint/prefer-for-of': 'warn',
            '@typescript-eslint/prefer-function-type': 'warn',
        },
    },
    globalIgnores(ignores),
]);
