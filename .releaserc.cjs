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
    '@semantic-release/github'
  ]
};
