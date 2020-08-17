# @bconnorwhite/module
![dependencies](https://img.shields.io/david/bconnorwhite/module)
![typescript](https://img.shields.io/github/languages/top/bconnorwhite/module)
![npm](https://img.shields.io/npm/v/@bconnorwhite/module)

Set commander version based on your module's package.json.

```
yarn add @bconnorwhite/module
```
###### Example usage:
```js
import { program } from "commander";
import { getPackageJSON, version, getVersion } from "@bconnorwhite/module";

// Set commander version
version(program, __dirname); // program.version(version);

// Get version from package.json
getVersion() => string | undefined;

// Get full package.json
getPackageJSON() => PackageJSON | undefined;
```
