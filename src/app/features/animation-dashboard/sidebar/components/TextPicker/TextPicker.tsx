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
            <strong>03.</strong> Font Properties
          </h3>
          <div className={s.inputsWrapper}>
            <p><strong>Size:</strong> {text.fontSize}px / {(text.fontSize / 16).toFixed(2)}rem</p>
            <input
              className={s.inputRange}
              type="range"
              min={12}
              max={200}
              value={text.fontSize}
              onChange={(e) =>
                dispatch({
                  type: CONTROLS_ACTIONS.TEXT,
                  payload: { fontSize: Number(e.target.value) },
                })
              }
            />
            <p><strong>Weight:</strong> {text.fontWeight}</p>
            <input
              className={s.inputRange}
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
      </div>
    </article>
  );
};

export default TextPicker;
