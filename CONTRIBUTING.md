# Developing this package

## Prerequisites

To develop this [package][Node.js packages], only [Node.js] is needed.

The following is necessary to develop this [package][Node.js packages]:

- version 16.20.0 or newer of [Node.js][]

## Package and dependency management

This [package][Node.js packages] and its dependencies are managed with [Yarn][].
If [Corepack][Node.js Corepack] has been [enabled][Node.js Corepack enablement], [Yarn][] may be invoked as usual:

```Shell
yarn …
```

Otherwise, [Yarn][] should be invoked through [Corepack][Node.js Corepack]:

```Shell
corepack yarn …
```

Either way, [Corepack][Node.js Corepack] will use the version of [Yarn][] configured in the [field `packageManager`][Node.js packages field packageManager].

## Coding

[EditorConfig][] for various editors and [IDEs][integrated development environments]

### Visual Studio Code

[Visual Studio Code][] extensions recommended for this workspace/project in `.vscode/extensions.json`

## Building

transpile JavaScript into [TypeScript][]:

```Shell
corepack yarn exec -- tsc
```

## Testing

### Markdown

[`markdownlint-cli2`][markdownlint-cli2]:

```Shell
corepack yarn exec -- markdownlint-cli2
```

### JavaScript and TypeScript

#### ESLint

[ESLint][]:

```Shell
corepack yarn exec -- eslint -- .
```

#### Jest

[Jest][]:

```Shell
NODE_OPTIONS=--experimental-vm-modules corepack yarn exec -- jest
```

[Jest][] uses the [Node.js module `node:vm`][Node.js module vm] to load [ECMAScript modules][] (see [GitHub repository jestjs/jest issue 9430][]).
That API is available only with the [Node.js option `--experimental-vm-modules`][Node.js option --experimental-vm-modules].
see [Jest with ECMAScript modules][Jest ECMAScript modules]


[ECMAScript modules]: https://tc39.es/ecma262/#sec-modules
[EditorConfig]: https://editorconfig.org/
[ESLint]: https://eslint.org/
[GitHub repository jestjs/jest issue 9430]: https://github.com/jestjs/jest/issues/9430
[integrated development environments]: https://en.wikipedia.org/wiki/Integrated_development_environment
[Jest]: https://jestjs.io/
[Jest ECMAScript modules]: https://jestjs.io/docs/ecmascript-modules
[markdownlint-cli2]: https://github.com/DavidAnson/markdownlint-cli2#readme
[Node.js]: https://nodejs.org/
[Node.js Corepack]: https://nodejs.org/api/corepack.html
[Node.js Corepack enablement]: https://nodejs.org/api/corepack.html#enabling-the-feature
[Node.js module vm]: https://nodejs.org/api/vm.html
[Node.js option --experimental-vm-modules]: https://nodejs.org/api/cli.html#--experimental-vm-modules
[Node.js packages]: https://nodejs.org/api/packages.html
[Node.js packages field packageManager]: https://nodejs.org/api/packages.html#packagemanager
[TypeScript]: https://www.typescriptlang.org/
[Visual Studio Code]: https://code.visualstudio.com/
[Yarn]: https://yarnpkg.com/
