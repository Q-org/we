const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const packageDirs = fs
  .readdirSync("packages")
  .filter((file) => fs.statSync(path.join("packages", file)).isDirectory());

packageDirs.forEach((dir) => {
  const packagePath = path.join("packages", dir);
  console.log(`Checking unused dependencies in ${packagePath}...`);
  try {
    execSync('depcheck --ignores="node_modules,build,dist"', {
      cwd: packagePath,
      stdio: "inherit",
    });
  } catch (error) {
    console.error(`Error checking dependencies in ${packagePath}`, error);
  }
});
