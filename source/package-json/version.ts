import { getPackageJSON, getPackageJSONSync } from ".";

export async function getVersion(dirname: string): Promise<string | undefined> {
  return getPackageJSON(dirname).then((pkg) => {
    return pkg?.version;
  });
}

export function getVersionSync(dirname: string): string | undefined {
  return getPackageJSONSync(dirname)?.version;
}
