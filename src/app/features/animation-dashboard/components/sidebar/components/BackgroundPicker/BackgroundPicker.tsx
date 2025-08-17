import { backgroundColors } from "@/app/features/animation-dashboard/constants/backgroundColors";
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

const { BACKGROUND } = CONTROLS_ACTIONS;

const ColorPicker = () => {
  const { dispatch, state } = useControls();
  const { background } = state;

  const isBackgroundDefault = <K extends keyof typeof background>(
    key: K
  ): boolean => background[key] === defaultControlsSettings.background[key];

  return (
    <PickerWrapper>
      <Title text="Background Config">
        <IconConfig />
      </Title>
      <PickerStep>
        <Subtitle step="08" text="select your background" />
        <ScrollerWrapper
          isDefaultExpanded
          isRow
          isBtnDisabled={isBackgroundDefault("backgroundColor")}
          subtitle={`${background.backgroundColor}`}
          title="selected:"
          onClick={() =>
            dispatch({
              type: BACKGROUND,
              payload: {
                backgroundColor:
                  defaultControlsSettings.background.backgroundColor,
              },
            })
          }
        >
          {backgroundColors.map((colorCode) => (
            <ButtonColor
              key={`bg-color${colorCode}`}
              ariaLabel={`Choose ${colorCode} as background color`}
              color={colorCode}
              isActive={colorCode === background.backgroundColor}
              onClick={() =>
                dispatch({
                  type: BACKGROUND,
                  payload: { backgroundColor: colorCode },
                })
              }
            />
          ))}
        </ScrollerWrapper>
      </PickerStep>
      <PickerStep>
        <CustomColorSelector
          title="Custom Background Selector"
          value={
            /^#([0-9A-F]{3}){1,2}$/i.test(background.backgroundColor)
              ? background.backgroundColor
              : defaultControlsSettings.background.backgroundColor
          }
          onChange={(newColor) =>
            dispatch({
              type: BACKGROUND,
              payload: { backgroundColor: newColor },
            })
          }
        />
        <Note text="*Click and select any background instead of the defaults." />
      </PickerStep>
    </PickerWrapper>
  );
};

export default ColorPicker;
