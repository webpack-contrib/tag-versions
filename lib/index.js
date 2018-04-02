const compareVersions = require('compare-versions');

const execSync = require('child_process').execSync;

module.exports.compare = function(packageName, gte, lt) {
  const distTags = JSON.parse(
    execSync(`npm view ${packageName} dist-tags --json`)
  );

  console.log(compareVersions(distTags[`${gte}`], distTags[`${lt}`]));
};
