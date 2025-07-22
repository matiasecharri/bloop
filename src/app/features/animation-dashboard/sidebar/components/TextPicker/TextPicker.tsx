import { CONTROLS_ACTIONS, useControls } from "../../../context";
import { capitalize } from "@/shared/utilities";

const TextPicker = () => {
  const { state, dispatch } = useControls();

  const { text } = state;

  return (
    <article>
      <input
        type="text"
        value={text.userText}
        onChange={(e) =>
          dispatch({
            type: CONTROLS_ACTIONS.TEXT,
            payload: { userText: e.target.value },
          })
        }
      />
      <p>Font Family: {capitalize(text.fontFamily)}</p>
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
    </article>
  );
};

export default TextPicker;
