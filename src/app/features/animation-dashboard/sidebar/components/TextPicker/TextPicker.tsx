import { CONTROLS_ACTIONS, useControls } from "../../../context";
import { capitalize } from "@/shared/utilities";
import { IconConfig } from "@/assets/svg";
import s from "./TextPicker.module.css";
import { PickerWrapper } from "@/shared/components/molecules";
import {
  InputRange,
  PickerStep,
  Subtitle,
  Title,
} from "@/shared/components/atoms";

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
          <InputRange
            label={`Size`}
            unit={`px /          
            ${(text.fontSize / 16).toFixed(2)} rem
              `}
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

          <InputRange
            label="weight"
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
      </PickerStep>
    </PickerWrapper>
  );
};

export default TextPicker;
