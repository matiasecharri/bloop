import { PickerStep, PickerWrapper } from "@/shared/components/molecules";
import {
  CONTROLS_ACTIONS,
  defaultControlsSettings,
  useControls,
} from "../../../context";
import { InputRange, Subtitle, Title } from "@/shared/components/atoms";
import { RangeWrapper } from "@/shared/components/molecules";
import { IconConfig } from "@/assets/svg";

const AnimationPicker = () => {
  const { state, dispatch } = useControls();

  const { animations } = state;

  const isAnimationDefault = <K extends keyof typeof animations>(
    key: K
  ): boolean => animations[key] === defaultControlsSettings.animations[key];

  return (
    <PickerWrapper>
      <Title text="Animation Config">
        <IconConfig />
      </Title>
      <PickerStep>
        <Subtitle step="04" text="pick your animation" />
      </PickerStep>
      <PickerStep>
        <Subtitle step="05" text="animation properties" />
        <RangeWrapper>
          <InputRange
            isBtnDisabled={isAnimationDefault("duration")}
            label="Duration"
            max={3}
            min={0.1}
            step={0.1}
            unit="secs"
            value={animations.duration}
            onChange={(e) =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: { duration: Number(e.target.value) },
              })
            }
            onClick={() =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: {
                  duration: defaultControlsSettings.animations.duration,
                },
              })
            }
          />
          <InputRange
            isBtnDisabled={isAnimationDefault("delay")}
            label="Delay"
            max={3}
            min={0.1}
            step={0.1}
            unit="secs"
            value={animations.delay}
            onChange={(e) =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: { delay: Number(e.target.value) },
              })
            }
            onClick={() =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: {
                  delay: defaultControlsSettings.animations.delay,
                },
              })
            }
          />
        </RangeWrapper>
      </PickerStep>
    </PickerWrapper>
  );
};

export default AnimationPicker;
// <p>Duration: {animations.duration}</p>
// <p>Delay: {animations.delay}</p>
// <p>FadeIn: {animations.fadeIn ? "true" : "false"}</p>
// <p>FadeOut: {animations.fadeOut ? "true" : "false"}</p>
// <p>Loop: {animations.loop ? "true" : "false"}</p>
