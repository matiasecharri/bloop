/*
 * This script reads all TypeScript animation files from the animation-dashboard folder,
 * converts their code into strings, and generates a JSON file (animationsStrings.json) 
 * mapping each animation name to its code.
 * 
 * You can run this script with Node.js using: `node scripts/exportAnimations.js`
 */

const fs = require("fs");
const path = require("path");

const animationsDir = path.join(
  __dirname,
  "../src/app/features/animation-dashboard/animations"
);
const outputPath = path.join(__dirname, "../src/shared/animationsStrings.json");

const files = fs.readdirSync(animationsDir).filter((f) => f.endsWith(".ts"));
const output = {};

files.forEach((file) => {
  const name = path.parse(file).name;
  const code = fs.readFileSync(path.join(animationsDir, file), "utf-8");
  output[name] = code;
});

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
console.log("✅ New animationsStrings.json generated.");
