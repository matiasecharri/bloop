import { CONTROLS_ACTIONS, useControls } from "../../../context";
import { capitalize } from "@/shared/utilities";
import s from "./TextPicker.module.css";
import { IconConfig } from "@/assets/svg";

const TextPicker = () => {
  const { state, dispatch } = useControls();

  const { text } = state;

  return (
    <article>
      <div className={s.wrapper}>
        <h2 className={s.title}>
          <IconConfig /> Text Configuration
        </h2>
        <div className={s.step}>
          <h3 className={s.subtitle}>
            <strong>01.</strong> Add your text here
          </h3>
          <input
            type="text"
            value={text.userText}
            className={s.input}
            placeholder="Quick animations is funny!"
            onChange={(e) =>
              dispatch({
                type: CONTROLS_ACTIONS.TEXT,
                payload: { userText: e.target.value },
              })
            }
          />
        </div>
        <div className={s.step}>
          <h3 className={s.subtitle}>
            <strong>02.</strong> Font Family
          </h3>
          <p className={s.fontFamily}>{capitalize(text.fontFamily)}</p>
        </div>
        <div className={s.step}>
          <h3 className={s.subtitle}>
            <strong>03.</strong> Size and Weight
          </h3>
          <p>Font Size: {text.fontSize}</p>
          <input
            type="range"
            min={10}
            max={100}
            value={text.fontSize}
            onChange={(e) =>
              dispatch({
                type: CONTROLS_ACTIONS.TEXT,
                payload: { fontSize: Number(e.target.value) },
              })
            }
          />
          <p>Font Weight: {text.fontWeight}</p>
          <input
            type="range"
            min={100}
            max={900}
            step={100}
            value={text.fontWeight}
            onChange={(e) =>
              dispatch({
                type: CONTROLS_ACTIONS.TEXT,
                payload: { fontWeight: Number(e.target.value) },
              })
            }
          />
        </div>
      </div>
    </article>
  );
};

export default TextPicker;
