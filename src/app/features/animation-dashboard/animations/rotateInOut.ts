import _SplitText from "gsap/SplitText";
import { AnimationSettings, TextSettings } from "../models";
import gsap from "gsap";

const rotateInOut = (
  animations: AnimationSettings,
  _text: Pick<TextSettings, "fontSize">,
  splitedText: _SplitText
) => {
  gsap.set(splitedText.chars, { opacity: 0, rotateY: 90 });

  const tl = gsap.timeline({
    repeat: animations.repeat,
    delay: animations.initialDelay,
    repeatDelay: animations.repeatDelay,
  });

  tl.to(splitedText.chars, {
    rotateY: 0,
    opacity: 1,
    ease: animations.easing === "original" ? "power2.out" : animations.easing,
    duration: animations.duration,
    stagger: animations.stagger,
  });

  tl.to(splitedText.chars, {
    rotateY: -90,
    opacity: 0,
    ease: animations.easing === "original" ? "power2.in" : animations.easing,
    duration: animations.duration,
    stagger: animations.stagger,
  });

  if (animations.yoyo) {
    tl.to(splitedText.chars, {
      rotateY: 0,
      opacity: 1,
      ease: animations.easing === "original" ? "power2.out" : animations.easing,
      duration: animations.duration,
      stagger: {
        each: animations.stagger,
        from: "end",
      },
    });
  }

  return tl;
};

export default rotateInOut;
