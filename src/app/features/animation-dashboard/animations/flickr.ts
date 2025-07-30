import _SplitText from "gsap/SplitText";
import { AnimationSettings, TextSettings } from "../models";
import gsap from "gsap";

const flicker = (
  animations: AnimationSettings,
  _text: Pick<TextSettings, "fontSize">,
  splitedText: _SplitText
) => {
  gsap.set(splitedText.chars, { opacity: 0.1 });

  const tl = gsap.timeline({
    repeat: animations.repeat,
    delay: animations.initialDelay,
    repeatDelay: animations.repeatDelay,
  });

  tl.to(splitedText.chars, {
    opacity: 1,
    ease: animations.easing === "original" ? "power2.inOut" : animations.easing,
    duration: animations.duration / 3,
    stagger: animations.stagger,
    yoyo: true,
    repeat: 2,
  });

  if (animations.yoyo) {
    tl.to(splitedText.chars, {
      opacity: 0.1,
      ease:
        animations.easing === "original" ? "power2.inOut" : animations.easing,
      duration: animations.duration / 2,
      stagger: {
        each: animations.stagger,
        from: "end",
      },
    });
  }

  return tl;
};

export default flicker;
