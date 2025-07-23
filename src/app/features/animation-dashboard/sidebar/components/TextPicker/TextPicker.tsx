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
        <Subtitle step="01" text="Add your text here" />
        <input
          className={s.input}
          placeholder="Quick animations is really quick"
          type="text"
          value={text.userText}
          onChange={(e) =>
            dispatch({
              type: CONTROLS_ACTIONS.TEXT,
              payload: { userText: e.target.value },
            })
          }
        />
      </PickerStep>
      <PickerStep>
        <Subtitle step="02" text="Font family" />
        <p className={s.fontFamily}>{capitalize(text.fontFamily)}</p>
      </PickerStep>
      <PickerStep>
        <Subtitle step="03" text="Font properties" />
        <div className={s.inputsWrapper}>
          <InputRange
            label={`Size`}
            max={200}
            min={12}
            unit={`px |          
            ${(text.fontSize / 16).toFixed(2)} rem
              `}
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
            max={900}
            min={100}
            step={100}
            value={text.fontWeight}
            onChange={(e) =>
              dispatch({
                type: CONTROLS_ACTIONS.TEXT,
                payload: { fontWeight: Number(e.target.value) },
              })
            }
          />
          <InputRange
            label="kerning"
            max={40}
            min={-20}
            step={0.1}
            unit={`px |          
            ${(text.letterSpacing / 16).toFixed(2)} rem
              `}
            value={text.letterSpacing}
            onChange={(e) =>
              dispatch({
                type: CONTROLS_ACTIONS.TEXT,
                payload: { letterSpacing: Number(e.target.value) },
              })
            }
          />
        </div>
      </PickerStep>
    </PickerWrapper>
  );
};

export default TextPicker;
