import { useRef } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

import { useControls } from "../../context";
import {
  BackgroundSettings,
  TextSettings,
  TextStylesSettings,
} from "../../models";
import animationsMap from "../../animations";

import s from "./Visualizer.module.css";

gsap.registerPlugin(SplitText);

const Visualizer = () => {
  const { state } = useControls();
  const { text, animations, textStyles, background } = state;

  const textRef = useRef<HTMLParagraphElement>(null);
  const splitRef = useRef<SplitText | null>(null);

  type DynamicTextType = Omit<TextSettings, "userText"> & TextStylesSettings;

  const dynamicTextStyles: DynamicTextType = {
    fontSize: text.fontSize,
    fontWeight: text.fontWeight,
    fontFamily: text.fontFamily,
    letterSpacing: text.letterSpacing,
    color: textStyles.color,
  };

  const dynamicBackgroundStyles: BackgroundSettings = {
    backgroundColor: background.backgroundColor,
  };

  useGSAP(() => {
    if (!text.userText.length) return;

    const $animatedText = textRef.current;
    if (!$animatedText) return;

    // Limpiamos split y tweens previos en caso de que haya
    if (splitRef.current) {
      gsap.killTweensOf(splitRef.current.chars);
      splitRef.current.revert();
    }

    // Creamos un nuevo split y lo guardamos en la ref
    const $splitedText = new SplitText($animatedText, { type: "chars" });
    splitRef.current = $splitedText;

    // Limpiamos animaciones previas de los caracteres actuales
    gsap.killTweensOf($splitedText.chars);

    const tl = animationsMap[animations.selectedAnimation].fn(
      animations,
      text,
      $splitedText
    );

    // Cleanup: limpia split y tweens al desmontar o re-ejecutar
    return () => {
      if (splitRef.current) {
        tl.kill();
        gsap.killTweensOf(splitRef.current.chars);
        splitRef.current.revert();
        splitRef.current = null;
      }
    };
  }, [animations, text.userText, text.fontSize]);

  return (
    <section className={s.visualizer} style={dynamicBackgroundStyles}>
      <p key={text.userText} ref={textRef} style={dynamicTextStyles}>
        {text.userText}
      </p>
    </section>
  );
};

export default Visualizer;
