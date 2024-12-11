import fs from "fs";
import path from "path";

const dirPath = path.join(new URL(import.meta.url).pathname, "../", "dist"); // Use import.meta.url to get the directory path

// Function to rename .js files to .mjs
function renameToMjs(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      renameToMjs(filePath); // Recursively process subdirectories
    } else if (file.endsWith(".js")) {
      const newFilePath = filePath.replace(".js", ".mjs");
      fs.renameSync(filePath, newFilePath);
      console.log(`Renamed: ${filePath} -> ${newFilePath}`);
    }
  });
}

renameToMjs(dirPath);
