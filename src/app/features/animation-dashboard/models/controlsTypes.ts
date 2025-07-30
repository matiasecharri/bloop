//Animation Interface

import { EasingType } from "../constants";

export interface AnimationSettings {
  repeatDelay: number;
  duration: number;
  easing: EasingType;
  initialDelay: number;
  repeat: number;
  stagger: number;
  yoyo: boolean;
  selectedAnimation: string;
}

// Text Interface

export interface TextSettings {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  letterSpacing: number;
  userText: string;
}

// Combined Interfaces

export interface ControlsSettings {
  animations: AnimationSettings;
  text: TextSettings;
}

/**
 * TO-DO: Feature - Implement animations
 *
 * TO-DO: UX - Add an arrow to Scroller component
 * TO-DO: UX - Easing btns can have a line with the easing
 * TO-DO: UX - Include an automatic adjustment depending on user input text, "improved duration adjustment"
 * TO-DO: UX - Allow to compress the UI *
 * TO-DO: UX - Add a button to reset everything
 *
 * TO-DO: Structure - Fragment animation picker (even more)
 */
