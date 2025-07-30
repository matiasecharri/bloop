import { IconConfig } from "@/assets/svg";
import { capitalize } from "@/shared/utilities";

import { Button, InputText, Subtitle, Title } from "@/shared/components/atoms";
import { InputRange, PickerStep } from "@/shared/components/molecules";
import {
  PickerWrapper,
  RangeWrapper,
  ScrollerWrapper,
} from "@/shared/components/organisms";

import { defaultControlsSettings } from "@/app/features/animation-dashboard/models";
import {
  CONTROLS_ACTIONS,
  useControls,
} from "@/app/features/animation-dashboard/context";

import {
  FontType,
  availableFonts,
} from "@/app/features/animation-dashboard/constants";

const { TEXT: TEXT_ACTION } = CONTROLS_ACTIONS;

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
        <InputText
          maxLength={50}
          placeholder="Make it dance!"
          value={text.userText}
          onChange={(e) =>
            dispatch({
              type: TEXT_ACTION,
              payload: { userText: e.target.value },
            })
          }
        />
      </PickerStep>
      <PickerStep>
        <Subtitle step="02" text="Font family" />
        <ScrollerWrapper
          isBtnDisabled={isTextDefault("fontFamily")}
          title={`Selected: ${text.fontFamily}`}
          onClick={() =>
            dispatch({
              type: TEXT_ACTION,
              payload: { fontFamily: "satoshi" },
            })
          }
        >
          {availableFonts.map((font: FontType) => (
            <Button
              key={font.name}
              customFont={font.name}
              isActive={font.name === text.fontFamily}
              text={capitalize(font.name)}
              onClick={() =>
                dispatch({
                  type: TEXT_ACTION,
                  payload: { fontFamily: font.name },
                })
              }
            />
          ))}
        </ScrollerWrapper>
      </PickerStep>
      <PickerStep>
        <Subtitle step="03" text="Font settings" />
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
                type: TEXT_ACTION,
                payload: { fontSize: Number(e.target.value) },
              })
            }
            onClick={() =>
              dispatch({
                type: TEXT_ACTION,
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
                type: TEXT_ACTION,
                payload: { fontWeight: Number(e.target.value) },
              })
            }
            onClick={() =>
              dispatch({
                type: TEXT_ACTION,
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
                type: TEXT_ACTION,
                payload: { letterSpacing: Number(e.target.value) },
              })
            }
            onClick={() =>
              dispatch({
                type: TEXT_ACTION,
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
