import { CONTROLS_ACTIONS, useControls } from "../../../context";
import { capitalize } from "@/shared/utilities";
import { IconConfig } from "@/assets/svg";
import s from "./TextPicker.module.css";
import { PickerWrapper } from "@/shared/components/molecules";
import { PickerStep, Subtitle, Title } from "@/shared/components/atoms";

const TextPicker = () => {
  const { state, dispatch } = useControls();

  const { text } = state;

  return (
    <PickerWrapper>
      <Title text="Text Configuration">
        <IconConfig />
      </Title>
      <PickerStep>
        <Subtitle text="Add your text here" step="01" />
        <input
          type="text"
          value={text.userText}
          className={s.input}
          placeholder="Quick animations is really quick"
          onChange={(e) =>
            dispatch({
              type: CONTROLS_ACTIONS.TEXT,
              payload: { userText: e.target.value },
            })
          }
        />
      </PickerStep>
      <PickerStep>
        <Subtitle text="Font family" step="02" />
        <p className={s.fontFamily}>{capitalize(text.fontFamily)}</p>
      </PickerStep>
      <PickerStep>
        <Subtitle text="Font properties" step="03" />
        <div className={s.inputsWrapper}>
          <p>
            <strong>Size:</strong> {text.fontSize}px /{" "}
            {(text.fontSize / 16).toFixed(2)}rem
          </p>
          <input
            className={s.inputRange}
            type="range"
            min={12}
            max={200}
            value={text.fontSize}
            style={{
              // @ts-ignore
              "--progress": `${((text.fontSize - 12) / (200 - 12)) * 100}%`,
            }}
            onChange={(e) =>
              dispatch({
                type: CONTROLS_ACTIONS.TEXT,
                payload: { fontSize: Number(e.target.value) },
              })
            }
          />
          <p>
            <strong>Weight:</strong> {text.fontWeight}
          </p>
          <input
            className={s.inputRange}
            type="range"
            min={100}
            max={900}
            step={100}
            value={text.fontWeight}
            style={{
              // @ts-ignore
              "--progress": `${((text.fontWeight - 100) / (900 - 100)) * 100}%`,
            }}
            onChange={(e) =>
              dispatch({
                type: CONTROLS_ACTIONS.TEXT,
                payload: { fontWeight: Number(e.target.value) },
              })
            }
          />
        </div>
      </PickerStep>
    </PickerWrapper>
  );
};

export default TextPicker;
