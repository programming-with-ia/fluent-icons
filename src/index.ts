import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputFile = "./.dot-tsx/index.tsx";
const iconsDir = path.join(path.dirname(outputFile), "icons");

function toPascalCase(str: string) {
  return str.replace(/(^\w|[-_]\w)/g, (m) =>
    m.replace(/[-_]/, "").toUpperCase()
  );
}

function generateIndex() {
  try {
    const files = fs.readdirSync(iconsDir);
    // Ignore the outputFile itself
    const tsxFiles = files.filter(
      (f) => f.endsWith(".tsx") && path.resolve(iconsDir, f) !== outputFile
    );
    const relativePath = path
      .relative(path.dirname(outputFile), iconsDir)
      .replace(/\\/g, "/");

    const exportLines = tsxFiles.map((file) => {
      const fileName = path.basename(file, ".tsx");
      const exportName = toPascalCase(fileName);
      //   return `export { default as ${exportName} } from "./components/icons/${fileName}";`;
      return `export { default as ${exportName} } from "./${relativePath}/${fileName}";`;
    });

    const content = exportLines.join("\n") + "\n";

    fs.writeFileSync(outputFile, content);
    console.log("index.tsx generated successfully!", outputFile);
  } catch (err) {
    console.error("Error:", err);
  }
}

generateIndex();
