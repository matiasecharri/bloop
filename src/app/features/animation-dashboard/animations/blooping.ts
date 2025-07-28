import _SplitText from "gsap/SplitText";
import { AnimationSettings, TextSettings } from "../models";
import gsap from "gsap";

//TO-DO: Create a common object for the repeated stuff

const bloopingAnimation = (
  animations: AnimationSettings,
  text: Pick<TextSettings, "fontSize">,
  splitedText: _SplitText
) => {
  gsap.set(splitedText.chars, { opacity: 1, y: 0 });

  const tl = gsap.timeline({
    repeat: animations.repeat,
    delay: animations.initialDelay,
    repeatDelay: animations.repeatDelay,
  });

  tl.to(splitedText.chars, {
    y: `-${text.fontSize * 2}`,
    rotate: 360,
    ease: animations.easing === "original" ? "expo.out" : animations.easing,
    duration: animations.duration,
    stagger: animations.stagger,
  });
  tl.to(splitedText.chars, {
    y: 0,
    ease: animations.easing === "original" ? "bounce.out" : animations.easing,
    duration: animations.duration,
    stagger: animations.stagger,
    delay: -1,
  });

  //YOYO VARIATION
  if (animations.yoyo) {
    tl.to(splitedText.chars, {
      y: `-${text.fontSize * 2}`,
      ease: animations.easing === "original" ? "expo.out" : animations.easing,
      rotate: -360,
      duration: animations.duration,
      stagger: {
        each: animations.stagger,
        from: "end",
      },
    });

    tl.to(splitedText.chars, {
      y: 0,
      ease: animations.easing === "original" ? "bounce.out" : animations.easing,
      duration: animations.duration,
      stagger: {
        each: animations.stagger,
        from: "end",
      },
      delay: -1,
    });
  }

  return tl;
};

export default bloopingAnimation;
