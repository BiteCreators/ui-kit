module.exports = {
  repositoryUrl: 'https://github.com/BiteCreators/ui-kit.git',
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: ['dist/**/*.{js,css}', 'docs/**'],
      },
    ],
  ],
};

// fix: --- PATCH
// feat: --- MINOR
// BREAKING CHANGE: --- MAJOR