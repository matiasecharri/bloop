import _SplitText from "gsap/SplitText";

import { AnimationSettings, TextSettings } from "../models";

import bloopingAnimation from "./blooping";
import horizontalFade from "./horizontalFade";

type AnimationFn = (
  animations: AnimationSettings,
  text: Pick<TextSettings, "fontSize">,
  splitedText: _SplitText
) => gsap.core.Timeline;

type AnimationType = {
  label: string;
  fn: AnimationFn;
  category: string;
};

const animationsMap: Record<string, AnimationType> = {
  blooping: {
    label: "blooping",
    fn: bloopingAnimation,
    category: "motion",
  },
  fadeIn: {
    label: "horizontal fade",
    fn: horizontalFade,
    category: "opacity",
  },
};

export default animationsMap;
