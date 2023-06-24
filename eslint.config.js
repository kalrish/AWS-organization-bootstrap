import globals from "globals";
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
];
