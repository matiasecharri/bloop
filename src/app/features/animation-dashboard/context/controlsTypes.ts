// interface ColorSettings {}

// interface BackgroundSettings {}
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
  fadeIn: boolean;
  fadeOut: boolean;
  loop: boolean;
  delay: number;
  easing: Easing;
}

export interface TextSettings {
  userText: string;
  fontSize: number;
  fontWeight: number;
  fontFamily: string;
  letterSpacing: number;
}

export interface ControlsSettings {
  animations: AnimationSettings;
  text: TextSettings;
}

export const defaultControlsSettings: ControlsSettings = {
  animations: {
    duration: 2,
    fadeIn: false,
    fadeOut: false,
    loop: true,
    delay: 0,
    easing: "power1.in",
  },
  text: {
    userText: "Quick Animations",
    fontSize: 50,
    fontWeight: 400,
    fontFamily: "satoshi",
    letterSpacing: 0,
  },
};
