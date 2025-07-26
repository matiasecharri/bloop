import { useRef } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

import { TextSettings } from "../models";
import { useControls } from "../context";

import s from "./Visualizer.module.css";

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

    //We need to use params to define the animation
    const createAnimationWithTl = (splittedText: any) => {
      gsap.set(splittedText.chars, { opacity: 1, y: 0 });

      const tl = gsap.timeline({
        repeat: animations.repeat,
        delay: animations.initialDelay,
        repeatDelay: animations.repeatDelay,
      });

      tl.to(splittedText.chars, {
        y: `-${text.fontSize * 2}`,
        rotate: 360,
        ease: animations.easing === "original" ? "expo.out" : animations.easing,
        duration: animations.duration,
        stagger: animations.stagger,
      });
      tl.to(splittedText.chars, {
        y: 0,
        ease:
          animations.easing === "original" ? "bounce.out" : animations.easing,
        duration: animations.duration,
        stagger: animations.stagger,
        delay: -1,
      });

      //YOYO VARIATION
      if (animations.yoyo) {
        tl.to(splittedText.chars, {
          y: `-${text.fontSize * 2}`,
          ease:
            animations.easing === "original" ? "expo.out" : animations.easing,
          rotate: -360,
          duration: animations.duration,
          stagger: {
            each: animations.stagger,
            from: "end",
          },
        });

        tl.to(splittedText.chars, {
          y: 0,
          ease:
            animations.easing === "original" ? "bounce.out" : animations.easing,
          duration: animations.duration,
          stagger: {
            each: animations.stagger,
            from: "end",
          },
          delay: -1,
        });
      }

      return tl;
    };

    const tl = createAnimationWithTl($splitedText);

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
