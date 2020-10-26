# Build Scripts for Web

> This package is a work in progress, not all advertised functionality is present.

An opinionated set of build scripts created to decrease maintenance burden and project boilerplate. Can be used via CLI and [Gulp](https://gulpjs.com/).

As an opinionated project the following is assumed and required;

* Standards First<br/>
  Strictly adheres to web standards where possible. Derivations from the standards that run currently may break.
* TypeScript<br/>
  JavaScript files are always ignored. TSX (JSX) syntax transforms are unsupported as it is an unofficial syntactic sugar.
* ES2020 Syntax

In exchange for the above limitations the following capabilities are offered;

* Optimised Bundles<br/>
  Multiple bundle configurations are generated and then picked based on feature detection results. Bundle selection logic is designed to have minimal impact on newer browsers.
* ...

## TypeScript

A TypeScript configuration is provided that cannot be overridden. For the purposes of allowing proper IDE integrations however a stub `tsconfig.json` file may be created that extends the package provided configuration.

The TypeScript version is determined by this package.

## Working with TSX (JSX)

While this syntax is unsupported the same outcome can be achieved with relative ease.

```ts
import { h, render } from "preact";
const app = h(
    // Component type
    "h1",
    // Props
    null,
    // Children (a rest param)
    "Hello World!"
);
render(app, document.body);
```

Some changes may occur here as React [attempting to optimise the JSX transformation](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html), which will likely in time ripple out to the rest of the ecosystem.

## Notes

1. TypeScript: From source to TypeScript output folder
2. Rollup: From TypeScipt output to destination folder
