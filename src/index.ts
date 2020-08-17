import { PackageJson } from "type-fest";
import { readJSONFileSync } from "read-json-safe";
import version, { getVersion } from "./version";

export type PackageJSON = PackageJson;

export function getPackageJSON(dirname: string): PackageJSON | undefined {
  return readJSONFileSync(dirname);
}

export {
  version,
  getVersion
}
