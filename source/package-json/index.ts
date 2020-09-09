import find, { sync } from "find-up";
import { fileName, PackageJSON } from "types-pkg-json";
import { readJSONFile, readJSONFileSync } from "read-json-safe";
import { getVersion, getVersionSync } from "./version";

export function getPackageJSONSync(dirname: string): PackageJSON | undefined {
  const path = sync(fileName, { cwd: dirname });
  if(path !== undefined) {
    return readJSONFileSync(path);
  }
}

export async function getPackageJSON(dirname: string): Promise<PackageJSON | undefined> {
  return find(fileName, { cwd: dirname }).then((path) => {
    if(path !== undefined) {
      return readJSONFile(path);
    }
  });
}

export {
  PackageJSON,
  getVersion,
  getVersionSync
}
