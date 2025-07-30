import _SplitText from "gsap/SplitText";
import { AnimationSettings, TextSettings } from "../models";
import gsap from "gsap";

const popIn = (
  animations: AnimationSettings,
  _text: Pick<TextSettings, "fontSize">,
  splitedText: _SplitText
) => {
  gsap.set(splitedText.chars, { opacity: 0, scale: 0 });

  const tl = gsap.timeline({
    repeat: animations.repeat,
    delay: animations.initialDelay,
    repeatDelay: animations.repeatDelay,
  });

  tl.to(splitedText.chars, {
    scale: 1,
    opacity: 1,
    ease:
      animations.easing === "original" ? "back.out(1.7)" : animations.easing,
    duration: animations.duration,
    stagger: animations.stagger,
  });

  if (animations.yoyo) {
    tl.to(splitedText.chars, {
      scale: 0,
      opacity: 0,
      ease:
        animations.easing === "original" ? "back.in(1.7)" : animations.easing,
      duration: animations.duration,
      stagger: {
        each: animations.stagger,
        from: "end",
      },
    });
  }

  return tl;
};

export default popIn;
