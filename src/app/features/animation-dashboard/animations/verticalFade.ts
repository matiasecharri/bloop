import _SplitText from "gsap/SplitText";
import { AnimationSettings, TextSettings } from "../models";
import gsap from "gsap";

const verticalFade = (
  animations: AnimationSettings,
  text: Pick<TextSettings, "fontSize">,
  splitedText: _SplitText
) => {
  gsap.set(splitedText.chars, { opacity: 0, y: `${text.fontSize * 2}` });

  const tl = gsap.timeline({
    repeat: animations.repeat,
    delay: animations.initialDelay,
    repeatDelay: animations.repeatDelay,
  });

  tl.to(splitedText.chars, {
    y: 0,
    opacity: 1,
    ease: animations.easing === "original" ? "expo.out" : animations.easing,
    duration: animations.duration,
    stagger: animations.stagger,
  });

  tl.to(splitedText.chars, {
    y: `-${text.fontSize * 2}`,
    opacity: 0,
    ease: animations.easing === "original" ? "expo.in" : animations.easing,
    duration: animations.duration,
    stagger: animations.stagger,
  });

  if (animations.yoyo) {
    tl.to(splitedText.chars, {
      delay: 0.8,
      y: 0,
      opacity: 1,
      ease: animations.easing === "original" ? "expo.out" : animations.easing,
      duration: animations.duration,
      stagger: {
        each: animations.stagger,
        from: "end",
      },
    });

    tl.to(splitedText.chars, {
      y: `${text.fontSize * 2}`,
      opacity: 0,
      ease: animations.easing === "original" ? "expo.in" : animations.easing,
      duration: animations.duration,
      stagger: {
        each: animations.stagger,
        from: "end",
      },
    });
  }

  return tl;
};

export default verticalFade;
