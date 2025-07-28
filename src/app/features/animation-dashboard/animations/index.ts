import bloopingAnimation from "./blooping";

const animationsMap = {
  blooping: {
    label: "Blooping",
    fn: bloopingAnimation,
    preview: "component here",
    category: "motion",
  },
  fadeIn: {
    label: "Fade In",
    fn: bloopingAnimation,
    preview: "component here",
    category: "Opacity",
  },
};

export default animationsMap;

//TO-DO: Create a common object for the properties (delay,repeat,duration,etc)
//TO-DO: Create a normalizer to clean any extra property like rotate, Y, scale, etc
//TO-DO: Make them dynamic
//TO-DO: ControlsSettings is going to need a "SelectedAnimation" property

// https://animejs.com/documentation/web-animation-api/
// https://tobiasahlin.com/moving-letters/