export const scrambleText = (
  element: HTMLElement,
  originalText: string,
  duration = 1.5
) => {
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  const totalFrames = Math.floor(duration * 20);
  const settleFramesPerChar = Math.floor(totalFrames / originalText.length);

  let frame = 0;

  const scramble = () => {
    const newText = originalText
      .split("")
      .map((char, i) => {
        const shouldSettle = frame > (i + 1) * settleFramesPerChar;
        if (shouldSettle) {
          return originalText[i];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    element.textContent = newText;
    frame++;

    if (frame < totalFrames + settleFramesPerChar) {
      requestAnimationFrame(scramble);
    } else {
      element.textContent = originalText;
    }
  };

  scramble();
};
