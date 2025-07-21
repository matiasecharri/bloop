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
            payload: { ...text, userText: e.target.value },
          })
        }
      />
      <p>Font Family: {capitalize(text.fontFamily)}</p>
      <p>Font Size: {text.fontSize}</p>
    </article>
  );
};

export default TextPicker;
