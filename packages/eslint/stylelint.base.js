module.exports = {
  extends: 'stylelint-config-standard',
  files: ['**/*.{js,ts}'],
  customSyntax: '@stylelint/postcss-css-in-js',
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'number-leading-zero': null,
    indentation: [
      2,
      {
        severity: 'warning',
      },
    ],
    'declaration-empty-line-before': [
      'never',
      {
        ignore: ['after-declaration'],
      },
    ],
  },
}
