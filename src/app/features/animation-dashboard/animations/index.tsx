import _SplitText from "gsap/SplitText";

import { AnimationSettings, TextSettings } from "../models";

import blooping from "./blooping";
import horizontalFade from "./horizontalFade";
import verticalFade from "./verticalFade";
import flicker from "./flicker";
import popIn from "./popIn";
import rotateInOut from "./rotateInOut";

export type AnimationFn = (
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
    label: "Blooping",
    fn: blooping,
    category: "motion",
  },
  horizontalFade: {
    label: "Slide & Vanish",
    fn: horizontalFade,
    category: "opacity",
  },
  verticalFade: {
    label: "Rise & Fade",
    fn: verticalFade,
    category: "opacity",
  },
  flicker: {
    label: "Flicker Pulse",
    fn: flicker,
    category: "opacity",
  },
  popIn: {
    label: "Popcorn",
    fn: popIn,
    category: "scale",
  },
  rotateInOut: {
    label: "Spin & Out",
    fn: rotateInOut,
    category: "rotation",
  },
};

export default animationsMap;
