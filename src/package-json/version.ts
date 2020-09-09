import { getPackageJSON, getPackageJSONSync } from ".";

export async function getVersion(dirname: string, relative?: string) {
  return getPackageJSON(dirname, relative).then((pkg) => {
    return pkg?.version;
  });
}

export function getVersionSync(dirname: string, relative?: string) {
  return getPackageJSONSync(dirname, relative)?.version;
}
