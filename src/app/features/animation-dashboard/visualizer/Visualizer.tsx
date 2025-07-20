import { TextSettings, useControls } from "../context";
import s from "./Visualizer.module.css";

const Visualizer = () => {
  const { settings } = useControls();
  const { userText, fontSize, fontFamily } = settings.text;

  const dynamicStyles: Omit<TextSettings, "userText"> = {
    fontSize: fontSize,
    fontFamily: fontFamily,
  };

  return (
    <section className={s.visualizer}>
      <p style={dynamicStyles}>{userText}</p>
    </section>
  );
};

export default Visualizer;
