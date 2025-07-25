import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextSettings, useControls } from "../context";
import { useRef } from "react";
import s from "./Visualizer.module.css";

const Visualizer = () => {
  const { state } = useControls();
  const { text, animations } = state;

  const textRef = useRef<HTMLParagraphElement>(null);

  const dynamicStyles: Omit<TextSettings, "userText"> = {
    fontSize: text.fontSize,
    fontWeight: text.fontWeight,
    fontFamily: text.fontFamily,
    letterSpacing: text.letterSpacing,
  };

  useGSAP(() => {
    const text = textRef.current;

    gsap.killTweensOf(text);

    gsap.set(text, {
      opacity: 1,
      ease: animations.easing,
      duration: animations.duration,
      delay: animations.delay,
      repeat: animations.repeat,
      yoyo: animations.yoyo,
    });

    gsap.fromTo(
      text,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: animations.easing,
        duration: animations.duration,
        delay: animations.delay,
        repeat: animations.repeat,
        yoyo: animations.yoyo,
      }
    );
  }, [animations]);

  return (
    <section className={s.visualizer}>
      <p ref={textRef} style={dynamicStyles}>
        {text.userText}
      </p>
    </section>
  );
};

export default Visualizer;
