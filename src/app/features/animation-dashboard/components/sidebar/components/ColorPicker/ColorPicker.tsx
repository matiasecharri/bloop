import { textColors } from "@/app/features/animation-dashboard/constants/textColors";
import {
  CONTROLS_ACTIONS,
  useControls,
} from "@/app/features/animation-dashboard/context";
import { defaultControlsSettings } from "@/app/features/animation-dashboard/models";
import { IconConfig } from "@/assets/svg";

import {
  ButtonColor,
  CustomColorSelector,
  Note,
  Subtitle,
  Title,
} from "@/shared/components/atoms";

import { PickerStep } from "@/shared/components/molecules";

import { PickerWrapper, ScrollerWrapper } from "@/shared/components/organisms";

const { TEXT_STYLES } = CONTROLS_ACTIONS;

const ColorPicker = () => {
  const { dispatch, state } = useControls();
  const { textStyles } = state;

  const isTextStylesDefault = <K extends keyof typeof textStyles>(
    key: K
  ): boolean => textStyles[key] === defaultControlsSettings.textStyles[key];

  return (
    <PickerWrapper>
      <Title text="Color Config">
        <IconConfig />
      </Title>
      <PickerStep>
        <Subtitle step="07" text="select your color" />
        <ScrollerWrapper
          isDefaultExpanded
          isRow
          isBtnDisabled={isTextStylesDefault("color")}
          subtitle={`${textStyles.color}`}
          title="selected:"
          onClick={() =>
            dispatch({
              type: TEXT_STYLES,
              payload: { color: defaultControlsSettings.textStyles.color },
            })
          }
        >
          {textColors.map((colorCode) => (
            <ButtonColor
              key={`txt-color${colorCode}`}
              ariaLabel={`Choose ${colorCode} as text color`}
              color={colorCode}
              isActive={colorCode === textStyles.color}
              onClick={() =>
                dispatch({ type: TEXT_STYLES, payload: { color: colorCode } })
              }
            />
          ))}
        </ScrollerWrapper>
      </PickerStep>
      <PickerStep>
        <CustomColorSelector
          title="Custom Color Selector"
          value={
            /^#([0-9A-F]{3}){1,2}$/i.test(textStyles.color)
              ? textStyles.color
              : defaultControlsSettings.textStyles.color
          }
          onChange={(newColor) =>
            dispatch({
              type: TEXT_STYLES,
              payload: { color: newColor },
            })
          }
        />
        <Note text="*Click and select any color instead of the defaults." />
      </PickerStep>
    </PickerWrapper>
  );
};

export default ColorPicker;
