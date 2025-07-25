import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextSettings, useControls } from "../context";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
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
    gsap.set($splitedText.chars, { opacity: 0, y: 20 });

    // Anima los caracteres individualmente
    gsap.fromTo(
      $splitedText.chars,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: animations.easing,
        duration: animations.duration,
        delay: animations.delay,
        repeat: animations.repeat,
        yoyo: animations.yoyo,
      }
    );

    // Cleanup: limpia split y tweens al desmontar o re-ejecutar
    return () => {
      if (splitRef.current) {
        gsap.killTweensOf(splitRef.current.chars);
        splitRef.current.revert();
        splitRef.current = null;
      }
    };
  }, [animations, text.userText]);

  return (
    <section className={s.visualizer}>
      <p key={text.userText} ref={textRef} style={dynamicStyles}>
        {text.userText}
      </p>
    </section>
  );
};

export default Visualizer;
