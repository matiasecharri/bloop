import { useRef } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

import { TextSettings } from "../models";
import { useControls } from "../context";

import s from "./Visualizer.module.css";
import animationsMap from "../animations";

gsap.registerPlugin(SplitText);

const Visualizer = () => {
  const { state } = useControls();
  const { text, animations } = state;

  const textRef = useRef<HTMLParagraphElement>(null);
  const splitRef = useRef<SplitText | null>(null);

  const dynamicStyles: Omit<TextSettings, "userText"> = {
    fontSize: text.fontSize,
    fontWeight: text.fontWeight,
    fontFamily: text.fontFamily,
    letterSpacing: text.letterSpacing,
  };

  useGSAP(() => {
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

    // Setea el estado inicial de los caracteres, si el usuario no escribio no hacemos nada
    if (!text.userText.length) return;

    const tl = animationsMap.blooping.fn(animations, text, $splitedText);

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
    <section className={s.visualizer}>
      <p key={text.userText} ref={textRef} style={dynamicStyles}>
        {text.userText}
      </p>
    </section>
  );
};

export default Visualizer;
