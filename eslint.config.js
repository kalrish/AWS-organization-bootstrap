// configuration for [ESLint][]
// https://eslint.org/docs/latest/use/configure/configuration-files-new

import js from "@eslint/js";

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
	],
	rules: {
		...js.configs.recommended.rules,
	},
};

const configuration = [
	configurationForJavaScript,
];

export default configuration;


// [ESLint]: https://eslint.org/
// [Yarn]: https://yarnpkg.com/
// [Yarn Plug'n'Play]: https://yarnpkg.com/features/pnp
