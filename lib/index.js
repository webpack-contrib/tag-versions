const compareVersions = require('compare-versions');

const execSync = require('child_process').execSync;

export default function compare() {
  const distTags = exec(`npm view webpack dist-tags --json`);

  return compareVersions(distTags.latest, distTags.next);
}

function exec(command) {
  execSync(command, {
    stdio: 'inherit',
  });
}
