import packageJson from "./package.json";

const composeManifestVersion = (version) => {
  const regex = /(\d+.\d+).(\d+)(\D*)(\d*)/;
  const versionParts = version.match(regex);

  const isPrerelease = !!versionParts[3];

  return isPrerelease
    ? `${versionParts[1]}.${Number(versionParts[2]) - 1}.${versionParts[4]}`
    : version;
};

/**
 * After changing, please reload the extension at `chrome://extensions`
 */
const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: "UI Enhancements for Contentstack",
  version: composeManifestVersion(packageJson.version),
  description: packageJson.description,
  permissions: ["storage"],
  options_page: "src/pages/options/index.html",
  background: { service_worker: "src/pages/background/index.js" },
  action: {
    default_popup: "src/pages/popup/index.html",
    default_icon: "ui-icon-32.png",
  },
  icons: {
    "128": "ui-icon-128.png",
  },
  content_scripts: [
    {
      matches: ["https://*.contentstack.com/*"],
      js: ["src/pages/content/index.js"],
      css: ["assets/css/contentStyle.chunk.css"],
    },
  ],
  web_accessible_resources: [
    {
      resources: [
        "assets/js/*.js",
        "assets/css/*.css",
        "ui-icon-128.png",
        "ui-icon-32.png",
      ],
      matches: ["*://*/*"],
    },
  ],
};

export default manifest;
