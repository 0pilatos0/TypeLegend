const fs = require("fs");
const path = require("path");

// Function to print colored text
function logColor(text: string, colorCode: string) {
  const colors = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
  } as any;
  console.log(colors[colorCode] + text + colors.reset);
}

// Get all folders underneath the src folder
const srcDir = path.join(__dirname, "../src");
const srcFolders = fs.readdirSync(srcDir).filter((file: string) => {
  return fs.statSync(path.join(srcDir, file)).isDirectory();
});

logColor("Generating index files...", "cyan");

const categoryStats = {} as any;

srcFolders.forEach((folder: string) => {
  // Transform folder name to camelCase and add "Utils" at the end
  const categoryName =
    folder
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("") + "Utils";

  // Get the list of utility files in the category directory
  const categoryPath = path.join(srcDir, folder);
  const utilityFiles = fs
    .readdirSync(categoryPath)
    .filter((file: string) => file.endsWith(".ts") && file !== "index.ts");

  // Generate the individual export statements with imports and types
  const individualImports = utilityFiles
    .map((file: string) => {
      const name = path.basename(file, ".ts");
      return `import { ${name} } from "./${name}";`;
    })
    .join("\n");

  const individualExports = utilityFiles
    .map((file: string) => {
      const name = path.basename(file, ".ts");
      return `export { ${name} } from "./${name}";`;
    })
    .join("\n");

  // Generate the class content for the category
  const classContent = `
${individualImports}

export class ${categoryName} {
  ${utilityFiles
    .map((file: string) => {
      const name = path.basename(file, ".ts");
      return `static ${name}: typeof ${name} = ${name};`;
    })
    .join("\n  ")}
}

${individualExports}

`;

  // Write the index.ts file for the category
  const indexPath = path.join(categoryPath, "index.ts");
  fs.writeFileSync(indexPath, classContent);

  // Update category statistics
  categoryStats[categoryName] = utilityFiles.length;
});

//clear the index.ts file for the root directory
const indexPath = path.join(srcDir, "index.ts");
fs.writeFileSync(indexPath, "");

//Generate the index.ts file for the root directory
srcFolders.forEach((folder: string) => {
  const indexContent = `export * from "./${folder}";\n`;
  const indexPath = path.join(srcDir, "index.ts");
  fs.appendFileSync(indexPath, indexContent);
});

// Print statistics
logColor("Index files generated successfully!", "green");
logColor("Category Statistics:", "yellow");
Object.keys(categoryStats).forEach((categoryName) => {
  logColor(
    `${categoryName}: ${categoryStats[categoryName]} utility functions or classes`,
    "cyan"
  );
});
