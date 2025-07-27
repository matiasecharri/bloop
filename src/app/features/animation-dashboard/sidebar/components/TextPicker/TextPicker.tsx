import { Subtitle, Title } from "@/shared/components/atoms";
import {
  InputRange,
  PickerStep,
  PickerWrapper,
  RangeWrapper,
} from "@/shared/components/molecules";
import { IconConfig } from "@/assets/svg";
import { capitalize } from "@/shared/utilities";

import { defaultControlsSettings } from "../../../models";
import { CONTROLS_ACTIONS, useControls } from "../../../context";

import s from "./TextPicker.module.css";

const TextPicker = () => {
  const { state, dispatch } = useControls();

  const { text } = state;

  const isTextDefault = <K extends keyof typeof text>(key: K): boolean =>
    text[key] === defaultControlsSettings.text[key];

  return (
    <PickerWrapper>
      <Title text="Text Config">
        <IconConfig />
      </Title>
      <PickerStep>
        <Subtitle step="01" text="Add your text" />
        <input
          className={s.input}
          maxLength={50}
          placeholder="Make it dance!"
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
        <RangeWrapper>
          <InputRange
            isBtnDisabled={isTextDefault("fontSize")}
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
            onClick={() =>
              dispatch({
                type: CONTROLS_ACTIONS.TEXT,
                payload: { fontSize: defaultControlsSettings.text.fontSize },
              })
            }
          />

          <InputRange
            isBtnDisabled={isTextDefault("fontWeight")}
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
            onClick={() =>
              dispatch({
                type: CONTROLS_ACTIONS.TEXT,
                payload: {
                  fontWeight: defaultControlsSettings.text.fontWeight,
                },
              })
            }
          />
          <InputRange
            isBtnDisabled={isTextDefault("letterSpacing")}
            label="spacing"
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
            onClick={() =>
              dispatch({
                type: CONTROLS_ACTIONS.TEXT,
                payload: {
                  letterSpacing: defaultControlsSettings.text.letterSpacing,
                },
              })
            }
          />
        </RangeWrapper>
      </PickerStep>
    </PickerWrapper>
  );
};

export default TextPicker;
