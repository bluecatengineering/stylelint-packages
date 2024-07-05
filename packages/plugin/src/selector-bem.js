import stylelint from 'stylelint';
import isStandardSyntaxRule from 'stylelint/lib/utils/isStandardSyntaxRule.mjs';

const {
	createPlugin,
	utils: {ruleMessages, validateOptions, report},
} = stylelint;

const ruleName = '@bluecateng/selector-bem';

const messages = ruleMessages(ruleName, {
	expected: (value) => `Expected selector "${value}" to follow BEM notation`,
});

const rule = (actual) => (root, result) => {
	const validOptions = validateOptions(result, ruleName, {actual});

	// istanbul ignore if
	if (!validOptions || !actual) {
		return;
	}

	root.walkRules((rule) => {
		if (!isStandardSyntaxRule(rule)) {
			return;
		}

		rule.selector.split(/[ ,>]/).forEach((part) => {
			if (
				part &&
				part.charAt(0) === '.' &&
				!/^.[A-Z][A-Za-z\d]+(:|\[|$)/.test(part) &&
				!/^.[A-Z][A-Za-z\d]+__[a-z][A-Za-z\d]+(:|\[|$)/.test(part) &&
				!/^.[A-Z][A-Za-z\d]+--[a-z][A-Za-z\d]+(:|\[|$)/.test(part) &&
				!/^.[A-Z][A-Za-z\d]+__[a-z][A-Za-z\d]+--[a-z][A-Za-z\d]+(:|\[|$)/.test(part)
			) {
				report({
					index: rule.lastEach,
					message: messages.expected(part),
					node: rule,
					ruleName,
					result,
				});
			}
		});
	});
};

rule.ruleName = ruleName;
rule.messages = messages;

export default createPlugin(ruleName, rule);
