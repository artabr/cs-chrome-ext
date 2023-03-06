import jq from "node-jq";
import fs from "fs";

const cmdArgs = process.argv;

const newVersion = cmdArgs[2];
const manifestPath = cmdArgs[3];

class ManifestUpdater {
  async updateManifestVersion(version) {
    try {
      const regex = /(\d+.\d+).(\d+)(\D*)(\d*)/;
      const versionParts = version.match(regex);

      const isPrerelease = !!versionParts[3];

      const newVersion = isPrerelease
        ? `${versionParts[1]}.${Number(versionParts[2]) - 1}.${versionParts[4]}`
        : version;

      const filter = `.version = "${newVersion}"`;

      const output = await jq.run(filter, manifestPath, {});

      await fs.writeFile(manifestPath, output, (err) => {
        if (err) throw err;
        console.log(
          `The manifest version in "${manifestPath}" has been updated.`
        );
      });

      return output;
    } catch (err) {
      console.error(err);
    }
  }
}

const manifestUpdater = new ManifestUpdater();

manifestUpdater
  .updateManifestVersion(newVersion)
  .catch((err) => console.error(err));
