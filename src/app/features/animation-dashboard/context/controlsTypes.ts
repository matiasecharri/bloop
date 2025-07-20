// interface ColorSettings {}

// interface BackgroundSettings {}

export interface AnimationSettings {
  duration: number;
  fadeIn: boolean;
  fadeOut: boolean;
  loop: boolean;
  startDelay: number;
  endDelay: number;
}

export interface TextSettings {
  userText: string;
  fontSize: string;
  fontFamily: string;
}

export interface ControlsSettings {
  animations: AnimationSettings;
  text: TextSettings;
}

export const DefaultControlsSettings: ControlsSettings = {
  animations: {
    duration: 1000,
    fadeIn: false,
    fadeOut: false,
    loop: false,
    startDelay: 0,
    endDelay: 0,
  },
  text: {
    userText: "Default Text",
    fontSize: "100px",
    fontFamily: "satoshi",
  },
};
