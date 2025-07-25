//Animations

export const easings = [
  "none",
  "power1",
  "power1.in",
  "power1.inOut",
  "power1.out",
  "power2",
  "power2.in",
  "power2.inOut",
  "power2.out",
  "power3",
  "power3.in",
  "power3.inOut",
  "power3.out",
  "power4",
  "power4.in",
  "power4.inOut",
  "power4.out",
  "back",
  "back.in",
  "back.inOut",
  "back.out",
  "bounce",
  "bounce.in",
  "bounce.inOut",
  "bounce.out",
  "circ",
  "circ.in",
  "circ.inOut",
  "circ.out",
  "elastic",
  "elastic.in",
  "elastic.inOut",
  "elastic.out",
  "expo",
  "expo.in",
  "expo.inOut",
  "expo.out",
  "sine",
  "sine.in",
  "sine.inOut",
  "sine.out",
] as const;

export type Easing = (typeof easings)[number];

export interface AnimationSettings {
  duration: number;
  yoyo: boolean;
  repeat: number;
  delay: number;
  easing: Easing;
}

//Text

export interface TextSettings {
  userText: string;
  fontSize: number;
  fontWeight: number;
  fontFamily: string;
  letterSpacing: number;
}

//Combined Interfaces

export interface ControlsSettings {
  animations: AnimationSettings;
  text: TextSettings;
}

//Default Settings

export const defaultControlsSettings: ControlsSettings = {
  animations: {
    duration: 0.5,
    repeat: 0,
    yoyo: false,
    delay: 0,
    easing: "power1",
  },
  text: {
    userText: "Quick Animations",
    fontSize: 50,
    fontWeight: 400,
    fontFamily: "satoshi",
    letterSpacing: 0,
  },
};

/**
 * TO-DO: Implement animations
 * 
 * TO-DO: Replace yoyo with a button instead of a range
 * TO-DO: Add a tool-tip in every animation field
 *
 * TO-DO: Separate every animation field in it's own component
 *
 * TO-DO: Add an arrow to Scroller component
 * TO-DO: Add a button to reset everything
 *
 */
