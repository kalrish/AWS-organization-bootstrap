// configuration for [`markdownlint-cli2`][markdownlint-cli2]
// https://github.com/DavidAnson/markdownlint-cli2#configuration

const options = {
	globs: [
		"**/*.md",
	],
	ignores: [
		// managed by [Yarn][]
		".yarn",
	],
};

export default options;


// [markdownlint-cli2]: https://github.com/DavidAnson/markdownlint-cli2
// [Yarn]: https://yarnpkg.com/
