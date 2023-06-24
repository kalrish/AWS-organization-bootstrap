import globals from "globals";
import jest from "eslint-plugin-jest";
import js from "@eslint/js";

export default [
	{
		ignores: [
			"dist/**",
		],
		languageOptions: {
			globals: {
				// `nodeBuiltin` excludes CommonJS stuff
				...globals.nodeBuiltin,
			},
		},
		rules: {
			...js.configs.recommended.rules,
		},
	},
	{
		files: [
			"**/__tests__/*.js",
			"**/*.spec.js",
			"**/*.test.js",
		],
		ignores: [
			"dist/**",
		],
		plugins: {
			"jest": jest,
		},
		rules: {
			...jest.configs.recommended.rules,
		},
	},
];
