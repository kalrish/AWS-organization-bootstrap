// configuration for Jest
// https://jestjs.io/docs/configuration

export default {
	// https://jestjs.io/docs/configuration#testpathignorepatterns-arraystring
	testPathIgnorePatterns: [
		// we don't use ts-jest; instead, we transpile TypeScript into JavaScript and then let Jest run tests against the generated JavaScript
		// https://github.com/kulshekhar/ts-jest/discussions/3086
		"src/.*",
	],
};
