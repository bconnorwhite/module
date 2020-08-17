import commander from "commander";
import { getPackageJSON } from ".";

export function getVersion(dirname: string) {
  const pkgJSON = getPackageJSON(dirname);
  return pkgJSON?.version;
}

export default (program: commander.Command, dirname: string) => {
  const version = getVersion(dirname);
  if(version && typeof version === "string") {
    program.version(version);
  }
}
