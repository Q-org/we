describe("Decorator", () => {
  it("should ", async () => {
    const { execSync } = require("child_process");
    const fs = require("fs");
    const path = require("path");
    const checkPath = "c:/dev/wei/apps/w";
    const packageDirs = fs
      .readdirSync(checkPath)
      .filter((file) => fs.statSync(path.join(checkPath, file)).isDirectory());

    console.log(`要检查的目录：`, packageDirs);
    const checkDependenciesPromises = packageDirs.map((dir) => {
      return new Promise((resolve, reject) => {
        const packagePath = path.join(checkPath, dir);
        console.log(`Checking unused dependencies in ${packagePath}...`);
        try {
          const result = execSync(
            'npx depcheck --ignores="node_modules,build,dist"',
            {
              cwd: packagePath,
              stdio: "pipe", // Change to 'pipe' to capture output
            },
          );
          resolve(result.toString()); // Convert buffer to string
        } catch (error) {
          reject(`Error checking dependencies in ${packagePath}: ${error}`);
        }
      });
    });

    const results = await Promise.allSettled(checkDependenciesPromises);
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        console.log(result.value);
      } else {
        console.error(result.reason);
      }
    });
  });
});
