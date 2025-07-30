import _SplitText from "gsap/SplitText";
import { AnimationSettings, TextSettings } from "../models";
import gsap from "gsap";

//TO-DO: Create a common object for the repeated stuff

const horizontalFade = (
  animations: AnimationSettings,
  text: Pick<TextSettings, "fontSize">,
  splitedText: _SplitText
) => {
  gsap.set(splitedText.chars, { opacity: 0, x: `${text.fontSize * 2}` });

  const tl = gsap.timeline({
    repeat: animations.repeat,
    delay: animations.initialDelay,
    repeatDelay: animations.repeatDelay,
  });

  tl.to(splitedText.chars, {
    x: 0,
    ease: animations.easing === "original" ? "expo.out" : animations.easing,
    duration: animations.duration,
    stagger: animations.stagger,
    opacity: 1,
  });

  tl.to(splitedText.chars, {
    x: `-${text.fontSize * 2}`,
    ease: animations.easing === "original" ? "expo.out" : animations.easing,
    duration: animations.duration,
    stagger: animations.stagger,
    opacity: 0,
  });

  //YOYO VARIATION
  if (animations.yoyo) {
    tl.to(splitedText.chars, {
      x: 0,
      ease: animations.easing === "original" ? "expo.out" : animations.easing,
      duration: animations.duration,
      opacity: 1,
      stagger: {
        each: animations.stagger,
        from: "end",
      },
    });

    tl.to(splitedText.chars, {
      x: `${text.fontSize * 2}`,
      ease: animations.easing === "original" ? "expo.out" : animations.easing,
      duration: animations.duration,
      opacity: 0,
      stagger: {
        each: animations.stagger,
        from: "end",
      },
    });
  }

  return tl;
};

export default horizontalFade;
