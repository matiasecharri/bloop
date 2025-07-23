// interface ColorSettings {}

// interface BackgroundSettings {}

export interface AnimationSettings {
  duration: number;
  fadeIn: boolean;
  fadeOut: boolean;
  loop: boolean;
  delay: number;
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
    delay: 1,
  },
  text: {
    userText: "Quick Animations",
    fontSize: 50,
    fontWeight: 400,
    fontFamily: "satoshi",
    letterSpacing: 0,
  },
};
