import {
  CONTROLS_ACTIONS,
  defaultControlsSettings,
  easings,
  useControls,
} from "../../../context";
import { IconConfig } from "@/assets/svg";
import { Button, Subtitle, Title } from "@/shared/components/atoms";
import {
  InputRange,
  PickerStep,
  PickerWrapper,
  ScrollerWrapper,
} from "@/shared/components/molecules";
import { RangeWrapper } from "@/shared/components/molecules";

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
        <ScrollerWrapper subtitle={animations.easing} title="Easing:">
          {easings.map((gsapEasing) => (
            <Button
              key={gsapEasing}
              isActive={gsapEasing === animations.easing}
              text={gsapEasing}
              onClick={() =>
                dispatch({
                  type: CONTROLS_ACTIONS.ANIMATIONS,
                  payload: {
                    easing: gsapEasing,
                  },
                })
              }
            />
          ))}
        </ScrollerWrapper>
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
            min={0.0}
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
          <ScrollerWrapper subtitle={animations.easing} title="Easing:">
            {easings.map((gsapEasing) => (
              <Button
                key={gsapEasing}
                isActive={gsapEasing === animations.easing}
                text={gsapEasing}
                onClick={() =>
                  dispatch({
                    type: CONTROLS_ACTIONS.ANIMATIONS,
                    payload: {
                      easing: gsapEasing,
                    },
                  })
                }
              />
            ))}
          </ScrollerWrapper>
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
