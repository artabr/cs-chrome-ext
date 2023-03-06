module.exports = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    'main',
    {name: 'beta', prerelease: true},
  ],
  repositoryUrl: "https://github.com/artabr/cs-chrome-ext",
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ["@semantic-release/exec", {
      "generateNotesCmd": "node utils/updateManifestVersion.js ${nextRelease.version} public/manifest.json ; " +
                          "node utils/updateManifestVersion.js ${nextRelease.version} dist/manifest.json"
    }],
    [
      '@semantic-release/npm',
      {
        'npmPublish': false
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": [
          "public/manifest.json",
          "package.json"
        ],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    [
      '@semantic-release/github',
      {
        assets: [
          {
            path: 'dist/build.zip',
            name: 'ContentstackUIEnhancements-${nextRelease.gitTag}.zip',
            label: 'Contentstack UI Enhancements (${nextRelease.gitTag}) extension distribution'
          }
        ]
      }
    ]
  ]
};
