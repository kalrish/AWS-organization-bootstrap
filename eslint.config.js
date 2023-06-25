import globals from "globals";
import jest from "eslint-plugin-jest";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

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
	{
		files: [
			"src/**/__tests__/*.ts",
			"src/**/*.spec.ts",
			"src/**/*.test.ts",
		],
		languageOptions: {
			globals: {
				// `nodeBuiltin` excludes CommonJS stuff
				...globals.nodeBuiltin,
			},
			parser: tsParser,
			parserOptions: {
				project: true,
			},
		},
		plugins: {
			"jest": jest,
		},
		rules: {
			...jest.configs.recommended.rules,
		},
	},
	{
		files: [
			"src/**/*.ts",
		],
		languageOptions: {
			globals: {
				// `nodeBuiltin` excludes CommonJS stuff
				...globals.nodeBuiltin,
			},
			parser: tsParser,
			parserOptions: {
				project: true,
			},
		},
		plugins: {
			"@typescript-eslint": tsPlugin,
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
		},
	},
];
