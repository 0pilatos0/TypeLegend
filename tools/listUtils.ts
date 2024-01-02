import fs from "fs";
import path from "path";

// ANSI color codes
const colors = {
  reset: "\x1b[0m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
  green: "\x1b[32m",
};

// Function to recursively read directories and return all file paths
function readDirRecursively(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      fileList = readDirRecursively(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
}

// Function to extract and log exports from a file
function logExports(filePath: string): void {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const exportRegex = /export (function|class) (\w+)/g;
  let match;
  while ((match = exportRegex.exec(fileContent)) !== null) {
    console.log(
      `${colors.cyan}File: ${filePath} ${colors.reset}- ${colors.green}Export: ${match[2]} ${colors.reset}(${colors.yellow}${match[1]}${colors.reset})`
    );
  }
}

// Main function to process all files in src directory
function processSrcDirectory(srcDir: string): void {
  const allFiles = readDirRecursively(srcDir);
  allFiles.forEach((file) => {
    if (file.endsWith(".ts")) {
      logExports(file);
    }
  });
}

// Replace './src' with the path to your source directory
processSrcDirectory("./src");
