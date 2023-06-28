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


[Node.js]: https://nodejs.org/
[Node.js Corepack]: https://nodejs.org/api/corepack.html
[Node.js Corepack enablement]: https://nodejs.org/api/corepack.html#enabling-the-feature
[Node.js packages]: https://nodejs.org/api/packages.html
[Node.js packages field packageManager]: https://nodejs.org/api/packages.html#packagemanager
[Yarn]: https://yarnpkg.com/
