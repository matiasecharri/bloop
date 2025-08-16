import { ControlsSettings } from "@/app/features/animation-dashboard/models";
import animationsStrings from "@/shared/animationsStrings.json";

type AnimationsMap = Record<string, string>;
const typedAnimationsStrings: AnimationsMap = animationsStrings;

const handleExportAnimationCode = (
  selectedAnimation: string,
  state: ControlsSettings
) => {
  const codeFromJSON = typedAnimationsStrings[selectedAnimation];
  if (!codeFromJSON) return;

  // Delete unnecessary imports and export default
  let cleanedCode = codeFromJSON
    .split("\n")
    .filter(
      (line) =>
        !line.trim().startsWith("import") &&
        !line.trim().startsWith("export default")
    )
    .join("\n");

  // Replace internal _text param with text
  cleanedCode = cleanedCode.replace(/\b_text\b/g, "text");

  const fullCode = `
/*
  **************************************
  * DEPENDENCIES
  * Requires gsap and SplitText (npm i gsap)
  * 👀 NOTE: This code includes internal Bloop types — please delete them from the parameters (animations, text, splitText) before running.
  **************************************
*/

/*
  **************************************
  * HOW TO USE
  * 1. Create a <p> element and set textSettings.userText
  * 2. Append element to DOM
  * 3. Create SplitText instance
  * 4. Call ${selectedAnimation}(animationSettings, textSettings, split)
  * We hope you have as much fun using it as we did creating it 🎉
  * 
  * From: The Bloop Team
  **************************************
*/

${cleanedCode}

const textSettings = ${JSON.stringify(state.text, null, 2)};
const animationSettings = ${JSON.stringify(state.animations, null, 2)};

// Example of how to use it:
const element = document.createElement("p");
element.textContent = textSettings.userText;
document.body.appendChild(element);

const split = new SplitText(element, { type: "chars" });
${selectedAnimation}(animationSettings, textSettings, split);
`;

  const blob = new Blob([fullCode], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `bloop-${selectedAnimation}.js`;
  a.click();
  URL.revokeObjectURL(url);
};

export default handleExportAnimationCode;
