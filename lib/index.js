const compareVersions = require('compare-versions');

const execSync = require('child_process').execSync;

function compare() {
  const distTags = JSON.parse(execSync(`npm view webpack dist-tags --json`));

  console.log(compareVersions(`${distTags.next}`, `${distTags.latest}`));
}

module.exports = compare();
