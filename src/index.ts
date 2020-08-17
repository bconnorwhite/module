import { PackageJson } from "type-fest";
import findUp from "find-up";
import { readJSONFileSync } from "read-json-safe";
import version, { getVersion } from "./version";

export type PackageJSON = PackageJson;

export function getPackageJSON(dirname: string): PackageJSON | undefined {
  const path = findUp.sync("package.json", {
    cwd: dirname
  });
  if(path) {
    return readJSONFileSync(path);
  }
}

export {
  version,
  getVersion
}
