import { MouseEvent, useRef } from "react";

import { useGSAP } from "@gsap/react";

import clsx from "clsx";

import { SplitText } from "gsap/all";
import { AnimationFn } from "../../animations";

import s from "./AnimationPreview.module.css";
import { AnimationSettings, TextSettings } from "../../models";

interface ButtonProps {
  animationName: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  isActive?: boolean;
  animationFn: AnimationFn;
}

const animationDemoSettings: AnimationSettings = {
  repeatDelay: 0,
  duration: 1,
  easing: "original",
  initialDelay: 0,
  repeat: -1,
  stagger: 0.05,
  yoyo: false,
  selectedAnimation: "",
};

const textDemoSettings: Pick<TextSettings, "fontSize"> = {
  fontSize: 24,
};

const AnimationPreview = ({
  animationName,
  isActive,
  onClick,
  animationFn,
}: ButtonProps) => {
  const textRef = useRef(null);

  useGSAP(() => {
    const $animatedText = textRef.current;
    if (!$animatedText) return;

    const $splitedText = new SplitText($animatedText, { type: "chars" });

    animationFn(animationDemoSettings, textDemoSettings, $splitedText);
  }, []);

  return (
    <button
      className={clsx(s.button, !!isActive && s.active)}
      onClick={onClick}
    >
      <p>{animationName}</p>
      <p ref={textRef} className={s.animatedText}>
        Bloop
      </p>
    </button>
  );
};

export default AnimationPreview;
