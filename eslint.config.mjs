import blueCatNode from '@bluecateng/eslint-config-node';

export default [
	blueCatNode,
	{
		rules: {
			'import/extensions': ['warn', 'always'],
			'jest/no-deprecated-functions': 'off',
		},
	},
	{
		ignores: ['**/dist/**'],
	},
];
