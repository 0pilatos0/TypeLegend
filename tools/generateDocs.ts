const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "../src");
const readmePath = path.join(__dirname, "../USAGE.md");
const srcFolders = fs.readdirSync(srcDir).filter((file: string) => {
  return fs.statSync(path.join(srcDir, file)).isDirectory();
});

// ANSI color codes
const colors = {
  reset: "\x1b[0m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
  green: "\x1b[32m",
};

// Function to parse JSDoc comments and extract information
function parseJSDocComments(filePath: string) {
  const fileContent = fs.readFileSync(filePath, "utf8");

  //remove the function body from the file content so that the regex doesn't match the comments inside the function body
  const functionBodyRegex = /{[\s\S]*?}/g;
  const fileContentWithoutFunctionBody = fileContent.replace(
    functionBodyRegex,
    ""
  );

  const jsDocRegex = /\/\*\*\s*\n([\s\S]*?)\s*\*\//g;
  const matches = [];
  let match;

  while ((match = jsDocRegex.exec(fileContentWithoutFunctionBody)) !== null) {
    const comment = match[1].trim();
    matches.push(comment);
  }

  return matches;
}

// Function to generate the README content from parsed comments
function generateReadmeContent() {
  const utilityComments: {
    filePath: string;
    comments: string[];
    category: string;
  }[] = [];

  srcFolders.forEach((folder: string) => {
    const categoryPath = path.join(srcDir, folder);
    const utilityFiles = fs
      .readdirSync(categoryPath)
      .filter((file: string) => file.endsWith(".ts") && file !== "index.ts");

    utilityFiles.forEach((file: string) => {
      const filePath = path.join(categoryPath, file);
      const comments = parseJSDocComments(filePath);
      if (comments.length > 0) {
        utilityComments.push({ filePath, comments, category: folder });
      }
    });
  });

  // Log statistics
  console.log(colors.green, "Generating USAGE.md...", colors.reset);
  console.log(
    colors.cyan,
    `Found ${utilityComments.length} utility functions or classes.`,
    colors.reset
  );

  //group by category
  const grouped = utilityComments.reduce((acc, curr) => {
    if (!acc[curr.category]) {
      acc[curr.category] = [];
    }
    acc[curr.category].push(curr);
    return acc;
  }, {} as { [key: string]: typeof utilityComments });

  return `
# Usage

Here are some of the utility functions and classes available in this library:

${Object.keys(grouped)
  .map(
    (category) => `
## ${category.charAt(0).toUpperCase() + category.slice(1)}Utils

the following utility functions are available in the ${category}Utils class, they can be used as a static method on the ${category}Utils class or as a standalone function.

${grouped[category]
  .map(
    ({ filePath, comments }) => `
### ${path.basename(filePath).slice(0, -3)}
\`\`\`typescript
/**
${comments.join("\n")}
*/
\`\`\`
`
  )
  .join("\n")}
`
  )
  .join("\n")}
    

## License

This library is licensed under the MIT License.

`;
}

// Function to write the generated README content to the README.md file
function writeReadme() {
  const readmeContent = generateReadmeContent();
  fs.writeFileSync(readmePath, readmeContent, "utf8");

  console.log(colors.green, "USAGE.md generated successfully!", colors.reset);
}

// Generate the README file
writeReadme();
