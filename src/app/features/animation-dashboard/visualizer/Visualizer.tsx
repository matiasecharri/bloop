import { TextSettings, useControls } from "../context";
import s from "./Visualizer.module.css";

const Visualizer = () => {
  const { state } = useControls();
  const { text } = state;

  const dynamicStyles: Omit<TextSettings, "userText"> = {
    fontSize: text.fontSize,
    fontFamily: text.fontFamily,
  };

  return (
    <section className={s.visualizer}>
      <p style={dynamicStyles}>{text.userText}</p>
    </section>
  );
};

export default Visualizer;
