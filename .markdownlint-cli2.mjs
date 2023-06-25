// configuration for [`markdownlint-cli2`][markdownlint-cli2]
// https://github.com/DavidAnson/markdownlint-cli2#configuration

const options = {
	config: {

		// Allow up to two consecutive blank lines
		MD012: {
			maximum: 2,
		},
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/md012.md

		// Allow lines of any length, because hard wrapping:
		// - mixes up content and presentation and is therefore conceptually wrong;
		// - requires rewrapping after most changes, which is cumbersome to do manually and otherwise requires appropriate tooling and configuration; and
		// - results in bigger diffs than soft wrapping and semantic line breaks, at least with git's diff-highlight enabled.
		MD013: false,
		// https://github.com/DavidAnson/markdownlint/blob/main/doc/md013.md

	},
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
