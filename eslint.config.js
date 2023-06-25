import globals from "globals";
import jest from "eslint-plugin-jest";
import js from "@eslint/js";

export default [
	{
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
		plugins: {
			"jest": jest,
		},
		rules: {
			...jest.configs.recommended.rules,
		},
	},
];
