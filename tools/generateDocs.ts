const fs = require("node:fs");
const path = require("node:path");

const srcDir = path.join(__dirname, "../src");
const readmePath = path.join(__dirname, "../USAGE.md");
const README = path.join(__dirname, "../README.md");
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
		"",
	);

	const jsDocRegex = /\/\*\*\s*\n([\s\S]*?)\s*\*\//g;
	const matches = [];
	let match: RegExpExecArray | null;

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

	for (const folder of srcFolders) {
		const categoryPath = path.join(srcDir, folder);
		const utilityFiles = fs
			.readdirSync(categoryPath)
			.filter((file: string) => file.endsWith(".ts") && file !== "index.ts");

		for (const file of utilityFiles) {
			const filePath = path.join(categoryPath, file);
			const comments = parseJSDocComments(filePath);
			if (comments.length > 0) {
				utilityComments.push({ filePath, comments, category: folder });
			}
		}
	}

	// Log statistics
	console.log(colors.green, "Generating USAGE.md...", colors.reset);
	console.log(
		colors.cyan,
		`Found ${utilityComments.length} utility functions or classes.`,
		colors.reset,
	);

	//group by category
	const grouped = utilityComments.reduce(
		(acc, curr) => {
			if (!acc[curr.category]) {
				acc[curr.category] = [];
			}
			acc[curr.category].push(curr);
			return acc;
		},
		{} as { [key: string]: typeof utilityComments },
	);

	const toc = Object.keys(grouped)
		.map((category) => {
			const subItems = grouped[category]
				.map(({ filePath }) => {
					const fileName = path.basename(filePath).slice(0, -3);
					return `  - [${fileName}](#${fileName.toLowerCase()})`;
				})
				.join("\n");
			return `
- [${category.charAt(0).toUpperCase() + category.slice(1)}Utils](#${category}utils)
${subItems}`;
		})
		.join("\n");
	return `
# Usage

Here are some of the utility functions and classes available in this library:

## Table of Contents
${toc}

${Object.keys(grouped)
	.map(
		(category) => `
## ${category.charAt(0).toUpperCase() + category.slice(1)}Utils

the following utility functions are available in the \`${
			category.charAt(0).toUpperCase() + category.slice(1)
		}Utils\` class, they can be used as a static method on the \`${
			category.charAt(0).toUpperCase() + category.slice(1)
		}Utils\` class or as a standalone function.

${grouped[category]
	.map(
		({ filePath, comments }) => `
### ${path.basename(filePath).slice(0, -3)}
\`\`\`typescript
/**
 ${comments.join("\n")}
*/
\`\`\`
`,
	)
	.join("\n")}
`,
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

//get the count of the utility functions and classes in 2 variables, read dir recursively and get the count of the utility functions and classes
const files: string[] = [];

for (const folder of srcFolders) {
	const categoryPath = path.join(srcDir, folder);
	const utilityFiles = fs
		.readdirSync(categoryPath)
		.filter((file: string) => file.endsWith(".ts"));

	for (const file of utilityFiles) {
		files.push(path.join(folder, file));
	}
}

let utilityFunctionsCount = 0;
let utilityClassesCount = 0;

for (const file of files) {
	const filePath = path.join(srcDir, file);
	const fileContent = fs.readFileSync(filePath, "utf8");
	const functionRegex = /export function (\w+)/g;
	const classRegex = /export class (\w+)/g;
	let match: RegExpExecArray | null;
	while ((match = functionRegex.exec(fileContent)) !== null) {
		utilityFunctionsCount++;
	}
	while ((match = classRegex.exec(fileContent)) !== null) {
		utilityClassesCount++;
	}
}

console.log(
	colors.cyan,
	`Found ${utilityFunctionsCount} utility functions and ${utilityClassesCount} utility classes.`,
	colors.reset,
);

// //replace the 2 numbers in the README.md file
// - Total amount of typesafe utility functions: **0**
// - Total amount of typesafe utility classes: **0**

const readmeContent = fs.readFileSync(README, "utf8");
const updatedReadmeContent = readmeContent;
const updatedReadmeContent1 = updatedReadmeContent.replace(
	/Total amount of typesafe utility functions: \*\*\d+\*\*/,
	`Total amount of typesafe utility functions: **${utilityFunctionsCount}**`,
);

const updatedReadmeContent2 = updatedReadmeContent1.replace(
	/Total amount of typesafe utility classes: \*\*\d+\*\*/,
	`Total amount of typesafe utility classes: **${utilityClassesCount}**`,
);

fs.writeFileSync(README, updatedReadmeContent2, "utf8");
console.log(colors.green, "README.md updated successfully!", colors.reset);
