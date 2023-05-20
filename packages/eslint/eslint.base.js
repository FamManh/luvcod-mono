module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['react', 'simple-import-sort'],
  root: true,
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:react/jsx-runtime'],
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'array-bracket-newline': ['error', 'consistent'],
    'array-element-newline': ['error', 'consistent'],
    'arrow-body-style': ['error', 'as-needed'],
    'brace-style': ['error', 'stroustrup'], // enforces Stroustrup brace style
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': 'error',
    curly: ['error', 'multi-line', 'consistent'], // https://eslint.org/docs/latest/rules/curly#multi-line
    'eol-last': 'error', // enforces that files end with a newline
    eqeqeq: 'error', // require === and !==
    indent: [
      'warn',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 'first',
        MemberExpression: 1,
        FunctionDeclaration: {
          parameters: 'first',
        },
        FunctionExpression: {
          parameters: 'first',
        },
        StaticBlock: {
          body: 1,
        },
        CallExpression: {
          arguments: 'first',
        },
        flatTernaryExpressions: true,
        offsetTernaryExpressions: true,
        ignoredNodes: ['TemplateLiteral'],
      },
    ], // indent 2 space, switch case indent 1 level
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ], // require no space before colon, space after colon (in object literal properties)
    'keyword-spacing': ['error'], // require space before and after keyword, eg: if, else...
    'max-len': [
      'error',
      {
        code: 180,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ], // maximum line length
    'max-nested-callbacks': ['error', 3],
    'max-params': ['warn', 4], // Should use object parameter https://dev.to/gajus/the-most-important-eslint-rule-max-params-349l
    'multiline-ternary': [
      'warn',
      'always-multiline', // https://eslint.org/docs/latest/rules/multiline-ternary#always-multiline
    ], // enforces newlines between the operands of a ternary expression if the expression spans multiple lines.
    'no-alert': 'error', // disallow alert, confirm, promp
    'no-class-assign': ['off'],
    'no-console': 'off', // free to use console
    'no-constant-condition': 'error', // disallow constant condition eg: if(true)
    'no-debugger': 'warn', // warn when use debugger
    'no-dupe-else-if': 'error',
    'no-duplicate-case': 'error',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-empty-pattern': 'error',
    'no-extra-semi': 'error', // disallow unnecessary semicolons
    'no-mixed-operators': [
      // To make more explicit for operators - https://github.com/prettier/prettier/issues/187
      'error',
      {
        groups: [
          ['+', '-', '*', '/', '%', '**'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: true,
      },
    ],
    'no-mixed-spaces-and-tabs': 'error', // disallows mixed spaces and tabs for indentation
    'no-multi-spaces': 'error', // disallow multiple spaces, eg: let a =   1;
    'no-multi-str': 'error', // disallow multiline strings (by placing \ at the end)
    'no-multiple-empty-lines': 'error', // no more than 2 blank lines
    'no-negated-condition': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-prototype-builtins': ['off'],
    'no-regex-spaces': 'error',
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: true,
      },
    ], // disallow trailing whitespace at the end of lines, allow in blank lines
    'no-unmodified-loop-condition': 'error',
    'no-unreachable': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        // destructuredArrayIgnorePattern: '^_', // break eslint of storybook
        caughtErrorsIgnorePattern: '^ignore',
      },
    ], // warning about unused variables global/local, ignore arguments/params
    'no-with': 'error',
    'object-curly-newline': [
      // https://eslint.org/docs/latest/rules/object-curly-newline#rule-details
      'error',
      {
        ObjectExpression: {
          consistent: true,
          multiline: true,
        },
        ObjectPattern: {
          consistent: true,
          multiline: true,
        },
        ImportDeclaration: {
          consistent: true,
          multiline: true,
        },
        ExportDeclaration: {
          consistent: true,
          multiline: true,
        },
      },
    ],
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: false, // https://eslint.org/docs/latest/rules/object-curly-spacing#arraysinobjects
      },
    ],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'initializations'], // disallow var initializations on one line
    'operator-assignment': ['error', 'always'], // https://eslint.org/docs/latest/rules/operator-assignment#always
    'operator-linebreak': [
      'warn',
      'before',
      {
        overrides: {
          '=': 'after',
        },
      },
    ], // requires linebreaks to be placed before the operator
    'prefer-const': ['warn'], // free to use const, let
    'prefer-exponentiation-operator': 'error',
    'prettier/prettier': 0, // turn off all of prettier warning
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ], // requires the use of single quotes, can use double quotes in string content
    'require-yield': 'error',
    semi: [
      'error',
      'never',
      {
        beforeStatementContinuationChars: 'never', // https://eslint.org/docs/latest/rules/semi#never
      },
    ], // remove semicolon
    'space-before-blocks': ['error', 'always'], // blocks must always have at least one preceding space.
    'space-in-parens': ['error', 'never'], // enforces zero spaces inside of parentheses
    'space-infix-ops': 'error', // require spacing around infix operators (+, -, ?, : =...)
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
      },
    ], // require space after unary operators (new, delete, typeof, void, yield), no space after unary operators -, +, --, ++, !, !!
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!', '/', '*'],
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'],
          balanced: true,
        },
      },
    ], // require a space after "//" mark
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true,
      },
    ],
    // React rules
    'react/display-name': 'warn',
    'react/forbid-prop-types': 'off',
    'react/jsx-boolean-value': 'warn',
    'react/jsx-closing-bracket-location': 'warn',
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-curly-spacing': 'warn',
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-pascal-case': 'warn',
    'react/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
    'react/jsx-max-props-per-line': [
      'warn',
      {
        maximum: 1,
      },
    ],
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-wrap-multilines': [
      'warn',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
    'react/jsx-tag-spacing': [
      'warn',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-undef': 'warn',
    'react/jsx-sort-props': [
      'warn',
      {
        noSortAlphabetically: true,
        reservedFirst: true,
        shorthandLast: true,
        callbacksLast: true,
      },
    ],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-children-prop': 'error',
    'react/no-danger': 'warn',
    'react/no-did-mount-set-state': 'off',
    'react/no-did-update-set-state': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-multi-comp': 'off',
    'react/no-unknown-property': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/prefer-es6-class': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': 'off',
    'react/no-string-refs': 'warn',
    'react/default-props-match-prop-types': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    // increase the severity of rules so they are auto-fixable
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  env: {
    browser: true, // apply rules to browser
    node: true, // to node
    es6: true, // to es6
    mocha: true, // to mocha test
    jest: true, // to jest test
  },
  globals: {
    '-': 'off',
    define: true, // alow define in global
    expect: true, // expect for test
    it: true, // it for test
    require: true, // alow require in global
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
      rules: {
        'no-undef': 'off',
        'react/default-props-match-prop-types': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        // Typescript
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'none',
          },
        ], // warning about unused variables global/local, ignore arguments/params
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-this-alias': 'warn',
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Internal packages.
              ['^(@digi-b2b/sdk-core)(/.*|$)', '^(@|components|@digi-b2b)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^(@bo|@sf|@stb)(/.*|$)', '^\\.\\.(?!/?$)', '^\\.\\./?$', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
  ],
}
