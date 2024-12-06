const fs = require("fs-extra");
const path = require("path");
const { optimize } = require("svgo");

// Define the folder containing the SVG files
const iconsFolder = path.resolve(
  __dirname,
  "../node_modules/iconoir/icons/regular/"
); // Update "icons" to your folder path
const outputFolder = path.resolve(__dirname, "../lib/Icon/dist"); // Output folder for processed icons

// Ensure output folder exists
fs.ensureDirSync(outputFolder);

// Function to optimize and process SVG files
async function processIcons(folder) {
  const files = await fs.readdir(folder);
  const svgFileNames = [];

  for (const file of files) {
    const filePath = path.join(folder, file);

    // Process only SVG files
    if (path.extname(file) === ".svg") {
      const svgContent = await fs.readFile(filePath, "utf8");

      // Write optimized SVG to output folder
      const outputFilePath = path.join(outputFolder, file);

      await fs.writeFile(outputFilePath, svgContent);

      // Add file name to the list
      svgFileNames.push(file.split(".")[0]);
    }
  }

  // Save file names list
  const iconNameType = path.join(outputFolder, "IconName.ts");
  await fs.writeFile(
    iconNameType,
    `type IconName =
  | "${svgFileNames.join('"\n  | "')}";
  
export default IconName;
`,
    "utf8"
  );

  console.log(`Processed ${svgFileNames.length} SVG icons.`);
  console.log(`Optimized icons saved to ${outputFolder}`);
}

// Run the script
processIcons(iconsFolder).catch((err) => {
  console.error("Error processing icons:", err);
});
