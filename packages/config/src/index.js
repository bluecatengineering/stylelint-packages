export default {
	extends: ['stylelint-config-standard'],
	plugins: ['@bluecateng/stylelint-plugin'],
	rules: {
		'alpha-value-notation': 'number',
		'color-hex-length': 'long',
		'declaration-empty-line-before': null,
		'declaration-no-important': true,
		'function-no-unknown': null,
		'import-notation': 'string',
		'property-no-vendor-prefix': null,
		'rule-empty-line-before': null,
		'selector-class-pattern': null,
		'selector-id-pattern': null,
		'selector-no-vendor-prefix': null,
		'value-no-vendor-prefix': null,

		'@bluecateng/property-strict-value': true,
		'@bluecateng/selector-bem': true,
	},
};
