// configuration for [ESLint][]
// https://eslint.org/docs/latest/use/configure/configuration-files-new

import globals from "globals";
import jest from "eslint-plugin-jest";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

const configurationForJavaScript = {
	// The three patterns are the default:
	//
	// > By default, ESLint matches `**/*.js`, `**/*.cjs`, and `**/*.mjs`.
	//
	// However:
	//
	// > […] config objects that don’t specify `files` or `ignores` apply to all files that have been matched by any other configuration object, […].
	//
	// Without these patterns, this configuration object could end up applying to files it cannot handle.
	files: [
		"**/*.js",
		"**/*.cjs",
		"**/*.mjs",
	],
	ignores: [
		// CommonJS loader for [Yarn Plug'n'Play][]
		".pnp.cjs",
		// ECMAScript module loader for [Yarn Plug'n'Play][]
		".pnp.loader.mjs",
		// managed by [Yarn][]
		".yarn/**",
		// emitted by the [TypeScript transpiler][]
		"dist/**",
	],
	languageOptions: {
		globals: {
			// Node.js stuff like `process`, `URL`,…
			// `nodeBuiltin` excludes CommonJS stuff
			...globals.nodeBuiltin,
		},
	},
	rules: {
		...js.configs.recommended.rules,
	},
};

const configurationForJestTestFiles = {
	// [Jest][] runs tests in files named as follows:
	files: [
		"**/__tests__/*.js",
		"**/*.spec.js",
		"**/*.test.js",
	],
	ignores: [
		// managed by [Yarn][]
		".yarn/**",
		// emitted by the [TypeScript transpiler][]
		"dist/**",
	],
	plugins: {
		"jest": jest,
	},
	rules: {
		...jest.configs.recommended.rules,
	},
};

const configurationForTypeScript = {
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
};

const configurationForTypeScriptJestTestFiles = {
	files: [
		"src/**/__tests__/*.ts",
		"src/**/*.spec.ts",
		"src/**/*.test.ts",
	],
	languageOptions: {
		globals: {
			// Node.js stuff like `process`, `URL`,…
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
};

const configuration = [
	configurationForJavaScript,
	configurationForJestTestFiles,
	configurationForTypeScript,
	configurationForTypeScriptJestTestFiles,
];

export default configuration;


// [ESLint]: https://eslint.org/
// [Jest]: https://jestjs.io/
// [TypeScript transpiler]: https://www.typescriptlang.org/docs/handbook/compiler-options
// [Yarn]: https://yarnpkg.com/
// [Yarn Plug'n'Play]: https://yarnpkg.com/features/pnp
