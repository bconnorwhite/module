import { join } from "path";
import { fileName, PackageJSON } from "types-pkg-json";
import { readJSONFile, readJSONFileSync } from "read-json-safe";
import { getVersion, getVersionSync } from "./version";

function getPath(dirname: string, relative: string = ""): string {
  const path = join(dirname, relative);
  return path.endsWith(fileName) ? path : join(path, fileName);
}

export function getPackageJSONSync(dirname: string, relative: string = ""): PackageJSON | undefined {
  const path = getPath(dirname, relative);
  return readJSONFileSync(path);
}

export function getPackageJSON(dirname: string, relative: string = ""): Promise<PackageJSON | undefined> {
  const path = getPath(dirname, relative);
  return readJSONFile(path);
}

export {
  PackageJSON,
  getVersion,
  getVersionSync
}
