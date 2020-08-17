# @bconnorwhite/module
![dependencies](https://img.shields.io/david/bconnorwhite/package)
![minzipped size](https://img.shields.io/bundlephobia/minzip/@bconnorwhite/package)
![typescript](https://img.shields.io/github/languages/top/bconnorwhite/package)
![npm](https://img.shields.io/npm/v/@bconnorwhite/package)

A utility for reading package.json of the root project, and forming paths relative to it.

```
yarn add @bconnorwhite/package
```

## API
###### Types:
```ts
type PackageDir = {
  path: string;
  relative: string;
  name: string;
}

getDir(
  getParentDir: (relative: string) => string | { path: string },
  name: string,
  relative: string = ""
) => PackageDir

getRootDir(relative: string = "") => PackageDir
// path to root of the project

getPackage() => PackageJSON
// package.json object

getMainDir() => PackageDir
// path to 'main' in package.json

getVerison() => string
// version in package.json

getScripts() => string[];
// names of scripts in package.json

getPackageManagerName() => Promise<"yarn" | "npm" | "pnpm" | undefined>
// get name of package manager in use
```
###### Example usage:
```js
import { getPackage, getDir, getRootDir, getMainDir } from "@bconnorwhite/package";
```
