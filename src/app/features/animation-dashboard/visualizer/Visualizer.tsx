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
  };

  useGSAP(() => {
    const text = textRef.current;

    gsap.to(text, {
      opacity: 0,
      ease: "power1",
      duration: animations.duration,
      yoyo: true,
      delay: animations.delay,
      repeat: animations.loop ? -1 : 0,
    });
  }, [animations]);

  return (
    <section className={s.visualizer}>
      <p style={dynamicStyles} ref={textRef}>
        {text.userText}
      </p>
    </section>
  );
};

export default Visualizer;
