// Default Settings

import { ControlsSettings } from "./controlsTypes";

export const defaultControlsSettings: ControlsSettings = {
  animations: {
    repeatDelay: 2,
    duration: 1,
    easing: "original",
    initialDelay: 0,
    repeat: -1,
    stagger: 0.05,
    yoyo: true,
    selectedAnimation: "blooping",
  },
  text: {
    fontFamily: "satoshi",
    fontSize: 100,
    fontWeight: 700,
    letterSpacing: -1.6,
    userText: "Blooooop",
  },
};
