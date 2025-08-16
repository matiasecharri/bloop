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

  // Delete unnecessary imports
  const cleanedCode = codeFromJSON
    .split("\n")
    .filter(
      line =>
        !line.trim().startsWith("import") &&
        !line.trim().startsWith("export default")
    )
    .join("\n");

  const fullCode = `
/*
  **************************************
  * DEPENDENCIES
  * Requires gsap and SplitText (npm i gsap)
  * NOTE: Includes some internal Bloop types.
  * Remove TypeScript types to use as plain JS.
  **************************************
*/

/*
  **************************************
  * HOW TO USE
  * 1. Create a <p> element and set textSettings.userText
  * 2. Append element to DOM
  * 3. Create SplitText instance
  * 4. Call ${selectedAnimation}(animationSettings, textSettings, split)
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
