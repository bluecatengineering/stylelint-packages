import { testRule } from "stylelint-test-rule-node";

import plugin from '../src/selector-bem.js';

const {
	rule: {ruleName, messages},
} = plugin;

testRule({
	plugins: [plugin],
	ruleName,
	config: true,
	accept: [
		{
			code: '.Block {}',
			description: 'accepts a class with only block name',
		},
		{
			code: '.Block__element {}',
			description: 'accepts a class with block and element names',
		},
		{
			code: '.Block--modifier {}',
			description: 'accepts a class with block and modifier names',
		},
		{
			code: '.Block__element--modifier {}',
			description: 'accepts a class with block, element, and modifier names',
		},
		{
			code: '.Block:hover {}',
			description: 'accepts a class with block name followed by a pseudo-class',
		},
		{
			code: '.Block[attr] {}',
			description: 'accepts a class with block name followed by an attribute spec',
		},
		{
			code: '.Block .Other {}',
			description: 'accepts a class with block name followed by a descendant',
		},
		{
			code: '.Block > .Other {}',
			description: 'accepts a class with block name followed by a child',
		},
		{
			code: '.Block > :first-child {}',
			description: 'accepts a class with block name followed by a non-class child',
		},
		{
			code: '.BlockA,\n.BlockB {}',
			description: 'accepts comma separated class names',
		},
		{
			code: 'div {}',
			description: 'accepts a tag selector',
		},
		{
			code: '#id {}',
			description: 'accepts an id selector',
		},
		{
			code: '.other() {}',
			description: 'accepts non standard selector',
		},
	],
	reject: [
		{
			code: '.block {}',
			description: 'rejects a block name starting with lowercase',
			message: messages.expected('.block'),
		},
		{
			code: '.Block__Element {}',
			description: 'rejects an element name starting with uppercase',
			message: messages.expected('.Block__Element'),
		},
		{
			code: '.Block--Modifier {}',
			description: 'rejects a modifier name starting with uppercase',
			message: messages.expected('.Block--Modifier'),
		},
		{
			code: '.Block_element {}',
			description: 'rejects an element name separated by a single underscore',
			message: messages.expected('.Block_element'),
		},
		{
			code: '.Block-modifier {}',
			description: 'rejects a modifier name separated by a single dash',
			message: messages.expected('.Block-modifier'),
		},
		{
			code: '.Block .other {}',
			description: 'rejects a class with block name followed by an incorrect descendant',
			message: messages.expected('.other'),
		},
		{
			code: '.Block > .other {}',
			description: 'rejects a class with block name followed by an incorrect child',
			message: messages.expected('.other'),
		},
	],
});
