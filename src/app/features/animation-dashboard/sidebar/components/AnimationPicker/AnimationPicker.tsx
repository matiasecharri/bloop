import {
  CONTROLS_ACTIONS,
  defaultControlsSettings,
  easings,
  useControls,
} from "../../../context";
import { IconConfig } from "@/assets/svg";
import { Button, Subtitle, Title } from "@/shared/components/atoms";
import {
  ButtonWrapper,
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
        <ScrollerWrapper
          isBtnDisabled={isAnimationDefault("easing")}
          subtitle={animations.easing}
          title="Easing:"
          onClick={() =>
            dispatch({
              type: CONTROLS_ACTIONS.ANIMATIONS,
              payload: { easing: defaultControlsSettings.animations.easing },
            })
          }
        >
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
          <InputRange
            isBtnDisabled={isAnimationDefault("repeat")}
            label="Repeat"
            max={10}
            min={-1}
            step={1}
            unit={
              animations.repeat === -1
                ? "Loop"
                : animations.repeat === 1
                ? "Time"
                : "Times"
            }
            value={animations.repeat}
            onChange={(e) =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: { repeat: Number(e.target.value) },
              })
            }
            onClick={() =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: {
                  repeat: defaultControlsSettings.animations.repeat,
                },
              })
            }
          />

          {/* <InputRange
            isBtnDisabled={isAnimationDefault("yoyo")}
            label="Yoyo"
            max={1}
            min={0}
            step={1}
            unit={animations.yoyo ? "Enabled" : "Disabled"}
            value={Number(animations.yoyo)}
            onChange={(e) =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: { yoyo: Boolean(e.target.value) },
              })
            }
            onClick={() =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: {
                  yoyo: defaultControlsSettings.animations.yoyo,
                },
              })
            }
          /> */}

          <ButtonWrapper
            title="Yoyo:"
            subtitle={animations.yoyo ? "activated" : "deactivated"}
          >
            <Button
              isActive={animations.yoyo}
              text="On"
              onClick={() => {
                dispatch({
                  type: CONTROLS_ACTIONS.ANIMATIONS,
                  payload: { yoyo: true },
                });
              }}
            />

            <Button
              isActive={!animations.yoyo}
              text="Off"
              onClick={() => {
                dispatch({
                  type: CONTROLS_ACTIONS.ANIMATIONS,
                  payload: { yoyo: false },
                });
              }}
            />
          </ButtonWrapper>

          <ScrollerWrapper
            isBtnDisabled={isAnimationDefault("easing")}
            subtitle={animations.easing}
            title="Easing:"
            onClick={() =>
              dispatch({
                type: CONTROLS_ACTIONS.ANIMATIONS,
                payload: { easing: defaultControlsSettings.animations.easing },
              })
            }
          >
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
